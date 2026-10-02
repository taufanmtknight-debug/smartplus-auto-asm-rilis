// ==UserScript==
// @name         Smartplus ASM GADAR - Chrome + Firefox Violentmonkey Compatible v3.6.0
// @namespace    smartplus-auto-asm-v221
// @version      3.6.0
// @description  v3.6.0: AUTO RO THORAX (order radiologi Thorax PA/AP, diagnosis dari GADAR terakhir, Save otomatis). v3.5.0: alamat server tidak lagi ditulis di script (hanya aktif di halaman SmartPlus); data pasien contoh dihapus dari komentar. v3.4.1: alamat update pindah ke repo rilis publik (repo sumber akan privat). v3.4.0: AUTO LAB mengisi diagnosis dari Assesment GADAR terakhir kunjungan ini. v3.3.0: Simpan otomatis Resep Tindakan hanya menekan tombol simpan resep (#butt_simpan_resep), tidak lagi tombol 'Simpan' sembarang. v3.2.3: resep satu keluhan tidak lagi menduplikasi obat yang sudah ada di draft. v3.2.2: CPPT memakai ID tetap Smartplus, aman saat form sudah terbuka, tidak pernah klik TAMBAH Lab/Rad. v3.2.1: CPPT memakai ID tetap Smartplus (tidak salah klik TAMBAH Lab/Rad). v3.2.0: tanda vital CPPT menyesuaikan usia (neonatus s.d. dewasa), TD tidak diisi untuk bayi/anak. v3.1.2: perbaikan klik tab E-RANAP (bukan breadcrumb) dan klik elemen terdalam. v3.1.1: CPPT lebih stabil (klik teks tepat, tidak salah klik, tunggu form baru, anti dobel-klik). v3.1: sebelum membuka CPPT otomatis klik E-Ranap terlebih dahulu agar pilihan CPPT muncul; tersedia CPPT Normal dan CPPT Rencana Pulang.

