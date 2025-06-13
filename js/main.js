// js/main.js

// =================================================================
// ENGINE GAME DINAMIS
// =================================================================

// Variabel global untuk menampung data cerita yang dimuat
let storyData = {}; 

// Koneksi Elemen HTML (tetap sama)
const mainContentElement = document.querySelector('main');
// ... (semua const document.getElementById Anda tetap di sini) ...
const sceneImageElement = document.getElementById('scene-image');
const sceneTitleElement = document.getElementById('scene-title');
const narrativeTextElement = document.getElementById('narrative-text');
const choicesAreaElement = document.getElementById('choices-area');
const inventoryListElement = document.getElementById('inventory-list');
const portraitContainer = document.getElementById('portrait-container');
const portraitImageElement = document.getElementById('portrait-image');
const itemModal = document.getElementById('item-modal');
const modalItemName = document.getElementById('modal-item-name');
const modalItemImage = document.getElementById('modal-item-image');
const modalCloseButton = document.getElementById('modal-close-button');

let playerInventory = [];

// Fungsi-fungsi (typewriterEffect, renderInventory, renderScene) tetap sama
// ... (Salin semua fungsi Anda dari file main.js sebelumnya di sini) ...

// =================================================================
// LOGIKA PEMUATAN CERITA (LOADER) - INI BAGIAN BARU
// =================================================================
async function initializeGame() {
    // 1. Dapatkan ID cerita dari URL (misal: "naga_runting")
    const params = new URLSearchParams(window.location.search);
    const storyId = params.get('story');

    if (!storyId) {
        // Jika tidak ada ID cerita, kembali ke dashboard
        window.location.href = 'index.html';
        return;
    }

    try {
        // 2. Impor file data cerita secara dinamis berdasarkan ID
        const storyModule = await import(`/stories/${storyId}.js`);
        storyData = storyModule.storyData; // Masukkan data yang diimpor ke variabel global

        // 3. Setelah data siap, mulai permainan
        renderInventory();
        renderScene('start');

    } catch (error) {
        console.error("Gagal memuat data cerita:", error);
        // Tampilkan pesan error kepada pemain
        document.body.innerHTML = `<div class="text-center p-10 text-red-500"><h1>Error: Gagal memuat file cerita.</h1><p>Pastikan file '/stories/${storyId}.js' ada.</p><a href="index.html" class="text-amber-400">Kembali ke Dashboard</a></div>`;
    }
}

// Event Listeners (tetap sama)
modalCloseButton.addEventListener('click', () => {
    itemModal.classList.add('hidden');
    itemModal.classList.remove('flex');
});

// Panggil fungsi inisialisasi untuk memulai semuanya
initializeGame();