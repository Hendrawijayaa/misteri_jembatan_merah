// =================================================================
// ENGINE GAME DETEKTIF DINAMIS - VERSI 3.0.1 (HYBRID & PERBAIKAN)
// =================================================================

let storyData = {};
let playerInventory = [];
let knownClues = [];

// Variabel untuk mengontrol typewriter effect, mencegah tumpang tindih
let currentTypewriterTimeout;

// Koneksi elemen HTML
const mainContentElement = document.querySelector("main");
const sceneImageElement = document.getElementById("scene-image");
const sceneTitleElement = document.getElementById("scene-title");
const narrativeTextElement = document.getElementById("narrative-text");
const choicesAreaElement = document.getElementById("choices-area");
const inventoryListElement = document.getElementById("inventory-list");
const portraitContainer = document.getElementById("portrait-container");
const portraitImageElement = document.getElementById("portrait-image");
const itemModal = document.getElementById('item-modal');
const modalItemName = document.getElementById('modal-item-name');
const modalItemImage = document.getElementById('modal-item-image');
const modalCloseButton = document.getElementById('modal-close-button');


// Event listener untuk menutup modal item
modalCloseButton.addEventListener('click', () => {
    itemModal.classList.add('hidden');
    itemModal.classList.remove('flex');
});


// =================================================================
// FUNGSI-FUNGSI UTAMA GAME (LENGKAP & DIPERBAIKI)
// =================================================================

function typewriterEffect(element, text, speed = 20, onComplete = null) {
    // PERBAIKAN: Hentikan typewriter effect sebelumnya yang mungkin masih berjalan
    clearTimeout(currentTypewriterTimeout);

    element.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            // Simpan ID timeout agar bisa dihentikan nanti
            currentTypewriterTimeout = setTimeout(type, speed);
        } else if (onComplete) {
            onComplete();
        }
    }
    type();
}

function renderInventory() {
    inventoryListElement.innerHTML = '';
    let hasContent = false;

    if (playerInventory.length > 0) {
        hasContent = true;
        const itemHeader = document.createElement('h3');
        itemHeader.className = 'font-bold text-amber-500 mb-2 text-lg';
        itemHeader.innerText = 'Inventaris Petunjuk';
        inventoryListElement.appendChild(itemHeader);

        playerInventory.forEach(item => {
            const inventoryItemEl = document.createElement('li');
            inventoryItemEl.className = 'flex items-center space-x-3 cursor-pointer hover:bg-slate-700 p-2 -m-2 rounded-md transition-colors';
            inventoryItemEl.innerHTML = `<svg class="h-5 w-5 text-amber-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fill-rule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" /></svg><span>${item.name}</span>`;
            inventoryItemEl.addEventListener('click', () => {
                modalItemName.innerText = item.name;
                modalItemImage.src = `/assets/items/item_${item.id}.jpeg`;
                itemModal.classList.remove('hidden');
                itemModal.classList.add('flex');
            });
            inventoryListElement.appendChild(inventoryItemEl);
        });
    }

    if (knownClues.length > 0) {
        hasContent = true;
        const clueHeader = document.createElement('h3');
        clueHeader.className = 'font-bold text-sky-400 mt-4 mb-2 text-lg';
        clueHeader.innerText = 'Catatan Investigasi';
        inventoryListElement.appendChild(clueHeader);

        knownClues.forEach(clue => {
            const clueEl = document.createElement('li');
            clueEl.className = 'flex items-start space-x-3 p-2';
            clueEl.innerHTML = `<svg class="h-5 w-5 text-sky-400 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><p class="italic text-stone-300">${clue}</p>`;
            inventoryListElement.appendChild(clueEl);
        });
    }

    if (!hasContent) {
        inventoryListElement.innerHTML = '<li><p class="italic">Belum ada petunjuk.</p></li>';
    }
}

function renderScene(sceneId) {
    if (sceneId === 'dashboard') {
        window.location.href = 'index.html';
        return;
    }

    mainContentElement.classList.add('fade-out');

    setTimeout(() => {
        const scene = storyData[sceneId];
        if (!scene) {
            console.error(`Error: Scene with id "${sceneId}" not found! Kembali ke awal.`);
            renderScene('start');
            return;
        }

        if (sceneId === 'start') {
            knownClues = [];
            playerInventory = [];
        }

        if (scene.item && !playerInventory.find(invItem => invItem.id === scene.item.id)) {
            playerInventory.push(scene.item);
        }
        renderInventory();

        if (scene.portrait) {
            portraitImageElement.src = scene.portrait;
            portraitContainer.classList.remove('opacity-0');
        } else {
            portraitContainer.classList.add('opacity-0');
        }

        sceneImageElement.src = scene.image;
        sceneTitleElement.innerText = scene.title;
        typewriterEffect(narrativeTextElement, scene.text);
        choicesAreaElement.innerHTML = '';

        if (scene.isDynamic) {
            renderDynamicChoices(scene);
        } else {
            renderStaticChoices(scene);
        }

        mainContentElement.classList.remove('fade-out');
    }, 300);
}