// @author       OpenAI
// @match        http://*/*
// @match        https://*/*
// @run-at       document-idle
// @inject-into   auto
// @noframes
// @updateURL    https://raw.githubusercontent.com/taufanmtknight-debug/smartplus-auto-asm-rilis/main/Smartplus_AUTO_ASM.user.js
// @downloadURL  https://raw.githubusercontent.com/taufanmtknight-debug/smartplus-auto-asm-rilis/main/Smartplus_AUTO_ASM.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // v3.5.0: alamat server Smartplus tidak lagi ditulis di script publik.
  // @match dibuat umum, lalu script LANGSUNG berhenti jika halaman bukan Smartplus.
  // Halaman Smartplus dikenali dari judul tab ("SmartPlus", "SmartPlus - Auth")
  // atau alamat yang mengandung "/smartplus/". Di situs lain script tidak melakukan apa pun.
  function isSmartplusPage() {
    try {
      if (/\/smartplus(\/|$)/i.test(location.pathname)) return true;
      if (/^\s*smart\s*plus\b/i.test(document.title || "")) return true;
    } catch (_) {}
    return false;
  }
  if (!isSmartplusPage()) return;

  const BUTTON_ID = "sp-auto-asm-btn-v268";
  const MENU_ID = "sp-auto-asm-menu-v268";
  // v3.1.1: penanda agar AUTO CPPT tidak berjalan dua kali bersamaan (dobel klik).
  let spCpptBusy = false;
  const STYLE_ID = "sp-auto-asm-style-v268";
  const STATUS_ID = "sp-auto-asm-status-v268";

  const TEMPLATES = {
    BP: {
      keluhan: "Batuk disertai rasa sesak",
      vital: {
        td: "128/76",
        tdSysMin: 120,
        tdSysMax: 135,
        tdDiaMin: 70,
        tdDiaMax: 82,
        nadiMin: 121,
        nadiMax: 135,
        rr: "29", suhu: "40,2",
        spo2: "92"
      },
      nyeri: "6",
      gcs: "15",
      fisik:
        "Kep: ca -/-, si -/-\nTh: rh +, wh -/-, retraksi -, murmur -\nAbd: bu +, soefl, nte -\nExt: akral hangat, crt 2 detik, edema pretibial -",
      penunjang: "Darah rutin.",
      diagnosis: "Bronkopneumonia",
      terapi: "Darah rutin.",
      masalahKesehatan:
        "Infeksi saluran pernapasan bawah disertai demam tinggi, batuk, dan sesak napas.",
      masalahKeperawatan: "Gangguan bersihan jalan napas dan hipertermia.",
      rencanaKeperawatan:
        "Monitor tanda vital dan status respirasi, saturasi oksigen, pola napas, suhu tubuh, serta kolaborasi terapi.",
      edukasi:
        "Edukasi mengenai penyakit, terapi, kepatuhan pengobatan, dan tanda bahaya.",
      discharge: "Tidak",
      kondisiKeluar: "Pindah/Rujuk",
      tindakLanjut: "Rawat inap untuk observasi dan terapi lanjutan."
    },

    GEA: {
      keluhan:
        "Buang air besar cair berulang disertai mual, muntah, dan demam tinggi.",
      vital: {
        td: "105/68",
        tdSysMin: 100,
        tdSysMax: 112,
        tdDiaMin: 62,
        tdDiaMax: 74,
        nadiMin: 121,
        nadiMax: 132,
        rr: "22",
        suhu: "40,1",
        spo2: "98"
      },
      nyeri: "7",
      gcs: "15",
      fisik:
        "Kep: ca -/-, si -/-, mukosa mulut kering\nTh: rh -/-, wh -/-, retraksi -, murmur -\nAbd: bu +, soefl, nte +, turgor kulit menurun\nExt: akral hangat, crt 2 detik",
      penunjang: "Darah rutin.",
      diagnosis: "Gastroenteritis akut",
      terapi: "Darah rutin.",
      masalahKesehatan:
        "Gastroenteritis akut disertai diare, muntah, demam tinggi, dan risiko dehidrasi.",
      masalahKeperawatan: "Risiko defisit volume cairan.",
      rencanaKeperawatan:
        "Monitor tanda vital, frekuensi BAB dan muntah, tanda dehidrasi, keseimbangan cairan, serta kolaborasi terapi cairan.",
      edukasi:
        "Edukasi mengenai kebutuhan cairan, kebersihan makanan, tanda dehidrasi, dan tanda bahaya.",
      discharge: "Ya",
      kondisiKeluar: "Sembuh",
      tindakLanjut: "Kontrol rawat jalan bila keluhan berlanjut atau memburuk."
    },

    ABDOMINAL: {
      keluhan: "Nyeri perut.",
      vital: {
        td: "136/84",
        tdSysMin: 128,
        tdSysMax: 145,
        tdDiaMin: 76,
        tdDiaMax: 90,
        nadiMin: 121,
        nadiMax: 130,
        rr: "21",
        suhu: "37,2",
        spo2: "98"
      },
      nyeri: "7",
      gcs: "15",
      fisik:
        "Kep: ca -/-, si -/-\nTh: rh -/-, wh -/-, retraksi -, murmur -\nAbd: bu +, soefl, nte +\nExt: akral hangat, crt 2 detik",
      penunjang: "Darah rutin.",
      diagnosis: "Abdominal pain",
      terapi: "Darah rutin.",
      masalahKesehatan: "Nyeri perut akut.",
      masalahKeperawatan: "Nyeri akut.",
      rencanaKeperawatan:
        "Monitor skala nyeri, tanda vital, respons terapi, perubahan kondisi abdomen, serta kolaborasi pemberian analgetik.",
      edukasi: "Edukasi mengenai kemungkinan penyebab nyeri dan tanda bahaya.",
      discharge: "Ya",
      kondisiKeluar: "Sembuh",
      tindakLanjut: "Kontrol rawat jalan bila keluhan menetap atau memberat."
    },

    CEPHALGIA: {
      keluhan: "Pusing, nyeri kepala berdenyut disertai mual.",
      vital: {
        td: "128/78",
        tdSysMin: 115,
        tdSysMax: 135,
        tdDiaMin: 70,
        tdDiaMax: 85,
        nadiMin: 121,
        nadiMax: 128,
        rr: "20",
        suhu: "36,8",
        spo2: "98"
      },
      nyeri: "7",
      gcs: "15",
      fisik:
        "Kep: ca -/-, si -/-, nyeri tekan perikranial +\nTh: rh -/-, wh -/-, retraksi -, murmur -\nAbd: bu +, soefl, nte -\nExt: akral hangat, crt 2 detik",
      penunjang: "Darah rutin.",
      diagnosis: "Cephalgia",
      terapi: "Darah rutin.",
      masalahKesehatan: "Nyeri kepala akut tanpa tanda defisit neurologis fokal.",
      masalahKeperawatan: "Nyeri akut.",
      rencanaKeperawatan:
        "Monitor tanda vital, skala nyeri, kesadaran, keluhan neurologis, serta respons terhadap terapi.",
      edukasi:
        "Edukasi mengenai istirahat cukup, hidrasi, pemantauan keluhan, dan tanda bahaya yang memerlukan evaluasi segera.",
      discharge: "Ya",
      kondisiKeluar: "Sembuh",
      tindakLanjut: "Kontrol rawat jalan bila keluhan menetap atau memberat."
    },

    KEJANG_DEMAM_ANAK: {
      keluhan: "Kejang disertai demam.",
      vital: {
        td: "",
        tdSysMin: 90,
        tdSysMax: 110,
        tdDiaMin: 50,
        tdDiaMax: 70,
        nadiMin: 120,
        nadiMax: 140,
        rrMin: 24,
        rrMax: 32,
        rr: "28",
        suhu: "40,5",
        spo2Min: 97,
        spo2Max: 100,
        spo2: "98"
      },
      nyeri: "0",
      gcs: "15",
      fisik:
        "Kep: ca -/-, si -/-\nTh: rh -/-, wh -/-, retraksi -, murmur -\nAbd: bu +, soefl, nte -\nExt: akral hangat, crt 2 detik\nNeurologis: kejang aktif -, kaku kuduk -, defisit neurologis fokal -",
      penunjang: "Darah rutin.",
      diagnosis: "Kejang demam anak",
      terapi: "Observasi, antipiretik, dan tatalaksana kejang sesuai kondisi klinis.",
      masalahKesehatan: "Kejang disertai demam pada anak.",
      masalahKeperawatan: "Risiko cedera dan hipertermia.",
      rencanaKeperawatan:
        "Monitor tanda vital, suhu tubuh, kesadaran, frekuensi dan durasi kejang, serta tanda bahaya.",
      edukasi:
        "Edukasi orang tua mengenai pertolongan pertama saat kejang, kontrol demam, kepatuhan terapi, dan tanda bahaya yang memerlukan evaluasi segera.",
      discharge: "Ya",
      kondisiKeluar: "Sembuh",
      tindakLanjut: "Kontrol sesuai kondisi klinis dan evaluasi lebih lanjut bila kejang berulang."
    },

    LBP: {
      keluhan: "Nyeri pinggang bagian bawah.",
      vital: {
        td: "135/88",
        tdSysMin: 125,
        tdSysMax: 145,
        tdDiaMin: 80,
        tdDiaMax: 95,
        nadiMin: 83,
        nadiMax: 100,
        rrMin: 25,
        rrMax: 30,
        rr: "27",
        suhu: "36,8",
        spo2Min: 97,
        spo2Max: 100,
        spo2: "98"
      },
      nyeri: "7",
      gcs: "15",
      fisik:
        "Kep: ca -/-, si -/-\nTh: rh -/-, wh -/-, retraksi -, murmur -\nAbd: bu +, soefl, nte -\nExt: akral hangat, crt 2 detik\nNeurologis: nyeri tekan regio lumbal +, paraparesis -, gangguan sensibilitas -, gangguan BAK/BAB -",
      penunjang: "Rontgen vertebra lumbosakral.",
      diagnosis: "Low back pain",
      terapi: "Analgetik dan observasi sesuai kondisi klinis.",
      masalahKesehatan: "Nyeri pinggang bawah yang mengganggu aktivitas.",
      masalahKeperawatan: "Nyeri akut.",
      rencanaKeperawatan:
        "Monitor tanda vital, skala nyeri, kemampuan mobilisasi, status neurologis, serta respons terhadap terapi.",
      edukasi:
        "Edukasi mengenai istirahat relatif, posisi tubuh yang baik, aktivitas sesuai toleransi, kepatuhan terapi, dan tanda bahaya yang memerlukan evaluasi segera.",
      discharge: "Ya",
      kondisiKeluar: "Sembuh",
      tindakLanjut: "Kontrol rawat jalan bila keluhan menetap atau memberat."
    },

    FEBRIS_VI_BI: {
      keluhan: "Demam, lemas, sudah berobat belum ada perbaikan.",
      vital: {
        td: "120/80",
        tdSysMin: 110,
        tdSysMax: 130,
        tdDiaMin: 70,
        tdDiaMax: 85,
        nadiMin: 100,
        nadiMax: 115,
        rr: "30",
        suhu: "40,5",
        spo2: "98"
      },
      nyeri: "0",
      gcs: "15",
      fisik:
        "Kep: ca -/-, si -/-\nTh: rh -/-, wh -/-, retraksi -, murmur -, takikardi\nAbd: bu +, soefl, nte -\nExt: akral hangat, crt 2 detik, teraba pucat",
      penunjang: "Darah rutin.",
      diagnosis: "Febris ec VI dd BI",
      terapi: "Cek darah rutin.",
      masalahKesehatan:
        "Demam dan lemas yang belum membaik setelah pengobatan sebelumnya, dengan pertimbangan infeksi virus dd bakterial.",
      masalahKeperawatan: "Hipertermia dan kelemahan.",
      rencanaKeperawatan:
        "Cek darah rutin, monitor tanda vital terutama suhu tubuh dan frekuensi napas, kondisi umum, kecukupan cairan, respons terhadap terapi, serta tanda bahaya.",
      edukasi:
        "Edukasi mengenai istirahat cukup, hidrasi, kepatuhan pengobatan, pemantauan suhu, dan tanda bahaya yang memerlukan evaluasi segera.",
      discharge: "Ya",
      kondisiKeluar: "Sembuh",
      tindakLanjut: "Kontrol rawat jalan bila demam menetap, keluhan memburuk, atau muncul tanda bahaya."
    },

    PENURUNAN_KESADARAN: {
      keluhan: "Penurunan kesadaran.",
      kesadaran: "Somnolen",
      kategori: "1",
      vital: {
        td: "115/70",
        tdSysMin: 100,
        tdSysMax: 130,
        tdDiaMin: 60,
        tdDiaMax: 80,
        nadiMin: 80,
        nadiMax: 110,
        rrMin: 20,
        rrMax: 28,
        rr: "24",
        suhu: "37,2",
        spo2Min: 94,
        spo2Max: 100,
        spo2: "98"
      },
      nyeri: "0",
      gcs: "9",
      fisik:
        "Kep: ca -/-, si -/-\nTh: rh -/-, wh -/-, retraksi -, murmur -\nAbd: bu +, soefl, nte -\nExt: akral hangat, crt 2 detik\nNeurologis: GCS E2V2M5, pupil isokor, refleks cahaya +/+, lateralisasi -, kejang aktif -",
      penunjang:
        "Darah rutin, GDS, elektrolit, dan CT-scan kepala sesuai indikasi.",
      diagnosis: "Penurunan kesadaran",
      terapi:
        "Stabilisasi ABC, monitoring, dan terapi sesuai penyebab.",
      masalahKesehatan:
        "Penurunan tingkat kesadaran yang memerlukan evaluasi dan pemantauan lebih lanjut.",
      masalahKeperawatan:
        "Gangguan kesadaran dan risiko aspirasi.",
      rencanaKeperawatan:
        "Monitor tanda vital, GCS, pupil, status neurologis, jalan napas, saturasi oksigen, serta tanda bahaya.",
      edukasi:
        "Edukasi keluarga mengenai kondisi pasien, kebutuhan observasi dan pemeriksaan lanjutan, serta kemungkinan perawatan lebih lanjut.",
      discharge: "Tidak",
      kondisiKeluar: "Pindah/Rujuk",
      tindakLanjut:
        "Rawat inap/rujuk untuk evaluasi dan terapi penyebab penurunan kesadaran."
    },

    NORMAL: {
      keluhan: "",
      vital: {
        td: "120/80",
        tdSysMin: 110,
        tdSysMax: 130,
        tdDiaMin: 70,
        tdDiaMax: 85,
        nadiMin: 70,
        nadiMax: 100,
        normalPulse: true,
        rr: "18",
        rrMin: 16,
        rrMax: 20,
        suhu: "36,8",
        spo2: "98",
        spo2Min: 97,
        spo2Max: 100
      },
      nyeri: "0",
      gcs: "15",
      fisik:
        "Kep: ca -/-, si -/-\nTh: rh -/-, wh -/-, retraksi -, murmur -\nAbd: bu +, soefl, nte -\nExt: akral hangat, crt 2 detik",
      penunjang: "",
      diagnosis: "",
      terapi: "",
      masalahKesehatan: "",
      masalahKeperawatan: "",
      rencanaKeperawatan:
        "Observasi kondisi umum dan tanda vital sesuai kebutuhan.",
      edukasi:
        "Edukasi umum mengenai pola hidup sehat, hidrasi, dan anjuran kontrol sesuai kebutuhan.",
      discharge: "Ya",
      kondisiKeluar: "Sembuh",
      tindakLanjut: "Kontrol sesuai kebutuhan."
    },
  };



  // =========================
  // MASTER TEMPLATE RESEP
  // =========================
  // Seluruh resep yang ditampilkan/diinput oleh MASTER TEMPLATE RESEP dan KOMBINASI RESEP
  // berasal dari satu sumber data master di bawah ini. Save/Submit akhir TIDAK pernah dipencet otomatis. Save/Submit akhir TIDAK pernah dipencet otomatis.
  const MASTER_RECIPE_TEMPLATES = {
    BI_DEWASA: {
      name: "BI Dewasa",
      items: [
        { obat: "AMOXICILLIN 500MG TABLET", jumlah: "10", dosis: "500 mg", frekuensi: "3x1", waktu: "", keterangan: "" },
        { obat: "SANMOL FORTE TABLET 650MG*", jumlah: "10", dosis: "650 mg", frekuensi: "4x1", waktu: "", keterangan: "" },
        { obat: "DOMPERIDON 10MG TAB", jumlah: "6", dosis: "10 mg", frekuensi: "3x1", waktu: "", keterangan: "" }
      ]
    },

    ISPA_DEWASA: {
      name: "ISPA Dewasa",
      items: [
        { obat: "AMOXICILLIN 500MG TABLET", jumlah: "10", dosis: "500 mg", frekuensi: "3x1", waktu: "", keterangan: "" },
        { obat: "SANMOL FORTE TABLET 650MG*", jumlah: "10", dosis: "650 mg", frekuensi: "4x1", waktu: "", keterangan: "" },
        { obat: "AMBROXOL 30MG TAB", jumlah: "6", dosis: "30 mg", frekuensi: "3x1", waktu: "", keterangan: "" },
        { obat: "CTM 4MG TAB", jumlah: "6", dosis: "4 mg", frekuensi: "3x1", waktu: "", keterangan: "" },
        { obat: "DEXAMETHASON 0.5 MG TAB*", jumlah: "6", dosis: "0,5 mg", frekuensi: "3x1", waktu: "", keterangan: "" }
      ]
    },

    GEA_DEWASA: {
      name: "GEA Dewasa",
      items: [
        { obat: "NEW DIATAB", jumlah: "10", dosis: "2 tab", frekuensi: "setiap BAB cair", waktu: "", keterangan: "2 tab setiap BAB cair" },
        { obat: "OMEPRAZOLE 20 MG CAPSUL", jumlah: "5", dosis: "20 mg", frekuensi: "2x1", waktu: "", keterangan: "" },
        { obat: "DOMPERIDON 10MG TAB", jumlah: "6", dosis: "10 mg", frekuensi: "3x1", waktu: "", keterangan: "" },
        { obat: "SANMOL FORTE TABLET 650MG*", jumlah: "10", dosis: "650 mg", frekuensi: "4x1", waktu: "", keterangan: "" }
      ]
    },

    OBAT_NYERI: {
      name: "Obat Nyeri",
      items: [
        { obat: "KETOROLAC TABLET", jumlah: "6", dosis: "1 tablet", frekuensi: "3x1", waktu: "", keterangan: "" },
        { obat: "OMEPRAZOLE CAPSUL*", jumlah: "5", dosis: "1 caps", frekuensi: "2x1", waktu: "", keterangan: "" },
        { obat: "RANITIDIN TABLET", jumlah: "5", dosis: "1 tablet", frekuensi: "2x1", waktu: "", keterangan: "" }
      ]
    },

    NYERI_ULU_HATI_DEWASA: {
      name: "Nyeri Ulu Hati Dewasa",
      items: [
        { obat: "RANITIDIN 150 GEN*", jumlah: "6", dosis: "1", frekuensi: "2 X SEHARI", waktu: "", keterangan: "" }
      ]
    },

    KEMBUNG_DEWASA: {
      name: "Kembung Dewasa",
      items: [
        { obat: "ANTASIDA TAB*", jumlah: "6", dosis: "1", frekuensi: "3 X SEHARI", waktu: "", keterangan: "" }
      ]
    },

    BI_ANAK: {
      name: "BI Anak",
      weightGroups: {
        "0_2_5": {
          label: "BB 0–2,5 kg",
          items: [
            { obat: "AMOXYCILLIN 60 CC SYR 125MG/5ML*", jumlah: "1", dosis: "1 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "1 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "1 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "2_5_5": {
          label: "BB 2,5–5 kg",
          items: [
            { obat: "AMOXYCILLIN 60 CC SYR 125MG/5ML*", jumlah: "1", dosis: "2 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "1 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "2 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "5_7_5": {
          label: "BB 5–7,5 kg",
          items: [
            { obat: "AMOXYCILLIN 60 CC SYR 125MG/5ML*", jumlah: "1", dosis: "3 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "2 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "3 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "7_5_10": {
          label: "BB 7,5–10 kg",
          items: [
            { obat: "AMOXYCILLIN 60 CC SYR 125MG/5ML*", jumlah: "1", dosis: "4 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "2 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "4 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "10_12_5": {
          label: "BB 10–12,5 kg",
          items: [
            { obat: "AMOXYCILLIN 60 CC SYR 125MG/5ML*", jumlah: "1", dosis: "5 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "3 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "5 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "12_5_15": {
          label: "BB 12,5–15 kg",
          items: [
            { obat: "AMOXYCILLIN 60 CC SYR 125MG/5ML*", jumlah: "1", dosis: "6 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "3 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "6 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "15_17_5": {
          label: "BB 15–17,5 kg",
          items: [
            { obat: "AMOXYCILLIN 60 CC SYR 125MG/5ML*", jumlah: "1", dosis: "7 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "4 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "7 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "17_5_20": {
          label: "BB 17,5–20 kg",
          items: [
            { obat: "AMOXYCILLIN 60 CC SYR 125MG/5ML*", jumlah: "1", dosis: "8 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "4 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "8 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "20_22_5": {
          label: "BB 20–22,5 kg",
          items: [
            { obat: "AMOXYCILLIN 60 CC SYR 125MG/5ML*", jumlah: "1", dosis: "9 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "5 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "9 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "22_5_25": {
          label: "BB 22,5–25 kg",
          items: [
            { obat: "AMOXYCILLIN 60 CC SYR 125MG/5ML*", jumlah: "1", dosis: "10 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "5 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "10 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        }
      }
    },

    GEA_ANAK: {
      name: "GEA Anak",
      weightGroups: {
        "0_2_5": {
          label: "BB 0–2,5 kg",
          items: [
            { obat: "ZINc TABLET", jumlah: "3", dosis: "1 tablet", frekuensi: "1x1", waktu: "", keterangan: "" },
            { obat: "ORALIT", jumlah: "4", dosis: "", frekuensi: "setiap BAB cair", waktu: "", keterangan: "Diminum setiap BAB cair" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "1 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "1 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "2_5_5": {
          label: "BB 2,5–5 kg",
          items: [
            { obat: "ZINc TABLET", jumlah: "3", dosis: "1 tablet", frekuensi: "1x1", waktu: "", keterangan: "" },
            { obat: "ORALIT", jumlah: "4", dosis: "", frekuensi: "setiap BAB cair", waktu: "", keterangan: "Diminum setiap BAB cair" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "1 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "2 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "5_7_5": {
          label: "BB 5–7,5 kg",
          items: [
            { obat: "ZINc TABLET", jumlah: "3", dosis: "1 tablet", frekuensi: "1x1", waktu: "", keterangan: "" },
            { obat: "ORALIT", jumlah: "4", dosis: "", frekuensi: "setiap BAB cair", waktu: "", keterangan: "Diminum setiap BAB cair" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "2 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "3 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "7_5_10": {
          label: "BB 7,5–10 kg",
          items: [
            { obat: "ZINc TABLET", jumlah: "3", dosis: "1 tablet", frekuensi: "1x1", waktu: "", keterangan: "" },
            { obat: "ORALIT", jumlah: "4", dosis: "", frekuensi: "setiap BAB cair", waktu: "", keterangan: "Diminum setiap BAB cair" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "2 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "4 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "10_12_5": {
          label: "BB 10–12,5 kg",
          items: [
            { obat: "ZINc TABLET", jumlah: "3", dosis: "1 tablet", frekuensi: "1x1", waktu: "", keterangan: "" },
            { obat: "ORALIT", jumlah: "4", dosis: "", frekuensi: "setiap BAB cair", waktu: "", keterangan: "Diminum setiap BAB cair" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "3 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "5 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "12_5_15": {
          label: "BB 12,5–15 kg",
          items: [
            { obat: "ZINc TABLET", jumlah: "3", dosis: "1 tablet", frekuensi: "1x1", waktu: "", keterangan: "" },
            { obat: "ORALIT", jumlah: "4", dosis: "", frekuensi: "setiap BAB cair", waktu: "", keterangan: "Diminum setiap BAB cair" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "3 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "6 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "15_17_5": {
          label: "BB 15–17,5 kg",
          items: [
            { obat: "ZINc TABLET", jumlah: "3", dosis: "1 tablet", frekuensi: "1x1", waktu: "", keterangan: "" },
            { obat: "ORALIT", jumlah: "4", dosis: "", frekuensi: "setiap BAB cair", waktu: "", keterangan: "Diminum setiap BAB cair" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "4 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "7 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "17_5_20": {
          label: "BB 17,5–20 kg",
          items: [
            { obat: "ZINc TABLET", jumlah: "3", dosis: "1 tablet", frekuensi: "1x1", waktu: "", keterangan: "" },
            { obat: "ORALIT", jumlah: "4", dosis: "", frekuensi: "setiap BAB cair", waktu: "", keterangan: "Diminum setiap BAB cair" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "4 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "8 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "20_22_5": {
          label: "BB 20–22,5 kg",
          items: [
            { obat: "ZINc TABLET", jumlah: "3", dosis: "1 tablet", frekuensi: "1x1", waktu: "", keterangan: "" },
            { obat: "ORALIT", jumlah: "4", dosis: "", frekuensi: "setiap BAB cair", waktu: "", keterangan: "Diminum setiap BAB cair" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "5 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "9 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        },
        "22_5_25": {
          label: "BB 22,5–25 kg",
          items: [
            { obat: "ZINc TABLET", jumlah: "3", dosis: "1 tablet", frekuensi: "1x1", waktu: "", keterangan: "" },
            { obat: "ORALIT", jumlah: "4", dosis: "", frekuensi: "setiap BAB cair", waktu: "", keterangan: "Diminum setiap BAB cair" },
            { obat: "DOMPERIDONE SYR", jumlah: "1", dosis: "5 ml", frekuensi: "3x1", waktu: "", keterangan: "" },
            { obat: "PARACETAMOL 60 CC GEN", jumlah: "1", dosis: "10 ml", frekuensi: "4–6x1", waktu: "", keterangan: "" }
          ]
        }
      }
    },

    // =========================
    // AUTO RESEP TINDAKAN
    // =========================
    TINDAKAN: {
      name: "Tindakan",
      children: {

        SUNTIK_RAKET: {
          name: "Suntik Raket",
          items: [
            { obat: "RANITIDIN INJ 25MG/ML*", jumlah: "1", dosis: "1 amp", frekuensi: "", waktu: "", keterangan: "igd" },
            { obat: "KETOROLAC INJ 30MG*", jumlah: "1", dosis: "1 amp", frekuensi: "", waktu: "", keterangan: "igd" },
            { obat: "SPUIT 3 CC", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "igd" }
          ]
        },

        SUNTIK_KETOROLAC: {
          name: "Suntik Ketorolac",
          items: [
            { obat: "KETOROLAC INJ 30MG*", jumlah: "1", dosis: "1 amp", frekuensi: "", waktu: "", keterangan: "igd" },
            { obat: "SPUIT 3 CC", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "igd" }
          ]
        },

        SUNTIK_RANDAN: {
          name: "Suntik Randan",
          items: [
            { obat: "RANITIDIN INJ 25MG/ML*", jumlah: "1", dosis: "1 amp", frekuensi: "", waktu: "", keterangan: "igd" },
            { obat: "ONDANSETRON INJ 8MG/4ML", jumlah: "1", dosis: "1 amp", frekuensi: "", waktu: "", keterangan: "igd" },
            { obat: "SPUIT 3 CC", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "igd" }
          ]
        },

        SUNTIK_ONDAN: {
          name: "Suntik Ondan",
          items: [
            { obat: "ONDANSETRON INJ 8MG/4ML", jumlah: "1", dosis: "1 amp", frekuensi: "", waktu: "", keterangan: "igd" },
            { obat: "SPUIT 3 CC", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "igd" }
          ]
        },

        NEBU: {
          name: "Nebu",
          items: [
            { obat: "COMBIVENT 2.5ML UDV", jumlah: "1", dosis: "1", frekuensi: "", waktu: "", keterangan: "igd" }
          ]
        },

        JAHIT: {
          name: "Jahit",
          items: [
            { obat: "BENANG SILKAM 3/0 HR / S22 (76 CM)", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "UNDERPAD NON STERIL", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "SPUIT 3 CC", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "LIDOCAIN HCL INJ 2%", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "TETAGAM 250 IU INJ", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" }
          ]
        },

        INTUBASI: {
          name: "Intubasi",
          items: [
            { obat: "SPUIT 10 CC TERUMO", jumlah: "3", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "SEDACUM INJ 5MG / 5 ML", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "RECOFOL N INJ", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "ETT(ENDOTRACHEAL TUBE) NO 7.5", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "CATHEJELL 12.5 G", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" }
          ]
        },

        KATETER_URIN: {
          name: "Kateter Urin",
          items: [
            { obat: "FOLEY CATHETER NO 16", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "CATHEJELL 12.5 G", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "URINE BAG", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" }
          ]
        },

        NGT: {
          name: "NGT",
          items: [
            { obat: "NGT 16", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "CATHEJELL 12.5 G", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "URINE BAG", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" }
          ]
        },

        VASCON: {
          name: "Vascon",
          items: [
            { obat: "NOREPHIEPHRIN INJ", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "SPUIT 50 CC", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "PERFUSOR / EXTENTION 150CM", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" },
            { obat: "THREE WAY STOPCOCKS TR", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "" }
          ]
        }
      }
    }
  };


  // =========================
  // RESEP ANAK TAMBAHAN
  // =========================
  // Dosis/cara minum dibuat SAMA PERSIS dengan kelompok BB pada BI Anak.
  // Demam Anak hanya mengambil Paracetamol, Muntah Anak hanya mengambil Domperidone.
  MASTER_RECIPE_TEMPLATES.DEMAM_ANAK = {
    name: "Demam Anak",
    weightGroups: Object.fromEntries(
      Object.entries(MASTER_RECIPE_TEMPLATES.BI_ANAK.weightGroups).map(([key, group]) => [key, {
        label: group.label,
        items: group.items
          .filter(item => /PARACETAMOL 60 CC GEN/i.test(item.obat))
          .map(item => ({ ...item }))
      }])
    )
  };

  MASTER_RECIPE_TEMPLATES.NYERI_ANAK = {
    name: "Nyeri Anak",
    weightGroups: Object.fromEntries(
      Object.entries(MASTER_RECIPE_TEMPLATES.BI_ANAK.weightGroups).map(([key, group]) => [key, {
        label: group.label,
        items: group.items
          .filter(item => /PARACETAMOL 60 CC GEN/i.test(item.obat))
          .map(item => ({ ...item }))
      }])
    )
  };

  MASTER_RECIPE_TEMPLATES.MUNTAH_ANAK = {
    name: "Muntah Anak",
    weightGroups: Object.fromEntries(
      Object.entries(MASTER_RECIPE_TEMPLATES.BI_ANAK.weightGroups).map(([key, group]) => [key, {
        label: group.label,
        items: group.items
          .filter(item => /DOMPERIDONE SYR/i.test(item.obat))
          .map(item => ({ ...item }))
      }])
    )
  };

  MASTER_RECIPE_TEMPLATES.KEMBUNG_ANAK = {
    name: "Kembung Anak 5–10 tahun",
    items: [
      { obat: "ANTASIDA TAB*", jumlah: "5", dosis: "1/2 tab", frekuensi: "2 X SEHARI", waktu: "", keterangan: "" }
    ]
  };

  // =========================
  // AUTO RACIKAN
  // =========================
  // Template racikan menggunakan nama obat PERSIS seperti yang tampil
  // pada Form Racikan Smartplus, sesuai screenshot pengguna.
  const MASTER_RACIKAN_TEMPLATES = {
    BAPIL_ANAK: {
      name: "Bapil Anak",
      weightGroups: Object.fromEntries(
        Array.from({ length: 10 }, (_, i) => {
          const min = i === 0 ? 1 : i * 5;
          const max = (i + 1) * 5;
          const qty = String(i + 1);
          const key = `${min}_${max}`;
          return [key, {
            label: `BB ${min}–${max} kg`,
            name: `Bapil Anak ${min}–${max} kg`,
            namaRacikan: "bapil anak",
            instruksi: "Pulveres",
            jumlahRacikan: "10",
            dosis: "1 pulv",
            frekuensi: "3 X SEHARI",
            waktu: "",
            items: [
              { obat: "DEXAMETHASON 0.5 MG TAB", jumlahPerObat: qty },
              { obat: "CTM 4MG TAB", jumlahPerObat: qty },
              { obat: "AMBROXOL 30MG TAB*", jumlahPerObat: qty }
            ]
          }];
        })
      )
    },
    RADANG_BENGKAK_ANAK: {
      name: "Radang/Bengkak Anak",
      weightGroups: Object.fromEntries(
        Array.from({ length: 10 }, (_, i) => {
          const min = i === 0 ? 1 : i * 5;
          const max = (i + 1) * 5;
          const qty = String(i + 1);
          const key = `${min}_${max}`;
          return [key, {
            label: `BB ${min}–${max} kg`,
            name: `Radang/Bengkak Anak ${min}–${max} kg`,
            namaRacikan: "radang/bengkak anak",
            instruksi: "Pulveres",
            jumlahRacikan: "10",
            dosis: "1 pulv",
            frekuensi: "3 X SEHARI",
            waktu: "",
            items: [
              { obat: "DEXAMETHASON 0.5 MG TAB", jumlahPerObat: qty },
              { obat: "CTM 4MG TAB", jumlahPerObat: qty }
            ]
          }];
        })
      )
    },
    NYERI_ULU_HATI_ANAK: {
      name: "Nyeri Ulu Hati Anak",
      weightGroups: Object.fromEntries(
        Array.from({ length: 10 }, (_, i) => {
          const min = i === 0 ? 1 : i * 5;
          const max = (i + 1) * 5;
          const qty = String(i + 1);
          const key = `${min}_${max}`;
          return [key, {
            label: `BB ${min}–${max} kg`,
            name: `Nyeri Ulu Hati Anak ${min}–${max} kg`,
            namaRacikan: "nyeri ulu hati anak",
            instruksi: "Pulveres",
            jumlahRacikan: "10",
            dosis: "1 pulv",
            frekuensi: "2 X SEHARI",
            waktu: "",
            items: [
              { obat: "RANITIDIN 150 GEN*", jumlahPerObat: qty }
            ]
          }];
        })
      )
    }
  };

  let recipeRunning = false;
  let recipeStopRequested = false;
  let recipeProgress = null;

  // Template khusus Paket Resep per keluhan (tidak bergantung pada paket penyakit lengkap)
  MASTER_RECIPE_TEMPLATES.KELUHAN_NYERI_DEWASA = { name: "Nyeri Dewasa", items: [{ obat: "KETOROLAC TABLET", jumlah: "6", dosis: "1 tablet", frekuensi: "3x1", waktu: "", keterangan: "" }] };
  MASTER_RECIPE_TEMPLATES.KELUHAN_MUAL_MUNTAH_DEWASA = { name: "Mual Muntah Dewasa", items: [
    { obat: "DOMPERIDON 10MG TAB", jumlah: "6", dosis: "10 mg", frekuensi: "3x1", waktu: "", keterangan: "" },
    { obat: "OMEPRAZOLE 20 MG CAPSUL", jumlah: "5", dosis: "20 mg", frekuensi: "2x1", waktu: "", keterangan: "" }
  ] };
  MASTER_RECIPE_TEMPLATES.KELUHAN_BATUK_PILEK_DEWASA = { name: "Batuk Pilek Dewasa", items: [
    { obat: "AMBROXOL 30MG TAB", jumlah: "6", dosis: "30 mg", frekuensi: "3x1", waktu: "", keterangan: "" },
    { obat: "CTM 4MG TAB", jumlah: "6", dosis: "4 mg", frekuensi: "3x1", waktu: "", keterangan: "" },
    { obat: "DEXAMETHASON 0.5 MG TAB*", jumlah: "6", dosis: "0,5 mg", frekuensi: "3x1", waktu: "", keterangan: "" }
  ] };
  MASTER_RECIPE_TEMPLATES.KELUHAN_RADANG_BENGKAK_DEWASA = { name: "Radang/Bengkak Dewasa", items: [
    { obat: "CTM 4MG TAB", jumlah: "6", dosis: "4 mg", frekuensi: "3x1", waktu: "", keterangan: "" },
    { obat: "DEXAMETHASON 0.5 MG TAB*", jumlah: "6", dosis: "0,5 mg", frekuensi: "3x1", waktu: "", keterangan: "" }
  ] };
  MASTER_RECIPE_TEMPLATES.KELUHAN_DIARE_DEWASA = { name: "Diare Dewasa", items: [{ obat: "NEW DIATAB", jumlah: "10", dosis: "2 tab", frekuensi: "setiap BAB cair", waktu: "", keterangan: "2 tab setiap BAB cair" }] };
  MASTER_RECIPE_TEMPLATES.KELUHAN_INFEKSI_DEWASA = { name: "Infeksi Bakteri Dewasa", items: [{ obat: "AMOXICILLIN 500MG TABLET", jumlah: "10", dosis: "500 mg", frekuensi: "3x1", waktu: "", keterangan: "" }] };
  MASTER_RECIPE_TEMPLATES.KELUHAN_DIARE_ANAK = {
    name: "Diare Anak", weightGroups: Object.fromEntries(Object.entries(MASTER_RECIPE_TEMPLATES.GEA_ANAK.weightGroups).map(([key,g]) => [key,{ label:g.label, items:g.items.filter(i => /^(ZINc TABLET|ORALIT)$/i.test(i.obat)).map(i=>({...i})) }]))
  };
  MASTER_RECIPE_TEMPLATES.KELUHAN_KEMBUNG_ANAK_5_15 = { name: "Kembung Anak 5–15 tahun", items: [{ obat:"ANTASIDA TAB*", jumlah:"4", dosis:"1/2 tab", frekuensi:"2x1", waktu:"", keterangan:"" }] };
  MASTER_RECIPE_TEMPLATES.KELUHAN_KEMBUNG_ANAK_GT15 = { name: "Kembung Anak >15 tahun", items: [{ obat:"ANTASIDA TAB*", jumlah:"6", dosis:"1 tab", frekuensi:"3x1", waktu:"", keterangan:"" }] };

  // =========================
  // AUTO RESEP BERDASARKAN KELUHAN + BB
  // Prioritas aturan:
  // 1) Umur >17 tahun = Dewasa otomatis, tanpa BB.
  // 2) Umur <=17 tahun: BB >40 kg = Dewasa, BB <40 kg = Anak.
  // 3) BB tepat 40 kg = perlu keputusan manual, tidak diproses otomatis.
  // =========================
  const COMPLAINT_RECIPE_MAP = {
    DEMAM: {
      label: "🌡️ Demam",
      adult: { kind: "dynamic", sourceKey: "ISPA_DEWASA", drug: "SANMOL FORTE TABLET 650MG*", key: "KELUHAN_DEMAM_DEWASA" },
      child: { kind: "recipe", key: "DEMAM_ANAK" }
    },
    NYERI: {
      label: "🤕 Nyeri",
      adult: { kind: "recipe", key: "KELUHAN_NYERI_DEWASA" },
      child: { kind: "recipe", key: "NYERI_ANAK" }
    },
    MUAL_MUNTAH: {
      label: "🤢 Mual / Muntah",
      adult: { kind: "recipe", key: "KELUHAN_MUAL_MUNTAH_DEWASA" },
      child: { kind: "recipe", key: "MUNTAH_ANAK" }
    },
    BATUK_PILEK: {
      label: "🤧 Batuk / Pilek",
      adult: { kind: "recipe", key: "KELUHAN_BATUK_PILEK_DEWASA" },
      child: { kind: "racikan", key: "BAPIL_ANAK" }
    },
    RADANG_BENGKAK: {
      label: "🟥 Radang / Bengkak",
      adult: { kind: "recipe", key: "KELUHAN_RADANG_BENGKAK_DEWASA" },
      child: { kind: "racikan", key: "RADANG_BENGKAK_ANAK" }
    },
    DIARE: {
      label: "🤮 Diare / BAB Cair",
      adult: { kind: "recipe", key: "KELUHAN_DIARE_DEWASA" },
      child: { kind: "recipe", key: "KELUHAN_DIARE_ANAK" }
    },
    NYERI_ULU_HATI: {
      label: "🔥 Nyeri Ulu Hati",
      adult: { kind: "recipe", key: "NYERI_ULU_HATI_DEWASA" },
      child: { kind: "racikan", key: "NYERI_ULU_HATI_ANAK" }
    },
    KEMBUNG: {
      label: "💨 Kembung",
      adult: { kind: "recipe", key: "KEMBUNG_DEWASA" },
      // Template anak yang saat ini tersedia adalah khusus usia 5–10 tahun.
      child: { kind: "ageRecipe", key5_15: "KELUHAN_KEMBUNG_ANAK_5_15", keyGt15: "KELUHAN_KEMBUNG_ANAK_GT15", note: "Usia 5–15 tahun: 1/2 tab 2x1; usia >15 tahun: 1 tab 3x1." }
    },
    INFEKSI_BAKTERI: {
      label: "🦠 Dugaan Infeksi Bakteri",
      adult: { kind: "recipe", key: "KELUHAN_INFEKSI_DEWASA" },
      child: { kind: "recipe", key: "BI_ANAK" }
    },
  };

  function ensureDynamicComplaintTemplate(def) {
    if (MASTER_RECIPE_TEMPLATES[def.key]) return def.key;
    const source = MASTER_RECIPE_TEMPLATES[def.sourceKey];
    if (!source?.items) return null;
    const found = source.items.find(item => norm(item.obat) === norm(def.drug));
    if (!found) return null;
    MASTER_RECIPE_TEMPLATES[def.key] = {
      name: def.key.replace("KELUHAN_", "").replace(/_/g, " "),
      items: [{ ...found }]
    };
    return def.key;
  }

  function parseWeightRangeKey(key) {
    const parts = String(key).split("_").map(Number);
    if (parts.length === 2 && parts.every(Number.isFinite)) return [parts[0], parts[1]];
    if (parts.length === 3 && parts.every(Number.isFinite)) return [parts[0] + parts[1] / 10, parts[2]];
    return [NaN, NaN];
  }

  function findWeightKeyForValue(templateKey, weight, options = {}) {
    // Dukungan untuk template resep biasa DAN template racikan.
    // Untuk racikan, batas BB mengikuti kelompok yang berakhir pada nilai tersebut:
    // BB 5 kg -> 1–5 kg; BB 10 kg -> 5–10 kg; BB 15 kg -> 10–15 kg.
    // BAPIL_ANAK / NYERI_ULU_HATI_ANAK disimpan di MASTER_RACIKAN_TEMPLATES,
    // bukan di MASTER_RECIPE_TEMPLATES.
    const tpl = MASTER_RECIPE_TEMPLATES[templateKey] || MASTER_RACIKAN_TEMPLATES[templateKey];
    const groups = tpl?.weightGroups;
    if (!groups || !Number.isFinite(weight)) return null;

    // Gunakan label kelompok BB sebagai sumber kebenaran.
    // Key seperti "10_12_5" ambigu bila dipecah dengan underscore; label
    // "BB 10–12,5 kg" tidak ambigu dan sesuai tampilan menu Smartplus.
    const entries = Object.entries(groups);
    for (let i = 0; i < entries.length; i++) {
      const [key, group] = entries[i];
      const label = String(group?.label || '');
      const m = label.match(/BB\s*([0-9]+(?:[.,][0-9]+)?)\s*[–-]\s*([0-9]+(?:[.,][0-9]+)?)\s*kg/i);
      let min = NaN, max = NaN;
      if (m) {
        min = Number(m[1].replace(',', '.'));
        max = Number(m[2].replace(',', '.'));
      } else {
        [min, max] = parseWeightRangeKey(key);
      }
      if (!Number.isFinite(min) || !Number.isFinite(max)) continue;

      const isLast = i === entries.length - 1;

      if (weight >= min && (weight < max || (isLast && weight <= max))) return key;
    }
    return null;
  }

  async function resolveComplaintRecipe(complaintKey, rawWeight, options = {}) {
    const complaint = COMPLAINT_RECIPE_MAP[complaintKey];
    const forceAdult = options.forceAdult === true;
    const ageYears = Number.isFinite(Number(options.ageYears)) ? Number(options.ageYears) : getPatientAgeYears();
    const weight = rawWeight == null || rawWeight === "" ? null : Number(String(rawWeight).replace(",", "."));

    if (!complaint) throw new Error(`Keluhan tidak ditemukan: ${complaintKey}`);

    // PRIORITAS CABANG: usia >17 tahun selalu Dewasa dan BB tidak diperlukan.
    // Untuk usia <=17 tahun, BB menentukan cabang: <40 kg = Anak, >40 kg = Dewasa.
    // BB tepat 40 kg sengaja ditolak agar dokter menentukan cabang secara manual.
    const adultByAge = forceAdult || (Number.isFinite(ageYears) && ageYears > 17);
    if (adultByAge) {
      const branch = complaint.adult;
      if (!branch) throw new Error(`${complaint.label.replace(/^\S+\s*/, "")} belum memiliki paket dewasa.`);
      return { complaint, branch, weight: null, ageYears, adultByAge: true, reason: "age" };
    }

    if (!Number.isFinite(weight) || weight <= 0) throw new Error("BB tidak valid. Untuk pasien usia <=17 tahun, BB wajib diisi.");
    if (weight === 40) throw new Error("BB 40 kg berada di batas tengah. Tentukan secara manual apakah menggunakan cabang Anak atau Dewasa sebelum melanjutkan.");

    const isAdultByWeight = weight > 40;
    const branch = isAdultByWeight ? complaint.adult : complaint.child;
    if (!branch) throw new Error(`${complaint.label.replace(/^\S+\s*/, "")} belum memiliki paket untuk ${isAdultByWeight ? "dewasa" : "anak"}.`);

    return { complaint, branch, weight, ageYears, adultByAge: false, reason: isAdultByWeight ? "weight-adult" : "weight-child" };
  }

  async function runComplaintRecipe(complaintKey, rawWeight, options = {}) {
    const { complaint, branch, weight, ageYears, adultByAge } = await resolveComplaintRecipe(complaintKey, rawWeight, options);

    recipeStatus(`${complaint.label} • ${adultByAge ? `Umur ${Number.isFinite(ageYears) ? ageYears : "?"} th → Dewasa` : `BB ${weight} kg → ${weight > 40 ? "Dewasa" : "Anak"}`}`);

    if (branch.kind === "dynamic") {
      const key = ensureDynamicComplaintTemplate(branch);
      if (!key) throw new Error("Obat sumber untuk keluhan ini tidak ditemukan di template.");
      await fillRecipeTemplate(key, null, options);
      return true;
    }

    if (branch.kind === "ageRecipe") {
      // Umur ditarik dari identitas pasien. Kembung anak: 5–15 th dan >15 th.
      const age = Number(options.age);
      if (!Number.isFinite(age) || age < 5) throw new Error("Paket Kembung Anak hanya tersedia mulai usia 5 tahun. Umur pasien tidak valid/tidak ditemukan.");
      const ageKey = age <= 15 ? branch.key5_15 : branch.keyGt15;
      await fillRecipeTemplate(ageKey, null, options);
      return true;
    }

    if (branch.kind === "racikan") {
      const weightKey = findWeightKeyForValue(branch.key, weight, { lowerBoundaryForRacikan: true });
      if (!weightKey) throw new Error(`BB ${weight} kg belum tersedia pada template anak untuk keluhan ini.`);
      await fillRacikanTemplate(branch.key, weightKey, options);
      return true;
    }

    const tpl = MASTER_RECIPE_TEMPLATES[branch.key];
    if (!tpl) throw new Error("Template resep tidak ditemukan.");

    if (tpl.weightGroups) {
      const weightKey = findWeightKeyForValue(branch.key, weight);
      if (!weightKey) throw new Error(`BB ${weight} kg belum tersedia pada template anak untuk keluhan ini.`);
      await fillRecipeTemplate(branch.key, weightKey, options);
    } else {
      await fillRecipeTemplate(branch.key, null, options);
    }
    return true;
  }

  // Jalur khusus Paket Resep untuk beberapa keluhan sekaligus.
  // PENTING: gunakan mesin input resep yang SAMA dengan resep tunggal,
  // tetapi jalankan addRecipeItem() langsung secara berurutan. Jangan membuat
  // template sementara lalu memanggil fillRecipeTemplate(), karena lapisan
  // deduplikasi/recipeRunning pada jalur tersebut dapat membuat paket kombinasi
  // dianggap sudah terinput padahal belum.
  async function runCombinedComplaintRecipes(complaintKeys, weight, options = {}) {
    const seenSet = options.seenSet || getExistingRecipeDrugSet();
    const regularItems = [];
    const racikanJobs = [];
    const details = [];
    const skippedComplaints = [];

    for (let complaintIndex = 0; complaintIndex < complaintKeys.length; complaintIndex++) {
      if (isRecipeStopRequested()) break;
      const complaintKey = complaintKeys[complaintIndex];
      const complaintLabel = COMPLAINT_RECIPE_MAP[complaintKey]?.label || complaintKey;
      updateRecipeProgress("KOMBINASI RESEP: keluhan", complaintIndex, complaintKeys.length, complaintLabel);

      let resolved;
      try {
        resolved = await resolveComplaintRecipe(complaintKey, weight, options);
      } catch (err) {
        // Keluhan yang memang tidak tersedia untuk usia/BB pasien tidak boleh
        // menghentikan keluhan lain dalam KOMBINASI RESEP. Contoh: Kembung Anak
        // pada usia <5 tahun. Lewati keluhan tersebut dan lanjutkan yang lain.
        const msg = err?.message || String(err);
        skippedComplaints.push(`${complaintLabel}: ${msg}`);
        details.push(`${complaintLabel} (dilewati)`);
        continue;
      }

      const { complaint, branch } = resolved;

      try {
      if (branch.kind === "dynamic") {
        const key = ensureDynamicComplaintTemplate(branch);
        const tpl = key ? MASTER_RECIPE_TEMPLATES[key] : null;
        if (!tpl?.items?.length) throw new Error(`Obat untuk ${complaint.label} tidak ditemukan.`);
        regularItems.push(...tpl.items);
      } else if (branch.kind === "recipe") {
        const tpl = MASTER_RECIPE_TEMPLATES[branch.key];
        if (!tpl) throw new Error(`Template untuk ${complaint.label} tidak ditemukan.`);
        if (tpl.weightGroups) {
          const weightKey = findWeightKeyForValue(branch.key, weight);
          if (!weightKey) throw new Error(`BB ${weight} kg belum tersedia untuk ${complaint.label}.`);
          const group = tpl.weightGroups[weightKey];
          if (!group?.items?.length) throw new Error(`Tidak ada obat pada kelompok BB ${group?.label || weight + " kg"} untuk ${complaint.label}.`);
          let items = group.items.map(item => ({ ...item }));
          if (complaintKey === "DIARE" && weight < 40) {
            const ageMonths = Number.isFinite(Number(options.ageMonths)) ? Number(options.ageMonths) : getPatientAgeMonths();
            if (Number.isFinite(ageMonths) && ageMonths < 6) {
              items = items.map(item => /^(ZINc TABLET)$/i.test(item.obat)
                ? ({ ...item, dosis: "1/2 tab", frekuensi: "1x1" })
                : item
              );
            }
          }
          regularItems.push(...items);
        } else {
          regularItems.push(...(tpl.items || []));
        }
      } else if (branch.kind === "ageRecipe") {
        // Kembung Anak: pilih template berdasarkan umur pasien, lalu masukkan
        // item sebagai obat biasa agar ikut masuk ke plan/addRecipeItem().
        const age = Number.isFinite(Number(options.ageYears))
          ? Number(options.ageYears)
          : getPatientAgeYears();
        if (!Number.isFinite(age) || age < 5) {
          throw new Error("Paket Kembung Anak hanya tersedia mulai usia 5 tahun. Umur pasien tidak valid/tidak ditemukan.");
        }
        const ageKey = age <= 15 ? branch.key5_15 : branch.keyGt15;
        const tpl = MASTER_RECIPE_TEMPLATES[ageKey];
        if (!tpl?.items?.length) {
          throw new Error(`Template ${complaint.label} sesuai umur tidak ditemukan.`);
        }
        regularItems.push(...tpl.items.map(item => ({ ...item })));
      } else if (branch.kind === "racikan") {
        const weightKey = findWeightKeyForValue(branch.key, weight, { lowerBoundaryForRacikan: true });
        if (!weightKey) throw new Error(`BB ${weight} kg belum tersedia untuk ${complaint.label}.`);
        racikanJobs.push({ key: branch.key, weightKey, label: complaint.label });
      }

      details.push(complaint.label);
      } catch (err) {
        // Kesalahan pada satu keluhan tidak boleh membatalkan keluhan lain.
        const msg = err?.message || String(err);
        skippedComplaints.push(`${complaint.label}: ${msg}`);
        details.push(`${complaint.label} (dilewati)`);
      }
    }

    // Buka/pertahankan Resep Online SEKALI, sama seperti resep tunggal.
    if (regularItems.length || racikanJobs.length) {
      const opened = await openRecipeTab();
      if (!opened) throw new Error("Menu Resep Online gagal dibuka / form resep belum muncul.");
      const root = await waitForRecipeDraftRoot(4000, 120);
      if (!root) throw new Error("Form Input Resep Baru belum siap.");
    }

    // DEDUP berdasarkan obat yang sudah ada + duplikat antar keluhan.
    const plan = uniqueRecipeItems(regularItems, new Set(seenSet));
    let success = 0;
    const errors = [];

    // Gunakan addRecipeItem() LANGSUNG. Ini persis mesin yang telah terbukti
    // berhasil pada AUTO RESEP tunggal.
    for (let i = 0; i < plan.unique.length; i++) {
      if (isRecipeStopRequested()) break;
      const item = plan.unique[i];
      updateRecipeProgress("KOMBINASI RESEP: memasukkan obat", i, plan.unique.length, item?.obat || "");
      try {
        await addRecipeItem(item, i, plan.unique.length);
        success++;
        seenSet.add(norm(item.obat));
      } catch (err) {
        console.error("[KOMBINASI RESEP]", item, err);
        errors.push(`${item.obat}: ${err.message || err}`);
      }
    }

    // Racikan diproses SETELAH obat non-racikan, tetap additive.
    // Gunakan fungsi racikan yang sama dengan menu AUTO RESEP tunggal.
    for (let racikanIndex = 0; racikanIndex < racikanJobs.length; racikanIndex++) {
      if (isRecipeStopRequested()) break;
      const job = racikanJobs[racikanIndex];
      try {
        updateRecipeProgress("KOMBINASI RESEP: racikan", racikanIndex, racikanJobs.length, job.label || job.key);
        const beforeText = document.body.innerText || '';
        await fillPackageRacikanTemplate(job.key, job.weightKey, { ...options, seenSet, internalPackage: true });
        // Verifikasi sederhana bahwa alur Form Racikan pernah terbuka /
        // menghasilkan perubahan pada halaman. Bila tidak, laporkan agar
        // tidak diam-diam dianggap berhasil.
        const afterText = document.body.innerText || '';
        const formWasSeen = /form\s+racikan|detail\s+racikan|obat\s+untuk\s+diracik/i.test(afterText) ||
          /form\s+racikan|detail\s+racikan|obat\s+untuk\s+diracik/i.test(beforeText);
        if (!formWasSeen && !hasExistingRecipeDraft()) {
          errors.push(`${job.label}: Form Racikan tidak terdeteksi.`);
        }
      } catch (err) {
        console.error("[KOMBINASI RESEP RACIKAN]", job, err);
        errors.push(`${job.label}: ${err.message || err}`);
      }
    }

    const totalProblems = errors.length + skippedComplaints.length;
    if (totalProblems) {
      toast(`KOMBINASI RESEP: ${success} obat berhasil masuk, ${plan.skipped.length} duplikat dilewati, ${skippedComplaints.length} keluhan dilewati, ${errors.length} obat/tindakan gagal. Keluhan lain tetap diproses.`);
      console.warn("[KOMBINASI RESEP] Keluhan yang dilewati:", skippedComplaints);
    } else {
      toast(`KOMBINASI RESEP: ${success} obat berhasil masuk, ${plan.skipped.length} duplikat dilewati. Tetap sebagai draft.`);
    }

    return { details, seenSet, success, skipped: plan.skipped.length, errors, skippedComplaints };
  }

  const recipeSleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // =========================
  // AUTO SOAP / AUTO KONSUL
  // =========================
  // Mengambil data yang SUDAH TERISI di Assessment Gawat Darurat.
  // Pemeriksaan fisik sengaja disalin mentah apa adanya dari field Assessment Gadar,
  // tanpa diubah menjadi narasi/interpretasi baru.

  function soapFieldValueByContainer(root, labels) {
    const wanted = labels.map(norm);
    const selector = 'input:not([type="hidden"]):not([type="button"]):not([type="submit"]):not([type="radio"]):not([type="checkbox"]), textarea, select, [contenteditable="true"]';

    // Smartplus pada Assessment Gadar menggunakan teks label biasa di dalam
    // satu TD/container, bukan selalu elemen <label>. Cari container terkecil
    // yang memuat label dan field-nya.
    const containers = [...root.querySelectorAll("td, .form-group, .control-group, fieldset, div")]
      .filter(visible)
      .filter(el => {
        const t = textOf(el);
        return wanted.some(w => t === w || t.startsWith(w + " ") || t.includes(w));
      })
      .map(el => ({
        el,
        fields: [...el.querySelectorAll(selector)].filter(visible)
      }))
      .filter(x => x.fields.length > 0)
      .sort((a,b) => {
        const ad = a.el.querySelectorAll("td, .form-group, .control-group, fieldset, div").length;
        const bd = b.el.querySelectorAll("td, .form-group, .control-group, fieldset, div").length;
        // Prefer container dengan lebih sedikit nested node dan field lebih dekat.
        return (ad - bd) || (a.fields.length - b.fields.length);
      });

    for (const item of containers) {
      if (item.fields.length === 1) {
        return String(item.fields[0].value ?? item.fields[0].textContent ?? "").trim();
      }

      // Bila satu TD memuat beberapa field, gunakan posisi label dan field
      // secara berurutan: field setelah teks label adalah kandidat utama.
      const raw = textOf(item.el);
      for (const w of wanted) {
        const pos = raw.indexOf(w);
        if (pos < 0) continue;
        const candidates = item.fields.map(f => ({
          f,
          top: f.getBoundingClientRect().top,
          left: f.getBoundingClientRect().left
        })).sort((a,b) => a.top - b.top || a.left - b.left);

        if (candidates[0]) {
          return String(candidates[0].f.value ?? candidates[0].f.textContent ?? "").trim();
        }
      }
    }

    return "";
  }

  function soapFieldValue(root, labels, allowRadio = false) {
    const wanted = labels.map(norm);

    const containerValue = soapFieldValueByContainer(root, labels);
    if (containerValue) return containerValue;

    // 1. Label -> field terhubung / field terdekat.
    for (const label of [...root.querySelectorAll("label")].filter(visible)) {
      const lt = textOf(label);
      if (!wanted.some(w => lt === w || lt.includes(w))) continue;

      const id = label.getAttribute("for");
      if (id) {
        const f = root.querySelector("#" + CSS.escape(id));
        if (f && visible(f)) return String(f.value ?? f.textContent ?? "").trim();
      }

      const parent = label.closest("td, .form-group, .control-group, fieldset, div");
      if (parent) {
        const f = [...parent.querySelectorAll(
          'input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"]), textarea, select, [contenteditable="true"]'
        )].find(visible);
        if (f) return String(f.value ?? f.textContent ?? "").trim();

        if (allowRadio) {
          const checked = parent.querySelector('input[type="radio"]:checked, input[type="checkbox"]:checked');
          if (checked) {
            const checkedLabel = checked.closest("label")?.innerText ||
              checked.parentElement?.innerText || checked.value || "";
            return String(checkedLabel).trim();
          }
        }
      }
    }

    // 2. Meta/id/name/placeholder.
    for (const f of allFields(root)) {
      const meta = norm([
        f.placeholder, f.name, f.id,
        f.getAttribute("aria-label"), f.getAttribute("title")
      ].filter(Boolean).join(" "));
      if (wanted.some(w => meta === w || meta.includes(w))) {
        if ((f.type === "radio" || f.type === "checkbox") && !f.checked) continue;
        return String(f.value ?? f.textContent ?? "").trim();
      }
    }

    // 3. Container teks + satu field.
    const containers = [...root.querySelectorAll("td, .form-group, .control-group, fieldset")]
      .filter(visible)
      .filter(el => wanted.some(w => textOf(el).includes(w)))
      .sort((a,b) =>
        a.querySelectorAll("input,textarea,select,[contenteditable='true']").length -
        b.querySelectorAll("input,textarea,select,[contenteditable='true']").length
      );

    for (const node of containers) {
      const fs = [...node.querySelectorAll(
        'input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"]), textarea, select, [contenteditable="true"]'
      )].filter(visible);
      if (fs.length === 1) return String(fs[0].value ?? fs[0].textContent ?? "").trim();

      if (allowRadio) {
        const checked = [...node.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked')]
          .find(visible);
        if (checked) {
          return String(
            checked.closest("label")?.innerText ||
            checked.parentElement?.innerText || checked.value || ""
          ).trim();
        }
      }
    }

    return "";
  }

  function soapRawPhysicalExam(root) {
    // Target utama sesuai form screenshot: textarea di area "Pemeriksaan Fisik :".
    const exactContainers = [...root.querySelectorAll("td, .form-group, fieldset, div")]
      .filter(visible)
      .filter(el => {
        const t = textOf(el);
        return /pemeriksaan fisik/.test(t) &&
          el.querySelector('textarea, input:not([type="hidden"]), [contenteditable="true"]');
      })
      .sort((a,b) =>
        a.querySelectorAll("textarea,input,[contenteditable='true']").length -
        b.querySelectorAll("textarea,input,[contenteditable='true']").length
      );

    for (const node of exactContainers) {
      const fields = [...node.querySelectorAll(
        'textarea, input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"]), [contenteditable="true"]'
      )].filter(visible);
      if (fields.length === 1) {
        return String(fields[0].value ?? fields[0].textContent ?? "").trim();
      }
    }

    return soapFieldValue(root, ["Pemeriksaan Fisik", "Pemeriksaan Fisik :", "Fisik"]);
  }

  function soapClean(v) {
    return String(v || "")
      .replace(/\u00a0/g, " ")
      .replace(/\r\n?/g, "\n")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }

  function soapVital(v, unit) {
    const s = soapClean(v);
    if (!s) return "-";
    if (unit === "pulse") return s.replace(/\s*x\s*$/i, "");
    if (unit === "bb") return s.replace(/\s*(kg|kgs?)\s*$/i, "");
    if (unit === "temp") return s.replace(/\s*°?c\s*$/i, "");
    return s;
  }

  function soapPatientHeader(root) {
    /*
     * Assessment Gadar pada screenshot:
     * "Assessment Gawat Darurat <--> <No RM> / <No Registrasi> /
     * <NAMA PASIEN>, Nn ( P ) / <dd-mm-yyyy> ( <umur> thn <n> bln <n> hr )"
     * (contoh disamarkan; jangan simpan data pasien asli di kode)
     *
     * Parser v2.38 dibuat lebih longgar dan tidak bergantung pada struktur
     * modal tertentu. Sumber dicoba berurutan:
     * 1) modal/header Assessment Gadar
     * 2) parent dari judul modal
     * 3) elemen dengan teks "Assessment Gawat Darurat"
     * 4) Data Pasien pada halaman
     * 5) seluruh body sebagai fallback
     */

    const parse = (txt) => {
      const s = String(txt || "")
        .replace(/\u00a0/g, " ")
        .replace(/\r\n?/g, "\n")
        .replace(/[ \t]+/g, " ")
        .replace(/\n+/g, " ")
        .trim();

      if (!s) return null;

      const cleanName = (name) => String(name || "")
        .replace(/^\s*\d+\s*[.)-]\s*/, "")
        .replace(/^\s*\d+\.\s*/, "")
        .trim();

      // Pola utama: NAMA, Tn/Ny/Nn/An (L/P) / TGL LAHIR (UMUR)
      let m = s.match(
        /(?:Assessment\s+Gawat\s+Darurat[\s\S]*?)?\/\s*[^/]+?\s*\/\s*([^/]+?)\s*,\s*(Tn|Ny|Nn|An)\s*\(\s*([LP])\s*\)\s*\/\s*(\d{1,2}[-\/]\d{1,2}[-\/]\d{4})\s*\(\s*([^)]+?)\s*\)/i
      );
      if (m) {
        return {
          name: cleanName(m[1]),
          title: m[2].trim(),
          sex: m[3].toUpperCase(),
          dob: m[4].trim(),
          age: m[5].replace(/\s+/g, " ").trim()
        };
      }

      // Pola tanpa gelar.
      m = s.match(
        /\/\s*[^/]+?\s*\/\s*([^/]+?)\s*\(\s*([LP])\s*\)\s*\/\s*(\d{1,2}[-\/]\d{1,2}[-\/]\d{4})\s*\(\s*([^)]+?)\s*\)/i
      );
      if (m) {
        return {
          name: cleanName(m[1]),
          title: "",
          sex: m[2].toUpperCase(),
          dob: m[3].trim(),
          age: m[4].replace(/\s+/g, " ").trim()
        };
      }

      // Pola langsung dari baris Data Pasien halaman.
      m = s.match(
        /Data\s*Pasien\s*:?\s*([^/]+?)\s*,\s*(Tn|Ny|Nn|An)\s*\/\s*[^/]+\s*\/\s*[^/]+\s*\/\s*([LP])\s*\/\s*(\d{1,3})\s*(?:Thn|Tahun)/i
      );
      if (m) {
        return {
          name: cleanName(m[1]),
          title: m[2].trim(),
          sex: m[3].toUpperCase(),
          dob: "",
          age: `${m[4]} thn`
        };
      }

      // Paling longgar: nama + gelar + JK + DOB + usia, di mana saja.
      m = s.match(
        /([A-Za-z][A-Za-z0-9 .,'’`-]{2,}?)\s*,\s*(Tn|Ny|Nn|An)\s*\(\s*([LP])\s*\)\s*\/\s*(\d{1,2}[-\/]\d{1,2}[-\/]\d{4})\s*\(\s*([^)]+?)\s*\)/i
      );
      if (m) {
        return {
          name: cleanName(m[1]),
          title: m[2].trim(),
          sex: m[3].toUpperCase(),
          dob: m[4].trim(),
          age: m[5].replace(/\s+/g, " ").trim()
        };
      }

      return null;
    };

    const sources = [];

    // Header/judul modal dan parent-nya.
    for (const el of [
      ...document.querySelectorAll(".modal-title, .modal-header")
    ].filter(visible)) {
      sources.push(el.innerText || el.textContent || "");
      if (el.parentElement) sources.push(el.parentElement.innerText || el.parentElement.textContent || "");
    }

    // Elemen yang mengandung teks header Assessment Gadar.
    for (const el of [
      ...document.querySelectorAll("h1,h2,h3,h4,h5,p,div,td,span")
    ].filter(visible)) {
      const t = String(el.innerText || el.textContent || "");
      if (/Assessment\s+Gawat\s+Darurat/i.test(t)) {
        sources.push(t);
      }
    }

    // Kandidat Data Pasien di halaman.
    for (const el of [
      ...document.querySelectorAll("body *")
    ].filter(visible)) {
      const t = String(el.innerText || el.textContent || "");
      if (/Data\s*Pasien\s*:/i.test(t) && t.length < 500) {
        sources.push(t);
      }
    }

    // Body sebagai fallback terakhir.
    sources.push(document.body?.innerText || "");

    for (const source of sources) {
      const parsed = parse(source);
      if (parsed && parsed.name) {
        return parsed;
      }
    }

    return { name: "", title: "", sex: "", dob: "", age: "" };
  }

  async function copySoapText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        ta.style.top = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand("copy");
        ta.remove();
        return ok;
      } catch (e) {
        console.warn("[AUTO SOAP] Clipboard gagal", e);
        return false;
      }
    }
  }

  async function runAutoSoap() {
    const root = modalRoot();
    if (!root || root === document.body) {
      toast("AUTO SOAP: buka Assessment Gawat Darurat terlebih dahulu.");
      return;
    }

    const p = soapPatientHeader(root);

    const keluhan = soapClean(soapFieldValue(root, ["Keluhan Utama", "Keluhan"]));
    const rps = soapClean(soapFieldValue(root, ["Riwayat Penyakit Sekarang", "RPS"]));
    const kesadaran = soapClean(soapFieldValue(root, ["Kesadaran"], true));
    const gcs = soapClean(soapFieldValue(root, ["Glasgow Coma Scale", "GCS", "Glosgow Coma"]));
    const td = soapVital(soapFieldValue(root, ["Tekanan Darah", "TD"]), "td");
    const nadi = soapVital(soapFieldValue(root, ["Nadi"]), "pulse");
    const napas = soapVital(soapFieldValue(root, ["Pernafasan", "Pernapasan", "Napas", "RR", "Frekuensi Napas"]), "rr");
    const suhu = soapVital(soapFieldValue(root, ["Suhu", "Temperature"]), "temp");
    const bb = soapVital(soapFieldValue(root, ["Berat", "Berat Badan", "BB"]), "bb");
    const fisik = soapClean(soapRawPhysicalExam(root));
    const diagnosis = soapClean(soapFieldValue(root, [
      "Diagnosis Kerja dan Diagnosis Banding", "Diagnosis", "Diagnosa"
    ]));
    const plan = soapClean(soapFieldValue(root, [
      "Rencana (Tindakan, Terapi, dll)", "Rencana", "Terapi", "Penatalaksanaan"
    ]));

    const identity = `${p.name}${p.title ? `, ${p.title}` : ""}${p.sex ? ` ( ${p.sex})` : ""}`;
    const dob = p.dob ? ` / ${p.dob}` : "";
    const age = p.age ? ` ( ${p.age} )` : "";

    const soap = [
      "Assalamualaikum. Izin konsul pasien IGD dengan saya Dokter Taufan.",
      `${identity}${dob}${age}`,
      "",
      "*S :*",
      `Keluhan Utama: ${keluhan || "-"}`,
      `RPS: ${rps || "-"}`,
      "",
      "*O :*",
      "*Tanda-tanda vital*",
      `Kesadaran: ${kesadaran || "-"}`,
      `GCS: ${gcs || "-"}`,
      `TD: ${td} mmHg`,
      `Nadi: ${nadi} x/menit`,
      `Napas: ${napas} x/menit`,
      `Suhu: ${suhu} °C`,
      `BB: ${bb} kg`,
      "",
      "*Pemeriksaan fisik :*",
      fisik || "-",
      "",
      "*A :*",
      diagnosis || "-",
      "",
      "*P :*",
      plan || "-",
      "",
      "Mohon advis. Terima kasih sebelumnya, Dok."
    ].join("\n");

    const copied = await copySoapText(soap);
    if (copied) {
      toast("AUTO SOAP berhasil dicopy. Silakan Paste di WhatsApp/Chat/EMR.");
      console.log("[AUTO SOAP] copied:\n" + soap);
    } else {
      toast("AUTO SOAP terbentuk tetapi gagal dicopy. Cek console.");
      console.log("[AUTO SOAP] text:\n" + soap);
    }
  }

  // =========================
  // AUTO LAB
  // =========================
  function latestVisibleLabModal() {
    const candidates = [...document.querySelectorAll(
      '.modal, .modal-dialog, [role="dialog"], form, fieldset, section'
    )]
      .filter(visible)
      .filter((el) => {
        const t = norm(el.innerText || el.textContent || "");
        return /diagnosis\s*\/\s*keterangan klinis|indikasi klinis|hematologi|hemostasis/.test(t);
      })
      .sort((a, b) =>
        b.getBoundingClientRect().width * b.getBoundingClientRect().height -
        a.getBoundingClientRect().width * a.getBoundingClientRect().height
      );
    return candidates[0] || null;
  }

  function waitForVisibleLabModal(timeout = 5000, interval = 100) {
    return new Promise((resolve) => {
      const started = Date.now();
      const tick = () => {
        const root = latestVisibleLabModal();
        if (root) return resolve(root);
        if (Date.now() - started >= timeout) return resolve(null);
        setTimeout(tick, interval);
      };
      tick();
    });
  }

  function clickVisibleTextWithin(root, phrases) {
    if (!root) return false;
    const wanted = (Array.isArray(phrases) ? phrases : [phrases]).map(norm);
    const candidates = [
      ...root.querySelectorAll("button, a, input[type='button'], input[type='submit'], [role='button']")
    ].filter(visible);
    for (const el of candidates) {
      const txt = norm(el.innerText || el.textContent || el.value || "");
      if (wanted.some((w) => txt === w || txt.includes(w))) {
        try {
          el.click();
          return true;
        } catch (_) {}
      }
    }
    return false;
  }

  function setLabFieldByNearbyText(root, labels, value) {
    if (!root) return false;
    if (setByLabel(root, labels, value, false)) return true;

    const wanted = labels.map(norm);
    const containers = [...root.querySelectorAll("td, .form-group, fieldset, div, section")]
      .filter(visible)
      .filter((el) => {
        const t = norm(el.innerText || el.textContent || "");
        return wanted.some((w) => t.includes(w));
      })
      .sort((a, b) => {
        const aa = a.querySelectorAll("textarea,input:not([type='hidden']),select").length;
        const bb = b.querySelectorAll("textarea,input:not([type='hidden']),select").length;
        return aa - bb;
      });

    for (const node of containers) {
      const fields = [...node.querySelectorAll(
        'textarea, input:not([type="hidden"]):not([type="button"]):not([type="submit"]), select, [contenteditable="true"]'
      )].filter(visible);
      if (fields.length === 1) return setValue(fields[0], value);
    }
    return false;
  }

  function checkLabOptionByText(root, phrase) {
    if (!root) return false;
    const wanted = norm(phrase);

    // 1) Prioritaskan label yang benar-benar berisi teks pemeriksaan.
    for (const label of [...root.querySelectorAll('label')].filter(visible)) {
      const txt = norm(label.innerText || label.textContent || '');
      if (!txt.includes(wanted)) continue;
      const id = label.getAttribute('for');
      let checkbox = id ? document.getElementById(id) : null;
      if (!checkbox) checkbox = label.querySelector('input[type="checkbox"]');
      if (!checkbox) checkbox = label.parentElement?.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.type === 'checkbox') {
        if (!checkbox.checked) { try { checkbox.click(); } catch (_) {} fire(checkbox); }
        return !!checkbox.checked;
      }
      try { label.click(); } catch (_) {}
    }

    // 2) Form SP Laboratorium pada screenshot menggunakan checkbox diikuti
    // teks pemeriksaan, tanpa harus dibungkus <label>. Cari checkbox yang
    // container terdekatnya memuat tepat nama pemeriksaan.
    const checkboxes = [...root.querySelectorAll('input[type="checkbox"]')].filter(visible);
    for (const checkbox of checkboxes) {
      let node = checkbox.parentElement;
      let depth = 0;
      while (node && node !== root && depth < 5) {
        const txt = norm(node.innerText || node.textContent || '');
        if (txt.includes(wanted)) {
          const siblingText = norm([...node.childNodes]
            .filter(n => n.nodeType === Node.TEXT_NODE)
            .map(n => n.textContent || '').join(' '));
          // Hindari memilih checkbox dari kelompok besar yang memuat banyak
          // pemeriksaan; pilih container kecil dengan teks target.
          const localCheckboxes = [...node.querySelectorAll('input[type="checkbox"]')].filter(visible);
          if (localCheckboxes.length <= 2 || siblingText.includes(wanted)) {
            if (!checkbox.checked) { try { checkbox.click(); } catch (_) {} fire(checkbox); }
            return !!checkbox.checked;
          }
        }
        node = node.parentElement;
        depth++;
      }
    }

    // 3) Fallback berbasis elemen teks + checkbox terdekat.
    const nodes = [...root.querySelectorAll('td, div, span, p')].filter(visible);
    for (const node of nodes) {
      const txt = norm(node.innerText || node.textContent || '');
      if (!txt.includes(wanted)) continue;
      const checkbox = node.querySelector('input[type="checkbox"]') ||
        node.parentElement?.querySelector('input[type="checkbox"]');
      if (checkbox) {
        if (!checkbox.checked) { try { checkbox.click(); } catch (_) {} fire(checkbox); }
        return !!checkbox.checked;
      }
    }
    return false;
  }

  // v3.4.0: ambil diagnosis dari Assesment GADAR TERAKHIR pada KUNJUNGAN INI.
  // Sumber (hasil inspeksi DOM e-IGD):
  // - Daftar GADAR dimuat saat tab #new_gadar diklik; tiap baris punya update_gadar('<id>').
  // - Data lengkap dibaca (GET, tidak mengubah apa pun) dari soap_igd/soap_gadar_edit/<id>
  //   -> field diagnosa_banding ("Diagnosis Kerja dan Diagnosa Banding").
  // Hanya GADAR dengan id_reg = noreg kunjungan sekarang yang dipakai, supaya
  // diagnosis kunjungan lama tidak terbawa. Jika tidak ada -> null (pakai default lama).
  function getCurrentIgdNoreg() {
    const m = location.pathname.match(/pasien_detail\/([^/]+)/i);
    return m ? decodeURIComponent(m[1]) : null;
  }

  function collectGadarIds() {
    return [...document.querySelectorAll("#box_gadar a")]
      .map((a) => ((a.getAttribute("onclick") || "") + (a.getAttribute("href") || "")).match(/update_gadar\('(\d+)'\)/))
      .filter(Boolean)
      .map((m) => Number(m[1]));
  }

  async function getLatestGadarDiagnosis() {
    const noreg = getCurrentIgdNoreg();
    let ids = collectGadarIds();

    // Daftar GADAR belum dimuat -> klik tab Assesment GADAR lalu tunggu.
    if (!ids.length) {
      const tab = document.getElementById("new_gadar");
      if (!tab) return null;
      tab.click();
      for (let i = 0; i < 40 && !ids.length; i++) {
        await recipeSleep(150);
        ids = collectGadarIds();
      }
    }
    if (!ids.length) return null;

    // id terbesar = paling baru. Cek beberapa teratas sampai ketemu kunjungan ini.
    ids = [...new Set(ids)].sort((a, b) => b - a).slice(0, 5);
    const base = location.href.split("/soap_igd/")[0];
    for (const id of ids) {
      try {
        const res = await fetch(`${base}/soap_igd/soap_gadar_edit/${id}`, { credentials: "same-origin" });
        if (!res.ok) continue;
        const data = await res.json();
        if (noreg && data.id_reg && String(data.id_reg) !== noreg) continue;
        const dx = String(data.diagnosa_banding || data.masalah_kesehatan || "").replace(/\s+/g, " ").trim();
        if (dx && dx.toLowerCase() !== "null") {
          return { diagnosis: dx, idGadar: id, tanggal: data.gadar_date || "" };
        }
      } catch (err) {
        console.warn("[AUTO LAB] gagal membaca GADAR", id, err);
      }
    }
    return null;
  }

  async function runAutoLabFebris() {
    // v3.4.0: cek diagnosis GADAR terakhir dulu.
    toast("AUTO LAB: mengecek diagnosis Assesment GADAR terakhir...");
    const gadarDx = await getLatestGadarDiagnosis();
    const labDiagnosis = gadarDx ? gadarDx.diagnosis : "febris";
    console.log("[AUTO LAB] diagnosis dipakai:", labDiagnosis, gadarDx);

    toast("AUTO LAB: membuka Order Lab...");

    const labTab = document.getElementById("a_labmodal");
    if (labTab && visible(labTab)) labTab.click();
    else if (!clickVisibleText(["Order Lab"])) {
      toast("AUTO LAB: tombol Order Lab tidak ditemukan.");
      return;
    }

    await recipeSleep(700);

    // Utamakan TAMBAH milik Order Lab (indexlab). Fallback teks lama.
    let labTambah = null;
    for (let i = 0; i < 30 && !labTambah; i++) {
      labTambah = [...document.querySelectorAll('#box_labmodal button[onclick*="indexlab"]')].find(visible) || null;
      if (!labTambah) await recipeSleep(100);
    }
    if (labTambah) labTambah.click();
    else if (!clickVisibleText(["+ TAMBAH", "TAMBAH"])) {
      toast("AUTO LAB: tombol + TAMBAH tidak ditemukan.");
      return;
    }

    const root = await waitForVisibleLabModal(5000, 100);
    if (!root) {
      toast("AUTO LAB: form Order Lab tidak ditemukan.");
      return;
    }

    const fail = [];

    if (!setLabFieldByNearbyText(root,
      ["Diagnosis / Keterangan Klinis", "Diagnosis", "Keterangan Klinis"],
      labDiagnosis
    )) fail.push("Diagnosis");

    if (!setLabFieldByNearbyText(root,
      ["Indikasi Klinis", "Indikasi"],
      "dx"
    )) fail.push("Indikasi Klinis");

    if (!checkLabOptionByText(root, "Hema rutin")) fail.push("Hema rutin");

    const patientAgeYears = getPatientAgeYears(root);
    const needsGlucoseSewaktu = patientAgeYears !== null && patientAgeYears > 39;

    console.log('[AUTO LAB] usia terbaca dari form:', patientAgeYears);

    if (needsGlucoseSewaktu) {
      if (!checkLabOptionByText(root, "Glukosa Sewaktu")) {
        fail.push("Glukosa Sewaktu (usia >39 tahun)");
      }
    }

    // Beri waktu form memproses checkbox sebelum Save.
    await recipeSleep(500);

    if (!clickVisibleTextWithin(root, ["Save"])) fail.push("Save");

    const dxNote = gadarDx
      ? ` Diagnosis dari GADAR terakhir: "${labDiagnosis}".`
      : ` ⚠️ GADAR kunjungan ini tidak ditemukan, diagnosis memakai "febris".`;

    if (fail.length) {
      toast("AUTO LAB selesai sebagian." + dxNote + " Perlu cek manual: " + fail.join(", "));
      console.warn("[AUTO LAB] Field gagal:", fail);
    } else {
      toast(
        needsGlucoseSewaktu
          ? "AUTO LAB selesai. Hema rutin + Glukosa Sewaktu dipilih (usia >39 tahun), dan Save ditekan." + dxNote
          : "AUTO LAB selesai. Hema rutin dipilih, dan Save ditekan." + dxNote
      );
      console.log("[AUTO LAB] Febris selesai", {
        age: patientAgeYears,
        glukosaSewaktu: needsGlucoseSewaktu
      });
    }
  }

  // =========================
  // AUTO RO THORAX (v3.6.0)
  // =========================
  // Pola sama dengan AUTO LAB, memakai selector tetap hasil inspeksi DOM e-IGD:
  // tab #a_radmodal -> TAMBAH indexrad() -> modal #Modalradmod
  // -> diag (diagnosis GADAR terakhir), indikasi_klinis "dx",
  //    checkbox value "Thorax PA/AP" -> Save #setsaverad (atas instruksi dokter).
  const RAD_SELECTORS = {
    tab: "#a_radmodal",
    tambah: '#box_radmodal button[onclick*="indexrad"]',
    modal: "#Modalradmod",
    save: "#setsaverad"
  };

  async function waitForVisibleSelector(selector, timeout = 6000, interval = 100) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
      const el = [...document.querySelectorAll(selector)].find(visible);
      if (el) return el;
      await recipeSleep(interval);
    }
    return null;
  }

  async function runAutoRoThorax() {
    toast("AUTO RO THORAX: mengecek diagnosis Assesment GADAR terakhir...");
    const gadarDx = await getLatestGadarDiagnosis();
    const radDiagnosis = gadarDx ? gadarDx.diagnosis : "febris";
    console.log("[AUTO RAD] diagnosis dipakai:", radDiagnosis, gadarDx);

    toast("AUTO RO THORAX: membuka Order Radiologi...");
    const tab = document.querySelector(RAD_SELECTORS.tab);
    if (tab && visible(tab)) tab.click();
    else if (!clickVisibleText(["Order Radiologi"])) {
      toast("AUTO RO THORAX: tab Order Radiologi tidak ditemukan.");
      return;
    }

    const tambah = await waitForVisibleSelector(RAD_SELECTORS.tambah, 5000);
    if (!tambah) {
      toast("AUTO RO THORAX: tombol TAMBAH Order Radiologi tidak ditemukan.");
      return;
    }
    tambah.click();

    // Modal dimuat via AJAX; tunggu checkbox Thorax PA/AP tersedia.
    let modal = null;
    let thorax = null;
    const started = Date.now();
    while (Date.now() - started < 8000 && !thorax) {
      modal = [...document.querySelectorAll(RAD_SELECTORS.modal)].find(visible) || null;
      thorax = modal ? modal.querySelector('input[type="checkbox"][value="Thorax PA/AP"]') : null;
      if (!thorax) await recipeSleep(120);
    }
    if (!modal || !thorax) {
      toast("AUTO RO THORAX: form Radiologi / pilihan Thorax PA/AP tidak ditemukan.");
      return;
    }

    const fail = [];
    const diag = modal.querySelector('#diag, [name="diag"]');
    if (!(diag && setValue(diag, radDiagnosis))) fail.push("Diagnosa Kerja");

    const indikasi = modal.querySelector('#indikasi_klinis, [name="indikasi_klinis"]');
    if (!(indikasi && setValue(indikasi, "dx"))) fail.push("Indikasi Klinis");

    if (!thorax.checked) {
      try { thorax.click(); } catch (_) {}
      fire(thorax);
    }
    if (!thorax.checked) fail.push("Thorax PA/AP");

    const dxNote = gadarDx
      ? ` Diagnosis dari GADAR terakhir: "${radDiagnosis}".`
      : ` ⚠️ GADAR kunjungan ini tidak ditemukan, diagnosis memakai "febris".`;

    // Jangan Save jika ada yang gagal, supaya order tidak terkirim setengah jadi.
    if (fail.length) {
      toast("AUTO RO THORAX belum disimpan. Cek manual: " + fail.join(", ") + "." + dxNote);
      console.warn("[AUTO RAD] gagal:", fail);
      return;
    }

    await recipeSleep(500);
    const save = [...modal.querySelectorAll(RAD_SELECTORS.save)].find(visible) ||
      [...document.querySelectorAll(RAD_SELECTORS.save)].find(visible);
    if (!save) {
      toast("AUTO RO THORAX: form terisi, tombol Save tidak ditemukan. Simpan manual." + dxNote);
      return;
    }
    save.click();
    toast("AUTO RO THORAX selesai: Thorax PA/AP dipilih dan Save ditekan." + dxNote);
    console.log("[AUTO RAD] selesai", { diagnosis: radDiagnosis, idGadar: gadarDx && gadarDx.idGadar });
  }

  function clickVisibleText(phrases) {
    const wanted = (Array.isArray(phrases) ? phrases : [phrases]).map(norm);

    const candidates = [
      ...document.querySelectorAll("button, a, input[type='button'], input[type='submit'], [role='button']")
    ].filter(visible);

    for (const el of candidates) {
      const txt = norm(el.innerText || el.textContent || el.value || "");
      if (wanted.some((w) => txt === w || txt.includes(w))) {
        try {
          el.click();
          return true;
        } catch (_) {}
      }
    }
    return false;
  }

  function findRecipeInput(labels) {
    const wanted = labels.map(norm);

    for (const label of [...document.querySelectorAll("label")].filter(visible)) {
      const txt = textOf(label);
      if (!wanted.some((w) => txt === w || txt.includes(w))) continue;

      const id = label.getAttribute("for");
      if (id) {
        const f = document.getElementById(id);
        if (f && visible(f)) return f;
      }

      const parent = label.closest("td, .form-group, .control-group, div");
      const f = parent?.querySelector(
        "input:not([type='hidden']):not([type='button']):not([type='submit']), textarea, select"
      );
      if (f && visible(f)) return f;
    }

    const nodes = [...document.querySelectorAll("td, .form-group, .control-group, div")]
      .filter(visible)
      .filter((el) => {
        const t = textOf(el);
        return wanted.some((w) => t.includes(w));
      })
      .sort((a, b) => {
        const af = a.querySelectorAll("input,textarea,select").length;
        const bf = b.querySelectorAll("input,textarea,select").length;
        return af - bf;
      });

    for (const node of nodes) {
      const fs = [...node.querySelectorAll(
        "input:not([type='hidden']):not([type='button']):not([type='submit']), textarea, select"
      )].filter(visible);
      if (fs.length === 1) return fs[0];
      if (fs.length > 1) {
        const direct = fs.find((f) => {
          const meta = norm([f.name, f.id, f.placeholder, f.getAttribute("aria-label")].filter(Boolean).join(" "));
          return wanted.some((w) => meta.includes(w));
        });
        if (direct) return direct;
      }
    }

    return null;
  }

  async function selectAutocomplete(input, query) {
    if (!input) return false;

    setValue(input, "");
    input.focus();

    // Ketik ulang dengan event input/change agar autocomplete Smartplus/AJAX aktif.
    setValue(input, query);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
    input.dispatchEvent(new Event("keyup", { bubbles: true }));

    try {
      input.dispatchEvent(new KeyboardEvent("keydown", {
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
        which: 40,
        bubbles: true
      }));
    } catch (_) {}

    await recipeSleep(700);

    const selectors = [
      ".ui-autocomplete li",
      ".ui-menu-item",
      ".autocomplete li",
      ".dropdown-menu li",
      ".typeahead li",
      ".select2-results__option",
      "[role='option']"
    ];

    let options = [];
    for (const selector of selectors) {
      options.push(...document.querySelectorAll(selector));
    }

    options = [...new Set(options)].filter(visible);

    const q = norm(query);
    // Smartplus kadang menampilkan nama obat autocomplete tanpa tanda *,
    // sementara master template menyimpan nama dengan *. Cari dengan dua bentuk.
    const qLoose = norm(query).replace(/[^a-z0-9]+/g, "");
    const queryBase = String(query || "").replace(/\*+/g, "").trim();
    const qBase = norm(queryBase);
    const qBaseLoose = qBase.replace(/[^a-z0-9]+/g, "");

    const optionText = (el) => norm(el.innerText || el.textContent || "");
    const optionLoose = (el) => optionText(el).replace(/[^a-z0-9]+/g, "");

    let option = options.find((el) => optionText(el) === q);

    if (!option) {
      option = options.find((el) => optionText(el) === qBase);
    }

    if (!option) {
      option = options.find((el) => {
        const t = optionText(el);
        const tl = optionLoose(el);
        return (q && t.includes(q)) ||
          (qBase && t.includes(qBase)) ||
          (qLoose && tl.includes(qLoose)) ||
          (qBaseLoose && tl.includes(qBaseLoose));
      });
    }

    if (!option) {
      const tokens = qBase.split(/\s+/).filter(Boolean).slice(0, 4);
      option = options.find((el) => {
        const t = optionText(el);
        return tokens.length > 0 &&
          tokens.every(token => t.includes(token));
      });
    }

    if (option) {
      try {
        option.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window }));
      } catch (_) {}
      try {
        option.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window }));
      } catch (_) {}
      try {
        option.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
      } catch (_) {}
      try {
        option.click();
      } catch (_) {}
      await recipeSleep(500);

      // Beberapa versi Smartplus baru mengisi field setelah event mouseup/click.
      // Beri kesempatan tambahan dan pastikan field benar-benar terisi.
      const afterPick = norm(input.value || "");
      if (!afterPick && qBase) {
        try {
          input.dispatchEvent(new Event("change", { bubbles: true }));
          input.dispatchEvent(new Event("blur", { bubbles: true }));
        } catch (_) {}
        await recipeSleep(200);
      }
      // Jangan anggap berhasil hanya karena opsi ditemukan.
      // Smartplus harus benar-benar mengisi kolom Obat.
      let pickedValue = norm(input.value || "");

      // ANTASIDA pada Smartplus kadang hanya cocok bila pencarian diulang
      // tanpa tanda bintang dan tanpa sufiks tambahan.
      if (!pickedValue && /antasida/i.test(query)) {
        const retryQuery = "ANTASIDA";
        setValue(input, "");
        setValue(input, retryQuery);
        input.focus();
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
        input.dispatchEvent(new Event("keyup", { bubbles: true }));
        await recipeSleep(900);

        const retryOptions = [...document.querySelectorAll(
          ".ui-autocomplete li, .ui-menu-item, .autocomplete li, .dropdown-menu li, .typeahead li, .select2-results__option, [role='option']"
        )].filter(visible);

        const retry = retryOptions.find(el => /antasida/i.test(el.innerText || el.textContent || ""));
        if (retry) {
          try { retry.dispatchEvent(new MouseEvent("mousedown", { bubbles:true, cancelable:true, view:window })); } catch (_) {}
          try { retry.dispatchEvent(new MouseEvent("mouseup", { bubbles:true, cancelable:true, view:window })); } catch (_) {}
          try { retry.dispatchEvent(new MouseEvent("click", { bubbles:true, cancelable:true, view:window })); } catch (_) {}
          try { retry.click(); } catch (_) {}
          await recipeSleep(600);
        }
        pickedValue = norm(input.value || "");
      }

      return Boolean(pickedValue);
    }

    // Fallback keyboard: tekan ArrowDown + Enter.
    try {
      input.focus();
      input.dispatchEvent(new KeyboardEvent("keydown", {
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
        which: 40,
        bubbles: true
      }));
      await recipeSleep(150);
      input.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: true
      }));
      input.dispatchEvent(new KeyboardEvent("keyup", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: true
      }));
      await recipeSleep(350);
    } catch (_) {}

    // Pastikan ada nilai setelah seleksi.
    const current = norm(input.value || "");
    return current.length > 0;
  }

  function escapeHtmlText(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function updateRecipeProgress(label, current = 0, total = 0, extra = "") {
    recipeProgress = { label, current, total, extra };
    let t = document.getElementById(STATUS_ID);
    if (!t) {
      t = document.createElement("div");
      t.id = STATUS_ID;
      document.documentElement.appendChild(t);
    }
    const safeCurrent = Number.isFinite(Number(current)) ? Number(current) : 0;
    const safeTotal = Number.isFinite(Number(total)) ? Number(total) : 0;
    const pct = safeTotal > 0 ? Math.max(0, Math.min(100, Math.round((safeCurrent / safeTotal) * 100))) : 8;
    t.innerHTML = `
      <div style="font-weight:800;margin-bottom:5px;">${escapeHtmlText(label || "Memproses...")}</div>
      <div style="font-size:12px;margin-bottom:6px;">${safeTotal > 0 ? `${Math.min(safeCurrent + 1, safeTotal)}/${safeTotal}` : "Memproses"}${extra ? ` • ${escapeHtmlText(extra)}` : ""}</div>
      <div style="height:7px;background:#495057;border-radius:999px;overflow:hidden;margin-bottom:8px;">
        <div style="height:100%;width:${pct}%;background:#7a4bd9;transition:width .2s ease;"></div>
      </div>
      <button type="button" id="sp-recipe-stop-btn" style="display:block;margin:0 auto;padding:7px 14px;border:0;border-radius:7px;background:#dc3545;color:#fff;font-weight:800;cursor:pointer;">⛔ STOP PROSES</button>`;
    t.style.display = "block";
    const stop = t.querySelector('#sp-recipe-stop-btn');
    if (stop) {
      stop.onclick = () => {
        recipeStopRequested = true;
        stop.disabled = true;
        stop.textContent = "⏳ Menghentikan...";
        t.querySelector('div:nth-child(2)')?.replaceChildren(document.createTextNode('Permintaan STOP diterima.')) ;
      };
    }
  }

  function isRecipeStopRequested() {
    return recipeStopRequested === true;
  }

  function clearRecipeProgress(message = "") {
    recipeProgress = null;
    const t = document.getElementById(STATUS_ID);
    if (!t) return;
    if (message) {
      t.textContent = message;
      t.style.display = "block";
      clearTimeout(toast.timer);
      toast.timer = setTimeout(() => { if (t) t.style.display = "none"; }, 5000);
    } else {
      t.style.display = "none";
    }
  }

  function recipeStatus(msg) {
    toast("AUTO RESEP: " + msg);
  }

  function findRecipeDraftRoot() {
    const candidates = [...document.querySelectorAll("div, td, fieldset, section, form")]
      .filter(visible)
      .filter((el) => {
        const t = norm(el.innerText || el.textContent || "");
        return t.includes("item resep baru");
      })
      .sort((a, b) =>
        a.getBoundingClientRect().width * a.getBoundingClientRect().height -
        b.getBoundingClientRect().width * b.getBoundingClientRect().height
      );

    return candidates[0] || null;
  }

  function hasExistingRecipeDraft() {
    const root = findRecipeDraftRoot();
    if (!root) return false;

    const tables = [...root.querySelectorAll("table")];
    for (const table of tables) {
      const rows = [...table.querySelectorAll("tbody tr")].filter((tr) => {
        return [...tr.querySelectorAll("td")].some((td) => norm(td.innerText || td.textContent || ""));
      });
      if (rows.length > 0) return true;
    }

    // Fallback konservatif: cari nama obat yang sudah tampil di area draft.
    const text = norm(root.innerText || root.textContent || "");
    return [
      "omeprazole", "domperidon", "paracetamol", "amoxicillin",
      "amoxycillin", "ambroxol", "ctm", "dexamethason",
      "diatab", "oralit", "zinc", "ranitidin", "ketorolac",
      "ondansetron", "spuit", "benang silkam", "underpad",
      "lidocain", "tetagam", "sedacum", "recofol", "endotracheal",
      "cathejell", "foley catheter", "urine bag", "ngt",
      "norephiephrin", "perfusor", "three way stopcocks"
    ].some((drug) => text.includes(drug));
  }

  function isRecipeTabActive() {
    return [...document.querySelectorAll(
      ".active, .nav-link.active, li.active, [aria-selected=\"true\"]"
    )]
      .filter(visible)
      .some((el) => /resep online/i.test(textOf(el)));
  }

  async function waitForRecipeDraftRoot(timeout = 7000, interval = 120) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
      const root = findRecipeDraftRoot();
      if (root) return root;
      await recipeSleep(interval);
    }
    return findRecipeDraftRoot();
  }

  function recipeTabText(el) {
    if (!el) return "";
    return norm([
      el.innerText,
      el.textContent,
      el.value,
      el.getAttribute?.("aria-label"),
      el.getAttribute?.("title")
    ].filter(Boolean).join(" "));
  }

  function findRecipeTabControl() {
    const wanted = "resep online";
    const selectors = [
      "a[href]",
      "button",
      "input[type='button']",
      "input[type='submit']",
      "[role='button']",
      ".nav-link",
      "li",
      "span",
      "div"
    ];
    const candidates = [...document.querySelectorAll(selectors.join(","))]
      .filter(visible);

    const exact = candidates
      .filter((el) => recipeTabText(el) === wanted)
      .sort((a, b) => {
        const rank = (el) => {
          const tag = el.tagName.toLowerCase();
          if (tag === "a") return 0;
          if (tag === "button") return 1;
          if (el.matches?.("input[type='button'],input[type='submit']")) return 2;
          if (el.matches?.("[role='button'],.nav-link")) return 3;
          if (tag === "li") return 4;
          return 5;
        };
        return rank(a) - rank(b);
      });

    if (exact[0]) return exact[0];
    return candidates.find((el) => recipeTabText(el).includes(wanted)) || null;
  }

  function dispatchFullClick(el) {
    if (!el) return false;
    let fired = false;
    for (const type of ["pointerdown", "mousedown", "pointerup", "mouseup", "click"]) {
      try {
        const ev = type.startsWith("pointer")
          ? new PointerEvent(type, { bubbles: true, cancelable: true, view: window, pointerType: "mouse" })
          : new MouseEvent(type, { bubbles: true, cancelable: true, view: window });
        el.dispatchEvent(ev);
        fired = true;
      } catch (_) {}
    }
    try { el.click(); fired = true; } catch (_) {}
    try { if (window.jQuery) window.jQuery(el).trigger("click"); } catch (_) {}
    return fired;
  }

  function findRecipeReadyText() {
    const bodyText = norm(document.body?.innerText || "");
    return /form input resep baru|item resep baru|input obat non-racikan/i.test(bodyText);
  }

  async function waitForRecipeReady(timeout = 12000, interval = 150) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
      const root = findRecipeDraftRoot();
      if (root || findRecipeReadyText()) return root || document.body;
      await recipeSleep(interval);
    }
    return findRecipeDraftRoot() || (findRecipeReadyText() ? document.body : null);
  }

  function allRecipeTabControls() {
    const wanted = "resep online";
    const all = [...document.querySelectorAll("a,button,input,li,[role='button'],[role='tab'],.nav-link,.btn,span,div")];
    return all.filter((el) => {
      const t = recipeTabText(el);
      return t === wanted || (t.includes(wanted) && t.length < 80);
    }).filter((el) => {
      try { return visible(el) || visible(el.parentElement); } catch (_) { return false; }
    });
  }

  function invokeRecipeControl(el) {
    if (!el) return false;
    let fired = false;
    const targets = [];
    let n = el;
    for (let i = 0; n && i < 5; i++, n = n.parentElement) {
      if (!targets.includes(n)) targets.push(n);
    }

    for (const target of targets) {
      try { target.focus?.(); } catch (_) {}
      try { target.click?.(); fired = true; } catch (_) {}
      try { dispatchFullClick(target); fired = true; } catch (_) {}

      // jQuery / Bootstrap lama.
      try {
        if (window.jQuery) {
          const $t = window.jQuery(target);
          $t.trigger('click');
          if (typeof $t.tab === 'function') $t.tab('show');
          fired = true;
        }
      } catch (_) {}

      // Bootstrap 5.
      try {
        if (window.bootstrap?.Tab) {
          const tabTarget = target.matches?.('[data-bs-toggle="tab"],[data-toggle="tab"]') ? target :
            target.querySelector?.('[data-bs-toggle="tab"],[data-toggle="tab"]');
          if (tabTarget) {
            window.bootstrap.Tab.getOrCreateInstance(tabTarget).show();
            fired = true;
          }
        }
      } catch (_) {}

      // Handler inline/property yang kadang tidak terpanggil oleh click sintetis.
      try {
        if (typeof target.onclick === 'function') {
          target.onclick.call(target, new MouseEvent('click', {bubbles:true,cancelable:true,view:window}));
          fired = true;
        }
      } catch (_) {}

      // Jika Smartplus memakai javascript: URL.
      try {
        const href = target.getAttribute?.('href') || '';
        if (/^javascript:/i.test(href)) {
          const code = href.replace(/^javascript:/i, '');
          if (code.trim()) Function(code).call(target);
          fired = true;
        }
      } catch (_) {}
    }
    return fired;
  }

  // Gunakan mekanisme yang SAMA persis dengan AUTO LAB untuk membuka menu.
  // AUTO LAB sudah terbukti dapat membuka "Order Lab" pada Smartplus ini.
  async function openRecipeTab() {
    // Jangan klik ulang Resep Online bila form/draft sudah terbuka.
    // Pada Smartplus, klik ulang tab dapat merender ulang panel dan menghapus
    // draft yang sudah dimasukkan. Pilihan paket berikutnya harus ADDITIVE.
    if (findRecipeDraftRoot() || findRecipeReadyText()) {
      recipeStatus("Resep Online sudah terbuka — mempertahankan resep sebelumnya.");
      return true;
    }

    recipeStatus("membuka Resep Online...");

    // Mengikuti pola yang sudah berhasil pada AUTO LAB: klik sekali lalu tunggu.
    if (!clickVisibleText(["Resep Online"])) {
      toast("MASTER TEMPLATE RESEP: tombol Resep Online tidak ditemukan.");
      return false;
    }

    await recipeSleep(700);
    return !!(await waitForRecipeReady(8000, 100));
  }

  async function addRecipeItem(item, index, total) {
    recipeStatus(`[${index + 1}/${total}] ${item.obat}`);

    const obatField = findRecipeInput(["Obat"]);
    if (!obatField) throw new Error("Kolom Obat tidak ditemukan");

    const selected = await selectAutocomplete(obatField, item.obat);
    if (!selected) throw new Error(`Obat tidak ditemukan/terpilih: ${item.obat}`);

    await recipeSleep(300);

    const mappings = [
      [["Jumlah"], item.jumlah],
      [["Dosis"], item.dosis],
      [["Frekwensi", "Frekuensi"], item.frekuensi],
      [["Waktu/Cara Pemberian", "Waktu Pemberian", "Waktu"], item.waktu],
      [["Keterangan"], item.keterangan]
    ];

    const missingFields = [];

    for (const [labels, value] of mappings) {
      if (value === "") continue;
      const f = findRecipeInput(labels);
      if (f) {
        setValue(f, value);
      } else {
        missingFields.push(labels[0]);
      }
    }

    if (missingFields.length) {
      throw new Error(`Kolom resep tidak ditemukan: ${missingFields.join(", ")}`);
    }

    await recipeSleep(250);

    if (!clickVisibleText(["Masukan ke Resep", "Masukkan ke Resep"])) {
      throw new Error("Tombol 'Masukan ke Resep' tidak ditemukan");
    }

    await recipeSleep(700);
  }

  function allRecipeDrugNames() {
    const names = new Set();
    const addItems = (items) => {
      for (const item of items || []) {
        if (item?.obat) names.add(norm(item.obat));
      }
    };
    for (const [key, tpl] of Object.entries(MASTER_RECIPE_TEMPLATES || {})) {
      if (key === 'TINDAKAN') {
        for (const action of Object.values(tpl?.children || {})) addItems(action?.items);
      } else if (tpl?.items) {
        addItems(tpl.items);
      }
      for (const group of Object.values(tpl?.weightGroups || {})) addItems(group?.items);
    }
    for (const tpl of Object.values(MASTER_RACIKAN_TEMPLATES || {})) {
      for (const group of Object.values(tpl?.weightGroups || {})) addItems(group?.items);
    }
    return [...names];
  }

  function getExistingRecipeDrugSet() {
    const seen = new Set();
    const root = findRecipeDraftRoot();
    if (!root) return seen;
    const text = norm(root.innerText || root.textContent || '');
    for (const name of allRecipeDrugNames()) {
      if (text.includes(name)) seen.add(name);
    }
    return seen;
  }

  function uniqueRecipeItems(items, seenSet) {
    const seen = seenSet || new Set();
    const unique = [];
    const skipped = [];
    for (const item of items || []) {
      const key = norm(item?.obat);
      if (!key) continue;
      if (seen.has(key)) {
        skipped.push(item);
      } else {
        unique.push(item);
        // Reserve immediately so duplicates across selected packages/actions
        // are not planned twice before the first item is actually entered.
        seen.add(key);
      }
    }
    return { unique, skipped };
  }

  // Semua paket resep bersifat ADDITIVE: pilihan berikutnya ditambahkan ke draft yang ada.
  async function fillRecipeTemplate(key, weightKey = null, options = {}) {
    if (recipeRunning) {
      toast("MASTER TEMPLATE RESEP: proses sebelumnya masih berjalan.");
      return;
    }

    let tpl = MASTER_RECIPE_TEMPLATES[key];
    if (!tpl) return;

    if (tpl.weightGroups) {
      tpl = tpl.weightGroups[weightKey];
      if (!tpl) {
        toast("AUTO RESEP: kelompok BB tidak ditemukan.");
        return;
      }
    }

    recipeRunning = true;
    recipeStopRequested = false;

    try {
      updateRecipeProgress(`MASTER TEMPLATE RESEP: ${tpl.label || tpl.name}`, 0, tpl.items?.length || 0, "mulai");

      const opened = await openRecipeTab();
      if (!opened) {
        toast("AUTO RESEP: menu Resep Online gagal dibuka / form resep belum muncul.");
        return;
      }

      const recipeRoot = await waitForRecipeDraftRoot(2500, 100);
      if (!recipeRoot) {
        toast("MASTER TEMPLATE RESEP: Form Input Resep Baru belum siap.");
        return;
      }

      // v3.2.3: jika dipanggil tanpa seenSet (resep satu keluhan dari menu),
      // baca obat yang SUDAH ada di draft agar obat sama tidak masuk dua kali.
      // (Hasil tes: Demam -> Nyeri -> Demam membuat Sanmol dobel.)
      // Hanya untuk resep non-racikan; komposisi racikan tidak diubah.
      const seenSet = options.seenSet || getExistingRecipeDrugSet();
      const plan = seenSet ? uniqueRecipeItems(tpl.items, seenSet) : { unique: tpl.items, skipped: [] };
      if (!plan.unique.length) {
        toast(`MASTER TEMPLATE RESEP ${tpl.label || tpl.name} dilewati: semua obat sudah terinput.`);
        return;
      }

      const errors = [];
      let success = 0;

      for (let i = 0; i < plan.unique.length; i++) {
        if (isRecipeStopRequested()) break;
        updateRecipeProgress(`MASTER TEMPLATE RESEP: ${tpl.label || tpl.name}`, i, plan.unique.length, `obat ${i + 1}`);
        try {
          await addRecipeItem(plan.unique[i], i, plan.unique.length);
          success++;
        } catch (err) {
          if (seenSet) seenSet.delete(norm(plan.unique[i].obat));
          console.error("[AUTO RESEP]", plan.unique[i], err);
          errors.push(`${plan.unique[i].obat}: ${err.message || err}`);
          await recipeSleep(400);
        }
      }

      if (errors.length) {
        toast(
          `MASTER TEMPLATE RESEP selesai: ${success}/${plan.unique.length} obat masuk. Duplikasi dilewati: ${plan.skipped.length}. Gagal: ${errors.length}. Cek manual.`
        );
      } else {
        toast(
          `MASTER TEMPLATE RESEP ${tpl.label || tpl.name} selesai: ${success} obat masuk sebagai draft. Duplikasi dilewati: ${plan.skipped.length}. Review lalu Save manual.`
        );
      }

      console.group("[MASTER TEMPLATE RESEP v2.75]");
      console.log("Template:", tpl.label || tpl.name);
      console.log("Berhasil:", success);
      console.log("Gagal:", errors);
      console.groupEnd();

    } finally {
      recipeRunning = false;
      if (!options.internalPackage) {
        const stopped = recipeStopRequested;
        if (!stopped) clearRecipeProgress();
        recipeStopRequested = stopped;
      }
    }
  }

  // v3.3.0: klik simpan resep yang PASTI (hasil inspeksi DOM e-IGD).
  // Syarat: tombol #butt_simpan_resep terlihat dan draft resep (#tbody_draft) berisi obat.
  // Jika tidak terpenuhi -> tidak klik apa pun (dokter simpan manual).
  function clickRecipeSaveButtonOnly() {
    const btn = document.getElementById("butt_simpan_resep");
    if (!btn || !visible(btn)) {
      console.warn("[AUTO RESEP] #butt_simpan_resep tidak terlihat; tidak menyimpan.");
      return false;
    }
    const draftRows = document.querySelectorAll("#tbody_draft tr").length;
    if (!draftRows) {
      console.warn("[AUTO RESEP] draft resep kosong; tidak menyimpan.");
      return false;
    }
    try {
      btn.click();
      console.log("[AUTO RESEP] klik #butt_simpan_resep");
      return true;
    } catch (_) {
      return false;
    }
  }

  // -------------------------
  // AUTO RACIKAN: helper scoped
  // -------------------------
  function latestVisibleRacikanModal() {
    const candidates = [
      ...document.querySelectorAll('.modal, .modal-dialog, [role="dialog"], form, fieldset, section')
    ]
      .filter(visible)
      .filter((el) => /form\s+racikan|detail\s+racikan|obat\s+untuk\s+diracik/i.test(
        el.innerText || el.textContent || ''
      ))
      .sort((a, b) =>
        b.getBoundingClientRect().width * b.getBoundingClientRect().height -
        a.getBoundingClientRect().width * a.getBoundingClientRect().height
      );
    return candidates[0] || null;
  }

  function waitForVisibleRacikanModal(timeout = 8000, interval = 100) {
    return new Promise((resolve) => {
      const started = Date.now();
      const tick = () => {
        const root = latestVisibleRacikanModal();
        if (root) return resolve(root);
        if (Date.now() - started >= timeout) return resolve(null);
        setTimeout(tick, interval);
      };
      tick();
    });
  }

  function findRecipeInputInRoot(root, labels) {
    if (!root) return null;
    const wanted = labels.map(norm);

    for (const label of [...root.querySelectorAll('label')].filter(visible)) {
      const txt = textOf(label);
      if (!wanted.some((w) => txt === w || txt.includes(w))) continue;

      const id = label.getAttribute('for');
      if (id) {
        const f = root.querySelector('#' + CSS.escape(id));
        if (f && visible(f)) return f;
      }

      const parent = label.closest('td, .form-group, .control-group, fieldset, div');
      const f = parent?.querySelector(
        "input:not([type='hidden']):not([type='button']):not([type='submit']), textarea, select"
      );
      if (f && visible(f)) return f;
    }

    const nodes = [...root.querySelectorAll('td, .form-group, .control-group, fieldset, div')]
      .filter(visible)
      .filter((el) => wanted.some((w) => textOf(el).includes(w)))
      .sort((a, b) =>
        a.querySelectorAll('input,textarea,select').length -
        b.querySelectorAll('input,textarea,select').length
      );

    for (const node of nodes) {
      const fs = [...node.querySelectorAll(
        "input:not([type='hidden']):not([type='button']):not([type='submit']), textarea, select"
      )].filter(visible);
      if (fs.length === 1) return fs[0];
      if (fs.length > 1) {
        const direct = fs.find((f) => {
          const meta = norm([
            f.name, f.id, f.placeholder, f.getAttribute('aria-label'), f.getAttribute('title')
          ].filter(Boolean).join(' '));
          return wanted.some((w) => meta === w || meta.includes(w));
        });
        if (direct) return direct;
      }
    }

    return null;
  }

  async function openRacikanForm() {
    recipeStatus('membuka Input Racikan...');

    // Jika Resep Online sudah terbuka, jangan klik tab lagi agar draft
    // sebelumnya tetap dipertahankan saat menambahkan racikan berikutnya.
    let recipeRoot = findRecipeDraftRoot();
    if (!recipeRoot && !findRecipeReadyText()) {
      // Pola sama dengan AUTO LAB / Resep Online yang sudah terbukti bekerja.
      if (!clickVisibleText(['Resep Online'])) {
        toast('AUTO RACIKAN: tombol Resep Online tidak ditemukan.');
        return null;
      }
      await recipeSleep(700);
    }

    recipeRoot = await waitForRecipeDraftRoot(8000, 100);
    if (!recipeRoot) {
      toast('AUTO RACIKAN: Form Input Resep Baru belum muncul.');
      return null;
    }

    // Untuk Smartplus, tombol Input Racikan terbukti paling konsisten
    // dipanggil dengan mekanisme klik teks tingkat halaman, sama seperti
    // tombol Order Lab / Resep Online. Jangan membatasi pencarian hanya pada
    // sub-root hasil deteksi karena pada beberapa render tombol berada di luar
    // node root yang terpilih.
    let clickedRacikan = clickVisibleText(['Input Racikan']);
    if (!clickedRacikan) {
      clickedRacikan = clickVisibleTextWithin(recipeRoot, ['Input Racikan']);
    }
    if (!clickedRacikan) {
      toast('AUTO RACIKAN: tombol Input Racikan tidak ditemukan.');
      return null;
    }

    // Beri waktu AJAX/modal Smartplus membangun Form Racikan.
    await recipeSleep(400);
    const modal = await waitForVisibleRacikanModal(10000, 100);
    if (!modal) {
      toast('AUTO RACIKAN: Form Racikan belum muncul.');
      return null;
    }

    return modal;
  }

  async function addRacikanItem(modal, item, index, total) {
    recipeStatus(`Racikan [${index + 1}/${total}] ${item.obat}`);

    const obatField = findRecipeInputInRoot(modal, ['Obat']);
    if (!obatField) throw new Error('Kolom Obat pada Form Racikan tidak ditemukan');

    const selected = await selectAutocomplete(obatField, item.obat);
    if (!selected) throw new Error(`Obat tidak ditemukan/terpilih: ${item.obat}`);

    await recipeSleep(300);

    const jumlahField = findRecipeInputInRoot(modal, ['Jumlah per Obat', 'Jumlah Per Obat', 'Jumlah']);
    if (!jumlahField) throw new Error('Kolom Jumlah per Obat tidak ditemukan');

    setValue(jumlahField, item.jumlahPerObat);
    await recipeSleep(200);

    if (!clickVisibleTextWithin(modal, ['Masukan ke racikan', 'Masukkan ke racikan'])) {
      throw new Error("Tombol 'Masukan ke racikan' tidak ditemukan");
    }

    await recipeSleep(700);
  }


  // Jalur khusus Paket Resep: menjalankan alur racikan yang sama seperti
  // AUTO RACIKAN tunggal, tetapi tanpa guard recipeRunning dari pemanggil paket.
  async function fillPackageRacikanTemplate(key, weightKey = null, options = {}) {
    let tpl = MASTER_RACIKAN_TEMPLATES[key];
    if (tpl?.weightGroups) tpl = tpl.weightGroups[weightKey];
    if (!tpl) throw new Error('Template/kelompok BB racikan tidak ditemukan.');

    recipeStatus(`Paket Racikan: ${tpl.name}...`);

    // Resep Online sudah biasanya terbuka dari alur paket. Bila belum, buka
    // dengan mekanisme native yang sama seperti AUTO RESEP biasa.
    let recipeRoot = findRecipeDraftRoot();
    if (!recipeRoot) {
      const opened = await openRecipeTab();
      if (!opened) throw new Error('Resep Online gagal dibuka.');
      recipeRoot = await waitForRecipeDraftRoot(8000, 100);
    }
    if (!recipeRoot) throw new Error('Form Input Resep Baru belum siap.');

    // Beri waktu ekstra setelah perpindahan tab/render AJAX.
    await recipeSleep(500);

    // Gunakan fungsi yang sama dengan resep racikan tunggal.
    let clicked = clickVisibleText(['Input Racikan']);
    if (!clicked) clicked = clickVisibleTextWithin(recipeRoot, ['Input Racikan']);
    if (!clicked) throw new Error('Tombol Input Racikan tidak ditemukan.');

    const modal = await waitForVisibleRacikanModal(12000, 120);
    if (!modal) throw new Error('Form Racikan belum muncul.');

    // Untuk paket, jangan memakai deteksi seenSet berbasis teks halaman untuk
    // bahan racikan karena berisiko menganggap bahan sudah ada sebelum benar-benar
    // dimasukkan. Dedup bahan dilakukan hanya di dalam racikan ini.
    const unique = [];
    const localSeen = new Set();
    for (const item of tpl.items || []) {
      const k = norm(item.obat);
      if (k && !localSeen.has(k)) {
        localSeen.add(k);
        unique.push(item);
      }
    }

    let success = 0;
    const errors = [];
    for (let i = 0; i < unique.length; i++) {
      try {
        await addRacikanItem(modal, unique[i], i, unique.length);
        success++;
      } catch (err) {
        console.error('[PAKET RACIKAN]', unique[i], err);
        errors.push(`${unique[i].obat}: ${err.message || err}`);
      }
    }

    if (errors.length) throw new Error(`Bahan racikan gagal ${errors.length}/${unique.length}: ${errors.join(' | ')}`);
    if (success !== unique.length) throw new Error(`Bahan racikan hanya ${success}/${unique.length} yang masuk.`);

    const namaField = findRecipeInputInRoot(modal, ['Nama Racikan']);
    if (!namaField) throw new Error('Nama Racikan tidak ditemukan.');
    setValue(namaField, tpl.namaRacikan);

    if (!clickRadioByText(modal, [tpl.instruksi])) {
      throw new Error(`Instruksi ${tpl.instruksi} tidak ditemukan.`);
    }

    function findDetailJumlah(root) {
      const nameField = findRecipeInputInRoot(root, ['Nama Racikan']);
      if (!nameField) return null;
      const all = [...root.querySelectorAll("input:not([type='hidden']):not([type='button']):not([type='submit']), textarea, select")]
        .filter(visible)
        .filter(f => !['radio','checkbox'].includes((f.type || '').toLowerCase()));
      const idx = all.indexOf(nameField);
      if (idx >= 0 && all[idx + 1]) return all[idx + 1];
      return null;
    }

    const jumlah = findDetailJumlah(modal);
    if (!jumlah) throw new Error('Jumlah racikan tidak ditemukan.');
    setValue(jumlah, tpl.jumlahRacikan);

    const dosis = findRecipeInputInRoot(modal, ['Dosis']);
    if (!dosis) throw new Error('Dosis racikan tidak ditemukan.');
    setValue(dosis, tpl.dosis);

    const frek = findRecipeInputInRoot(modal, ['Frekwensi', 'Frekuensi']);
    if (!frek) throw new Error('Frekwensi racikan tidak ditemukan.');
    setValue(frek, tpl.frekuensi);

    await recipeSleep(500);
    if (!clickVisibleTextWithin(modal, ['Masukan ke Resep', 'Masukkan ke Resep'])) {
      throw new Error("Tombol 'Masukan ke Resep' tidak ditemukan.");
    }

    if (options.seenSet) {
      for (const item of unique) options.seenSet.add(norm(item.obat));
    }
    return success;
  }

  async function fillRacikanTemplate(key, weightKey = null, options = {}) {
    if (recipeRunning) {
      toast('AUTO RACIKAN: proses sebelumnya masih berjalan.');
      return;
    }

    let tpl = MASTER_RACIKAN_TEMPLATES[key];
    if (tpl?.weightGroups) {
      tpl = tpl.weightGroups[weightKey];
    }
    if (!tpl) {
      toast('AUTO RACIKAN: template/kelompok BB tidak ditemukan.');
      return;
    }


    recipeRunning = true;
    recipeStopRequested = false;

    try {
      updateRecipeProgress(`Racikan: ${tpl.name}`, 0, tpl.items?.length || 0, "mulai");

      const modal = await openRacikanForm();
      if (!modal) return;

      const seenSet = options.seenSet || null;
      const plan = seenSet ? uniqueRecipeItems(tpl.items, seenSet) : { unique: tpl.items, skipped: [] };
      if (!plan.unique.length) {
        toast(`AUTO RACIKAN ${tpl.name} dilewati: semua bahan sudah terinput.`);
        return;
      }

      const errors = [];
      let success = 0;

      for (let i = 0; i < plan.unique.length; i++) {
        if (isRecipeStopRequested()) break;
        updateRecipeProgress(`Racikan: ${tpl.name}`, i, plan.unique.length, `bahan ${i + 1}`);
        try {
          await addRacikanItem(modal, plan.unique[i], i, plan.unique.length);
          success++;
        } catch (err) {
          if (seenSet) seenSet.delete(norm(plan.unique[i].obat));
          console.error('[AUTO RACIKAN]', plan.unique[i], err);
          errors.push(`${plan.unique[i].obat}: ${err.message || err}`);
          await recipeSleep(400);
        }
      }

      if (success !== plan.unique.length) {
        toast(`AUTO RACIKAN: ${success}/${tpl.items.length} obat masuk. Perbaiki item yang gagal secara manual.`);
        return;
      }

      await recipeSleep(300);

      const namaField = findRecipeInputInRoot(modal, ['Nama Racikan']);
      if (!namaField) errors.push('Nama Racikan');
      else setValue(namaField, tpl.namaRacikan);

      if (!clickRadioByText(modal, [tpl.instruksi])) {
        errors.push(`Instruksi ${tpl.instruksi}`);
      }

      // Jumlah pada Detail Racikan juga hanya berlabel "Jumlah", sedangkan
      // di bagian atas modal sudah ada "Jumlah per Obat". Karena itu jangan
      // memakai pencarian generik "Jumlah" saja; targetkan input pertama
      // setelah field Nama Racikan di area Detail Racikan.
      function findRacikanDetailJumlahField(root) {
        const namaField = findRecipeInputInRoot(root, ['Nama Racikan']);
        if (!namaField) return null;

        const all = [...root.querySelectorAll(
          "input:not([type='hidden']):not([type='button']):not([type='submit']), textarea, select"
        )].filter(visible);

        const nameIndex = all.indexOf(namaField);
        if (nameIndex >= 0) {
          const after = all.slice(nameIndex + 1);
          // Lewati radio Instruksi Kemasan. Input teks pertama setelah radio
          // adalah field "Jumlah" pada Detail Racikan.
          const textField = after.find((f) =>
            ['input','textarea','select'].includes(f.tagName.toLowerCase()) &&
            !['radio','checkbox'].includes((f.type || '').toLowerCase())
          );
          if (textField) return textField;
        }

        // Fallback: cari container kecil yang memuat Detail Racikan + label Jumlah.
        const candidates = [...root.querySelectorAll('td, .form-group, fieldset, div, section')]
          .filter(visible)
          .filter((el) => {
            const t = textOf(el);
            return /detail racikan/.test(t) && /\bjumlah\b/.test(t);
          })
          .sort((a,b) =>
            a.querySelectorAll('input,textarea,select').length -
            b.querySelectorAll('input,textarea,select').length
          );

        for (const node of candidates) {
          const fs = [...node.querySelectorAll(
            "input:not([type='hidden']):not([type='button']):not([type='submit']), textarea, select"
          )].filter(visible).filter((f) => !['radio','checkbox'].includes((f.type || '').toLowerCase()));
          if (fs.length >= 2) return fs[0];
        }
        return null;
      }

      const jumlahRacikanField = findRacikanDetailJumlahField(modal);
      if (jumlahRacikanField) {
        setValue(jumlahRacikanField, tpl.jumlahRacikan);
        // Pastikan nilai dipertahankan setelah re-render field.
        setTimeout(() => setValue(jumlahRacikanField, tpl.jumlahRacikan), 150);
      } else {
        errors.push('Jumlah Racikan');
      }

      const dosisField = findRecipeInputInRoot(modal, ['Dosis']);
      if (!dosisField) errors.push('Dosis');
      else setValue(dosisField, tpl.dosis);

      const frekuensiField = findRecipeInputInRoot(modal, ['Frekwensi', 'Frekuensi']);
      if (!frekuensiField) errors.push('Frekwensi');
      else setValue(frekuensiField, tpl.frekuensi);

      if (tpl.waktu) {
        const waktuField = findRecipeInputInRoot(modal, ['Waktu/Cara Pemberian', 'Waktu/Cara', 'Waktu']);
        if (!waktuField) errors.push('Waktu/Cara Pemberian');
        else setValue(waktuField, tpl.waktu);
      }

      await recipeSleep(300);

      if (!clickVisibleTextWithin(modal, ['Masukan ke Resep', 'Masukkan ke Resep'])) {
        errors.push("Masukan ke Resep");
      }

      if (errors.length) {
        toast(`AUTO RACIKAN selesai dengan catatan: ${errors.join(', ')}. Review manual.`);
      } else {
        toast(`AUTO RACIKAN ${tpl.name} selesai. ${success} bahan diracik dan dimasukkan sebagai draft. Duplikasi dilewati: ${plan.skipped.length}. Review lalu Save manual.`);
      }

      console.group('[AUTO RACIKAN v2.58]');
      console.log('Template:', tpl.name);
      console.log('Bahan:', tpl.items);
      console.log('Berhasil:', success);
      console.log('Nama racikan:', tpl.namaRacikan);
      console.log('Instruksi:', tpl.instruksi);
      console.log('Jumlah:', tpl.jumlahRacikan);
      console.log('Dosis:', tpl.dosis);
      console.log('Frekuensi:', tpl.frekuensi);
      console.log('Gagal/catatan:', errors);
      console.groupEnd();
    } finally {
      recipeRunning = false;
      if (!options.internalPackage) {
        const stopped = recipeStopRequested;
        if (!stopped) clearRecipeProgress();
        recipeStopRequested = stopped;
      }
    }
  }

  async function fillActionRecipe(actionKey, options = {}) {
    if (recipeRunning) {
      toast("MASTER TEMPLATE RESEP: proses sebelumnya masih berjalan.");
      return;
    }

    const action = MASTER_RECIPE_TEMPLATES.TINDAKAN?.children?.[actionKey];

    if (!action) {
      toast("MASTER TEMPLATE RESEP: tindakan tidak ditemukan.");
      return;
    }

    recipeRunning = true;
    recipeStopRequested = false;

    try {
      updateRecipeProgress(`Tindakan: ${action.name}`, 0, action.items?.length || 0, "mulai");

      const opened = await openRecipeTab();

      if (!opened) {
        toast("MASTER TEMPLATE RESEP: buka tab Resep Online terlebih dahulu.");
        return;
      }

      const recipeRoot = await waitForRecipeDraftRoot(8000, 100);
      if (!recipeRoot) {
        toast(`MASTER TEMPLATE RESEP TINDAKAN: Form Input Resep Baru belum siap untuk ${action.name}.`);
        return;
      }

      const seenSet = options.seenSet || null;
      const plan = seenSet ? uniqueRecipeItems(action.items, seenSet) : { unique: action.items, skipped: [] };
      if (!plan.unique.length) {
        toast(`TINDAKAN ${action.name} dilewati: semua item sudah terinput.`);
        return;
      }

      const errors = [];
      let success = 0;

      for (let i = 0; i < plan.unique.length; i++) {
        if (isRecipeStopRequested()) break;
        updateRecipeProgress(`Tindakan: ${action.name}`, i, plan.unique.length, `item ${i + 1}`);
        try {
          await addRecipeItem(plan.unique[i], i, plan.unique.length);
          success++;
        } catch (err) {
          if (seenSet) seenSet.delete(norm(plan.unique[i].obat));
          console.error("[AUTO RESEP TINDAKAN]", plan.unique[i], err);
          errors.push(
            `${plan.unique[i].obat}: ${err.message || err}`
          );
          await recipeSleep(500);
        }
      }

      if (errors.length) {
        toast(
          `TINDAKAN ${action.name}: ${success}/${plan.unique.length} item masuk. Duplikasi dilewati: ${plan.skipped.length}. Gagal ${errors.length}. Simpan manual.`
        );
      } else if (options.autoSave !== false) {
        await recipeSleep(500);
        // v3.3.0: HANYA tombol simpan Resep Online (#butt_simpan_resep).
        // Dulu clickVisibleText(["Simpan"]) bisa mengenai tombol Simpan form lain di halaman IGD.
        const saved = clickRecipeSaveButtonOnly();
        if (saved) {
          await recipeSleep(700);
          toast(
            `TINDAKAN ${action.name} selesai: ${success} item masuk, duplikasi dilewati: ${plan.skipped.length}, lalu Simpan ditekan.`
          );
        } else {
          toast(
            `TINDAKAN ${action.name}: ${success} item masuk, duplikasi dilewati: ${plan.skipped.length}, tombol Simpan tidak ditemukan. Simpan manual.`
          );
        }
      }

      console.group("[MASTER TEMPLATE RESEP TINDAKAN v2.76]");
      console.log("Tindakan:", action.name);
      console.log("Berhasil:", success);
      console.log("Gagal:", errors);
      console.groupEnd();

    } finally {
      recipeRunning = false;
      if (!options.internalPackage) {
        const stopped = recipeStopRequested;
        if (!stopped) clearRecipeProgress();
        recipeStopRequested = stopped;
      }
    }
  }

  function recipeWeightMenuHtml(prefix) {
    const groups = MASTER_RECIPE_TEMPLATES[prefix]?.weightGroups || {};
    return Object.entries(groups).map(([key, group]) =>
      `<button type="button" data-weight="${key}" data-parent-recipe="${prefix}">${group.label}</button>`
    ).join("");
  }

  function norm(s) {
    return String(s || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Semua template AUTO ASM: VAS dibuat bervariasi 7-10.
  function getRandomPainScore() {
    // VAS hanya bervariasi 6 atau 7 sesuai instruksi.
    return String(randomInt(6, 7));
  }


  function findGlasgowSection(root) {
    const candidates = [
      ...root.querySelectorAll("td, .form-group, fieldset, div, section")
    ].filter(visible);

    return candidates
      .filter((el) => /glosgow\s+coma\s+scale|glasgow\s+coma\s+scale|glasgow\s*coma|gcs/i.test(
        el.innerText || el.textContent || ""
      ))
      .sort((a, b) => {
        const ac = a.querySelectorAll("input, textarea, select, label").length;
        const bc = b.querySelectorAll("input, textarea, select, label").length;
        const aa = Math.abs((a.innerText || a.textContent || "").length - 250);
        const ba = Math.abs((b.innerText || b.textContent || "").length - 250);
        return (ac - bc) || (aa - ba);
      })[0] || null;
  }

  function clickGlasgowOption(root, sectionRegex, phrases, score) {
    const section = findGlasgowSection(root) || root;

    const labels = [
      ...section.querySelectorAll("label")
    ].filter(visible);

    const want = phrases.map(norm);

    for (const label of labels) {
      const txt = norm(label.innerText || label.textContent || "");
      const matchesPhrase = want.some((p) => txt.includes(p));
      const matchesScore = score != null && (
        new RegExp(`(?:^|\\D)${score}(?:\\D|$)`).test(txt)
      );

      if (!matchesPhrase && !matchesScore) continue;

      const id = label.getAttribute("for");
      const control = id
        ? document.getElementById(id)
        : label.querySelector('input[type="radio"], input[type="checkbox"]');

      if (control) {
        try {
          control.click();
          fire(control);
          return true;
        } catch (_) {}
      }

      try {
        label.click();
        return true;
      } catch (_) {}
    }

    // Fallback: clickable elements containing exact score/label text.
    const clickable = [
      ...section.querySelectorAll(
        "button, a, span, div, td"
      )
    ].filter(visible);

    for (const el of clickable) {
      const txt = norm(el.innerText || el.textContent || "");
      if (want.some((p) => txt.includes(p)) ||
          (score != null && new RegExp(`(?:^|\\D)${score}(?:\\D|$)`).test(txt))) {
        if (el.querySelector("input")) continue;
        try {
          el.click();
          return true;
        } catch (_) {}
      }
    }

    return false;
  }

  function setGCS15(root) {
    let hits = 0;

    // Smartplus displays the Glasgow table as selectable options.
    // GCS 15 = Eye 4 + Verbal 5 + Motor 6.
    if (clickGlasgowOption(
      root,
      /eye opening/i,
      ["spontaneous"],
      4
    )) hits++;

    if (clickGlasgowOption(
      root,
      /verbal response/i,
      ["oriented to time, place and person", "oriented"],
      5
    )) hits++;

    if (clickGlasgowOption(
      root,
      /motor response/i,
      ["obeys commands", "obeys command"],
      6
    )) hits++;

    // Also try a direct total-GCS field if the form contains one.
    const total = findFieldByMeta(
      root,
      [
        "glasgow coma",
        "glosgow coma",
        "gcs"
      ]
    );

    if (total && /input|textarea|select/i.test(total.tagName)) {
      setValue(total, "15");
      hits++;
    }

    // Some implementations use a clickable "15" total without an input.
    if (hits < 3) {
      const section = findGlasgowSection(root);
      if (section) {
        const nodes = [
          ...section.querySelectorAll(
            "label, button, a, span, td, div"
          )
        ].filter(visible);

        for (const node of nodes) {
          const txt = norm(node.innerText || node.textContent || "");
          if (txt === "15" || /gcs\s*15\b/.test(txt)) {
            try {
              node.click();
              hits++;
              break;
            } catch (_) {}
          }
        }
      }
    }

    return hits >= 3;
  }

  function getRandomNadi(vital) {
    if (vital.normalPulse) {
      const min = Number(vital.nadiMin || 70);
      const max = Math.max(min, Number(vital.nadiMax || 100));
      return String(randomInt(min, max));
    }

    const min = Math.max(121, Number(vital.nadiMin || 121));
    const max = Math.max(min, Number(vital.nadiMax || 130));
    return String(randomInt(min, max));
  }

  function getRandomNormalRR(vital) {
    const min = Number(vital.rrMin || 16);
    const max = Math.max(min, Number(vital.rrMax || 20));
    return String(randomInt(min, max));
  }

  function getRandomNormalSpO2(vital) {
    const min = Number(vital.spo2Min || 97);
    const max = Math.max(min, Number(vital.spo2Max || 100));
    return String(randomInt(min, max));
  }

  // Mengambil usia pasien (tahun) dari informasi pasien/heading/modal Smartplus.
  // Mendukung format umum seperti "11 Thn", "11 tahun", dan "11 y/o".
  function getPatientAgeYears(preferredRoot = null) {
    try {
      // Pada Form SP Laboratorium, umur berada pada field/input tepat di area
      // label "Umur". Prioritaskan pembacaan value input dibanding innerText.
      const roots = [];
      if (preferredRoot && preferredRoot !== document.body) roots.push(preferredRoot);

      for (const root of roots) {
        const all = [...root.querySelectorAll('input, textarea, select, [contenteditable="true"]')]
          .filter(visible);
        for (const field of all) {
          const container = field.closest('td, .form-group, .control-group, div, section');
          const text = norm(container?.innerText || container?.textContent || '');
          if (!/\bumur\b/.test(text)) continue;
          const raw = String(field.value ?? field.textContent ?? '').trim();
          const m = raw.match(/\d{1,3}/);
          if (m) {
            const age = Number(m[0]);
            if (Number.isFinite(age) && age >= 0 && age <= 130) return age;
          }
        }
      }

      const sources = [];
      if (preferredRoot && preferredRoot !== document.body) {
        sources.push(preferredRoot.innerText || preferredRoot.textContent || '');
      }
      const modal = modalRoot?.();
      if (modal && modal !== document.body && modal !== preferredRoot) {
        sources.push(modal.innerText || modal.textContent || '');
      }
      for (const el of [...document.querySelectorAll(
        '[class*="pasien"], [class*="patient"], [id*="pasien"], [id*="patient"], .breadcrumb, .modal-title, .panel-heading'
      )]) {
        if (visible(el) && el !== preferredRoot) sources.push(el.innerText || el.textContent || '');
      }
      sources.push(document.body?.innerText || '');

      for (const raw of sources) {
        const text = String(raw || '').replace(/\s+/g, ' ');
        let m = text.match(/\bumur\s*[:\-]?\s*(\d{1,3})\b/i);
        if (m) {
          const age = Number(m[1]);
          if (Number.isFinite(age) && age >= 0 && age <= 130) return age;
        }
        m = text.match(/(?:^|[\s/,(])(\d{1,3})\s*(?:thn|th|tahun)\b/i);
        if (m) {
          const age = Number(m[1]);
          if (Number.isFinite(age) && age >= 0 && age <= 130) return age;
        }
        m = text.match(/(?:^|[\s/,(])(\d{1,3})\s*(?:y\/o|yo|years?\s*old)\b/i);
        if (m) {
          const age = Number(m[1]);
          if (Number.isFinite(age) && age >= 0 && age <= 130) return age;
        }
      }
    } catch (e) {
      console.warn('[AUTO ASM] gagal membaca usia pasien', e);
    }
    return null;
  }

  // Mengubah tampilan usia identitas menjadi total bulan bila memungkinkan.
  // Mendukung format seperti "0 Thn 5 Bln", "5 Bln", atau "5 bulan".
  function getPatientAgeMonths(preferredRoot = null) {
    const display = getPatientAgeDisplay(preferredRoot);
    if (!display) return null;
    const text = String(display).toLowerCase().replace(/,/g, ".").replace(/\s+/g, " ").trim();
    let m = text.match(/(\d+(?:\.\d+)?)\s*(?:tahun|thn|th)\b.*?(?:\d+)\s*(?:bulan|bln)\b/);
    if (m) {
      const years = Number(m[1]);
      const bm = text.match(/(\d+)\s*(?:bulan|bln)\b/);
      return Number.isFinite(years) && bm ? years * 12 + Number(bm[1]) : null;
    }
    m = text.match(/(\d+)\s*(?:bulan|bln)\b/);
    if (m) return Number(m[1]);
    m = text.match(/(\d+(?:\.\d+)?)\s*(?:tahun|thn|th)\b/);
    if (m) return Number(m[1]) * 12;
    return null;
  }

  // Mengambil teks usia pasien dari data identitas/header Smartplus.
  // Prioritas: pola "Umur: 11 tahun", lalu format header seperti "51 Thn".
  function getPatientAgeDisplay(preferredRoot = null) {
    try {
      const sources = [];
      if (preferredRoot && preferredRoot !== document.body) {
        sources.push(preferredRoot.innerText || preferredRoot.textContent || "");
      }
      const modal = modalRoot?.();
      if (modal && modal !== document.body && modal !== preferredRoot) {
        sources.push(modal.innerText || modal.textContent || "");
      }

      for (const el of [
        ...document.querySelectorAll(
          '[class*="pasien"], [class*="patient"], [id*="pasien"], [id*="patient"], .breadcrumb, .modal-title, .panel-heading'
        )
      ]) {
        if (visible(el)) sources.push(el.innerText || el.textContent || "");
      }
      sources.push(document.body?.innerText || "");

      for (const raw of sources) {
        const text = String(raw || "").replace(/\s+/g, " ").trim();
        let m = text.match(/\bumur\s*[:\-]?\s*(\d{1,3}\s*(?:tahun|thn|th)?(?:\s*,?\s*\d{1,2}\s*bln)?(?:\s*,?\s*\d{1,2}\s*hr)?)\b/i);
        if (m) return m[1].replace(/\s+/g, " ").trim();

        m = text.match(/(?:^|[\s/,(])([0-9]{1,3}\s*Thn(?:\s+[0-9]{1,2}\s*Bln)?(?:\s+[0-9]{1,2}\s*Hr)?)\b/i);
        if (m) return m[1] + " Thn";

        m = text.match(/(?:^|[\s/,(])([0-9]{1,3})\s*tahun\b/i);
        if (m) return m[1] + " tahun";

        m = text.match(/(?:^|[\s/,(])([0-9]{1,3})\s*(?:y\/o|yo|years?\s*old)\b/i);
        if (m) return m[1] + " y/o";
      }
    } catch (e) {
      console.warn('[AUTO RESEP] gagal membaca tampilan usia pasien', e);
    }
    return null;
  }

  // Tekanan darah dibuat bervariasi pada setiap template.
  function getRandomTD(vital) {
    const sysMin = Number(vital.tdSysMin || 100);
    const sysMax = Math.max(sysMin, Number(vital.tdSysMax || sysMin));
    const diaMin = Number(vital.tdDiaMin || 60);
    const diaMax = Math.max(diaMin, Number(vital.tdDiaMax || diaMin));
    return `${randomInt(sysMin, sysMax)}/${randomInt(diaMin, diaMax)}`;
  }

  // BP: data fiktif template dengan RR selalu >28 dan SpO2 90-95.
  function getRandomBPRespiratory() {
    return String(randomInt(29, 34));
  }

  function getRandomBPSpO2() {
    return String(randomInt(90, 95));
  }

  // Febris: suhu divariasikan di atas 40°C untuk template FEBRIS_VI_BI.
  function getRandomFebrisTemperature() {
    const value = randomInt(401, 409) / 10;
    return value.toFixed(1).replace(".", ",");
  }

  // Kejang demam anak: suhu divariasikan di atas 40°C.
  function getRandomKejangDemamTemperature() {
    const value = randomInt(401, 408) / 10;
    return value.toFixed(1).replace(".", ",");
  }

  // Febris: RR divariasikan >28 x/menit.
  function getRandomFebrisRR() {
    return String(randomInt(29, 34));
  }

  function visible(el) {
    if (!el || el.disabled || el.type === "hidden") return false;
    const st = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return st.display !== "none" && st.visibility !== "hidden" &&
      r.width > 0 && r.height > 0;
  }

  function fire(el) {
    ["input", "change", "blur"].forEach((type) => {
      try { el.dispatchEvent(new Event(type, { bubbles: true })); } catch (_) {}
    });
  }

  function setValue(el, value) {
    if (!el) return false;
    const v = String(value);

    if (el.isContentEditable) {
      el.focus();
      el.textContent = v;
      fire(el);
      return true;
    }

    const tag = el.tagName.toLowerCase();
    if (!["input", "textarea", "select"].includes(tag)) return false;

    let proto = HTMLInputElement.prototype;
    if (tag === "textarea") proto = HTMLTextAreaElement.prototype;
    if (tag === "select") proto = HTMLSelectElement.prototype;

    const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
    try {
      if (setter) setter.call(el, v);
      else el.value = v;
    } catch (_) {
      try { el.value = v; } catch (_) { return false; }
    }

    fire(el);

    try {
      if (window.jQuery) {
        window.jQuery(el).val(v).trigger("input").trigger("change").trigger("blur");
      }
    } catch (_) {}

    return String(el.value ?? "") === v || tag === "select";
  }

  function textOf(el) {
    return norm(el?.innerText || el?.textContent || "");
  }

  function modalRoot() {
    const candidates = [...document.querySelectorAll(
      '.modal, .modal-dialog, [role="dialog"]'
    )]
      .filter(visible)
      .sort((a, b) =>
        b.getBoundingClientRect().width * b.getBoundingClientRect().height -
        a.getBoundingClientRect().width * a.getBoundingClientRect().height
      );

    const asm = candidates.find((x) =>
      /assesment|assessment|gawat darurat|triage|keluhan utama|tanda-tanda vital/i.test(textOf(x))
    );

    return asm || candidates[0] || document.body;
  }

  function allFields(root) {
    return [...root.querySelectorAll(
      'input:not([type="hidden"]):not([type="button"]):not([type="submit"]), textarea, select, [contenteditable="true"]'
    )].filter(visible);
  }

  function protectedContext(el) {
    return /riwayat penyakit sekarang|riwayat penyakit dahulu|riwayat pengobatan|operasi|obstetri/.test(
      norm(el?.closest("td, .form-group, fieldset, div")?.innerText || "")
    );
  }

  function findFieldByMeta(root, terms, allowProtected = false) {
    const wanted = terms.map(norm);

    for (const f of allFields(root)) {
      if (!allowProtected && protectedContext(f)) continue;

      const meta = norm([
        f.placeholder,
        f.name,
        f.id,
        f.getAttribute("aria-label"),
        f.getAttribute("title")
      ].filter(Boolean).join(" "));

      if (wanted.some((w) => meta === w || meta.includes(w))) return f;
    }
    return null;
  }

  function findFieldByLabel(root, labels) {
    const wanted = labels.map(norm);

    for (const label of [...root.querySelectorAll("label")]) {
      const lt = textOf(label);
      if (!wanted.some((w) => lt === w || lt.includes(w))) continue;
      if (protectedContext(label)) continue;

      const id = label.getAttribute("for");
      if (id) {
        const f = root.querySelector("#" + CSS.escape(id));
        if (f && visible(f)) return f;
      }

      const near = label.parentElement?.querySelector(
        'input:not([type="radio"]):not([type="checkbox"]), textarea, select, [contenteditable="true"]'
      );
      if (near && visible(near)) return near;
    }

    const metaHit = findFieldByMeta(root, labels);
    if (metaHit) return metaHit;

    for (const node of [...root.querySelectorAll("td, .form-group, fieldset")]) {
      const t = textOf(node);
      if (protectedContext(node)) continue;
      if (!wanted.some((w) => t.includes(w))) continue;

      const fs = [...node.querySelectorAll(
        'input:not([type="radio"]):not([type="checkbox"]):not([type="hidden"]), textarea, select, [contenteditable="true"]'
      )].filter(visible);

      if (fs.length === 1) return fs[0];
    }

    return null;
  }

  function setByLabel(root, labels, value, required = true) {
    const f = findFieldByLabel(root, labels);
    if (!f) {
      if (required) console.warn("[AUTO ASM] Field tidak ditemukan:", labels);
      return false;
    }
    return setValue(f, value);
  }

  // GCS ditargetkan sesuai nilai template. Default 15 (E4 V5 M6); Penurunan Kesadaran menggunakan 9 (E2 V2 M5).
  // Karena Smartplus menggunakan tabel "GLASGOW COMA SCALE", fungsi ini
  // mencoba mengisi radio/checkbox per komponen dan juga field total bila ada.
  function setGCS(root, value = "15") {
    let success = false;

    // Smartplus pada form ini menggunakan sebuah input teks langsung
    // dengan placeholder "glosgow coma". Isi angka TOTAL GCS di field tersebut.
    const selectors = [
      'input[placeholder*="glosgow coma" i]',
      'input[placeholder*="glasgow coma" i]',
      'textarea[placeholder*="glosgow coma" i]',
      'textarea[placeholder*="glasgow coma" i]',
      'input[name*="gcs" i]',
      'input[id*="gcs" i]',
      'textarea[name*="gcs" i]',
      'textarea[id*="gcs" i]'
    ];

    const fields = [];
    for (const selector of selectors) {
      try {
        fields.push(...root.querySelectorAll(selector));
      } catch (_) {}
      try {
        fields.push(...document.querySelectorAll(selector));
      } catch (_) {}
    }

    const uniqueFields = [...new Set(fields)].filter(visible);

    // Prioritaskan field dengan placeholder yang persis seperti screenshot.
    uniqueFields.sort((a, b) => {
      const ap = norm(a.getAttribute("placeholder") || "");
      const bp = norm(b.getAttribute("placeholder") || "");
      const as = ap.includes("glosgow coma") ? 0 : ap.includes("glasgow coma") ? 1 : 2;
      const bs = bp.includes("glosgow coma") ? 0 : bp.includes("glasgow coma") ? 1 : 2;
      return as - bs;
    });

    for (const field of uniqueFields) {
      if (setValue(field, String(value))) {
        success = true;

        // Ulangi beberapa kali karena form ASM bisa melakukan re-render.
        setTimeout(() => setValue(field, String(value)), 100);
        setTimeout(() => setValue(field, String(value)), 400);
        setTimeout(() => setValue(field, String(value)), 900);
      }
    }

    // Jika field langsung ditemukan, tidak perlu mencoba klik tabel lagi.
    if (success) return true;

    // Fallback untuk implementasi yang benar-benar menggunakan pilihan Glasgow.
    const targetRootCandidates = [
      ...root.querySelectorAll("table, td, div, fieldset, section")
    ].filter(visible);

    const gcsRoots = targetRootCandidates
      .filter((el) => /glasgow\s*coma\s*scale|glosgow\s*coma|glasgow\s*coma|gcs/.test(textOf(el)))
      .sort((a, b) =>
        a.getBoundingClientRect().width * a.getBoundingClientRect().height -
        b.getBoundingClientRect().width * b.getBoundingClientRect().height
      );

    const gcsRoot = gcsRoots[0] || null;

    function clickOption(phrases) {
      if (!gcsRoot) return false;
      const wanted = phrases.map(norm);

      for (const label of [...gcsRoot.querySelectorAll("label")].filter(visible)) {
        const t = textOf(label);
        if (!wanted.some(w => t === w || t.includes(w))) continue;

        const id = label.getAttribute("for");
        let control = id ? document.getElementById(id) : null;
        if (!control) {
          control = label.querySelector('input[type="radio"], input[type="checkbox"]');
        }

        if (control && visible(control)) {
          try { control.click(); } catch (_) {}
          fire(control);
          return true;
        }

        try {
          label.click();
          return true;
        } catch (_) {}
      }

      for (const control of [
        ...gcsRoot.querySelectorAll('input[type="radio"], input[type="checkbox"]')
      ].filter(visible)) {
        const hay = norm([
          control.value,
          control.getAttribute("aria-label"),
          control.title,
          control.id,
          control.name,
          control.parentElement?.innerText,
          control.closest("td,tr,div")?.innerText
        ].filter(Boolean).join(" "));

        if (wanted.some(w => hay === w || hay.includes(w))) {
          try { control.click(); } catch (_) {}
          fire(control);
          return true;
        }
      }

      return false;
    }

    if (gcsRoot) {
      let hits = 0;
      const total = String(value);

      if (total === "9") {
        // GCS 9 = E2 V2 M5.
        if (clickOption(["To Pain", "Mata terhadap nyeri", "Pain"])) hits++;
        if (clickOption(["Incomprehensible sounds", "Suara tidak dapat dimengerti", "Incomprehensible"])) hits++;
        if (clickOption(["Moves to localized pain", "Localizes pain", "Melokalisasi nyeri"])) hits++;
      } else {
        // Default template: GCS 15 = E4 V5 M6.
        if (clickOption(["Spontaneous", "Mata spontan", "Membuka mata spontan"])) hits++;
        if (clickOption(["Oriented", "Oriented to time, place and person", "Orientasi baik", "Orientasi"])) hits++;
        if (clickOption(["Obeys commands", "Obeys command", "Mengikuti perintah"])) hits++;
      }

      if (hits >= 3) success = true;
    }

    return success;
  }

  function setPain(root, value) {
    const direct = findFieldByMeta(root, ["pain score", "skala nyeri"]);
    if (direct && setValue(direct, value)) {
      setTimeout(() => setValue(direct, value), 100);
      return true;
    }

    for (const node of [...root.querySelectorAll("td, .form-group, fieldset, div")]) {
      if (!/pain score|skala nyeri/.test(textOf(node))) continue;
      if (protectedContext(node)) continue;

      const fs = [...node.querySelectorAll(
        'input:not([type="radio"]):not([type="checkbox"]):not([type="hidden"]), textarea'
      )].filter(visible);

      if (fs.length) {
        const preferred = fs.find((f) => {
          const meta = norm([f.placeholder, f.name, f.id].join(" "));
          return /pain|nyeri/.test(meta);
        }) || fs[0];

        if (setValue(preferred, value)) {
          setTimeout(() => setValue(preferred, value), 100);
          return true;
        }
      }
    }

    return clickRadioByText(root, [
      String(value),
      `${value}/10`,
      `pain score ${value}`
    ]);
  }

  function clickRadioByText(root, phrases) {
    const wanted = phrases.map(norm);

    for (const label of [...root.querySelectorAll("label")].filter(visible)) {
      const t = textOf(label);
      if (!wanted.some((w) => t === w || t.includes(w))) continue;

      const id = label.getAttribute("for");
      let radio = id ? root.querySelector("#" + CSS.escape(id)) : null;

      if (!radio) {
        radio = label.querySelector('input[type="radio"],input[type="checkbox"]');
      }

      if (radio && visible(radio)) {
        radio.click();
        fire(radio);
        return true;
      }
    }

    for (const radio of [...root.querySelectorAll(
      'input[type="radio"],input[type="checkbox"]'
    )].filter(visible)) {
      const hay = norm([
        radio.parentElement?.innerText,
        radio.value,
        radio.getAttribute("aria-label"),
        radio.id,
        radio.name
      ].filter(Boolean).join(" "));

      if (wanted.some((w) => hay === w || hay.includes(w))) {
        radio.click();
        fire(radio);
        return true;
      }
    }

    return false;
  }

  function section(root, title) {
    const titleN = norm(title);

    const matches = [...root.querySelectorAll("td, .form-group, fieldset, div")]
      .filter((el) =>
        textOf(el).includes(titleN) &&
        el.querySelector('input,textarea,select,[contenteditable="true"]') &&
        !protectedContext(el)
      );

    matches.sort((a, b) =>
      a.getBoundingClientRect().width * a.getBoundingClientRect().height -
      b.getBoundingClientRect().width * b.getBoundingClientRect().height
    );

    return matches[0] || null;
  }

  function clickInSection(root, sectionTitles, optionPhrases) {
    for (const title of sectionTitles) {
      const s = section(root, title);
      if (s && clickRadioByText(s, optionPhrases)) return true;
    }
    return clickRadioByText(root, optionPhrases);
  }

  function clearRequestedFields(root) {
    let ok = 0;
    if (setByLabel(root, ["Jam Datang"], "", false)) ok++;
    if (setByLabel(root, ["Tinggi", "Tinggi Badan", "TB"], "", false)) ok++;
    if (setByLabel(root, ["Berat", "Berat Badan", "BB"], "", false)) ok++;
    return ok;
  }

  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      #${BUTTON_ID}{
        position:fixed!important; right:18px!important; bottom:82px!important;
        z-index:2147483647!important; background:#e91e63!important; color:#fff!important;
        border:0!important; border-radius:10px!important; padding:14px 18px!important;
        font:700 14px Arial,sans-serif!important; box-shadow:0 4px 16px rgba(0,0,0,.35)!important;
        cursor:pointer!important; display:block!important; visibility:visible!important;
        opacity:1!important; pointer-events:auto!important;
      }
      #${MENU_ID}.sp-package-modal{
        right:auto!important; bottom:auto!important; left:50%!important; top:50%!important;
        transform:translate(-50%,-50%)!important;
        width:min(720px,calc(100vw - 28px))!important;
        max-width:calc(100vw - 28px)!important;
        max-height:calc(100vh - 20px)!important;
        overflow:auto!important;
        border-radius:14px!important; padding:12px!important;
        box-sizing:border-box!important;
      }
      #${MENU_ID}.sp-package-modal *{box-sizing:border-box!important;}
      #${MENU_ID}.sp-package-modal .sp-package-form{
        width:100%!important;margin:0!important;padding:0!important;
      }
      #${MENU_ID}.sp-package-modal .sp-package-input-card{
        width:100%!important;margin:6px 0 8px!important;padding:10px!important;
        background:#f8f9fa!important;border:1px solid #e3e7eb!important;
        border-radius:9px!important;
      }
      #${MENU_ID}.sp-package-modal .sp-package-input-card .sp-field-row{
        width:100%!important;margin:0!important;
      }
      #${MENU_ID}.sp-package-modal .sp-package-input-card input{
        min-width:0!important;width:100%!important;
      }
      #${MENU_ID}.sp-package-modal .sp-package-buttons{
        width:100%!important;margin:8px 0 0!important;
      }
      #${MENU_ID}.sp-package-modal .sp-check-grid{
        grid-template-columns:repeat(3,minmax(0,1fr))!important;
        gap:5px!important;margin:4px 2px 7px!important;
      }
      #${MENU_ID}.sp-package-modal .sp-check-card{
        padding:7px 6px!important;font-size:11px!important;min-height:34px!important;
      }
      #${MENU_ID}.sp-package-modal .sp-field-row{margin:4px 2px!important;}
      #${MENU_ID}.sp-package-modal .sp-help,
      #${MENU_ID}.sp-package-modal .sp-age-box,
      #${MENU_ID}.sp-package-modal .sp-summary{margin:4px 2px 6px!important;padding:7px!important;}
      #${MENU_ID}.sp-package-modal .sp-title{margin:3px 4px 6px!important;}
      #${MENU_ID}.sp-package-modal .sp-package-buttons{margin:6px 2px 2px!important;}
      @media(max-width:900px){
        #${MENU_ID}.sp-package-modal .sp-check-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;}
      }
      @media(max-width:600px){
        #${MENU_ID}.sp-package-modal{width:calc(100vw - 16px)!important;max-width:calc(100vw - 16px)!important;max-height:calc(100vh - 12px)!important;overflow:auto!important;}
        #${MENU_ID}.sp-package-modal .sp-check-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;}
      }
      #${MENU_ID}{
        position:fixed!important; right:18px!important; bottom:140px!important;
        z-index:2147483647!important; width:285px!important; max-width:calc(100vw - 36px)!important;
        max-height:70vh!important; overflow:auto!important; background:#fff!important;
        color:#222!important; border-radius:12px!important; box-shadow:0 8px 28px rgba(0,0,0,.35)!important;
        padding:10px!important; font:14px Arial,sans-serif!important;
      }
      #${MENU_ID} .sp-title{font-weight:bold;margin:5px 6px 10px;}
      #${MENU_ID} button{
        width:100%; margin:4px 0; padding:11px; border:0; border-radius:8px;
        background:#f1f3f5; color:#222; text-align:left; font-weight:bold; cursor:pointer;
      }
      #${MENU_ID} button:hover{background:#dfe7fd;}
      #${MENU_ID} .sp-back{background:#e9ecef!important;font-weight:700!important;}
      #${MENU_ID} .sp-divider{height:1px;background:#dee2e6;margin:8px 4px;}
      #${MENU_ID} .sp-note{font-size:11px;color:#666;margin:8px 6px 3px;line-height:1.35;}
      #${MENU_ID} .sp-section-title{font-weight:800;font-size:12px;color:#333;margin:10px 4px 6px;}
      #${MENU_ID} .sp-field-row{display:flex;align-items:center;gap:7px;margin:6px 4px;}
      #${MENU_ID} .sp-field-row label{font-weight:700;min-width:55px;}
      #${MENU_ID} .sp-field-row input{flex:1;padding:9px;border:1px solid #ccc;border-radius:6px;font-size:14px;box-sizing:border-box;}
      #${MENU_ID} .sp-help{background:#f8f9fa;border-radius:6px;padding:8px;margin:5px 4px 10px;font-size:11px;color:#666;}
      #${MENU_ID} .sp-age-box{padding:10px;background:#eefaf0;border:1px solid #b9e2be;border-radius:7px;margin:5px 4px 10px;font-size:13px;color:#236b2a;}
      #${MENU_ID} .sp-check-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin:5px 4px 9px;}
      #${MENU_ID} .sp-check-card{display:flex;align-items:center;gap:6px;padding:9px 8px;border:1px solid #e5e5e5;border-radius:7px;background:#fff;font-size:12px;line-height:1.2;}
      #${MENU_ID} .sp-check-card input{margin:0;flex:0 0 auto;}
      #${MENU_ID} .sp-action-card{background:#fafafa;}
      #${MENU_ID} .sp-summary{padding:9px;background:#f1f3f5;border-radius:7px;margin:6px 4px 10px;font-size:12px;color:#555;}
      #${MENU_ID} .sp-package-buttons{display:flex;gap:7px;margin:8px 4px;}
      #${MENU_ID} .sp-package-buttons .sp-primary{background:#7a4bd9;color:#fff;border:0;border-radius:7px;padding:10px 12px;font-weight:800;cursor:pointer;flex:1;}
      #${MENU_ID} .sp-package-buttons .sp-back{background:#e9ecef!important;color:#333!important;}
      .sp-preview-overlay-compact{position:fixed!important;inset:0!important;z-index:21474836470!important;background:rgba(0,0,0,.28)!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:12px!important;box-sizing:border-box!important;}
      .sp-preview-card-compact{width:min(780px,calc(100vw - 32px))!important;max-height:calc(100vh - 32px)!important;overflow:hidden!important;background:#fff!important;color:#222!important;border-radius:12px!important;box-shadow:0 10px 36px rgba(0,0,0,.4)!important;padding:12px!important;box-sizing:border-box!important;font:13px Arial,sans-serif!important;line-height:1.3!important;}
      .sp-preview-card-compact .sp-preview-grid-compact{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px!important;}
      .sp-preview-card-compact .sp-preview-box-compact{background:#f8f9fa!important;border:1px solid #e4e8ec!important;border-radius:7px!important;padding:8px!important;min-height:0!important;}box-sizing:border-box!important;}
      .sp-preview-card-compact .sp-preview-head-compact{font-size:11px!important;font-weight:800!important;margin-bottom:4px!important;}
      .sp-preview-card-compact .sp-preview-list-compact{font-size:10px!important;line-height:1.18!important;max-height:180px!important;overflow:auto!important;padding-right:2px!important;}
      .sp-preview-card-compact .sp-preview-item-compact{margin:1px 0!important;overflow-wrap:anywhere!important;}
      .sp-preview-card-compact .sp-preview-actions-compact{display:flex!important;gap:8px!important;margin-top:8px!important;}
      .sp-preview-card-compact .sp-preview-actions-compact button{flex:1!important;margin:0!important;padding:9px 10px!important;font-size:12px!important;}
      .sp-preview-card-compact .sp-preview-meta-compact{font-size:11px!important;color:#666!important;margin:2px 0 7px!important;}
      .sp-preview-card-compact .sp-preview-warning-compact{background:#fff3cd!important;color:#664d03!important;border:1px solid #ffe69c!important;border-radius:6px!important;padding:6px 8px!important;font-size:10px!important;margin-top:6px!important;}
      @media(max-width:700px){.sp-preview-card-compact{width:calc(100vw - 20px)!important;max-height:calc(100vh - 14px)!important;padding:9px!important}.sp-preview-card-compact .sp-preview-grid-compact{grid-template-columns:1fr!important}.sp-preview-card-compact .sp-preview-list-compact{max-height:120px!important}}
      #${STATUS_ID}{
        position:fixed!important; left:50%!important; top:16px!important;
        transform:translateX(-50%)!important; z-index:2147483647!important;
        background:#212529!important; color:#fff!important; padding:10px 16px!important;
        border-radius:8px!important; font:13px Arial,sans-serif!important;
        box-shadow:0 4px 14px rgba(0,0,0,.3)!important; max-width:90vw!important;
        text-align:center!important;
      }
    `;
    document.documentElement.appendChild(style);
  }

  function toast(msg) {
    let t = document.getElementById(STATUS_ID);

    if (!t) {
      t = document.createElement("div");
      t.id = STATUS_ID;
      document.documentElement.appendChild(t);
    }

    t.textContent = msg;
    t.style.display = "block";

    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => {
      if (t) t.style.display = "none";
    }, 5000);
  }

  function closeMenu() {
    document.getElementById(MENU_ID)?.remove();
  }

  function openMenu(view = "main") {
    closeMenu();

    const menu = document.createElement("div");
    menu.id = MENU_ID;

    async function buildPackagePreview({ complaints, actions, branch, weight, ageDisplay, ageYears, ageMonths, seenSet }) {
      const workingSeen = new Set(seenSet || []);
      const lines = [];
      const skipped = [];
      const errors = [];
      const racikanEntries = [];

      lines.push(`CABANG: ${branch}${ageDisplay ? ` • Umur ${ageDisplay}` : ''}${branch === 'Anak' && Number.isFinite(Number(weight)) ? ` • BB ${weight} kg` : ''}`);
      lines.push('');

      // Tindakan diproses lebih dulu pada eksekusi sebenarnya, jadi preview juga mengikuti urutan ini.
      if (actions.length) {
        lines.push('TINDAKAN:');
        for (const actionKey of actions) {
          const action = MASTER_RECIPE_TEMPLATES.TINDAKAN?.children?.[actionKey];
          if (!action) {
            errors.push(`Tindakan ${actionKey} tidak ditemukan`);
            continue;
          }
          const plan = uniqueRecipeItems(action.items || [], workingSeen);
          lines.push(`• ${action.name || actionKey}`);
          if (plan.unique.length) {
            plan.unique.forEach(item => {
              const detail = [item.obat, item.jumlah ? `jml ${item.jumlah}` : '', item.dosis, item.frekuensi].filter(Boolean).join(' • ');
              lines.push(`  - ${detail}`);
              workingSeen.add(norm(item.obat));
            });
          } else {
            lines.push('  - semua item sudah ada → dilewati');
            skipped.push(`Tindakan ${action.name || actionKey}`);
          }
        }
        lines.push('');
      }

      const regularItems = [];
      if (complaints.length) {
        lines.push('KELUHAN:');
        for (const complaintKey of complaints) {
          try {
            const resolved = await resolveComplaintRecipe(complaintKey, branch === 'Dewasa' ? null : weight, {
              forceAdult: branch === 'Dewasa',
              age: ageYears,
              ageYears,
              ageDisplay,
              ageMonths
            });
            const { complaint, branch: cBranch } = resolved;
            lines.push(`• ${complaint.label}`);

            if (cBranch.note) {
              lines.push(`  ! ${cBranch.note}`);
            }

            if (cBranch.kind === 'dynamic') {
              const key = ensureDynamicComplaintTemplate(cBranch);
              const tpl = key ? MASTER_RECIPE_TEMPLATES[key] : null;
              if (!tpl?.items?.length) throw new Error(`Template obat ${complaint.label} tidak ditemukan.`);
              regularItems.push(...tpl.items.map(item => ({ ...item })));
            } else if (cBranch.kind === 'recipe') {
              const tpl = MASTER_RECIPE_TEMPLATES[cBranch.key];
              if (!tpl) throw new Error(`Template ${complaint.label} tidak ditemukan.`);
              if (tpl.weightGroups) {
                const weightKey = findWeightKeyForValue(cBranch.key, weight);
                if (!weightKey) throw new Error(`BB ${weight} kg belum tersedia.`);
                const group = tpl.weightGroups[weightKey];
                let items = (group?.items || []).map(item => ({ ...item }));
                if (complaintKey === 'DIARE' && weight < 40 && Number.isFinite(Number(ageMonths)) && Number(ageMonths) < 6) {
                  items = items.map(item => /^(ZINc TABLET)$/i.test(item.obat) ? ({ ...item, dosis: '1/2 tab', frekuensi: '1x1' }) : item);
                }
                regularItems.push(...items);
              } else {
                regularItems.push(...(tpl.items || []).map(item => ({ ...item })));
              }
            } else if (cBranch.kind === 'ageRecipe') {
              // Kembung Anak: pilih template berdasarkan umur pasien.
              const ay = Number(ageYears);
              const key = Number.isFinite(ay) && ay > 15 ? cBranch.keyGt15 : cBranch.key5_15;
              const tpl = MASTER_RECIPE_TEMPLATES[key];
              if (!tpl?.items?.length) throw new Error(`Template ${complaint.label} sesuai umur tidak ditemukan.`);
              regularItems.push(...tpl.items.map(item => ({ ...item })));
            } else if (cBranch.kind === 'racikan') {
              const weightKey = findWeightKeyForValue(cBranch.key, weight, { lowerBoundaryForRacikan: true });
              if (!weightKey) throw new Error(`BB ${weight} kg belum tersedia untuk racikan.`);
              const tpl = MASTER_RACIKAN_TEMPLATES[cBranch.key];
              const group = tpl?.weightGroups?.[weightKey];
              if (!group) throw new Error(`Kelompok BB racikan tidak ditemukan.`);
              racikanEntries.push({ label: complaint.label, tpl, group, weightKey });
              lines.push(`  - Racikan: ${(group.namaRacikan || tpl.name || complaint.label)} • ${(group.jumlahRacikan || '10')} puyer • ${(group.dosis || '1 pulv')} • ${(group.frekuensi || '')}`.replace(/ • $/, ''));
              const components = (group.items || []).map(item => `${item.obat} × ${item.jumlahPerObat || item.jumlah || 1}`).join(' + ');
              if (components) lines.push(`  - Bahan: ${components}`);
            }
          } catch (err) {
            errors.push(`${complaintKey}: ${err.message || err}`);
          }
        }

        const plan = uniqueRecipeItems(regularItems, workingSeen);
        lines.push('');
        lines.push(`OBAT NON-RACIKAN YANG AKAN DITAMBAHKAN: ${plan.unique.length}`);
        plan.unique.forEach(item => {
          const detail = [item.obat, item.jumlah ? `jml ${item.jumlah}` : '', item.dosis, item.frekuensi].filter(Boolean).join(' • ');
          lines.push(`• ${detail}`);
          workingSeen.add(norm(item.obat));
        });
        if (plan.skipped?.length) {
          skipped.push(...plan.skipped.map(item => item.obat));
        }
      }

      if (racikanEntries.length) {
        lines.push('');
        lines.push(`RACIKAN YANG AKAN DIPROSES: ${racikanEntries.length}`);
        racikanEntries.forEach((entry, idx) => {
          lines.push(`${idx + 1}. ${entry.label} • BB ${weight} kg → ${entry.group.label || entry.weightKey}`);
        });
      }

      if (skipped.length) {
        lines.push('');
        lines.push(`DILEWATI KARENA SUDAH ADA/TERINPUT: ${skipped.length}`);
        skipped.slice(0, 15).forEach(item => lines.push(`• ${item}`));
        if (skipped.length > 15) lines.push(`• dan ${skipped.length - 15} lainnya`);
      }

      if (errors.length) {
        lines.push('');
        lines.push(`⚠ BAGIAN YANG TIDAK BISA DIPREVIEW: ${errors.length}`);
        errors.forEach(err => lines.push(`• ${err}`));
      }

      return { text: lines.join('\n'), errors, racikanEntries };
    }

    async function runPackageRecipe() {
      const weightInput = menu.querySelector('#sp-package-weight');
      const ageYears = getPatientAgeYears();
      const ageDisplay = getPatientAgeDisplay();
      const adultByAge = Number.isFinite(ageYears) && ageYears > 17;
      const weight = adultByAge ? null : Number(String(weightInput?.value || '').replace(',', '.'));
      const complaints = [...menu.querySelectorAll('input[name="sp-package-complaint"]:checked')]
        .map((el) => el.value)
        .filter(Boolean);
      const actions = [...menu.querySelectorAll('input[name="sp-package-action"]:checked')]
        .map((el) => el.value)
        .filter(Boolean);

      if (!adultByAge && (!Number.isFinite(weight) || weight <= 0)) {
        toast('KOMBINASI RESEP: untuk pasien ≤17 tahun, masukkan BB pasien terlebih dahulu.');
        return;
      }
      if (!adultByAge && weight === 40) {
        toast('KOMBINASI RESEP: BB 40 kg belum ditentukan masuk Dewasa atau Anak.');
        return;
      }
      if (!complaints.length && !actions.length) {
        toast('KOMBINASI RESEP: pilih minimal satu keluhan atau satu tindakan.');
        return;
      }

      const branch = adultByAge ? 'Dewasa' : (weight > 40 ? 'Dewasa' : 'Anak');
      const ageInfo = ageDisplay ? ` | Umur ${ageDisplay}` : '';

      // Deduplikasi global selama satu paket. Mulai dari obat yang sudah
      // tampil pada draft agar preview dan eksekusi menggunakan dasar yang sama.
      const seenSet = getExistingRecipeDrugSet();

      // PRIORITAS 3: tampilkan preview final sebelum ada input ke Resep Online.
      // User dapat membatalkan tanpa mengubah draft.
      try {
        const preview = await buildPackagePreview({
          complaints, actions, branch, weight, ageDisplay, ageYears, ageMonths: getPatientAgeMonths(), seenSet
        });

        const escapeHtml = (value) => String(value ?? '')
          .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
          .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
        const lines = preview.text.split('\n');
        let mode='';
        const medicineLines=[]; const actionLines=[]; const racikanLines=[];
        for (const line of lines) {
          if (line === 'TINDAKAN:') { mode='action'; continue; }
          if (line.startsWith('KELUHAN:')) { mode='complaint'; continue; }
          if (line.startsWith('OBAT NON-RACIKAN YANG AKAN DITAMBAHKAN:')) { mode='medicine'; continue; }
          if (line.startsWith('RACIKAN YANG AKAN DIPROSES:')) { mode='racikan'; continue; }
          if (line.startsWith('DILEWATI KARENA SUDAH ADA/TERINPUT:') || line.startsWith('⚠ BAGIAN YANG TIDAK BISA DIPREVIEW:')) { mode=''; continue; }
          if (!line.trim()) continue;
          if (mode==='medicine' && /^• /.test(line)) medicineLines.push(line.slice(2));
          else if (mode==='action' && /^• /.test(line)) actionLines.push(line.slice(2));
        }
        if (Array.isArray(preview.racikanEntries)) {
          preview.racikanEntries.forEach((r) => {
            const g=r.group||{};
            const parts=[g.namaRacikan||r.tpl?.name||r.label, g.jumlahRacikan?`${g.jumlahRacikan} puyer`:'', g.dosis||'', g.frekuensi||''].filter(Boolean);
            const bahan=(g.items||[]).map(it=>`${it.obat||''} × ${it.jumlahPerObat||it.jumlah||1}`).join(' + ');
            if (bahan) parts.push(`Bahan: ${bahan}`);
            racikanLines.push(parts.join(' • '));
          });
        }

        const overlay=document.createElement('div');
        overlay.className='sp-preview-overlay-compact';
        overlay.innerHTML=`
          <div class="sp-preview-card-compact">
            <div style="font-size:15px;font-weight:800;">👁 PREVIEW KOMBINASI RESEP</div>
            <div class="sp-preview-meta-compact">${escapeHtml(branch)}${ageDisplay?` • Umur ${escapeHtml(ageDisplay)}`:''}${!adultByAge&&Number.isFinite(weight)?` • BB ${escapeHtml(weight)} kg`:''}</div>
            <div class="sp-preview-grid-compact">
              <div class="sp-preview-box-compact"><div class="sp-preview-head-compact">KELUHAN</div><div class="sp-preview-list-compact">${complaints.map((k,i)=>`<div class="sp-preview-item-compact">${i+1}. ${escapeHtml(COMPLAINT_RECIPE_MAP[k]?.label||k)}</div>`).join('')||'<div class="sp-preview-item-compact">Tidak ada</div>'}</div></div>
              <div class="sp-preview-box-compact"><div class="sp-preview-head-compact">TINDAKAN</div><div class="sp-preview-list-compact">${actionLines.map(x=>`<div class="sp-preview-item-compact">• ${escapeHtml(x)}</div>`).join('')||'<div class="sp-preview-item-compact">Tidak ada</div>'}</div></div>
              <div class="sp-preview-box-compact"><div class="sp-preview-head-compact">OBAT NON-RACIKAN</div><div class="sp-preview-list-compact">${medicineLines.map(x=>`<div class="sp-preview-item-compact">• ${escapeHtml(x)}</div>`).join('')||'<div class="sp-preview-item-compact">Tidak ada</div>'}</div></div>
              <div class="sp-preview-box-compact"><div class="sp-preview-head-compact">RACIKAN</div><div class="sp-preview-list-compact">${racikanLines.map(x=>`<div class="sp-preview-item-compact">• ${escapeHtml(x)}</div>`).join('')||'<div class="sp-preview-item-compact">Tidak ada</div>'}</div></div>
            </div>
            ${preview.errors.length?`<div class="sp-preview-warning-compact">⚠ ${preview.errors.length} bagian perlu diperiksa.</div>`:''}
            <div style="font-size:10px;color:#666;margin-top:6px;">Belum ada input ke Resep Online. Periksa kembali sebelum melanjutkan.</div>
            <div class="sp-preview-actions-compact"><button type="button" data-preview-cancel="1">Batal</button><button type="button" class="sp-primary" data-preview-continue="1">✓ Lanjutkan Input</button></div>
          </div>`;
        // Sembunyikan sementara modal KOMBINASI RESEP saat preview dibuka.
        // Ini mencegah stacking-context/portal CSS Smartplus menempatkan modal keluhan
        // di atas preview pada Chrome maupun Firefox. Modal dikembalikan setelah preview selesai.
        const previousMenuVisibility = menu.style.visibility;
        menu.style.visibility = 'hidden';
        document.body.appendChild(overlay);

        await new Promise((resolve)=>{
          overlay.querySelector('[data-preview-cancel]').addEventListener('click',()=>{ overlay.remove(); menu.style.visibility = previousMenuVisibility; resolve(false); });
          overlay.querySelector('[data-preview-continue]').addEventListener('click',()=>{ overlay.remove(); menu.style.visibility = previousMenuVisibility; resolve(true); });
        }).then(async proceed=>{
          if (!proceed) throw new Error('__PREVIEW_CANCELLED__');
          if (preview.errors.length) {
            const ok=window.confirm(`Preview menemukan ${preview.errors.length} bagian yang belum dapat dipastikan.\n\n${preview.errors.map(e=>'• '+e).join('\n')}\n\nTetap lanjutkan?`);
            if (!ok) throw new Error('__PREVIEW_CANCELLED__');
          }
        });
      } catch (previewErr) {
        try { menu.style.visibility = ''; } catch (_) {}
        if (previewErr?.message === '__PREVIEW_CANCELLED__') {
          recipeStatus('KOMBINASI RESEP dibatalkan setelah preview.');
          return;
        }
        console.error('[KOMBINASI RESEP PREVIEW]', previewErr);
        const ok = window.confirm(`Preview gagal dibuat sempurna: ${previewErr.message || previewErr}\n\nTetap lanjutkan proses?`);
        if (!ok) return;
      }

      closeMenu();
      recipeStopRequested = false;
      recipeStatus(`KOMBINASI RESEP ${branch}${adultByAge ? ' • Umur ' + ageDisplay : ' • BB ' + weight + ' kg' + ageInfo}`);

      const errors = [];
      let actionDone = 0;
      let complaintDone = 0;
      let skipped = 0;

      // 1) TINDAKAN DAHULU. Setiap tindakan diselesaikan dan langsung
      // disimpan sebelum lanjut ke tindakan berikutnya.
      for (let actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (isRecipeStopRequested()) break;
        const actionKey = actions[actionIndex];
        const before = new Set(seenSet);
        updateRecipeProgress(`KOMBINASI RESEP: tindakan ${actionIndex + 1}/${actions.length}`, actionIndex, actions.length, MASTER_RECIPE_TEMPLATES.TINDAKAN?.children?.[actionKey]?.name || actionKey);
        try {
          await fillActionRecipe(actionKey, { autoSave: true, seenSet, internalPackage: true });
          actionDone++;
          skipped += [...seenSet].filter((x) => !before.has(x)).length === 0 ? 0 : 0;
        } catch (err) {
          console.error('[KOMBINASI RESEP] tindakan', actionKey, err);
          errors.push(`Tindakan ${actionKey}: ${err.message || err}`);
        }
        await recipeSleep(500);
      }

      // 2) Setelah seluruh tindakan selesai, masukkan SEMUA kombinasi keluhan
      // sebagai satu rangkaian obat non-racikan yang sudah dideduplikasi.
      // Bagian keluhan TIDAK menekan Simpan.
      if (complaints.length) {
        try {
          const result = await runCombinedComplaintRecipes(complaints, weight, { seenSet, age: ageYears, ageYears, ageDisplay, ageMonths: getPatientAgeMonths(), forceAdult: adultByAge, internalPackage: true });
          complaintDone = result.details.length;
        } catch (err) {
          console.error('[KOMBINASI RESEP] kombinasi keluhan', err);
          errors.push(`Kombinasi keluhan: ${err.message || err}`);
        }
      }

      if (isRecipeStopRequested()) {
        clearRecipeProgress(`⛔ KOMBINASI RESEP dihentikan. ${actionDone} tindakan disimpan + ${complaintDone} keluhan diproses. Review draft saat ini.`);
      } else if (errors.length) {
        clearRecipeProgress(`KOMBINASI RESEP selesai sebagian: ${actionDone} tindakan disimpan + ${complaintDone} keluhan diproses. Cek ${errors.length} bagian.`);
      } else {
        clearRecipeProgress(`KOMBINASI RESEP selesai: ${actionDone} tindakan sudah disimpan, lalu ${complaintDone} kombinasi keluhan ditambahkan sebagai draft. Review lalu Simpan manual.`);
      }

      console.group('[KOMBINASI RESEP v2.90]');
      console.log('BB:', weight);
      console.log('Umur:', ageDisplay);
      console.log('Cabang:', branch);
      console.log('Keluhan:', complaints);
      console.log('Tindakan:', actions);
      console.log('Obat yang sudah terdeteksi/ditambah:', [...seenSet]);
      console.log('Tindakan selesai:', actionDone);
      console.log('Keluhan selesai:', complaintDone);
      console.log('Gagal:', errors);
      console.groupEnd();
      recipeStopRequested = false;
    }

    function renderPackageRecipeMenu() {
      menu.classList.add("sp-package-modal");
      const ageDisplay = getPatientAgeDisplay();
      const complaintEntries = Object.entries(COMPLAINT_RECIPE_MAP);
      const actionEntries = Object.entries(MASTER_RECIPE_TEMPLATES.TINDAKAN?.children || {});

      menu.innerHTML = `
        <div class="sp-title">📦 KOMBINASI RESEP + TINDAKAN</div>
        <div class="sp-note">Semua pilihan di sini membaca MASTER TEMPLATE RESEP yang sama dengan MASTER TEMPLATE RESEP. Satu pasien dapat mengalami beberapa keluhan. Semua paket yang dipilih akan diproses berurutan dan ditambahkan ke draft.</div>

        <div class="sp-section-title">1. UMUR PASIEN (OTOMATIS DARI IDENTITAS)</div>
        <div class="sp-age-box">${ageDisplay ? `Umur dari identitas: <b>${ageDisplay}</b>` : 'Umur dari identitas belum terbaca'}</div>

        <div class="sp-package-form">
          <div id="sp-package-weight-section" class="sp-section-title">2. BERAT BADAN PASIEN</div>
          <div id="sp-package-weight-card" class="sp-package-input-card">
            <div id="sp-package-weight-row" class="sp-field-row">
              <label>BB (kg)</label>
              <input id="sp-package-weight" type="text" inputmode="decimal" autocomplete="off" placeholder="Masukkan BB (kg)" title="Ketik berat badan secara manual, contoh: 10 atau 10.5">
            </div>
            <div id="sp-package-weight-help" class="sp-help">BB &gt;40 kg = Dewasa • BB &lt;40 kg = Anak • BB 40 kg perlu dipilih manual.</div>
            <div id="sp-package-adult-note" class="sp-age-box" style="display:none">Umur &gt;17 tahun → otomatis menggunakan resep dewasa. BB tidak diperlukan.</div>
          </div>
        </div>

        <div class="sp-section-title">3. PILIH SATU ATAU BEBERAPA KELUHAN</div>
        <div class="sp-check-grid">
          ${complaintEntries.map(([key, item]) => `
            <label class="sp-check-card">
              <input type="checkbox" name="sp-package-complaint" value="${key}">
              <span>${item.label}</span>
            </label>
          `).join('')}
        </div>

        <div class="sp-section-title">4. PILIH TINDAKAN (OPSIONAL, BISA LEBIH DARI SATU)</div>
        <div class="sp-check-grid">
          ${actionEntries.map(([key, item]) => `
            <label class="sp-check-card sp-action-card">
              <input type="checkbox" name="sp-package-action" value="${key}">
              <span>${item.name}</span>
            </label>
          `).join('')}
        </div>

        <div id="sp-package-summary" class="sp-summary">Belum ada keluhan atau tindakan dipilih</div>

        <div class="sp-package-buttons">
          <button type="button" class="sp-primary" data-package-submit="1">▶ INPUT KOMBINASI RESEP</button>
          <button type="button" class="sp-back" data-back="main">Tutup</button>
        </div>

        <div class="sp-note">
          Data umur hanya dibaca dari identitas pasien pada halaman Smartplus. BB dimasukkan manual. Tindakan diproses satu per satu dan disimpan setelah masing-masing selesai. Setelah semua tindakan selesai, kombinasi obat berdasarkan keluhan ditambahkan sebagai draft tanpa Simpan akhir; dokter tetap melakukan review sebelum menyimpan.
        </div>
      `;

      const updateSummary = () => {
        const c = [...menu.querySelectorAll('input[name="sp-package-complaint"]:checked')]
          .map((el) => COMPLAINT_RECIPE_MAP[el.value]?.label || el.value);
        const a = [...menu.querySelectorAll('input[name="sp-package-action"]:checked')]
          .map((el) => MASTER_RECIPE_TEMPLATES.TINDAKAN?.children?.[el.value]?.name || el.value);
        const target = menu.querySelector('#sp-package-summary');
        if (!target) return;
        target.textContent = c.length || a.length
          ? `Dipilih: ${c.length} keluhan${a.length ? ` + ${a.length} tindakan` : ''}`
          : 'Belum ada keluhan atau tindakan dipilih';
      };
      menu.querySelectorAll('input[type="checkbox"]').forEach((el) => el.addEventListener('change', updateSummary));

      const toggleWeightByAge = () => {
        const age = getPatientAgeYears();
        const adult = Number.isFinite(age) && age > 17;
        const section = menu.querySelector('#sp-package-weight-section');
        const row = menu.querySelector('#sp-package-weight-row');
        const card = menu.querySelector('#sp-package-weight-card');
        const help = menu.querySelector('#sp-package-weight-help');
        const note = menu.querySelector('#sp-package-adult-note');
        if (adult) {
          if (section) section.style.display = 'none';
          if (row) row.style.display = 'none';
          if (card) card.style.display = '';
          if (help) help.style.display = 'none';
          if (note) note.style.display = '';
        } else {
          if (section) section.style.display = '';
          if (row) row.style.display = '';
          if (card) card.style.display = '';
          if (help) help.style.display = '';
          if (note) note.style.display = 'none';
        }
      };
      toggleWeightByAge();
    }

    // =========================
    // AUTO CPPT RAWAT INAP
    // =========================
    // Alur bersama:
    // 1) klik E-RANAP terlebih dahulu agar menu/opsi CPPT muncul
    // 2) klik CPPT
    // 3) klik FORM INPUT CPPT DOKTER
    // 4) klik + TAMBAH
    // 5) isi field sesuai template
    const CPPT_NORMAL_TEMPLATE = {
      objective:
        (TEMPLATES.NORMAL && TEMPLATES.NORMAL.fisik)
          ? TEMPLATES.NORMAL.fisik
          : "Kep: ca -/-, si -/-\nTh: rh -/-, wh -/-, retraksi -, murmur -\nAbd: bu +, soefl, nte -\nExt: akral hangat, crt 2 detik",
      instruksi: "Terapi dpjp lanjut"
    };

    const CPPT_PULANG_TEMPLATE = {
      keluhan: "Keluhan perbaikan",
      instruksi: "Pulang sesuai DPJP"
    };

    function getRandomNormalTemperature() {
      // Variasi suhu normal 36,5–37,2 °C.
      const value = (365 + randomInt(0, 7)) / 10;
      return value.toFixed(1).replace(".", ",");
    }

    // v3.1.1: klik teks khusus CPPT.
    // - Cari juga tab berbentuk <li>/<span>/<div onclick> (bukan hanya <button>/<a>).
    // - Abaikan tombol/menu AUTO ASM milik script sendiri.
    // - Utamakan teks yang SAMA PERSIS, lalu baru teks yang mengandung,
    //   dan pilih teks terpendek agar "CPPT" tidak salah klik "FORM INPUT CPPT DOKTER".
    // clickVisibleText() lama tetap dipakai fitur resep (tidak diubah).
    function cpptCompact(s) {
      return norm(s).replace(/[\s\-_.+]/g, "");
    }

    function cpptDepth(el) {
      let d = 0;
      for (let n = el; n; n = n.parentElement) d++;
      return d;
    }

    // Berapa level ke atas sampai ketemu ancestor yang mengandung teks tertentu
    // (maks 6 level). Infinity jika tidak ketemu.
    function cpptNearLevel(el, nearText) {
      const want = norm(nearText);
      let n = el.parentElement;
      for (let i = 1; n && i <= 6; i++, n = n.parentElement) {
        if (norm(n.innerText || n.textContent || "").includes(want)) return i;
      }
      return Infinity;
    }

    function findCpptClickable(phrases, exactOnly = false, preferNear = "") {
      const wanted = (Array.isArray(phrases) ? phrases : [phrases]).map(cpptCompact).filter(Boolean);
      const selector = "button, a, input[type='button'], input[type='submit'], [role='button'], [role='tab'], li, span, label, td, div, img[alt], [onclick], .nav-link, .tab";
      // Abaikan UI script sendiri dan breadcrumb (mis. "Rawat Inap > e-Ranap") agar tidak pindah halaman.
      const own = (el) => el.id === BUTTON_ID || !!el.closest("#" + MENU_ID + ", .breadcrumb, [aria-label='breadcrumb']");

      const candidates = [...document.querySelectorAll(selector)]
        .filter((el) => !own(el) && visible(el))
        .map((el) => ({
          el,
          txt: cpptCompact(el.innerText || el.textContent || el.value || el.getAttribute("alt") || "")
        }))
        .filter((c) => c.txt && c.txt.length <= 60);

      let hits = candidates.filter((c) => wanted.includes(c.txt));
      if (!hits.length && !exactOnly) {
        hits = candidates.filter((c) => wanted.some((w) => c.txt.includes(w)));
      }
      if (!hits.length) return null;

      // Utamakan elemen di baris tab yang diharapkan (mis. E-RANAP sebaris "Riwayat Kunjungan"),
      // yaitu lebih dekat ke teks tersebut daripada ke breadcrumb "Rawat Inap".
      // Breadcrumb Smartplus tidak selalu memakai class .breadcrumb.
      if (preferNear) {
        const near = hits.filter((c) => {
          const lv = cpptNearLevel(c.el, preferNear);
          return lv !== Infinity && lv < cpptNearLevel(c.el, "rawat inap");
        });
        if (near.length) hits = near;
      }

      // Teks terpendek dulu; jika sama, elemen TERDALAM (mis. <a> di dalam <li>),
      // supaya yang diklik elemen yang benar-benar punya handler klik.
      hits.sort((x, y) => (x.txt.length - y.txt.length) || (cpptDepth(y.el) - cpptDepth(x.el)));
      const best = hits[0].el;
      return best.closest("button, a, [role='button'], [role='tab'], [onclick]") || best;
    }

    function clickCpptText(phrases, exactOnly = false, preferNear = "") {
      const el = findCpptClickable(phrases, exactOnly, preferNear);
      if (el) console.log("[AUTO CPPT] klik:", phrases, el);
      if (!el) return false;
      // Sengaja hanya el.click() (sama seperti versi lama): dispatchFullClick memicu
      // klik beberapa kali sehingga tab bisa ter-toggle atau + TAMBAH terbuka dua kali.
      try { el.click(); return true; } catch (_) { return false; }
    }

    function waitForVisibleTextButton(phrases, timeout = 8000, interval = 100, exactOnly = false, preferNear = "") {
      return new Promise((resolve) => {
        const started = Date.now();
        const tick = () => {
          if (clickCpptText(phrases, exactOnly, preferNear)) return resolve(true);
          if (Date.now() - started >= timeout) return resolve(false);
          setTimeout(tick, interval);
        };
        tick();
      });
    }

    // Form CPPT yang valid harus punya field isian dan label isi CPPT
    // (bukan sekadar panel daftar yang berjudul "Form Input CPPT Dokter").
    function allVisibleCpptForms() {
      const byId = cpptQueryVisible(CPPT_SELECTORS.form);
      if (byId) return [byId];
      return [
        ...document.querySelectorAll('form, .modal, .modal-dialog, [role="dialog"], fieldset, section, .panel, .card')
      ]
        .filter((el) => !el.closest("#" + MENU_ID) && visible(el))
        .filter((el) => {
          const t = norm(el.innerText || el.textContent || "");
          if (!/keluhan utama|tanda tanda vital|tanda-tanda vital|objective|instruksi/.test(t)) return false;
          return el.querySelectorAll("textarea, input:not([type='hidden']):not([type='button']):not([type='submit'])").length >= 3;
        });
    }

    function latestVisibleCpptForm(excludeSet = null) {
      const byId = cpptQueryVisible(CPPT_SELECTORS.form);
      if (byId && (!excludeSet || !excludeSet.has(byId))) return byId;

      const candidates = allVisibleCpptForms()
        .filter((el) => !excludeSet || !excludeSet.has(el))
        .sort((a, b) =>
          b.getBoundingClientRect().width * b.getBoundingClientRect().height -
          a.getBoundingClientRect().width * a.getBoundingClientRect().height
        );
      return candidates[0] || null;
    }

    function waitForVisibleCpptForm(timeout = 8000, interval = 100, excludeSet = null) {
      return new Promise((resolve) => {
        const started = Date.now();
        const tick = () => {
          const root = latestVisibleCpptForm(excludeSet);
          if (root) return resolve(root);
          if (Date.now() - started >= timeout) {
            // Fallback: form lama dipakai ulang oleh Smartplus (elemen sama).
            return resolve(excludeSet ? latestVisibleCpptForm(null) : null);
          }
          setTimeout(tick, interval);
        };
        tick();
      });
    }

    const CPPT_TAB_PHRASES = ["CPPT", "C P P T"];

    // v3.2.1: SELECTOR TETAP hasil inspeksi DOM Smartplus e-Ranap (Okt 2026).
    // Dicoba lebih dulu; jika tidak ada, baru fallback ke pencarian teks lama.
    // Penting: di halaman ini ada beberapa tombol "TAMBAH" (Lab/Rad/Rehab),
    // jadi + TAMBAH CPPT harus memakai #butt_tambah_cppt.
    const CPPT_SELECTORS = {
      eranapTab: 'a.nav-link[href="#planning"]',
      cpptTab: '#id_cppt_viewer, a.nav-link[href="#box_cppt_viewer"]',
      formInputToggle: '[data-target="#collapseFormCpptInput"]',
      formInputCollapse: '#collapseFormCpptInput',
      tambah: '#butt_tambah_cppt',
      form: 'form#frm_cppt_ri_dokter'
    };

    function cpptQueryVisible(selector) {
      try {
        return [...document.querySelectorAll(selector)].find((el) => visible(el)) || null;
      } catch (_) {
        return null;
      }
    }

    // Tunggu elemen selector tampil lalu klik; kembalikan false jika tidak muncul.
    function waitAndClickSelector(selector, timeout = 4000, interval = 120) {
      return new Promise((resolve) => {
        const started = Date.now();
        const tick = () => {
          const el = cpptQueryVisible(selector);
          if (el) {
            try { el.click(); console.log("[AUTO CPPT] klik selector:", selector); return resolve(true); } catch (_) {}
          }
          if (Date.now() - started >= timeout) return resolve(false);
          setTimeout(tick, interval);
        };
        tick();
      });
    }

    // Klik via selector tetap dulu, fallback ke teks.
    async function clickCpptStep(selector, phrases, timeout, exactOnly = false, preferNear = "") {
      if (await waitAndClickSelector(selector, Math.min(timeout, 4000))) return true;
      console.log("[AUTO CPPT] selector tidak ada, fallback teks:", phrases);
      return waitForVisibleTextButton(phrases, timeout, 120, exactOnly, preferNear);
    }

    async function openCpptDoctorForm() {
      // v3.1.2: E-RANAP selalu diklik dulu (seperti v3.1). Pilih tab yang sebaris
      // dengan "Riwayat Kunjungan", bukan link breadcrumb "e-Ranap".
      toast("AUTO CPPT: membuka E-Ranap terlebih dahulu...");
      if (!await clickCpptStep(CPPT_SELECTORS.eranapTab, ["E-RANAP", "E-Ranap", "E Ranap"], 8000, true, "riwayat kunjungan")) {
        toast("AUTO CPPT: tombol E-Ranap tidak ditemukan.");
        return null;
      }
      await recipeSleep(1500);

      toast("AUTO CPPT: membuka CPPT...");

      // exactOnly=true: hanya teks "CPPT" persis (spasi diabaikan, jadi "C P P T" juga cocok).
      if (!await clickCpptStep(CPPT_SELECTORS.cpptTab, CPPT_TAB_PHRASES, 10000, true)) {
        toast("AUTO CPPT: tombol CPPT tidak ditemukan.");
        return null;
      }

      await recipeSleep(800);

      // FORM INPUT CPPT DOKTER adalah tombol collapse (buka/tutup).
      // Jika panel sudah terbuka (class "show"), JANGAN diklik lagi agar tidak tertutup.
      const collapseEl = document.querySelector(CPPT_SELECTORS.formInputCollapse);
      const formInputOpen = !!(collapseEl && collapseEl.classList.contains("show"));

      // Jika form CPPT baru sudah terbuka (mis. menjalankan template kedua kali),
      // pakai form itu langsung. Tombol TAMBAH memang hilang saat form tampil.
      if (formInputOpen) {
        const openForm = cpptQueryVisible(CPPT_SELECTORS.form);
        if (openForm) {
          console.log("[AUTO CPPT] form CPPT sudah terbuka, dipakai langsung.");
          return openForm;
        }
      }
      if (!formInputOpen && !await clickCpptStep(CPPT_SELECTORS.formInputToggle, [
        "FORM INPUT CPPT DOKTER",
        "FORM INPUT CPPT",
        "INPUT CPPT DOKTER"
      ], 8000)) {
        toast("AUTO CPPT: tombol FORM INPUT CPPT DOKTER tidak ditemukan.");
        return null;
      }

      await recipeSleep(800);

      // Catat form yang sudah ada sebelum + TAMBAH, supaya yang diisi adalah form BARU.
      const before = new Set(allVisibleCpptForms());

      // Halaman ini punya tombol TAMBAH lain (Lab/Rad/Rehab). Fallback teks HANYA dipakai
      // jika struktur CPPT baru tidak dikenali sama sekali (Smartplus versi lain).
      const knownLayout = !!document.querySelector(CPPT_SELECTORS.formInputCollapse);
      const tambahOk = knownLayout
        ? await waitAndClickSelector(CPPT_SELECTORS.tambah, 8000)
        : await clickCpptStep(CPPT_SELECTORS.tambah, ["+ TAMBAH", "TAMBAH"], 8000, true);
      if (!tambahOk) {
        toast("AUTO CPPT: tombol + TAMBAH tidak ditemukan.");
        return null;
      }

      const root = await waitForVisibleCpptForm(8000, 120, before);
      if (!root) {
        toast("AUTO CPPT: form CPPT Dokter belum muncul.");
        return null;
      }

      await recipeSleep(400);
      return root;
    }

    // v3.1.1: pembungkus bersama untuk semua template CPPT (Normal, Rencana Pulang, dan nanti lainnya).
    // Mencegah dobel jalan dan menangkap error agar tidak diam-diam gagal.
    async function runCpptSafely(label, mode) {
      if (spCpptBusy) {
        toast("AUTO CPPT sedang berjalan, tunggu sampai selesai.");
        return null;
      }
      spCpptBusy = true;
      try {
        closeMenu();
        const root = await openCpptDoctorForm();
        if (!root) return null;
        return fillCpptCommonFields(root, mode);
      } catch (err) {
        console.error("[AUTO CPPT] error:", err);
        toast(`AUTO CPPT ${label} gagal: ${err && err.message ? err.message : err}`);
        return null;
      } finally {
        spCpptBusy = false;
      }
    }

    // v3.2.0: rentang tanda vital CPPT berdasarkan usia (disetujui dokter).
    // maxMonths = batas atas usia dalam BULAN (tidak termasuk).
    // td: null  -> Tekanan Darah TIDAK diisi (bayi & anak, sesuai instruksi dokter).
    // Suhu (36,5–37,2), SpO2 (97–100) dan GCS 15 sama untuk semua usia.
    // Untuk menambah/mengubah kelompok usia cukup edit daftar ini.
    const CPPT_VITAL_BY_AGE = [
      { key: "neonatus",   label: "Neonatus",     maxMonths: 1,        nadi: [120, 150], rr: [40, 50], td: null },
      { key: "bayi",       label: "Bayi",         maxMonths: 12,       nadi: [110, 140], rr: [30, 40], td: null },
      { key: "balita",     label: "Balita",       maxMonths: 36,       nadi: [100, 130], rr: [24, 30], td: null },
      { key: "prasekolah", label: "Prasekolah",   maxMonths: 72,       nadi: [90, 110],  rr: [22, 26], td: null },
      { key: "sekolah",    label: "Usia sekolah", maxMonths: 144,      nadi: [80, 100],  rr: [18, 22], td: null },
      { key: "remaja",     label: "Remaja",       maxMonths: 216,      nadi: [70, 95],   rr: [16, 20], td: null },
      { key: "dewasa",     label: "Dewasa",       maxMonths: Infinity, nadi: [70, 100],  rr: [16, 20], td: { sys: [110, 130], dia: [70, 85] } }
    ];

    // Membaca usia pasien memakai fungsi existing (header "Data Pasien : ... / 28 Thn 4 Bln 0 Hr").
    function getCpptAgeInfo() {
      let months = null;
      try {
        months = getPatientAgeMonths();
        if (!Number.isFinite(months)) {
          const years = getPatientAgeYears();
          months = Number.isFinite(years) ? years * 12 : null;
        }
      } catch (err) {
        console.warn("[AUTO CPPT] gagal membaca usia:", err);
        months = null;
      }

      // Usia tidak terbaca -> pakai rentang dewasa (perilaku lama) dan beri peringatan.
      if (!Number.isFinite(months) || months < 0) {
        const adult = CPPT_VITAL_BY_AGE[CPPT_VITAL_BY_AGE.length - 1];
        return { months: null, group: adult, known: false, label: "Dewasa (usia tidak terbaca)" };
      }

      const group = CPPT_VITAL_BY_AGE.find((g) => months < g.maxMonths) || CPPT_VITAL_BY_AGE[CPPT_VITAL_BY_AGE.length - 1];
      const ageText = months < 1 ? "< 1 bln" : months < 12 ? `${months} bln` : `${Math.floor(months / 12)} thn`;
      return { months, group, known: true, label: `${group.label} (${ageText})` };
    }

    function getNormalCpptVitals(ageInfo = getCpptAgeInfo()) {
      const g = ageInfo.group;
      const pulse = randomInt(g.nadi[0], g.nadi[1]);
      const rr = randomInt(g.rr[0], g.rr[1]);
      const temp = getRandomNormalTemperature();
      const td = g.td ? `${randomInt(g.td.sys[0], g.td.sys[1])}/${randomInt(g.td.dia[0], g.td.dia[1])}` : "";
      const spo2 = randomInt(97, 100);
      return { pulse, rr, temp, td, spo2 };
    }

    // v3.2.1: isi kolom CPPT via ID tetap (#keluhan_utama, #objective, #td, ...),
    // fallback ke pencarian label lama jika ID tidak ada.
    function setCpptField(root, id, labels, value) {
      const el = root.querySelector("#" + id) || document.getElementById(id);
      if (el && visible(el)) return setValue(el, value);
      return setByLabel(root, labels, value, false);
    }

    function fillCpptCommonFields(root, mode) {
      const fail = [];
      const ageInfo = getCpptAgeInfo();
      const { pulse, rr, temp, td, spo2 } = getNormalCpptVitals(ageInfo);

      if (mode === "pulang") {
        if (!setCpptField(root, "keluhan_utama", ["Keluhan Utama", "Keluhan"], CPPT_PULANG_TEMPLATE.keluhan)) {
          fail.push("Keluhan");
        }
      }
      // Mode normal sengaja membiarkan Keluhan Utama kosong.

      if (!setCpptField(root, "objective", ["Objective"], CPPT_NORMAL_TEMPLATE.objective)) fail.push("Objective");
      if (!setCpptField(root, "kesadaran", ["Kesadaran"], "Compos Mentis")) fail.push("Kesadaran");
      if (!setCpptField(root, "keadaan_umum", ["Keadaan Umum"], "Tampak sakit sedang")) fail.push("Keadaan Umum");
      // TD hanya diisi jika kelompok usia memiliki rentang TD (dewasa). Bayi/anak: dikosongkan.
      if (td) {
        if (!setCpptField(root, "td", ["Tekanan Darah", "TD"], td)) fail.push("Tekanan Darah");
      }
      if (!setCpptField(root, "nadi", ["Nadi"], String(pulse))) fail.push("Nadi");
      if (!setCpptField(root, "suhu", ["Suhu"], temp)) fail.push("Suhu");
      if (!setCpptField(root, "gcs", ["GCS"], "15")) fail.push("GCS");
      if (!setCpptField(root, "nafas", ["Pernafasan", "Pernapasan", "RR"], String(rr))) fail.push("Pernafasan");
      if (!setCpptField(root, "reaksi_cahaya", ["Reaksi Cahaya", "Refleks Cahaya"], "+/+")) fail.push("Reaksi Cahaya");
      if (!setByLabel(root, ["SpO2", "SPO2", "Saturasi Oksigen"], String(spo2), false)) {
        console.log("[AUTO CPPT] SpO2 tidak tersedia pada form CPPT ini; dilewati.");
      }

      const instruksi = mode === "pulang" ? CPPT_PULANG_TEMPLATE.instruksi : CPPT_NORMAL_TEMPLATE.instruksi;
      if (!setCpptField(root, "p_instruksi", ["Instruksi"], instruksi)) fail.push("Instruksi");

      // Beri kesempatan form melakukan re-render, lalu tegaskan kembali field penting.
      if (mode === "pulang") {
        setTimeout(() => setCpptField(root, "keluhan_utama", ["Keluhan Utama", "Keluhan"], CPPT_PULANG_TEMPLATE.keluhan), 100);
      }
      setTimeout(() => setCpptField(root, "objective", ["Objective"], CPPT_NORMAL_TEMPLATE.objective), 150);
      setTimeout(() => setCpptField(root, "p_instruksi", ["Instruksi"], instruksi), 300);

      return { fail, pulse, rr, temp, td, spo2, instruksi, ageLabel: ageInfo.label, ageKnown: ageInfo.known };
    }

    async function runCpptNormalRawatInap() {
      const result = await runCpptSafely("Normal", "normal");
      if (!result) return;
      const message = result.fail.length
        ? `AUTO CPPT Normal selesai sebagian. Vital: ${result.ageLabel}. TD ${result.td || "-"}, Nadi ${result.pulse}, RR ${result.rr}, Suhu ${result.temp}. Cek manual: ${result.fail.join(", ")}.`
        : `AUTO CPPT Normal selesai. Vital: ${result.ageLabel}. TD ${result.td || "-"}, Nadi ${result.pulse}, RR ${result.rr}, Suhu ${result.temp}, SpO2 ${result.spo2}. Review lalu simpan manual.`;
      toast(result.ageKnown ? message : `⚠️ Usia tidak terbaca, vital memakai rentang dewasa, mohon cek. ${message}`);
      console.log("[AUTO CPPT NORMAL RAWAT INAP]", {
        objective: CPPT_NORMAL_TEMPLATE.objective,
        kesadaran: "Compos Mentis",
        keadaanUmum: "Tampak sakit sedang",
        usiaVital: result.ageLabel,
        td: result.td,
        pulse: result.pulse,
        rr: result.rr,
        temp: result.temp,
        spo2: result.spo2,
        gcs: "15",
        reaksiCahaya: "+/+",
        instruksi: CPPT_NORMAL_TEMPLATE.instruksi,
        fail: result.fail
      });
    }

    async function runCpptRencanaPulang() {
      const result = await runCpptSafely("Rencana Pulang", "pulang");
      if (!result) return;
      const message = result.fail.length
        ? `AUTO CPPT Rencana Pulang selesai sebagian. Keluhan: "${CPPT_PULANG_TEMPLATE.keluhan}". Vital: ${result.ageLabel}. Cek manual: ${result.fail.join(", ")}.`
        : `AUTO CPPT Rencana Pulang selesai. Keluhan "${CPPT_PULANG_TEMPLATE.keluhan}". Vital: ${result.ageLabel}. TD ${result.td || "-"}, Nadi ${result.pulse}, RR ${result.rr}, Suhu ${result.temp}. Review lalu simpan manual.`;
      toast(result.ageKnown ? message : `⚠️ Usia tidak terbaca, vital memakai rentang dewasa, mohon cek. ${message}`);
      console.log("[AUTO CPPT RENCANA PULANG RAWAT INAP]", {
        keluhan: CPPT_PULANG_TEMPLATE.keluhan,
        objective: CPPT_NORMAL_TEMPLATE.objective,
        kesadaran: "Compos Mentis",
        keadaanUmum: "Tampak sakit sedang",
        usiaVital: result.ageLabel,
        td: result.td,
        pulse: result.pulse,
        rr: result.rr,
        temp: result.temp,
        spo2: result.spo2,
        gcs: "15",
        reaksiCahaya: "+/+",
        instruksi: CPPT_PULANG_TEMPLATE.instruksi,
        fail: result.fail
      });
    }

    function renderCpptMenu() {
      menu.classList.remove("sp-package-modal");
      menu.innerHTML = `
        <div class="sp-title">📝 CPPT RAWAT INAP</div>
        <div class="sp-note">Pilih template CPPT yang ingin diisi otomatis:</div>

        <button type="button" data-cppt-normal="1">
          📋 CPPT NORMAL
        </button>

        <button type="button" data-cppt-pulang="1">
          🏠 CPPT RENCANA PULANG
        </button>

        <button type="button" class="sp-back" data-back="main">
          ← Kembali ke menu utama
        </button>

        <div class="sp-note">
          Keluhan CPPT Normal dibiarkan kosong. CPPT Rencana Pulang diisi "Keluhan perbaikan".
          Objective, tanda vital, dan Keadaan Umum mengikuti template normal.
          Nadi/RR menyesuaikan usia pasien; TD hanya diisi untuk dewasa (≥ 18 thn). Review lalu simpan manual.
        </div>
      `;
    }

    function renderMain() {
      menu.classList.remove("sp-package-modal");
      menu.innerHTML = `
        <div class="sp-title">🚑 SMARTPLUS IGD v2.76</div>
        <div class="sp-note">Pilih modul yang ingin digunakan:</div>

        <button type="button" data-disease-menu="1">
          🩺 ASGADAR PENYAKIT ▶
        </button>

        <button type="button" data-package-menu="1">
          📦 KOMBINASI RESEP ▶
        </button>

        <button type="button" data-auto-resep-menu="1">
          💊 MASTER TEMPLATE RESEP ▶
        </button>

        <button type="button" data-cppt-menu="1">
          📝 CPPT RAWAT INAP ▶
        </button>

        <div class="sp-divider"></div>

        <button type="button" data-auto-soap="1">
          📝 AUTO SOAP - Copy Konsul
        </button>

        <button type="button" data-auto-lab="FEBRIS">
          🧪 AUTO LAB – Order Lab Febris
        </button>

        <button type="button" data-auto-rad="THORAX">
          🩻 AUTO RO THORAX – Order Radiologi
        </button>

        <div class="sp-note">
          ASGADAR PENYAKIT berisi seluruh template penyakit yang sudah tersedia.
          MASTER TEMPLATE RESEP berisi master template resep dewasa, anak, dan tindakan yang sudah tersedia.
          Save/Submit akhir tetap manual.
        </div>
      `;
    }

    function renderDiseaseMenu() {
      menu.classList.remove("sp-package-modal");
      const diseaseEntries = Object.entries(TEMPLATES);

      menu.innerHTML = `
        <div class="sp-title">🩺 ASGADAR PENYAKIT</div>
        <div class="sp-note">Pilih template penyakit untuk mengisi Assessment Gawat Darurat:</div>

        ${diseaseEntries.map(([key, item]) => `
          <button type="button" data-template="${key}">
            ${key === "BP" ? "🫁 " : ""}
            ${key === "GEA" ? "🦠 " : ""}
            ${key === "ABDOMINAL" ? "🩻 " : ""}
            ${key === "CEPHALGIA" ? "🧠 " : ""}
            ${key === "LBP" ? "🦴 " : ""}
            ${key === "FEBRIS_VI_BI" ? "🌡️ " : ""}
            ${key === "KEJANG_DEMAM_ANAK" ? "👶 " : ""}
            ${key === "PENURUNAN_KESADARAN" ? "🚨 " : ""}
            ${key === "NORMAL" ? "📋 " : ""}
            ${item.diagnosis || (key === "BP" ? "Bronkopneumonia" :
              key === "GEA" ? "Gastroenteritis Akut" :
              key === "ABDOMINAL" ? "Abdominal Pain" :
              key === "CEPHALGIA" ? "Cephalgia" :
              key === "LBP" ? "Low Back Pain" :
              key === "FEBRIS_VI_BI" ? "Febris ec VI dd BI" :
              key === "KEJANG_DEMAM_ANAK" ? "Kejang Demam Anak" :
              key === "PENURUNAN_KESADARAN" ? "Penurunan Kesadaran" : "Normal")}
          </button>
        `).join("")}

        <button type="button" class="sp-back" data-back="main">
          ← Kembali
        </button>

        <div class="sp-note">
          Template tetap menggunakan isi TEMPLATES yang sudah ada di script.
          Tidak ada perubahan otomatis pada Save/Submit.
        </div>
      `;
    }

    function getAutoRecipePackageBranch(complaintKey, branchType) {
      const complaint = COMPLAINT_RECIPE_MAP[complaintKey];
      if (!complaint) return null;
      return complaint[branchType] || null;
    }

    function getAutoRecipePackageDetails(complaintKey, branchType) {
      const branch = getAutoRecipePackageBranch(complaintKey, branchType);
      if (!branch) return [];

      if (branch.kind === "dynamic") {
        const key = ensureDynamicComplaintTemplate(branch);
        const tpl = key ? MASTER_RECIPE_TEMPLATES[key] : null;
        return (tpl?.items || []).map(item => `${item.obat} • ${item.jumlah} • ${item.dosis || ""} ${item.frekuensi || ""}`.trim());
      }

      if (branch.kind === "ageRecipe") {
        const a = MASTER_RECIPE_TEMPLATES[branch.key5_15];
        const b = MASTER_RECIPE_TEMPLATES[branch.keyGt15];
        const aText = (a?.items || []).map(item => `${item.obat} • ${item.jumlah} • ${item.dosis} ${item.frekuensi}`.trim()).join(" + ");
        const bText = (b?.items || []).map(item => `${item.obat} • ${item.jumlah} • ${item.dosis} ${item.frekuensi}`.trim()).join(" + ");
        return [
          `Usia 5–15 th: ${aText || "sesuai template"}`,
          `Usia >15 th: ${bText || "sesuai template"}`
        ];
      }

      if (branch.kind === "racikan") {
        const tpl = MASTER_RACIKAN_TEMPLATES[branch.key];
        const firstGroup = tpl?.weightGroups ? Object.values(tpl.weightGroups)[0] : null;
        const components = (firstGroup?.items || []).map(item => item.obat).join(" + ");
        const info = firstGroup
          ? `${firstGroup.namaRacikan || tpl.name} • ${components} • ${firstGroup.jumlahRacikan || "10"} puyer • ${firstGroup.dosis || "1 pulv"} • ${firstGroup.frekuensi || ""}`
          : tpl?.name || "Racikan sesuai kelompok BB";
        return [info, "Jumlah bahan racikan mengikuti kelompok BB pasien"];
      }

      const tpl = MASTER_RECIPE_TEMPLATES[branch.key];
      if (!tpl) return [];

      if (tpl.weightGroups) {
        const firstGroup = Object.values(tpl.weightGroups)[0];
        const items = (firstGroup?.items || []).map(item => `${item.obat} • dosis sesuai BB • ${item.frekuensi || ""}`.trim());
        return [
          items.length ? items.join(" + ") : "Dosis sesuai kelompok BB",
          "Jumlah/dosis mengikuti kelompok BB pasien"
        ];
      }

      return (tpl.items || []).map(item => {
        const parts = [item.obat, item.jumlah, item.dosis, item.frekuensi].filter(Boolean);
        return parts.join(" • ");
      });
    }

    async function runAutoRecipePackageComplaint(complaintKey, branchType) {
      const ageYears = getPatientAgeYears();
      const ageDisplay = getPatientAgeDisplay();
      const ageMonths = getPatientAgeMonths();

      if (branchType === "adult") {
        await runComplaintRecipe(complaintKey, null, {
          forceAdult: true,
          age: ageYears,
          ageYears,
          ageDisplay,
          ageMonths
        });
        return;
      }

      const rawWeight = window.prompt(
        `MASTER TEMPLATE RESEP • ${COMPLAINT_RECIPE_MAP[complaintKey]?.label || complaintKey}\n\nMasukkan BB pasien (kg):`,
        ""
      );
      if (rawWeight === null) return;

      await runComplaintRecipe(complaintKey, rawWeight, {
        age: ageYears,
        ageYears,
        ageDisplay,
        ageMonths
      });
    }

    function renderAdultRecipeMenu() {
      menu.classList.remove("sp-package-modal");
      const entries = Object.entries(COMPLAINT_RECIPE_MAP);

      menu.innerHTML = `
        <div class="sp-title">🧑 RESEP DEWASA</div>
        <div class="sp-note">Pilihan di bawah membaca langsung MASTER TEMPLATE yang sama dengan 📦 KOMBINASI RESEP. Tidak perlu memasukkan BB.</div>

        ${entries.map(([key, item]) => {
          const details = getAutoRecipePackageDetails(key, "adult");
          return `
            <button type="button" data-auto-package-complaint="${key}" data-auto-package-branch="adult">
              ${item.label} ▶
            </button>
            <div class="sp-note" style="margin-top:-2px;margin-bottom:6px;">
              ${details.length ? details.map(d => `• ${d}`).join("<br>") : "• Paket dewasa sesuai template"}
            </div>
          `;
        }).join("")}

        <button type="button" class="sp-back" data-back="recipe">
          ← Kembali ke MASTER TEMPLATE RESEP
        </button>
      `;
    }

    function renderChildRecipeMenu() {
      menu.classList.remove("sp-package-modal");
      const entries = Object.entries(COMPLAINT_RECIPE_MAP);
      const ageDisplay = getPatientAgeDisplay();

      menu.innerHTML = `
        <div class="sp-title">👶 RESEP ANAK</div>
        <div class="sp-age-box">Umur dari identitas: ${ageDisplay ? `<b>${ageDisplay}</b>` : "belum terbaca"}</div>
        <div class="sp-note">Pilihan di bawah membaca langsung MASTER TEMPLATE yang sama dengan 📦 KOMBINASI RESEP. Pilih keluhan, lalu masukkan BB pasien untuk menentukan dosis/kelompok BB.</div>

        ${entries.map(([key, item]) => {
          const details = getAutoRecipePackageDetails(key, "child");
          return `
            <button type="button" data-auto-package-complaint="${key}" data-auto-package-branch="child">
              ${item.label} ▶
            </button>
            <div class="sp-note" style="margin-top:-2px;margin-bottom:6px;">
              ${details.length ? details.map(d => `• ${d}`).join("<br>") : "• Paket anak sesuai template"}
            </div>
          `;
        }).join("")}

        <button type="button" class="sp-back" data-back="recipe">
          ← Kembali ke MASTER TEMPLATE RESEP
        </button>
      `;
    }

    function renderComplaintMenu() {
      menu.classList.remove("sp-package-modal");
      menu.innerHTML = `
        <div class="sp-title">⚡ MASTER TEMPLATE RESEP – BERDASARKAN KELUHAN</div>
        <div class="sp-note">Masukkan BB sekali, lalu pilih keluhan. &gt;40 kg = Dewasa; &lt;40 kg = Anak. BB 40 kg dipilih manual.</div>

        <div style="margin:8px 4px 10px;display:flex;align-items:center;gap:8px;">
          <label style="font-weight:700;min-width:78px;">BB (kg)</label>
          <input id="sp-complaint-weight" type="number" inputmode="decimal" step="0.1" min="0.1" placeholder="contoh 15" style="flex:1;padding:9px;border:1px solid #ccc;border-radius:6px;font-size:14px;">
        </div>

        ${Object.entries(COMPLAINT_RECIPE_MAP).map(([key, item]) => `
          <button type="button" data-complaint="${key}">${item.label}</button>
        `).join("")}

        <button type="button" class="sp-back" data-back="recipe">
          ← Kembali ke MASTER TEMPLATE RESEP
        </button>

        <div class="sp-note">
          Sistem membaca langsung MASTER TEMPLATE RESEP yang sama dengan 📦 KOMBINASI RESEP. Untuk resep anak, BB harus berada dalam kelompok dosis yang memang tersedia; sistem tidak akan mengekstrapolasi dosis ke kelompok BB yang belum dibuat.
        </div>
      `;
    }

    function renderRecipeMenu() {
      menu.classList.remove("sp-package-modal");
      menu.innerHTML = `
        <div class="sp-title">💊 MASTER TEMPLATE RESEP</div>
        <div class="sp-note">Pilih jenis master template resep dari MASTER TEMPLATE:</div>

        <button type="button" data-recipe-category="adult">
          🧑 Resep Dewasa ▶
        </button>

        <button type="button" data-recipe-category="child">
          👶 Resep Anak ▶
        </button>

        <button type="button" data-action-menu="TINDAKAN">
          🩺 Resep Tindakan ▶
        </button>

        <button type="button" class="sp-back" data-back="main">
          ← Kembali
        </button>

        <div class="sp-note">
          Resep Dewasa: resep tablet/sirup dewasa yang sudah tersedia.
          Resep Anak: Bapil Anak, BI Anak, GEA Anak, Demam Anak, dan Muntah Anak.
          Resep Tindakan: seluruh template tindakan yang sudah tersedia.
          Semua resep tetap masuk sebagai draft dan dokter melakukan review serta Save/Submit manual.
        </div>
      `;
    }

    function renderRacikanMenu() {
      menu.classList.remove("sp-package-modal");
      menu.innerHTML = `
        <div class="sp-title">🧪 MASTER TEMPLATE RESEP – RACIKAN</div>
        <div class="sp-note">Pilih jenis racikan:</div>

        <button type="button" data-racikan-menu="BAPIL_ANAK">
          👶 Bapil Anak ▶
        </button>

        <button type="button" data-racikan-menu="NYERI_ULU_HATI_ANAK">
          🔥 Nyeri Ulu Hati Anak ▶
        </button>

        <button type="button" class="sp-back" data-back="recipe">
          ← Kembali ke MASTER TEMPLATE RESEP
        </button>

        <div class="sp-note">
          Pilih kelompok BB untuk menentukan jumlah tablet bahan racikan.
          Bapil: setiap kenaikan 5 kg menambah 1 tablet tiap bahan.
          Nyeri Ulu Hati Anak: ranitidin 150 mg, setiap kenaikan 5 kg menambah 1 tablet.
        </div>
      `;
    }

    function renderRacikanWeightMenu(racikanKey) {
      const tpl = MASTER_RACIKAN_TEMPLATES[racikanKey];
      if (!tpl?.weightGroups) {
        renderRacikanMenu();
        return;
      }

      menu.innerHTML = `
        <div class="sp-title">👶 ${tpl.name}</div>
        <div class="sp-note">Pilih kelompok berat badan anak:</div>

        ${Object.entries(tpl.weightGroups).map(([key, item]) => `
          <button type="button" data-racikan-weight="${key}" data-racikan-parent="${racikanKey}">
            ${item.label} → ${item.items[0].jumlahPerObat} tab/bahan
          </button>
        `).join("")}

        <button type="button" class="sp-back" data-back="racikan">
          ← Kembali ke Racikan
        </button>
      `;
    }

    function renderWeightMenu(recipeKey) {
      const tpl = MASTER_RECIPE_TEMPLATES[recipeKey];
      if (!tpl?.weightGroups) {
        renderRecipeMenu();
        return;
      }

      menu.innerHTML = `
        <div class="sp-title">💊 ${tpl.name}</div>
        <div class="sp-note">Pilih kelompok berat badan:</div>

        ${recipeWeightMenuHtml(recipeKey)}

        <button type="button" class="sp-back" data-back="recipe">
          ← Kembali ke MASTER TEMPLATE RESEP
        </button>

        <div class="sp-note">
          Setelah BB dipilih, resep akan dimasukkan berurutan ke draft Resep Online.
          Dokter tetap melakukan review dan Save/Submit manual.
        </div>
      `;
    }

    function renderActionMenu() {
      menu.classList.remove("sp-package-modal");
      const children = MASTER_RECIPE_TEMPLATES.TINDAKAN.children;

      menu.innerHTML = `
        <div class="sp-title">🩺 MASTER TEMPLATE RESEP – TINDAKAN</div>
        <div class="sp-note">Pilih tindakan yang akan dimasukkan ke draft resep:</div>

        ${Object.entries(children).map(([key, item]) => `
          <button type="button" data-action-direct="${key}">
            ${item.name}
          </button>
        `).join("")}

        <button type="button" class="sp-back" data-back="recipe">
          ← Kembali ke MASTER TEMPLATE RESEP
        </button>

        <div class="sp-note">
          Setiap tindakan dimasukkan satu per satu ke draft.
          Save/Submit tetap manual.
        </div>
      `;
    }

    if (view === "disease") renderDiseaseMenu();
    else if (view === "package") renderPackageRecipeMenu();
    else if (view === "recipe") renderRecipeMenu();
    else if (view === "complaint") renderComplaintMenu();
    else renderMain();

    menu.addEventListener("click", async (e) => {
      const target = e.target?.closest?.("button");
      if (!target) return;

      const key = target.dataset?.template;
      const directRecipe = target.dataset?.recipeDirect;
      const childMenu = target.dataset?.recipeMenu;
      const weightKey = target.dataset?.weight;
      const parentRecipe = target.dataset?.parentRecipe;
      const actionMenu = target.dataset?.actionMenu;
      const actionDirect = target.dataset?.actionDirect;
      const autoLab = target.dataset?.autoLab;
      const autoSoap = target.dataset?.autoSoap;
      const diseaseMenu = target.dataset?.diseaseMenu;
      const autoRecipeMenu = target.dataset?.autoResepMenu;
      const cpptMenu = target.dataset?.cpptMenu;
      const cpptNormal = target.dataset?.cpptNormal;
      const cpptPulang = target.dataset?.cpptPulang;
      const packageMenu = target.dataset?.packageMenu;
      const packageSubmit = target.dataset?.packageSubmit;
      const complaintMenu = target.dataset?.complaintMenu;
      const complaint = target.dataset?.complaint;
      const racikanMenu = target.dataset?.racikanMenu;
      const racikanDirect = target.dataset?.racikanDirect;
      const racikanWeight = target.dataset?.racikanWeight;
      const racikanParent = target.dataset?.racikanParent;
      const autoPackageComplaint = target.dataset?.autoPackageComplaint;
      const autoPackageBranch = target.dataset?.autoPackageBranch;
      const back = target.dataset?.back;

      if (back === "main") {
        renderMain();
        return;
      }

      if (back === "recipe") {
        renderRecipeMenu();
        return;
      }

      if (back === "racikan") {
        renderRacikanMenu();
        return;
      }

      if (back === "complaint") {
        renderComplaintMenu();
        return;
      }

      if (diseaseMenu === "1") {
        renderDiseaseMenu();
        return;
      }

      if (packageMenu === "1") {
        renderPackageRecipeMenu();
        return;
      }

      if (autoRecipeMenu === "1") {
        renderRecipeMenu();
        return;
      }

      if (cpptMenu === "1") {
        renderCpptMenu();
        return;
      }

      if (cpptNormal === "1") {
        await runCpptNormalRawatInap();
        return;
      }

      if (cpptPulang === "1") {
        await runCpptRencanaPulang();
        return;
      }

      if (packageSubmit === "1") {
        await runPackageRecipe();
        return;
      }

      if (complaintMenu === "1") {
        renderComplaintMenu();
        return;
      }

      if (complaint) {
        const weightInput = menu.querySelector("#sp-complaint-weight");
        const rawWeight = weightInput?.value || "";
        await runComplaintRecipe(complaint, rawWeight);
        return;
      }

      if (autoPackageComplaint && autoPackageBranch) {
        await runAutoRecipePackageComplaint(autoPackageComplaint, autoPackageBranch);
        return;
      }

      const recipeCategory = target.dataset?.recipeCategory;
      if (recipeCategory === "adult") {
        renderAdultRecipeMenu();
        return;
      }

      if (recipeCategory === "child") {
        renderChildRecipeMenu();
        return;
      }

      if (racikanMenu === "1") {
        renderRacikanMenu();
        return;
      }

      if (racikanMenu === "BAPIL_ANAK") {
        renderRacikanWeightMenu("BAPIL_ANAK");
        return;
      }

      if (racikanMenu === "NYERI_ULU_HATI_ANAK") {
        renderRacikanWeightMenu("NYERI_ULU_HATI_ANAK");
        return;
      }

      if (racikanDirect) {
        closeMenu();
        await fillRacikanTemplate(racikanDirect);
        return;
      }

      if (racikanWeight && racikanParent) {
        closeMenu();
        await fillRacikanTemplate(racikanParent, racikanWeight);
        return;
      }

      if (key) {
        closeMenu();
        await fillTemplate(key);
        return;
      }

      if (directRecipe) {
        closeMenu();
        await fillRecipeTemplate(directRecipe);
        return;
      }

      if (childMenu) {
        renderWeightMenu(childMenu);
        return;
      }

      if (actionMenu === "TINDAKAN") {
        renderActionMenu();
        return;
      }

      if (actionDirect) {
        closeMenu();
        await fillActionRecipe(actionDirect);
        return;
      }

      if (target.dataset?.autoRad === "THORAX") {
        closeMenu();
        await runAutoRoThorax();
        return;
      }

      if (autoLab === "FEBRIS") {
        closeMenu();
        await runAutoLabFebris();
        return;
      }

      if (autoSoap === "1") {
        closeMenu();
        await runAutoSoap();
        return;
      }

      if (weightKey && parentRecipe) {
        closeMenu();
        await fillRecipeTemplate(parentRecipe, weightKey);
      }
    });

    document.documentElement.appendChild(menu);
  }

  function ensureButton() {
    ensureStyle();
    if (document.getElementById(BUTTON_ID)) return;

    const btn = document.createElement("button");
    btn.id = BUTTON_ID;
    btn.type = "button";
    btn.textContent = "AUTO ASM";

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openMenu();
    }, true);

    const host = document.body || document.documentElement;
    host.appendChild(btn);
  }

  // =========================
  // AUTO ASGADAR OPEN + ADD
  // =========================
  // Mekanisme dibuat SAMA seperti AUTO LAB:
  // 1) klik menu "Assesment GADAR" (ejaan mengikuti tombol Smartplus)
  // 2) tunggu halaman Assessment GADAR tampil
  // 3) klik tombol "+ TAMBAH"
  // 4) tunggu modal/form Assessment Gawat Darurat benar-benar terbuka
  async function waitForAssessmentGadarModal(timeout = 8000, interval = 100) {
    return new Promise((resolve) => {
      const started = Date.now();
      const tick = () => {
        const candidates = [
          ...document.querySelectorAll('.modal, .modal-dialog, [role="dialog"]')
        ].filter(visible);

        const hit = candidates
          .sort((a, b) =>
            b.getBoundingClientRect().width * b.getBoundingClientRect().height -
            a.getBoundingClientRect().width * a.getBoundingClientRect().height
          )
          .find((el) => {
            const t = norm(el.innerText || el.textContent || '');
            return /assessment\s+gawat\s+darurat/.test(t) ||
              (/triage/.test(t) && /kategori/.test(t)) ||
              (/cara\s+datang/.test(t) && /kesadaran/.test(t));
          });

        if (hit) return resolve(hit);
        if (Date.now() - started >= timeout) return resolve(null);
        setTimeout(tick, interval);
      };
      tick();
    });
  }

  async function openAssessmentGadarForTemplate() {
    toast('AUTO ASGADAR: membuka Assesment GADAR...');

    // Sama seperti AUTO LAB -> clickVisibleText(["Order Lab"]).
    // Ejaan tombol pada Smartplus screenshot: "Assesment GADAR".
    if (!clickVisibleText(["Assesment GADAR", "Assessment GADAR"])) {
      toast('AUTO ASGADAR: tombol Assesment GADAR tidak ditemukan.');
      return false;
    }

    // Beri waktu halaman berpindah/dirender.
    await recipeSleep(700);

    // Pada halaman Assessment GADAR, tombol yang dibutuhkan adalah + TAMBAH.
    if (!clickVisibleText(["+ TAMBAH", "TAMBAH"])) {
      toast('AUTO ASGADAR: tombol + TAMBAH tidak ditemukan.');
      return false;
    }

    // Tunggu form/modal Assessment Gawat Darurat benar-benar muncul.
    const root = await waitForAssessmentGadarModal(8000, 100);
    if (!root) {
      toast('AUTO ASGADAR: form Assessment Gawat Darurat belum muncul.');
      return false;
    }

    await recipeSleep(300);
    return true;
  }

  async function fillTemplate(key) {
    const data = TEMPLATES[key];
    if (!data) return;

    // Template penyakit sekarang otomatis membuka Assessment GADAR + + TAMBAH.
    const opened = await openAssessmentGadarForTemplate();
    if (!opened) return;

    const root = modalRoot();

    if (!root || root === document.body) {
      toast("Buka formulir Assesment Gawat Darurat terlebih dahulu.");
      return;
    }

    const randomNadi = getRandomNadi(data.vital);
    const patientAgeYears = getPatientAgeYears();
    const isPediatricUnder14 = patientAgeYears !== null && patientAgeYears < 14;
    const randomTD = getRandomTD(data.vital);
    const randomRR =
      key === "BP"
        ? getRandomBPRespiratory()
        : key === "FEBRIS_VI_BI"
          ? getRandomFebrisRR()
          : key === "NORMAL" || key === "KEJANG_DEMAM_ANAK" || key === "LBP"
            ? getRandomNormalRR(data.vital)
            : data.vital.rr;
    const randomSpO2 =
      key === "BP"
        ? getRandomBPSpO2()
        : key === "NORMAL" || key === "KEJANG_DEMAM_ANAK" || key === "LBP"
          ? getRandomNormalSpO2(data.vital)
          : data.vital.spo2;

    toast("AUTO ASM: mengisi template...");

    let ok = 0;
    const fail = [];

    function doSet(name, fn) {
      try {
        if (fn()) ok++;
        else fail.push(name);
      } catch (e) {
        console.error("[AUTO ASM]", name, e);
        fail.push(name);
      }
    }

    doSet(
      key === "PENURUNAN_KESADARAN" ? "Kategori 1" : "Kategori III",
      () => clickInSection(
        root,
        ["Kategori", "TRIAGE"],
        key === "PENURUNAN_KESADARAN" ? ["1", "I"] : ["III"]
      )
    );

    doSet("True Emergency", () =>
      clickInSection(root, ["Kegawatdaruratan", "TRIAGE"], ["True Emergency"])
    );

    doSet("Non Trauma", () =>
      clickInSection(root, ["Jenis Kasus", "TRIAGE"], ["Non Trauma"])
    );

    doSet("Cara Datang Sendiri", () =>
      clickInSection(root, ["Cara Datang"], ["Sendiri"])
    );

    doSet("Jam Datang kosong", () => clearRequestedFields(root) >= 1);

    doSet("Keluhan Utama", () =>
      setByLabel(root, ["Keluhan Utama"], data.keluhan)
    );

    doSet(
      key === "PENURUNAN_KESADARAN" ? "Somnolen" : "Compos mentis",
      () => clickInSection(
        root,
        ["Kesadaran"],
        key === "PENURUNAN_KESADARAN"
          ? ["Somnolen"]
          : ["Compos mentis", "Compos Mentis"]
      )
    );

    doSet("Pupil Isokor", () =>
      clickInSection(root, ["Pupil"], ["Isokor"])
    );

    doSet("Diameter Pupil", () =>
      setByLabel(root, ["Diameter Pupil", "Diameter"], "3/3")
    );

    doSet("Reaksi Cahaya", () =>
      setByLabel(root, ["Reaksi Cahaya", "Refleks Cahaya"], "+/+")
    );

    // Untuk seluruh template penyakit: pasien usia <14 tahun tidak diisi TD.
    // Kolom dikosongkan agar tidak ada nilai template yang tersisa.
    doSet(
      isPediatricUnder14
        ? "Tekanan Darah dikosongkan (usia <14 th)"
        : "Tekanan Darah",
      () =>
        setByLabel(
          root,
          ["Tekanan Darah", "TD"],
          isPediatricUnder14 ? "" : randomTD,
          false
        )
    );

    doSet("Nadi", () =>
      setByLabel(root, ["Nadi"], randomNadi)
    );

    doSet("Pernafasan", () =>
      setByLabel(root, ["Pernafasan", "Pernapasan", "RR"], randomRR)
    );

    const randomTemperature =
      key === "FEBRIS_VI_BI"
        ? getRandomFebrisTemperature()
        : key === "KEJANG_DEMAM_ANAK"
          ? getRandomKejangDemamTemperature()
          : data.vital.suhu;

    doSet("Suhu", () =>
      setByLabel(root, ["Suhu"], randomTemperature)
    );

    doSet("SpO2", () =>
      setByLabel(root, ["SpO2", "SPO2", "Saturasi Oksigen"], randomSpO2)
    );

    doSet("Tinggi kosong", () =>
      setByLabel(root, ["Tinggi", "Tinggi Badan", "TB"], "", false)
    );

    doSet("Berat kosong", () =>
      setByLabel(root, ["Berat", "Berat Badan", "BB"], "", false)
    );

    const randomPainScore = getRandomPainScore();

    const targetGCS = key === "PENURUNAN_KESADARAN" ? data.gcs : "15";
    doSet(`GCS ${targetGCS}`, () => setGCS(root, targetGCS));

    // Ulangi nilai GCS setelah re-render form ASM.
    setTimeout(() => setGCS(root, targetGCS), 100);
    setTimeout(() => setGCS(root, targetGCS), 500);
    setTimeout(() => setGCS(root, targetGCS), 1000);
    doSet("Skala Nyeri VAS " + randomPainScore, () => setPain(root, randomPainScore));

    doSet("Pemeriksaan Fisik", () =>
      setByLabel(root, ["Pemeriksaan Fisik"], data.fisik)
    );

    doSet("Pemeriksaan Penunjang", () =>
      setByLabel(root, ["Pemeriksaan Penunjang"], data.penunjang)
    );

    doSet("Diagnosis", () =>
      setByLabel(
        root,
        [
          "Diagnosis Kerja dan Diagnosa Banding",
          "Diagnosis Kerja",
          "Diagnosa Kerja",
          "Diagnosis",
          "Diagnosa"
        ],
        data.diagnosis
      )
    );

    doSet("Rencana Terapi", () =>
      setByLabel(
        root,
        ["Rencana (Tindakan, Terapi, dll)", "Rencana Tindakan", "Rencana"],
        data.terapi
      )
    );

    doSet("Masalah Kesehatan", () =>
      setByLabel(root, ["Masalah Kesehatan"], data.masalahKesehatan)
    );

    doSet("Masalah Keperawatan", () =>
      setByLabel(root, ["Masalah Keperawatan"], data.masalahKeperawatan)
    );

    doSet("Rencana Keperawatan", () =>
      setByLabel(
        root,
        ["Rencana Keperawatan / Target Ukur", "Rencana Keperawatan"],
        data.rencanaKeperawatan
      )
    );

    doSet("Edukasi Keluarga", () =>
      setByLabel(root, ["Edukasi Keluarga", "Edukasi"], data.edukasi)
    );

    doSet("Discharge Planning", () =>
      clickInSection(
        root,
        ["Perencanaan Pasien Pulang", "Discharge Planning"],
        [data.discharge]
      )
    );

    doSet("Prioritas Kuratif", () =>
      clickInSection(root, ["Prioritas Perawatan"], ["Kuratif"])
    );

    doSet("Kondisi Waktu Keluar", () =>
      clickInSection(root, ["Kondisi Waktu Keluar"], [data.kondisiKeluar])
    );

    doSet("Tindak Lanjut", () => {
      if (data.kondisiKeluar === "Pindah/Rujuk") {
        const r = clickInSection(
          root,
          ["Tindak Lanjut"],
          ["Rawat, indikasi", "Rawat"]
        );

        setByLabel(root, ["Indikasi"], data.tindakLanjut, false);

        return r ||
          setByLabel(root, ["Tindak Lanjut"], data.tindakLanjut, false);
      }

      const r = clickInSection(
        root,
        ["Tindak Lanjut"],
        ["Kontrol Rawat Jalan"]
      );

      return r ||
        setByLabel(root, ["Tindak Lanjut"], data.tindakLanjut, false);
    });

    setTimeout(() => {
      setByLabel(root, ["Jam Datang"], "", false);
      setByLabel(root, ["Tinggi", "Tinggi Badan", "TB"], "", false);
      setByLabel(root, ["Berat", "Berat Badan", "BB"], "", false);

      setGCS(root, targetGCS);
      setTimeout(() => setGCS(root, targetGCS), 150);
      setTimeout(() => setGCS(root, targetGCS), 600);
      setByLabel(root, ["Nadi"], randomNadi, false);

      if (key === "BP" || key === "NORMAL" || key === "KEJANG_DEMAM_ANAK") {
        setByLabel(root, ["Pernafasan", "Pernapasan", "RR"], randomRR, false);
        setByLabel(root, ["SpO2", "SPO2", "Saturasi Oksigen"], randomSpO2, false);
      }

      const message = fail.length
        ? `AUTO ASM selesai. TD ${isPediatricUnder14 ? "(kosong)" : randomTD}, Nadi ${randomNadi}. Perlu cek manual: ${fail.join(", ")}`
        : `AUTO ASM ${key} selesai. TD ${randomTD}, GCS ${targetGCS}, nyeri ${data.nyeri}, nadi ${randomNadi}. Review lalu Save.`;

      toast(message);

      console.group("[SMARTPLUS IGD v2.39]");
      console.log("Template:", key);
      console.log("Berhasil:", ok);
      console.log("Perlu dicek:", fail);
      console.log("GCS:", data.gcs);
      console.log("Nyeri:", data.nyeri);
      console.log("Nadi:", randomNadi + " x/menit");
      console.log("RR:", randomRR + " x/menit");
      console.log("SpO2:", randomSpO2 + "%");
      console.log("Diagnosis:", data.diagnosis);
      console.log("Jam Datang/Tinggi/Berat: dikosongkan");
      console.groupEnd();
    }, 800);
  }

  // =========================================================
  // CHROME + FIREFOX + VIOLENTMONKEY COMPATIBILITY BOOTSTRAP
  // =========================================================
  // Chrome/Firefox dapat memulihkan halaman dari BFCache atau
  // Smartplus dapat mengganti <body> saat SPA/rerender.
  // Bootstrap ini memastikan tombol AUTO ASM selalu dipasang.
  let spAutoAsmBooting = false;
  function safeEnsureButton() {
    try {
      if (!document.documentElement) return false;
      ensureButton();
      return !!document.getElementById(BUTTON_ID);
    } catch (err) {
      console.warn('[AUTO ASM] ensureButton retry:', err);
      return false;
    }
  }

  function bootAutoAsmCrossBrowser() {
    if (spAutoAsmBooting) return;
    spAutoAsmBooting = true;
    try {
      safeEnsureButton();
      setTimeout(safeEnsureButton, 0);
      setTimeout(safeEnsureButton, 300);
      setTimeout(safeEnsureButton, 1000);
      setTimeout(safeEnsureButton, 2500);
    } finally {
      spAutoAsmBooting = false;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootAutoAsmCrossBrowser, { once: true });
  } else {
    bootAutoAsmCrossBrowser();
  }

  // Firefox Back/Forward Cache dan tab yang dipulihkan.
  window.addEventListener('pageshow', bootAutoAsmCrossBrowser, true);
  window.addEventListener('load', () => setTimeout(safeEnsureButton, 200), true);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) setTimeout(safeEnsureButton, 100);
  }, true);

  setInterval(() => {
    if (!document.getElementById(BUTTON_ID)) safeEnsureButton();
  }, 1500);

  const observer = new MutationObserver(() => {
    if (!document.getElementById(BUTTON_ID)) safeEnsureButton();
  });

  if (document.documentElement) {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.altKey && e.key.toLowerCase() === "a") {
      e.preventDefault();
      openMenu();
    }
  }, true);
})();
