// =================================================================
// DATABASE CERITA (VERSI DIPERPANJANG)
// =================================================================
// =================================================================
// DATABASE CERITA (VERSI EPIC)
// =================================================================
const storyData = {
    // =================================================================
    // BABAK 1: MISTERI DI JEMBATAN MERAH
    // =================================================================
    start: {
        title: "Jembatan Merah - 08:00 Pagi",
        image: "https://placehold.co/600x400/5a3921/FFF?text=Jembatan+Merah",
        text: "Pagi yang berkabut di Surabaya, 1935. Kamu, seorang jurnalis muda, tiba di Jembatan Merah yang ramai. Kabar angin berhembus kencang: Keris 'Naga Runting' milik Saudagar Rahman yang ternama hilang di sini semalam. Ini bisa jadi berita besar. Apa langkah pertamamu?",
        choices: [
            { text: "Cari saksi mata di antara kerumunan.", nextScene: "act1_cariSaksi" },
            { text: "Periksa lokasi terakhir keris itu terlihat, di tengah jembatan.", nextScene: "act1_periksaTKP" },
            { text: "Langsung pergi ke kantor polisi untuk laporan resmi.", nextScene: "act1_kePolisi" }
        ]
    },
    act1_cariSaksi: {
        title: "Kerumunan Jembatan Merah",
        image: "https://placehold.co/600x400/8c7a6b/FFF?text=Saksi+Mata",
        text: "Kamu bertanya pada beberapa pedagang. Kebanyakan hanya menggeleng. Namun seorang penjual jamu tua berbisik, 'Semalam ada keributan. Saya lihat seseorang lari ke arah selatan, menjatuhkan sesuatu yang berkilau...' Ia menunjuk ke selokan di tepi jembatan.",
        choices: [
            { text: "Periksa selokan itu.", nextScene: "act1_periksaSelokan" },
            { text: "Tanyakan lebih detail tentang orang yang lari.", nextScene: "act1_tanyaDetailSaksi" }
        ]
    },
    act1_tanyaDetailSaksi: {
        title: "Detail dari Penjual Jamu",
        image: "https://placehold.co/600x400/8c7a6b/FFF?text=Saksi+Mata+Bicara",
        text: "Ibu penjual jamu itu berpikir sejenak. 'Orangnya tinggi, kurus, dan larinya cepat sekali. Anehnya, dia tidak terlihat seperti penjahat... lebih seperti orang yang ketakutan. Dia lari ke arah selatan, menuju pemukiman padat.'",
        choices: [
            { text: "Terima kasih atas infonya. Saya akan periksa selokan yang Anda tunjuk tadi.", nextScene: "act1_periksaSelokan" },
            { text: "Apakah ibu mungkin kenal dengan orang itu?", nextScene: "act1_penjualTidakKenal" }
        ]
    },
    act1_penjualTidakKenal: {
        title: "Detail dari Penjual Jamu",
        image: "https://placehold.co/600x400/8c7a6b/FFF?text=Saksi+Mata+Bingung",
        text: "'Wah, kalau itu saya tidak tahu, Nak. Wajahnya tidak terlihat jelas dalam gelap.' Sepertinya informasi darinya sudah habis. Petunjuk terbaikmu saat ini adalah benda berkilau di selokan.",
        choices: [
            { text: "Baik, saya akan periksa selokan itu.", nextScene: "act1_periksaSelokan" }
        ]
    },
    act1_periksaTKP: {
        title: "Tengah Jembatan Merah",
        image: "https://placehold.co/600x400/718096/FFF?text=Tempat+Kejadian",
        text: "Area ini sudah ramai oleh pejalan kaki. Sulit menemukan apa pun. Namun, di antara sela-sela batu bata jembatan, kamu melihat selembar kain sutra yang mewah, terinjak dan kotor. Sepertinya ini kain pembungkus keris.",
        item: { name: "Kain Sutra Pembungkus", id: "kain_sutra" },
        choices: [
            { text: "Ambil kain itu dan cari petunjuk lain.", nextScene: "start" },
            { text: "Tunjukkan kain ini pada orang-orang sekitar.", nextScene: "act1_tunjukkanKain" }
        ]
    },
    act1_periksaSelokan: {
        title: "Tepi Jembatan Merah",
        image: "https://placehold.co/600x400/4a5568/FFF?text=Selokan",
        text: "Dengan sedikit ragu, kamu memeriksa selokan yang kotor. Tanganmu menyentuh benda logam dingin. Sebuah kunci tua yang sangat berkarat, tapi dengan ukiran naga kecil di pangkalnya. Ini pasti penting.",
        item: { name: "Kunci Berukir Naga", id: "kunci_naga" },
        choices: [
            { text: "Simpan kunci dan kembali mencari saksi.", nextScene: "act1_cariSaksi" },
        ]
    },
    act1_kePolisi: {
        title: "Kantor Polisi Kolonial",
        image: "https://placehold.co/600x400/a0aec0/000?text=Polisi+Kolonial",
        text: "Opsir Van der Berg menatapmu dengan bosan. 'Keris? Hanya sebilah pisau tua. Mungkin Saudagar Rahman hanya lupa menaruhnya,' katanya. 'Jika kamu mau bermain detektif, coba saja tanya-tanya di Toko Antik De Vreemde di kawasan Eropa. Pemiliknya, Liem, telinga saya di mana-mana.'",
        choices: [
            { text: "Pergi ke Toko Antik De Vreemde.", nextScene: "act2_keTokoAntik" },
            { text: "Merasa diremehkan, kamu memutuskan mencari sendiri.", nextScene: "start" }
        ]
    },

    // =================================================================
    // BABAK 2: JARINGAN KONSPIRASI
    // =================================================================
    act2_keTokoAntik: {
        title: "Toko Antik 'De Vreemde'",
        image: "https://placehold.co/600x400/744210/FFF?text=Toko+Antik",
        text: "Toko itu pengap, penuh artefak bisu. Liem, si pemilik toko, menyambutmu dengan senyum yang dipaksakan. Matanya licik. Apa yang akan kamu lakukan?",
        choices: [
            { text: "Tanya langsung tentang Keris Naga Runting.", nextScene: "act2_tanyaKerahasiaan" },
            { text: "Tunjukkan Kain Sutra Pembungkus. (Butuh item)", nextScene: "act2_toko_cekKain" }, // Nanti butuh logika
            { text: "Jelajahi tokonya, cari barang yang menarik.", nextScene: "act2_jelajahToko" }
        ]
    },
    act2_tanyaKerahasiaan: {
        title: "Toko Antik 'De Vreemde'",
        image: "https://placehold.co/600x400/744210/FFF?text=Liem+Bicara",
        text: "'Naga Runting?' Liem tertawa kecil. 'Itu hanya legenda, Tuan. Tapi... ada banyak kolektor kaya yang akan membayar mahal untuk legenda semacam itu. Salah satunya Tuan Hendrawan, dia sangat terobsesi mengalahkan Saudagar Rahman dalam segala hal.'",
        choices: [
            { text: "Siapa Tuan Hendrawan ini?", nextScene: "act2_infoHendrawan" },
            { text: "Terima kasih atas informasinya.", nextScene: "act2_keTokoAntik" }
        ]
    },
    act2_jelajahToko: {
        title: "Menjelajahi Toko",
        image: "https://placehold.co/600x400/b7791f/FFF?text=Lensa+Optik",
        text: "Di sebuah etalase terkunci, kamu melihat sebuah kotak berisi peralatan optik antik. Salah satunya adalah sebuah lensa cembung dengan bingkai kuningan yang aneh. Sepertinya tidak biasa.",
        item: { name: "Lensa Optik Aneh", id: "lensa_optik" },
        choices: [
            { text: "Tanyakan tentang lensa itu.", nextScene: "act2_tanyaLensa" },
            { text: "Abaikan saja, cari petunjuk lain.", nextScene: "act2_keTokoAntik" }
        ]
    },
    act2_infoHendrawan: {
        title: "Informasi Tuan Hendrawan",
        image: "https://placehold.co/600x400/c53030/FFF?text=Tuan+Hendrawan",
        text: "Liem menjelaskan bahwa Tuan Hendrawan adalah saudagar kaya baru yang sangat ambisius. Dia memiliki beberapa gudang di Pelabuhan Tanjung Perak. 'Orangnya kejam, Tuan. Hati-hati jika berurusan dengannya.'",
        choices: [
            { text: "Selidiki gudang Hendrawan di Tanjung Perak.", nextScene: "act2_kePelabuhan" }
        ]
    },
    act2_kePelabuhan: {
        title: "Pelabuhan Tanjung Perak",
        image: "https://placehold.co/600x400/4a5568/FFF?text=Pelabuhan",
        text: "Pelabuhan sibuk dengan aktivitas bongkar muat. Ada beberapa gudang besar milik Hendrawan. Semuanya dijaga ketat. Bagaimana caramu masuk?",
        choices: [
            { text: "Coba menyelinap di malam hari.", nextScene: "act2_menyelinapMalam" },
            { text: "Gunakan Kunci Berukir Naga. (Butuh item)", nextScene: "act2_bukaGudang" }, // Nanti butuh logika
            { text: "Cari informan di antara para kuli.", nextScene: "act2_tanyaKuli" }
        ]
    },
    act2_bukaGudang: {
        title: "Gudang Hendrawan",
        image: "https://placehold.co/600x400/2d3748/FFF?text=Gudang+Kosong",
        text: "Kunci Naga ternyata cocok dengan salah satu gembok pintu samping gudang! Kamu masuk. Di dalam gelap dan bau tembakau. Kamu menemukan jejak pertarungan dan sebuah surat perjanjian yang robek di lantai.",
        item: { name: "Surat Perjanjian Robek", id: "surat_robek" },
        choices: [
            { text: "Baca surat itu.", nextScene: "act3_bacaSurat" },
        ]
    },

    // =================================================================
    // BABAK 3: PENGKHIANATAN DAN KONFRONTASI
    // =================================================================
    act3_bacaSurat: {
        title: "Membaca Surat Perjanjian",
        image: "https://placehold.co/600x400/444/FFF?text=Surat+Perjanjian",
        text: "Surat itu ditulis dalam bahasa Belanda. Kamu berhasil menerjemahkan beberapa bagian: '...Hendrawan akan menyerahkan Naga Runting kepada V.S... imbalan... akses monopoli...'. V.S.? Siapa dia? Tiba-tiba kamu mendengar suara langkah kaki!",
        choices: [
            { text: "Sembunyi!", nextScene: "act3_sembunyiDiGudang" }
        ]
    },
    act3_sembunyiDiGudang: {
        title: "Bersembunyi!",
        image: "https://placehold.co/600x400/1a202c/FFF?text=Pria+Berpakaian+Hitam",
        text: "Kamu bersembunyi di balik tumpukan peti. Pintu terbuka, dan masuklah pria berpakaian hitam yang disebut oleh penjual kue! Dia terlihat panik dan terluka. Dia bukan seperti pencuri, lebih seperti orang yang sedang diburu.",
        choices: [
            { text: "Konfrontasi dia.", nextScene: "act3_konfrontasiPriaHitam" },
            { text: "Tetap bersembunyi dan lihat apa yang dia lakukan.", nextScene: "act3_mengintai" }
        ]
    },
    act3_konfrontasiPriaHitam: {
        title: "Konfrontasi",
        image: "https://placehold.co/600x400/555/FFF?text=Perbincangan",
        text: "'Siapa kamu?!' tanyanya, kaget. Setelah kamu jelaskan, dia menjadi lega. 'Nama saya Bayu. Saya pengawal Saudagar Rahman. Tuan Hendrawan mencuri keris itu, tapi dia dikhianati oleh mitranya dari Belanda, Meneer Van der Stel! Dia yang mengambil kerisnya sekarang! Van der Stel adalah sejarawan yang tinggal di vila di kawasan elite Darmo.'",
        choices: [
            { text: "Pergi ke Vila Van der Stel di Darmo.", nextScene: "act3_keVilla" }
        ]
    },
    act3_keVilla: {
        title: "Vila Van der Stel",
        image: "https://placehold.co/600x400/e2e8f0/000?text=Vila+Mewah",
        text: "Kamu dan Bayu tiba di sebuah vila mewah bergaya Eropa. Lampu menyala di salah satu jendela paviliun belakang. Sepertinya Van der Stel ada di sana. Ini adalah akhir dari perburuan.",
        choices: [
            { text: "Dobrak masuk dan hadapi dia. (Berisiko)", nextScene: "ending_buruk" },
            { text: "Gunakan Lensa Optik dan Keris untuk mengungkap rahasianya. (Butuh 2 item)", nextScene: "ending_baik" }, // Logika kompleks
            { text: "Panggil Opsir Van der Berg dan serahkan semua bukti.", nextScene: "ending_netral" }
        ]
    },
    
    // =================================================================
    // AKHIR CERITA
    // =================================================================
    ending_buruk: {
        title: "Gagal",
        image: "https://placehold.co/600x400/e53e3e/FFF?text=GAGAL",
        text: "Kamu dan Bayu mendobrak masuk, namun Van der Stel sudah siap. Penjaganya melumpuhkan kalian berdua. Kamu dituduh sebagai komplotan pencuri. Beritamu tidak pernah terbit, dan namamu tercoreng. Keris dan hartanya hilang selamanya.",
        choices: [{ text: "Coba Lagi?", nextScene: "start" }]
    },
    ending_netral: {
        title: "Keadilan yang Dingin",
        image: "https://placehold.co/600x400/a0aec0/000?text=KEADILAN",
        text: "Van der Berg dan pasukannya datang. Van der Stel ditangkap karena transaksi ilegal, dan keris itu disita oleh pemerintah kolonial sebagai 'aset negara'. Saudagar Rahman tidak pernah mendapatkannya kembali. Kamu mendapat berita utama, tapi rasanya hampa.",
        choices: [{ text: "Coba Lagi?", nextScene: "start" }]
    },
    ending_baik: {
        title: "Rahasia Terungkap",
        image: "https://placehold.co/600x400/f6e05e/000?text=BERHASIL",
        text: "Kamu berhasil mengkonfrontasi Van der Stel dengan semua bukti. Dengan menggunakan Lensa Optik pada Keris Naga Runting, sebuah peta bintang terpantul di dinding, menunjukkan lokasi harta karun Majapahit. Van der Stel ditangkap, keris kembali ke Saudagar Rahman, dan kamu mendapatkan cerita seumur hidup. Keadilan telah ditegakkan.",
        choices: [{ text: "Mulai Petualangan Baru?", nextScene: "start" }]
    }
};

