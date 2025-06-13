// File: /stories/naga_runting.js
// File ini hanya berisi data untuk satu cerita spesifik.

export const storyData = {
    start: {
        title: "Jembatan Merah - 08:00 Pagi",
        image: "/assets/scenes/adegan_jembatan_merah.jpeg",
        text: "Pagi yang berkabut di Surabaya, 1935. Kamu, seorang jurnalis muda, tiba di Jembatan Merah yang ramai. Kabar angin berhembus kencang: Keris 'Naga Runting' milik Saudagar Rahman yang ternama hilang di sini semalam. Ini bisa jadi berita besar. Apa langkah pertamamu?",
        choices: [
            { text: "Cari saksi mata di antara kerumunan.", nextScene: "act1_cariSaksi" },
            { text: "Periksa lokasi terakhir keris itu terlihat, di tengah jembatan.", nextScene: "act1_periksaTKP" },
            { text: "Langsung pergi ke kantor polisi untuk laporan resmi.", nextScene: "act1_kePolisi" }
        ]
    },
    act1_cariSaksi: {
        title: "Kerumunan Jembatan Merah",
        image: "/assets/scenes/adegan_saksi_jamu.jpeg",
        portrait: "/assets/portraits/portrait_saksi_jamu.jpeg",
        text: "Kamu bertanya pada beberapa pedagang. Kebanyakan hanya menggeleng. Namun seorang penjual jamu tua berbisik, 'Semalam ada keributan. Saya lihat seseorang lari ke arah selatan, menjatuhkan sesuatu yang berkilau...' Ia menunjuk ke selokan di tepi jembatan.",
        choices: [
            { text: "Periksa selokan itu.", nextScene: "act1_periksaSelokan" },
            { text: "Tanyakan lebih detail tentang orang yang lari.", nextScene: "act1_tanyaDetailSaksi" }
        ]
    },
    act1_tanyaDetailSaksi: {
        title: "Detail dari Penjual Jamu",
        image: "/assets/scenes/adegan_saksi_jamu.jpeg",
        portrait: "/assets/portraits/portrait_saksi_jamu.jpeg",
        text: "Ibu penjual jamu itu berpikir sejenak. 'Orangnya tinggi, kurus, dan larinya cepat sekali. Anehnya, dia tidak terlihat seperti penjahat... lebih seperti orang yang ketakutan. Dia lari ke arah selatan, menuju pemukiman padat.'",
        choices: [
            { text: "Terima kasih atas infonya. Saya akan periksa selokan yang Anda tunjuk tadi.", nextScene: "act1_periksaSelokan" },
            { text: "Apakah ibu mungkin kenal dengan orang itu?", nextScene: "act1_penjualTidakKenal" }
        ]
    },
    act1_penjualTidakKenal: {
        title: "Detail dari Penjual Jamu",
        image: "/assets/scenes/adegan_saksi_jamu.jpeg",
        portrait: "/assets/portraits/portrait_saksi_jamu.jpeg",
        text: "'Wah, kalau itu saya tidak tahu, Nak. Wajahnya tidak terlihat jelas dalam gelap.' Sepertinya informasi darinya sudah habis. Petunjuk terbaikmu saat ini adalah benda berkilau di selokan.",
        choices: [
            { text: "Baik, saya akan periksa selokan itu.", nextScene: "act1_periksaSelokan" }
        ]
    },
    act1_periksaTKP: {
        title: "Tengah Jembatan Merah",
        image: "/assets/scenes/adegan_lihat_kain.jpeg",
        text: "Area ini sudah ramai oleh pejalan kaki. Sulit menemukan apa pun. Namun, di antara sela-sela batu bata jembatan, kamu melihat selembar kain sutra yang mewah, terinjak dan kotor. Sepertinya ini kain pembungkus keris.",
        item: { name: "Kain Sutra Pembungkus", id: "kain_sutra" },
        choices: [
            { text: "Ambil kain itu dan cari petunjuk lain.", nextScene: "start" },
            { text: "Tunjukkan kain ini pada orang-orang sekitar.", nextScene: "act1_tunjukkanKain" }
        ]
    },
    act1_tunjukkanKain: {
        title: "Menunjukkan Kain Sutra",
        image: "/assets/scenes/adegan_lihat_kain.jpeg",
        text: "Kamu menunjukkan kain itu pada beberapa pedagang. Seorang penjual parfum mengenali aroma samar yang tertinggal di kain itu. 'Ini parfum mahal dari Eropa, Tuan. Hanya orang-orang kaya seperti Tuan Hendrawan yang memakainya di kota ini.'",
        choices: [{ text: "Selidiki Tuan Hendrawan.", nextScene: "act2_infoHendrawan" }]
    },
    act1_periksaSelokan: {
        title: "Tepi Jembatan Merah",
        image: "/assets/scenes/adegan_temukan_kunci.jpeg",
        text: "Dengan sedikit ragu, kamu memeriksa selokan yang kotor. Tanganmu menyentuh benda logam dingin. Sebuah kunci tua yang sangat berkarat, tapi dengan ukiran naga kecil di pangkalnya. Ini pasti penting. Apa yang akan kamu lakukan dengan kunci ini?",
        item: { name: "Kunci Berukir Naga", id: "kunci_naga" },
        choices: [
            { text: "Selidiki gudang di Pelabuhan Tanjung Perak.", nextScene: "act2_kePelabuhan" },
            { text: "Tunjukkan kunci ini pada ahli kunci di kota.", nextScene: "act1_keAhliKunci" },
            { text: "Abaikan kunci ini, kembali cari petunjuk lain.", nextScene: "start" }
        ]
    },
    act1_keAhliKunci: {
        title: "Toko Ahli Kunci",
        image: "/assets/scenes/adegan_toko_antik_masuk.jpeg",
        text: "Kamu membawa kunci itu ke seorang ahli kunci tua di Pecinan. Dia memeriksanya dengan teliti. 'Hmm, kunci seperti ini sudah jarang dibuat,' katanya. 'Gaya ukiran naga ini khas untuk gembok-gembok gudang besar di Pelabuhan Tanjung Perak. Mungkin milik salah satu saudagar besar di sana.'",
        choices: [
            { text: "Terima kasih. Aku akan ke Pelabuhan.", nextScene: "act2_kePelabuhan" }
        ]
    },
    act1_kePolisi: {
        title: "Kantor Polisi Kolonial",
        image: "/assets/scenes/adegan_kantor_polisi.jpeg",
        portrait: "/assets/portraits/portrait_vanderberg.jpeg",
        text: "Opsir Van der Berg menatapmu dengan bosan. 'Keris? Hanya sebilah pisau tua. Mungkin Saudagar Rahman hanya lupa menaruhnya,' katanya. 'Jika kamu mau bermain detektif, coba saja tanya-tanya di Toko Antik De Vreemde di kawasan Eropa. Pemiliknya, Liem, telinga saya di mana-mana.'",
        choices: [
            { text: "Pergi ke Toko Antik De Vreemde.", nextScene: "act2_keTokoAntik" },
            { text: "Merasa diremehkan, kamu memutuskan mencari sendiri.", nextScene: "start" }
        ]
    },
    act2_keTokoAntik: {
        title: "Toko Antik 'De Vreemde'",
        image: "/assets/scenes/adegan_toko_antik_masuk.jpeg",
        portrait: "/assets/portraits/portrait_liem_netral.jpeg",
        text: "Toko itu pengap, penuh artefak bisu. Liem, si pemilik toko, menyambutmu dengan senyum yang dipaksakan. Matanya licik. Apa yang akan kamu lakukan?",
        choices: [
            { text: "Tanya langsung tentang Keris Naga Runting.", nextScene: "act2_tanyaKerahasiaan" },
            { text: "Tunjukkan Kain Sutra Pembungkus.", requiredItem: "kain_sutra", nextScene: "act2_toko_cekKain" },
            { text: "Jelajahi tokonya, cari barang yang menarik.", nextScene: "act2_jelajahToko" }
        ]
    },
    act2_toko_cekKain: {
        title: "Toko Antik 'De Vreemde'",
        image: "/assets/scenes/adegan_toko_antik_liem.jpeg",
        portrait: "/assets/portraits/portrait_liem_gugup.jpeg",
        text: "Kamu mengeluarkan kain sutra itu. Mata Liem melebar sesaat sebelum ia berhasil menguasai diri. 'Itu... itu milik Saudagar Rahman. Saya tahu karena saya yang menjualnya padanya. Jika Anda menemukannya, berarti Anda terlibat masalah besar.'",
        choices: [{ text: "Tekan dia untuk informasi lebih lanjut.", nextScene: "act2_infoHendrawan" }]
    },
    act2_tanyaKerahasiaan: {
        title: "Toko Antik 'De Vreemde'",
        image: "/assets/scenes/adegan_toko_antik_liem.jpeg",
        portrait: "/assets/portraits/portrait_liem_netral.jpeg",
        text: "'Naga Runting?' Liem tertawa kecil. 'Itu hanya legenda, Tuan. Tapi... ada banyak kolektor kaya yang akan membayar mahal untuk legenda semacam itu. Salah satunya Tuan Hendrawan, dia sangat terobsesi mengalahkan Saudagar Rahman dalam segala hal.'",
        choices: [
            { text: "Siapa Tuan Hendrawan ini?", nextScene: "act2_infoHendrawan" },
        ]
    },
    act2_jelajahToko: {
        title: "Menjelajahi Toko",
        image: "/assets/scenes/adegan_lensa_optik.jpeg",
        text: "Di sebuah etalase terkunci, kamu melihat sebuah kotak berisi peralatan optik antik. Salah satunya adalah sebuah lensa cembung dengan bingkai kuningan yang aneh. Sepertinya tidak biasa.",
        item: { name: "Lensa Optik Aneh", id: "lensa_optik" },
        choices: [
            { text: "Tanyakan tentang lensa itu.", nextScene: "act2_tanyaLensa" },
            { text: "Kembali bicara dengan Liem.", nextScene: "act2_keTokoAntik" }
        ]
    },
    act2_tanyaLensa: {
        title: "Toko Antik 'De Vreemde'",
        image: "/assets/scenes/adegan_lensa_optik.jpeg",
        portrait: "/assets/portraits/portrait_liem_netral.jpeg",
        text: "'Oh, yang itu?' Liem mengibaskan tangannya. 'Hanya kaca tua dari Jerman, tidak ada gunanya. Tapi jika Tuan tertarik, saya bisa berikan harga bagus.' Sikapnya yang terlalu meremehkan membuatmu curiga ada sesuatu yang spesial dari lensa ini.",
        choices: [
            { text: "Aku akan memikirkannya. (Kembali menjelajah toko)", nextScene: "act2_keTokoAntik" }
        ]
    },
    act2_infoHendrawan: {
        title: "Informasi Tuan Hendrawan",
        image: "/assets/scenes/adegan_toko_antik_liem.jpeg",
        portrait: "/assets/portraits/portrait_liem_netral.jpeg",
        text: "Liem menjelaskan bahwa Tuan Hendrawan adalah saudagar kaya baru yang sangat ambisius. Dia memiliki beberapa gudang di Pelabuhan Tanjung Perak. 'Orangnya kejam, Tuan. Hati-hati jika berurusan dengannya.'",
        choices: [
            { text: "Selidiki gudang Hendrawan di Tanjung Perak.", nextScene: "act2_kePelabuhan" }
        ]
    },
    act2_kePelabuhan: {
        title: "Pelabuhan Tanjung Perak",
        image: "/assets/scenes/adegan_pelabuhan.jpeg",
        text: "Pelabuhan sibuk dengan aktivitas bongkar muat. Ada beberapa gudang besar milik Hendrawan. Semuanya dijaga ketat. Bagaimana caramu masuk?",
        choices: [
            { text: "Coba menyelinap di malam hari.", nextScene: "act2_menyelinapMalam" },
            { text: "Gunakan Kunci Berukir Naga.", requiredItem: "kunci_naga", nextScene: "act2_bukaGudang" },
            { text: "Cari informan di antara para kuli.", nextScene: "act2_tanyaKuli" }
        ]
    },
     act2_tanyaKuli: {
        title: "Berbincang dengan Kuli Pelabuhan",
        image: "/assets/scenes/adegan_pelabuhan.jpeg",
        text: "Kamu mencoba bertanya pada beberapa kuli angkut. Saat mendengar nama 'Hendrawan', mereka semua langsung diam dan pergi. Sepertinya reputasi Hendrawan membuat semua orang takut untuk bicara. Tidak ada informasi yang bisa didapat di sini.",
        choices: [
            { text: "Cari cara lain untuk masuk ke gudang.", nextScene: "act2_kePelabuhan" }
        ]
    },
    act2_menyelinapMalam: {
        title: "Menyelinap di Malam Hari",
        image: "/assets/scenes/adegan_pelabuhan.jpeg",
        text: "Kamu kembali ke pelabuhan saat gelap. Ternyata penjagaannya dua kali lebih ketat di malam hari, dengan anjing penjaga yang galak. Upayamu sia-sia dan terlalu berisiko. Kamu harus mencari cara lain.",
        choices: [
            { text: "Kembali ke kota.", nextScene: "start" }
        ]
    },
    act2_bukaGudang: {
        title: "Gudang Hendrawan",
        image: "/assets/scenes/adegan_buka_gudang.jpeg",
        text: "Kunci Naga ternyata cocok dengan salah satu gembok pintu samping gudang! Kamu masuk. Di dalam gelap dan bau tembakau. Kamu menemukan jejak pertarungan dan sebuah surat perjanjian yang robek di lantai.",
        item: { name: "Surat Perjanjian Robek", id: "surat_robek" },
        choices: [
            { text: "Baca surat itu.", nextScene: "act3_bacaSurat" },
        ]
    },
    act3_bacaSurat: {
        title: "Membaca Surat Perjanjian",
        image: "/assets/scenes/adegan_surat_robek.jpeg",
        text: "Surat itu ditulis dalam bahasa Belanda. Kamu berhasil menerjemahkan beberapa bagian: '...Hendrawan akan menyerahkan Naga Runting kepada V.S... imbalan... akses monopoli...'. V.S.? Siapa dia? Tiba-tiba kamu mendengar suara langkah kaki!",
        choices: [
            { text: "Sembunyi!", nextScene: "act3_sembunyiDiGudang" }
        ]
    },
    act3_sembunyiDiGudang: {
        title: "Bersembunyi!",
        image: "/assets/scenes/adegan_buka_gudang.jpeg",
        text: "Kamu bersembunyi di balik tumpukan peti. Pintu terbuka, dan masuklah pria berpakaian hitam yang disebut oleh penjual kue! Dia terlihat panik dan terluka. Dia bukan seperti pencuri, lebih seperti orang yang sedang diburu.",
        choices: [
            { text: "Konfrontasi dia.", nextScene: "act3_konfrontasiPriaHitam" },
            { text: "Tetap bersembunyi dan lihat apa yang dia lakukan.", nextScene: "act3_mengintai" }
        ]
    },
     act3_mengintai: {
        title: "Mengintai dari Balik Peti",
        image: "/assets/scenes/adegan_buka_gudang.jpeg",
        text: "Kamu tetap diam. Bayu, pria itu, tampak mencari sesuatu dengan panik di dalam gudang. Dia bergumam, 'Di mana surat itu? Tanpa itu, Tuan Rahman dalam bahaya.' Dia kemudian pergi dengan tangan hampa. Kamu menyadari surat yang kamu temukan adalah yang dia cari.",
        choices: [{ text: "Sekarang aman, baca surat itu.", nextScene: "act3_bacaSurat" }]
    },
    act3_konfrontasiPriaHitam: {
        title: "Konfrontasi",
        image: "/assets/scenes/adegan_buka_gudang.jpeg",
        portrait: "/assets/portraits/portrait_bayu_setia.jpeg",
        text: "'Siapa kamu?!' tanyanya, kaget. Setelah kamu jelaskan, dia menjadi lega. 'Nama saya Bayu. Saya pengawal Saudagar Rahman. Tuan Hendrawan mencuri keris itu, tapi dia dikhianati oleh mitranya dari Belanda, Meneer Van der Stel! Dia yang mengambil kerisnya sekarang! Van der Stel adalah sejarawan yang tinggal di vila di kawasan elite Darmo.'",
        choices: [
            { text: "Pergi ke Vila Van der Stel di Darmo.", nextScene: "act3_keVilla" }
        ]
    },
    act3_keVilla: {
        title: "Vila Van der Stel",
        image: "/assets/scenes/adegan_villa_darmo.jpeg",
        text: "Kamu dan Bayu tiba di sebuah vila mewah bergaya Eropa. Lampu menyala di salah satu jendela paviliun belakang. Sepertinya Van der Stel ada di sana. Ini adalah akhir dari perburuan.",
        choices: [
            { text: "Dobrak masuk dan hadapi dia. (Berisiko)", nextScene: "ending_buruk" },
            { text: "Gunakan Lensa Optik untuk mengintai.", requiredItem: "lensa_optik", nextScene: "ending_baik" },
            { text: "Panggil Opsir Van der Berg dan serahkan semua bukti.", nextScene: "ending_netral" }
        ]
    },
    ending_buruk: {
        title: "Gagal",
        image: "/assets/scenes/ending_gagal.jpeg",
        text: "Kamu dan Bayu mendobrak masuk, namun Van der Stel sudah siap. Penjaganya melumpuhkan kalian berdua. Kamu dituduh sebagai komplotan pencuri. Beritamu tidak pernah terbit, dan namamu tercoreng. Keris dan hartanya hilang selamanya.",
        choices: [{ text: "Kembali ke Arsip Kasus", nextScene: "dashboard" }]
    },
    ending_netral: {
        title: "Keadilan yang Dingin",
        image: "/assets/scenes/ending_netral.jpeg",
        text: "Van der Berg dan pasukannya datang. Van der Stel ditangkap karena transaksi ilegal, dan keris itu disita oleh pemerintah kolonial sebagai 'aset negara'. Saudagar Rahman tidak pernah mendapatkannya kembali. Kamu mendapat berita utama, tapi rasanya hampa.",
        choices: [{ text: "Kembali ke Arsip Kasus", nextScene: "dashboard" }]
    },
    ending_baik: {
        title: "Rahasia Terungkap",
        image: "/assets/scenes/ending_berhasil.jpeg",
        text: "Dengan Lensa Optik, kamu melihat dari kejauhan Van der Stel sedang mencoba memecahkan rahasia keris. Informasi ini, ditambah semua bukti lain, cukup untuk membuat Van der Berg bertindak. Van der Stel ditangkap, keris kembali ke Saudagar Rahman, dan kamu mendapatkan cerita seumur hidup.",
        choices: [{ text: "Kembali ke Arsip Kasus", nextScene: "dashboard" }]
    }
};