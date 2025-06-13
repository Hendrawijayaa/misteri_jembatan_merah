import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// ENDPOINT BARU UNTUK GENERASI ADEGAN SECARA DINAMIS
app.post("/generate-scene", async (req, res) => {
  const { playerProfile, inventory, prompt } = req.body;

  const fullPrompt = `
    Anda adalah seorang Game Master (GM) untuk sebuah game detektif RPG.
    Tugas Anda adalah membuat sebuah objek JSON yang merepresentasikan adegan selanjutnya dalam cerita, berdasarkan pilihan pemain.

    KONTEKS CERITA:
    Pemain adalah Arya (${
      playerProfile.reputasi
    }), seorang pahlawan yang merasakan keanehan di desanya setelah menemukan Keris sakti. Dia sedang menyelidiki fenomena gaib ini.

    STATUS PEMAIN SAAT INI:
    - Inventaris Benda Fisik: ${
      inventory.items.length > 0
        ? inventory.items.map((i) => i.name).join(", ")
        : "Kosong"
    }
    - Catatan Investigasi (Petunjuk): ${
      inventory.clues.length > 0 ? inventory.clues.join(", ") : "Kosong"
    }

    PILIHAN YANG BARU SAJA DIAMBIL PEMAIN (INI ADALAH PROMPT ANDA):
    "${prompt}"

    TUGAS ANDA:
    Buat sebuah objek JSON valid yang memiliki properti: "title" (string, judul adegan yang dramatis), "image" (pilih salah satu dari daftar ini: "/assets/scenes/adegan_hutan_misterius.jpeg", "/assets/scenes/adegan_sungai_aneh.jpeg", "/assets/scenes/adegan_warga_resah.jpeg"), "text" (string, narasi adegan yang terjadi, minimal 3 kalimat), dan "choices" (sebuah array berisi 1 atau 2 objek, masing-masing dengan properti "text" dan "nextScene").
    
    Narasi (properti 'text') harus mendeskripsikan apa yang terjadi sebagai konsekuensi dari pilihan pemain. Buat semenarik mungkin.
    Pilihan (properti 'choices') harus logis dan memberikan opsi untuk melanjutkan cerita. Untuk properti "nextScene", gunakan format "static_NAMASCENE" untuk kembali ke adegan statis yang sudah ada (misal: "static_kembali_ke_desa").

    PENTING: Kembalikan HANYA objek JSON yang valid, tanpa teks atau format tambahan seperti \`\`\`json.

    Contoh format JSON yang harus Anda kembalikan:
    {
      "title": "Tepian Sungai yang Ganjil",
      "image": "/assets/scenes/adegan_sungai_aneh.jpeg",
      "text": "Arya tiba di tepi sungai. Air yang biasanya jernih kini tampak keruh dan kehijauan. Beberapa ikan kecil mengambang mati di permukaan, dan bau tanah basah yang aneh menguar di udara. Di seberang sungai, Arya melihat kilatan cahaya sesaat di antara rimbunnya Hutan Larangan.",
      "choices": [
        { "text": "Periksa ikan-ikan yang mati lebih dekat.", "nextScene": "static_kembali_ke_desa" },
        { "text": "Beranikan diri menyeberang menuju Hutan Larangan.", "nextScene": "static_kembali_ke_desa" }
      ]
    }
    `;

  try {
    const result = await model.generateContent(fullPrompt);
    const responseText = result.response.text();
    // Membersihkan respons AI untuk memastikan itu adalah JSON yang valid
    const sanitizedText = responseText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    const sceneObject = JSON.parse(sanitizedText);
    res.json(sceneObject);
  } catch (error) {
    console.error("Error saat generate adegan:", error);
    res.status(500).json({ error: "Gagal membuat kelanjutan cerita." });
  }
});

app.listen(port, () => {
  console.log(`Server AI Hybrid (v3.0) berjalan di http://localhost:${port}`);
});
// Export untuk testing purposes