// =================================================================
// STATUS PEMAIN
// =================================================================
let playerInventory = []; // INI BARU: "Kantong" untuk menyimpan item

// =================================================================
// KONEKSI ELEMEN HTML
// =================================================================
const sceneImageElement = document.getElementById('scene-image');
const sceneTitleElement = document.getElementById('scene-title');
const narrativeTextElement = document.getElementById('narrative-text');
const choicesAreaElement = document.getElementById('choices-area');
const inventoryListElement = document.getElementById('inventory-list');

// =================================================================
// FUNGSI-FUNGSI PERMAINAN
// =================================================================

/**
 * Fungsi ini menampilkan semua item di 'playerInventory' ke panel inventaris.
 */
function renderInventory() {
    // 1. Kosongkan daftar inventaris di HTML
    inventoryListElement.innerHTML = '';

    // 2. Jika inventaris kosong, tampilkan pesan
    if (playerInventory.length === 0) {
        inventoryListElement.innerHTML = '<li><p class="italic">Belum ada petunjuk.</p></li>';
        return; // Hentikan fungsi di sini
    }

    // 3. Jika ada item, buat elemen <li> untuk setiap item
    playerInventory.forEach(item => {
        const inventoryItem = document.createElement('li');
        inventoryItem.className = 'flex items-center space-x-3';
        // Kita gunakan template dari HTML yang sudah kita siapkan
        inventoryItem.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
            </svg>
            <span>${item.name}</span>
        `;
        inventoryListElement.appendChild(inventoryItem);
    });
}


/**
 * Fungsi inti yang menampilkan adegan cerita ke layar.
 */
function renderScene(sceneId) {
    const scene = storyData[sceneId];

    // LOGIKA INVENTARIS BARU
    // Cek apakah adegan ini memberikan item dan apakah item itu belum ada di inventaris
    if (scene.item && !playerInventory.find(invItem => invItem.id === scene.item.id)) {
        playerInventory.push(scene.item); // Tambahkan item ke "kantong"
        renderInventory(); // Perbarui tampilan inventaris di layar
    }

    sceneImageElement.src = scene.image;
    sceneTitleElement.innerText = scene.title;
    narrativeTextElement.innerText = scene.text;
    choicesAreaElement.innerHTML = '';

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'w-full text-left bg-slate-700 text-stone-200 py-3 px-5 rounded-lg shadow-md hover:bg-amber-600 hover:shadow-lg transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber-500';
        button.innerHTML = `<span class="font-semibold">${choice.text.substring(0, 2)}</span>${choice.text.substring(2)}`;
        button.addEventListener('click', () => {
            renderScene(choice.nextScene);
        });
        choicesAreaElement.appendChild(button);
    });
}

// =================================================================
// MEMULAI PERMAINAN
// =================================================================
renderInventory(); // Tampilkan kondisi awal inventaris (kosong)
renderScene('start'); // Tampilkan adegan awal