function renderStaticChoices(scene) {
    if (!scene.choices) return;

    scene.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'w-full text-left bg-slate-700 text-stone-200 py-3 px-5 rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 choice-button-animate';
        button.style.animationDelay = `${index * 150}ms`;
        button.innerHTML = choice.text;

        // LOGIKA BARU: Membedakan jenis pilihan
        if (choice.generateScene) {
            // Pilihan yang memicu AI untuk membuat adegan baru
            button.className += ' hover:bg-sky-600 hover:shadow-lg active:scale-[0.98]';
            button.addEventListener('click', () => handleSceneGeneration(choice));
        } else {
            // Pilihan statis biasa
            const hasRequiredItem = !choice.requiredItem || playerInventory.find(item => item.id === choice.requiredItem);
            if (hasRequiredItem) {
                button.className += ' hover:bg-amber-600 hover:shadow-lg active:scale-[0.98]';
                button.addEventListener('click', () => {
                    if (choice.nextScene) {
                        renderScene(choice.nextScene);
                    }
                });
            } else {
                button.disabled = true;
                button.className += ' opacity-50 cursor-not-allowed';
                const allItems = Object.values(storyData).map(s => s.item).filter(Boolean);
                const requiredItemObject = allItems.find(item => item.id === choice.requiredItem);
                if (requiredItemObject) {
                    button.innerHTML += ` (Butuh: ${requiredItemObject.name})`;
                }
            }
        }
        choicesAreaElement.appendChild(button);
    });
}


function renderDynamicChoices(scene) {
    // Fungsi ini untuk model dialog AI lama, tetap ada untuk kompatibilitas
    // Namun cerita 'gema_cipta_asih' versi baru tidak akan memanggil fungsi ini
    // ... (kode dari versi 2.0.1 bisa ditaruh di sini jika masih diperlukan) ...
    // Untuk saat ini kita biarkan kosong agar fokus ke model hybrid
}

async function handleSceneGeneration(choice) {
    // Fungsi baru untuk menangani permintaan pembuatan adegan oleh AI
    narrativeTextElement.innerText = "Dunia sedang bereaksi terhadap pilihanmu...";
    choicesAreaElement.innerHTML = '<p class="text-center italic text-stone-400">Takdir sedang ditulis...</p>';

    try {
        const response = await fetch('http://localhost:3000/generate-scene', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                playerProfile: { reputasi: "Pahlawan Penyelamat Desa" },
                inventory: { items: playerInventory, clues: knownClues },
                prompt: choice.prompt
            })
        });

        if (!response.ok) throw new Error('AI gagal merespons.');

        const newSceneData = await response.json();
        const newSceneId = `dynamic_${Date.now()}`;

        storyData[newSceneId] = newSceneData;
        renderScene(newSceneId);

    } catch (error) {
        console.error("Gagal generate adegan:", error);
        narrativeTextElement.innerText = "Jalan cerita buntu, takdir menolak untuk berlanjut. Coba jalan lain dari awal.";
        const backButton = document.createElement('button');
        backButton.className = 'w-full text-left bg-red-700 text-white py-3 px-5 rounded-lg hover:bg-red-600';
        backButton.innerText = 'Kembali ke Awal Cerita';
        backButton.onclick = () => renderScene('start');
        choicesAreaElement.innerHTML = '';
        choicesAreaElement.appendChild(backButton);
    }
}

async function initializeGame() {
    const params = new URLSearchParams(window.location.search);
    const storyId = params.get('story');

    if (!storyId) {
        window.location.href = 'index.html';
        return;
    }

    try {
        const storyModule = await import(`/stories/${storyId}.js`);
        storyData = storyModule.storyData;
        renderScene('start');
    } catch (error) {
        console.error("Gagal memuat data cerita:", error);
        document.body.innerHTML = `<div class="text-center p-10 text-red-500"><h1>Error: Gagal memuat file cerita.</h1><p>Pastikan file '/stories/${storyId}.js' ada dan tidak ada error di dalamnya.</p><a href="index.html" class="text-amber-400 underline">Kembali ke Dashboard</a></div>`;
    }
}

// Panggil fungsi inisialisasi untuk memulai semuanya
initializeGame();