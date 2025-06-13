// File: /public/stories/gema_cipta_asih.js (Versi 3.0 - Hybrid)

export const storyData = {
  start: {
    title: "Gema di Desa Cipta Asih",
    image: "/assets/scenes/adegan_desa_damai.jpeg",
    text: "Bulan-bulan damai berlalu, namun ketenangan itu terasa ganjil. Kau, Arya, merasakan ada yang salah. Kau memutuskan untuk menyelidiki sumber dari riak-riak aneh yang mengganggu desa. Dari mana kau akan memulai investigasi?",
    choices: [
      // Pilihan-pilihan ini akan memicu AI untuk membuat adegan selanjutnya secara unik
      {
        text: "Selidiki sumber air sungai yang katanya terasa aneh.",
        generateScene: true, // Tanda untuk memanggil AI
        prompt:
          "Pemain (Arya) memilih untuk pergi ke tepi sungai karena mendengar kabar airnya terasa aneh. Deskripsikan apa yang ia temukan di sana, suasana ganjilnya, dan petunjuk apa yang mungkin ia lihat.",
      },
      {
        text: "Bicara dengan para petani di sawah yang mengeluh panennya layu.",
        generateScene: true,
        prompt:
          "Pemain (Arya) memilih untuk mengunjungi sawah-sawah. Deskripsikan kondisi sawah yang aneh dan buatlah percakapan antara Arya dengan seorang petani tua yang resah mengenai fenomena ini.",
      },
      {
        text: "Pergi ke Hutan Larangan, tempat bisikan aneh sering terdengar.",
        generateScene: true,
        prompt:
          "Pemain (Arya) memberanikan diri masuk ke Hutan Larangan yang terkenal angker. Deskripsikan suasana hutan yang mencekam dan jejak atau simbol aneh apa yang ia temukan di sana.",
      },
    ],
  },
  // Adegan statis sebagai tempat kembali atau tujuan dari adegan AI.
  // AI bisa diperintahkan untuk mengarahkan pemain kembali ke sini.
  static_kembali_ke_desa: {
    title: "Kembali ke Alun-alun Desa",
    image: "/assets/scenes/adegan_desa_damai.jpeg",
    text: "Kau kembali ke alun-alun desa untuk memikirkan langkah selanjutnya, membawa petunjuk baru dari petualanganmu. Ke mana sekarang?",
    choices: [
      {
        text: "Selidiki sumber air sungai lagi dengan petunjuk baru.",
        generateScene: true,
        prompt:
          "Setelah merenung, Arya memutuskan untuk memeriksa kembali area sungai. Dengan petunjuk yang sudah ia miliki, deskripsikan detail baru atau berbeda yang ia sadari kali ini.",
      },
      {
        text: "Hadapi para tetua desa dengan temuanmu.",
        generateScene: true,
        prompt:
          "Arya menemui para tetua desa dan menceritakan temuannya. Buat dialog di mana para tetua awalnya tidak percaya, namun salah satu dari mereka akhirnya menceritakan sebuah legenda kuno yang relevan.",
      },
    ],
  },
};
