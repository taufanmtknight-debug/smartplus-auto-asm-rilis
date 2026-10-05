// ==UserScript==
// @name         Smartplus ASM GADAR - Chrome + Firefox Violentmonkey Compatible v3.47.0
// @namespace    smartplus-auto-asm-v221
// @version      3.47.0
// @description  v3.47.0: RAWAT INAP + RESEP PULANG — pilih obat dari database obat pulang (73 obat dari resep poli spesialis, 💡 obat rutin pasien), preview bisa diedit (jumlah otomatis 7 hari, bisa diubah), lalu masuk ke e-resep form CPPT + centang resep pulang hari ini/besok; Simpan resep manual. v3.46.0: audit stabilitas — script tidak berjalan ganda, semua permintaan ke Smartplus diberi batas waktu (tidak macet), satu tugas otomatis pada satu waktu (cegah order/CPPT dobel), AUTO LAB menunggu daftar pemeriksaan dan tidak Save bila gagal, MULTIPLE cek dobel sebelum simpan ulang, KOMBINASI lebih cepat. v3.45.0: RAWAT INAP + MULTIPLE VISIT & MULTIPLE PULANG — cari & pilih banyak pasien dirawat, CPPT sementara tiap pasien ditampilkan dan bisa diedit, lalu 'Save multiple' menyimpan semuanya (dicek ulang di daftar CPPT). v3.44.0: RAWAT INAP tanpa tombol CPPT NORMAL; CPPT VISIT — keluhan dibuat singkat (kata keluhan + status, bukan salinan), pemeriksaan fisik = template normal dengan sedikit bagian positif dari pemeriksaan dokter sebelumnya / diagnosis. v3.43.0: KOMBINASI RESEP + Amlodipine 10 mg, Captopril 12,5 mg; tindakan baru Suntik Asam Traneksamat 500 mg iv dan Infus (RL, infus set, tegaderm, vasofix; ket. igd). v3.42.0: KOMBINASI RESEP tanpa kotak cari obat, tindakan selalu terbuka, warna kalem (tiap golongan kartu berwarna lembut dengan garis kiri, latar panel lavender) agar batas bagian jelas. v3.41.0: tampilan KOMBINASI RESEP lebih ringkas & jelas — obat berupa tombol per golongan, kotak cari obat, anamnesis ringkas, tindakan dilipat, daftar terpilih (hapus dengan ×) dan tombol ACC selalu terlihat di bawah. v3.40.0: KOMBINASI RESEP — jumlah tablet dewasa maks 6 (antibiotik 3 hari, obat DM/hipertensi 5 hari); kamus keluhan diperluas sehingga lebih banyak obat tercentang otomatis (alergi, vertigo, GERD, ulkus, ISK/tifoid, infeksi kulit, asma, LBP/nyeri otot, hipertensi, DM, perdarahan, muntah hebat, batuk kering, dll). v3.39.0: KOMBINASI RESEP + obat oral pulang IGD (dewasa: Paracetamol 500, Ibuprofen, Na diklofenak, Omeprazole, Sukralfat, Antasida suspensi, Ondansetron, Lodia, Cetirizine, Loratadine, Methylprednisolon, OBH, Cefadroxil, Cefixime, Betahistine, Flunarizine, Antimo, Amlodipine, Captopril, Metformin, Glimepiride, Asam traneksamat; anak: sirup Ibuprofen, Cetirizine 0,2 mg/kg, Ambroxol, Cefadroxil, Cefixime per BB, Interzinc, Lacto-B 3 sachet); jumlah R/ ditampilkan, penolakan Smartplus 'Jumlah R Sudah Melebihi Batas' dilaporkan gagal. v3.38.0: CPPT VISIT pemeriksaan fisik selalu template CPPT Normal (diedit dokter bila perlu); KOMBINASI RESEP tanpa kolom aturan pakai, obat dikelompokkan per golongan dalam kotak centang. v3.37.0: RAWAT INAP + CPPT VISIT (keluhan dari CPPT dokter terakhir / keluhan masuk IGD, vital & pemfis mengikuti CPPT sebelumnya atau template normal, instruksi Terapi dpjp lanjut; simpan manual); KOMBINASI RESEP memilih per NAMA OBAT dalam tabel, obat yang sesuai keluhan Assesment GADAR otomatis dicentang sebagai saran lalu ACC. v3.36.0: REVIEW GADAR — simpan lebih tahan gagal di komputer IGD (iframe di layar, cadangan simpan langsung, cek perubahan orang lain). v3.35.0: ADVIS SPESIALIS tetap tersimpan walau GADAR diubah orang lain / form tidak termuat (baca ulang GADAR terbaru, tambahan disambung di bawah, 4 percobaan termasuk simpan langsung). v3.34.0: ADVIS SPESIALIS = cari pasien lalu satu kotak berisi Rencana GADAR saat ini, tambahkan advis bebas, Simpan; tempelan chat WA dirapikan otomatis. RAWAT INAP hanya CPPT. v3.33.0: menu dirapikan — RAWAT INAP (CPPT Normal, CPPT Rencana Pulang, Paket Konsul, Advis Spesialis); label tanpa "PDF"/"dari WA"; hasil advis tanpa "via WA". v3.32.1: ADVIS — pencarian pasien lebih cepat (hasil muncul bertahap, tanpa dobel). v3.32.0: ADVIS SPESIALIS — cari & pilih pasien IGD (48 jam) dengan mengetik nama, advis disimpan ke GADAR pasien itu tanpa membuka halamannya. v3.31.0: ADVIS SPESIALIS — tempel chat advis dari WhatsApp Web, otomatis dirapikan lalu ditambahkan di paling bawah Rencana GADAR (Save manual). v3.30.1: REVIEW GADAR — catatan "Darah rutin dihapus" hanya bila memang ada. v3.30.0: REVIEW GADAR — isian otomatis di paling atas; obat suntik non-oral di luar daftar (Inj. X), nebulisasi + nama obat, lidocain/tetagam, IVFD, IV line, O2 ikut ditulis (antibiotik drip tidak). v3.29.0: REVIEW GADAR — perbaikan gagal simpan (baris baru \\r\\n), GADAR dokter lain tetap diubah, usulan bisa diedit, tindakan yang sudah tertulis ditampilkan. v3.28.1: REVIEW GADAR — "dr" (nama dokter) tidak lagi dianggap "darah rutin". v3.28.0: REVIEW GADAR 24 JAM — laporan pasien DONE dokter login (tindakan dari daftar resep tindakan + order lab/radiologi yang belum tertulis), semua dicentang, simpan massal ke Rencana & Pemeriksaan Penunjang GADAR terakhir. v3.27.0: Lab Severe tidak memesan ulang kreatinin/elektrolit/AGD yang sudah ada dalam 1 minggu lalu Save otomatis; tombol Tutup lain dihapus (pakai ✕), tombol panel dirapikan. v3.26.0: tombol kecilkan (—) & tutup (✕) di pojok kanan atas tiap kotak; AUTO PENUNJANG + Lab Severe (Kreatinin, Elektrolit, AGD; Save manual); ekspertise CT whole abdomen & echocardiography (Kesan/Kesimpulan). v3.25.0: ekspertise radiologi dianggap ada hanya bila memuat "KESAN"; KOMBINASI RESEP menampilkan anamnesis (keluhan utama, RPS, alergi) dari Assesment GADAR. v3.24.0: judul "Riwayat kontrol poli spesialis" dihapus dari Riwayat Penyakit Dahulu; ASGADAR untuk pasien belum terdaftar diisikan ke + BUAT DRAF ASSESMENT GAWAT DARURAT (daftar pasien IGD); PAKET KONSUL: film CT tidak diambil, ekspertise rontgen & CT ikut bila sudah ada. v3.23.0: tombol AUTO SOAP & AUTO SCREENSHOT dihapus dari menu (sudah tercakup PAKET KONSUL). v3.22.0: semua kotak AUTO ASM (menu, KOMBINASI RESEP, AUTO SCREENSHOT/PAKET KONSUL, salin SOAP) bisa digeser dan dikecilkan. v3.21.0: tombol 🔄 Update (SOAP disusun ulang dari GADAR + penunjang baru ditambahkan); semua AUTO kembali ke tab E-RAWAT DARURAT dulu sehingga tidak macet saat tab Riwayat/Hasil terbuka. v3.20.0: perbaikan salin SOAP (dulu 'tersalin' tapi kosong saat modal GADAR terbuka); PAKET KONSUL tidak lagi unduh PDF otomatis, SOAP berupa teks untuk Paste; gambar penunjang bisa diseret ke WhatsApp. v3.19.0: PAKET KONSUL (SOAP disalin + PDF penunjang dengan SOAP di halaman 1, sekali klik); menu AUTO PENUNJANG berisi Lab, Ro Thorax, USG, CT Brain Non Kontras (baru). v3.18.0: AUTO SCREENSHOT 'Unduh semua' = 1 file PDF; riwayat poli tanpa nama poli, terapi ditulis ke bawah. v3.17.0: riwayat poli spesialis masuk kolom Riwayat Penyakit Dahulu; AUTO SOAP menyalin RPD. v3.16.0: riwayat poli spesialis tanpa batas waktu (batas 6 bulan dihapus). v3.15.0: satu kunjungan terakhir per spesialisasi (dokter berbeda dengan spesialisasi sama -> yang terakhir). v3.14.0: semua ASGADAR (penyakit & normal) menambahkan riwayat kunjungan poli spesialis terakhir per poli (tgl, dokter, diagnosis, terapi) ke Riwayat Penyakit Sekarang. v3.13.0: AUTO PENUNJANG berganti nama AUTO SCREENSHOT; lab 1 minggu tampil lebih dulu; tiap film ditunggu maks 6 detik lalu lanjut; AUTO LAB tanpa kata Febris. v3.12.0: AUTO PENUNJANG mengambil lab 1 minggu terakhir & radiologi 1 bulan terakhir; CT/rontgen = film saja, USG = ekspertise saja. v3.11.0: AUTO PENUNJANG (gambar hasil lab + film radiologi kunjungan ini, siap dikirim untuk konsul). v3.10.0: AUTO SOAP membuka GADAR terakhir, mengisi Terapi sementara (dewasa/anak berdasarkan BB & diagnosis) di Rencana, lalu menyalin SOAP. v3.9.0: menu MASTER TEMPLATE RESEP disembunyikan (pakai KOMBINASI RESEP). v3.8.3: perbaikan BB otomatis dari GADAR di KOMBINASI RESEP. v3.8.2: BB anak hanya dari kolom Berat GADAR terakhir. v3.8.0: resep keluhan diperbarui (Mual/Muntah dewasa Domperidon saja; Demam/Nyeri/Infeksi anak sirup <=15 kg, puyer >15 kg; Paracetamol 4-6x sehari); batas BB racikan diperbaiki; BB anak otomatis dari GADAR. v3.7.0: AUTO USG Whole Abdomen; order radiologi memakai satu fungsi umum (mudah ditambah). v3.6.0: AUTO RO THORAX (order radiologi Thorax PA/AP, diagnosis dari GADAR terakhir, Save otomatis). v3.5.0: alamat server tidak lagi ditulis di script (hanya aktif di halaman SmartPlus); data pasien contoh dihapus dari komentar. v3.4.1: alamat update pindah ke repo rilis publik (repo sumber akan privat). v3.4.0: AUTO LAB mengisi diagnosis dari Assesment GADAR terakhir kunjungan ini. v3.3.0: Simpan otomatis Resep Tindakan hanya menekan tombol simpan resep (#butt_simpan_resep), tidak lagi tombol 'Simpan' sembarang. v3.2.3: resep satu keluhan tidak lagi menduplikasi obat yang sudah ada di draft. v3.2.2: CPPT memakai ID tetap Smartplus, aman saat form sudah terbuka, tidak pernah klik TAMBAH Lab/Rad. v3.2.1: CPPT memakai ID tetap Smartplus (tidak salah klik TAMBAH Lab/Rad). v3.2.0: tanda vital CPPT menyesuaikan usia (neonatus s.d. dewasa), TD tidak diisi untuk bayi/anak. v3.1.2: perbaikan klik tab E-RANAP (bukan breadcrumb) dan klik elemen terdalam. v3.1.1: CPPT lebih stabil (klik teks tepat, tidak salah klik, tunggu form baru, anti dobel-klik). v3.1: sebelum membuka CPPT otomatis klik E-Ranap terlebih dahulu agar pilihan CPPT muncul; tersedia CPPT Normal dan CPPT Rencana Pulang.

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
  // v3.11.0: mode khusus di jendela viewer PACS yang dibuka AUTO PENUNJANG (lihat runOrthancCapture).
  if (/^spcap\|/.test(window.name || "") && /osimis-viewer|\/app\//i.test(location.pathname)) {
    runOrthancCapture();
    return;
  }
  if (!isSmartplusPage()) return;

  // v3.46.0 (audit): cegah script berjalan DUA KALI di halaman yang sama (mis. dua salinan terpasang di Violentmonkey)
  // — dulu semua tombol/shortcut/simpan otomatis bisa terpicu ganda.
  if (window.__SP_AUTO_ASM_LOADED__) {
    console.warn("[AUTO ASM] script sudah berjalan di halaman ini (versi " + window.__SP_AUTO_ASM_LOADED__ + "); salinan kedua dihentikan.");
    return;
  }
  window.__SP_AUTO_ASM_LOADED__ = "3.47.0";

  // v3.46.0 (audit): semua permintaan ke Smartplus diberi batas waktu. Dulu fetch tanpa batas -> bila server lambat/
  // tidak menjawab, fitur macet selamanya dan penanda "sedang berjalan" tidak pernah lepas sampai halaman dimuat ulang.
  // Timer tidak dihentikan setelah jawaban datang supaya pembacaan isi (r.text()/r.json()) juga ikut dibatasi.
  function spFetch(url, opts = {}, ms = 30000) {
    const ctrl = typeof AbortController === "function" ? new AbortController() : null;
    if (ctrl) setTimeout(() => ctrl.abort(), ms);
    return fetch(url, ctrl ? Object.assign({}, opts, { signal: ctrl.signal }) : opts).catch((err) => {
      if (err && err.name === "AbortError") throw new Error(`Smartplus tidak menjawab dalam ${Math.round(ms / 1000)} detik`);
      throw err;
    });
  }

  // v3.46.0 (audit): satu tugas otomatis pada satu waktu. Dulu AUTO LAB / order radiologi / tindakan / KOMBINASI / CPPT
  // bisa dijalankan lagi saat proses sebelumnya belum selesai (buka menu lagi) -> order tersimpan dua kali atau dua
  // proses mengetik di form yang sama. Kunci dianggap basi setelah 4 menit (pengaman bila sesuatu macet).
  let spTask = null;
  async function spExclusive(label, fn) {
    if (spTask && Date.now() - spTask.at < 240000) {
      toast(`⏳ ${spTask.label} masih berjalan — tunggu sampai selesai.`);
      return undefined;
    }
    const me = { label, at: Date.now() };
    spTask = me;
    try {
      return await fn();
    } catch (err) {
      console.error(`[AUTO ASM] ${label} error:`, err);
      toast(`${label} gagal: ${err && err.message ? err.message : err}`);
      return undefined;
    } finally {
      if (spTask === me) spTask = null;
    }
  }

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
        { obat: "SANMOL FORTE TABLET 650MG*", jumlah: "10", dosis: "650 mg", frekuensi: "4–6x1", waktu: "", keterangan: "" },
        { obat: "DOMPERIDON 10MG TAB", jumlah: "6", dosis: "10 mg", frekuensi: "3x1", waktu: "", keterangan: "" }
      ]
    },

    ISPA_DEWASA: {
      name: "ISPA Dewasa",
      items: [
        { obat: "AMOXICILLIN 500MG TABLET", jumlah: "10", dosis: "500 mg", frekuensi: "3x1", waktu: "", keterangan: "" },
        { obat: "SANMOL FORTE TABLET 650MG*", jumlah: "10", dosis: "650 mg", frekuensi: "4–6x1", waktu: "", keterangan: "" },
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
        { obat: "SANMOL FORTE TABLET 650MG*", jumlah: "10", dosis: "650 mg", frekuensi: "4–6x1", waktu: "", keterangan: "" }
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

        // v3.43.0 (instruksi dokter 5 Okt 2026): suntik asam traneksamat 500 mg iv; ampul 5 ml -> spuit 5 cc.
        SUNTIK_TXA: {
          name: "Suntik Asam Traneksamat",
          items: [
            { obat: "ASAM TRANEKSAMAT 500 MG INJ", jumlah: "1", dosis: "1 amp", frekuensi: "", waktu: "", keterangan: "igd" },
            { obat: "SPUIT 5 CC WIN*", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "igd" }
          ]
        },

        // v3.43.0 (instruksi dokter 5 Okt 2026): paket infus sesuai contoh resep IGD dokter.
        // Nama infus set di master memakai DUA spasi ("INFUS SET  DEWASA WIN*").
        INFUS: {
          name: "Infus",
          items: [
            { obat: "INFUS RL SANBE DP", jumlah: "2", dosis: "", frekuensi: "", waktu: "", keterangan: "igd" },
            { obat: "INFUS SET  DEWASA WIN*", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "igd" },
            { obat: "TEGADERM I.V DWS 1623W 6CM X 7CM", jumlah: "1", dosis: "", frekuensi: "", waktu: "", keterangan: "igd" },
            { obat: "VASOFIX SAFETY NO 22", jumlah: "2", dosis: "", frekuensi: "", waktu: "", keterangan: "igd" }
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
    // v3.8.0: Omeprazole dihapus atas instruksi dokter.
    { obat: "DOMPERIDON 10MG TAB", jumlah: "6", dosis: "10 mg", frekuensi: "3x1", waktu: "", keterangan: "" }
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
  // =========================
  // v3.8.0: RESEP ANAK DENGAN PEMBAGIAN BB (disetujui dokter, 2 Okt 2026)
  // BB <= 15 kg -> sirup (kelompok BB lama s.d. 15 kg)
  // BB  > 15 kg -> puyer 10 bungkus, 1 tab per 5 kg BB (15–20 = 4 … 45–50 = 10)
  // Paracetamol: 4-6x sehari. Amoxicillin: 3x sehari.
  // =========================
  const ANAK_SIRUP_MAX_KG = 15;

  function sirupGroupsUpTo15(sourceGroups, drugRegex) {
    return Object.fromEntries(
      Object.entries(sourceGroups)
        .filter(([key, group]) => {
          const m = String(group.label || "").match(/BB\s*([0-9]+(?:[.,][0-9]+)?)\s*[–-]\s*([0-9]+(?:[.,][0-9]+)?)/i);
          return m && Number(m[2].replace(",", ".")) <= ANAK_SIRUP_MAX_KG;
        })
        .map(([key, group]) => [key, {
          label: group.label,
          items: group.items.filter((item) => drugRegex.test(item.obat)).map((item) => ({ ...item }))
        }])
    );
  }

  function puyerGroupsOver15({ name, namaRacikan, obat, frekuensi }) {
    // i = 3..9 -> 15–20 (4 tab) … 45–50 (10 tab)
    return Object.fromEntries(
      Array.from({ length: 7 }, (_, n) => {
        const i = n + 3;
        const min = i * 5;
        const max = (i + 1) * 5;
        return [`${min}_${max}`, {
          label: `BB ${min}–${max} kg`,
          name: `${name} ${min}–${max} kg`,
          namaRacikan,
          instruksi: "Pulveres",
          jumlahRacikan: "10",
          dosis: "1 pulv",
          frekuensi,
          waktu: "",
          items: [{ obat, jumlahPerObat: String(i + 1) }]
        }];
      })
    );
  }

  MASTER_RECIPE_TEMPLATES.PCT_SIRUP_ANAK_LE15 = {
    name: "Paracetamol Sirup Anak (BB ≤15 kg)",
    weightGroups: sirupGroupsUpTo15(MASTER_RECIPE_TEMPLATES.BI_ANAK.weightGroups, /PARACETAMOL 60 CC GEN/i)
  };
  MASTER_RECIPE_TEMPLATES.AMOX_SIRUP_ANAK_LE15 = {
    name: "Amoxicillin Sirup Anak (BB ≤15 kg)",
    weightGroups: sirupGroupsUpTo15(MASTER_RECIPE_TEMPLATES.BI_ANAK.weightGroups, /AMOXYCILLIN/i)
  };
  MASTER_RACIKAN_TEMPLATES.PCT_PUYER_ANAK = {
    name: "Puyer Paracetamol Anak",
    weightGroups: puyerGroupsOver15({ name: "Puyer Paracetamol", namaRacikan: "puyer paracetamol", obat: "PARACETAMOL 500 MG TAB", frekuensi: "4-6 X SEHARI" })
  };
  MASTER_RACIKAN_TEMPLATES.AMOX_PUYER_ANAK = {
    name: "Puyer Amoxicillin Anak",
    weightGroups: puyerGroupsOver15({ name: "Puyer Amoxicillin", namaRacikan: "puyer amoxicillin", obat: "AMOXICILLIN 500MG TABLET", frekuensi: "3 X SEHARI" })
  };

  const COMPLAINT_RECIPE_MAP = {
    DEMAM: {
      label: "🌡️ Demam",
      adult: { kind: "dynamic", sourceKey: "ISPA_DEWASA", drug: "SANMOL FORTE TABLET 650MG*", key: "KELUHAN_DEMAM_DEWASA" },
      child: { kind: "bbSplit", maxSirupKg: 15, sirup: { kind: "recipe", key: "PCT_SIRUP_ANAK_LE15" }, puyer: { kind: "racikan", key: "PCT_PUYER_ANAK" } }
    },
    NYERI: {
      label: "🤕 Nyeri",
      adult: { kind: "recipe", key: "KELUHAN_NYERI_DEWASA" },
      child: { kind: "bbSplit", maxSirupKg: 15, sirup: { kind: "recipe", key: "PCT_SIRUP_ANAK_LE15" }, puyer: { kind: "racikan", key: "PCT_PUYER_ANAK" } }
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
      child: { kind: "bbSplit", maxSirupKg: 15, sirup: { kind: "recipe", key: "AMOX_SIRUP_ANAK_LE15" }, puyer: { kind: "racikan", key: "AMOX_PUYER_ANAK" } }
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

      // v3.8.0: opsi racikan sekarang benar-benar dipakai (sebelumnya diabaikan).
      // Racikan: batas atas ikut kelompok tsb (BB 10 -> 5–10, BB 20 -> 15–20), sesuai komentar di atas.
      // Sirup/non-racikan: perilaku lama tidak berubah.
      if (options.lowerBoundaryForRacikan) {
        const isFirst = i === 0;
        if ((weight > min || (isFirst && weight >= min)) && weight <= max) return key;
        continue;
      }
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
    let branch = isAdultByWeight ? complaint.adult : complaint.child;
    // v3.8.0: cabang anak yang dibagi berdasarkan BB (sirup <=15 kg, puyer >15 kg).
    if (branch && branch.kind === "bbSplit") {
      branch = weight <= (branch.maxSirupKg || 15) ? branch.sirup : branch.puyer;
    }
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

    const res = await runRecipePlan(regularItems, racikanJobs, { ...options, seenSet });
    const { success, skipped, errors } = res;

    const totalProblems = errors.length + skippedComplaints.length;
    if (totalProblems) {
      toast(`KOMBINASI RESEP: ${success} obat berhasil masuk, ${skipped} duplikat dilewati, ${skippedComplaints.length} keluhan dilewati, ${errors.length} obat/tindakan gagal. Keluhan lain tetap diproses.`);
      console.warn("[KOMBINASI RESEP] Keluhan yang dilewati:", skippedComplaints);
    } else {
      toast(`KOMBINASI RESEP: ${success} obat berhasil masuk, ${skipped} duplikat dilewati. Tetap sebagai draft.`);
    }

    return { details, seenSet, success, skipped, errors, skippedComplaints };
  }

  // v3.37.0: mesin input bersama (dipisah dari runCombinedComplaintRecipes, isi tidak berubah):
  // obat non-racikan (dedup terhadap draft) lalu racikan, ke Resep Online sebagai draft. Tidak menekan Simpan.
  async function runRecipePlan(regularItems, racikanJobs, options = {}) {
    const seenSet = options.seenSet || getExistingRecipeDrugSet();
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

    return { seenSet, success, skipped: plan.skipped.length, skippedItems: plan.skipped, errors };
  }

  // =========================
  // v3.37.0: KOMBINASI RESEP PER OBAT (instruksi dokter 5 Okt 2026)
  // Pilihan = nama obat (bukan keluhan). Dosis/jumlah TIDAK baru: diambil dari template yang sama dengan resep keluhan.
  // `why` = keluhan yang menyarankan obat ini (dibaca dari Assesment GADAR, lihat spSuggestComplaints).
  // =========================
  // v3.40.0: `why` = keluhan (SP_COMPLAINT_KEYWORDS) yang menyarankan obat; `notWith` = jangan disarankan bila obat lain
  // itu juga disarankan (hindari dobel golongan); `cls` = aturan jumlah tablet dewasa (abx / chronic, lihat spAdultQty).
  const DRUG_OPTIONS = {
    adult: [
      { key: "PCT", group: "Demam & Nyeri", label: "Paracetamol (Sanmol Forte 650 mg)", why: ["DEMAM"], src: { kind: "item", tpl: "ISPA_DEWASA", obat: "SANMOL FORTE TABLET 650MG*" } },
      { key: "KETOROLAC", group: "Demam & Nyeri", label: "Ketorolac tablet", why: ["NYERI"], notWith: ["DIKLOFENAK"], src: { kind: "recipe", key: "KELUHAN_NYERI_DEWASA" } },
      { key: "DOMPERIDON", group: "Saluran cerna", label: "Domperidon 10 mg", why: ["MUAL_MUNTAH"], notWith: ["ONDANSETRON"], src: { kind: "recipe", key: "KELUHAN_MUAL_MUNTAH_DEWASA" } },
      { key: "AMBROXOL", group: "Batuk, pilek & alergi", label: "Ambroxol 30 mg", why: ["BATUK_PILEK"], notWith: ["OBH"], src: { kind: "item", tpl: "KELUHAN_BATUK_PILEK_DEWASA", obat: "AMBROXOL 30MG TAB" } },
      { key: "CTM", group: "Batuk, pilek & alergi", label: "CTM 4 mg", why: ["BATUK_PILEK", "RADANG_BENGKAK"], notWith: ["CETIRIZINE"], src: { kind: "item", tpl: "KELUHAN_BATUK_PILEK_DEWASA", obat: "CTM 4MG TAB" } },
      { key: "DEXA", group: "Batuk, pilek & alergi", label: "Dexamethason 0,5 mg", why: ["BATUK_PILEK", "RADANG_BENGKAK"], notWith: ["MP4"], src: { kind: "item", tpl: "KELUHAN_BATUK_PILEK_DEWASA", obat: "DEXAMETHASON 0.5 MG TAB*" } },
      { key: "DIATAB", group: "Saluran cerna", label: "New Diatab", why: ["DIARE"], src: { kind: "recipe", key: "KELUHAN_DIARE_DEWASA" } },
      { key: "RANITIDIN", group: "Saluran cerna", label: "Ranitidin 150 mg", why: ["NYERI_ULU_HATI"], notWith: ["OMEPRAZOLE"], src: { kind: "recipe", key: "NYERI_ULU_HATI_DEWASA" } },
      { key: "ANTASIDA", group: "Saluran cerna", label: "Antasida tablet", why: ["KEMBUNG"], notWith: ["ANTASIDA_SUSP"], src: { kind: "recipe", key: "KEMBUNG_DEWASA" } },
      { key: "AMOX", group: "Antibiotik", label: "Amoxicillin 500 mg", cls: "abx", why: ["INFEKSI_BAKTERI"], notWith: ["CEFADROXIL", "CEFIXIME"], src: { kind: "recipe", key: "KELUHAN_INFEKSI_DEWASA" } },
      // v3.39.0: obat oral pulang IGD tambahan (daftar & dosis disetujui dokter 5 Okt 2026; nama = master obat Smartplus).
      // [key, golongan, label, obat, jumlah, dosis, frekuensi, keterangan, why, extra]
      ...[
        ["PCT500", "Demam & Nyeri", "Paracetamol 500 mg", "PARACETAMOL 500 MG TAB*", "10", "500 mg", "3x1", "", ["DEMAM"], { notWith: ["PCT"] }],
        ["IBUPROFEN", "Demam & Nyeri", "Ibuprofen 400 mg", "IBUPROFEN 400MG TAB*", "10", "400 mg", "3x1", "sesudah makan", ["NYERI_OTOT"], { notWith: ["DIKLOFENAK"] }],
        ["DIKLOFENAK", "Demam & Nyeri", "Natrium diklofenak 25 mg", "NATRIUM DIKLOFENAK 25 MG", "10", "25 mg", "3x1", "sesudah makan", ["NYERI_OTOT"]],
        ["OMEPRAZOLE", "Saluran cerna", "Omeprazole 20 mg", "OMEPRAZOLE CAPSUL*", "10", "20 mg", "2x1", "sebelum makan", ["GERD", "ULKUS"]],
        ["SUKRALFAT", "Saluran cerna", "Sukralfat sirup", "SUKRALFAT SYR*", "1", "1 sendok makan", "3x1", "", ["ULKUS"]],
        ["ANTASIDA_SUSP", "Saluran cerna", "Antasida suspensi", "ANTASIDA DOEN SUSPNSI", "1", "1 sendok makan", "3x1", "", ["NYERI_ULU_HATI"], { notWith: ["SUKRALFAT"] }],
        ["ONDANSETRON", "Saluran cerna", "Ondansetron 4 mg", "ONDANSETRON TABLET 4 MG*", "6", "4 mg", "3x1", "bila mual/muntah", ["MUNTAH_HEBAT"]],
        ["LODIA", "Saluran cerna", "Lodia (loperamide) 2 mg", "LODIA TAB*", "6", "2 mg", "setiap BAB cair", "maks 4 tablet/hari", ["DIARE_NONINFEKSI"], { notWith: ["DIATAB"] }],
        ["CETIRIZINE", "Batuk, pilek & alergi", "Cetirizine 10 mg", "CETIRIZINE 10 MG TAB (ISI 60)*", "5", "10 mg", "1x1", "", ["ALERGI"]],
        ["LORATADINE", "Batuk, pilek & alergi", "Loratadine 10 mg", "LORATADINE TAB 10 MG*", "5", "10 mg", "1x1", "", ["ALERGI"], { notWith: ["CETIRIZINE"] }],
        ["MP4", "Batuk, pilek & alergi", "Methylprednisolon 4 mg", "METHYLPREDNISOLON 4 MG*", "10", "4 mg", "3x1", "", ["ASMA"]],
        ["OBH", "Batuk, pilek & alergi", "OBH sirup", "OBH SYR IKAPHARMINDO 100 ML*", "1", "1 sendok makan", "3x1", "", ["BATUK_KERING"]],
        ["CEFADROXIL", "Antibiotik", "Cefadroxil 500 mg", "CEFADROXIL 500 CAPSUL*", "10", "500 mg", "2x1", "", ["INFEKSI_KULIT"], { cls: "abx" }],
        ["CEFIXIME", "Antibiotik", "Cefixime 200 mg", "CEFIXIME 200 MG CAPSUL*", "10", "200 mg", "2x1", "", ["ISK_TIFOID"], { cls: "abx" }],
        ["BETAHISTINE", "Vertigo", "Betahistine 6 mg", "BETAHISTINE 6 MG TABLET*", "10", "6 mg", "3x1", "", ["VERTIGO"]],
        ["FLUNARIZINE", "Vertigo", "Flunarizine 5 mg", "FLUNARIZINE 5 MG*", "10", "5 mg", "2x1", "", ["VERTIGO"]],
        ["ANTIMO", "Vertigo", "Antimo (dimenhydrinate)", "ANTIMO DEWASA TAB*", "6", "1 tablet", "3x1", "", ["MABUK"]],
        ["AMLODIPINE", "Lain-lain", "Amlodipine 5 mg", "AMLODIPINE 5 MG TAB *", "7", "5 mg", "1x1", "", ["HIPERTENSI"], { cls: "chronic" }],
        ["AMLODIPINE10", "Lain-lain", "Amlodipine 10 mg", "AMLODIPINE 10 MG*", "5", "10 mg", "1x1", "", ["HIPERTENSI"], { cls: "chronic", notWith: ["AMLODIPINE"] }],
        ["CAPTOPRIL", "Lain-lain", "Captopril 25 mg", "CAPTOPRIL 25 MG TAB*", "10", "25 mg", "2x1", "", ["HIPERTENSI"], { cls: "chronic", notWith: ["AMLODIPINE"] }],
        ["CAPTOPRIL12", "Lain-lain", "Captopril 12,5 mg", "CAPTOPRIL TAB 12.5MG*", "10", "12,5 mg", "2x1", "", ["HIPERTENSI"], { cls: "chronic", notWith: ["AMLODIPINE"] }],
        ["METFORMIN", "Lain-lain", "Metformin 500 mg", "METFORMIN 500 MG TAB*", "10", "500 mg", "2x1", "", ["DM"], { cls: "chronic" }],
        ["GLIMEPIRIDE", "Lain-lain", "Glimepiride 1 mg", "GLIMEPIRIDE 1 MG TAB*", "10", "1 mg", "1x1", "", ["DM"], { cls: "chronic", notWith: ["METFORMIN"] }],
        ["TRANEKSAMAT", "Lain-lain", "Asam traneksamat 500 mg", "ASAM TRANEKSAMAT 500 MG TAB*", "10", "500 mg", "3x1", "", ["PERDARAHAN"]]
      ].map(([key, group, label, obat, jumlah, dosis, frekuensi, keterangan, why, extra]) =>
        ({ key, group, label, why: why || [], ...(extra || {}), src: { kind: "fixed", item: { obat, jumlah, dosis, frekuensi, waktu: "", keterangan } } }))
    ],
    child: [
      { key: "PCT", group: "Demam & Nyeri", label: "Paracetamol", why: ["DEMAM", "NYERI"], src: COMPLAINT_RECIPE_MAP.DEMAM.child },
      { key: "DOMPERIDON", group: "Saluran cerna", label: "Domperidone sirup", why: ["MUAL_MUNTAH"], src: COMPLAINT_RECIPE_MAP.MUAL_MUNTAH.child },
      { key: "BAPIL", group: "Batuk, pilek & alergi", label: "Puyer Dexamethason + CTM + Ambroxol", why: ["BATUK_PILEK"], src: { kind: "racikan", key: "BAPIL_ANAK" } },
      { key: "RADANG", group: "Batuk, pilek & alergi", label: "Puyer Dexamethason + CTM", why: ["RADANG_BENGKAK"], notWith: ["BAPIL"], src: { kind: "racikan", key: "RADANG_BENGKAK_ANAK" } },
      { key: "ZINC", group: "Saluran cerna", label: "Zinc", why: ["DIARE"], src: { kind: "recipe", key: "KELUHAN_DIARE_ANAK", only: /^ZINc TABLET$/i } },
      { key: "ORALIT", group: "Saluran cerna", label: "Oralit", why: ["DIARE"], src: { kind: "recipe", key: "KELUHAN_DIARE_ANAK", only: /^ORALIT$/i } },
      { key: "RANITIDIN", group: "Saluran cerna", label: "Puyer Ranitidin", why: ["NYERI_ULU_HATI", "GERD"], src: { kind: "racikan", key: "NYERI_ULU_HATI_ANAK" } },
      { key: "ANTASIDA", group: "Saluran cerna", label: "Antasida (usia ≥5 th)", why: ["KEMBUNG"], src: COMPLAINT_RECIPE_MAP.KEMBUNG.child },
      { key: "AMOX", group: "Antibiotik", label: "Amoxicillin", why: ["INFEKSI_BAKTERI"], notWith: ["CEFADROXIL", "CEFIXIME"], src: COMPLAINT_RECIPE_MAP.INFEKSI_BAKTERI.child },
      // v3.39.0: sirup anak tambahan (disetujui dokter 5 Okt 2026). ml = BB × mlPerKg, dibulatkan 0,5 ml (min 0,5 ml).
      { key: "IBUPROFEN", group: "Demam & Nyeri", label: "Ibuprofen sirup", why: ["NYERI_OTOT"], notWith: ["PCT"], src: { kind: "perKgSyr", obat: "IBUPROFEN 100MG/5ML SYR*", mlPerKg: 0.5, maxMl: 10, frekuensi: "3x1", keterangan: "sesudah makan" } }, // 10 mg/kg, 100 mg/5 ml
      { key: "CETIRIZINE", group: "Batuk, pilek & alergi", label: "Cetirizine sirup", why: ["ALERGI"], src: { kind: "perKgSyr", obat: "CETIRIZINE 5MG/5ML SYR*", mlPerKg: 0.2, maxMl: 10, frekuensi: "1x1", keterangan: "" } }, // 0,2 mg/kg, 5 mg/5 ml
      { key: "AMBROXOL", group: "Batuk, pilek & alergi", label: "Ambroxol sirup", why: ["BATUK_PILEK"], notWith: ["BAPIL"], src: { kind: "perKgSyr", obat: "AMBROXOL SYR 15 MG/ 5 ML", mlPerKg: 0.17, frekuensi: "3x1", keterangan: "" } }, // 0,5 mg/kg, 15 mg/5 ml
      { key: "CEFADROXIL", group: "Antibiotik", label: "Cefadroxil sirup", why: ["INFEKSI_KULIT"], src: { kind: "perKgSyr", obat: "CEFADROXIL 125MG/5ML SYR*", mlPerKg: 0.6, frekuensi: "2x1", keterangan: "" } }, // 15 mg/kg, 125 mg/5 ml
      { key: "CEFIXIME", group: "Antibiotik", label: "Cefixime sirup", why: ["ISK_TIFOID"], src: { kind: "perKgSyr", obat: "CEFIXIM SYR*", mlPerKg: 0.2, frekuensi: "2x1", keterangan: "" } }, // 4 mg/kg, 100 mg/5 ml
      { key: "INTERZINC", group: "Saluran cerna", label: "Interzinc sirup", why: ["DIARE"], notWith: ["ZINC"], src: { kind: "byAge", obat: "INTERZINC SYR*", lt6Months: "2,5 ml", gte6Months: "5 ml", frekuensi: "1x1", keterangan: "selama 10 hari" } },
      { key: "LACTOB", group: "Saluran cerna", label: "Lacto-B", why: ["DIARE"], src: { kind: "fixed", item: { obat: "LACTO B SACHET", jumlah: "3", dosis: "1 sachet", frekuensi: "1x1", waktu: "", keterangan: "" } } }
    ]
  };

  // =========================
  // v3.47.0: DATABASE RESEP PULANG RAWAT INAP (permintaan dokter 5 Okt 2026)
  // Disusun dari 641 resep obat oral (172 jenis) yang diserahkan di 310 kunjungan poli spesialis pasien yang sedang
  // dirawat (riwayat kunjungan Smartplus, 5 Okt 2026). Nama = nama master obat persis; dosis/frekuensi/waktu = pola
  // yang PALING SERING dipakai spesialis. Tidak dimasukkan: narkotika/psikotropika (tramadol, codein/codikaf,
  // alprazolam, clobazam), warfarin (dosis sesuai INR), OAT & antiepilepsi (spesifik). Jumlah tablet = dosis/hari ×
  // lama hari (bawaan 7 hari, bisa diubah), sirup/drop/suspensi = 1 botol. Semua bisa diedit di preview.
  // [key, golongan, label, obat master, dosis, frekuensi, waktu, extra]
  // =========================
  const RESEP_PULANG_DB = [
    ["AMLO10", "Hipertensi & jantung", "Amlodipine 10 mg", "AMLODIPINE 10 MG*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["AMLO5", "Hipertensi & jantung", "Amlodipine 5 mg", "AMLODIPINE 5 MG TAB *", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["CANDE16", "Hipertensi & jantung", "Candesartan 16 mg", "CANDESARTAN 16 MG HEXPHARM *", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["CANDE8", "Hipertensi & jantung", "Candesartan 8 mg", "CANDESARTAN 8 MG HEXPHARM *", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["RAMI10", "Hipertensi & jantung", "Ramipril 10 mg", "RAMIPRIL 10MG OGB DEXA*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["BISO5", "Hipertensi & jantung", "Bisoprolol 5 mg", "BISOPROLOL TAB 5 MG*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["CARVE", "Hipertensi & jantung", "Carvedilol 6,25 mg", "CARVEDILOL 6.25 MG TAB*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["ADALAT", "Hipertensi & jantung", "Adalat Oros 30 mg", "ADALAT OROS 30 MG*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["SPIRO25", "Hipertensi & jantung", "Spironolactone 25 mg", "SPIRONOLACTONE TAB 25 MG*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["FURO40", "Hipertensi & jantung", "Furosemide 40 mg", "FUROSEMIDA 40 MG TAB*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["ASCARDIA", "Hipertensi & jantung", "Ascardia 80 mg", "ASCARDIA 80 MG*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["CLOPI", "Hipertensi & jantung", "Clopidogrel 75 mg", "CLOPIDOGREL 75 MG TAB*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["NITROKAF", "Hipertensi & jantung", "Nitrokaf Retard", "NITROKAF RETARD*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["ATOR20", "Hipertensi & jantung", "Atorvastatin 20 mg", "ATORVASTATIN 20MG TAB (ISI 50)*", "1", "1 X SEHARI", "MALAM"],
    ["METF", "Diabetes", "Metformin 500 mg", "METFORMIN 500 MG TAB*", "1", "3 X SEHARI", "SESUDAH MAKAN"],
    ["GLICLA", "Diabetes", "Gliclazide MR 60 mg", "GLICLAZIDE MR 60MG", "1", "1 X SEHARI", "SEBELUM MAKAN"],
    ["GLIME1", "Diabetes", "Glimepiride 1 mg", "GLIMEPIRIDE 1 MG TAB*", "1", "1 X SEHARI", "SEBELUM MAKAN"],
    ["PIOGLI", "Diabetes", "Pioglitazone 30 mg", "PIOGLITAZONE HCL 30 MG TABLET", "1", "1 X SEHARI", "SEBELUM MAKAN"],
    ["ACARB", "Diabetes", "Acarbose 100 mg", "ACARBOSE 100 MG TAB*", "1", "3 X SEHARI", "SEBELUM MAKAN"],
    ["GLIQUI", "Diabetes", "Gliquidone 30 mg", "GLIQUIDONE TABLET 30 MG*", "1", "3 X SEHARI", "SEBELUM MAKAN"],
    ["LANSO", "Lambung & cerna", "Lansoprazole 30 mg", "LANSOPRAZOLE CAPS HEXPHARM* (ISI 100)", "1", "1 X SEHARI", "SEBELUM MAKAN"],
    ["OMEP", "Lambung & cerna", "Omeprazole 20 mg", "OMEPRAZOLE CAPSUL*", "1", "2 X SEHARI", "SEBELUM MAKAN"],
    ["SUKRAL", "Lambung & cerna", "Sukralfat sirup", "SUKRALFAT SYR*", "10", "3 X SEHARI", "SEBELUM MAKAN", { botol: true }],
    ["PROPEPSA", "Lambung & cerna", "Propepsa suspensi", "PROPEPSA SUSPENSI*", "10", "3 X SEHARI", "SEBELUM MAKAN", { botol: true }],
    ["REBAMI", "Lambung & cerna", "Rebamipide 100 mg", "REBAMIPIDE TABLET 100MG*", "1", "2 X SEHARI", "SEBELUM MAKAN"],
    ["ONDAN8", "Lambung & cerna", "Ondansetron 8 mg", "ONDANSETRON TABLET 8 MG*", "1", "2 X SEHARI", "SEBELUM MAKAN"],
    ["DOMPE", "Lambung & cerna", "Domperidon 10 mg", "DOMPERIDON 10 MG TAB*", "1", "3 X SEHARI", "SEBELUM MAKAN"],
    ["SPASMI", "Lambung & cerna", "Spasminal", "SPASMINAL TABLET", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["CURCU", "Lambung & cerna", "Curcuma", "CURCUMA FCT 120'S*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["URSO", "Lambung & cerna", "Ursodeoxycholic acid 250 mg", "URSODEOXYCHOLIC ACID 250MG (ISI 30)*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["LACTU", "Lambung & cerna", "Lactulose sirup", "LACTULOSE SYR 60 ML*", "10", "1 X SEHARI", "SESUDAH MAKAN", { botol: true }],
    ["EPERI", "Nyeri, saraf & otot", "Eperisone", "EPERISONE TAB*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["DIKLO50", "Nyeri, saraf & otot", "Na diklofenak 50 mg", "NATRIUM DIKLOFENAC 50 MG TAB*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["SANMOL", "Nyeri, saraf & otot", "Sanmol Forte 650 mg", "SANMOL FORTE TABLET 650MG*", "1", "3 X SEHARI", "SESUDAH MAKAN"],
    ["PCT500", "Nyeri, saraf & otot", "Paracetamol 500 mg", "PARACETAMOL 500 MG TAB*", "1", "3 X SEHARI", "SESUDAH MAKAN"],
    ["ETORI", "Nyeri, saraf & otot", "Etoricoxib 90 mg", "ETORICOXIB 90MG TABLET *", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["PREGA", "Nyeri, saraf & otot", "Pregabalin 75 mg", "PREGABALIN CAPSUL 75MG*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["MECOB", "Nyeri, saraf & otot", "Mecobalamin 500 mcg", "MECOBALAMIN 500MCG*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["NEUROS", "Nyeri, saraf & otot", "Neurosanbe", "NEUROSANBE TAB*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["BETAHI", "Nyeri, saraf & otot", "Betahistine 6 mg", "BETAHISTINE 6 MG TABLET*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["FLUNA", "Nyeri, saraf & otot", "Flunarizine 5 mg", "FLUNARIZINE 5 MG*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["AMITRIP", "Nyeri, saraf & otot", "Amitriptyline 25 mg", "AMITRIPTYLINE 25 MG TAB", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["MP8", "Nyeri, saraf & otot", "Methylprednisolon 8 mg", "METHYLPREDNISOLON TAB 8 MG*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["CEFIX200", "Antibiotik", "Cefixime 200 mg", "CEFIXIME 200 MG CAPSUL*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["LEVO500", "Antibiotik", "Levofloxacin 500 mg", "LEVOFLOXACIN 500 MG TAB HEXPHARM*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["CIPRO", "Antibiotik", "Ciprofloxacin 500 mg", "CIPROFLOXAZIN 500 MG TAB", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["AMOX500", "Antibiotik", "Amoxicillin 500 mg", "AMOXICILLIN 500MG TABLET*", "1", "3 X SEHARI", "SESUDAH MAKAN"],
    ["CEFAD500", "Antibiotik", "Cefadroxil 500 mg", "CEFADROXIL 500 CAPSUL*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["AZITH500", "Antibiotik", "Azithromycin 500 mg (5 hari)", "AZITHROMYCIN 500 MG TAB (30)*", "1", "1 X SEHARI", "SESUDAH MAKAN", { days: 5 }],
    ["TAMSU", "Urologi & lain", "Tamsulosin 0,4 mg", "TAMSULOSIN TABLET 0.4 MG", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["URIEF", "Urologi & lain", "Urief 4 mg", "URIEF TABLET 4 MG ( ISI 100)", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["ALLOP", "Urologi & lain", "Allopurinol 300 mg", "ALLOPURINOL 300 MG*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["BICNAT", "Urologi & lain", "Natrium bikarbonat 500 mg", "NATRIUM BIKARBONAT 500MG*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["NAC", "Urologi & lain", "Acetylcysteine 200 mg", "ACETYLCYSTEINE KAPSUL 200 MG*", "1", "3 X SEHARI", "SESUDAH MAKAN"],
    ["SALBU2", "Urologi & lain", "Salbutamol 2 mg", "SALBUTAMOL 2 MG GEN*", "1", "2 X SEHARI", "SESUDAH MAKAN"],
    ["CETIR", "Urologi & lain", "Cetirizine 10 mg", "CETIRIZINE 10 MG TAB HEXPHARM *", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["LORAT", "Urologi & lain", "Loratadine 10 mg", "LORATADINE TAB 10 MG*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["TXA", "Urologi & lain", "Asam traneksamat 500 mg", "ASAM TRANEKSAMAT 500 MG TAB*", "1", "3 X SEHARI", "SESUDAH MAKAN"],
    ["FORMICAL", "Vitamin & suplemen", "Formical-B", "FORMICAL-B*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["TTD", "Vitamin & suplemen", "Tablet tambah darah", "TABLET TAMBAH DARAH", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["FOLAT", "Vitamin & suplemen", "Asam folat 1 mg", "ASAM FOLAT 1 MG*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["VITB12", "Vitamin & suplemen", "Vitamin B12", "VIT B12 (SIANOKOBALAMIN)*", "1", "3 X SEHARI", "SESUDAH MAKAN"],
    ["ALBUS", "Vitamin & suplemen", "Albusmin", "ALBUSMIN KAPSUL*", "1", "3 X SEHARI", "SESUDAH MAKAN"],
    ["PROVED3", "Vitamin & suplemen", "Prove D3 5000 IU", "PROVE D3 5000 IU TABLET*", "1", "1 X SEHARI", "SESUDAH MAKAN"],
    ["APIDROP", "Anak (sirup/drop)", "Apialys drop", "APIALYS DROP*", "0,3", "1 X SEHARI", "SEBELUM MAKAN", { botol: true }],
    ["FERRIZ", "Anak (sirup/drop)", "Ferriz drop", "FERRIZ DROP*", "0,6", "1 X SEHARI", "SEBELUM MAKAN", { botol: true }],
    ["LERZIN", "Anak (sirup/drop)", "Lerzin drop", "LERZIN DROP", "0,3", "1 X SEHARI", "SESUDAH MAKAN", { botol: true }],
    ["DEVIT", "Anak (sirup/drop)", "Devit sirup", "DEVIT SYR *", "5", "2 X SEHARI", "SESUDAH MAKAN", { botol: true }],
    ["ZINCSYR", "Anak (sirup/drop)", "Zinc sirup", "ZINC SYR", "5", "1 X SEHARI", "SESUDAH MAKAN", { botol: true }],
    ["BICORSAN", "Anak (sirup/drop)", "Bicorsan sirup", "BICORSAN SYR*", "3,5", "2 X SEHARI", "SESUDAH MAKAN", { botol: true }],
    ["ELKANA", "Anak (sirup/drop)", "Elkana sirup", "ELKANA SYR 60 ML", "5", "1 X SEHARI", "SESUDAH MAKAN", { botol: true }],
    ["CURCUSYR", "Anak (sirup/drop)", "Curcuma plus sirup", "CURCUMA PLUS LYSINE 60ML*", "5", "1 X SEHARI", "SESUDAH MAKAN", { botol: true }],
    ["CEFIXSYR", "Anak (sirup/drop)", "Cefixim sirup", "CEFIXIM SYR*", "2,5", "2 X SEHARI", "SESUDAH MAKAN", { botol: true }]
  ].map(([key, group, label, obat, dosis, frekuensi, waktu, extra]) => ({ key, group, label, obat, dosis, frekuensi, waktu, ...(extra || {}) }));

  // Jumlah resep pulang: tablet = dosis/hari × hari (dosis "1/2" dihitung 0,5, dibulatkan ke atas); botol = 1.
  function spPulangQty(it, days) {
    if (it.botol) return "1";
    const d = it.days || days;
    const per = Number((String(it.frekuensi).match(/(\d+)\s*X/i) || [])[1]) || 1;
    const ds = String(it.dosis || "1").trim();
    const fr = ds.match(/^(\d+)\s*\/\s*(\d+)$/);
    const mix = ds.match(/^(\d+)\s+(\d+)\s*\/\s*(\d+)$/);
    const dose = mix ? Number(mix[1]) + Number(mix[2]) / Number(mix[3]) : fr ? Number(fr[1]) / Number(fr[2]) : Number(ds.replace(",", ".")) || 1;
    return String(Math.ceil(dose * per * d));
  }

  // Nama obat dinormalkan untuk mencocokkan resep riwayat dengan database (tanpa *, spasi ganda, huruf besar/kecil).
  const spDrugKey = (s) => String(s || "").replace(/\*/g, "").replace(/\s+/g, " ").trim().toLowerCase();

  // Kata kunci keluhan di Assesment GADAR (keluhan utama, RPS, diagnosis, masalah). Kata yang dinegasikan
  // ("demam (-)", "tidak demam", "demam disangkal", "alergi: tidak ada") tidak dihitung.
  // v3.40.0 (instruksi dokter 5 Okt 2026): kamus keluhan diperluas untuk obat-obat KOMBINASI RESEP.
  const SP_COMPLAINT_KEYWORDS = {
    DEMAM: /demam|febris|febrile|panas badan|badan panas|badan hangat|meriang|hiperpireksia|hipertermi|\bfever|\bobs\.? febris|\bvf\b|\bdbd\b|\bdhf\b|dengue/gi,
    NYERI: /nyeri|sakit kepala|pusing|cephal|sefal|migren|migrain|\btth\b|tension type|kolik|vulnus|luka|cedera|trauma|sakit gigi|odontalgia|pulpitis|dismenore|nyeri haid/gi,
    NYERI_OTOT: /myalgia|mialgia|nyeri otot|pegal|nyeri sendi|ngilu|linu|artralgia|arthralgia|arthritis|artritis|\bgout\b|asam urat|hiperurisemi|\blbp\b|low back pain|nyeri pinggang|nyeri punggung|sakit pinggang|ischialgia|iskialgia|hnp|keseleo|terkilir|sprain|strain|kontusi|memar|trauma tumpul|jatuh|\bkll\b|kecelakaan|fraktur|dislokasi|tendinitis|myofascial|osteoarthritis/gi,
    MUAL_MUNTAH: /mual|muntah|vomit|nausea|emesis|eneg/gi,
    MUNTAH_HEBAT: /hiperemesis|muntah[^.,;\n]{0,15}(terus|hebat|berkali|sering|>\s*\d|\d+\s*x|\d+\s*kali)|muntah-muntah|muntah muntah|tidak bisa makan minum/gi,
    BATUK_PILEK: /batuk|pilek|\bflu\b|influenza|ispa|rhinit|rinit|common cold|commond cold|bersin|hidung tersumbat|hidung meler|nasofaringit/gi,
    BATUK_KERING: /batuk kering|batuk tidak berdahak|batuk tanpa dahak|batuk gatal|batuk non ?produktif/gi,
    RADANG_BENGKAK: /bengkak|radang|tonsil|faringit|laringit|edema|inflamasi|sakit menelan|nyeri telan|odinofagi|stomatitis|sariawan|gusi bengkak/gi,
    ALERGI: /gatal|biduran|urtikaria|urticaria|alergi|allergy|ruam|bentol|kaligata|dermatitis|eksim|eczema|pruritus|erupsi obat|reaksi obat|rhinitis alergi|rinitis alergi|konjungtivitis alergi|digigit serangga|gigitan serangga|insect bite/gi,
    ASMA: /asma|asthma|\bppok\b|\bcopd\b|mengi|wheez|bronkospasme|eksaserbasi akut|angioedema|bronkitis asmatik/gi,
    DIARE: /diare|mencret|bab cair|\bgea\b|\bge\b|gastroenteritis|disentri|dysentri|bab encer|buang air besar cair/gi,
    DIARE_NONINFEKSI: /diare (non ?infeksi|fungsional|akut tanpa (demam|lendir|darah))|\bibs\b|irritable bowel/gi,
    NYERI_ULU_HATI: /ulu hati|epigastri|dispepsia|dyspepsia|gastritis|maag|perih|sebah/gi,
    GERD: /\bgerd\b|refluks|reflux|heartburn|dada (terasa )?terbakar|panas di dada|rasa panas di dada|asam lambung naik|sendawa|regurgitasi|pahit di mulut/gi,
    ULKUS: /tukak|ulkus peptik|ulkus lambung|peptic ulcer|gastritis erosif|erosi gaster|melena|bab hitam|hematemesis|muntah darah|muntah hitam/gi,
    KEMBUNG: /kembung|begah|flatulen|distensi|perut penuh|banyak gas/gi,
    INFEKSI_BAKTERI: /\bBP\b|bronko?pneumoni|pneumoni|ispa|faringit|tonsil|otitis|\bomsk\b|\boma\b|sinusit|rhinosinusit|bronkit|vulnus|luka robek|luka terbuka|abses gigi|gigi berlubang|infeksi bakteri|bacterial infection|leukositosis/gi,
    INFEKSI_KULIT: /abses|selulit|furunkel|furunkul|karbunkel|bisul|impetigo|paronikia|erisipelas|luka (terinfeksi|bernanah|infeksi)|bernanah|\bpus\b|ulkus (diabetik|dm|pedis)|ulkus kaki|gangren|pioderma|folikulitis/gi,
    ISK_TIFOID: /\bisk\b|\buti\b|infeksi saluran kemih|disuria|dysuria|anyang|nyeri (saat )?(bak|kencing)|sakit (saat )?(bak|kencing)|sistitis|pielonefritis|urin keruh|tifoid|typhoid|thypoid|typhus|tipes|tifus|\bwidal\b|salmonell|demam enterik/gi,
    VERTIGO: /vertigo|pusing berputar|kepala berputar|sekeliling berputar|dizzi|\bbppv\b|sempoyongan|kliyengan|tinnitus|telinga berdenging|meniere/gi,
    MABUK: /mabuk perjalanan|mabuk kendaraan|mabuk laut|motion sickness|mabuk darat/gi,
    HIPERTENSI: /hipertensi|hypertension|\bht\b|\bhtn\b|tekanan darah tinggi|darah tinggi|urgensi hipertensi|hipertensi urgensi|tensi tinggi/gi,
    DM: /diabetes|\bdm\b|\bdmt2\b|kencing manis|hiperglikemi|hyperglycemi|gula darah tinggi|\bgds\s*(tinggi|>\s*2\d\d)/gi,
    PERDARAHAN: /epistaksis|epistaxis|mimisan|perdarahan|pendarahan|hemoptisis|batuk darah|menoragia|menorrhagia|metroragia|\baub\b|hematuria|spotting|gusi berdarah/gi
  };

  // Keluhan yang ditulis sebagai RIWAYAT (mis. "riwayat alergi udang", "riwayat HT") bukan keluhan saat ini.
  const SP_SKIP_IF_RIWAYAT = ["ALERGI", "HIPERTENSI", "DM", "ASMA"];

  function spSuggestComplaints(text) {
    const raw = String(text || "").replace(/\s+/g, " ");
    const out = {};
    for (const [key, re0] of Object.entries(SP_COMPLAINT_KEYWORDS)) {
      let src = raw;
      // "Nyeri ulu hati" bukan Nyeri umum (Ketorolac); "pusing berputar" = vertigo, bukan Nyeri.
      if (key === "NYERI") src = raw.replace(/nyeri\s+(perut\s+)?(ulu hati|epigastri\w*)|(pusing|kepala)\s+berputar|(sakit|nyeri) (saat )?(bak|kencing)/gi, " ");
      const re = new RegExp(re0.source, "gi");
      let m;
      while ((m = re.exec(src))) {
        const before = src.slice(Math.max(0, m.index - 14), m.index);
        const after = src.slice(m.index + m[0].length, m.index + m[0].length + 26);
        if (/(tidak|tdk|tanpa|tak|bukan|ø|negatif|disangkal)\s*(ada\s*)?$/i.test(before)) continue;
        if (SP_SKIP_IF_RIWAYAT.includes(key) && /(riwayat|r\/|rpd|riw\.?)\s*(\w+\s*)?$/i.test(before)) continue;
        // "batuk pilek tidak ada", "alergi: tidak ada": satu kata/tanda baca di antara kata kunci dan negasi masih dihitung.
        if (/^[\s:=]*([\w\/]+[\s,:]*)?(\(\s*-\s*\)|-(?![\w>])|disangkal|tidak ada|tdk ada|negatif|neg\b|\bnihil\b)/i.test(after)) continue;
        out[key] = m[0].trim();
        break;
      }
    }
    // Hipoglikemia: obat penurun gula tidak disarankan.
    if (/hipoglik|hypoglyc/i.test(raw)) delete out.DM;
    return out; // { DEMAM: "demam", ... } kata yang ditemukan
  }

  // Obat yang disarankan (key) untuk cabang tertentu dari keluhan yang ditemukan.
  function spSuggestDrugKeys(branchKey, complaintHits) {
    const list = DRUG_OPTIONS[branchKey] || [];
    const keys = list.filter((o) => o.why.some((w) => complaintHits[w])).map((o) => o.key);
    return keys.filter((k) => {
      const o = list.find((x) => x.key === k);
      const not = [].concat(o.notWith || []);
      return !not.some((n) => keys.includes(n));
    });
  }

  // v3.40.0 (instruksi dokter 5 Okt 2026): jumlah tablet/kapsul DEWASA untuk pulang maks 6, kecuali antibiotik
  // (cls "abx") = 3 hari dan obat DM/hipertensi (cls "chronic") = 5 hari (jumlah = dosis per hari × hari).
  // Sirup/suspensi/sachet tidak diubah. Template asli tidak diubah (dipakai fitur lain).
  const SP_ADULT_QTY = { maxTablets: 6, abxDays: 3, chronicDays: 5 };
  function spPerDay(frekuensi) {
    const f = String(frekuensi || "");
    const m = f.match(/(\d+)\s*[x×]\s*(\d+)/i);
    if (m) return Number(m[1]) * Number(m[2]);
    const n = f.match(/(\d+)\s*X\s*SEHARI/i);
    return n ? Number(n[1]) : null;
  }
  function spAdultQty(item, cls) {
    if (/syr|sirup|susp|drop|sachet|salep|\bcr\b|inj|infus/i.test(item.obat)) return item;
    const per = spPerDay(item.frekuensi);
    let q;
    if (cls === "abx" || cls === "chronic") {
      if (!per) return item;
      q = per * (cls === "abx" ? SP_ADULT_QTY.abxDays : SP_ADULT_QTY.chronicDays);
    } else {
      q = Math.min(Number(item.jumlah) || SP_ADULT_QTY.maxTablets, SP_ADULT_QTY.maxTablets);
    }
    return { ...item, jumlah: String(q) };
  }

  // Satu pilihan obat -> item resep / racikan untuk pasien ini. ctx: { branch:'adult'|'child', weight, ageYears, ageMonths }.
  function spResolveDrugOption(opt, ctx) {
    let src = opt.src;
    const weight = Number(ctx.weight);
    const res = { items: [], racikan: [], text: "", error: "" };
    try {
      if (src.kind === "bbSplit") {
        if (!Number.isFinite(weight) || weight <= 0) throw new Error("isi BB");
        src = weight <= (src.maxSirupKg || 15) ? src.sirup : src.puyer;
      }
      if (src.kind === "fixed") {
        res.items.push({ ...src.item });
      } else if (src.kind === "perKgSyr") {
        // v3.39.0: sirup anak per kg BB, dibulatkan 0,5 ml, min 0,5 ml, maks maxMl (bila ada).
        if (!Number.isFinite(weight) || weight <= 0) throw new Error("isi BB");
        let ml = Math.max(0.5, Math.round(weight * src.mlPerKg * 2) / 2);
        if (src.maxMl) ml = Math.min(ml, src.maxMl);
        res.items.push({ obat: src.obat, jumlah: "1", dosis: `${String(ml).replace(".", ",")} ml`, frekuensi: src.frekuensi, waktu: "", keterangan: src.keterangan || "" });
      } else if (src.kind === "byAge") {
        const months = Number(ctx.ageMonths);
        if (!Number.isFinite(months)) throw new Error("usia tidak terbaca");
        res.items.push({ obat: src.obat, jumlah: "1", dosis: months < 6 ? src.lt6Months : src.gte6Months, frekuensi: src.frekuensi, waktu: "", keterangan: src.keterangan || "" });
      } else if (src.kind === "item") {
        const it = (MASTER_RECIPE_TEMPLATES[src.tpl]?.items || []).find((i) => norm(i.obat) === norm(src.obat));
        if (!it) throw new Error("obat tidak ada di template");
        res.items.push({ ...it });
      } else if (src.kind === "recipe") {
        const tpl = MASTER_RECIPE_TEMPLATES[src.key];
        if (!tpl) throw new Error("template tidak ada");
        let items;
        if (tpl.weightGroups) {
          if (!Number.isFinite(weight) || weight <= 0) throw new Error("isi BB");
          const wk = findWeightKeyForValue(src.key, weight);
          if (!wk) throw new Error(`BB ${weight} kg belum ada di template`);
          items = tpl.weightGroups[wk].items;
        } else items = tpl.items || [];
        items = items.filter((i) => !src.only || src.only.test(i.obat)).map((i) => ({ ...i }));
        if (opt.key === "ZINC" && Number.isFinite(Number(ctx.ageMonths)) && Number(ctx.ageMonths) < 6) {
          items = items.map((i) => ({ ...i, dosis: "1/2 tab", frekuensi: "1x1" }));
        }
        if (!items.length) throw new Error("tidak ada obat untuk BB ini");
        res.items.push(...items);
      } else if (src.kind === "ageRecipe") {
        const age = Number(ctx.ageYears);
        if (!Number.isFinite(age) || age < 5) throw new Error("hanya usia ≥5 th");
        const tpl = MASTER_RECIPE_TEMPLATES[age <= 15 ? src.key5_15 : src.keyGt15];
        res.items.push(...(tpl?.items || []).map((i) => ({ ...i })));
      } else if (src.kind === "racikan") {
        if (!Number.isFinite(weight) || weight <= 0) throw new Error("isi BB");
        const wk = findWeightKeyForValue(src.key, weight, { lowerBoundaryForRacikan: true });
        const tpl = MASTER_RACIKAN_TEMPLATES[src.key];
        const g = tpl?.weightGroups?.[wk];
        if (!g) throw new Error(`BB ${weight} kg belum ada di template racikan`);
        res.racikan.push({ key: src.key, weightKey: wk, label: opt.label });
        const bahan = (g.items || []).map((i) => `${i.obat.replace(/\*$/, "")} ×${i.jumlahPerObat || i.jumlah || 1}`).join(" + ");
        res.text = `Puyer ${g.jumlahRacikan || 10} bks: ${bahan} • ${g.dosis || "1 pulv"} ${g.frekuensi || ""}`.trim();
      }
      if (ctx.branch === "adult") res.items = res.items.map((i) => spAdultQty(i, opt.cls)); // v3.40.0
      if (!res.text) {
        res.text = res.items.map((i) => [i.obat.replace(/\*$/, ""), i.dosis, i.frekuensi, i.jumlah ? `jml ${i.jumlah}` : ""]
          .filter(Boolean).join(" • ")).join(" | ");
      }
    } catch (err) {
      res.error = err.message || String(err);
    }
    return res;
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
    // v3.10.0: buang satuan bawaan ("24 x/menit", "116x/mnt", "30x/m") agar tidak dobel di SOAP.
    if (unit === "pulse" || unit === "rr") return s.replace(/\s*x\s*(\/\s*(menit|mnt|m))?\s*$/i, "");
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

  // v3.20.0: salin teks yang benar-benar masuk clipboard.
  // Smartplus memakai HTTP -> navigator.clipboard tidak tersedia; cara lama (textarea di <body> + execCommand)
  // gagal diam-diam saat modal GADAR (Bootstrap) terbuka: fokus direbut modal, yang tersalin KOSONG tapi melapor berhasil.
  // Sekarang isi clipboard ditulis langsung lewat event "copy" (tidak bergantung fokus/seleksi) dan hanya
  // dianggap berhasil bila event itu benar-benar terjadi. Perlu klik pengguna (aturan browser).
  async function copySoapText(text) {
    if (window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText) {
      try { await navigator.clipboard.writeText(text); return true; } catch (_) {}
    }
    let wrote = false;
    const onCopy = (e) => {
      try { e.clipboardData.setData("text/plain", text); e.preventDefault(); wrote = true; } catch (_) {}
    };
    document.addEventListener("copy", onCopy, true);
    const ta = document.createElement("textarea");
    try {
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0;";
      (document.querySelector(".modal.show") || document.body).appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      return !!(ok && wrote);
    } catch (e) {
      console.warn("[AUTO SOAP] Clipboard gagal", e);
      return false;
    } finally {
      ta.remove();
      document.removeEventListener("copy", onCopy, true);
    }
  }

  // =========================
  // v3.10.0: TERAPI SEMENTARA (disetujui dokter, 2 Okt 2026)
  // =========================
  // Dewasa: RL 20 tpm, Ceftriaxon 1x2 g, Ondan 3x1 amp, Ranitidin 2x1 amp, Sanmol forte/4 jam kp.
  // Anak (BB): RL tpm makro (aturan dokter), Ceftriaxon 50 mg/kgBB (maks 2 g),
  //            Ondansetron 1 mg tiap 7 kg (lihat ANAK_ONDAN_MG), PCT IV 14 mg/kgBB / 4 jam (maks 1 g).
  // Tambahan berdasarkan diagnosis: nebu, NS/12 jam (dewasa), diatab (dewasa) / oralit (anak).
  const TERAPI_DX = {
    nebu: /\bBP\b|bronko\s*pneumoni|\bTB\b|tuberkulos|pneumoni|\bPPOK\b|dyspn|dispn|sesak|asma|asthma/i,
    cairanNS: /\bSNH\b|stroke\s*non\s*hemor|\bCKS\b|\bCKR\b|cedera\s*kepala|penurunan\s*kesadaran|\bpenkes\b|\bDM\b|diabet|hiperglikemi|hipoglikemi/i,
    diare: /diare|\bGEA\b|gastroenteritis|gastro\s*enteritis/i
  };

  // Aturan cairan anak dari dokter (tpm makro):
  //  - 10 kg pertama: 1 tpm per kg (10 kg = 10 tpm)
  //  - 10 kg kedua: +1 tpm per 2 kg (20 kg = 15 tpm)
  //  - selanjutnya: +1 tpm per 4 kg; maksimal 20 tpm makro
  //  - BB < 7 kg: pakai tpm mikro = makro x 3
  function anakTpmMakro(bb) {
    const w = Math.max(0, Number(bb) || 0);
    let tpm;
    if (w <= 10) tpm = Math.floor(w);
    else if (w <= 20) tpm = 10 + Math.floor((w - 10) / 2);
    else tpm = 15 + Math.floor((w - 20) / 4);
    return Math.max(1, Math.min(20, tpm));
  }

  // Ondansetron anak: 1 mg tiap 7 kg (dibulatkan ke bawah), minimal 1 mg, maksimal 4 mg.
  function anakOndanMg(bb) {
    return Math.max(1, Math.min(4, Math.floor((Number(bb) || 0) / 7)));
  }

  function roundTo(value, step) {
    return Math.round(value / step) * step;
  }

  function buildTerapiSementara({ isAdult, bb, diagnosis }) {
    const dx = String(diagnosis || "");
    const lines = [];
    if (isAdult) {
      lines.push(TERAPI_DX.cairanNS.test(dx) ? "NS / 12 jam" : "RL 20 tpm");
      lines.push("Ceftriaxon 1x2 gram iv");
      lines.push("Ondan 3x1 amp");
      lines.push("Ranitidin 2x1 amp");
      lines.push("Sanmol forte / 4 jam kp");
      if (TERAPI_DX.nebu.test(dx)) lines.push("Nebu combivent 3x1");
      if (TERAPI_DX.diare.test(dx)) lines.push("Diatab 2 tab setiap BAB cair");
    } else {
      const makro = anakTpmMakro(bb);
      lines.push(bb < 7 ? `RL ${makro * 3} tpm mikro` : `RL ${makro} tpm makro`);
      lines.push(`Ceftriaxon 1x${Math.min(2000, roundTo(50 * bb, 50))} mg iv`);
      lines.push(`Ondansetron 2x${anakOndanMg(bb)} mg iv`);
      lines.push(`Paracetamol ${Math.min(1000, roundTo(14 * bb, 10))} mg iv / 4 jam`);
      if (TERAPI_DX.nebu.test(dx)) lines.push("Nebu combivent 3x1");
      if (TERAPI_DX.diare.test(dx)) lines.push("Oralit setiap BAB cair");
    }
    return lines;
  }

  // Tulis blok "Terapi sementara:" ke kolom Rencana. Isi lama dipertahankan;
  // jika blok sudah ada (AUTO SOAP diklik ulang), blok lama diganti, tidak dobel.
  function mergeTerapiSementara(existing, lines) {
    const header = "Terapi sementara:";
    const base = String(existing || "").split(/\n?Terapi sementara:[\s\S]*$/)[0].replace(/\s+$/, "");
    return (base ? base + "\n" : "") + header + "\n" + lines.join("\n");
  }

  async function waitFor(fn, timeout = 8000, interval = 120) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
      try { const v = fn(); if (v) return v; } catch (_) {}
      await recipeSleep(interval);
    }
    return null;
  }

  // v3.21.0: semua AUTO dimulai dari tab utama. Di halaman pasien, "Riwayat Kunjungan", "Hasil Laboratorium",
  // "Hasil Radiologi", "Riwayat Resep" adalah tab SEJAJAR dengan "E-RAWAT DARURAT" (IGD) / "E-RANAP" (href #planning).
  // Bila salah satunya terbuka, sub-tab Assesment GADAR / Resep Online / Order Lab / Order Radiologi tersembunyi
  // sehingga AUTO macet. Tab #planning hanya tab Bootstrap (tidak memuat ulang isi), aman diklik.
  async function ensureMainEmrTab() {
    const link = [...document.querySelectorAll('a[href="#planning"]')].find((a) => a.closest(".nav"));
    if (!link) return false;
    const pane = document.getElementById("planning");
    const shown = () => (pane ? visible(pane) : link.classList.contains("active"));
    if (shown()) return true;
    link.click();
    await waitFor(shown, 3000, 80);
    await recipeSleep(250);
    return shown();
  }

  // v3.21.0: modal GADAR berada DI DALAM panel sub-tab "Assesment GADAR". Bila sub-tab lain aktif (mis. Resep Online),
  // panel itu display:none -> modal "terbuka" tapi berukuran 0 (tak terlihat) dan AUTO SOAP/PAKET KONSUL gagal.
  // Pindah sub-tab TIDAK dipakai karena kembali ke Resep Online memuat ulang panel dan menghapus draft resep.
  // Solusi: panel pembungkus ditampilkan setinggi 0 (isinya tetap tersembunyi; modal position:fixed tetap tampil)
  // selama modal terbuka, lalu dikembalikan saat modal ditutup.
  function spRevealModalHost(modal) {
    if (!modal) return 0;
    const hidden = [];
    for (let el = modal.parentElement; el && el !== document.body && el !== document.documentElement; el = el.parentElement) {
      if (getComputedStyle(el).display === "none") hidden.push(el);
    }
    hidden.forEach((el) => {
      if (el.dataset.spPrevStyle === undefined) el.dataset.spPrevStyle = el.getAttribute("style") || "";
      el.style.cssText += ";display:block !important;height:0 !important;min-height:0 !important;overflow:hidden !important;padding:0 !important;margin:0 !important;border:0 !important;";
    });
    if (hidden.length && window.jQuery) {
      window.jQuery(modal).one("hidden.bs.modal", () => hidden.forEach((el) => {
        el.setAttribute("style", el.dataset.spPrevStyle || "");
        delete el.dataset.spPrevStyle;
      }));
    }
    return hidden.length;
  }

  // Buka GADAR terakhir kunjungan ini dalam mode edit (fungsi bawaan Smartplus update_gadar).
  async function openLatestGadarForEdit() {
    const g = await getLatestGadarData();
    if (!g) return null;
    const id = String(g.idGadar);
    if (typeof window.update_gadar === "function") {
      window.update_gadar(id);
      spRevealModalHost(document.getElementById("modal_form_gadar"));
    } else {
      const tab = document.getElementById("new_gadar");
      if (tab) tab.click();
      const link = await waitFor(() => [...document.querySelectorAll("#box_gadar a")]
        .find((a) => (a.getAttribute("onclick") || a.getAttribute("href") || "").includes(`update_gadar('${id}')`)), 6000);
      if (!link) return null;
      link.click();
    }
    // Tunggu modal terbuka DAN terisi data GADAR yang benar.
    const ok = await waitFor(() => {
      const m = document.getElementById("modal_form_gadar");
      if (m && m.classList.contains("show") && !visible(m)) spRevealModalHost(m);
      const idField = document.querySelector('#form_gadar [name="id_gadar"]');
      return m && visible(m) && idField && String(idField.value) === id;
    }, 8000);
    if (!ok) return null;
    await recipeSleep(300);
    return g;
  }

  // Panel cadangan bila clipboard ditolak browser (halaman HTTP / jeda terlalu lama).
  function showSoapCopyPanel(text) {
    const PANEL_ID = "sp-auto-soap-copy-panel";
    document.getElementById(PANEL_ID)?.remove();
    const panel = document.createElement("div");
    panel.id = PANEL_ID;
    panel.style.cssText = "position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2147483647;background:#fff;border:2px solid #e91e63;border-radius:12px;padding:12px;width:min(92vw,520px);max-height:85vh;box-shadow:0 8px 30px rgba(0,0,0,.35);font:14px/1.4 sans-serif;color:#222;display:flex;flex-direction:column;gap:8px;";
    const title = document.createElement("div");
    title.textContent = "⠿ 📝 SOAP siap — tekan SALIN";
    title.style.cssText = "font-weight:bold;display:flex;align-items:center;gap:6px;";
    title.className = "sp-panel-head";
    spStyleHandle(title);
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.readOnly = true;
    ta.style.cssText = "width:100%;height:45vh;box-sizing:border-box;font:13px/1.35 monospace;";
    const row = document.createElement("div");
    row.style.cssText = "display:flex;gap:8px;";
    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.textContent = "📋 SALIN SOAP";
    copyBtn.style.cssText = "flex:1;padding:11px;font:600 15px Arial,sans-serif;background:#e91e63;color:#fff;border:0;border-radius:8px;cursor:pointer;";
    copyBtn.addEventListener("click", async () => {
      const ok = await copySoapText(text);
      if (!ok) { ta.focus(); ta.select(); }
      copyBtn.textContent = ok ? "✅ Tersalin — silakan Paste" : "Pilih teks lalu salin manual";
    });
    row.append(copyBtn);
    panel.append(title, ta, row);
    document.documentElement.appendChild(panel);
    spMakeDraggable(panel, PANEL_ID, (t) => !!t.closest(".sp-panel-head"));
    spWindowControls(panel, PANEL_ID, ".sp-panel-head", title, () => panel.remove());
  }

  async function runAutoSoap(opts = {}) {
    // v3.10.0: buka GADAR terakhir -> isi Terapi sementara di Rencana -> susun SOAP -> salin.
    // v3.19.0: opts.returnOnly -> kembalikan teks SOAP tanpa menyalin (dipakai PAKET KONSUL).
    // v3.21.0: opts.refresh (tombol Update PAKET KONSUL): bila form GADAR masih terbuka, pakai isinya apa adanya
    // (termasuk revisi yang belum disimpan) dan JANGAN menimpa blok "Terapi sementara" yang sudah ada.
    await ensureMainEmrTab();
    const openModal = document.getElementById("modal_form_gadar");
    if (openModal && openModal.classList.contains("show") && !visible(openModal)) spRevealModalHost(openModal);
    const openId = document.querySelector('#form_gadar [name="id_gadar"]')?.value;
    let g = null;
    if (opts.refresh && openModal && visible(openModal) && openId) {
      toast("AUTO SOAP: memperbarui dari form GADAR yang sedang terbuka...");
      g = { data: {}, idGadar: openId };
    } else {
      toast("AUTO SOAP: membuka Assesment GADAR terakhir...");
      g = await openLatestGadarForEdit();
    }
    if (!g) {
      toast("AUTO SOAP: Assesment GADAR kunjungan ini tidak ditemukan / gagal dibuka.");
      return;
    }
    const form = document.getElementById("form_gadar");
    const ageYears = getPatientAgeYears();
    const isAdult = Number.isFinite(ageYears) ? ageYears > 17 : true;
    const diagnosis = String(form.querySelector('[name="diagnosa_banding"]')?.value || g.data.diagnosa_banding || "");
    const rencanaNow = form.querySelector('[name="rencana_tindakan"]');
    const keepTerapi = !!(opts.refresh && rencanaNow && /Terapi sementara:/.test(rencanaNow.value));

    let bb = null;
    if (!isAdult && keepTerapi) {
      bb = parseGadarWeight({ berat: form.querySelector('[name="berat"]')?.value || g.data.berat });
    } else if (!isAdult) {
      bb = parseGadarWeight({ berat: form.querySelector('[name="berat"]')?.value || g.data.berat });
      if (!bb) {
        const raw = window.prompt("AUTO SOAP • Pasien anak\nKolom Berat di GADAR kosong.\nMasukkan BB pasien (kg):", "");
        if (raw === null) return;
        bb = parseGadarWeight({ berat: raw });
        if (!bb) { toast("AUTO SOAP: BB tidak valid."); return; }
      }
    }

    const terapi = buildTerapiSementara({ isAdult, bb, diagnosis });
    const rencanaEl = form.querySelector('[name="rencana_tindakan"]');
    if (rencanaEl && keepTerapi) {
      // Terapi sementara sudah ada (mungkin sudah direvisi dokter) -> dibiarkan.
    } else if (rencanaEl) {
      setValue(rencanaEl, mergeTerapiSementara(rencanaEl.value, terapi));
    } else {
      toast("AUTO SOAP: kolom Rencana tidak ditemukan; terapi hanya dimasukkan ke SOAP.");
    }
    console.log("[AUTO SOAP] terapi sementara", { isAdult, bb, diagnosis, terapi });

    // v3.10.0: kesadaran dari radio yang tercentang, atau dari data GADAR (1=CM ... 5=Koma).
    const KESADARAN = { 1: "Compos mentis", 2: "Apatis", 3: "Somnolen", 4: "Sopor", 5: "Koma" };
    const kesChecked = form.querySelector('[name="kesadaran"]:checked');
    const kesadaran = kesChecked
      ? ((kesChecked.closest("label") || kesChecked.parentElement)?.innerText || "").trim() || KESADARAN[kesChecked.value] || ""
      : KESADARAN[String(g.data.kesadaran || "").trim()] || "";

    const root = document.getElementById("modal_form_gadar") || modalRoot();
    return buildAndCopySoap(root, {
      noCopy: !!opts.returnOnly,
      kesadaran,
      plan: rencanaEl ? null : terapi.join("\n"),
      bb: bb,
      note: `${isAdult ? "Dewasa" : `Anak, BB ${bb} kg`} • terapi sementara diisi di Rencana. GADAR BELUM disimpan — tekan Simpan bila ingin disimpan.`
    });
  }

  async function buildAndCopySoap(root, extra = {}) {
    if (!root || root === document.body) {
      toast("AUTO SOAP: buka Assessment Gawat Darurat terlebih dahulu.");
      return;
    }

    const p = soapPatientHeader(root);

    const keluhan = soapClean(soapFieldValue(root, ["Keluhan Utama", "Keluhan"]));
    const rps = soapClean(soapFieldValue(root, ["Riwayat Penyakit Sekarang", "RPS"]));
    // v3.17.0: RPD (Riwayat Penyakit Dahulu, termasuk riwayat poli spesialis) ikut disalin; baris baru dipertahankan.
    const rpdDirect = root.querySelector?.('[name="riwayat_sakit_old"]')?.value;
    const rpd = soapClean(rpdDirect != null ? rpdDirect : soapFieldValue(root, ["Riwayat Penyakit Dahulu", "RPD"]));
    const kesadaran = extra.kesadaran || soapClean(soapFieldValue(root, ["Kesadaran"], true));
    const gcs = soapClean(soapFieldValue(root, ["Glasgow Coma Scale", "GCS", "Glosgow Coma"]));
    const td = soapVital(soapFieldValue(root, ["Tekanan Darah", "TD"]), "td");
    const nadi = soapVital(soapFieldValue(root, ["Nadi"]), "pulse");
    const napas = soapVital(soapFieldValue(root, ["Pernafasan", "Pernapasan", "Napas", "RR", "Frekuensi Napas"]), "rr");
    const suhu = soapVital(soapFieldValue(root, ["Suhu", "Temperature"]), "temp");
    const bb = extra.bb ? String(extra.bb) : soapVital(soapFieldValue(root, ["Berat", "Berat Badan", "BB"]), "bb");
    const fisik = soapClean(soapRawPhysicalExam(root));
    const diagnosis = soapClean(soapFieldValue(root, [
      "Diagnosis Kerja dan Diagnosis Banding", "Diagnosis", "Diagnosa"
    ]));
    // v3.10.0: baca kolom Rencana langsung lewat name (pertahankan baris baru), cadangan label lama.
    const rencanaDirect = root.querySelector?.('[name="rencana_tindakan"]')?.value;
    const plan = extra.plan || (rencanaDirect != null && String(rencanaDirect).trim()
      ? String(rencanaDirect).trim()
      : soapClean(soapFieldValue(root, [
        "Rencana (Tindakan, Terapi, dll)", "Rencana", "Terapi", "Penatalaksanaan"
      ])));

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
      `RPD: ${rpd || "-"}`,
      "",
      "*O :*",
      "*Tanda-tanda vital*",
      `Kesadaran: ${kesadaran || "-"}`,
      `GCS: ${gcs || "-"}`,
      `TD: ${td} mmHg`,
      `Nadi: ${/x\s*\//i.test(nadi) ? nadi : nadi + " x/menit"}`,
      `Napas: ${/x\s*\//i.test(napas) ? napas : napas + " x/menit"}`,
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

    window.__spLastSoap = soap;
    // v3.19.0: PAKET KONSUL hanya butuh teksnya (disalin & dimasukkan ke PDF oleh pemanggil).
    if (extra.noCopy) return soap;
    const copied = await copySoapText(soap);
    if (copied) {
      toast("AUTO SOAP berhasil dicopy. Silakan Paste di WhatsApp/Chat/EMR." + (extra.note ? " " + extra.note : ""));
      console.log("[AUTO SOAP] copied:\n" + soap);
    } else {
      // v3.10.0: clipboard ditolak (mis. halaman HTTP / jeda lama) -> tampilkan panel dengan tombol SALIN.
      showSoapCopyPanel(soap);
      toast("AUTO SOAP siap. Tekan tombol 📋 SALIN SOAP." + (extra.note ? " " + extra.note : ""));
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

  // v3.8.0: no RM dari alamat halaman (pasien_detail/<noreg>/<norm>/0).
  function getCurrentIgdNorm() {
    const m = location.pathname.match(/pasien_detail\/[^/]+\/([^/]+)/i);
    return m ? decodeURIComponent(m[1]) : null;
  }

  // v3.8.0: ambil id GADAR TANPA memindahkan tab (pindah tab bisa menghapus draft resep).
  // 1) dari daftar yang sudah tampil, 2) jika belum ada, GET content_gadar/<noreg>/<norm>
  //    (alamat yang sama yang dipakai tab Assesment GADAR), hanya dibaca.
  async function fetchGadarIds() {
    let ids = collectGadarIds();
    if (ids.length) return ids;
    const noreg = getCurrentIgdNoreg();
    const normRm = getCurrentIgdNorm();
    if (!noreg || !normRm) return [];
    try {
      const base = location.href.split("/soap_igd/")[0];
      const html = await spFetch(`${base}/soap_igd/content_gadar/${encodeURIComponent(noreg)}/${encodeURIComponent(normRm)}`, { credentials: "same-origin" }).then((r) => r.text());
      ids = [...html.matchAll(/update_gadar\('(\d+)'\)/g)].map((m) => Number(m[1]));
    } catch (err) {
      console.warn("[AUTO GADAR] gagal memuat daftar GADAR", err);
    }
    return ids;
  }

  // Data lengkap GADAR terakhir pada KUNJUNGAN INI (id_reg = noreg sekarang), atau null.
  async function getLatestGadarData() {
    const noreg = getCurrentIgdNoreg();
    let ids = await fetchGadarIds();
    if (!ids.length) return null;
    ids = [...new Set(ids)].sort((a, b) => b - a).slice(0, 5);
    const base = location.href.split("/soap_igd/")[0];
    for (const id of ids) {
      try {
        const res = await spFetch(`${base}/soap_igd/soap_gadar_edit/${id}`, { credentials: "same-origin" });
        if (!res.ok) continue;
        const data = await res.json();
        if (noreg && data.id_reg && String(data.id_reg) !== noreg) continue;
        return { data, idGadar: id };
      } catch (err) {
        console.warn("[AUTO GADAR] gagal membaca GADAR", id, err);
      }
    }
    return null;
  }

  async function getLatestGadarDiagnosis() {
    const g = await getLatestGadarData();
    if (!g) return null;
    const dx = String(g.data.diagnosa_banding || g.data.masalah_kesehatan || "").replace(/\s+/g, " ").trim();
    if (!dx || dx.toLowerCase() === "null") return null;
    return { diagnosis: dx, idGadar: g.idGadar, tanggal: g.data.gadar_date || "" };
  }

  async function spLoadAnamnesisInto(box) {
    if (!box) return;
    const clean = (v) => { const t = String(v ?? "").replace(/\r/g, "").trim(); return /^(null|undefined|-)$/i.test(t) ? "" : t; };
    let src = null, from = "";
    try {
      const form = document.getElementById("form_gadar");
      const modal = document.getElementById("modal_form_gadar");
      const val = (n) => form?.querySelector(`[name="${n}"]`)?.value || "";
      if (form && modal && modal.classList.contains("show") && (val("kel_utama") || val("riwayat_sakit_now"))) {
        src = { kel_utama: val("kel_utama"), riwayat_sakit_now: val("riwayat_sakit_now"), alergi_note: val("alergi_note"),
          diagnosa_banding: val("diagnosa_banding"), masalah_kesehatan: val("masalah_kesehatan") };
        from = "form GADAR yang sedang terbuka";
      } else {
        const g = await getLatestGadarData();
        if (g) { src = g.data; from = `GADAR ${clean(g.data.gadar_date) || "terakhir"}`; }
      }
    } catch (err) { console.warn("[KOMBINASI] anamnesis", err); }
    if (!box.isConnected) return null;
    if (!src) { box.textContent = "Assesment GADAR kunjungan ini belum ada / belum terbaca."; return null; }
    const ku = clean(src.kel_utama), rps = clean(src.riwayat_sakit_now), alergi = clean(src.alergi_note);
    const dx = clean(src.diagnosa_banding);
    box.innerHTML = "";
    const add = (label, text) => {
      if (!text) return;
      const d = document.createElement("div");
      d.style.cssText = "margin:2px 0 6px;";
      const b = document.createElement("b"); b.textContent = label + ": ";
      d.append(b, document.createTextNode(text));
      box.appendChild(d);
    };
    add("Keluhan utama", ku);
    add("RPS", rps || "-");
    add("Diagnosis", dx);
    add("⚠️ Alergi", alergi);
    const f = document.createElement("div");
    f.style.cssText = "font-size:11px;color:#777;";
    f.textContent = "Sumber: " + from;
    box.appendChild(f);
    // v3.37.0: teks untuk saran obat KOMBINASI RESEP.
    return [ku, rps, dx, clean(src.masalah_kesehatan)].filter(Boolean).join("\n");
  }

  // v3.8.2: BB hanya dari kolom "berat" GADAR (instruksi dokter), mis. "17 kg" -> 17.
  function parseGadarWeight(data) {
    const w = Number(String((data && data.berat) ?? "").replace(",", ".").replace(/[^0-9.]/g, ""));
    return Number.isFinite(w) && w > 0 && w < 300 ? w : null;
  }

  // v3.8.0: BB (kg) dari kolom "berat" GADAR terakhir kunjungan ini, atau null.
  async function getLatestGadarWeight() {
    try {
      const g = await getLatestGadarData();
      if (!g) return null;
      return parseGadarWeight(g.data);
    } catch (_) {
      return null;
    }
  }

  // =========================
  // v3.37.0: CPPT VISIT RAWAT INAP (instruksi dokter 5 Okt 2026) — hanya membaca (GET), tidak menyimpan.
  // Sumber: daftar CPPT `nurse_station/eranap/cppt_viewer/<noreg>` (terbaru di atas; baris CPPT / ASM AWAL,
  // PPA dokter atau perawat), GADAR kunjungan IGD (`soap_igd/content_gadar` + `soap_gadar_edit`), riwayat kunjungan.
  // =========================
  const SP_MONTHS = { january: 0, februari: 1, february: 1, maret: 2, march: 2, april: 3, mei: 4, may: 4,
    juni: 5, june: 5, juli: 6, july: 6, agustus: 7, august: 7, september: 8, oktober: 9, october: 9,
    november: 10, desember: 11, december: 11, januari: 0 };

  // "05 October 2026 14:16:39" / "04-10-2026" -> ms (NaN bila tidak terbaca).
  function spParseIdDate(text) {
    const s = String(text || "");
    let m = s.match(/(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
    if (m && SP_MONTHS[m[2].toLowerCase()] != null) {
      return new Date(+m[3], SP_MONTHS[m[2].toLowerCase()], +m[1], +(m[4] || 0), +(m[5] || 0), +(m[6] || 0)).getTime();
    }
    m = s.match(/(\d{1,2})-(\d{1,2})-(\d{4})/);
    return m ? new Date(+m[3], +m[2] - 1, +m[1]).getTime() : NaN;
  }

  function spIsDoctorPpa(ppa) {
    const p = String(ppa || "");
    if (/amd\.?\s*ke[bp]|s\.?\s*kep|\bns\.|bidan|perawat|s\.?\s*farm|apt\.|gizi|fisio/i.test(p)) return false;
    return /(^|[\s,])dr\.?(\s|,|$)|\bdr\.|\bsp\.?\s?[a-z]/i.test(p);
  }

  // Tanda vital dari teks bebas (CPPT perawat: "N 100x/menit, S 36,6C, RR 22", "suhu: 36,9 nadi 102", "TD 120/80").
  function spParseFreeVitals(text) {
    const t = String(text || "").replace(/\s+/g, " ");
    const out = {};
    let m = t.match(/\b(?:TD|tensi|tekanan darah)\s*[:=]?\s*(\d{2,3}\s*\/\s*\d{2,3})/i);
    if (m) out.td = m[1].replace(/\s+/g, "");
    m = t.match(/\b(?:nadi|HR|N)\s*[:=]?\s*(\d{2,3})(?!\s*[\/.,]\s*\d)/i);
    if (m && +m[1] >= 30 && +m[1] <= 250) out.nadi = m[1];
    m = t.match(/\b(?:suhu|temp|S|T)\s*[:=]?\s*(\d{2}(?:[.,]\d{1,2})?)\s*(?:°|C\b|\b)/i);
    if (m && +m[1].replace(",", ".") >= 34 && +m[1].replace(",", ".") <= 42.5) out.suhu = m[1].replace(".", ",");
    m = t.match(/\b(?:RR|nafas|napas|pernafasan|pernapasan|respirasi)\s*[:=]?\s*(\d{1,2})(?!\d)/i);
    if (m && +m[1] >= 6 && +m[1] <= 90) out.nafas = m[1];
    m = t.match(/\bGCS\s*[:=]?\s*(\d{1,2}\b|E\s*\d\s*V\s*\d\s*M\s*\d)/i);
    if (m) out.gcs = m[1].replace(/\s+/g, "");
    return out;
  }

  // Satu nilai kolom terstruktur ("* Nadi : 110x/m") -> nilai kolom form CPPT.
  function spCpptFieldValue(key, raw) {
    const v = String(raw || "").replace(/\s+/g, " ").trim();
    if (!v || /^[-.]$/.test(v)) return "";
    if (key === "nadi" || key === "nafas") { const n = v.match(/\d{1,3}/); return n ? n[0] : ""; }
    if (key === "suhu") { const n = v.match(/\d{2}(?:[.,]\d{1,2})?/); return n ? n[0].replace(".", ",") : ""; }
    if (key === "td") { const n = v.match(/\d{2,3}\s*\/\s*\d{2,3}/); return n ? n[0].replace(/\s+/g, "") : ""; }
    if (key === "kesadaran" && /^(cm|compos ?mentis)$/i.test(v)) return "Compos Mentis";
    return v;
  }

  const SP_CPPT_LABEL_KEY = [
    [/^kesadaran/i, "kesadaran"], [/^keadaan umum/i, "keadaan_umum"], [/^(tekanan darah|td)$/i, "td"],
    [/^gcs/i, "gcs"], [/^nadi/i, "nadi"], [/^suhu/i, "suhu"], [/^(pernafasan|pernapasan|respirasi|rr)$/i, "nafas"],
    [/^reaksi cahaya/i, "reaksi_cahaya"]
  ];

  // HTML cppt_viewer -> baris [{time, type, ppa, isDoctor, keluhan, objective, oText, fields}], terbaru dulu.
  function spParseCpptViewer(html) {
    const d = new DOMParser().parseFromString(String(html || ""), "text/html");
    const rows = [];
    for (const tr of d.querySelectorAll("table tbody tr")) {
      const tds = tr.children;
      if (tds.length < 3) continue;
      const head = (tds[0].textContent || "").replace(/\s+/g, " ").trim();
      const type = /ASM AWAL/i.test(head) ? "ASM AWAL" : /\bCPPT\b/i.test(head) ? "CPPT" : "";
      if (!type) continue; // baris obat/BHP dll. diabaikan
      const ppa = (tds[1].textContent || "").replace(/\s+/g, " ").trim();
      const sec = {};
      tds[2].querySelectorAll("h4").forEach((h) => {
        const k = (h.textContent || "").trim().toUpperCase();
        if (/^[SOAP]$/.test(k) && h.nextElementSibling) sec[k] = h.nextElementSibling;
      });
      const txt = (el) => (el ? (el.innerText || el.textContent || "") : "").replace(/\r/g, "").replace(/[ \t]+/g, " ")
        .split("\n").map((x) => x.trim()).filter(Boolean).join("\n").trim();
      let keluhan = "";
      if (sec.S) {
        const kids = [...sec.S.children];
        const i = kids.findIndex((c) => /^\s*keluhan utama\s*:?\s*$/i.test(c.textContent || ""));
        if (i >= 0 && kids[i + 1]) keluhan = txt(kids[i + 1]);
        if (!keluhan) {
          const m = txt(sec.S).match(/keluhan utama\s*:\s*([\s\S]*?)(?:\n?\s*riwayat penyakit sekarang\s*:|$)/i);
          if (m) keluhan = m[1].trim();
        }
      }
      const fields = {};
      let objective = "";
      if (sec.O) {
        [...sec.O.children].forEach((c) => {
          const t = txt(c);
          const m = t.match(/^\*\s*([^:]+?)\s*:\s*([\s\S]*)$/);
          if (m) {
            const hit = SP_CPPT_LABEL_KEY.find(([re]) => re.test(m[1].trim()));
            if (hit) { const v = spCpptFieldValue(hit[1], m[2]); if (v) fields[hit[1]] = v; }
          } else if (c.classList.contains("col-md-12") && t && !objective) {
            objective = t;
          }
        });
      }
      const oText = txt(sec.O);
      // v3.44.0: diagnosis (bagian A, "Diagnosa Medis dan Diagnosa Banding : J18.0 | BRONCHOPNEUMONIA;;;;").
      const diagnosis = txt(sec.A).replace(/diagnosa medis dan diagnosa banding\s*:/i, "").replace(/;+/g, "; ").replace(/(;\s*)+$/, "").trim();
      rows.push({
        time: spParseIdDate(head), timeText: head.replace(/\s*(CPPT|ASM AWAL)\s*$/i, ""), type, ppa,
        isDoctor: spIsDoctorPpa(ppa), keluhan, objective, oText, fields, diagnosis
      });
    }
    rows.sort((a, b) => (b.time || 0) - (a.time || 0));
    return rows;
  }

  // Pemeriksaan fisik dokter yang layak disalin (bukan isian asal seperti satu kata "pemfissqa").
  function spUsableObjective(text) {
    const t = String(text || "").trim();
    if (t.length < 8) return false;
    return /[:+\/]/.test(t) || t.split(/\s+/).length >= 3;
  }

  // Rencana CPPT VISIT dari daftar CPPT (fungsi murni, diuji di node).
  // keluhan: CPPT dokter terakhir yang berisi keluhan; vital: per kolom dari CPPT terakhir (dokter/perawat) yang memuatnya;
  // objective: pemeriksaan fisik CPPT dokter terakhir. Yang tidak ada -> null (diisi cadangan oleh pemanggil).
  function spPlanCpptVisitFromRows(rows) {
    const plan = { keluhan: null, keluhanFrom: "", objective: null, objectiveFrom: "", vitals: {}, vitalsFrom: {} };
    const label = (r) => `${r.type} ${r.timeText} (${r.ppa})`;
    const drKel = rows.find((r) => r.isDoctor && r.keluhan);
    if (drKel) { plan.keluhan = drKel.keluhan; plan.keluhanFrom = label(drKel); }
    const drObj = rows.find((r) => r.isDoctor && spUsableObjective(r.objective));
    if (drObj) { plan.objective = drObj.objective; plan.objectiveFrom = label(drObj); }
    for (const key of ["td", "nadi", "suhu", "nafas", "gcs", "kesadaran", "keadaan_umum", "reaksi_cahaya"]) {
      for (const r of rows) {
        const free = ["td", "nadi", "suhu", "nafas", "gcs"].includes(key) ? spParseFreeVitals(r.oText) : {};
        const v = r.fields[key] || free[key];
        if (v) { plan.vitals[key] = v; plan.vitalsFrom[key] = label(r); break; }
      }
    }
    plan.hasDoctorCppt = rows.some((r) => r.isDoctor);
    return plan;
  }

  // v3.44.0 (instruksi dokter 5 Okt 2026): keluhan CPPT VISIT dibuat SINGKAT (tidak terlihat salin-tempel):
  // ambil kata keluhan + statusnya saja ("Batuk berkurang, demam (-)"). fromAdmission = keluhan saat masuk IGD
  // (status "tidak ada" dibuang, hanya keluhan yang ada). strict = kembalikan "" bila tidak ada kata keluhan.
  const SP_KELUHAN_LEX = [
    [/nyeri ulu hati|epigastri\w*/, "nyeri ulu hati"],
    [/(nyeri|sakit) perut|perut (sakit|nyeri)|kolik/, "nyeri perut"],
    [/(nyeri|sakit) dada|dada (sakit|nyeri)/, "nyeri dada"],
    [/(nyeri|sakit) kepala|kepala (sakit|nyeri)|pusing|cephal\w*|sefal\w*/, "pusing"],
    [/(nyeri|sakit) (tenggorok\w*|menelan|telan)/, "nyeri tenggorokan"],
    [/(nyeri|sakit) (pinggang|punggung)/, "nyeri pinggang"],
    [/(nyeri|sakit) (sendi|lutut)/, "nyeri sendi"],
    [/(nyeri|sakit) (saat )?(bak|kencing)|anyang\w*/, "nyeri BAK"],
    [/(nyeri|sakit) (luka|bekas operasi|post op\w*)/, "nyeri luka"],
    [/muntaber/, "muntaber"],
    [/demam|panas badan|badan panas|febris|meriang/, "demam"],
    [/batuk/, "batuk"], [/pilek/, "pilek"], [/sesak( napas| nafas)?/, "sesak"],
    [/mual/, "mual"], [/muntah/, "muntah"],
    [/bab cair|diare|mencret|bab encer/, "BAB cair"],
    [/lemas|lemah|letih/, "lemas"], [/kembung|begah/, "kembung"],
    [/bengkak/, "bengkak"], [/gatal/, "gatal"], [/kejang/, "kejang"], [/mimisan|epistaksis/, "mimisan"],
    [/(nafsu makan|makan minum) (turun|menurun|berkurang|kurang)|tidak mau makan|sulit makan|susah makan/, "nafsu makan kurang"],
    [/nyeri|sakit/, "nyeri"]
  ];
  const SP_NEG_AFTER = /^\s*([a-z\/]+\s+)?(\(\s*-\s*\)|-(?!\s*\/)|tidak ada|tdk ada|tak ada|gak ada|ga ada|sudah tidak|sdh tidak|sudah hilang|hilang|negatif|\(neg)/;

  function spShortKeluhan(text, fromAdmission = false, strict = false) {
    const raw = String(text || "").replace(/\r/g, "").replace(/^\s*kel(uhan)?( utama)?\s*:\s*/i, "");
    const t = raw.toLowerCase();
    // 1) semua kata keluhan (yang lebih spesifik dulu; tidak tumpang tindih), 2) status = teks sesudahnya
    //    sampai pemisah klausa ATAU kata keluhan berikutnya (supaya "demam tak ada batuk ada" tidak tertukar).
    const hits = [];
    SP_KELUHAN_LEX.forEach(([re, name]) => {
      const g = new RegExp(re.source, "g");
      let m;
      while ((m = g.exec(t))) {
        const a = m.index, b = a + m[0].length;
        if (hits.some((h) => a < h.b && b > h.a)) continue;
        hits.push({ a, b, name });
      }
    });
    hits.sort((x, y) => x.a - y.a);
    hits.forEach((h, i) => {
      const next = i + 1 < hits.length ? hits[i + 1].a : t.length;
      // "naik turun" (pola demam) bukan "turun/berkurang".
      const after = t.slice(h.b, Math.min(next, h.b + 28)).split(/[\n,.;]|\bdan\b|\bserta\b/)[0].replace(/naik[\s-]*turun/g, "fluktuatif");
      const prevEnd = i > 0 ? hits[i - 1].b : 0;
      const before = t.slice(Math.max(prevEnd, h.a - 12), h.a);
      let st = "";
      if (/(tidak|tdk|tak|tanpa|bukan)\s*$/.test(before) || SP_NEG_AFTER.test(after)) st = "(-)";
      else if (/^\s*masih/.test(after)) st = "masih";
      else if (/berkurang|membaik|mendingan|reda|lebih baik|jarang|sedikit|turun/.test(after)) st = "berkurang";
      else if (/bertambah|memberat|makin|semakin|meningkat|sering/.test(after)) st = "bertambah";
      else if (/masih|\(\s*\+\s*\)|^\s*\+|^\s*ada/.test(after)) st = "masih";
      h.st = st;
    });
    // Keluhan berdempetan ("batuk pilek tidak ada", "mual/muntah (-)") memakai status keluhan sesudahnya.
    for (let i = hits.length - 2; i >= 0; i--) {
      if (!hits[i].st && /^\s*(\/|dan|&)?\s*$/.test(t.slice(hits[i].b, hits[i + 1].a))) hits[i].st = hits[i + 1].st;
    }
    const seen = new Set();
    let items = hits.filter((h) => !seen.has(h.name) && seen.add(h.name));
    if (fromAdmission) items = items.filter((h) => h.st !== "(-)").map((h) => ({ ...h, st: "" }));
    items = [...items.filter((h) => h.st !== "(-)"), ...items.filter((h) => h.st === "(-)")].slice(0, 4);
    let out = items.map((h) => (h.st ? `${h.name} ${h.st}` : h.name)).join(", ");
    if (!out && strict) return "";
    if (!out) out = raw.split(/[\n.;]/).map((x) => x.trim()).filter(Boolean)[0] || "";
    if (out.length > 60) out = out.slice(0, 60).replace(/[\s,]+\S*$/, "");
    return out ? out.charAt(0).toUpperCase() + out.slice(1) : "";
  }

  // v3.44.0 (instruksi dokter 5 Okt 2026): pemeriksaan fisik CPPT VISIT = template CPPT Normal, hanya bagian yang
  // kemungkinan positif diubah (sedikit, tidak selengkap pemeriksaan spesialis). Sumber, urut prioritas:
  // 1) pemeriksaan dokter sebelumnya (CPPT dokter terbaru dulu, lalu GADAR IGD) — bila tanda ditulis +/− itu yang dipakai;
  // 2) diagnosis (CPPT dokter / GADAR) bila tanda belum pernah ditulis.
  // exam = kata kunci di teks pemeriksaan; bare = kata yang berarti POSITIF walau tanpa tanda +/- ("crackles", "faring
  // hiperemis", "konjungtiva anemis"); dx = diagnosis yang menyiratkan tanda positif.
  const SP_PEMFIS_SIGNS = {
    ANEMIA: { exam: /konjungtiva anemis|\banemis\b|\bca\b/, bare: /anemis/, dx: /anemia|anemis/, label: "konjungtiva anemis" },
    IKTERIK: { exam: /sklera ikterik|\bikterik\b|\bsi\b/, bare: /ikterik/, dx: /hepatitis|ikterus|ikterik|kolestasis|kolangitis|koledokolitiasis|sirosis/, label: "sklera ikterik" },
    FARING: { exam: /faring hiperemis|faring\s*:\s*hiperemis/, bare: /hiperemis/, dx: /faringit|tonsilit|tonsilofaringit/, label: "faring hiperemis" },
    RONKI: { exam: /\b(rh|rhonki|ronki|ronkhi|ro|rod|crackles|carckles|crakles|krepitasi|slem)\b|(paru|pulmo|thorax|th)\s*:?\s*lendir/, bare: /crackles|carckles|crakles|krepitasi/, dx: /pneumoni|\bbp\b|bronko?pneumoni|bronchopneumonia|bronkitis|bronchitis|tb paru|tuberkulosis|edema paru|\bchf\b|gagal jantung|decomp/, label: "ronki" },
    WHEEZING: { exam: /\b(wh|wheezing|wheez)\b/, dx: /asma|asthma|\bppok\b|\bcopd\b|bronkiolitis|bronchiolitis|wheez/, label: "wheezing" },
    RETRAKSI: { exam: /\bretraksi\b/, dx: null, label: "retraksi" },
    BU_UP: { exam: /(bu|bising usus)\s*(\+\s*)?(meningkat|meningka|↑|naik)/, dx: /\bgea\b|gastroenteritis|diare|disentri|muntaber/, label: "BU meningkat", examPositiveOnly: true },
    NTE: { exam: /\bnte\b|nyeri tekan epigastri\w*|\bnt epigastri\w*|\bny(eri)? epigastri\w*/, bare: /epigastri/, dx: /dispepsia|dyspepsia|gastritis|\bgerd\b|ulkus peptik|tukak|epigastri/, label: "nyeri tekan epigastrium" },
    MCBURNEY: { exam: /ma?c ?burney/, dx: /apendisitis|appendicitis|appendisitis/, label: "nyeri tekan McBurney" },
    CVA: { exam: /(nyeri ketok cva|\bnk cva\b|\bcva\b)/, dx: /pielonefritis|pyelonephritis|nefrolitiasis|urolitiasis|batu (ginjal|ureter)|kolik renal|hidronefrosis/, label: "nyeri ketok CVA" },
    EDEMA: { exam: /\b(edema|oedem\w*)\b(?!\s*paru)/, dx: /\bchf\b|gagal jantung|\bckd\b|gagal ginjal|sindrom nefrotik|nephrotic|anasarka|hipoalbumin/, label: "edema" },
    LOKAL: { exam: /hiperemis lokal|fluktuasi/, bare: /hiperemis lokal|fluktuasi/, dx: /selulitis|cellulitis|abses|erisipelas/, label: "hiperemis & edema lokal" }
  };

  // Nilai tanda setelah kata kunci: {pos:true/false, side:"+/+"} atau null bila tidak ditulis.
  function spSignValue(text, a, b) {
    const before = text.slice(Math.max(0, a - 14), a);
    const after = text.slice(b, b + 16);
    if (/(tak|tidak|tdk|tanpa)(\s+ada)?\s*$/.test(before)) return { pos: false };
    if (/^\s*(d?an|&|\/)\s*(wh|wheez\w*)\s*-/.test(after)) return { pos: false }; // "ro dan wh-"
    let m = after.match(/^\s*[:=]?\s*\(?\s*([+-])\s*\/\s*([+-])/);
    if (m) return { pos: m[1] === "+" || m[2] === "+", side: `${m[1]}/${m[2]}` };
    if (/^\s*[:=]?\s*\(?\s*\+/.test(after)) return { pos: true };
    if (/^\s*[:=]?\s*\(?\s*-/.test(after)) return { pos: false };
    if (/^\s*[:=]?\s*(ada|positif|basah|kasar|halus|minimal|bilateral|\(\+\))/.test(after)) return { pos: true };
    if (/^\s*[:=]?\s*(tak|tidak|tdk|negatif|\(-\))/.test(after)) return { pos: false };
    return null;
  }

  function spPemfisFromContext({ exams = [], dx = "" } = {}, template) {
    const found = {};
    const why = [];
    const dxText = String(dx || "").toLowerCase();
    for (const [key, sg] of Object.entries(SP_PEMFIS_SIGNS)) {
      let val = null;
      for (const ex of exams) {
        const t = String(ex || "").toLowerCase();
        const re = new RegExp(sg.exam.source, "g");
        let m, v = null;
        while ((m = re.exec(t))) {
          v = sg.examPositiveOnly ? { pos: true } : spSignValue(t, m.index, m.index + m[0].length);
          if (!v && sg.bare && sg.bare.test(m[0])) v = { pos: true };
          if (v) break;
        }
        if (v) { val = { ...v, from: "pemeriksaan sebelumnya" }; break; }
      }
      if (!val && sg.dx && sg.dx.test(dxText)) val = { pos: true, from: "diagnosis" };
      if (val && val.pos) { found[key] = val; why.push(`${sg.label} (${val.from})`); }
    }
    const side = (k, d = "+/+") => (found[k] && found[k].side && found[k].side.includes("+") ? found[k].side : d);
    let t = String(template || "");
    if (found.ANEMIA) t = t.replace(/\bca\s*[-+]\s*\/\s*[-+]/, `ca ${side("ANEMIA")}`);
    if (found.IKTERIK) t = t.replace(/\bsi\s*[-+]\s*\/\s*[-+]/, `si ${side("IKTERIK")}`);
    if (found.FARING) t = t.replace(/^(Kep:[^\n]*)/m, "$1, faring hiperemis +");
    if (found.RONKI) t = t.replace(/\brh\s*[-+]\s*\/\s*[-+]/, `rh ${side("RONKI")}`);
    if (found.WHEEZING) t = t.replace(/\bwh\s*[-+]\s*\/\s*[-+]/, `wh ${side("WHEEZING")}`);
    if (found.RETRAKSI) t = t.replace(/\bretraksi\s*-/, "retraksi +");
    if (found.BU_UP) t = t.replace(/\bbu\s*\+(?!\s*meningkat)/, "bu + meningkat");
    if (found.NTE) t = t.replace(/\bnte\s*-/, "nte +");
    if (found.MCBURNEY) t = t.replace(/^(Abd:[^\n]*)/m, "$1, nt McBurney +");
    if (found.CVA) t = t.replace(/^(Abd:[^\n]*)/m, "$1, nyeri ketok CVA +");
    if (found.EDEMA) t = t.replace(/^(Ext:[^\n]*)/m, `$1, edema ${side("EDEMA")}`);
    if (found.LOKAL) t = t.replace(/^(Ext:[^\n]*)/m, "$1, hiperemis & edema lokal +");
    return { text: t, positives: why };
  }

  // Template pemfis CPPT Normal (sama dengan CPPT_NORMAL_TEMPLATE.objective di menu).
  const CPPT_NORMAL_TEMPLATE_FISIK = (TEMPLATES.NORMAL && TEMPLATES.NORMAL.fisik)
    ? TEMPLATES.NORMAL.fisik
    : "Kep: ca -/-, si -/-\nTh: rh -/-, wh -/-, retraksi -, murmur -\nAbd: bu +, soefl, nte -\nExt: akral hangat, crt 2 detik";

  // Alamat dasar Smartplus ("http://host/smartplus") dari halaman mana pun.
  function spSmartplusBase() {
    const m = location.href.match(/^(.*?\/smartplus)(?=\/|$)/i);
    return m ? m[1] : location.href.split("/erm_ranap")[0];
  }

  function spRanapContext() {
    const noreg = (location.pathname.match(/main_content\/([^/?#]+)/i) || [])[1] || null;
    const base = spSmartplusBase();
    const html = document.documentElement.innerHTML;
    const normRm = (html.match(/history_pasien_list\/(\w+)/) || html.match(/soap_eresep\/add_new\/[^/]+\/(\w+)/) || [])[1] || null;
    return { noreg: noreg && decodeURIComponent(noreg), normRm, base };
  }

  function spCleanGadarText(v) {
    const t = String(v ?? "").replace(/\r/g, "").replace(/^\s*kel(uhan)?\s*:\s*/i, "").trim();
    return /^(null|undefined|-)$/i.test(t) ? "" : t;
  }

  // GADAR kunjungan IGD pasien rawat inap: No.Reg sama (IGD -> ranap), bila tidak ada -> kunjungan UGD terakhir
  // di riwayat kunjungan maks. 3 hari sebelum masuk. null bila tidak ada.
  async function spFetchAdmissionGadar(ctx) {
    if (!ctx.noreg || !ctx.normRm) return null;
    const get = (u) => spFetch(ctx.base + u, { credentials: "same-origin" });
    const listHtml = await get(`/soap_igd/content_gadar/${encodeURIComponent(ctx.noreg)}/${encodeURIComponent(ctx.normRm)}`).then((r) => r.text());
    const ids = [...new Set([...listHtml.matchAll(/update_gadar\('(\d+)'\)/g)].map((m) => Number(m[1])))].sort((a, b) => b - a).slice(0, 8);
    if (!ids.length) return null;
    const wanted = [ctx.noreg];
    try {
      const h = await get(`/history_pasien/history_pasien_list/${encodeURIComponent(ctx.normRm)}`).then((r) => r.text());
      const d = new DOMParser().parseFromString(h, "text/html");
      const visits = [...d.querySelectorAll("tbody tr")].map((tr) => [...tr.children].map((td) => (td.textContent || "").trim()))
        .filter((c) => c.length >= 4);
      const admit = visits.find((c) => c[1] === ctx.noreg);
      const admitTime = admit ? spParseIdDate(admit[2]) : NaN;
      visits.filter((c) => /UGD|IGD/i.test(c[3]) && c[1] !== ctx.noreg).forEach((c) => {
        const t = spParseIdDate(c[2]);
        if (Number.isFinite(admitTime) && Number.isFinite(t) && t <= admitTime && admitTime - t <= 3 * 864e5) wanted.push(c[1]);
      });
    } catch (err) { console.warn("[CPPT VISIT] riwayat kunjungan", err); }
    for (const id of ids) {
      try {
        const data = await get(`/soap_igd/soap_gadar_edit/${id}`).then((r) => r.json());
        if (data && wanted.includes(String(data.id_reg))) return { data, idGadar: id };
      } catch (_) {}
    }
    return null;
  }

  // Rencana lengkap CPPT VISIT (keluhan, objective, vital + sumbernya). Tidak menyentuh form.
  // v3.45.0: ctxIn = { noreg, normRm, base } untuk pasien lain (MULTIPLE VISIT); kosong = pasien halaman ini.
  async function spBuildCpptVisitPlan(ctxIn = null) {
    const ctx = ctxIn || spRanapContext();
    if (!ctx.noreg) throw new Error("No. registrasi rawat inap tidak terbaca dari alamat halaman.");
    const html = await spFetch(`${ctx.base}/nurse_station/eranap/cppt_viewer/${encodeURIComponent(ctx.noreg)}`, { credentials: "same-origin" }).then((r) => r.text());
    const rows = spParseCpptViewer(html);
    const plan = spPlanCpptVisitFromRows(rows);
    // GADAR IGD saat masuk: keluhan (pasien baru), pemeriksaan fisik & diagnosis awal (bahan pemfis v3.44.0).
    let gadar = null;
    try { gadar = await spFetchAdmissionGadar(ctx); } catch (err) { console.warn("[CPPT VISIT] GADAR", err); }
    let fromAdmission = false;
    // v3.44.0: pakai CPPT dokter terakhir yang benar-benar berisi kata keluhan (lewati isian seperti "menulis advis DPJP").
    const junkKeluhan = plan.keluhan;
    const drKel = rows.find((r) => r.isDoctor && r.keluhan && spShortKeluhan(r.keluhan, false, true));
    if (drKel) { plan.keluhan = drKel.keluhan; plan.keluhanFrom = `${drKel.type} ${drKel.timeText} (${drKel.ppa})`; }
    else plan.keluhan = null;
    if (!plan.keluhan) {
      const ku = gadar ? spCleanGadarText(gadar.data.kel_utama) : "";
      const nurseAsm = rows.find((r) => r.type === "ASM AWAL" && r.keluhan);
      if (ku) { plan.keluhan = ku; plan.keluhanFrom = `Assesment GADAR IGD ${spCleanGadarText(gadar.data.gadar_date)}`; fromAdmission = true; }
      else if (nurseAsm) { plan.keluhan = nurseAsm.keluhan; plan.keluhanFrom = `ASM AWAL ${nurseAsm.timeText} (${nurseAsm.ppa})`; fromAdmission = true; }
      else if (junkKeluhan) plan.keluhan = junkKeluhan;
    }
    // v3.44.0: keluhan dipersingkat (kata keluhan + status), bukan salinan utuh.
    if (plan.keluhan) {
      plan.keluhanAsli = plan.keluhan;
      plan.keluhan = spShortKeluhan(plan.keluhan, fromAdmission) || plan.keluhan;
    }
    // v3.44.0: pemfis = template CPPT Normal + bagian positif dari pemeriksaan dokter sebelumnya / diagnosis.
    const drRows = rows.filter((r) => r.isDoctor);
    const exams = drRows.slice(0, 3).map((r) => r.objective).filter(Boolean);
    if (gadar) exams.push(spCleanGadarText(gadar.data.cek_fisik));
    const dx = [...drRows.slice(0, 3).map((r) => r.diagnosis), gadar ? spCleanGadarText(gadar.data.diagnosa_banding) : ""]
      .filter(Boolean).join("; ");
    const pf = spPemfisFromContext({ exams, dx }, CPPT_NORMAL_TEMPLATE_FISIK);
    plan.objective = pf.text;
    plan.objectiveFrom = pf.positives.length ? `normal + ${pf.positives.join(", ")}` : "template normal";
    plan.dx = dx;
    plan.rowCount = rows.length;
    return plan;
  }

  // =========================
  // v3.45.0: MULTIPLE VISIT / MULTIPLE PULANG (instruksi dokter 5 Okt 2026)
  // Pilih banyak pasien rawat inap -> CPPT sementara dibuat & ditampilkan (bisa diedit) -> "Save multiple ..." menyimpan
  // CPPT tiap pasien (DIIZINKAN dokter 5 Okt 2026: simpan setelah dokter menekan tombol Save multiple).
  // Simpan = isi form Smartplus `erm_ranap/add_cppt/<noreg>` (GET) persis seperti tombol Simpan aslinya
  // ($.post(action, form.serialize()), tgl_pengkajian = hari ini) lalu POST ke action `act_asm_ranap/<noreg>/<norm>`,
  // kemudian dicek ulang di daftar CPPT (cppt_viewer). Tidak ada percobaan ulang otomatis (cegah CPPT dobel).
  // =========================
  let spRanapListCache = null;

  // Daftar pasien dirawat dari halaman e-Ranap: [{ noreg, normRm, name, kamar, noKamar, bed, kelas, dx, dokter }].
  async function spFetchRanapPatients(base, force = false) {
    if (!force && spRanapListCache && Date.now() - spRanapListCache.at < 120000) return spRanapListCache.list;
    const html = await spFetch(`${base}/erm_ranap`, { credentials: "same-origin" }).then((r) => r.text());
    const d = new DOMParser().parseFromString(html, "text/html");
    const list = [];
    for (const tr of d.querySelectorAll("table tbody tr")) {
      const td = [...tr.children];
      const link = tr.querySelector('a[href*="main_content/"]');
      if (!link || td.length < 8) continue;
      const noreg = (link.getAttribute("href").match(/main_content\/([^/?#]+)/) || [])[1];
      const dp = td[5];
      const ids = (dp.textContent.match(/([0-9]{4}SA[0-9]+)\s*\/\s*([0-9]+)/i) || []);
      list.push({
        noreg, normRm: ids[2] || "",
        name: (dp.querySelector("b")?.textContent || dp.textContent).replace(/\s+/g, " ").trim(),
        noKamar: td[1].textContent.trim(), kamar: td[2].textContent.trim(), bed: td[3].textContent.trim(), kelas: td[4].textContent.trim(),
        dx: td[6].textContent.replace(/\s+/g, " ").trim(), dokter: td[7].textContent.replace(/\s+/g, " ").trim()
      });
    }
    spRanapListCache = { at: Date.now(), list };
    return list;
  }

  // Umur (bulan) dari halaman pasien rawat inap ("... / P / 1 Thn 5 Bln 0 Hr"). null bila tidak terbaca.
  async function spFetchRanapAgeMonths(base, noreg) {
    try {
      const html = await spFetch(`${base}/erm_ranap/main_content/${encodeURIComponent(noreg)}`, { credentials: "same-origin" }).then((r) => r.text());
      const t = new DOMParser().parseFromString(html, "text/html").body.textContent.replace(/\s+/g, " ");
      const m = t.match(/(\d+)\s*Thn\s*(\d+)\s*Bln/i);
      return m ? Number(m[1]) * 12 + Number(m[2]) : null;
    } catch (_) {
      return null;
    }
  }

  const SP_CPPT_SAVE_FIELDS = ["keluhan_utama", "objective", "kesadaran", "keadaan_umum", "td", "gcs", "nadi", "suhu", "nafas", "reaksi_cahaya", "p_instruksi"];

  function spTodayIso() {
    const n = new Date();
    return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
  }

  // Simpan satu CPPT dokter baru lewat form Smartplus (sama dengan tombol Simpan asli). values = isian SP_CPPT_SAVE_FIELDS.
  async function spCpptSaveDirect(base, noreg, values) {
    const html = await spFetch(`${base}/erm_ranap/add_cppt/${encodeURIComponent(noreg)}`, { credentials: "same-origin" }).then((r) => r.text());
    const d = new DOMParser().parseFromString(html, "text/html");
    const form = d.querySelector("form#frm_cppt_ri_dokter");
    if (!form) throw new Error("form CPPT Smartplus tidak termuat (sesi login habis?)");
    const action = form.getAttribute("action") || "";
    // Pengaman: form harus form CPPT baru (insert) untuk No.Reg pasien ini.
    if (!/\/erm_ranap\/act_asm_ranap\//.test(action) || !action.includes(`/${noreg}/`)) throw new Error("alamat simpan form tidak sesuai pasien");
    const fld = (n) => form.querySelector(`[name="${n}"]`);
    if ((fld("sql_command")?.value || "") !== "insert" || (fld("kategori")?.value || "") !== "CPPT" || (fld("id_asmri")?.value || "") !== "") {
      throw new Error("form bukan CPPT baru");
    }
    fld("tgl_pengkajian") && (fld("tgl_pengkajian").value = spTodayIso()); // datepicker Smartplus: setDate(new Date())
    for (const k of SP_CPPT_SAVE_FIELDS) {
      const el = fld(k);
      if (!el) throw new Error(`kolom ${k} tidak ada di form`);
      el.value = String(values[k] ?? "");
    }
    const body = new URLSearchParams();
    for (const [k, v] of new FormData(form)) body.append(k, String(v).replace(/\r?\n/g, "\r\n")); // = jQuery serialize
    // Di halaman asli, kotak gambar & e-resep dimuat ke DALAM form sehingga ikut terkirim (kosong / nilai bawaan).
    // Ditambahkan sama persis supaya kiriman identik dengan tombol Simpan asli (dibandingkan 5 Okt 2026).
    const extra = { urlblob: "", crr5: "0", crr7: "0", id_reg_set_5r7r: noreg, frm_id_fa: "", frm_jenis_obat: "", frm_qty: "",
      nama_racikan: "", jumlah_tpl: "", dosis_tpl: "", frekwensi_tpl: "", tme_tpl: "", note_tpl: "" };
    for (const [k, v] of Object.entries(extra)) if (!body.has(k)) body.append(k, v);
    const res = await spFetch(action, {
      method: "POST", credentials: "same-origin",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Requested-With": "XMLHttpRequest" },
      body: body.toString()
    });
    const text = await res.text();
    if (!res.ok) throw new Error(`Smartplus menjawab ${res.status}`);
    return text;
  }

  // CPPT dokter yang baru tersimpan (sejak sinceMs, keluhan sama) di daftar CPPT pasien, atau null.
  async function spCpptFindSaved(base, noreg, sinceMs, keluhan) {
    const html = await spFetch(`${base}/nurse_station/eranap/cppt_viewer/${encodeURIComponent(noreg)}`, { credentials: "same-origin" }).then((r) => r.text());
    const want = norm(keluhan);
    const me = spLoggedDoctorName(); // v3.46.0: harus CPPT dokter yang login (bukan CPPT dokter lain dengan keluhan sama)
    return spParseCpptViewer(html).find((r) => r.type === "CPPT" && r.isDoctor && (r.time || 0) >= sinceMs - 180000 &&
      norm(r.keluhan) === want && (!me || spIsMyPpa(r.ppa, me))) || null;
  }

  // Nama dokter login cocok dengan PPA? (minimal 2 kata nama > 2 huruf).
  function spIsMyPpa(ppa, doctorName) {
    const words = String(doctorName || "").toLowerCase().split(/[\s,.]+/).filter((w) => w.length > 2);
    const p = String(ppa || "").toLowerCase();
    return words.length >= 2 && words.filter((w) => p.includes(w)).length >= Math.min(2, words.length);
  }

  async function runAutoLabFebris() {
    // v3.4.0: cek diagnosis GADAR terakhir dulu.
    toast("AUTO LAB: mengecek diagnosis Assesment GADAR terakhir...");
    const gadarDx = await getLatestGadarDiagnosis();
    const labDiagnosis = gadarDx ? gadarDx.diagnosis : "febris";
    console.log("[AUTO LAB] diagnosis dipakai:", labDiagnosis, gadarDx);

    toast("AUTO LAB: membuka Order Lab...");
    await ensureMainEmrTab();

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

    // v3.46.0 (audit): daftar pemeriksaan dimuat lewat AJAX — tunggu dulu (dulu langsung dicentang; bila belum
    // termuat, "Hema rutin" gagal tetapi Save tetap ditekan -> order tanpa pemeriksaan).
    await waitFor(() => root.querySelectorAll('input[type="checkbox"]').length > 5 && /hema\s*rutin/i.test(root.textContent || ""), 6000);

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

    const dxNote = gadarDx
      ? ` Diagnosis dari GADAR terakhir: "${labDiagnosis}".`
      : ` ⚠️ GADAR kunjungan ini tidak ditemukan, diagnosis memakai "febris".`;

    // v3.46.0 (audit): jangan Save bila ada isian yang gagal (sama seperti order radiologi), supaya order lab tidak
    // terkirim setengah jadi.
    if (fail.length) {
      toast("AUTO LAB BELUM disimpan." + dxNote + " Cek manual lalu Save: " + fail.join(", "));
      console.warn("[AUTO LAB] Field gagal:", fail);
      return;
    }

    // Beri waktu form memproses checkbox sebelum Save.
    await recipeSleep(500);

    if (!clickVisibleTextWithin(root, ["Save"])) fail.push("Save");

    if (fail.length) {
      toast("AUTO LAB selesai sebagian." + dxNote + " Perlu cek manual: " + fail.join(", "));
      console.warn("[AUTO LAB] Field gagal:", fail);
    } else {
      toast(
        needsGlucoseSewaktu
          ? "AUTO LAB selesai. Hema rutin + Glukosa Sewaktu dipilih (usia >39 tahun), dan Save ditekan." + dxNote
          : "AUTO LAB selesai. Hema rutin dipilih, dan Save ditekan." + dxNote
      );
      console.log("[AUTO LAB] selesai", {
        age: patientAgeYears,
        glukosaSewaktu: needsGlucoseSewaktu
      });
    }
  }

  // =========================
  // v3.26.0 (instruksi dokter): AUTO LAB SEVERE = Kreatinin + Elektrolit (NA / K / CI) + Analisa gas darah,
  // untuk pasien sakit berat. Checkbox dipilih berdasarkan value yang PERSIS (bukan "Kreatinin Clereance" /
  // "Elektrolit urin"). Diagnosis dari GADAR terakhir.
  // v3.27.0 (instruksi dokter): cek lab 1 minggu terakhir (riwayat hasil lab, termasuk yang hasilnya belum keluar);
  // pemeriksaan yang SUDAH ada tidak dipesan lagi, lalu Save otomatis. Bila riwayat lab gagal dibaca -> tidak Save.
  // =========================
  const SP_LAB_SEVERE = [
    { key: "kreatinin", value: "Kreatinin", label: "Kreatinin" },
    { key: "elektrolit", value: "NA / K / CI", label: "Elektrolit (Na/K/Cl)" },
    { key: "agd", value: "Analisa gas darah", label: "Analisa gas darah" }
  ];

  // Nama baris/kelompok hasil lab -> kunci pemeriksaan severe (konteks urin diabaikan).
  function spSevereKeyOf(name, context) {
    const n = String(name || ""), ctx = String(context || "");
    if (/urin/i.test(n) || /urin/i.test(ctx)) return null;
    if (/^kreatinin\b/i.test(n) && !/cle?a?rance|clereance/i.test(n)) return "kreatinin";
    if (/natrium|kalium|klorida|chlorid|sodium|potassium|elektrolit|^na\b|^k\b|^cl\b|^na\s*\/\s*k/i.test(n)) return "elektrolit";
    if (/gas\s*darah|\bAGD\b|\bBGA\b|pco2|p\s*co2|po2|p\s*o2|hco3|sao2|base\s*excess|^be\b/i.test(n)) return "agd";
    return null;
  }

  async function spSevereLabsDoneLastWeek() {
    const base = smartplusBaseUrl();
    const noreg = getCurrentNoregAny();
    if (!noreg) throw new Error("No. registrasi tidak terbaca");
    const { recent } = spPickRecentEntries(await spFetchLabEntries(base, noreg), SP_LAB_WINDOW);
    const done = {};
    const sheets = await Promise.all(recent.map((e) =>
      spFetch(`${base}/hasil_lab/hasil_lab/print_hasil_labx_by_id_sample/${encodeURIComponent(e.idSample)}/${encodeURIComponent(e.noreg)}`, { credentials: "same-origin" })
        .then((r) => { if (!r.ok) throw new Error("lab " + r.status); return r.text(); }).then(spParseLabSheet)));
    recent.forEach((e, i) => {
      let section = "", group = "";
      for (const r of sheets[i].rows) {
        if (r.type === "section") { section = r.name; group = ""; }
        else if (r.type === "group") group = r.name;
        const k = spSevereKeyOf(r.name, section + " " + (r.type === "item" ? group : ""));
        if (k && !done[k]) done[k] = e.dateText;
      }
    });
    return done;
  }

  async function runAutoLabSevere() {
    toast("AUTO LAB SEVERE: mengecek lab 1 minggu terakhir & diagnosis GADAR...");
    let done = null;
    const [doneRes, gadarDx] = await Promise.all([
      spSevereLabsDoneLastWeek().then((d) => d, (err) => { console.warn("[AUTO LAB SEVERE] riwayat lab", err); return null; }),
      getLatestGadarDiagnosis()
    ]);
    done = doneRes;
    const todo = done ? SP_LAB_SEVERE.filter((t) => !done[t.key]) : SP_LAB_SEVERE;
    const skipped = done ? SP_LAB_SEVERE.filter((t) => done[t.key]).map((t) => `${t.label} (${done[t.key]})`) : [];
    if (done && !todo.length) {
      toast("AUTO LAB SEVERE: semua sudah diperiksa dalam 1 minggu terakhir — tidak ada order. " + skipped.join(", "));
      return;
    }
    const labDiagnosis = gadarDx ? gadarDx.diagnosis : "";
    toast("AUTO LAB SEVERE: membuka Order Lab...");
    await ensureMainEmrTab();
    const labTab = document.getElementById("a_labmodal");
    if (labTab && visible(labTab)) labTab.click();
    else if (!clickVisibleText(["Order Lab"])) { toast("AUTO LAB SEVERE: tombol Order Lab tidak ditemukan."); return; }
    await recipeSleep(700);
    let labTambah = null;
    for (let i = 0; i < 30 && !labTambah; i++) {
      labTambah = [...document.querySelectorAll('#box_labmodal button[onclick*="indexlab"]')].find(visible) || null;
      if (!labTambah) await recipeSleep(100);
    }
    if (!labTambah) { toast("AUTO LAB SEVERE: tombol + TAMBAH Order Lab tidak ditemukan."); return; }
    labTambah.click();
    const root = await waitForVisibleLabModal(5000, 100);
    if (!root) { toast("AUTO LAB SEVERE: form Order Lab tidak ditemukan."); return; }
    // Checkbox dimuat lewat AJAX: tunggu sampai daftar pemeriksaan ada.
    await waitFor(() => root.querySelector('input[type="checkbox"][value="Analisa gas darah"]'), 5000);

    const fail = [];
    if (labDiagnosis) {
      if (!setLabFieldByNearbyText(root, ["Diagnosis / Keterangan Klinis", "Diagnosis", "Keterangan Klinis"], labDiagnosis)) fail.push("Diagnosis");
    } else fail.push("Diagnosis (GADAR kunjungan ini tidak ditemukan)");
    if (!setLabFieldByNearbyText(root, ["Indikasi Klinis", "Indikasi"], "dx")) fail.push("Indikasi Klinis");
    for (const t of todo) {
      const cb = [...root.querySelectorAll('input[type="checkbox"]')].find((c) => String(c.value).trim().toLowerCase() === t.value.toLowerCase());
      if (!cb) { fail.push(t.label); continue; }
      if (!cb.checked) { try { cb.click(); } catch (_) {} fire(cb); }
      if (!cb.checked) fail.push(t.label);
    }
    const ordered = todo.map((t) => t.label).join(", ");
    const skipNote = skipped.length ? ` Tidak dipesan (sudah ada ≤1 minggu): ${skipped.join(", ")}.` : "";
    const dxNote = gadarDx ? ` Diagnosis: "${labDiagnosis}".` : "";
    // Save hanya bila riwayat lab berhasil dicek dan semua isian berhasil.
    if (!done) {
      toast(`AUTO LAB SEVERE: ${ordered} dipilih.${dxNote} ⚠️ Riwayat lab 1 minggu gagal dibaca — BELUM disimpan, cek lalu Save manual.`);
    } else if (fail.length) {
      toast(`AUTO LAB SEVERE sebagian. Cek manual: ${fail.join(", ")}.${skipNote}${dxNote} BELUM disimpan.`);
    } else {
      await recipeSleep(500);
      const saved = clickVisibleTextWithin(root, ["Save"]);
      toast(`AUTO LAB SEVERE: ${ordered}${saved ? " dipesan, Save ditekan." : " dipilih, tombol Save tidak ditemukan — Save manual."}${skipNote}${dxNote}`);
    }
    console.log("[AUTO LAB SEVERE]", { labDiagnosis, done, todo: todo.map((t) => t.key), fail });
  }

  // =========================
  // v3.28.0 (instruksi dokter): REVIEW GADAR 24 JAM
  // Pasien IGD status DONE atas nama dokter yang login, 24 jam ke belakang dari pasien terakhir terdaftar.
  // Per pasien dibandingkan Assesment GADAR terakhir kunjungan itu dengan yang benar-benar dilakukan:
  //  - Resep Online UGD kunjungan itu: obat/alat NON-ORAL -> tindakan (suntik, nebu, infus, jahit, NGT, dll.)
  //  - Order Lab & Order Radiologi kunjungan itu.
  // Yang belum tertulis ditambahkan ke "Rencana (Tindakan, Terapi, dll)"; pemeriksaan penunjang yang dilakukan
  // ditambahkan ke "Pemeriksaan Penunjang". Obat oral tidak ditulis. Isi lama tidak dihapus.
  // Simpan memakai form GADAR Smartplus sendiri (halaman pasien di iframe tersembunyi: update_gadar -> ubah 2 kolom
  // -> POST soap_gadar_edit_act seperti tombol Save), lalu hasil dicek ulang (kolom lain tidak berubah).
  // GADAR terakhir yang dibuat dokter lain tidak diubah.
  // =========================
  // Tindakan HANYA dari daftar resep tindakan (MASTER_RECIPE_TEMPLATES.TINDAKAN), ditulis dengan nama tindakan lengkap
  // (tanpa singkatan, instruksi dokter 3 Okt 2026). Obat/alat di luar daftar tidak ditulis.
  const spTitle = (t) => String(t || "").toLowerCase().replace(/(^|[\s(/+-])([a-z])/g, (m, p, c) => p + c.toUpperCase());
  const SP_REVIEW_SUNTIK = [
    { name: "Ranitidin", item: /RANITIDIN INJ/i, re: /ranit/i },
    { name: "Ketorolac", item: /KETOROLAC INJ/i, re: /ketorol/i },
    { name: "Ondansetron", item: /ONDANSETRON INJ/i, re: /ondan/i }
  ];
  const SP_REVIEW_TINDAKAN = [
    { text: "Penjahitan luka (hecting)", item: /BENANG|SILKAM|T-SILK|VICRYL|CATGUT|NYLON/i, re: /penjahitan|jahit luka/i },  // v3.29.0: "hecting" saja belum dianggap ditulis lengkap
    { text: "Intubasi", item: /\bETT\b|ENDOTRACHEAL/i, re: /intubas/i },
    { text: "Pemasangan kateter urin", item: /FOLEY CATHETER|KATETER URIN/i, re: /kateter|cateter|catheter|\bdc\b|dower/i },
    { text: "Pemasangan NGT", item: /\bNGT\b/i, re: /\bngt\b/i },
    { text: "Vasokonstriktor (norepinefrin)", item: /NOREPH|NOREPI/i, re: /norepi|vasokons|vascon/i }
  ];
  // v3.30.0 (instruksi dokter 4 Okt 2026), selain daftar resep tindakan:
  //  - Nebulisasi + nama obat ("Nebulisasi Farbivent + Sonide").
  //  - Obat suntik/bolus non-oral di luar daftar -> "Inj. <Nama>" tanpa dosis/rute. Antibiotik/obat drip & obat infus tidak ditulis.
  //  - Jahit: "Anestesi lokal Lidocain", "Inj. Tetagam"/ATS ditulis terpisah.
  //  - Cairan infus -> "IVFD RL"/"IVFD NaCl 0,9%"; IV catheter tanpa cairan -> "Pasang IV line"; nasal kanul/masker -> "O2 nasal kanul".
  const SP_REVIEW_DRIP = /\bCEF|CEFT|CEFO|AMPICIL|AMOXI|MEROPEN|LEVOFLOX|CIPROF|METRONID|GENTAMI|AZITHRO|VANCOM|CLINDA|INFUS|INFUSION|DRIP|OTSU|\bNS\b|NACL/i;
  const spCleanDrug = (n) => spTitle(String(n).replace(/\*/g, "").replace(/\s*\b(INJ(EKSI)?|INJECTION|AMP(UL)?)\b.*$/i, "").replace(/\s+\d.*$/, "").trim());
  // Hasil: { add: [belum tertulis], have: [terdeteksi & sudah tertulis] } (have ditampilkan di laporan).
  function spReviewTindakan(items, rencana) {
    const names = items.map((x) => String(x.obat || "").replace(/\*/g, "").trim());
    const add = [], have = [];
    const put = (text, re) => (re.test(rencana) ? have : add).push(text);
    const used = SP_REVIEW_SUNTIK.filter((s) => names.some((n) => s.item.test(n)));
    if (used.length) (used.every((s) => s.re.test(rencana)) ? have : add).push("Suntik " + used.map((s) => s.name).join(" + "));
    const nebu = names.filter((n) => /COMBIVENT|FARBIVENT|NEBULE|\bUDV\b|SONIDE|PULMICORT|VENTOLIN/i.test(n));
    if (nebu.length) put("Nebulisasi " + [...new Set(nebu.map((n) => spTitle(n.replace(/\s*(NEBULES?|UDV|RESPULES?)\b.*$/i, "").replace(/\s+\d.*$/, ""))))].join(" + "), /nebu/i);
    for (const t of SP_REVIEW_TINDAKAN) if (names.some((n) => t.item.test(n))) put(t.text, t.re);
    const hecting = names.some((n) => SP_REVIEW_TINDAKAN[0].item.test(n));
    // Obat suntik lain (bolus)
    const injSeen = new Set();
    for (const n of names) {
      if (!/\bINJ|INJEKSI|INJECTION/i.test(n) || SP_REVIEW_DRIP.test(n)) continue;
      if (SP_REVIEW_SUNTIK.some((s) => s.item.test(n)) || /NOREPH|NOREPI/i.test(n)) continue;
      const base = spCleanDrug(n);
      if (!base || injSeen.has(base.toLowerCase())) continue;
      injSeen.add(base.toLowerCase());
      const stem = new RegExp(base.split(/\s+/)[0].slice(0, 5).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      if (/LIDOCA/i.test(n)) put(hecting ? "Anestesi lokal Lidocain" : "Inj. Lidocain", /lidoca/i);
      else put("Inj. " + base, /tetagam/i.test(n) ? /tetagam|\bats\b/i : /dexameth|deksameth/i.test(n) ? /dexa|deksa/i : /valisanbe|diazepam/i.test(n) ? /diazep|valis/i : stem);
    }
    // Cairan infus / IV line / O2
    const fluids = [...new Set(names.filter((n) => /^INFUS\s+(RL|NACL|D5|D10|ASERING|KA-?EN|TUTOFUSIN|RINGER)|^(RL|ASERING|RINGER)\b/i.test(n) && !/OTSU|100\s*ML/i.test(n))
      .map((n) => /RL\b|RINGER/i.test(n) ? "RL" : /NACL/i.test(n) ? "NaCl 0,9%" : /D10/i.test(n) ? "D10%" : /D5/i.test(n) ? "D5%" : /ASERING/i.test(n) ? "Asering" : spTitle(n.replace(/^INFUS\s*/i, "").replace(/\s+\d.*$/, ""))))];
    fluids.forEach((f) => put("IVFD " + f, f === "RL" ? /\brl\b|ringer/i : f.startsWith("NaCl") ? /nacl|\bns\b|normal saline/i : new RegExp(f.slice(0, 3).replace(/[.*+?^${}()|[\]\\%]/g, "\\$&"), "i")));
    if (!fluids.length && names.some((n) => /IV CATH|ABOCATH|VEINFLON/i.test(n))) put("Pasang IV line", /iv ?line|infus|ivfd|abocath|iv cath/i);
    if (names.some((n) => /NASAL CAN|\bNRM\b|SIMPLE MASK|REBREATH|MASKER O2|OKSIGEN/i.test(n))) put("O2 nasal kanul", /\bo2\b|oksigen|oxygen|nasal|\bnrm\b|lpm/i);
    return { add, have };
  }
  // v3.29.0: Smartplus menyimpan baris baru sebagai \r\n; textarea memakai \n -> selalu dibandingkan setelah dinormalkan.
  const spNl = (t) => String(t ?? "").replace(/\r\n?/g, "\n");
  const spSameText = (a, b) => spNl(a).replace(/\s+$/, "") === spNl(b).replace(/\s+$/, "");

  // "Hema rutin (Hb,Ht,Leu,tr),Glukosa Sewaktu,," -> ["Hema rutin (Hb,Ht,Leu,tr)", "Glukosa Sewaktu"]
  function spSplitOrderList(s) {
    const out = []; let cur = "", depth = 0;
    for (const ch of String(s || "")) {
      if (ch === "(") depth++;
      if (ch === ")") depth = Math.max(0, depth - 1);
      if (ch === "," && !depth) { if (cur.trim()) out.push(cur.trim()); cur = ""; } else cur += ch;
    }
    if (cur.trim()) out.push(cur.trim());
    return out;
  }
  function spReviewLabItem(name) {
    const n = String(name);
    if (/hema rutin|darah rutin/i.test(n)) return { text: "Hema rutin", re: /darah rutin|darah lengkap|hema|\bdpl\b|\bcbc\b/i  /* "dr" tidak dipakai: bentrok dengan "dr. (nama dokter)" */ };
    if (/hema lengkap|darah lengkap/i.test(n)) return { text: "Darah lengkap", re: /darah lengkap|hema lengkap|\bdpl\b/i };
    if (/glukosa sewaktu/i.test(n)) return { text: "GDS", re: /\bgds\b|gula darah|glukosa/i };
    if (/^kreatinin$/i.test(n)) return { text: "Kreatinin", re: /kreatinin|fungsi ginjal|\brft\b/i };
    if (/ureum/i.test(n)) return { text: "Ureum", re: /ureum|\bbun\b|fungsi ginjal/i };
    if (/NA \/ K \/ CI/i.test(n)) return { text: "Elektrolit (Na/K/Cl)", re: /elektrolit|natrium|\bna\b/i };
    if (/gas darah/i.test(n)) return { text: "AGD", re: /\bagd\b|gas darah|\bbga\b/i };
    const t = n.replace(/\s*\(.*\)\s*$/, "").replace(/[*^]/g, "").trim();
    return { text: t, re: new RegExp(t.split(/\s+/)[0].slice(0, 6).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") };
  }
  function spReviewRadItem(order) {
    const parts = spSplitOrderList(order).map((p) => p.replace(/[*^]/g, "").trim());
    const kontras = parts.find((p) => /KONTRAS/i.test(p));
    const main = parts.filter((p) => !/KONTRAS/i.test(p));
    let text = main.join(" ") + (kontras ? " " + kontras.toLowerCase() : "");
    let re;
    if (/thorax|thoraks/i.test(text)) re = /thorax|thoraks|toraks|\bcxr\b|ro dada|rontgen dada/i;
    else if (/^CT/i.test(text)) re = /\bct\b|ct[- ]?scan|msct/i;
    else if (/USG/i.test(text)) re = /\busg\b|ultrasono/i;
    else re = new RegExp(main[0] ? main[0].split(/\s+/)[0].slice(0, 6).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : "zzzz", "i");
    if (!/^(CT|USG|MRI|MSCT)/i.test(text)) text = "Ro " + text;
    return { text: text.replace(/\s+/g, " ").trim(), re };
  }

  const spReviewDoc = (h) => new DOMParser().parseFromString(h, "text/html");
  const spReviewTs = (s) => { const m = String(s || "").match(/(\d{2})-(\d{2})-(\d{4})\s+(\d{2}):(\d{2})/); return m ? new Date(`${m[3]}-${m[2]}-${m[1]}T${m[4]}:${m[5]}:00`).getTime() : 0; };

  function spLoggedDoctorName() {
    const li = [...document.querySelectorAll("li.nav-label, .nav-label, .user-name, .profile-name")]
      .map((e) => e.textContent.replace(/\s+/g, " ").trim()).find((t) => /^dr\b/i.test(t));
    return li ? li.replace(/^dr\.?\s*/i, "").replace(/,.*$/, "").trim() : "";
  }

  async function spReviewCollectPatients(base, doctorName) {
    const key = doctorName.toLowerCase().split(/\s+/).filter((w) => w.length > 2);
    const rows = [];
    let latest = 0;
    for (let off = 0; off <= 900; off += 15) {
      const d = spReviewDoc(await spFetch(`${base}/soap_igd/pasien_igd_list${off ? "/" + off : ""}`, { credentials: "same-origin" }).then((r) => r.text()));
      const t = [...d.querySelectorAll("table")].find((x) => /Regdate/i.test(x.textContent));
      if (!t) break;
      const page = [...t.rows].slice(1).map((r) => {
        const c = [...r.cells].map((x) => x.textContent.replace(/\s+/g, " ").trim());
        const m = (r.querySelector('a[href*="pasien_detail"]')?.getAttribute("href") || "").match(/pasien_detail\/([^/]+)\/([^/]+)/);
        return m ? { noreg: m[1], norm: m[2], nama: c[1] || "", reg: c[3] || "", ts: spReviewTs(c[3]), dok: c[5] || "", st: c[8] || "" } : null;
      }).filter(Boolean);
      if (!page.length) break;
      if (!latest) latest = Math.max(...page.map((p) => p.ts));
      rows.push(...page);
      if (Math.min(...page.map((p) => p.ts)) < latest - 86400000) break;
    }
    return { latest, patients: rows.filter((p) => p.ts >= latest - 86400000 && /done/i.test(p.st) && key.length && key.every((w) => p.dok.toLowerCase().includes(w))) };
  }

  async function spReviewAnalyze(base, p) {
    const out = { ...p, add: [], addPen: [], have: [], flags: [] };
    const cg = await spFetch(`${base}/soap_igd/content_gadar/${encodeURIComponent(p.noreg)}/${encodeURIComponent(p.norm)}`, { credentials: "same-origin" }).then((r) => r.text());
    const ids = [...new Set([...cg.matchAll(/update_gadar\('(\d+)'\)/g)].map((m) => +m[1]))].sort((a, b) => b - a);
    for (const id of ids) {
      const j = await spFetch(`${base}/soap_igd/soap_gadar_edit/${id}`, { credentials: "same-origin" }).then((r) => r.json()).catch(() => null);
      if (j && String(j.id_reg) === p.noreg) { out.gadar = j; out.idGadar = id; break; }
    }
    if (!out.gadar) { out.flags.push("Assesment GADAR kunjungan ini tidak ditemukan"); return out; }
    // Resep Online UGD kunjungan ini (riwayat resep pasien, 24 jam sejak daftar)
    const rr = spReviewDoc(await spFetch(`${base}/soap_eresep/riwayat_resep/${encodeURIComponent(p.noreg)}`, { credentials: "same-origin" }).then((r) => r.text()));
    const items = [];
    for (const a of rr.querySelectorAll('[onclick*="load_resep_detail"]')) {
      const c = [...(a.closest("tr")?.cells || [])].map((x) => x.textContent.replace(/\s+/g, " ").trim());
      const ts = spReviewTs(c[0] || a.textContent);
      if (!/UGD|IGD/i.test(c[1] || "") || ts < p.ts - 60000 || ts > p.ts + 86400000) continue;
      const id = (a.getAttribute("onclick").match(/'(\d+)'/) || [])[1];
      const d = spReviewDoc(await spFetch(`${base}/soap_eresep/inner_resep_detail/${id}`, { credentials: "same-origin" }).then((r) => r.text()));
      [...d.querySelectorAll("tr")].slice(1).map((tr) => [...tr.cells].map((x) => x.textContent.replace(/\s+/g, " ").trim()))
        .filter((x) => x.length >= 4 && x[0] && !/oral/i.test(x[1])).forEach((x) => items.push({ obat: x[0], jenis: x[1], jml: x[2], dosis: x[3] }));
    }
    const rows = (h) => [...spReviewDoc(h).querySelectorAll("tr")].slice(1).map((tr) => [...tr.cells].map((x) => x.textContent.replace(/\s+/g, " ").trim())).filter((x) => x.length >= 6);
    const labOrders = rows(await spFetch(`${base}/lab/splab/lab_modal_lad/${encodeURIComponent(p.noreg)}`, { credentials: "same-origin" }).then((r) => r.text())).map((x) => x[3]);
    const radOrders = rows(await spFetch(`${base}/rad/radiologi/rad_modal_lad/${encodeURIComponent(p.noreg)}`, { credentials: "same-origin" }).then((r) => r.text())).map((x) => x[3]);

    const rencana = spNl(out.gadar.rencana_tindakan || "");
    const pen = spNl(out.gadar.penunjang || "");
    const td = spReviewTindakan(items, rencana);
    out.add.push(...td.add);
    out.have.push(...td.have);
    // Penunjang
    const labs = []; const labSeen = new Set();
    labOrders.flatMap(spSplitOrderList).map(spReviewLabItem).forEach((l) => { if (!labSeen.has(l.text)) { labSeen.add(l.text); labs.push(l); } });
    const rads = []; const radSeen = new Set();
    radOrders.map(spReviewRadItem).forEach((r) => { if (r.text !== "Ro" && !radSeen.has(r.text)) { radSeen.add(r.text); rads.push(r); } });
    labs.filter((l) => l.re.test(rencana)).forEach((l) => out.have.push(l.text));
    rads.filter((r) => r.re.test(rencana)).forEach((r) => out.have.push(r.text));
    const labMissR = labs.filter((l) => !l.re.test(rencana)).map((l) => l.text);
    if (labMissR.length) out.add.push("Cek lab: " + labMissR.join(", "));
    rads.filter((r) => !r.re.test(rencana)).forEach((r) => out.add.push(r.text));
    const labMissP = labs.filter((l) => !l.re.test(pen)).map((l) => l.text);
    const radMissP = rads.filter((r) => !r.re.test(pen)).map((r) => r.text);
    if (labMissP.length) out.addPen.push("Lab: " + labMissP.join(", "));
    if (radMissP.length) out.addPen.push("Radiologi: " + radMissP.join(", "));
    // Tertulis "Darah rutin" tetapi tidak ada order lab -> kalimat itu dihapus (instruksi dokter).
    const dropDR = (t) => t.replace(/(^|[\r\n]+|\s+)(cek\s+)?darah rutin\.?(?=\s|$)/gi, "$1").replace(/^[ \t]+|[ \t]+$/gm, "").replace(/^\s+/, "");
    let rBase = rencana, pBase = pen;
    if (!labs.length) {
      // Hanya diproses bila memang ada tulisan "darah rutin" (tidak merapikan spasi teks lain).
      if (/darah rutin/i.test(rencana)) rBase = dropDR(rencana);
      if (/darah rutin/i.test(pen)) pBase = dropDR(pen);
      if (rBase !== rencana || pBase !== pen) out.flags.push("\"Darah rutin\" dihapus (tidak ada order lab)");
    }
    // v3.30.0 (instruksi dokter): isian otomatis diletakkan PALING ATAS, isi lama di bawahnya.
    out.newRencana = out.add.length ? out.add.join("\n") + (rBase.trim() ? "\n" + rBase.replace(/^\s+/, "") : "") : rBase;
    out.newPen = out.addPen.length ? out.addPen.join("\n") + (pBase.trim() ? "\n" + pBase.replace(/^\s+/, "") : "") : pBase;
    out.oldRencana = rencana;
    out.oldPen = pen;
    out.changed = !spSameText(out.newRencana, rencana) || !spSameText(out.newPen, pen);
    return out;
  }

  // Simpan lewat form GADAR Smartplus di halaman pasien (iframe tersembunyi).
  // v3.35.0: lebih tahan — tunggu tombol tab GADAR siap, klik ulang, bila perlu muat isi tab (content_gadar) sendiri;
  // pesan alert/confirm halaman dicatat dan ikut ditampilkan bila gagal.
  async function spReviewSave(base, r) {
    const fr = document.createElement("iframe");
    // v3.36.0: iframe tidak lagi di luar layar (Chrome bisa menahan frame di luar layar di komputer lambat);
    // diletakkan di belakang halaman, transparan, tidak bisa diklik.
    fr.style.cssText = "position:fixed;left:0;top:0;width:1200px;height:900px;border:0;opacity:0.01;pointer-events:none;z-index:-1;";
    fr.src = `${base}/soap_igd/pasien_detail/${encodeURIComponent(r.noreg)}/${encodeURIComponent(r.norm)}/0`;
    const dlg = [];
    const diag = () => {
      let w = null; try { w = fr.contentWindow; } catch (_) {}
      const d = w && w.document;
      const bits = [];
      try { if (w && !/pasien_detail/i.test(w.location.pathname)) bits.push("halaman dialihkan ke " + w.location.pathname); } catch (_) {}
      try { if (d && !d.getElementById("new_gadar")) bits.push("tab Assesment GADAR tidak ada"); } catch (_) {}
      if (dlg.length) bits.push("pesan Smartplus: \"" + dlg.slice(-2).join(" | ").slice(0, 160) + "\"");
      return bits.length ? " [" + bits.join("; ") + "]" : "";
    };
    document.documentElement.appendChild(fr);
    try {
      await new Promise((res, rej) => { fr.onload = res; setTimeout(() => rej(new Error("halaman pasien tidak termuat")), 30000); });
      const w = fr.contentWindow;
      w.alert = (m) => { dlg.push(String(m)); }; w.confirm = (m) => { dlg.push(String(m)); return false; };
      const getForm = () => w.document.getElementById("form_gadar");
      await waitFor(() => w.document.getElementById("new_gadar") && w.jQuery, 15000, 200);
      let form = null;
      for (let i = 0; i < 3 && !form; i++) {
        w.document.getElementById("new_gadar")?.click();
        form = await waitFor(getForm, 8000, 200);
      }
      if (!form && w.jQuery) {
        // Isi tab GADAR dimuat sendiri (endpoint yang sama dengan klik tab).
        const host = w.document.getElementById("box_gadar");
        if (host) {
          await new Promise((res) => w.jQuery(host).load(`${base}/soap_igd/content_gadar/${encodeURIComponent(r.noreg)}/${encodeURIComponent(r.norm)}`, () => res()));
          form = await waitFor(getForm, 10000, 200);
        }
      }
      if (!form || typeof w.update_gadar !== "function" || !w.jQuery) throw new Error("form GADAR tidak termuat" + diag());
      w.update_gadar(r.idGadar);
      const ok = await waitFor(() => form.querySelector('[name="id_gadar"]').value === String(r.idGadar) &&
        spSameText(form.querySelector('[name="rencana_tindakan"]').value, r.gadar.rencana_tindakan || ""), 15000, 200);
      if (!ok) throw new Error("data GADAR tidak termuat ke form" + diag());
      const $ = w.jQuery;
      $(form).find('[name="rencana_tindakan"]').val(r.newRencana);
      $(form).find('[name="penunjang"]').val(r.newPen);
      await new Promise((res, rej) => $.ajax({ type: "POST", url: `${base}/soap_igd/soap_gadar_edit_act/${encodeURIComponent(r.noreg)}`, data: $(form).serialize(), dataType: "JSON", success: res, error: (x) => rej(new Error("simpan gagal " + x.status)) }));
      const after = await spFetch(`${base}/soap_igd/soap_gadar_edit/${r.idGadar}`, { credentials: "same-origin" }).then((x) => x.json());
      const changed = Object.keys(r.gadar).filter((k) => !/^(rencana_tindakan|penunjang|created|creator|updated|updator)$/.test(k) && String(r.gadar[k] ?? "") !== String(after[k] ?? ""));
      if (!spSameText(after.rencana_tindakan, r.newRencana) || !spSameText(after.penunjang, r.newPen)) throw new Error("hasil simpan tidak sesuai");
      return { ok: true, changed };
    } finally {
      fr.remove();
    }
  }

  // v3.35.0: simpan LANGSUNG tanpa membuka halaman pasien (cadangan bila form GADAR di halaman pasien tidak termuat).
  // Form GADAR Smartplus diambil dari isi tab GADAR pasien itu, diisi dari data GADAR yang tersimpan, lalu dikirim ke
  // endpoint yang sama dengan tombol Save. PENGAMAN: sebelum mengirim, setiap kolom GADAR yang ada di form dicek harus
  // sama persis dengan data tersimpan (hanya Rencana yang berubah). Bila ada kolom yang tidak bisa dipastikan sama -> batal.
  const SP_GADAR_META = /^(id_gadar|rencana_tindakan|penunjang|created|creator|updated|updator)$/;
  const spGadarKey = (n) => String(n || "").replace(/\[\]$/, "");
  const spGadarNorm = (v) => spNl(v).replace(/\s+/g, " ").trim();
  const spGadarSet = (v) => spGadarNorm(v).split(/\s*[,;|]\s*/).filter(Boolean).sort().join(",");
  function spGadarControls(form) {
    return [...form.querySelectorAll("input[name],select[name],textarea[name]")]
      .filter((el) => !el.disabled && !/^(file|submit|button|reset|image)$/i.test(el.type || ""));
  }
  function spGadarSerialize(form) {
    const out = [];
    for (const el of spGadarControls(form)) {
      const t = (el.type || "").toLowerCase();
      if ((t === "checkbox" || t === "radio") && !el.checked) continue;
      if (el.tagName === "SELECT" && el.multiple) { [...el.options].filter((o) => o.selected).forEach((o) => out.push([el.name, o.value])); continue; }
      out.push([el.name, el.value]);
    }
    return out;
  }
  function spGadarFill(form, j) {
    for (const el of spGadarControls(form)) {
      const k = spGadarKey(el.name);
      if (!Object.prototype.hasOwnProperty.call(j, k)) continue;
      const v = j[k] == null ? "" : String(j[k]);
      const t = (el.type || "").toLowerCase();
      const parts = spGadarNorm(v).split(/\s*[,;|]\s*/);
      if (t === "checkbox") el.checked = parts.includes(spGadarNorm(el.value)) || spGadarNorm(v) === spGadarNorm(el.value);
      else if (t === "radio") el.checked = spGadarNorm(v) === spGadarNorm(el.value);
      else if (el.tagName === "SELECT" && el.multiple) [...el.options].forEach((o) => { o.selected = parts.includes(spGadarNorm(o.value)); });
      else el.value = v;
    }
  }
  async function spGadarDirectSave(base, r) {
    const parse = (h) => new DOMParser().parseFromString(h, "text/html");
    const findForm = (d) => d.getElementById("form_gadar") ||
      [...d.querySelectorAll("form")].find((f) => f.querySelector('[name="rencana_tindakan"]') && f.querySelector('[name="id_gadar"]'));
    let form = findForm(parse(await spFetch(`${base}/soap_igd/content_gadar/${encodeURIComponent(r.noreg)}/${encodeURIComponent(r.norm)}`, { credentials: "same-origin" }).then((x) => x.text())));
    if (!form) form = findForm(parse(await spFetch(`${base}/soap_igd/pasien_detail/${encodeURIComponent(r.noreg)}/${encodeURIComponent(r.norm)}/0`, { credentials: "same-origin" }).then((x) => x.text())));
    if (!form) throw new Error("form GADAR tidak ditemukan untuk simpan langsung");
    spGadarFill(form, r.gadar);
    const setVal = (n, v) => { const el = form.querySelector(`[name="${n}"]`); if (!el) throw new Error(`kolom ${n} tidak ada di form`); el.value = v; };
    setVal("id_gadar", String(r.idGadar));
    setVal("rencana_tindakan", r.newRencana);
    setVal("penunjang", r.newPen);
    const pairs = spGadarSerialize(form);
    // Pengaman: kolom lain harus terkirim sama persis dengan yang tersimpan.
    const posted = new Map();
    pairs.forEach(([n, v]) => { const k = spGadarKey(n); posted.set(k, [...(posted.get(k) || []), v]); });
    const names = new Set(spGadarControls(form).map((el) => spGadarKey(el.name)));
    const bad = Object.keys(r.gadar).filter((k) => names.has(k) && !SP_GADAR_META.test(k)).filter((k) => {
      const want = r.gadar[k] == null ? "" : String(r.gadar[k]);
      const got = (posted.get(k) || []).join(",");
      return spGadarNorm(got) !== spGadarNorm(want) && spGadarSet(got) !== spGadarSet(want);
    });
    if (bad.length) throw new Error("simpan langsung dibatalkan supaya kolom lain tidak berubah (" + bad.slice(0, 6).join(", ") + ")");
    const res = await spFetch(`${base}/soap_igd/soap_gadar_edit_act/${encodeURIComponent(r.noreg)}`, {
      method: "POST", credentials: "same-origin",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Requested-With": "XMLHttpRequest", Accept: "application/json, text/javascript, */*; q=0.01" },
      body: new URLSearchParams(pairs).toString(),
    });
    if (!res.ok) throw new Error("simpan langsung gagal " + res.status);
    const after = await spFetch(`${base}/soap_igd/soap_gadar_edit/${r.idGadar}`, { credentials: "same-origin" }).then((x) => x.json());
    const changed = Object.keys(r.gadar).filter((k) => !/^(rencana_tindakan|penunjang|created|creator|updated|updator)$/.test(k) && String(r.gadar[k] ?? "") !== String(after[k] ?? ""));
    if (!spSameText(after.rencana_tindakan, r.newRencana)) throw new Error("hasil simpan langsung tidak sesuai");
    return { ok: true, changed, direct: true };
  }

  // v3.35.0 (instruksi dokter: "tetap masukkan, apapun yang terjadi"): ADVIS disimpan walau GADAR baru diubah orang lain /
  // halaman pasien sedang dibuka di tempat lain. Tiap percobaan membaca GADAR TERBARU dulu; bila isinya sudah berubah sejak
  // kotak dibuka, tambahan dokter disambungkan di bawah versi terbaru (isian orang lain tidak hilang).
  function spAdvisMerge(cur, baseText, mine) {
    const nb = spNl(baseText).replace(/\s+$/, ""), nm = spNl(mine).replace(/\s+$/, "");
    let add;
    if (nm.startsWith(nb)) add = nm.slice(nb.length);
    else {
      const left = new Map();
      nb.split("\n").map((x) => x.trim()).filter(Boolean).forEach((x) => left.set(x, (left.get(x) || 0) + 1));
      add = nm.split("\n").filter((x) => { const t = x.trim(); if (t && left.get(t)) { left.set(t, left.get(t) - 1); return false; } return true; }).join("\n");
    }
    add = add.replace(/^\s*\n/, "").replace(/^\n+/, "").replace(/\s+$/, "");
    if (!add.trim()) return spNl(cur);
    const curLines = new Set(spNl(cur).split("\n").map((x) => x.trim()).filter(Boolean));
    if (add.split("\n").map((x) => x.trim()).filter(Boolean).every((x) => curLines.has(x))) return spNl(cur);
    const c = spNl(cur).replace(/\s+$/, "");
    return c + (c.trim() ? "\n\n" : "") + add;
  }

  async function spAdvisForceSave(base, p, baseText, mine, onStatus) {
    let lastErr = null;
    const errs = [];
    for (let attempt = 1; attempt <= 4; attempt++) {
      const g = await spAdvisLatestGadar(base, p);
      if (!g) throw new Error("Assesment GADAR kunjungan ini tidak ditemukan");
      const cur = spNl(g.gadar.rencana_tindakan || "");
      const merged = !spSameText(cur, baseText);
      const target = merged ? spAdvisMerge(cur, baseText, mine) : spNl(mine).replace(/\s+$/, "");
      if (spSameText(target, cur)) return { ok: true, changed: [], already: true, merged, rencana: cur, g };
      const r = { ...p, gadar: g.gadar, idGadar: g.idGadar, newRencana: target, newPen: spNl(g.gadar.penunjang || "") };
      try {
        // Ganjil: lewat form halaman pasien (cara normal). Genap: simpan langsung (cadangan).
        const sres = attempt % 2 ? await spReviewSave(base, r) : await spGadarDirectSave(base, r);
        return { ...sres, merged, rencana: target, g };
      } catch (err) {
        lastErr = err;
        errs.push(`${attempt}. ${err.message || err}`);
        if (onStatus) onStatus(`⏳ Percobaan ${attempt} gagal (${err.message || err}). Mencoba cara lain...`);
        await recipeSleep(800 * attempt);
      }
    }
    const e = new Error(errs.join(" · "));
    e.cause = lastErr;
    throw e;
  }

  // v3.36.0: REVIEW GADAR di komputer IGD sempat "form GADAR tidak termuat" untuk semua pasien. Sekarang: coba lewat form
  // halaman pasien; bila gagal, baca ulang GADAR terbaru — bila Rencana/Penunjang belum diubah orang lain sejak review,
  // simpan langsung (spGadarDirectSave, dengan pengaman kolom lain harus sama); bila sudah berubah -> berhenti (minta review ulang).
  async function spReviewRobustSave(base, r) {
    const errs = [];
    for (let attempt = 1; attempt <= 3; attempt++) {
      const g = await spAdvisLatestGadar(base, r);
      if (!g) throw new Error("Assesment GADAR kunjungan ini tidak ditemukan");
      if (String(g.idGadar) !== String(r.idGadar)) throw new Error("ada GADAR baru sejak review — jalankan REVIEW ulang");
      const curR = spNl(g.gadar.rencana_tindakan || ""), curP = spNl(g.gadar.penunjang || "");
      if (spSameText(curR, r.newRencana) && spSameText(curP, r.newPen)) return { ok: true, changed: [], already: true };
      if (!spSameText(curR, r.oldRencana) || !spSameText(curP, r.oldPen)) throw new Error("GADAR baru diubah orang lain sejak review — jalankan REVIEW ulang");
      const rr = { ...r, gadar: g.gadar };
      try {
        return attempt === 2 ? await spGadarDirectSave(base, rr) : await spReviewSave(base, rr);
      } catch (err) {
        errs.push(`${attempt}. ${err.message || err}`);
        await recipeSleep(700 * attempt);
      }
    }
    throw new Error(errs.join(" · "));
  }

  async function runReviewGadar() {
    const base = smartplusBaseUrl();
    const doctor = spLoggedDoctorName();
    const PANEL_ID = "sp-review-gadar-panel";
    document.getElementById(PANEL_ID)?.remove();
    const panel = document.createElement("div");
    panel.id = PANEL_ID;
    panel.style.cssText = "position:fixed;inset:4vh 50% auto auto;transform:translateX(50%);z-index:2147483647;background:#fff;border:2px solid #e91e63;border-radius:12px;padding:12px;width:min(94vw,820px);max-height:90vh;overflow:auto;box-shadow:0 8px 30px rgba(0,0,0,.35);font:13px/1.45 sans-serif;color:#222;";
    const head = document.createElement("div");
    head.className = "sp-panel-head";
    head.style.cssText = "position:sticky;top:-12px;background:#fff;padding:6px 0 8px;border-bottom:1px solid #eee;margin-bottom:8px;z-index:1;";
    head.innerHTML = `<b style="font-size:15px;line-height:28px"><span style="color:#999">⠿</span> 🩺 REVIEW GADAR 24 JAM</b><div class="sp-rv-status" style="color:#555;margin-top:2px"></div>`;
    spStyleHandle(head);
    const body = document.createElement("div");
    panel.append(head, body);
    document.documentElement.appendChild(panel);
    spMakeDraggable(panel, PANEL_ID, (t) => !!t.closest(".sp-panel-head"));
    spWindowControls(panel, PANEL_ID, ".sp-panel-head", head, () => panel.remove());
    const status = (t) => { head.querySelector(".sp-rv-status").textContent = t; };
    if (!doctor) { status("Nama dokter login tidak terbaca di halaman."); return; }

    status(`Mencari pasien DONE atas nama dr. ${doctor} (24 jam terakhir)...`);
    let list;
    try { list = await spReviewCollectPatients(base, doctor); } catch (err) { status("Gagal membaca daftar pasien IGD: " + (err.message || err)); return; }
    const res = [];
    for (let i = 0; i < list.patients.length; i++) {
      const p = list.patients[i];
      status(`Memeriksa ${i + 1}/${list.patients.length}: ${p.nama.slice(0, 40)}...`);
      try { res.push(await spReviewAnalyze(base, p)); } catch (err) { res.push({ ...p, add: [], addPen: [], flags: ["Gagal dibaca: " + (err.message || err)] }); }
    }
    // v3.29.0 (instruksi dokter): GADAR terakhir oleh dokter lain TETAP diubah selama pasien terdaftar atas nama dokter login.
    // Usulan bisa diedit langsung di kotak teks (Rencana & Pemeriksaan Penunjang) sebelum disimpan.
    const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    const taCss = "width:100%;box-sizing:border-box;font:12px/1.4 Arial,sans-serif;border:1px solid #ccc;border-radius:6px;padding:6px;margin:2px 0 6px;resize:vertical;";
    body.innerHTML = res.map((r, i) => `
      <div data-card="${i}" style="border:1px solid #e5e5e5;border-radius:8px;padding:8px;margin:6px 0;">
        <label style="display:flex;gap:8px;align-items:flex-start;cursor:pointer">
          <input type="checkbox" data-rv="${i}" ${r.gadar && r.changed ? "checked" : ""} ${r.gadar ? "" : "disabled"} style="margin-top:3px">
          <span style="flex:1"><b>${esc(r.nama)}</b> <span style="color:#777">(${esc(r.reg)})</span><br>
          ${r.add.length ? `<span style="color:#1565c0">+ Rencana:</span> ${r.add.map(esc).join("; ")}<br>` : ""}
          ${r.addPen.length ? `<span style="color:#2e7d32">+ Penunjang:</span> ${r.addPen.map(esc).join("; ")}<br>` : ""}
          ${r.have.length ? `<span style="color:#777">✓ Sudah tertulis: ${r.have.map(esc).join("; ")}</span><br>` : ""}
          ${r.gadar && !r.changed ? `<span style="color:#777">Sudah lengkap (bisa tetap diedit di bawah).</span><br>` : ""}
          ${r.flags.map((f) => `<span style="color:#c62828">⚠️ ${esc(f)}</span>`).join("<br>")}
          <span class="sp-rv-res" style="font-weight:bold"></span></span>
        </label>
        ${r.gadar ? `<details ${r.changed ? "open" : ""} style="margin:4px 0 0 24px"><summary style="cursor:pointer;color:#555">✏️ Edit isi yang akan disimpan</summary>
          <div style="font-weight:600;margin-top:4px">Rencana (Tindakan, Terapi, dll)</div>
          <textarea data-ren="${i}" rows="${Math.min(12, Math.max(3, spNl(r.newRencana).split("\n").length + 1))}" style="${taCss}">${esc(r.newRencana)}</textarea>
          <div style="font-weight:600">Pemeriksaan Penunjang</div>
          <textarea data-pen="${i}" rows="${Math.min(8, Math.max(2, spNl(r.newPen).split("\n").length + 1))}" style="${taCss}">${esc(r.newPen)}</textarea>
        </details>` : ""}
      </div>`).join("") || "<i>Tidak ada pasien DONE dalam 24 jam terakhir.</i>";
    const nChanged = res.filter((r) => r.gadar && r.changed).length;
    status(`${res.length} pasien diperiksa, ${nChanged} perlu dilengkapi. Semua dicentang; hilangkan centang yang dibatalkan, atau edit isinya dulu.`);
    if (!res.some((r) => r.gadar)) return;
    // Mengedit kotak teks pasien otomatis mencentangnya.
    body.addEventListener("input", (e) => {
      const i = e.target.dataset.ren ?? e.target.dataset.pen;
      if (i == null) return;
      const cb = body.querySelector(`input[data-rv="${i}"]`);
      if (cb && !cb.disabled) cb.checked = true;
      updateBtn();
    });
    body.addEventListener("change", () => updateBtn());
    const save = document.createElement("button");
    save.type = "button";
    save.style.cssText = "padding:9px 14px;font:600 14px Arial,sans-serif;background:#e91e63;color:#fff;border:0;border-radius:6px;cursor:pointer;margin-top:6px;";
    head.appendChild(save);
    function updateBtn() {
      const n = body.querySelectorAll("input[data-rv]:checked:not(:disabled)").length;
      save.textContent = `💾 Simpan ${n} GADAR yang dicentang`;
      save.disabled = !n;
      save.style.opacity = n ? "1" : ".5";
    }
    updateBtn();
    save.addEventListener("click", async () => {
      save.disabled = true;
      const picked = [...body.querySelectorAll("input[data-rv]:checked:not(:disabled)")].map((c) => +c.dataset.rv);
      let okN = 0, skip = 0;
      for (const i of picked) {
        const r = res[i];
        const card = body.querySelector(`[data-card="${i}"]`);
        const box = card.querySelector(".sp-rv-res");
        r.newRencana = spNl(card.querySelector(`textarea[data-ren="${i}"]`).value);
        r.newPen = spNl(card.querySelector(`textarea[data-pen="${i}"]`).value);
        if (spSameText(r.newRencana, r.oldRencana) && spSameText(r.newPen, r.oldPen)) { skip++; box.style.color = "#777"; box.textContent = " (tidak ada perubahan)"; continue; }
        status(`Menyimpan ${okN + 1}/${picked.length}: ${r.nama.slice(0, 40)}...`);
        box.style.color = "#555";
        box.textContent = " ⏳ menyimpan...";
        try {
          const s = await spReviewRobustSave(base, r);
          okN++;
          box.style.color = "#2e7d32";
          box.textContent = " ✅ tersimpan" + (s.changed.length ? ` (perhatian: kolom berubah: ${s.changed.join(", ")})` : "");
          card.querySelector(`input[data-rv="${i}"]`).disabled = true;
          card.querySelectorAll("textarea").forEach((t) => { t.readOnly = true; t.style.background = "#f6f6f6"; });
        } catch (err) {
          box.style.color = "#c62828";
          box.textContent = " ❌ " + (err.message || err);
        }
      }
      status(`Selesai: ${okN} GADAR tersimpan${skip ? `, ${skip} tanpa perubahan` : ""}${picked.length - okN - skip ? `, ${picked.length - okN - skip} gagal` : ""}.`);
      updateBtn();
    });
  }

  // =========================
  // v3.31.0 (instruksi dokter): ADVIS SPESIALIS dari WhatsApp Web -> paling bawah kolom
  // "Rencana (Tindakan, Terapi, dll)" Assesment GADAR. Chat disalin dari WA Web lalu ditempel (halaman Smartplus HTTP,
  // jadi clipboard tidak bisa dibaca otomatis). Format salinan WA: "[00.12, 4/10/2026] Nama: pesan".
  // Form GADAR yang terbuka dipakai; bila tertutup, GADAR terakhir kunjungan ini dibuka. TIDAK disimpan otomatis.
  // =========================
  const SP_ADVIS_NAMES_KEY = "sp-advis-recent-names";
  function spAdvisRecentNames() {
    try { return JSON.parse(localStorage.getItem(SP_ADVIS_NAMES_KEY) || "[]"); } catch (_) { return []; }
  }
  function spAdvisRememberName(n) {
    try { localStorage.setItem(SP_ADVIS_NAMES_KEY, JSON.stringify([n, ...spAdvisRecentNames().filter((x) => x !== n)].slice(0, 30))); } catch (_) {}
  }
  // Teks salinan WA -> { sender, time, lines }
  function spParseWaAdvis(raw) {
    const head = /^\s*\[(\d{1,2}[.:]\d{2})(?:[^\]]*)\]\s*([^:]{1,60}):\s?(.*)$/;
    const msgs = [];
    for (const line of String(raw || "").replace(/\r/g, "").split("\n")) {
      const m = line.match(head);
      if (m) msgs.push({ time: m[1].replace(":", "."), sender: m[2].trim(), text: [m[3]] });
      else if (msgs.length) msgs[msgs.length - 1].text.push(line);
      else msgs.push({ time: "", sender: "", text: [line] });
    }
    const senders = [...new Set(msgs.map((m) => m.sender).filter(Boolean))];
    // Pengirim advis = nama yang memuat gelar spesialis, atau pengirim pertama.
    const sender = senders.find((s) => /\bsp\.?\s?[a-z]/i.test(s)) || senders[0] || "";
    const picked = sender ? msgs.filter((m) => m.sender === sender) : msgs;
    const ack = /^(ok(e|ey)?|oke+ dok|siap|baik|iya|ya|y|sip|noted|terima ?kasih|makasih|trims|thx|thanks)[\s,.!dok]*$/i;
    const lines = picked.flatMap((m) => m.text).map((l) => l.trim()).filter((l) => l && !ack.test(l) && !/^<(media|pesan ini).*>$/i.test(l))
      .map((l) => (/^([-•*]|\d+[.)])\s*/.test(l) ? l.replace(/^[•*]\s*/, "- ") : "- " + l));
    return { sender, time: picked.find((m) => m.time)?.time || "", lines };
  }
  function spFormatAdvis(name, time, lines) {
    let n = String(name || "").trim();
    if (n && !/^dr\.?\s/i.test(n)) n = "dr. " + n;
    n = n.replace(/^dr\.?\s+/i, "dr. ");
    return `Advis ${n || "dr. Sp."}${time ? ` (${time})` : ""}:\n${lines.join("\n")}`;
  }

  // v3.32.0 (instruksi dokter): pasien dipilih lewat pencarian nama (tanpa membuka halaman pasien).
  // Daftar = pasien IGD 48 jam terakhir dari daftar pasien IGD (semua dokter), dicari langsung saat mengetik.
  // Dimuat 6 halaman sekaligus; onProgress(daftarSementara) dipanggil tiap gelombang supaya hasil cari langsung muncul.
  async function spAdvisLoadPatients(base, onProgress) {
    const seen = new Map();
    let latest = 0;
    const parsePage = (h) => {
      const d = spReviewDoc(h);
      const t = [...d.querySelectorAll("table")].find((x) => /Regdate/i.test(x.textContent));
      if (!t) return [];
      return [...t.rows].slice(1).map((r) => {
        const c = [...r.cells].map((x) => x.textContent.replace(/\s+/g, " ").trim());
        const m = (r.querySelector('a[href*="pasien_detail"]')?.getAttribute("href") || "").match(/pasien_detail\/([^/]+)\/([^/]+)/);
        return m ? { noreg: m[1], norm: m[2], nama: c[1] || "", reg: c[3] || "", ts: spReviewTs(c[3]), dok: c[5] || "", st: c[8] || "" } : null;
      }).filter(Boolean);
    };
    for (let off = 0; off <= 1200; off += 90) {
      const offs = [0, 15, 30, 45, 60, 75].map((x) => off + x);
      const pages = await Promise.all(offs.map((o) => spFetch(`${base}/soap_igd/pasien_igd_list${o ? "/" + o : ""}`, { credentials: "same-origin" }).then((r) => r.text()).then(parsePage).catch(() => [])));
      const flat = pages.flat();
      if (!flat.length) break;
      if (!latest) latest = Math.max(...flat.map((x) => x.ts));
      flat.forEach((x) => { if (!seen.has(x.noreg)) seen.set(x.noreg, x); });
      const list = [...seen.values()].filter((x) => x.ts >= latest - 2 * 86400000).sort((x, y) => y.ts - x.ts);
      if (onProgress) onProgress(list);
      if (pages.some((pg) => !pg.length) || Math.min(...flat.map((x) => x.ts)) < latest - 2 * 86400000) return list;
    }
    return [...seen.values()].filter((x) => x.ts >= latest - 2 * 86400000).sort((x, y) => y.ts - x.ts);
  }

  async function spAdvisLatestGadar(base, p) {
    const cg = await spFetch(`${base}/soap_igd/content_gadar/${encodeURIComponent(p.noreg)}/${encodeURIComponent(p.norm)}`, { credentials: "same-origin" }).then((r) => r.text());
    const ids = [...new Set([...cg.matchAll(/update_gadar\('(\d+)'\)/g)].map((m) => +m[1]))].sort((a, b) => b - a);
    for (const id of ids) {
      const j = await spFetch(`${base}/soap_igd/soap_gadar_edit/${id}`, { credentials: "same-origin" }).then((r) => r.json()).catch(() => null);
      if (j && String(j.id_reg) === p.noreg) return { gadar: j, idGadar: id };
    }
    return null;
  }

  // v3.34.0 (instruksi dokter): cari pasien -> SATU kotak berisi isi "Rencana (Tindakan, Terapi, dll)" GADAR terakhir saat ini;
  // dokter bebas menambahkan advis dari berbagai spesialis / tambahan lain, lalu Simpan (lewat form GADAR Smartplus).
  // Menempel chat WhatsApp Web ("[00.12, 4/10/2026] dr X SpY: ...") ke kotak otomatis dirapikan menjadi "Advis dr. X SpY (00.12):".
  async function runAdvisSpesialis() {
    const PANEL_ID = "sp-advis-panel";
    document.getElementById(PANEL_ID)?.remove();
    const panel = document.createElement("div");
    panel.id = PANEL_ID;
    panel.style.cssText = "position:fixed;right:16px;top:6vh;z-index:2147483647;background:#fff;border:2px solid #e91e63;border-radius:12px;padding:12px;width:min(94vw,560px);max-height:88vh;overflow:auto;box-shadow:0 8px 30px rgba(0,0,0,.35);font:13px/1.45 Arial,sans-serif;color:#222;";
    const head = document.createElement("div");
    head.className = "sp-panel-head";
    head.style.cssText = "padding:4px 0 8px;border-bottom:1px solid #eee;margin-bottom:8px;";
    head.innerHTML = `<b style="font-size:15px;line-height:28px"><span style="color:#999">⠿</span> 📝 ADVIS SPESIALIS</b>`;
    spStyleHandle(head);
    const ta = "width:100%;box-sizing:border-box;font:13px/1.45 Arial,sans-serif;border:1px solid #ccc;border-radius:6px;padding:7px;resize:vertical;";
    const body = document.createElement("div");
    body.innerHTML = `
      <input class="sp-adv-pq" placeholder="Ketik nama pasien / No. RM..." autocomplete="off" style="${ta}">
      <div class="sp-adv-plist" style="max-height:200px;overflow:auto;border:1px solid #eee;border-radius:6px;margin-top:3px;display:none"></div>
      <div class="sp-adv-psel" style="margin:6px 0;color:#1565c0;font-weight:600"></div>
      <div class="sp-adv-box" style="display:none">
        <div style="font-weight:600">Rencana (Tindakan, Terapi, dll) :</div>
        <div style="color:#777;font-size:11px;margin-bottom:3px">Tambahkan advis / catatan di bawah isi yang ada. Tempelan chat WhatsApp otomatis dirapikan.</div>
        <textarea class="sp-adv-ren" rows="16" style="${ta}"></textarea>
        <button type="button" class="sp-adv-go" style="margin-top:8px;width:100%;padding:10px;font:600 14px Arial,sans-serif;background:#e91e63;color:#fff;border:0;border-radius:6px;cursor:pointer">💾 Simpan Rencana</button>
      </div>
      <div class="sp-adv-msg" style="margin-top:6px;color:#555"></div>`;
    panel.append(head, body);
    document.documentElement.appendChild(panel);
    spMakeDraggable(panel, PANEL_ID, (t) => !!t.closest(".sp-panel-head"));
    spWindowControls(panel, PANEL_ID, ".sp-panel-head", head, () => panel.remove());
    const pq = body.querySelector(".sp-adv-pq"), plist = body.querySelector(".sp-adv-plist"), psel = body.querySelector(".sp-adv-psel");
    const box = body.querySelector(".sp-adv-box"), ren = body.querySelector(".sp-adv-ren"), goBtn = body.querySelector(".sp-adv-go"), msg = body.querySelector(".sp-adv-msg");
    const base = smartplusBaseUrl();
    const curNoreg = getCurrentNoregAny();
    let patients = null, loading = true, chosen = null, gadarInfo = null, loadSeq = 0;

    const choose = async (p) => {
      chosen = p; gadarInfo = null;
      plist.style.display = "none";
      pq.value = p.nama;
      psel.textContent = `✔ ${p.nama} — ${p.reg}${p.dok ? " · " + p.dok : ""}`;
      box.style.display = "none";
      msg.textContent = "⏳ Membaca Assesment GADAR terakhir...";
      const seq = ++loadSeq;
      try {
        const g = await spAdvisLatestGadar(base, p);
        if (seq !== loadSeq) return;
        if (!g) { msg.textContent = "❌ Pasien ini belum punya Assesment GADAR di kunjungan ini."; return; }
        gadarInfo = g;
        ren.value = spNl(g.gadar.rencana_tindakan || "").replace(/\s+$/, "") + (String(g.gadar.rencana_tindakan || "").trim() ? "\n\n" : "");
        box.style.display = "block";
        msg.textContent = curNoreg === p.noreg ? "ℹ️ Halaman pasien ini sedang terbuka: tutup form GADAR yang belum disimpan supaya tidak tertimpa." : "";
        ren.focus();
        ren.setSelectionRange(ren.value.length, ren.value.length);
        ren.scrollTop = ren.scrollHeight;
      } catch (err) {
        if (seq === loadSeq) msg.textContent = "❌ Gagal membaca GADAR: " + (err.message || err);
      }
    };
    function showList() {
      const q = pq.value.trim().toLowerCase();
      if (!q || chosen) { plist.style.display = "none"; return; }
      const hit = (patients || []).filter((p) => (p.nama + " " + p.noreg).toLowerCase().includes(q)).slice(0, 12);
      plist.style.display = "block";
      plist.innerHTML = hit.length ? "" : `<div style="padding:6px;color:#777">${loading ? "⏳ Mencari..." : "Tidak ditemukan di daftar IGD 48 jam terakhir."}</div>`;
      hit.forEach((p) => {
        const d = document.createElement("div");
        d.style.cssText = "padding:6px 8px;border-bottom:1px solid #f0f0f0;cursor:pointer;";
        d.innerHTML = `<b></b><br><span style="color:#777;font-size:11px"></span>`;
        d.querySelector("b").textContent = p.nama;
        d.querySelector("span").textContent = `${p.reg} · ${p.st || "-"} · ${p.dok || "-"}`;
        d.addEventListener("mouseenter", () => { d.style.background = "#fce4ec"; });
        d.addEventListener("mouseleave", () => { d.style.background = ""; });
        d.addEventListener("click", () => choose(p));
        plist.appendChild(d);
      });
    }
    pq.addEventListener("input", () => { chosen = null; gadarInfo = null; loadSeq++; psel.textContent = ""; box.style.display = "none"; msg.textContent = ""; showList(); });
    spAdvisLoadPatients(base, (part) => { patients = part; showList(); })
      .then((r) => { patients = r; loading = false; showList(); if (curNoreg && !chosen) { const p = r.find((x) => x.noreg === curNoreg); if (p) choose(p); } })
      .catch(() => { patients = patients || []; loading = false; showList(); });
    setTimeout(() => pq.focus(), 50);

    // Tempelan chat WhatsApp Web -> dirapikan otomatis di posisi kursor.
    ren.addEventListener("paste", (e) => {
      const t = (e.clipboardData || window.clipboardData)?.getData("text") || "";
      if (!/^\s*\[\d{1,2}[.:]\d{2}[^\]]*\][^:\n]{1,60}:/m.test(t)) return;
      const p = spParseWaAdvis(t);
      if (!p.lines.length) return;
      e.preventDefault();
      const ins = spFormatAdvis(p.sender, p.time, p.lines);
      const a0 = ren.selectionStart, a1 = ren.selectionEnd, v = ren.value;
      const pre = v.slice(0, a0), sep = pre && !/\n\s*$/.test(pre) ? "\n" : "";
      ren.value = pre + sep + ins + "\n" + v.slice(a1);
      const pos = (pre + sep + ins + "\n").length;
      ren.setSelectionRange(pos, pos);
    });

    goBtn.addEventListener("click", async () => {
      if (!chosen || !gadarInfo) { msg.textContent = "Pilih pasien dulu."; return; }
      const mine = spNl(ren.value).replace(/\s+$/, "");
      const baseText = spNl(gadarInfo.gadar.rencana_tindakan || "");
      if (spSameText(mine, baseText)) { msg.textContent = "Tidak ada perubahan."; return; }
      goBtn.disabled = true;
      const p = chosen;
      msg.textContent = `⏳ Menyimpan Rencana ${p.nama}...`;
      try {
        const sres = await spAdvisForceSave(base, p, baseText, mine, (t) => { msg.textContent = t; });
        gadarInfo = { gadar: { ...sres.g.gadar, rencana_tindakan: sres.rencana }, idGadar: sres.g.idGadar };
        if (sres.merged) {
          // Tampilkan isi yang benar-benar tersimpan (versi terbaru + tambahan dokter).
          ren.value = spNl(sres.rencana).replace(/\s+$/, "") + "\n\n";
          ren.setSelectionRange(ren.value.length, ren.value.length);
          ren.scrollTop = ren.scrollHeight;
        }
        msg.innerHTML = (sres.already ? "✅ Advis sudah ada di Rencana <b></b>." : "✅ Rencana tersimpan untuk <b></b>.") +
          (sres.merged ? " GADAR sempat diubah orang lain: tambahan Dokter disambungkan di bawah isi terbaru (kotak sudah diperbarui)." : "") +
          (sres.direct ? " (disimpan langsung)" : "") +
          (sres.changed && sres.changed.length ? ` Perhatian: kolom berubah: ${sres.changed.join(", ")}` : "");
        msg.querySelector("b").textContent = p.nama;
        toast("ADVIS SPESIALIS: Rencana tersimpan — " + p.nama);
      } catch (err) {
        let copied = false;
        try { copied = await copySoapText(mine); } catch (_) {}
        msg.textContent = "❌ Belum tersimpan setelah 4 percobaan: " + (err.message || err) +
          (copied ? " — Isi kotak sudah DISALIN, tempel manual ke Rencana di form GADAR lalu Save." : " — Salin isi kotak lalu tempel manual ke Rencana di form GADAR.");
      } finally {
        goBtn.disabled = false;
      }
    });
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

  // v3.7.0: daftar order radiologi otomatis. Tambah pemeriksaan baru cukup di sini.
  // match: awal teks value checkbox di form Radiologi Smartplus (huruf besar/kecil diabaikan).
  // v3.19.0: extras = checkbox tambahan yang HARUS ikut dicentang (nama persis, huruf besar/kecil diabaikan).
  // CT brain non kontras di Smartplus = "CT scan brain" + "NON KONTRAS" (pilihan kontras terpisah).
  const AUTO_RAD_ORDERS = {
    THORAX: { label: "RO THORAX", exam: "Thorax PA/AP", match: "thorax pa/ap" },
    USG_WHOLE_ABDOMEN: { label: "USG WHOLE ABDOMEN", exam: "USG whole abdomen", match: "usg whole abdomen" },
    CT_BRAIN_NK: { label: "CT BRAIN NON KONTRAS", exam: "CT scan brain", match: "ct scan brain", extras: ["non kontras"] }
  };

  function findRadExamCheckbox(modal, match) {
    const want = norm(match);
    return [...modal.querySelectorAll('input[type="checkbox"]')]
      .find((c) => norm(c.value).startsWith(want)) || null;
  }

  function findRadCheckboxExact(modal, value) {
    const want = norm(value);
    return [...modal.querySelectorAll('input[type="checkbox"]')].find((c) => norm(c.value) === want) || null;
  }

  async function runAutoRadOrder(orderKey) {
    const order = AUTO_RAD_ORDERS[orderKey];
    if (!order) return;
    const T = `AUTO ${order.label}`;

    toast(`${T}: mengecek diagnosis Assesment GADAR terakhir...`);
    const gadarDx = await getLatestGadarDiagnosis();
    const radDiagnosis = gadarDx ? gadarDx.diagnosis : "febris";
    console.log("[AUTO RAD]", order.label, "diagnosis dipakai:", radDiagnosis, gadarDx);

    toast(`${T}: membuka Order Radiologi...`);
    await ensureMainEmrTab();
    const tab = document.querySelector(RAD_SELECTORS.tab);
    if (tab && visible(tab)) tab.click();
    else if (!clickVisibleText(["Order Radiologi"])) {
      toast(`${T}: tab Order Radiologi tidak ditemukan.`);
      return;
    }

    const tambah = await waitForVisibleSelector(RAD_SELECTORS.tambah, 5000);
    if (!tambah) {
      toast(`${T}: tombol TAMBAH Order Radiologi tidak ditemukan.`);
      return;
    }
    tambah.click();

    // Modal dimuat via AJAX; tunggu checkbox pemeriksaan tersedia.
    let modal = null;
    let exam = null;
    const started = Date.now();
    while (Date.now() - started < 8000 && !exam) {
      modal = [...document.querySelectorAll(RAD_SELECTORS.modal)].find(visible) || null;
      exam = modal ? findRadExamCheckbox(modal, order.match) : null;
      if (!exam) await recipeSleep(120);
    }
    if (!modal || !exam) {
      toast(`${T}: form Radiologi / pilihan ${order.exam} tidak ditemukan.`);
      return;
    }

    const fail = [];
    const diag = modal.querySelector('#diag, [name="diag"]');
    if (!(diag && setValue(diag, radDiagnosis))) fail.push("Diagnosa Kerja");

    const indikasi = modal.querySelector('#indikasi_klinis, [name="indikasi_klinis"]');
    if (!(indikasi && setValue(indikasi, "dx"))) fail.push("Indikasi Klinis");

    if (!exam.checked) {
      try { exam.click(); } catch (_) {}
      fire(exam);
    }
    if (!exam.checked) fail.push(order.exam);

    for (const extra of order.extras || []) {
      const box = findRadCheckboxExact(modal, extra);
      if (box && !box.checked) { try { box.click(); } catch (_) {} fire(box); }
      if (!(box && box.checked)) fail.push(extra.toUpperCase());
    }

    const dxNote = gadarDx
      ? ` Diagnosis dari GADAR terakhir: "${radDiagnosis}".`
      : ` ⚠️ GADAR kunjungan ini tidak ditemukan, diagnosis memakai "febris".`;

    // Jangan Save jika ada yang gagal, supaya order tidak terkirim setengah jadi.
    if (fail.length) {
      toast(`${T} belum disimpan. Cek manual: ${fail.join(", ")}.${dxNote}`);
      console.warn("[AUTO RAD] gagal:", fail);
      return;
    }

    await recipeSleep(500);
    const save = [...modal.querySelectorAll(RAD_SELECTORS.save)].find(visible) ||
      [...document.querySelectorAll(RAD_SELECTORS.save)].find(visible);
    if (!save) {
      toast(`${T}: form terisi, tombol Save tidak ditemukan. Simpan manual.${dxNote}`);
      return;
    }
    save.click();
    toast(`${T} selesai: ${[order.exam, ...(order.extras || []).map((x) => x.toUpperCase())].join(" + ")} dipilih dan Save ditekan.${dxNote}`);
    console.log("[AUTO RAD] selesai", { order: order.label, diagnosis: radDiagnosis, idGadar: gadarDx && gadarDx.idGadar });
  }

  // Nama lama dipertahankan agar kompatibel.
  async function runAutoRoThorax() {
    return runAutoRadOrder("THORAX");
  }

  // =========================
  // v3.14.0: RIWAYAT POLI SPESIALIS (dipakai semua ASGADAR, termasuk NORMAL).
  // v3.17.0: ditulis ke kolom Riwayat Penyakit Dahulu (riwayat_sakit_old), bukan Riwayat Penyakit Sekarang.
  // =========================
  // Sumber = tab "Riwayat Kunjungan" Smartplus (hanya dibaca, GET):
  //   history_pasien/history_pasien_list/<norm>  -> baris load_all_hasil_by_reg('noreg','idDokter','sumber','tipe')
  //   history_pasien/new_history_pasien_byreg/<noreg>/<idDokter>/<tipe> -> SOAP RAJAL (▶ A / ▶ P) + tabel RESEP.
  // Ambil kunjungan RWJ dokter spesialis (nama dokter memuat "Sp."), tanpa batas waktu (v3.16.0),
  // SATU kunjungan terbaru per spesialisasi (v3.15.0; sebelumnya per poli).
  // Terapi = obat yang diserahkan (tabel RESEP); bila kosong -> R/ di SOAP; bila kosong -> isi P (mis. fisioterapi).

  async function spFetchVisitList(base, normRm) {
    const html = await spFetch(`${base}/history_pasien/history_pasien_list/${encodeURIComponent(normRm)}`, { credentials: "same-origin" }).then((r) => r.text());
    const seen = new Set();
    return [...spParseHtml(html).querySelectorAll("tr")].map((tr) => {
      const link = tr.querySelector("[onclick*='load_all_hasil_by_reg']");
      const m = link && (link.getAttribute("onclick") || "").match(/load_all_hasil_by_reg\('([^']*)'\s*,\s*'([^']*)'\s*,\s*'([^']*)'\s*,\s*'([^']*)'\)/);
      if (!m || seen.has(m[1])) return null;
      seen.add(m[1]);
      const c = [...tr.cells].map((x) => x.textContent.replace(/\s+/g, " ").trim());
      return { noreg: m[1], idDokter: m[2], sumber: m[3], tipe: m[4], dateText: c[2] || "", dateKey: spParseDateKey(c[2]), unit: c[4] || "", dokter: c[5] || "" };
    }).filter(Boolean);
  }

  function spIsSpecialistPoliVisit(v) {
    return /^RWJ$/i.test(v.tipe) && !/inova/i.test(v.sumber) && !/^#/.test(v.dokter) && /\bSp\.?\s?[A-Z]/.test(v.dokter);
  }

  // v3.15.0: kelompok = spesialisasi dari gelar dokter (Sp.PD-KGEH -> PD, Sp.THT-KL -> THT), bukan nama dokter.
  // Dokter berbeda dengan spesialisasi sama -> hanya kunjungan terakhir yang dipakai.
  // v3.16.0 (instruksi dokter): TANPA batas waktu. Isi mis. { months: 6 } bila suatu saat ingin dibatasi lagi.
  const SP_RIWAYAT_POLI_WINDOW = null;
  function spSpecialtyKey(v) {
    const m = String(v.dokter || "").match(/\bSp\.?\s?([A-Z][A-Za-z]*)/);
    return m ? "SP." + m[1].toUpperCase() : String(v.unit || v.dokter).toUpperCase();
  }

  function spParseVisitDetail(html) {
    const doc = spParseHtml(html);
    const soapBox = doc.getElementById("collapseSoapRajal") || doc;
    // Sel SOAP = sel terdalam yang memuat "▶ A :" (sel pembungkus luar diabaikan).
    const hasA = (el) => /▶\s*A\s*:/.test(el.textContent);
    const cells = [...soapBox.querySelectorAll("td")].filter((td) => hasA(td) && ![...td.querySelectorAll("td")].some(hasA));
    let dx = "", plan = "";
    let planLines = [];
    const resep = [];
    const td0 = cells[cells.length - 1];
    if (td0) {
      const td = td0.cloneNode(true);
      td.querySelectorAll("table").forEach((t) => {
        if (/RESEP/i.test(t.querySelector("th")?.textContent || "")) {
          t.querySelectorAll("td").forEach((c) => {
            c.querySelectorAll("br").forEach((b) => b.replaceWith("\u0001"));
            c.textContent.split("\u0001").map((s) => s.replace(/\s+/g, " ").trim()).filter(Boolean).forEach((s) => resep.push(s));
          });
        }
        t.remove();
      });
      td.querySelectorAll("br").forEach((b) => b.replaceWith("\n"));
      const txt = td.textContent.replace(/[ \t ]+/g, " ");
      const grabLines = (k, next) => {
        const m = txt.match(new RegExp("▶\\s*" + k + "\\s*:([\\s\\S]*?)(?=▶\\s*(?:" + next + ")\\s*:|$)"));
        return m ? m[1].split("\n").map((s) => s.trim()).filter(Boolean) : [];
      };
      dx = grabLines("A", "P").join(", ");
      planLines = grabLines("P", "ZZZ").filter((l) => !/^obat$/i.test(l));
      plan = planLines.join(", ");
    }
    const given = [...(doc.querySelector("#collapseResep")?.querySelectorAll("tr") || [])]
      .map((tr) => [...tr.cells].map((c) => c.textContent.replace(/\s+/g, " ").trim()))
      .filter((c) => c.length >= 5 && c[0] && !/^obat$/i.test(c[0]))
      .map((c) => ({ name: c[0], freq: c[4] || "" }));
    return { dx, plan, planLines, resep, given };
  }

  // v3.18.0: terapi dikembalikan sebagai DAFTAR baris (ditulis ke bawah), bukan satu kalimat.
  function spFormatTherapy(d) {
    const cleanName = (s) => s.replace(/\*/g, "").replace(/\s+/g, " ").trim();
    const cleanFreq = (s) => s.replace(/\s*X\s*/i, "x ").replace(/\s+/g, " ").trim().toLowerCase();
    const items = d.given.filter((g) => !/^(CAPSUL|KAPSUL|CAPSULE)\s*NO|KERTAS\s*PUYER|^PULV/i.test(g.name));
    if (items.length) {
      const single = items.filter((g) => g.freq).map((g) => `  • ${cleanName(g.name)} ${cleanFreq(g.freq)}`);
      const racik = items.filter((g) => !g.freq).map((g) => `     - ${cleanName(g.name)}`);
      return [...single, ...(racik.length ? ["  • Racikan:", ...racik] : [])];
    }
    if (d.resep.length) {
      return d.resep.map((s) => (/^-\s*/.test(s) ? `     ${s}` : `  • ${s.replace(/^R\/\s*/i, "")}`));
    }
    return (d.planLines || (d.plan ? [d.plan] : [])).map((l) => `  • ${l}`);
  }

  function spPrettyPoli(unit) {
    return String(unit || "").replace(/^POLI(KLINIK)?\s+/i, "")
      .split(/\s+/).filter(Boolean)
      .map((w) => (/^dan$/i.test(w) ? "dan" : w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1).toLowerCase()))
      .join(" ");
  }

  // Hasil: { lines: ["- 11-09-2026 dr ... Sp.N: Dx ...\n  Th/\n  • obat 1\n  • obat 2"], count }
  async function spBuildRiwayatPoliLines() {
    const normRm = getCurrentIgdNorm();
    if (!normRm) return { lines: [], error: "no RM tidak terbaca" };
    const base = smartplusBaseUrl();
    const cut = SP_RIWAYAT_POLI_WINDOW ? spCutoffKey(SP_RIWAYAT_POLI_WINDOW) : "";
    const visits = (await spFetchVisitList(base, normRm)).filter(spIsSpecialistPoliVisit)
      .filter((v) => !cut || (v.dateKey && v.dateKey >= cut))
      .sort((a, b) => (b.dateKey || "").localeCompare(a.dateKey || ""));
    const groups = new Map();
    for (const v of visits) {
      const key = spSpecialtyKey(v);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(v);
    }
    const lines = [];
    await Promise.all([...groups.values()].map(async (list, gi) => {
      // Kunjungan terbaru per spesialisasi; bila belum ada SOAP/terapi, coba kunjungan sebelumnya (maks 3).
      for (const v of list.slice(0, 3)) {
        try {
          const html = await spFetch(`${base}/history_pasien/new_history_pasien_byreg/${encodeURIComponent(v.noreg)}/${encodeURIComponent(v.idDokter)}/${encodeURIComponent(v.tipe)}`, { credentials: "same-origin" }).then((r) => r.text());
          const d = spParseVisitDetail(html);
          const th = spFormatTherapy(d);
          if (!d.dx && !th.length) continue;
          // v3.18.0: nama poli tidak ditulis (sudah jelas dari gelar spesialis); terapi ke bawah.
          lines[gi] = { dateKey: v.dateKey, text: [`- ${v.dateText} ${v.dokter}: Dx ${d.dx || "-"}`, `  Th/${th.length ? "" : " -"}`, ...th].join("\n") };
          return;
        } catch (_) {}
      }
    }));
    const out = lines.filter(Boolean).sort((a, b) => b.dateKey.localeCompare(a.dateKey)).map((l) => l.text);
    return { lines: out, count: out.length };
  }

  // v3.47.0: obat rutin pasien = obat yang diserahkan pada kunjungan poli spesialis TERAKHIR per spesialisasi
  // (riwayat kunjungan, GET saja). Hasil: Map(kunci obat database -> "dd-mm-yyyy dr X Sp.Y").
  async function spFetchRoutineDrugs(base, normRm) {
    const out = new Map();
    if (!normRm) return out;
    const visits = (await spFetchVisitList(base, normRm)).filter(spIsSpecialistPoliVisit)
      .sort((a, b) => (b.dateKey || "").localeCompare(a.dateKey || ""));
    const latest = new Map();
    for (const v of visits) if (!latest.has(spSpecialtyKey(v))) latest.set(spSpecialtyKey(v), v);
    const byName = new Map(RESEP_PULANG_DB.map((it) => [spDrugKey(it.obat), it.key]));
    await Promise.all([...latest.values()].map(async (v) => {
      try {
        const html = await spFetch(`${base}/history_pasien/new_history_pasien_byreg/${encodeURIComponent(v.noreg)}/${encodeURIComponent(v.idDokter)}/${encodeURIComponent(v.tipe)}`, { credentials: "same-origin" }).then((r) => r.text());
        for (const g of spParseVisitDetail(html).given) {
          const k = byName.get(spDrugKey(g.name));
          if (k && !out.has(k)) out.set(k, `${v.dateText} ${v.dokter}`);
        }
      } catch (_) {}
    }));
    return out;
  }

  // Tambahkan di bawah isi kolom (isi bawaan Smartplus dipertahankan; blok lama diganti bila diulang).
  // v3.24.0 (instruksi dokter): tanpa judul "Riwayat kontrol poli spesialis:". Blok lama dikenali dari bentuk barisnya
  // ("- dd-mm-yyyy dr ...: Dx ...", "  Th/", "  • obat", "     - racikan"); judul versi lama juga ikut dibersihkan.
  const SP_RIWAYAT_POLI_LINE_RE = /^- \d{2}-\d{2}-\d{4}\b.*: Dx /;
  const SP_RIWAYAT_POLI_CONT_RE = /^(?:\s+Th\/.*|\s+•.*|\s{3,}- .*)$/;
  function mergeRiwayatPoli(existing, lines) {
    let rows = String(existing || "").split(/\r?\n/);
    const oldHead = rows.findIndex((r) => /^Riwayat kontrol poli spesialis:\s*$/i.test(r.trim()));
    if (oldHead >= 0) rows = rows.slice(0, oldHead);
    else {
      const start = rows.findIndex((r) => SP_RIWAYAT_POLI_LINE_RE.test(r));
      if (start >= 0 && rows.slice(start).every((r) => !r.trim() || SP_RIWAYAT_POLI_LINE_RE.test(r) || SP_RIWAYAT_POLI_CONT_RE.test(r))) {
        rows = rows.slice(0, start);
      }
    }
    const base = rows.join("\n").replace(/\s+$/, "");
    if (!lines.length) return base;
    return (base ? base + "\n" : "") + lines.join("\n");
  }

  // =========================
  // v3.11.0: AUTO PENUNJANG (Lab + Film radiologi) untuk konsul — v3.13.0 berganti nama menjadi AUTO SCREENSHOT
  // =========================
  // Lab  : riwayat hasil_lab/riwayat_hasil_lab/<noreg> -> print_hasil_labx_by_id_sample/<idSample>/<noreg>
  //        -> digambar ulang ke PNG (tanpa NIK & alamat).
  // Film : tombol [ FILM ] di riwayat hasil_rad membuka viewer PACS (Orthanc/Osimis) di jaringan lokal RS.
  //        Browser tidak mengizinkan screenshot jendela lain, jadi script membuka viewer dengan
  //        window.name khusus; di jendela viewer, script (runOrthancCapture) mengambil gambar film
  //        lewat REST Orthanc (same-origin), mengirimnya ke Smartplus via postMessage, lalu menutup diri.
  //        Alamat/kata sandi PACS TIDAK ditulis di script; diambil dari tombol FILM di halaman.
  const SP_FILM_WINDOW_PREFIX = "spcap|";

  function smartplusBaseUrl() {
    const m = location.href.match(/^(.*?\/smartplus)(?:\/|$)/i);
    return m ? m[1] : location.origin + "/smartplus";
  }

  function getCurrentNoregAny() {
    const m = location.pathname.match(/(?:pasien_detail|main_content)\/([^/]+)/i);
    return m ? decodeURIComponent(m[1]) : null;
  }

  function spParseDateKey(text) {
    const m = String(text || "").match(/(\d{2})-(\d{2})-(\d{4})/);
    return m ? `${m[3]}-${m[2]}-${m[1]}` : "";
  }

  function spParseHtml(html) {
    return new DOMParser().parseFromString(html, "text/html");
  }

  // "dd-mm-yyyy hh:mm:ss" -> "yyyy-mm-dd hh:mm:ss" (untuk urut terbaru dulu).
  function spParseDateTimeKey(text) {
    const m = String(text || "").match(/(\d{2})-(\d{2})-(\d{4})(?:\D+(\d{1,2}:\d{2}(?::\d{2})?))?/);
    return m ? `${m[3]}-${m[2]}-${m[1]} ${m[4] || ""}`.trim() : "";
  }

  // Batas tanggal (yyyy-mm-dd) mundur dari hari ini: { days } atau { months } (bulan kalender).
  function spCutoffKey({ days = 0, months = 0 } = {}) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    if (months) {
      const day = d.getDate();
      d.setDate(1);
      d.setMonth(d.getMonth() - months);
      d.setDate(Math.min(day, new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()));
    }
    if (days) d.setDate(d.getDate() - days);
    const p = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }

  // v3.12.0 (instruksi dokter): ambil SEMUA entri sejak batas tanggal (semua kunjungan), terbaru dulu.
  // Bila kosong, entri terbaru yang lebih lama dikembalikan terpisah sebagai pilihan (tidak otomatis).
  const SP_LAB_WINDOW = { days: 7 };     // lab: 1 minggu terakhir
  const SP_RAD_WINDOW = { months: 1 };   // radiologi: 1 bulan terakhir
  function spPickRecentEntries(entries, windowSpec) {
    const cut = spCutoffKey(windowSpec);
    const byNewest = (a, b) => (b.sortKey || "").localeCompare(a.sortKey || "");
    const recent = entries.filter((e) => e.dateKey && e.dateKey >= cut).sort(byNewest);
    const latestKey = entries.map((e) => e.dateKey).filter(Boolean).sort().pop();
    const latestOlder = recent.length || !latestKey ? [] : entries.filter((e) => e.dateKey === latestKey).sort(byNewest);
    return { recent, latestOlder };
  }

  // USG -> ekspertise saja (tanpa film). CT, rontgen (Thorax dll.) -> film saja.
  // v3.24.0 (instruksi dokter): CT -> ekspertise saja (film CT tidak cocok untuk screenshot);
  // rontgen -> film + ekspertise. Ekspertise yang belum ada tidak diambil.
  function spIsUsgExam(exam) {
    // v3.26.0: echocardiography (mis. "USG echocardiografi") = ekspertise saja.
    return /\bUSG\b|ultra\s*sono|echo\s*cardio|ekokardio|\becho\b/i.test(String(exam || ""));
  }
  function spIsCtExam(exam) {
    return /\bCT\b|\bCT[-\s]?scan|\bMSCT\b|computed\s*tomography/i.test(String(exam || ""));
  }
  function spNoFilmExam(exam) {
    return spIsUsgExam(exam) || spIsCtExam(exam);
  }

  async function spFetchLabEntries(base, noreg) {
    const html = await spFetch(`${base}/hasil_lab/riwayat_hasil_lab/${encodeURIComponent(noreg)}`, { credentials: "same-origin" }).then((r) => r.text());
    const doc = spParseHtml(html);
    return [...doc.querySelectorAll("a[onclick*='load_hasil_lab_detail']")].map((a) => {
      const m = (a.getAttribute("onclick") || "").match(/load_hasil_lab_detail\('([^']+)'\s*,\s*'([^']+)'\)/);
      return m ? { idSample: m[1], noreg: m[2], dateText: a.textContent.trim(), dateKey: spParseDateKey(a.textContent), sortKey: spParseDateTimeKey(a.textContent) } : null;
    }).filter(Boolean);
  }

  async function spFetchRadEntries(base, noreg) {
    const html = await spFetch(`${base}/hasil_rad/riwayat_hasil_rad/${encodeURIComponent(noreg)}`, { credentials: "same-origin" }).then((r) => r.text());
    const doc = spParseHtml(html);
    const rows = [...doc.querySelectorAll("tr")].filter((tr) => tr.querySelector("[onclick*='load_hasil_rad_detail']"));
    return rows.map((tr) => {
      const det = (tr.querySelector("[onclick*='load_hasil_rad_detail']").getAttribute("onclick") || "")
        .match(/load_hasil_rad_detail\('([^']+)'\s*,\s*'([^']+)'\)/);
      const cells = [...tr.cells].map((c) => c.textContent.replace(/\s+/g, " ").trim());
      // Bisa ada lebih dari satu tombol FILM dalam satu baris (mis. Thorax + CT/USG di hari sama).
      const films = [...tr.querySelectorAll("[onclick*='window.open']")]
        .map((b) => ((b.getAttribute("onclick") || "").match(/window\.open\('([^']+)'/) || [])[1])
        .filter(Boolean);
      return {
        noreg: det ? det[1] : "",
        idTrx: det ? det[2] : "",
        dateText: cells[0] || "",
        dateKey: spParseDateKey(cells[0]),
        sortKey: spParseDateTimeKey(cells[0]),
        exam: cells[4] || cells[cells.length - 2] || "Radiologi",
        films
      };
    });
  }

  function spParseLabSheet(html) {
    const doc = spParseHtml(html);
    const tables = [...doc.querySelectorAll("table")].filter((t) => !t.querySelector("table"));
    const info = {};
    const infoTable = tables.find((t) => /Nama Pasien/i.test(t.textContent));
    if (infoTable) {
      for (const tr of infoTable.rows) {
        const cells = [...tr.cells].map((c) => c.textContent.replace(/\s+/g, " ").trim());
        for (let i = 0; i + 1 < cells.length; i += 2) {
          const key = cells[i];
          const val = cells[i + 1].replace(/^:\s*/, "");
          if (key && val) info[key] = val;
        }
      }
    }
    const rows = [];
    const resultTable = tables.find((t) => /JENIS PEMERIKSAAN/i.test(t.textContent));
    if (resultTable) {
      for (const tr of [...resultTable.rows].slice(1)) {
        const cells = [...tr.cells];
        const txt = cells.map((c) => c.textContent.replace(/\s+/g, " ").trim());
        if (!txt.join("")) continue;
        if (cells.length === 1 || cells[0].colSpan > 1) { rows.push({ type: "section", name: txt[0] }); continue; }
        const flagged = /red/i.test(cells[1]?.getAttribute("style") || "");
        if (!txt[1] && !txt[2] && !txt[3]) { rows.push({ type: "group", name: txt[0] }); continue; }
        rows.push({ type: "item", name: txt[0], hasil: txt[1] || "", satuan: txt[2] || "", normal: txt[3] || "", ket: txt[4] || "", flagged });
      }
    }
    return { info, rows };
  }

  function spWrapText(ctx, text, maxWidth) {
    const words = String(text || "").split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";
    for (const w of words) {
      const test = line ? line + " " + w : w;
      if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = w; } else line = test;
    }
    if (line) lines.push(line);
    return lines.length ? lines : [""];
  }

  function spRenderLabSheet(sheet) {
    const W = 1000, PAD = 24, LH = 26;
    const cols = { name: PAD, hasil: 360, satuan: 500, normal: 630, ket: 800 };
    const measure = document.createElement("canvas").getContext("2d");
    measure.font = "16px Arial";
    const infoKeys = ["No. RM / No. Reg.", "Nama Pasien", "Tgl. Lahir / Umur", "Jenis Kelamin", "Tgl. Terima", "Tgl. Hasil", "Pengirim", "Penjamin"];
    const infoPairs = infoKeys.filter((k) => sheet.info[k]).map((k) => [k, sheet.info[k]]);
    let h = PAD + 34 + Math.ceil(infoPairs.length / 2) * LH + 20 + LH + 10;
    for (const r of sheet.rows) {
      if (r.type !== "item") { h += LH + 4; continue; }
      h += Math.max(1, spWrapText(measure, r.ket, W - cols.ket - PAD).length, spWrapText(measure, r.normal, cols.ket - cols.normal - 10).length) * LH;
    }
    h += PAD + 24;
    const cv = document.createElement("canvas");
    cv.width = W; cv.height = h;
    const ctx = cv.getContext("2d");
    ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, W, h);
    ctx.fillStyle = "#000"; ctx.textBaseline = "top";
    let y = PAD;
    ctx.font = "bold 22px Arial"; ctx.fillText("HASIL PEMERIKSAAN LABORATORIUM", PAD, y); y += 34;
    ctx.font = "15px Arial";
    infoPairs.forEach(([k, v], i) => {
      const x = i % 2 === 0 ? PAD : W / 2 + 10;
      if (i % 2 === 0 && i) y += LH;
      ctx.fillStyle = "#555"; ctx.fillText(k, x, y);
      ctx.fillStyle = "#000"; ctx.fillText(": " + v, x + 140, y);
    });
    y += LH + 16;
    ctx.fillStyle = "#eee"; ctx.fillRect(PAD - 6, y - 4, W - 2 * PAD + 12, LH + 4);
    ctx.fillStyle = "#000"; ctx.font = "bold 16px Arial";
    ctx.fillText("JENIS PEMERIKSAAN", cols.name, y); ctx.fillText("HASIL", cols.hasil, y);
    ctx.fillText("SATUAN", cols.satuan, y); ctx.fillText("NILAI NORMAL", cols.normal, y); ctx.fillText("KETERANGAN", cols.ket, y);
    y += LH + 10;
    for (const r of sheet.rows) {
      if (r.type === "section") { ctx.font = "bold 17px Arial"; ctx.fillStyle = "#000"; ctx.fillText(r.name, cols.name, y); y += LH + 4; continue; }
      if (r.type === "group") { ctx.font = "italic 16px Arial"; ctx.fillStyle = "#333"; ctx.fillText(r.name, cols.name, y); y += LH + 4; continue; }
      ctx.font = "16px Arial"; ctx.fillStyle = "#000";
      ctx.fillText(r.name, cols.name + 10, y);
      ctx.font = r.flagged ? "bold 16px Arial" : "16px Arial";
      ctx.fillStyle = r.flagged ? "#d00000" : "#000";
      ctx.fillText(r.hasil, cols.hasil, y);
      ctx.font = "16px Arial"; ctx.fillStyle = "#000";
      ctx.fillText(r.satuan, cols.satuan, y);
      const nLines = spWrapText(ctx, r.normal, cols.ket - cols.normal - 10);
      const kLines = spWrapText(ctx, r.ket, W - cols.ket - PAD);
      nLines.forEach((l, i) => ctx.fillText(l, cols.normal, y + i * LH));
      kLines.forEach((l, i) => ctx.fillText(l, cols.ket, y + i * LH));
      y += Math.max(1, nLines.length, kLines.length) * LH;
    }
    ctx.font = "12px Arial"; ctx.fillStyle = "#888";
    ctx.fillText("Disusun AUTO SCREENSHOT dari Smartplus untuk keperluan konsul.", PAD, h - PAD - 6);
    return cv.toDataURL("image/png");
  }

  // v3.12.0: ekspertise radiologi (USG; v3.24.0 juga rontgen & CT) dari hasil_rad/inner_hasil_rad_detail/<noreg>/<idtrx>.
  function spParseRadExpertise(html) {
    const doc = spParseHtml(html);
    const info = {};
    const infoTable = [...doc.querySelectorAll("table")]
      .find((t) => !t.querySelector("table") && /Pemeriksaan/i.test(t.textContent) && /Nama/i.test(t.textContent));
    if (infoTable) {
      for (const tr of infoTable.rows) {
        const cells = [...tr.cells].map((c) => c.textContent.replace(/\s+/g, " ").trim());
        for (let i = 0; i + 1 < cells.length; i += 2) {
          const val = cells[i + 1].replace(/^:\s*/, "");
          if (cells[i] && val) info[cells[i]] = val;
        }
      }
    }
    const p = doc.querySelector("p[style*='color']") || [...doc.querySelectorAll("p")].find((x) => x.textContent.trim().length > 20);
    let lines = [];
    if (p) {
      // Baris hanya dipisah oleh <br> (baris baru di sumber HTML bukan baris baru).
      p.querySelectorAll("br").forEach((br) => br.replaceWith("\u0001"));
      lines = p.textContent.split("\u0001").map((l) => l.replace(/\s+/g, " ").trim());
      lines = lines.filter((l, i, arr) => l || (i > 0 && arr[i - 1]));
      while (lines.length && !lines[0]) lines.shift();
      while (lines.length && !lines[lines.length - 1]) lines.pop();
    }
    const tds = [...doc.querySelectorAll("td")].map((td) => td.textContent.replace(/\s+/g, " ").trim()).filter(Boolean);
    const radiolog = tds.find((t) => /Sp\.?\s*Rad/i.test(t) && t.length < 80) || "";
    const place = tds.find((t) => /^Kota\b.*\d{4}$/i.test(t) && t.length < 60) || "";
    return { info, lines, radiolog, place };
  }

  function spRenderRadExpertise(exp) {
    const W = 1000, PAD = 24, LH = 24, TEXT_W = W - 2 * PAD - 20;
    const measure = document.createElement("canvas").getContext("2d");
    measure.font = "bold 16px Arial";
    // NIK & alamat sengaja tidak ikut.
    const infoKeys = ["Nama", "No. RM / No. Reg.", "TL / Umr / JK", "Tgl. Periksa", "Pemeriksaan", "Dokter Pengirim", "Poli"];
    const infoPairs = infoKeys.filter((k) => exp.info[k]).map((k) => [k, exp.info[k]]);
    let inKesan = false;
    const body = [];
    for (const l of exp.lines) {
      if (!l) { inKesan = false; body.push({ text: "", bold: false }); continue; }
      if (/^KESAN\b/i.test(l)) inKesan = true;
      spWrapText(measure, l, TEXT_W).forEach((t) => body.push({ text: t, bold: inKesan }));
    }
    const sig = [exp.place, exp.radiolog].filter(Boolean);
    const h = PAD + 34 + Math.ceil(infoPairs.length / 2) * LH + 24 + body.length * LH + 20 + sig.length * LH + PAD + 24;
    const cv = document.createElement("canvas");
    cv.width = W; cv.height = h;
    const ctx = cv.getContext("2d");
    ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, W, h);
    ctx.fillStyle = "#000"; ctx.textBaseline = "top";
    let y = PAD;
    ctx.font = "bold 22px Arial"; ctx.fillText("HASIL PEMERIKSAAN RADIOLOGI", PAD, y); y += 34;
    ctx.font = "15px Arial";
    infoPairs.forEach(([k, v], i) => {
      const x = i % 2 === 0 ? PAD : W / 2 + 10;
      if (i % 2 === 0 && i) y += LH;
      ctx.fillStyle = "#555"; ctx.fillText(k, x, y);
      ctx.fillStyle = "#000"; ctx.fillText(": " + v, x + 140, y);
    });
    y += LH + 8;
    ctx.fillStyle = "#ccc"; ctx.fillRect(PAD, y, W - 2 * PAD, 2); y += 14;
    ctx.fillStyle = "#000";
    for (const b of body) {
      ctx.font = b.bold ? "bold 16px Arial" : "16px Arial";
      ctx.fillText(b.text, PAD + 10, y);
      y += LH;
    }
    y += 20;
    ctx.font = "15px Arial"; ctx.textAlign = "right";
    sig.forEach((t) => { ctx.fillText(t, W - PAD - 20, y); y += LH; });
    ctx.textAlign = "left";
    ctx.font = "12px Arial"; ctx.fillStyle = "#888";
    ctx.fillText("Disusun AUTO SCREENSHOT dari Smartplus untuk keperluan konsul.", PAD, h - PAD - 6);
    return cv.toDataURL("image/png");
  }

  // Buka viewer film dengan window.name khusus, kumpulkan gambar yang dikirim balik.
  // v3.13.0: tunggu maks SP_FILM_TIMEOUT_MS (6 detik). Gambar yang sudah masuk tetap dipakai,
  // lalu jendela ditutup dan lanjut ke penunjang berikutnya.
  const SP_FILM_TIMEOUT_MS = 6000;
  function spCaptureFilm(url, index, timeoutMs = SP_FILM_TIMEOUT_MS) {
    return new Promise((resolve) => {
      const nonce = `${Date.now()}_${index}_${Math.random().toString(36).slice(2, 8)}`;
      const name = SP_FILM_WINDOW_PREFIX + encodeURIComponent(location.origin) + "|" + nonce;
      const got = [];
      let label = "";
      let done = false;
      let w = null;
      const collected = () => got.filter(Boolean);
      const finish = (val) => {
        if (done) return;
        done = true;
        window.removeEventListener("message", onMsg);
        try { if (w && !w.closed) w.close(); } catch (_) {}
        resolve({ label, ...val, images: collected() });
      };
      let filmOrigin = "";
      try { filmOrigin = new URL(url, location.href).origin; } catch (_) {}
      const onMsg = (ev) => {
        const d = ev.data;
        if (!d || d.type !== "sp-film" || d.nonce !== nonce) return;
        if (filmOrigin && ev.origin !== filmOrigin) return; // hanya dari server film itu sendiri
        if (d.label) label = d.label;
        if (d.part === "image") { got[d.k] = d.image; return; }
        if (d.part === "meta") return;
        if (Array.isArray(d.images)) d.images.forEach((img, k) => { got[k] = img; });
        finish({ ok: d.ok !== false && (!!collected().length || !!d.skipped), skipped: d.skipped, error: d.error });
      };
      window.addEventListener("message", onMsg);
      w = window.open(url, name, "width=900,height=700");
      if (!w) { finish({ ok: false, blocked: true, url }); return; }
      setTimeout(() => finish({
        ok: !!collected().length,
        timedOut: true,
        error: collected().length ? "" : `film tidak muncul dalam ${Math.round(timeoutMs / 1000)} detik`
      }), timeoutMs);
    });
  }

  function spShowPenunjangPanel(items, notes, opts = {}) {
    const PANEL_ID = "sp-auto-penunjang-panel";
    const prevScroll = document.getElementById(PANEL_ID)?.scrollTop || 0;
    document.getElementById(PANEL_ID)?.remove();
    const panel = document.createElement("div");
    panel.id = PANEL_ID;
    panel.style.cssText = "position:fixed;inset:4vh 50% auto auto;transform:translateX(50%);z-index:2147483647;background:#fff;border:2px solid #e91e63;border-radius:12px;padding:12px;width:min(94vw,760px);max-height:90vh;overflow:auto;box-shadow:0 8px 30px rgba(0,0,0,.35);font:14px/1.4 sans-serif;color:#222;";
    const head = document.createElement("div");
    // v3.27.0: judul satu baris (tombol — ✕ di kanan atas), di bawahnya deretan tombol aksi yang seragam.
    head.style.cssText = "display:flex;gap:6px;align-items:center;flex-wrap:wrap;position:sticky;top:-12px;background:#fff;padding:6px 0 8px;border-bottom:1px solid #eee;margin-bottom:8px;z-index:1;";
    head.innerHTML = `<b style="flex:1 1 100%;font-size:15px;line-height:28px"><span style="color:#999">⠿</span> 📸 AUTO SCREENSHOT — siap dikirim (${items.length})</b>`;
    const btnCss = (bg, fg) => `padding:7px 12px;font:600 13px Arial,sans-serif;background:${bg};color:${fg};border:0;border-radius:6px;cursor:pointer;`;
    spStyleHandle(head);
    const dlAll = document.createElement("button");
    dlAll.type = "button"; dlAll.textContent = "⬇ Unduh semua (PDF)";
    dlAll.style.cssText = btnCss("#e91e63", "#fff");
    dlAll.addEventListener("click", async () => {
      dlAll.disabled = true;
      try { await spDownloadAllPdf(items); } catch (err) { console.warn("[AUTO SCREENSHOT] pdf", err); toast("AUTO SCREENSHOT: gagal membuat PDF — " + (err.message || err)); }
      finally { dlAll.disabled = false; }
    });
    const closePanel = () => { panel.remove(); if (opts.onClose) opts.onClose(); };
    if (opts.soapText) {
      const cp = document.createElement("button");
      cp.type = "button";
      cp.textContent = opts.soapCopied ? "✅ SOAP tersalin (salin lagi)" : "📋 Salin SOAP";
      cp.style.cssText = btnCss("#1976d2", "#fff");
      cp.addEventListener("click", async () => {
        const ok = await copySoapText(opts.soapText);
        cp.textContent = ok ? "✅ SOAP tersalin" : "Gagal salin — pakai AUTO SOAP";
      });
      head.append(cp);
    }
    if (opts.onUpdate) {
      const up = document.createElement("button");
      up.type = "button";
      up.textContent = opts.status ? "⏳" : "🔄 Update";
      up.title = "Susun ulang SOAP dari Assesment GADAR (revisi ikut) dan tambahkan hasil penunjang baru";
      up.disabled = !!opts.status;
      up.style.cssText = btnCss("#2e7d32", "#fff");
      up.addEventListener("click", () => opts.onUpdate());
      head.append(up);
    }
    head.append(dlAll);
    head.classList.add("sp-panel-head");
    panel.append(head);
    const tip = document.createElement("div");
    tip.style.cssText = "font-size:12px;color:#555;margin-bottom:8px;";
    tip.textContent = "Gambar: klik kanan → Salin gambar, lalu Paste di WhatsApp — atau seret gambar ke WhatsApp. ⬇ Unduh semua (PDF) = 1 file berisi semua penunjang.";
    panel.append(tip);
    if (opts.soapText) {
      const box = document.createElement("div");
      box.style.cssText = "border:1px solid #90caf9;border-radius:8px;padding:8px;margin:6px 0;background:#f5faff;";
      const hd = document.createElement("div");
      hd.style.cssText = "font-weight:bold;margin-bottom:4px;";
      hd.textContent = "📝 SOAP (teks) — tekan 📋 Salin SOAP lalu Paste di WhatsApp";
      const ta = document.createElement("textarea");
      ta.readOnly = true;
      ta.value = opts.soapText;
      ta.style.cssText = "width:100%;height:160px;box-sizing:border-box;font:12px/1.35 monospace;";
      ta.addEventListener("focus", () => ta.select());
      box.append(hd, ta);
      panel.append(box);
    }
    if (opts.status) {
      const st = document.createElement("div");
      st.style.cssText = "background:#e3f2fd;border:1px solid #90caf9;border-radius:6px;padding:6px 8px;margin:4px 0;font-size:13px;";
      st.textContent = opts.status;
      panel.append(st);
    }
    for (const n of notes || []) {
      const d = document.createElement("div");
      d.style.cssText = "background:#fff3cd;border:1px solid #f0c36d;border-radius:6px;padding:6px 8px;margin:4px 0;font-size:13px;";
      if (n.button) {
        d.textContent = n.text + " ";
        const b = document.createElement("button");
        b.type = "button"; b.textContent = n.button; b.style.cssText = "padding:6px 10px;margin-left:4px;";
        b.addEventListener("click", n.onClick);
        d.append(b);
      } else d.textContent = n.text;
      panel.append(d);
    }
    for (const it of items) {
      const fig = document.createElement("div");
      fig.style.cssText = "margin:10px 0;border-top:1px solid #eee;padding-top:8px;";
      const cap = document.createElement("div");
      cap.style.cssText = "font-weight:bold;margin-bottom:4px;display:flex;gap:8px;align-items:center;";
      cap.textContent = it.caption;
      const dl = document.createElement("a");
      dl.href = it.dataUrl; dl.download = it.fileName; dl.textContent = "⬇"; dl.title = "Unduh";
      dl.style.cssText = "text-decoration:none;padding:2px 8px;border:1px solid #ccc;border-radius:6px;";
      cap.append(dl);
      const img = document.createElement("img");
      img.src = it.dataUrl; img.alt = it.caption;
      img.style.cssText = "max-width:100%;border:1px solid #ddd;cursor:grab;";
      // v3.20.0: seret gambar ke WhatsApp Web/Desktop -> dikirim sebagai file gambar.
      img.draggable = true;
      img.addEventListener("dragstart", (e) => {
        try { e.dataTransfer.items.add(spDataUrlToFile(it.dataUrl, it.fileName)); } catch (_) {}
      });
      fig.append(cap, img);
      panel.append(fig);
    }
    document.documentElement.appendChild(panel);
    panel.scrollTop = prevScroll;
    spMakeDraggable(panel, PANEL_ID, (t) => !!t.closest(".sp-panel-head"));
    spWindowControls(panel, PANEL_ID, ".sp-panel-head", head, closePanel);
    return panel;
  }

  // v3.18.0: "Unduh semua" = SATU file PDF (1 gambar per halaman, keterangan di atas).
  // Penulis PDF sederhana tanpa pustaka luar (gambar JPEG/DCTDecode + font Helvetica bawaan PDF).
  function spBuildPdfFromJpegs(pages) {
    const enc = new TextEncoder();
    const parts = [];
    const offsets = [];
    let len = 0;
    const push = (x) => { const b = typeof x === "string" ? enc.encode(x) : x; parts.push(b); len += b.length; };
    const obj = (num, body) => { offsets[num] = len; push(`${num} 0 obj\n`); body(); push("\nendobj\n"); };
    const pdfText = (s) => String(s || "").replace(/[\u2013\u2014]/g, "-").replace(/[^\x20-\x7E]/g, "").replace(/\s+/g, " ").trim().replace(/[\\()]/g, (c) => "\\" + c);
    const n = pages.length;
    push("%PDF-1.4\n%âãÏÓ\n");
    obj(1, () => push("<< /Type /Catalog /Pages 2 0 R >>"));
    obj(2, () => push(`<< /Type /Pages /Count ${n} /Kids [${pages.map((_, i) => `${3 + 3 * i} 0 R`).join(" ")}] >>`));
    pages.forEach((pg, i) => {
      const BAND = 26;
      let W = 595;
      let H = Math.round((pg.h * W / pg.w) * 100) / 100;
      if (H + BAND > 14000) { const k = (14000 - BAND) / H; W = Math.round(W * k * 100) / 100; H = 14000 - BAND; }
      const pn = 3 + 3 * i;
      obj(pn, () => push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H + BAND}] /Resources << /XObject << /Im${i} ${pn + 2} 0 R >> /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >> /Contents ${pn + 1} 0 R >>`));
      const content = `BT /F1 10 Tf 12 ${H + 9} Td (${pdfText(pg.caption)}) Tj ET\nq ${W} 0 0 ${H} 0 0 cm /Im${i} Do Q`;
      obj(pn + 1, () => push(`<< /Length ${enc.encode(content).length} >>\nstream\n${content}\nendstream`));
      obj(pn + 2, () => {
        push(`<< /Type /XObject /Subtype /Image /Width ${pg.w} /Height ${pg.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${pg.bytes.length} >>\nstream\n`);
        push(pg.bytes);
        push("\nendstream");
      });
    });
    const total = 3 + 3 * n;
    const xref = len;
    let x = `xref\n0 ${total}\n0000000000 65535 f \n`;
    for (let k = 1; k < total; k++) x += String(offsets[k]).padStart(10, "0") + " 00000 n \n";
    push(x + `trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
    return new Blob(parts, { type: "application/pdf" });
  }

  async function spImageToJpeg(dataUrl) {
    const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = dataUrl; });
    const cv = document.createElement("canvas");
    cv.width = img.naturalWidth; cv.height = img.naturalHeight;
    const ctx = cv.getContext("2d");
    ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.drawImage(img, 0, 0);
    const bin = atob(cv.toDataURL("image/jpeg", 0.9).split(",")[1]);
    const bytes = new Uint8Array(bin.length);
    for (let k = 0; k < bin.length; k++) bytes[k] = bin.charCodeAt(k);
    return { bytes, w: cv.width, h: cv.height };
  }

  async function spDownloadAllPdf(items) {
    if (!items.length) { toast("AUTO SCREENSHOT: belum ada gambar."); return; }
    toast("AUTO SCREENSHOT: menyusun PDF...");
    const pages = [];
    for (const it of items) pages.push({ ...(await spImageToJpeg(it.dataUrl)), caption: it.caption });
    const blob = spBuildPdfFromJpegs(pages);
    const d = new Date();
    const p2 = (v) => String(v).padStart(2, "0");
    const name = `Penunjang_${spSafeName(getCurrentNoregAny() || "pasien")}_${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}.pdf`;
    const url = URL.createObjectURL(blob);
    spDownload(url, name);
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    toast(`AUTO SCREENSHOT: ${name} (${pages.length} halaman) diunduh.`);
  }

  function spDataUrlToFile(dataUrl, fileName) {
    const [head, b64] = String(dataUrl).split(",");
    const type = (head.match(/data:([^;]+)/) || [])[1] || "image/png";
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let k = 0; k < bin.length; k++) bytes[k] = bin.charCodeAt(k);
    return new File([bytes], fileName || "gambar.png", { type });
  }

  function spDownload(dataUrl, fileName) {
    const a = document.createElement("a");
    a.href = dataUrl; a.download = fileName;
    document.documentElement.appendChild(a);
    a.click();
    a.remove();
  }

  function spSafeName(s) {
    return String(s || "").replace(/[^A-Za-z0-9_-]+/g, "_").replace(/_+/g, "_").slice(0, 40);
  }

  // v3.19.0: PAKET KONSUL = AUTO SOAP + AUTO SCREENSHOT dalam satu panel.
  // v3.20.0 (instruksi dokter): TIDAK langsung unduh PDF; SOAP ditampilkan sebagai TEKS (Salin -> Paste ke WhatsApp),
  // bukan gambar; penunjang tetap gambar (klik kanan Salin gambar / seret ke WhatsApp; PDF hanya bila tombol ditekan).
  async function runPaketKonsul() {
    toast("PAKET KONSUL: menyusun SOAP...");
    let soap = null;
    try { soap = await runAutoSoap({ returnOnly: true }); } catch (err) { console.warn("[PAKET KONSUL] soap", err); }
    let copied = false;
    if (soap) {
      copied = await copySoapText(soap).catch(() => false);
      toast(copied ? "PAKET KONSUL: SOAP tersalin. Mengambil penunjang..." : "PAKET KONSUL: SOAP siap — tekan 📋 Salin SOAP di panel. Mengambil penunjang...");
    } else {
      toast("PAKET KONSUL: SOAP tidak bisa disusun (GADAR kunjungan ini tidak ditemukan). Lanjut penunjang saja.");
    }
    await runAutoPenunjang({
      soapText: soap || "",
      soapCopied: copied,
      // v3.21.0: tombol 🔄 Update -> SOAP disusun ulang dari GADAR (revisi ikut), penunjang baru ditambahkan.
      refreshSoap: async () => {
        try { return await runAutoSoap({ returnOnly: true, refresh: true }); } catch (err) { console.warn("[PAKET KONSUL] update soap", err); return null; }
      }
    });
  }

  // opts (dari PAKET KONSUL): soapText -> kotak teks SOAP + tombol Salin SOAP di panel.
  async function runAutoPenunjang(opts = {}) {
    const noreg = getCurrentNoregAny();
    if (!noreg) { toast("AUTO SCREENSHOT: buka halaman pasien (detail IGD / e-Ranap) terlebih dahulu."); return; }
    const base = smartplusBaseUrl();
    const items = [];
    let notes = [];
    let blockedFilms = [];
    let status = "";
    let closedByUser = false;
    let newMark = "";
    let update = null;
    toast("AUTO SCREENSHOT: mengambil hasil lab 1 minggu...");
    // Daftar radiologi diambil paralel sejak awal (lab tetap ditampilkan lebih dulu).
    const radListP = spFetchRadEntries(base, noreg).then((list) => ({ list }), (error) => ({ error }));

    const render = () => {
      if (closedByUser) return;
      spShowPenunjangPanel(items, blockedFilms.length ? [...notes, {
        text: `Browser memblokir jendela film (${blockedFilms.length}).`,
        button: "🩻 Ambil film",
        onClick: async () => { closedByUser = false; const again = blockedFilms; blockedFilms = []; await addFilms(again); status = ""; render(); }
      }] : notes, { status, soapText: opts.soapText, soapCopied: opts.soapCopied, onUpdate: update, onClose: () => { closedByUser = true; } });
    };

    const seenLab = new Set();
    const addLabs = async (all) => {
      // v3.21.0: lab yang sudah tampil tidak diambil ulang (tombol Update).
      const entries = all.filter((e) => !seenLab.has(`${e.idSample}|${e.noreg}`));
      // Semua lembar lab diambil bersamaan supaya cepat; urutan tetap terbaru dulu.
      const sheets = await Promise.all(entries.map((e) =>
        spFetch(`${base}/hasil_lab/hasil_lab/print_hasil_labx_by_id_sample/${encodeURIComponent(e.idSample)}/${encodeURIComponent(e.noreg)}`, { credentials: "same-origin" })
          .then((r) => r.text()).then(spParseLabSheet).catch(() => null)));
      entries.forEach((e, i) => {
        const sheet = sheets[i];
        if (!sheet) { notes.push({ text: `Lab ${e.dateText}: gagal dimuat.` }); return; }
        if (!sheet.rows.length) return;
        seenLab.add(`${e.idSample}|${e.noreg}`);
        items.push({ caption: `${newMark}🧪 Lab ${e.dateText}`, dataUrl: spRenderLabSheet(sheet), fileName: `Lab_${spSafeName(e.dateText)}.png` });
      });
    };
    // Satu study PACS bisa muncul di beberapa baris (mis. FILM ke-2 di baris Thorax = CT hari itu):
    // dibuka sekali saja (dedup alamat). v3.21.0: seenFilm = sudah diproses (dipakai juga oleh tombol Update).
    const seenFilm = new Set();
    const filmsOf = (rads) => {
      const inList = new Set();
      return rads.flatMap((r) => r.films.map((url, i) => ({
        url,
        caption: `${newMark}🩻 ${r.exam} ${r.dateText}${r.films.length > 1 ? ` (film ${i + 1})` : ""}`,
        base: `Film_${spSafeName(r.exam)}_${spSafeName(r.dateKey)}${r.films.length > 1 ? "_" + (i + 1) : ""}`
      }))).filter((f) => !seenFilm.has(f.url) && (inList.has(f.url) ? false : (inList.add(f.url), true)));
    };
    const addFilms = async (films) => {
      for (let i = 0; i < films.length; i++) {
        const f = films[i];
        seenFilm.add(f.url);
        status = `⏳ Mengambil film ${i + 1}/${films.length} (${f.caption}), maks ${SP_FILM_TIMEOUT_MS / 1000} detik...`;
        render();
        const res = await spCaptureFilm(f.url, i);
        if (res.blocked) { blockedFilms.push(f); continue; }
        if (res.skipped) { notes.push({ text: `${f.caption}: berisi film ${res.skipped} — dilewati (cukup ekspertise).` }); continue; }
        const imgs = res.images || [];
        if (!imgs.length) { notes.push({ text: `${f.caption}: ${res.error || "gagal"} — dilewati.` }); continue; }
        if (res.timedOut) notes.push({ text: `${f.caption}: baru ${imgs.length} gambar dalam ${SP_FILM_TIMEOUT_MS / 1000} detik — dipakai yang ada.` });
        const cap = res.label ? `${f.caption} — ${res.label}` : f.caption;
        imgs.forEach((src, k) => items.push({
          caption: `${cap}${imgs.length > 1 ? ` — gambar ${k + 1}` : ""}`,
          dataUrl: src,
          fileName: `${f.base}${imgs.length > 1 ? "_" + (k + 1) : ""}.png`
        }));
      }
    };
    const seenExp = new Set();
    const addExpertise = async (rads) => {
      for (const r of rads.filter((x) => !seenExp.has(`${x.noreg}|${x.idTrx}`))) {
        try {
          const html = await spFetch(`${base}/hasil_rad/hasil_rad/inner_hasil_rad_detail/${encodeURIComponent(r.noreg)}/${encodeURIComponent(r.idTrx)}`, { credentials: "same-origin" }).then((x) => x.text());
          const exp = spParseRadExpertise(html);
          // Ekspertise belum ada -> tidak ditandai, supaya tombol Update bisa mengambilnya nanti.
          // v3.25.0 (instruksi dokter): ekspertise dianggap SUDAH ADA hanya bila memuat kata "KESAN" (mis. "Kesan :").
          // v3.26.0: echocardiography biasanya memakai "Kesimpulan" -> juga diterima.
          if (!exp.lines.length || !exp.lines.some((l) => /\bKESAN\b|\bKESIMPULAN\b/i.test(l))) { notes.push({ text: `Ekspertise ${r.exam} ${r.dateText} belum tersedia.` }); continue; }
          seenExp.add(`${r.noreg}|${r.idTrx}`);
          items.push({ caption: `${newMark}📝 Ekspertise ${r.exam} ${r.dateText}`, dataUrl: spRenderRadExpertise(exp), fileName: `Ekspertise_${spSafeName(r.exam)}_${spSafeName(r.dateKey)}.png` });
        } catch (err) {
          notes.push({ text: `Ekspertise ${r.exam} ${r.dateText}: gagal dimuat — dilewati.` });
        }
      }
    };

    // v3.21.0: pengumpulan dibuat ulang-pakai; tombol 🔄 Update hanya menambahkan hasil yang BELUM ada.
    const collect = async (radListPromise) => {
    // ---- 1) LAB: semua hasil 1 minggu terakhir, langsung ditampilkan ----
    try {
      const { recent, latestOlder } = spPickRecentEntries(await spFetchLabEntries(base, noreg), SP_LAB_WINDOW);
      await addLabs(recent);
      if (!recent.length) {
        notes.push(latestOlder.length ? {
          text: `Tidak ada hasil lab dalam 1 minggu terakhir. Hasil terakhir: ${latestOlder[0].dateText}.`,
          button: "Ambil lab terakhir",
          onClick: async () => { notes = notes.filter((n) => n.button !== "Ambil lab terakhir"); await addLabs(latestOlder); render(); }
        } : { text: "Tidak ada hasil laboratorium." });
      }
    } catch (err) {
      console.warn("[AUTO SCREENSHOT] lab", err);
      notes.push({ text: "Gagal mengambil hasil lab: " + (err.message || err) });
    }
    status = "⏳ Mengambil radiologi...";
    render();

    // ---- 2) RADIOLOGI 1 bulan: ekspertise semua pemeriksaan (bila sudah ada) lebih dulu, lalu film rontgen
    //         (maks 6 detik per film). v3.24.0: USG & CT tanpa film. ----
    try {
      const radList = await radListPromise;
      if (radList.error) throw radList.error;
      const { recent, latestOlder } = spPickRecentEntries(radList.list, SP_RAD_WINDOW);
      const filmRows = recent.filter((r) => !spNoFilmExam(r.exam));
      await addExpertise(recent);
      const films = filmsOf(filmRows);
      const noFilm = filmRows.filter((r) => !r.films.length);
      if (noFilm.length) notes.push({ text: `Tombol FILM belum tersedia: ${noFilm.map((r) => `${r.exam} ${r.dateText}`).join(", ")}.` });
      if (films.length) await addFilms(films);
      if (!recent.length) {
        const olderRows = latestOlder.filter((r) => !spNoFilmExam(r.exam));
        notes.push(latestOlder.length ? {
          text: `Tidak ada radiologi dalam 1 bulan terakhir. Terakhir: ${latestOlder[0].dateText} (${latestOlder.map((r) => r.exam).join(", ")}).`,
          button: "Ambil radiologi terakhir",
          onClick: async () => { notes = notes.filter((n) => n.button !== "Ambil radiologi terakhir"); await addExpertise(latestOlder); await addFilms(filmsOf(olderRows)); status = ""; render(); }
        } : { text: "Tidak ada hasil radiologi." });
      }
    } catch (err) {
      console.warn("[AUTO SCREENSHOT] rad", err);
      notes.push({ text: "Gagal mengambil daftar radiologi: " + (err.message || err) });
    }
    };

    let busy = false;
    update = async () => {
      if (busy) return;
      busy = true;
      closedByUser = false;
      try {
        let soapNote = "";
        if (opts.refreshSoap) {
          status = "⏳ Memperbarui SOAP dari Assesment GADAR...";
          render();
          const fresh = await opts.refreshSoap();
          if (fresh) { opts.soapText = fresh; opts.soapCopied = false; soapNote = ", SOAP diperbarui"; }
          else soapNote = ", SOAP gagal diperbarui";
        }
        const before = items.length;
        notes = [];
        newMark = "🆕 ";
        status = "⏳ Mencari hasil penunjang baru...";
        render();
        await collect(spFetchRadEntries(base, noreg).then((list) => ({ list }), (error) => ({ error })));
        status = "";
        render();
        toast(`UPDATE: ${items.length - before} gambar penunjang baru${soapNote}.`);
      } finally {
        busy = false;
      }
    };

    await collect(radListP);

    status = "";
    render();
    toast(`AUTO SCREENSHOT: ${items.length} gambar siap dikirim (lab 1 minggu, radiologi 1 bulan).`);
  }

  // Dijalankan DI JENDELA VIEWER PACS (Orthanc/Osimis) yang dibuka oleh AUTO SCREENSHOT.
  // v3.13.0: tiap gambar dikirim begitu siap (bukan menunggu semua), karena Smartplus hanya menunggu 6 detik.
  async function runOrthancCapture() {
    const parts = String(window.name || "").split("|");
    const targetOrigin = decodeURIComponent(parts[1] || "");
    const nonce = parts[2] || "";
    const send = (payload) => {
      try { if (window.opener && targetOrigin) window.opener.postMessage({ type: "sp-film", nonce, ...payload }, targetOrigin); } catch (_) {}
    };
    const blobToDataUrl = (blob) => new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = rej; fr.readAsDataURL(blob); });
    const byInstanceNumber = (a, b) => (Number(a.MainDicomTags?.InstanceNumber) || 0) - (Number(b.MainDicomTags?.InstanceNumber) || 0);
    try {
      const study = new URLSearchParams(location.search).get("study");
      if (!study) throw new Error("ID study tidak ada di alamat viewer.");
      const get = async (path) => {
        const r = await fetch(location.origin + path, { credentials: "include" });
        if (!r.ok) throw new Error(`PACS ${r.status} (${path.split("/")[1]})`);
        return r;
      };
      const studyInfoP = get(`/studies/${study}`).then((r) => r.json()).catch(() => null);
      const series = await (await get(`/studies/${study}/series`)).json();
      const isImg = (s) => !/^(SR|PR|KO|DOC|REG|SEG)$/i.test(s.MainDicomTags?.Modality || "");
      // v3.12.0: film USG tidak diambil (USG cukup ekspertise). v3.24.0: CT/MRI juga tidak (cukup ekspertise).
      const isUs = (s) => /^(US|CT|MR)$/i.test(s.MainDicomTags?.Modality || "");
      if (series.some(isImg) && series.filter(isImg).every(isUs)) {
        const m = series.filter(isImg).map((x) => String(x.MainDicomTags?.Modality || "").toUpperCase());
        send({ part: "done", ok: true, skipped: m.includes("CT") ? "CT" : m.includes("MR") ? "MRI" : "USG" });
        setTimeout(() => { try { window.close(); } catch (_) {} }, 300);
        return;
      }
      const st = await studyInfoP;
      const mods = [...new Set(series.filter(isImg).filter((s) => !isUs(s)).map((s) => s.MainDicomTags?.Modality).filter(Boolean))].join("/");
      const label = [mods, st?.MainDicomTags?.StudyDescription].filter(Boolean).join(" ").trim();
      if (label) send({ part: "meta", label });
      const usable = series
        .filter((s) => isImg(s) && !isUs(s))
        .map((s) => ({ id: s.ID, n: (s.Instances || []).length, num: Number(s.MainDicomTags?.SeriesNumber) || 9999 }))
        .filter((s) => s.n > 0)
        .sort((a, b) => a.num - b.num);
      // Film/rontgen: seri kecil (<=12 gambar) diambil semua. CT/MRI tanpa seri film:
      // ambil maks 9 irisan merata dari seri terkecil.
      const small = usable.filter((s) => s.n <= 12);
      const targets = [];
      if (small.length) {
        const lists = await Promise.all(small.map((s) => get(`/series/${s.id}/instances`).then((r) => r.json())));
        for (const inst of lists) targets.push(...inst.sort(byInstanceNumber).map((i) => i.ID));
      } else if (usable.length) {
        const s = usable.reduce((a, b) => (a.n <= b.n ? a : b));
        const inst = (await (await get(`/series/${s.id}/instances`)).json()).sort(byInstanceNumber);
        const k = Math.min(9, inst.length);
        for (let i = 0; i < k; i++) targets.push(inst[Math.floor(((i + 0.5) * inst.length) / k)].ID);
      }
      if (!targets.length) throw new Error("Tidak ada gambar di study ini.");
      let sent = 0;
      await Promise.all(targets.slice(0, 16).map(async (id, k) => {
        try {
          const image = await blobToDataUrl(await (await get(`/instances/${id}/preview`)).blob());
          send({ part: "image", k, image, label });
          sent++;
        } catch (_) {}
      }));
      send(sent ? { part: "done", ok: true, label } : { part: "done", ok: false, error: "Gambar film gagal dimuat." });
    } catch (err) {
      send({ part: "done", ok: false, error: String(err && err.message || err) });
    }
    setTimeout(() => { try { window.close(); } catch (_) {} }, 300);
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
    // v3.21.0: kembali ke tab E-RAWAT DARURAT dulu (draft Resep Online yang sudah ada tetap utuh).
    await ensureMainEmrTab();
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
    // v3.39.0: Smartplus menolak obat lewat SweetAlert (mis. "Jumlah R Sudah Melebihi Batas" pada pasien BPJS) —
    // laporkan sebagai gagal, jangan dianggap berhasil.
    const alertBox = [...document.querySelectorAll(".swal2-popup, .sweet-alert")].find((el) => visible(el));
    const alertText = alertBox ? (alertBox.innerText || "").replace(/\s+/g, " ").replace(/\bOK\b\s*$/, "").trim() : "";
    if (alertText && /melebihi|batas|tidak bisa|tidak dapat|gagal|habis|kosong/i.test(alertText)) {
      throw new Error(`Ditolak Smartplus: ${alertText}`);
    }
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
      /* v3.42.0: KOMBINASI RESEP — warna kalem: latar panel lavender lembut (beda dari putih Smartplus), tiap bagian
         berupa kartu dengan garis kiri berwarna; judul & kaki menempel; obat = tombol-pil per golongan. */
      #${MENU_ID}.sp-package-modal{overflow-x:hidden!important;padding:0 12px!important;color:#1f2937!important;background:#f5f4fa!important;border:1px solid #ddd6fe!important;}
      #${MENU_ID}.sp-package-modal > .sp-title{position:sticky;top:0;z-index:6;background:#ede9fe;color:#4c1d95;margin:0 -12px 0!important;padding:11px 84px 9px 12px!important;border-bottom:1px solid #ddd6fe;font-size:15px;}
      #${MENU_ID} .sp-pkg-muted{color:#6b7280;font-size:11.5px;font-weight:400;}
      #${MENU_ID} .sp-pkg-bar{display:flex;align-items:center;flex-wrap:wrap;gap:8px;margin:10px 0 6px;padding:7px 10px;background:#fff;border:1px solid #e7e3f3;border-radius:10px;}
      #${MENU_ID} .sp-pkg-badge{display:inline-block;padding:3px 9px;border-radius:999px;font:800 11px/1.4 Arial,sans-serif;letter-spacing:.4px;background:#e0e7ff;color:#3730a3;}
      #${MENU_ID} .sp-pkg-badge.is-child{background:#cffafe;color:#0e7490;}
      #${MENU_ID} .sp-pkg-badge.is-warn{background:#fef3c7;color:#92400e;}
      #${MENU_ID} .sp-pkg-age{font:700 13px Arial,sans-serif;color:#111827;}
      #${MENU_ID} .sp-pkg-bb{display:inline-flex;align-items:center;gap:5px;font:700 13px Arial,sans-serif;color:#111827;}
      #${MENU_ID} .sp-pkg-bb input{width:58px!important;padding:5px 7px!important;border:1px solid #c7d2fe!important;border-radius:7px!important;font:700 13px Arial,sans-serif!important;text-align:center;background:#fff!important;}
      #${MENU_ID} .sp-pkg-hint{margin:0 0 6px;padding:6px 10px;border-radius:8px;background:#fffbeb;border:1px solid #fde68a;color:#92400e;font-size:12px;}
      #${MENU_ID} .sp-pkg-anam-wrap{margin:0 0 8px;}
      #${MENU_ID} .sp-pkg-anam{font-size:12px;line-height:17px;color:#1e3a5f;background:#eef6ff;border:1px solid #dbeafe;border-left:4px solid #60a5fa;border-radius:10px;padding:6px 10px;max-height:48px;overflow:hidden;}
      #${MENU_ID} .sp-pkg-anam:not(.is-open) > div:last-child{display:none!important;}
      #${MENU_ID} .sp-pkg-anam > div{display:inline!important;margin:0 10px 0 0!important;}
      #${MENU_ID} .sp-pkg-anam.is-open{max-height:none;white-space:pre-line;}
      #${MENU_ID} .sp-pkg-anam.is-open > div{display:block!important;margin:0 0 3px!important;}
      #${MENU_ID} .sp-pkg-link{width:auto!important;margin:2px 0 0 4px!important;padding:0!important;background:none!important;border:0!important;color:#6d28d9!important;font:600 11.5px Arial,sans-serif!important;cursor:pointer;}
      #${MENU_ID} .sp-pkg-sugrow{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 0 6px;}
      #${MENU_ID} .sp-pkg-sugnote{font-size:11.5px;color:#57534e;}
      #${MENU_ID} .sp-pkg-tools{display:flex;gap:6px;flex:0 0 auto;}
      #${MENU_ID} .sp-pkg-tool{width:auto!important;margin:0!important;padding:6px 10px!important;border:1px solid #e0dbef!important;border-radius:8px!important;background:#fff!important;color:#374151!important;font:600 12px Arial,sans-serif!important;white-space:nowrap;}
      #${MENU_ID} .sp-pkg-tool:hover{background:#f5f3ff!important;}
      #${MENU_ID} .sp-pkg-row{display:grid;grid-template-columns:112px minmax(0,1fr);gap:8px;align-items:start;margin:0 0 7px;padding:8px 10px;background:var(--gb,#fff);border:1px solid #ebe8f3;border-left:4px solid var(--gc,#94a3b8);border-radius:10px;}
      #${MENU_ID} .sp-pkg-row-label{font:800 10.5px/1.3 Arial,sans-serif;letter-spacing:.3px;color:var(--gc,#6b7280);text-transform:uppercase;padding-top:7px;}
      #${MENU_ID} .sp-pkg-row-label small{display:block;margin-top:3px;font:400 10.5px/1.25 Arial,sans-serif;letter-spacing:0;text-transform:none;color:#6b7280;}
      #${MENU_ID} .sp-pkg-pills{display:flex;flex-wrap:wrap;gap:5px;}
      #${MENU_ID} .sp-pill{display:inline-flex;align-items:center;gap:4px;width:auto;margin:0;padding:5px 11px;border:1px solid #d6d3e0;border-radius:999px;background:#fff;color:#1f2937;font:600 12.5px/1.25 Arial,sans-serif;text-align:left;cursor:pointer;box-shadow:0 1px 0 rgba(15,23,42,.03);}
      #${MENU_ID} .sp-pill:hover{background:#f5f3ff;border-color:#c4b5fd;}
      #${MENU_ID} .sp-pill.is-sug{border-color:#f59e0b;border-style:dashed;background:#fffbeb;}
      #${MENU_ID} .sp-pill.is-on{background:#16a34a;border:1px solid #16a34a;color:#fff;}
      #${MENU_ID} .sp-pill.is-on:hover{background:#15803d;}
      #${MENU_ID} .sp-pill.is-err:not(.is-on){color:#a1a1aa;border-style:dashed;background:#fafafa;}
      #${MENU_ID} .sp-pill-ic{font-size:11px;}
      #${MENU_ID} .sp-act input{display:none;}
      #${MENU_ID} .sp-act.is-on{background:#2563eb;border-color:#2563eb;color:#fff;}
      #${MENU_ID} .sp-pkg-foot{position:sticky;bottom:0;z-index:6;background:#faf9ff;margin:4px -12px 0;padding:9px 12px 11px;border-top:1px solid #ddd6fe;box-shadow:0 -6px 14px rgba(76,29,149,.08);}
      #${MENU_ID} .sp-pkg-foot-head{display:flex;align-items:center;gap:8px;font-size:12.5px;margin-bottom:5px;color:#4c1d95;}
      #${MENU_ID} .sp-pkg-rcount{padding:1px 8px;border-radius:999px;background:#ede9fe;color:#5b21b6;font:700 11px/1.6 Arial,sans-serif;}
      #${MENU_ID} .sp-pkg-rcount.is-over{background:#fee2e2;color:#b91c1c;}
      #${MENU_ID} .sp-pkg-selected{display:flex;flex-wrap:wrap;gap:5px;max-height:76px;overflow:auto;}
      #${MENU_ID} .sp-sel-chip{display:inline-flex;align-items:center;gap:4px;padding:2px 3px 2px 9px;border-radius:999px;background:#ecfdf5;border:1px solid #a7f3d0;color:#065f46;font:600 12px/1.5 Arial,sans-serif;}
      #${MENU_ID} .sp-sel-chip.is-act{background:#eff6ff;border-color:#bfdbfe;color:#1e40af;}
      #${MENU_ID} .sp-sel-x{width:18px!important;height:18px;margin:0!important;padding:0!important;border:0!important;border-radius:50%!important;background:transparent!important;color:inherit!important;font:700 14px/18px Arial,sans-serif!important;text-align:center!important;cursor:pointer;}
      #${MENU_ID} .sp-sel-x:hover{background:rgba(0,0,0,.08)!important;}
      #${MENU_ID} .sp-pkg-warn{margin-top:6px;color:#b91c1c;font-size:11.5px;}
      #${MENU_ID} .sp-pkg-actions{display:flex;gap:8px;margin-top:8px;}
      #${MENU_ID} .sp-pkg-back{width:44px!important;margin:0!important;padding:10px 0!important;border:1px solid #e0dbef!important;border-radius:9px!important;background:#fff!important;color:#4c1d95!important;font:700 15px Arial,sans-serif!important;text-align:center!important;}
      #${MENU_ID} .sp-pkg-acc{flex:1;width:auto!important;margin:0!important;padding:11px 14px!important;border:0!important;border-radius:9px!important;background:#6d28d9!important;color:#fff!important;font:800 14px Arial,sans-serif!important;text-align:center!important;cursor:pointer;}
      #${MENU_ID} .sp-pkg-acc:hover{background:#5b21b6!important;}
      #${MENU_ID} .sp-pkg-acc:disabled{background:#c4b5fd!important;cursor:not-allowed;}
      /* v3.47.0: RESEP PULANG - tabel preview */
      #${MENU_ID} .sp-rp-table-wrap{overflow-x:auto;margin:0 0 6px;background:#fff;border:1px solid #e7e3f3;border-radius:10px;}
      #${MENU_ID} .sp-rp-table{width:100%;border-collapse:collapse;font-size:12px;}
      #${MENU_ID} .sp-rp-table th{background:#f4f1fb;color:#5b3aa8;text-align:left;font-size:10.5px;padding:6px;border-bottom:1px solid #e7e3f3;white-space:nowrap;}
      #${MENU_ID} .sp-rp-table td{padding:4px 5px;border-bottom:1px solid #f1f1f4;vertical-align:middle;}
      #${MENU_ID} .sp-rp-table input{width:100%!important;min-width:56px;padding:4px 6px!important;border:1px solid #ddd6fe!important;border-radius:6px!important;font:12px Arial,sans-serif!important;background:#fcfcff!important;}
      #${MENU_ID} .sp-rp-table .sp-rp-qty{min-width:44px;text-align:center;font-weight:700!important;}
      #${MENU_ID} .sp-rp-table input[data-f="waktu"]{min-width:118px;}
      #${MENU_ID} .sp-rp-table input[data-f="frekuensi"]{min-width:92px;}
      #${MENU_ID} .sp-rp-name{font-weight:700;min-width:120px;}
      #${MENU_ID} .sp-rp-name small{display:block;font-weight:400;color:#8b8b98;font-size:10px;}
      /* v3.45.0: MULTIPLE VISIT / PULANG */
      #${MENU_ID} .sp-mv-q{width:100%!important;margin:0 0 8px!important;padding:9px 11px!important;border:1px solid #c7d2fe!important;border-radius:9px!important;font:14px Arial,sans-serif!important;background:#fff!important;}
      #${MENU_ID} .sp-mv-results{display:flex;flex-direction:column;gap:5px;margin-bottom:6px;}
      #${MENU_ID} .sp-mv-item{display:block;width:100%!important;margin:0!important;padding:8px 11px!important;text-align:left!important;background:#fff!important;border:1px solid #e7e3f3!important;border-left:4px solid #a78bfa!important;border-radius:9px!important;cursor:pointer;color:#1f2937!important;font-weight:400!important;}
      #${MENU_ID} .sp-mv-item:hover{background:#f5f3ff!important;}
      #${MENU_ID} .sp-mv-item.is-on{background:#ecfdf5!important;border-left-color:#16a34a!important;}
      #${MENU_ID} .sp-mv-item-name{display:block;font:700 13px Arial,sans-serif;}
      #${MENU_ID} .sp-mv-item-sub{display:block;font:11.5px/1.35 Arial,sans-serif;color:#6b7280;margin-top:2px;}
      #${MENU_ID} .sp-mv-card{margin:0 0 9px;padding:9px 11px;background:#fff;border:1px solid #e7e3f3;border-left:4px solid #8b5cf6;border-radius:10px;}
      #${MENU_ID} .sp-mv-card.is-saved{border-left-color:#16a34a;background:#f6fef9;}
      #${MENU_ID} .sp-mv-card.is-err{border-left-color:#dc2626;}
      #${MENU_ID} .sp-mv-head{display:flex;flex-wrap:wrap;align-items:center;gap:4px 10px;margin-bottom:6px;}
      #${MENU_ID} .sp-mv-inc{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:#1f2937;cursor:pointer;}
      #${MENU_ID} .sp-mv-inc input{width:16px;height:16px;margin:0;accent-color:#16a34a;}
      #${MENU_ID} .sp-mv-status{margin-left:auto;font:700 11.5px Arial,sans-serif;color:#374151;}
      #${MENU_ID} .sp-mv-f{display:flex;flex-direction:column;gap:2px;margin:0 0 6px;font-size:11px;color:#6b7280;font-weight:700;}
      #${MENU_ID} .sp-mv-f input, #${MENU_ID} .sp-mv-f textarea{width:100%!important;padding:5px 7px!important;border:1px solid #ddd6fe!important;border-radius:7px!important;font:12.5px/1.4 Arial,sans-serif!important;color:#111827!important;background:#fcfcff!important;resize:vertical;}
      #${MENU_ID} .sp-mv-f input:disabled, #${MENU_ID} .sp-mv-f textarea:disabled{background:#f3f4f6!important;color:#6b7280!important;}
      #${MENU_ID} .sp-mv-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0 8px;}
      #${MENU_ID} .sp-mv-src{font-size:10.5px;color:#7c7c8a;margin-top:2px;}
      @media(max-width:600px){
        #${MENU_ID} .sp-mv-grid{grid-template-columns:repeat(2,minmax(0,1fr));}
        #${MENU_ID} .sp-pkg-row{grid-template-columns:1fr;gap:5px;}
        #${MENU_ID} .sp-pkg-row-label{padding-top:0;}
        #${MENU_ID} .sp-pkg-row-label small{display:inline;margin-left:4px;}
        #${MENU_ID} .sp-pkg-sugrow{flex-wrap:wrap;}
        #${MENU_ID} .sp-pill{font-size:13px;padding:6px 11px;}
      }
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

  // =========================
  // v3.22.0: kotak AUTO ASM bisa DIGESER (mouse & sentuh) dan DIKECILKAN (▁), supaya layar pasien di
  // belakangnya tetap bisa dilihat/dipakai. Posisi & status kecil diingat selama halaman terbuka
  // (dipakai lagi saat kotak dibuat ulang, mis. panel AUTO SCREENSHOT yang dirender ulang tiap langkah).
  // =========================
  const spPanelState = {};
  const spKeyOf = (key) => (typeof key === "function" ? key() : key);

  function spApplyPanelPos(el, key) {
    const st = spPanelState[spKeyOf(key)];
    if (!st || st.left == null) {
      // Belum pernah digeser: pakai posisi bawaan kotak. Hanya hapus properti yang dulu dipasang oleh fungsi ini
      // (mis. menu berpindah ke tampilan KOMBINASI yang punya posisi sendiri).
      if (el.dataset.spPosSet) {
        ["left", "top", "right", "bottom", "transform"].forEach((p) => el.style.removeProperty(p));
        delete el.dataset.spPosSet;
      }
      return;
    }
    el.dataset.spPosSet = "1";
    // Kotak tetap utuh di dalam lebar layar (tombol di kanan judul tidak keluar layar); judul tetap terlihat.
    const r = el.getBoundingClientRect();
    const w = Math.min(r.width || 200, window.innerWidth);
    const left = Math.min(Math.max(0, st.left), Math.max(0, window.innerWidth - w));
    const top = Math.min(Math.max(0, st.top), Math.max(0, window.innerHeight - 48));
    el.style.setProperty("left", left + "px", "important");
    el.style.setProperty("top", top + "px", "important");
    el.style.setProperty("right", "auto", "important");
    el.style.setProperty("bottom", "auto", "important");
    el.style.setProperty("transform", "none", "important");
  }

  // isHandle(target) -> true bila titik tekan berada di bagian judul (tombol/isian tidak memulai geser).
  function spMakeDraggable(el, key, isHandle) {
    el.addEventListener("pointerdown", (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      const t = e.target;
      if (!t || !isHandle(t) || t.closest("button, a, input, textarea, select, img, label")) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - r.left;
      const dy = e.clientY - r.top;
      e.preventDefault();
      const move = (ev) => {
        const k = spKeyOf(key);
        spPanelState[k] = Object.assign({}, spPanelState[k], { left: ev.clientX - dx, top: ev.clientY - dy });
        spApplyPanelPos(el, key);
      };
      const end = () => {
        document.removeEventListener("pointermove", move, true);
        document.removeEventListener("pointerup", end, true);
        document.removeEventListener("pointercancel", end, true);
      };
      document.addEventListener("pointermove", move, true);
      document.addEventListener("pointerup", end, true);
      document.addEventListener("pointercancel", end, true);
    });
    spApplyPanelPos(el, key);
  }

  // Sembunyikan/tampilkan semua isi kotak kecuali bagian judul (keepSel).
  function spApplyMinimized(el, key, keepSel) {
    const min = !!(spPanelState[spKeyOf(key)] || {}).min;
    // keepSel dicocokkan pada anak langsung kotak (Element.matches), jadi tanpa ":scope >".
    const sel = String(keepSel).replace(/^\s*:scope\s*>\s*/, "");
    [...el.children].forEach((c) => {
      if (c.matches(sel)) return;
      if (min) { if (c.style.display !== "none") { c.dataset.spHid = "1"; c.style.display = "none"; } }
      else if (c.dataset.spHid) { c.style.display = ""; delete c.dataset.spHid; }
    });
    el.querySelectorAll(".sp-min-btn").forEach((b) => {
      b.textContent = min ? "▢" : "—";
      b.title = min ? "Tampilkan lagi" : "Kecilkan kotak";
    });
  }

  function spMinButton(el, key, keepSel) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "sp-min-btn";
    [["width", "auto"], ["display", "inline-block"], ["margin", "0 0 0 6px"], ["padding", "6px 10px"],
      ["background", "#eceff1"], ["color", "#333"], ["border", "1px solid #bbb"], ["border-radius", "6px"],
      ["font", "700 13px Arial,sans-serif"], ["cursor", "pointer"], ["float", "none"], ["line-height", "1"]]
      .forEach(([k, v]) => b.style.setProperty(k, v, "important"));
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      const k = spKeyOf(key);
      spPanelState[k] = Object.assign({}, spPanelState[k], { min: !(spPanelState[k] || {}).min });
      spApplyMinimized(el, key, keepSel);
    });
    return b;
  }

  // v3.26.0 (instruksi dokter): tombol jendela seperti aplikasi umumnya di POJOK KANAN ATAS kotak:
  // [ — ] kecilkan / tampilkan lagi, [ ✕ ] tutup kotak.
  function spEnsureWinCss() {
    if (document.getElementById("sp-win-ctrl-css")) return;
    const st = document.createElement("style");
    st.id = "sp-win-ctrl-css";
    const W = `html .sp-win-ctrl, #${MENU_ID} .sp-win-ctrl`;
    const B = `html .sp-win-ctrl button, #${MENU_ID} .sp-win-ctrl button`;
    st.textContent = `
      ${W}{position:absolute!important;top:0!important;right:0!important;display:flex!important;gap:2px!important;z-index:2!important;margin:0!important;padding:0!important;width:auto!important;}
      ${B}{box-sizing:border-box!important;width:32px!important;min-width:0!important;height:28px!important;display:inline-flex!important;
        align-items:center!important;justify-content:center!important;border:0!important;border-radius:6px!important;cursor:pointer!important;
        margin:0!important;padding:0!important;box-shadow:none!important;text-align:center!important;
        font:600 15px/1 Arial,sans-serif!important;color:#444!important;background:transparent!important;}
      html .sp-win-ctrl button:hover, #${MENU_ID} .sp-win-ctrl button:hover{background:#e6e6e6!important;}
      html .sp-win-ctrl button.sp-close-btn:hover, #${MENU_ID} .sp-win-ctrl button.sp-close-btn:hover{background:#e81123!important;color:#fff!important;}`;
    document.documentElement.appendChild(st);
  }

  function spWindowControls(el, key, keepSel, handle, onClose) {
    spEnsureWinCss();
    handle.querySelector(":scope > .sp-win-ctrl")?.remove();
    if (getComputedStyle(handle).position === "static") handle.style.setProperty("position", "relative", "important");
    handle.style.setProperty("padding-right", "72px", "important");
    handle.style.setProperty("min-height", "28px", "important");
    const box = document.createElement("div");
    box.className = "sp-win-ctrl";
    const min = spMinButton(el, key, keepSel);
    min.removeAttribute("style");
    const x = document.createElement("button");
    x.type = "button";
    x.className = "sp-close-btn";
    x.textContent = "✕";
    x.title = "Tutup kotak";
    x.addEventListener("click", (e) => { e.stopPropagation(); e.preventDefault(); onClose(); });
    box.append(min, x);
    handle.appendChild(box);
    spApplyMinimized(el, key, keepSel);
    return box;
  }

  function spStyleHandle(h) {
    h.style.setProperty("cursor", "move", "important");
    h.style.setProperty("touch-action", "none", "important");
    h.style.setProperty("user-select", "none", "important");
    if (!h.title) h.title = "Tahan & geser untuk memindahkan kotak";
  }

  // Menu AUTO ASM: isinya diganti tiap pindah menu (innerHTML), jadi judul dihias ulang setiap kali berubah.
  function spSetupMenuBox(menu) {
    const key = () => MENU_ID + (menu.classList.contains("sp-package-modal") ? ":pkg" : "");
    const decorate = () => {
      const title = menu.querySelector(":scope > .sp-title");
      if (title && !title.querySelector(".sp-min-btn")) {
        spStyleHandle(title);
        title.style.setProperty("display", "flex", "important");
        title.style.setProperty("align-items", "center", "important");
        title.style.setProperty("gap", "6px", "important");
        const grip = document.createElement("span");
        grip.textContent = "⠿";
        grip.style.cssText = "color:#999;margin-right:2px;";
        title.prepend(grip);
        spWindowControls(menu, key, ".sp-title", title, () => closeMenu());
      }
      spApplyMinimized(menu, key, ".sp-title");
      spApplyPanelPos(menu, key);
    };
    spMakeDraggable(menu, key, (t) => !!t.closest(".sp-title"));
    decorate();
    new MutationObserver(decorate).observe(menu, { childList: true, attributes: true, attributeFilter: ["class"] });
  }

  function closeMenu() {
    document.getElementById(MENU_ID)?.remove();
  }

  function openMenu(view = "main") {
    closeMenu();

    const menu = document.createElement("div");
    menu.id = MENU_ID;

    // =========================
    // v3.37.0: KOMBINASI RESEP PER OBAT + SARAN DARI ASGADAR (instruksi dokter 5 Okt 2026)
    // Tabel obat (nama obat, aturan pakai dari template). Obat yang cocok dengan keluhan di Assesment GADAR
    // otomatis tercentang (💡 saran); dokter menambah/mengurangi lalu ACC. Tindakan tetap seperti sebelumnya.
    // =========================
    let spPkg = null; // { selected:Set, touched:bool, hits:{}, branch }

    const spEsc = (value) => String(value ?? '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#039;');

    // Teks umur tanpa kata ganda ("3 Thn Thn" -> "3 Thn").
    const spAgeText = () => String(getPatientAgeDisplay() || '').replace(/\b(\w+)(\s+\1\b)+/gi, '$1');

    function spPkgContext() {
      // v3.46.0 (audit): umur dibaca SEKALI saat panel dibuka (dulu 3x baca seluruh teks halaman tiap klik obat -> lambat).
      if (spPkg && !spPkg.age) spPkg.age = { years: getPatientAgeYears(), months: getPatientAgeMonths(), display: spAgeText() };
      const age = spPkg && spPkg.age;
      const ageYears = age ? age.years : getPatientAgeYears();
      const adultByAge = Number.isFinite(ageYears) && ageYears > 17;
      const weight = Number(String(menu.querySelector('#sp-package-weight')?.value || '').replace(',', '.'));
      let branch = 'child', note = '';
      if (adultByAge) branch = 'adult';
      else if (!Number.isFinite(weight) || weight <= 0) note = 'Isi BB untuk menghitung dosis anak.';
      else if (weight === 40) { branch = null; note = 'BB 40 kg: tentukan manual Dewasa/Anak (ubah BB).'; }
      else if (weight > 40) branch = 'adult';
      return {
        ageYears, adultByAge, branch, note, weight: adultByAge ? null : weight,
        ageMonths: age ? age.months : getPatientAgeMonths(), ageDisplay: age ? age.display : spAgeText()
      };
    }

    function spPkgApplySuggestions() {
      if (!spPkg || spPkg.touched) return;
      const ctx = spPkgContext();
      spPkg.selected = new Set(ctx.branch ? spSuggestDrugKeys(ctx.branch, spPkg.hits) : []);
    }

    // v3.41.0 (instruksi dokter 5 Okt 2026): tampilan ringkas — obat = tombol-pil per golongan (satu baris per golongan),
    // kotak cari, anamnesis 2 baris, tindakan dilipat, daftar terpilih + tombol ACC menempel di bawah.
    // Aturan pakai tetap dari template (tooltip saat kursor di atas obat, dan di draft Resep Online setelah ACC).
    function spPkgRenderDrugs() {
      const box = menu.querySelector('#sp-drug-table-box');
      if (!box || !spPkg) return;
      const ctx = spPkgContext();
      const badge = menu.querySelector('#sp-pkg-branch');
      if (badge) {
        badge.textContent = ctx.branch === 'adult' ? 'DEWASA' : ctx.branch === 'child' ? 'ANAK' : 'ANAK / DEWASA?';
        badge.className = 'sp-pkg-badge ' + (ctx.branch === 'adult' ? 'is-adult' : ctx.branch === 'child' ? 'is-child' : 'is-warn');
      }
      const hint = menu.querySelector('#sp-pkg-hint');
      if (hint) { hint.textContent = ctx.note ? '⚠ ' + ctx.note : ''; hint.style.display = ctx.note ? '' : 'none'; }
      if (!ctx.branch) { box.innerHTML = ''; spPkgSummary(); return; }
      // v3.42.0: warna kalem per golongan (garis kiri + label + latar tipis) supaya batas tiap golongan jelas.
      const GROUP_COLORS = {
        'Demam & Nyeri': ['#e11d48', '#fff5f6'], 'Saluran cerna': ['#d97706', '#fffaf0'],
        'Batuk, pilek & alergi': ['#0284c7', '#f3f9fd'], 'Antibiotik': ['#0d9488', '#f2fbf9'],
        'Vertigo': ['#7c3aed', '#f8f5ff'], 'Lain-lain': ['#64748b', '#f8fafc']
      };
      const pill = (opt) => {
        const res = spResolveDrugOption(opt, ctx);
        const on = spPkg.selected.has(opt.key);
        const why = [...new Set(opt.why.filter((w) => spPkg.hits[w]).map((w) => spPkg.hits[w]))];
        const tip = (res.error ? '⚠ ' + res.error : res.text) + (why.length ? `\n💡 Saran dari keluhan: ${why.join(', ')}` : '');
        return `<button type="button" class="sp-pill${on ? ' is-on' : ''}${why.length ? ' is-sug' : ''}${res.error ? ' is-err' : ''}" data-drug="${opt.key}" title="${spEsc(tip)}">${on ? '<span class="sp-pill-ic">✓</span>' : why.length ? '<span class="sp-pill-ic">💡</span>' : ''}${spEsc(opt.label)}</button>`;
      };
      const groups = [];
      DRUG_OPTIONS[ctx.branch].forEach((opt) => {
        const g = opt.group || 'Lain-lain';
        let entry = groups.find((x) => x.name === g);
        if (!entry) groups.push(entry = { name: g, opts: [] });
        entry.opts.push(opt);
      });
      box.innerHTML = groups.map((g) => {
        const [gc, gb] = GROUP_COLORS[g.name] || GROUP_COLORS['Lain-lain'];
        return `<div class="sp-pkg-row" style="--gc:${gc};--gb:${gb}"><div class="sp-pkg-row-label">${spEsc(g.name)}</div><div class="sp-pkg-pills">${g.opts.map(pill).join('')}</div></div>`;
      }).join('');
      spPkgSummary();
    }

    // Kaki panel (menempel di bawah): obat & tindakan terpilih (klik × untuk menghapus), jumlah R/, tombol ACC.
    function spPkgSummary() {
      const sel = menu.querySelector('#sp-pkg-selected');
      if (!sel || !spPkg) return;
      const ctx = spPkgContext();
      const picked = ctx.branch ? DRUG_OPTIONS[ctx.branch].filter((o) => spPkg.selected.has(o.key)) : [];
      // v3.39.0: jumlah R/ (tiap obat & tiap racikan = 1 R/). Uji pasien BPJS: R/ ke-6 ditolak Smartplus
      // ("Jumlah R Sudah Melebihi Batas"), obat yang sudah ada di draft ikut dihitung.
      const rCount = picked.reduce((n, o) => { const r = spResolveDrugOption(o, ctx); return n + r.items.length + r.racikan.length; }, 0);
      const acts = [...menu.querySelectorAll('input[name="sp-package-action"]:checked')];
      sel.innerHTML = picked.length || acts.length
        ? picked.map((o) => `<span class="sp-sel-chip" title="${spEsc(spResolveDrugOption(o, ctx).text || '')}">${spEsc(o.label)}<button type="button" class="sp-sel-x" data-unpick="${o.key}" title="Hapus">×</button></span>`).join('') +
          acts.map((el) => `<span class="sp-sel-chip is-act">${spEsc(MASTER_RECIPE_TEMPLATES.TINDAKAN?.children?.[el.value]?.name || el.value)}<button type="button" class="sp-sel-x" data-unact="${el.value}" title="Hapus">×</button></span>`).join('')
        : '<span class="sp-pkg-muted">Belum ada obat dipilih — klik nama obat di atas.</span>';
      const rc = menu.querySelector('#sp-pkg-rcount');
      if (rc) { rc.textContent = `${rCount} R/`; rc.classList.toggle('is-over', rCount > 5); }
      const warn = menu.querySelector('#sp-pkg-warn');
      if (warn) {
        warn.textContent = rCount > 5 ? '⚠ Lebih dari 5 R/ — pasien BPJS: Smartplus bisa menolak sisanya ("Jumlah R Sudah Melebihi Batas").' : '';
        warn.style.display = rCount > 5 ? '' : 'none';
      }
      const acc = menu.querySelector('#sp-pkg-acc');
      if (acc) {
        const parts = [picked.length ? `${picked.length} obat` : '', acts.length ? `${acts.length} tindakan` : ''].filter(Boolean);
        acc.textContent = parts.length ? `✓ ACC – Masukkan ${parts.join(' + ')}` : '✓ ACC – Masukkan ke Resep';
        acc.disabled = !parts.length;
      }
    }

    async function runPackageRecipe() {
      if (!spPkg) return;
      const ctx = spPkgContext();
      if (!ctx.branch) { toast(`KOMBINASI RESEP: ${ctx.note}`); return; }
      if (ctx.branch === 'child' && !(ctx.weight > 0)) { toast('KOMBINASI RESEP: untuk pasien ≤17 tahun, masukkan BB pasien terlebih dahulu.'); return; }
      const drugs = DRUG_OPTIONS[ctx.branch].filter((o) => spPkg.selected.has(o.key));
      const actions = [...menu.querySelectorAll('input[name="sp-package-action"]:checked')].map((el) => el.value).filter(Boolean);
      if (!drugs.length && !actions.length) { toast('KOMBINASI RESEP: pilih minimal satu obat atau satu tindakan.'); return; }

      const regularItems = [];
      const racikanJobs = [];
      const problems = [];
      drugs.forEach((opt) => {
        const res = spResolveDrugOption(opt, ctx);
        if (res.error) { problems.push(`${opt.label}: ${res.error}`); return; }
        regularItems.push(...res.items);
        racikanJobs.push(...res.racikan);
      });
      if (problems.length && !window.confirm(`Obat berikut tidak bisa dimasukkan:\n\n${problems.map((p) => '• ' + p).join('\n')}\n\nLanjutkan tanpa obat tersebut?`)) return;

      const branchName = ctx.branch === 'adult' ? 'Dewasa' : 'Anak';
      const seenSet = getExistingRecipeDrugSet();
      closeMenu();
      recipeStopRequested = false;
      recipeStatus(`KOMBINASI RESEP ${branchName}${ctx.adultByAge ? ' • Umur ' + ctx.ageDisplay : ' • BB ' + ctx.weight + ' kg'}`);

      const errors = [];
      let actionDone = 0;
      // 1) TINDAKAN DAHULU: tiap tindakan diselesaikan lalu disimpan (#butt_simpan_resep, izin dokter v3.3.0).
      for (let actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (isRecipeStopRequested()) break;
        const actionKey = actions[actionIndex];
        updateRecipeProgress(`KOMBINASI RESEP: tindakan ${actionIndex + 1}/${actions.length}`, actionIndex, actions.length, MASTER_RECIPE_TEMPLATES.TINDAKAN?.children?.[actionKey]?.name || actionKey);
        try {
          await fillActionRecipe(actionKey, { autoSave: true, seenSet, internalPackage: true });
          actionDone++;
        } catch (err) {
          console.error('[KOMBINASI RESEP] tindakan', actionKey, err);
          errors.push(`Tindakan ${actionKey}: ${err.message || err}`);
        }
        await recipeSleep(500);
      }

      // 2) OBAT terpilih sebagai draft (tanpa Simpan).
      let res = { success: 0, skipped: 0, errors: [] };
      if (!isRecipeStopRequested() && (regularItems.length || racikanJobs.length)) {
        try {
          res = await runRecipePlan(regularItems, racikanJobs, {
            seenSet, age: ctx.ageYears, ageYears: ctx.ageYears, ageDisplay: ctx.ageDisplay, ageMonths: ctx.ageMonths,
            forceAdult: ctx.branch === 'adult', internalPackage: true
          });
        } catch (err) {
          console.error('[KOMBINASI RESEP] obat', err);
          errors.push(`Obat: ${err.message || err}`);
        }
      }
      errors.push(...res.errors, ...problems);

      const done = `${actionDone} tindakan disimpan, ${res.success} obat + ${racikanJobs.length} racikan ke draft, ${res.skipped} duplikat dilewati`;
      if (isRecipeStopRequested()) clearRecipeProgress(`⛔ KOMBINASI RESEP dihentikan. ${done}. Review draft saat ini.`);
      else if (errors.length) clearRecipeProgress(`KOMBINASI RESEP selesai sebagian: ${done}. Cek ${errors.length} bagian: ${errors.slice(0, 3).join(' | ')}${errors.length > 3 ? ' …' : ''}`);
      else clearRecipeProgress(`KOMBINASI RESEP selesai: ${done}. Review lalu Simpan manual.`);
      console.log('[KOMBINASI RESEP v3.37]', { ctx, obat: drugs.map((o) => o.key), tindakan: actions, regularItems, racikanJobs, errors });
      recipeStopRequested = false;
    }

    function renderPackageRecipeMenu() {
      menu.classList.add("sp-package-modal");
      const ageDisplay = spAgeText();
      const actionEntries = Object.entries(MASTER_RECIPE_TEMPLATES.TINDAKAN?.children || {});
      spPkg = { selected: new Set(), touched: false, hits: {} };
      const ageForWeight = getPatientAgeYears();
      const adult = Number.isFinite(ageForWeight) && ageForWeight > 17;

      menu.innerHTML = `
        <div class="sp-title">📦 KOMBINASI RESEP</div>

        <div class="sp-pkg-bar">
          <span id="sp-pkg-branch" class="sp-pkg-badge">…</span>
          <span class="sp-pkg-age">${ageDisplay ? spEsc(ageDisplay) : 'umur ?'}</span>
          ${adult ? '' : `<label id="sp-package-weight-row" class="sp-pkg-bb">BB <input id="sp-package-weight" type="text" inputmode="decimal" autocomplete="off" placeholder="—"> kg</label>`}
          <span id="sp-package-weight-help" class="sp-pkg-muted">${adult ? 'BB tidak diperlukan (>17 th)' : ''}</span>
        </div>
        <div id="sp-pkg-hint" class="sp-pkg-hint" style="display:none"></div>

        <div class="sp-pkg-anam-wrap">
          <div id="sp-package-anamnesis" class="sp-pkg-anam">⏳ Membaca Assesment GADAR…</div>
          <button type="button" class="sp-pkg-link" data-anam-toggle="1" style="display:none">Selengkapnya ▾</button>
        </div>

        <div class="sp-pkg-sugrow">
          <div id="sp-drug-suggest-note" class="sp-pkg-sugnote">⏳ Mencari saran dari keluhan…</div>
          <div class="sp-pkg-tools">
            <button type="button" class="sp-pkg-tool" data-drug-suggest="1" title="Pilih lagi sesuai saran Assesment GADAR">💡 Saran</button>
            <button type="button" class="sp-pkg-tool" data-drug-clear="1" title="Hapus semua pilihan obat">Kosongkan</button>
          </div>
        </div>

        <div id="sp-drug-table-box"></div>

        <div class="sp-pkg-row sp-pkg-row-act" style="--gc:#2563eb;--gb:#eff6ff">
          <div class="sp-pkg-row-label">Tindakan<small>langsung disimpan per tindakan</small></div>
          <div class="sp-pkg-pills">
            ${actionEntries.map(([key, item]) => `<label class="sp-pill sp-act"><input type="checkbox" name="sp-package-action" value="${key}">${spEsc(item.name)}</label>`).join('')}
          </div>
        </div>

        <div class="sp-pkg-foot">
          <div class="sp-pkg-foot-head"><b>Dipilih</b><span id="sp-pkg-rcount" class="sp-pkg-rcount">0 R/</span><span class="sp-pkg-muted">masuk sebagai draft · Simpan manual</span></div>
          <div id="sp-pkg-selected" class="sp-pkg-selected"></div>
          <div id="sp-pkg-warn" class="sp-pkg-warn" style="display:none"></div>
          <div class="sp-pkg-actions">
            <button type="button" class="sp-pkg-back" data-back="main" title="Kembali ke menu utama">←</button>
            <button type="button" id="sp-pkg-acc" class="sp-pkg-acc" data-package-submit="1">✓ ACC – Masukkan ke Resep</button>
          </div>
        </div>
      `;

      const weightInput = menu.querySelector('#sp-package-weight');
      const toggle = (k) => {
        spPkg.touched = true;
        if (spPkg.selected.has(k)) spPkg.selected.delete(k); else spPkg.selected.add(k);
        spPkgRenderDrugs();
      };
      if (weightInput) weightInput.addEventListener('input', () => { spPkgApplySuggestions(); spPkgRenderDrugs(); });

      // Klik obat = pilih / batal. Obat yang belum bisa dihitung (mis. BB kosong) menampilkan alasannya.
      menu.querySelector('#sp-drug-table-box').addEventListener('click', (e) => {
        const pill = e.target.closest('[data-drug]');
        if (!pill) return;
        e.preventDefault();
        if (pill.classList.contains('is-err') && !spPkg.selected.has(pill.dataset.drug)) {
          const hint = menu.querySelector('#sp-pkg-hint');
          hint.textContent = `⚠ ${pill.textContent.replace(/^[✓💡]/u, '').trim()}: ${(pill.title || 'belum bisa dihitung').split('\n')[0].replace(/^⚠\s*/, '')}`;
          hint.style.display = '';
          return;
        }
        toggle(pill.dataset.drug);
      });
      // Tindakan & daftar terpilih.
      menu.querySelectorAll('input[name="sp-package-action"]').forEach((el) => el.addEventListener('change', () => {
        el.closest('.sp-act')?.classList.toggle('is-on', el.checked);
        spPkgSummary();
      }));
      menu.querySelector('#sp-pkg-selected').addEventListener('click', (e) => {
        const x = e.target.closest('[data-unpick], [data-unact]');
        if (!x) return;
        e.preventDefault();
        if (x.dataset.unpick) { spPkg.touched = true; spPkg.selected.delete(x.dataset.unpick); spPkgRenderDrugs(); return; }
        const cb = menu.querySelector(`input[name="sp-package-action"][value="${x.dataset.unact}"]`);
        if (cb) { cb.checked = false; cb.dispatchEvent(new Event('change')); }
      });
      menu.querySelector('[data-drug-suggest]').addEventListener('click', () => {
        spPkg.touched = false;
        spPkgApplySuggestions();
        spPkgRenderDrugs();
      });
      menu.querySelector('[data-drug-clear]').addEventListener('click', () => {
        spPkg.touched = true;
        spPkg.selected.clear();
        spPkgRenderDrugs();
      });
      const anamBox = menu.querySelector('#sp-package-anamnesis');
      const anamBtn = menu.querySelector('[data-anam-toggle]');
      anamBtn.addEventListener('click', () => {
        const open = anamBox.classList.toggle('is-open');
        anamBtn.textContent = open ? 'Ringkas ▴' : 'Selengkapnya ▾';
      });
      spPkgRenderDrugs();

      const showSuggestNote = (text) => {
        const note = menu.querySelector('#sp-drug-suggest-note');
        if (!note || !note.isConnected) return;
        const words = [...new Set(Object.values(spPkg.hits))];
        note.innerHTML = text != null ? spEsc(text) : words.length
          ? `💡 Keluhan terbaca: <b>${spEsc(words.join(', '))}</b> — obat yang cocok sudah dipilih.`
          : 'Tidak ada keluhan yang cocok dengan daftar obat — pilih manual.';
      };

      // Anamnesis + saran. Bila form GADAR sedang terbuka, isi form yang dipakai (revisi ikut).
      spLoadAnamnesisInto(anamBox).then((text) => {
        if (!anamBox.isConnected || !spPkg) return;
        anamBtn.style.display = anamBox.scrollHeight > anamBox.clientHeight + 2 ? '' : 'none';
        if (!text) { showSuggestNote('Assesment GADAR belum ada — pilih obat manual.'); return; }
        spPkg.hits = spSuggestComplaints(text);
        spPkgApplySuggestions();
        spPkgRenderDrugs();
        showSuggestNote();
      }).catch(() => showSuggestNote('Saran tidak tersedia — pilih obat manual.'));

      // v3.8.0: BB anak dari kolom berat Assesment GADAR terakhir (dokter tetap bisa mengubah).
      if (!adult) getLatestGadarWeight().then((w) => {
        const help = menu.querySelector('#sp-package-weight-help');
        if (!weightInput || !weightInput.isConnected) return;
        if (w && !String(weightInput.value || '').trim()) {
          weightInput.value = String(w);
          weightInput.dispatchEvent(new Event('input', { bubbles: true }));
          if (help) help.textContent = 'dari GADAR — ubah bila perlu';
        } else if (!w && help) {
          help.textContent = 'BB tidak ada di GADAR — isi manual';
        }
      });
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

    // v3.37.0: CPPT VISIT (instruksi dokter 5 Okt 2026). Keluhan = CPPT dokter terakhir; pasien baru (belum ada CPPT dokter)
    // -> keluhan saat masuk IGD (GADAR kunjungan, dari riwayat kunjungan). Vital & pemeriksaan fisik mengikuti CPPT sebelumnya
    // (dokter/perawat); yang tidak ada -> template normal sesuai usia. Instruksi "Terapi dpjp lanjut". TIDAK disimpan.
    async function runCpptVisit() {
      if (spCpptBusy) { toast("AUTO CPPT sedang berjalan, tunggu sampai selesai."); return; }
      spCpptBusy = true;
      try {
        closeMenu();
        toast("CPPT VISIT: membaca CPPT sebelumnya...");
        const plan = await spBuildCpptVisitPlan();
        const root = await openCpptDoctorForm();
        if (!root) return;
        const ageInfo = getCpptAgeInfo();
        const normal = getNormalCpptVitals(ageInfo);
        const normalV = {
          td: normal.td, nadi: String(normal.pulse), suhu: normal.temp, nafas: String(normal.rr), gcs: "15",
          kesadaran: "Compos Mentis", keadaan_umum: "Tampak sakit sedang", reaksi_cahaya: "+/+"
        };
        const v = {};
        const fromNormal = [];
        Object.keys(normalV).forEach((k) => {
          v[k] = plan.vitals[k] || normalV[k];
          if (!plan.vitals[k] && normalV[k]) fromNormal.push(k);
        });
        // v3.44.0: template CPPT Normal + bagian positif (spPemfisFromContext); cadangan template normal.
        const objective = plan.objective || CPPT_NORMAL_TEMPLATE.objective;
        const keluhan = plan.keluhan || "";
        const instruksi = CPPT_NORMAL_TEMPLATE.instruksi;
        const fail = [];
        const set = (id, labels, val, name) => { if (val && !setCpptField(root, id, labels, val)) fail.push(name); };
        set("keluhan_utama", ["Keluhan Utama", "Keluhan"], keluhan, "Keluhan");
        set("objective", ["Objective"], objective, "Objective");
        set("kesadaran", ["Kesadaran"], v.kesadaran, "Kesadaran");
        set("keadaan_umum", ["Keadaan Umum"], v.keadaan_umum, "Keadaan Umum");
        set("td", ["Tekanan Darah", "TD"], v.td, "Tekanan Darah");
        set("nadi", ["Nadi"], v.nadi, "Nadi");
        set("suhu", ["Suhu"], v.suhu, "Suhu");
        set("gcs", ["GCS"], v.gcs, "GCS");
        set("nafas", ["Pernafasan", "Pernapasan", "RR"], v.nafas, "Pernafasan");
        set("reaksi_cahaya", ["Reaksi Cahaya", "Refleks Cahaya"], v.reaksi_cahaya, "Reaksi Cahaya");
        set("p_instruksi", ["Instruksi"], instruksi, "Instruksi");
        setTimeout(() => {
          if (keluhan) setCpptField(root, "keluhan_utama", ["Keluhan Utama", "Keluhan"], keluhan);
          setCpptField(root, "objective", ["Objective"], objective);
          setCpptField(root, "p_instruksi", ["Instruksi"], instruksi);
        }, 300);
        const parts = [
          keluhan ? `Keluhan dari ${plan.keluhanFrom}` : "⚠️ Keluhan tidak ditemukan (isi manual)",
          `Pemfis ${plan.objectiveFrom || "template normal"}`,
          fromNormal.length ? `Vital normal (${ageInfo.label}): ${fromNormal.join(", ")}` : "Vital dari CPPT sebelumnya"
        ];
        if (fail.length) parts.push(`Cek manual: ${fail.join(", ")}`);
        toast(`CPPT VISIT terisi. ${parts.join(" • ")}. TD ${v.td || "-"}, N ${v.nadi}, RR ${v.nafas}, S ${v.suhu}. Review lalu simpan manual.`);
        console.log("[CPPT VISIT]", { plan, isian: { keluhan, objective, ...v, instruksi }, fromNormal, fail });
      } catch (err) {
        console.error("[CPPT VISIT] error:", err);
        toast(`CPPT VISIT gagal: ${err && err.message ? err.message : err}`);
      } finally {
        spCpptBusy = false;
      }
    }

    // =========================
    // v3.45.0: MULTIPLE VISIT / MULTIPLE PULANG — layar 1 pilih pasien (cari live), layar 2 preview CPPT (bisa diedit),
    // tombol "Save multiple ..." menyimpan satu per satu (status tiap pasien), lalu dicek ulang di daftar CPPT.
    // =========================
    let spMv = null; // { mode, base, patients, selected: Map, drafts }

    const spMvEsc = (v) => String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    function spNormalVitalsForMonths(months) {
      const group = Number.isFinite(months) ? (CPPT_VITAL_BY_AGE.find((g) => months < g.maxMonths) || CPPT_VITAL_BY_AGE[CPPT_VITAL_BY_AGE.length - 1]) : CPPT_VITAL_BY_AGE[CPPT_VITAL_BY_AGE.length - 1];
      const v = getNormalCpptVitals({ group });
      return { td: v.td, nadi: String(v.pulse), suhu: v.temp, nafas: String(v.rr), gcs: "15", kesadaran: "Compos Mentis", keadaan_umum: "Tampak sakit sedang", reaksi_cahaya: "+/+", groupLabel: group.label };
    }

    function spMvAgeText(months) {
      if (!Number.isFinite(months)) return 'umur ?';
      return months < 12 ? `${months} bln` : `${Math.floor(months / 12)} th`;
    }

    function renderMultiCpptMenu(mode) {
      const isVisit = mode !== 'pulang';
      if (!spMv || spMv.mode !== mode) spMv = { mode, base: spSmartplusBase(), patients: null, selected: new Map(), drafts: [] };
      menu.classList.add('sp-package-modal');
      menu.innerHTML = `
        <div class="sp-title">${isVisit ? '👥 MULTIPLE VISIT' : '🏠 MULTIPLE PULANG'}</div>
        <div class="sp-pkg-bar">
          <span class="sp-pkg-badge">RAWAT INAP</span>
          <span id="sp-mv-info" class="sp-pkg-muted">⏳ Memuat daftar pasien dirawat…</span>
        </div>
        <input id="sp-mv-q" class="sp-mv-q" type="search" autocomplete="off" placeholder="🔍 Ketik nama pasien, No. RM, atau kamar…">
        <div id="sp-mv-results" class="sp-mv-results"></div>
        <div class="sp-pkg-foot">
          <div class="sp-pkg-foot-head"><b>Pasien dipilih</b><span id="sp-mv-n" class="sp-pkg-rcount">0</span><span class="sp-pkg-muted">klik × untuk membatalkan</span></div>
          <div id="sp-mv-selected" class="sp-pkg-selected"></div>
          <div class="sp-pkg-actions">
            <button type="button" class="sp-pkg-back" data-cppt-menu="1" title="Kembali ke menu Rawat Inap">←</button>
            <button type="button" id="sp-mv-build" class="sp-pkg-acc">${isVisit ? '📝 Buat multiple visit' : '📝 Buat multiple pulang'}</button>
          </div>
        </div>`;
      const q = menu.querySelector('#sp-mv-q');
      const results = menu.querySelector('#sp-mv-results');
      const renderSelected = () => {
        const sel = [...spMv.selected.values()];
        menu.querySelector('#sp-mv-n').textContent = String(sel.length);
        menu.querySelector('#sp-mv-selected').innerHTML = sel.length
          ? sel.map((p) => `<span class="sp-sel-chip">${spMvEsc(p.name)}<button type="button" class="sp-sel-x" data-mv-unpick="${spMvEsc(p.noreg)}" title="Batal">×</button></span>`).join('')
          : '<span class="sp-pkg-muted">Belum ada pasien — ketik nama lalu klik pasiennya.</span>';
        const b = menu.querySelector('#sp-mv-build');
        b.disabled = !sel.length;
        b.textContent = `${isVisit ? '📝 Buat multiple visit' : '📝 Buat multiple pulang'}${sel.length ? ` (${sel.length} pasien)` : ''}`;
      };
      const renderResults = () => {
        if (!spMv.patients) return;
        const words = norm(q.value).split(' ').filter(Boolean);
        let list = spMv.patients;
        if (words.length) list = list.filter((p) => { const hay = norm(`${p.name} ${p.normRm} ${p.noreg} ${p.kamar} ${p.noKamar} ${p.dx} ${p.dokter}`); return words.every((w) => hay.includes(w)); });
        else list = [];
        results.innerHTML = !words.length
          ? `<div class="sp-pkg-empty">Ketik nama pasien untuk mencari (${spMv.patients.length} pasien dirawat).</div>`
          : list.length
            ? list.slice(0, 40).map((p) => `<button type="button" class="sp-mv-item${spMv.selected.has(p.noreg) ? ' is-on' : ''}" data-mv-pick="${spMvEsc(p.noreg)}">
                <span class="sp-mv-item-name">${spMv.selected.has(p.noreg) ? '✓ ' : ''}${spMvEsc(p.name)}</span>
                <span class="sp-mv-item-sub">${spMvEsc(p.kamar)} ${spMvEsc(p.noKamar)}/${spMvEsc(p.bed)} · RM ${spMvEsc(p.normRm)} · ${spMvEsc(p.dx || '-')}</span>
                <span class="sp-mv-item-sub">${spMvEsc(p.dokter)}</span></button>`).join('') + (list.length > 40 ? `<div class="sp-pkg-empty">… ${list.length - 40} lainnya, perjelas pencarian.</div>` : '')
            : '<div class="sp-pkg-empty">Tidak ada pasien yang cocok.</div>';
      };
      q.addEventListener('input', renderResults);
      results.addEventListener('click', (e) => {
        const it = e.target.closest('[data-mv-pick]');
        if (!it) return;
        const p = spMv.patients.find((x) => x.noreg === it.dataset.mvPick);
        if (!p) return;
        if (spMv.selected.has(p.noreg)) spMv.selected.delete(p.noreg); else spMv.selected.set(p.noreg, p);
        // Setelah memilih: kosongkan pencarian supaya bisa langsung mencari pasien berikutnya.
        q.value = '';
        renderResults(); renderSelected(); q.focus();
      });
      menu.querySelector('#sp-mv-selected').addEventListener('click', (e) => {
        const x = e.target.closest('[data-mv-unpick]');
        if (!x) return;
        spMv.selected.delete(x.dataset.mvUnpick);
        renderResults(); renderSelected();
      });
      menu.querySelector('#sp-mv-build').addEventListener('click', () => { if (spMv.selected.size) buildMultiCpptDrafts(); });
      renderSelected();
      spFetchRanapPatients(spMv.base).then((list) => {
        if (!q.isConnected) return;
        spMv.patients = list;
        menu.querySelector('#sp-mv-info').textContent = `${list.length} pasien dirawat · pilih satu per satu`;
        renderResults();
        q.focus();
      }).catch((err) => {
        const info = menu.querySelector('#sp-mv-info');
        if (info) info.textContent = `⚠ Daftar pasien gagal dimuat: ${err.message || err}`;
      });
    }

    // Layar 2: susun CPPT sementara tiap pasien (tidak menyimpan), lalu tampilkan untuk dicek/diedit.
    async function buildMultiCpptDrafts() {
      const isVisit = spMv.mode !== 'pulang';
      const pats = [...spMv.selected.values()];
      const doctorName = spLoggedDoctorName();
      const today = new Date(); today.setHours(0, 0, 0, 0);
      menu.innerHTML = `
        <div class="sp-title">${isVisit ? '👥 MULTIPLE VISIT' : '🏠 MULTIPLE PULANG'} — preview</div>
        <div class="sp-pkg-bar"><span class="sp-pkg-badge">${pats.length} PASIEN</span><span id="sp-mv-prog" class="sp-pkg-muted">⏳ Menyusun CPPT 0/${pats.length}…</span></div>
        <div id="sp-mv-cards"></div>
        <div class="sp-pkg-foot">
          <div class="sp-pkg-foot-head"><b>Belum tersimpan</b><span id="sp-mv-n" class="sp-pkg-rcount">0</span><span class="sp-pkg-muted">cek & edit dulu, lalu simpan</span></div>
          <div id="sp-pkg-warn" class="sp-pkg-warn" style="display:none"></div>
          <div class="sp-pkg-actions">
            <button type="button" class="sp-pkg-back" id="sp-mv-back" title="Kembali memilih pasien">←</button>
            <button type="button" id="sp-mv-save" class="sp-pkg-acc" disabled>💾 ${isVisit ? 'Save multiple visit' : 'Save multiple pulang'}</button>
          </div>
        </div>`;
      menu.querySelector('#sp-mv-back').addEventListener('click', () => renderMultiCpptMenu(spMv.mode));
      const drafts = pats.map((p) => ({ p, values: null, error: '', warn: '', src: '', ageMonths: null, include: true, status: '' }));
      spMv.drafts = drafts;
      let done = 0;
      const one = async (dr) => {
        const { p } = dr;
        try {
          const ctx = { noreg: p.noreg, normRm: p.normRm, base: spMv.base };
          dr.ageMonths = await spFetchRanapAgeMonths(spMv.base, p.noreg);
          const normalV = spNormalVitalsForMonths(dr.ageMonths);
          const html = await spFetch(`${spMv.base}/nurse_station/eranap/cppt_viewer/${encodeURIComponent(p.noreg)}`, { credentials: 'same-origin' }).then((r) => r.text());
          const rows = spParseCpptViewer(html);
          const mine = rows.find((r) => r.type === 'CPPT' && r.isDoctor && (r.time || 0) >= today.getTime() && spIsMyPpa(r.ppa, doctorName));
          if (mine) { dr.warn = `Sudah ada CPPT Anda hari ini (${mine.timeText}) — tidak dicentang, centang bila tetap ingin menyimpan.`; dr.include = false; }
          if (isVisit) {
            const plan = await spBuildCpptVisitPlan(ctx);
            const v = {};
            const fromNormal = [];
            ['td', 'nadi', 'suhu', 'nafas', 'gcs', 'kesadaran', 'keadaan_umum', 'reaksi_cahaya'].forEach((k) => { v[k] = plan.vitals[k] || normalV[k] || ''; if (!plan.vitals[k] && normalV[k]) fromNormal.push(k); });
            dr.values = { keluhan_utama: plan.keluhan || '', objective: plan.objective || CPPT_NORMAL_TEMPLATE.objective, ...v, p_instruksi: CPPT_NORMAL_TEMPLATE.instruksi };
            dr.src = [plan.keluhan ? `Keluhan: ${plan.keluhanFrom}` : '⚠ keluhan tidak ditemukan', `Pemfis ${plan.objectiveFrom || 'template normal'}`, fromNormal.length ? `vital normal (${normalV.groupLabel}): ${fromNormal.join(', ')}` : 'vital dari CPPT sebelumnya'].join(' · ');
            if (!plan.keluhan) dr.warn = (dr.warn ? dr.warn + ' ' : '') + 'Keluhan kosong — isi dulu.';
          } else {
            dr.values = { keluhan_utama: CPPT_PULANG_TEMPLATE.keluhan, objective: CPPT_NORMAL_TEMPLATE.objective, td: normalV.td, nadi: normalV.nadi, suhu: normalV.suhu, nafas: normalV.nafas, gcs: '15', kesadaran: 'Compos Mentis', keadaan_umum: 'Tampak sakit sedang', reaksi_cahaya: '+/+', p_instruksi: CPPT_PULANG_TEMPLATE.instruksi };
            dr.src = `Template CPPT Rencana Pulang · vital normal (${normalV.groupLabel})`;
          }
        } catch (err) {
          dr.error = err.message || String(err);
          dr.include = false;
        }
        done++;
        const prog = menu.querySelector('#sp-mv-prog');
        if (prog) prog.textContent = done < drafts.length ? `⏳ Menyusun CPPT ${done}/${drafts.length}…` : 'Cek & edit tiap CPPT di bawah. Belum ada yang disimpan.';
      };
      // 3 pasien sekaligus.
      const queue = [...drafts];
      await Promise.all([0, 1, 2].map(async () => { while (queue.length) await one(queue.shift()); }));
      if (!menu.isConnected) return;
      renderMultiCpptCards();
    }

    function renderMultiCpptCards() {
      const isVisit = spMv.mode !== 'pulang';
      const box = menu.querySelector('#sp-mv-cards');
      if (!box) return;
      const F = (dr, k, label, cls = '') => `<label class="sp-mv-f ${cls}"><span>${label}</span><input type="text" data-f="${k}" value="${spMvEsc(dr.values?.[k] || '')}"></label>`;
      box.innerHTML = spMv.drafts.map((dr, i) => {
        const p = dr.p;
        const head = `<div class="sp-mv-head">
            <label class="sp-mv-inc"><input type="checkbox" data-inc="${i}" ${dr.include ? 'checked' : ''} ${dr.values && dr.status !== 'ok' ? '' : 'disabled'}><b>${i + 1}. ${spMvEsc(p.name)}</b></label>
            <span class="sp-pkg-muted">${spMvEsc(p.kamar)} ${spMvEsc(p.noKamar)}/${spMvEsc(p.bed)} · ${spMvAgeText(dr.ageMonths)} · ${spMvEsc(p.dx || '-')}</span>
            <span class="sp-mv-status" data-status="${i}">${dr.status === 'ok' ? '✅ Tersimpan' : dr.status ? spMvEsc(dr.status) : ''}</span>
          </div>`;
        if (!dr.values) return `<div class="sp-mv-card is-err">${head}<div class="sp-pkg-warn">⚠ Gagal menyusun CPPT: ${spMvEsc(dr.error)}</div></div>`;
        return `<div class="sp-mv-card${dr.status === 'ok' ? ' is-saved' : ''}" data-card="${i}">${head}
          ${dr.warn ? `<div class="sp-pkg-hint">⚠ ${spMvEsc(dr.warn)}</div>` : ''}
          <label class="sp-mv-f sp-mv-wide"><span>Keluhan</span><textarea data-f="keluhan_utama" rows="1">${spMvEsc(dr.values.keluhan_utama)}</textarea></label>
          <label class="sp-mv-f sp-mv-wide"><span>Objective</span><textarea data-f="objective" rows="4">${spMvEsc(dr.values.objective)}</textarea></label>
          <div class="sp-mv-grid">
            ${F(dr, 'kesadaran', 'Kesadaran')}${F(dr, 'keadaan_umum', 'Keadaan umum')}${F(dr, 'td', 'TD')}${F(dr, 'nadi', 'Nadi')}
            ${F(dr, 'suhu', 'Suhu')}${F(dr, 'nafas', 'RR')}${F(dr, 'gcs', 'GCS')}${F(dr, 'reaksi_cahaya', 'Reaksi cahaya')}
          </div>
          ${F(dr, 'p_instruksi', 'Instruksi', 'sp-mv-wide')}
          <div class="sp-mv-src">${spMvEsc(dr.src)}</div>
        </div>`;
      }).join('');
      // Edit langsung tersimpan di draf; centang = ikut disimpan.
      box.querySelectorAll('[data-card]').forEach((card) => {
        const dr = spMv.drafts[Number(card.dataset.card)];
        card.querySelectorAll('[data-f]').forEach((el) => el.addEventListener('input', () => { dr.values[el.dataset.f] = el.value; }));
        if (dr.status === 'ok') card.querySelectorAll('input, textarea').forEach((el) => { el.disabled = true; });
      });
      box.querySelectorAll('[data-inc]').forEach((cb) => cb.addEventListener('change', () => { spMv.drafts[Number(cb.dataset.inc)].include = cb.checked; spMvFooter(); }));
      const save = menu.querySelector('#sp-mv-save');
      save.onclick = () => saveMultiCppt();
      spMvFooter();
    }

    function spMvFooter() {
      const isVisit = spMv.mode !== 'pulang';
      const todo = spMv.drafts.filter((d) => d.include && d.values && d.status !== 'ok');
      const saved = spMv.drafts.filter((d) => d.status === 'ok').length;
      const n = menu.querySelector('#sp-mv-n');
      if (n) n.textContent = String(todo.length);
      const head = menu.querySelector('.sp-pkg-foot-head b');
      if (head) head.textContent = saved ? `Tersimpan ${saved} · akan disimpan` : 'Akan disimpan';
      const save = menu.querySelector('#sp-mv-save');
      if (save) {
        save.disabled = !todo.length || spMv.saving;
        save.textContent = spMv.saving ? '⏳ Menyimpan…' : `💾 ${isVisit ? 'Save multiple visit' : 'Save multiple pulang'}${todo.length ? ` (${todo.length} pasien)` : ''}`;
      }
    }

    async function saveMultiCppt() {
      const isVisit = spMv.mode !== 'pulang';
      const todo = spMv.drafts.filter((d) => d.include && d.values && d.status !== 'ok');
      if (!todo.length || spMv.saving) return;
      const empty = todo.filter((d) => !String(d.values.keluhan_utama || '').trim());
      if (empty.length) { alert(`Keluhan masih kosong pada: ${empty.map((d) => d.p.name).join(', ')}`); return; }
      if (!window.confirm(`Simpan CPPT ${isVisit ? 'visit' : 'rencana pulang'} untuk ${todo.length} pasien?\n\n${todo.map((d) => '• ' + d.p.name).join('\n')}`)) return;
      spMv.saving = true;
      spMvFooter();
      menu.querySelectorAll('#sp-mv-cards input, #sp-mv-cards textarea').forEach((el) => { el.disabled = true; });
      let ok = 0, fail = 0;
      for (const dr of todo) {
        const idx = spMv.drafts.indexOf(dr);
        const st = menu.querySelector(`[data-status="${idx}"]`);
        if (st) st.textContent = '⏳ menyimpan…';
        // v3.46.0 (audit): waktu percobaan PERTAMA dipakai untuk cek dobel. Bila percobaan sebelumnya error (mis. habis
        // waktu) server mungkin sudah menyimpan -> cek daftar CPPT dulu sebelum mengirim lagi.
        if (!dr.firstTryAt) dr.firstTryAt = Date.now();
        try {
          if (dr.tried) {
            const prev = await spCpptFindSaved(spMv.base, dr.p.noreg, dr.firstTryAt, dr.values.keluhan_utama).catch(() => null);
            if (prev) { dr.status = 'ok'; ok++; if (st) st.textContent = '✅ Tersimpan'; continue; }
          }
          dr.tried = true;
          const resp = await spCpptSaveDirect(spMv.base, dr.p.noreg, dr.values);
          const row = await spCpptFindSaved(spMv.base, dr.p.noreg, dr.firstTryAt, dr.values.keluhan_utama);
          if (row) { dr.status = 'ok'; ok++; }
          else { dr.status = `⚠ terkirim, belum terlihat di daftar CPPT — cek manual (jawaban: ${String(resp || '').replace(/<[^>]+>/g, '').trim().slice(0, 60) || '-'})`; dr.include = false; fail++; }
        } catch (err) {
          // Bisa jadi tersimpan walau jawaban gagal/terlambat diterima.
          const row = dr.tried ? await spCpptFindSaved(spMv.base, dr.p.noreg, dr.firstTryAt, dr.values.keluhan_utama).catch(() => null) : null;
          if (row) { dr.status = 'ok'; ok++; }
          else { dr.status = `❌ gagal: ${err.message || err}`; fail++; }
        }
        console.log('[MULTIPLE CPPT]', spMv.mode, dr.p.name, dr.status);
        if (st) st.textContent = dr.status === 'ok' ? '✅ Tersimpan' : dr.status;
      }
      spMv.saving = false;
      renderMultiCpptCards();
      const warn = menu.querySelector('#sp-pkg-warn');
      if (warn) { warn.style.display = ''; warn.textContent = fail ? `${ok} tersimpan, ${fail} perlu dicek (lihat status merah/kuning).` : `✅ ${ok} CPPT tersimpan.`; warn.style.color = fail ? '#b91c1c' : '#15803d'; }
      toast(`MULTIPLE ${isVisit ? 'VISIT' : 'PULANG'}: ${ok} tersimpan${fail ? `, ${fail} perlu dicek` : ''}.`);
    }

    // =========================
    // v3.47.0: RESEP PULANG (rawat inap). Layar 1 pilih obat (database RESEP_PULANG_DB, 💡 = obat rutin pasien dari
    // poli spesialis terakhir), layar 2 preview tabel yang bisa diedit (jumlah otomatis untuk N hari, bawaan 7),
    // lalu obat dimasukkan ke kotak e-resep di form CPPT dokter + centang "Resep pulang hari ini/besok".
    // Resep TIDAK disimpan otomatis (dokter menekan Simpan resep sendiri).
    // =========================
    let spRp = null; // { selected:Set, routine:Map, days, when:'1'|'2', withCppt, items:[] }

    function renderResepPulangMenu() {
      if (!spRp) spRp = { selected: new Set(), routine: null, days: 7, when: '1', withCppt: true, items: [] };
      menu.classList.add('sp-package-modal');
      const ageText = spAgeText();
      menu.innerHTML = `
        <div class="sp-title">💊 RESEP PULANG</div>
        <div class="sp-pkg-bar">
          <span class="sp-pkg-badge">RAWAT INAP</span>
          <span class="sp-pkg-age">${spMvEsc(ageText || 'umur ?')}</span>
          <label class="sp-pkg-bb">Lama <input id="sp-rp-days" type="text" inputmode="numeric" value="${spRp.days}"> hari</label>
        </div>
        <div class="sp-pkg-sugrow">
          <div id="sp-rp-note" class="sp-pkg-sugnote">⏳ Membaca obat rutin pasien dari poli spesialis…</div>
          <div class="sp-pkg-tools">
            <button type="button" class="sp-pkg-tool" data-rp-routine="1" title="Pilih semua obat rutin pasien">💡 Obat rutin</button>
            <button type="button" class="sp-pkg-tool" data-rp-clear="1">Kosongkan</button>
          </div>
        </div>
        <div id="sp-rp-box"></div>
        <div class="sp-pkg-foot">
          <div class="sp-pkg-foot-head"><b>Dipilih</b><span id="sp-rp-n" class="sp-pkg-rcount">0 obat</span><span class="sp-pkg-muted">dosis & jumlah bisa diedit di preview</span></div>
          <div id="sp-rp-sel" class="sp-pkg-selected"></div>
          <div class="sp-pkg-actions">
            <button type="button" class="sp-pkg-back" data-cppt-menu="1" title="Kembali ke menu Rawat Inap">←</button>
            <button type="button" id="sp-rp-next" class="sp-pkg-acc">👁 Preview resep pulang</button>
          </div>
        </div>`;
      const GROUP_COLORS = { 'Hipertensi & jantung': '#e11d48', 'Diabetes': '#7c3aed', 'Lambung & cerna': '#d97706', 'Nyeri, saraf & otot': '#0284c7', 'Antibiotik': '#0d9488', 'Urologi & lain': '#64748b', 'Vitamin & suplemen': '#16a34a', 'Anak (sirup/drop)': '#db2777' };
      const render = () => {
        const groups = [];
        RESEP_PULANG_DB.forEach((it) => { let g = groups.find((x) => x.name === it.group); if (!g) groups.push(g = { name: it.group, items: [] }); g.items.push(it); });
        menu.querySelector('#sp-rp-box').innerHTML = groups.map((g) => `<div class="sp-pkg-row" style="--gc:${GROUP_COLORS[g.name] || '#64748b'};--gb:#fff"><div class="sp-pkg-row-label">${spMvEsc(g.name)}</div><div class="sp-pkg-pills">${g.items.map((it) => {
          const on = spRp.selected.has(it.key), rut = spRp.routine && spRp.routine.get(it.key);
          const tip = `${it.obat} • ${it.dosis} • ${it.frekuensi} • ${it.waktu}${rut ? `\n💡 Obat rutin: ${rut}` : ''}`;
          return `<button type="button" class="sp-pill${on ? ' is-on' : ''}${rut ? ' is-sug' : ''}" data-rp="${it.key}" title="${spMvEsc(tip)}">${on ? '<span class="sp-pill-ic">✓</span>' : rut ? '<span class="sp-pill-ic">💡</span>' : ''}${spMvEsc(it.label)}</button>`;
        }).join('')}</div></div>`).join('');
        const sel = RESEP_PULANG_DB.filter((it) => spRp.selected.has(it.key));
        menu.querySelector('#sp-rp-n').textContent = `${sel.length} obat`;
        menu.querySelector('#sp-rp-sel').innerHTML = sel.length
          ? sel.map((it) => `<span class="sp-sel-chip">${spMvEsc(it.label)}<button type="button" class="sp-sel-x" data-rp-un="${it.key}">×</button></span>`).join('')
          : '<span class="sp-pkg-muted">Belum ada obat — klik nama obat di atas.</span>';
        const nx = menu.querySelector('#sp-rp-next');
        nx.disabled = !sel.length;
        nx.textContent = `👁 Preview resep pulang${sel.length ? ` (${sel.length} obat)` : ''}`;
      };
      menu.querySelector('#sp-rp-box').addEventListener('click', (e) => {
        const b = e.target.closest('[data-rp]'); if (!b) return;
        const k = b.dataset.rp; if (spRp.selected.has(k)) spRp.selected.delete(k); else spRp.selected.add(k);
        render();
      });
      menu.querySelector('#sp-rp-sel').addEventListener('click', (e) => { const x = e.target.closest('[data-rp-un]'); if (x) { spRp.selected.delete(x.dataset.rpUn); render(); } });
      menu.querySelector('[data-rp-clear]').addEventListener('click', () => { spRp.selected.clear(); render(); });
      menu.querySelector('[data-rp-routine]').addEventListener('click', () => { if (spRp.routine) spRp.routine.forEach((_, k) => spRp.selected.add(k)); render(); });
      menu.querySelector('#sp-rp-days').addEventListener('input', (e) => { const d = parseInt(e.target.value, 10); if (d > 0 && d < 100) spRp.days = d; });
      menu.querySelector('#sp-rp-next').addEventListener('click', () => {
        const keep = new Map(spRp.items.map((r) => [r.key, r]));
        spRp.items = RESEP_PULANG_DB.filter((it) => spRp.selected.has(it.key)).map((it) => keep.get(it.key) ||
          ({ key: it.key, label: it.label, obat: it.obat, dosis: it.dosis, frekuensi: it.frekuensi, waktu: it.waktu, jumlah: spPulangQty(it, spRp.days), keterangan: '', qtyEdited: false, src: it }));
        renderResepPulangPreview();
      });
      render();
      const note = menu.querySelector('#sp-rp-note');
      const setNote = () => {
        if (!note.isConnected) return;
        const n = spRp.routine ? spRp.routine.size : 0;
        note.textContent = n ? `💡 ${n} obat rutin pasien ditemukan dari poli spesialis terakhir — tekan "Obat rutin" untuk memilih semuanya.` : 'Tidak ada obat rutin dari poli spesialis yang cocok dengan daftar — pilih manual.';
      };
      if (spRp.routine) setNote();
      else spFetchRoutineDrugs(spSmartplusBase(), spRanapContext().normRm).then((m) => { spRp.routine = m; if (menu.querySelector('#sp-rp-box')) { render(); setNote(); } })
        .catch(() => { spRp.routine = new Map(); setNote(); });
    }

    function renderResepPulangPreview() {
      menu.classList.add('sp-package-modal');
      menu.innerHTML = `
        <div class="sp-title">💊 RESEP PULANG — preview</div>
        <div class="sp-pkg-bar">
          <span class="sp-pkg-badge">${spRp.items.length} OBAT</span>
          <label class="sp-pkg-bb">Lama <input id="sp-rp-days2" type="text" inputmode="numeric" value="${spRp.days}"> hari</label>
          <label class="sp-mv-inc"><input type="radio" name="sp-rp-when" value="1" ${spRp.when === '1' ? 'checked' : ''}> Pulang hari ini</label>
          <label class="sp-mv-inc"><input type="radio" name="sp-rp-when" value="2" ${spRp.when === '2' ? 'checked' : ''}> Pulang besok</label>
        </div>
        <label class="sp-mv-inc" style="margin:0 0 6px"><input type="checkbox" id="sp-rp-cppt" ${spRp.withCppt ? 'checked' : ''}> Isi juga CPPT Rencana Pulang (form CPPT yang sama)</label>
        <div class="sp-rp-table-wrap"><table class="sp-rp-table">
          <thead><tr><th>Obat</th><th>Dosis</th><th>Frekuensi</th><th>Waktu</th><th>Jumlah</th><th>Keterangan</th><th></th></tr></thead>
          <tbody>${spRp.items.map((r, i) => `<tr data-i="${i}">
            <td class="sp-rp-name" title="${spMvEsc(r.obat)}">${spMvEsc(r.label)}<small>${spMvEsc(r.obat)}</small></td>
            <td><input data-f="dosis" value="${spMvEsc(r.dosis)}"></td>
            <td><input data-f="frekuensi" value="${spMvEsc(r.frekuensi)}"></td>
            <td><input data-f="waktu" value="${spMvEsc(r.waktu)}"></td>
            <td><input data-f="jumlah" class="sp-rp-qty" value="${spMvEsc(r.jumlah)}"></td>
            <td><input data-f="keterangan" value="${spMvEsc(r.keterangan)}"></td>
            <td><button type="button" class="sp-sel-x" data-rp-del="${i}" title="Hapus">×</button></td></tr>`).join('')}</tbody></table></div>
        <div class="sp-pkg-foot">
          <div class="sp-pkg-foot-head"><b>Resep pulang</b><span class="sp-pkg-rcount">${spRp.items.length} R/</span><span class="sp-pkg-muted">masuk ke e-resep form CPPT · Simpan resep manual</span></div>
          <div class="sp-pkg-actions">
            <button type="button" class="sp-pkg-back" id="sp-rp-back" title="Kembali memilih obat">←</button>
            <button type="button" id="sp-rp-go" class="sp-pkg-acc">✓ Masukkan ke Resep Pulang</button>
          </div>
        </div>`;
      const tb = menu.querySelector('.sp-rp-table tbody');
      tb.addEventListener('input', (e) => {
        const el = e.target.closest('[data-f]'); if (!el) return;
        const r = spRp.items[Number(el.closest('tr').dataset.i)];
        r[el.dataset.f] = el.value;
        if (el.dataset.f === 'jumlah') r.qtyEdited = true;
        if (el.dataset.f === 'dosis' || el.dataset.f === 'frekuensi') {
          if (!r.qtyEdited) { r.jumlah = spPulangQty({ ...r.src, dosis: r.dosis, frekuensi: r.frekuensi }, spRp.days); el.closest('tr').querySelector('.sp-rp-qty').value = r.jumlah; }
        }
      });
      tb.addEventListener('click', (e) => {
        const x = e.target.closest('[data-rp-del]'); if (!x) return;
        const r = spRp.items.splice(Number(x.dataset.rpDel), 1)[0];
        if (r) spRp.selected.delete(r.key);
        renderResepPulangPreview();
      });
      menu.querySelector('#sp-rp-days2').addEventListener('input', (e) => {
        const d = parseInt(e.target.value, 10); if (!(d > 0 && d < 100)) return;
        spRp.days = d;
        spRp.items.forEach((r, i) => { if (!r.qtyEdited) { r.jumlah = spPulangQty({ ...r.src, dosis: r.dosis, frekuensi: r.frekuensi }, d); const q = tb.querySelector(`tr[data-i="${i}"] .sp-rp-qty`); if (q) q.value = r.jumlah; } });
      });
      menu.querySelectorAll('input[name="sp-rp-when"]').forEach((el) => el.addEventListener('change', () => { if (el.checked) spRp.when = el.value; }));
      menu.querySelector('#sp-rp-cppt').addEventListener('change', (e) => { spRp.withCppt = e.target.checked; });
      menu.querySelector('#sp-rp-back').addEventListener('click', () => renderResepPulangMenu());
      menu.querySelector('#sp-rp-go').disabled = !spRp.items.length;
      menu.querySelector('#sp-rp-go').addEventListener('click', () => spExclusive('RESEP PULANG', runResepPulang));
    }

    // Satu obat ke kotak e-resep TERTENTU (pakai ID kolom di dalam kotak, bukan cari label di seluruh halaman: form CPPT
    // juga punya kolom "Riwayat Pengobatan" yang mengandung kata "obat").
    async function spAddPulangItem(box, item) {
      const q = (sel) => [...box.querySelectorAll(sel)].find(visible) || null;
      const obat = q('#obat');
      if (!obat) throw new Error('kolom Obat tidak ditemukan');
      const picked = await selectAutocomplete(obat, item.obat);
      if (!picked) throw new Error(`obat tidak ditemukan di master: ${item.obat}`);
      await recipeSleep(300);
      const set = (sel, v) => { const el = q(sel); if (!el) throw new Error(`kolom ${sel} tidak ditemukan`); setValue(el, v); };
      set('#qty', item.jumlah);
      set('#dosis', item.dosis);
      set('#frekwensi', item.frekuensi);
      if (item.waktu) set('#tme', item.waktu);
      if (item.keterangan) set('#note', item.keterangan);
      await recipeSleep(250);
      const add = q('#addrow');
      if (!add) throw new Error('tombol "Masukan ke Resep" tidak ditemukan');
      const before = box.querySelectorAll('#tbody_draft tr').length;
      add.click();
      await waitFor(() => box.querySelectorAll('#tbody_draft tr').length > before || [...document.querySelectorAll('.swal2-popup, .sweet-alert')].some(visible), 4000);
      const alertBox = [...document.querySelectorAll('.swal2-popup, .sweet-alert')].find(visible);
      const alertText = alertBox ? (alertBox.innerText || '').replace(/\s+/g, ' ').replace(/\bOK\b\s*$/, '').trim() : '';
      if (alertText && /melebihi|batas|tidak bisa|tidak dapat|gagal|habis|kosong/i.test(alertText)) throw new Error(`Ditolak Smartplus: ${alertText}`);
      if (box.querySelectorAll('#tbody_draft tr').length <= before) throw new Error('baris tidak masuk ke draft resep');
    }

    async function runResepPulang() {
      const items = spRp.items.filter((r) => String(r.obat || '').trim());
      const empty = items.filter((r) => !String(r.jumlah || '').trim() || !String(r.frekuensi || '').trim());
      if (empty.length) { alert(`Jumlah/frekuensi masih kosong: ${empty.map((r) => r.label).join(', ')}`); return; }
      closeMenu();
      recipeStopRequested = false;
      // 1) Form CPPT dokter (berisi kotak e-resep). Isi CPPT Rencana Pulang bila dicentang.
      const root = await openCpptDoctorForm();
      if (!root) { toast('RESEP PULANG: form CPPT tidak terbuka.'); return; }
      let cpptNote = '';
      if (spRp.withCppt) {
        const r = fillCpptCommonFields(root, 'pulang');
        cpptNote = r.fail.length ? ` CPPT pulang: cek ${r.fail.join(', ')}.` : ' CPPT Rencana Pulang terisi.';
      }
      // 2) Kotak e-resep di dalam form CPPT dimuat lewat AJAX -> tunggu kolom Obat & tombol "Masukan ke Resep" tampil.
      const box = await waitFor(() => {
        const b = document.getElementById('box_new_eresep_cppt') || root;
        const obat = [...b.querySelectorAll('#obat')].find(visible);
        return obat && [...b.querySelectorAll('#addrow')].find(visible) ? b : null;
      }, 12000);
      if (!box) { toast(`RESEP PULANG: kotak e-resep di form CPPT belum muncul.${cpptNote}`); return; }
      box.scrollIntoView({ block: 'center' });
      // 3) Obat satu per satu (mesin "Masukan ke Resep" yang sama dengan Resep Online IGD; dedup terhadap draft).
      const draftText = norm(box.querySelector('#tbody_draft')?.textContent || '');
      const errors = [];
      let ok = 0, skipped = 0;
      for (let i = 0; i < items.length; i++) {
        if (isRecipeStopRequested()) break;
        const r = items[i];
        if (draftText.includes(norm(r.obat))) { skipped++; continue; }
        updateRecipeProgress('RESEP PULANG', i, items.length, r.label);
        try {
          await spAddPulangItem(box, { obat: r.obat, jumlah: String(r.jumlah), dosis: r.dosis, frekuensi: r.frekuensi, waktu: r.waktu, keterangan: r.keterangan || '' });
          ok++;
        } catch (err) {
          console.error('[RESEP PULANG]', r, err);
          errors.push(`${r.label}: ${err.message || err}`);
        }
      }
      // 4) Centang "Resep pulang hari ini" (1) / "besok" (2) di kotak e-resep yang sama.
      const cb = [...box.querySelectorAll('input[name="is_eresep_pulang"]')].find((c) => c.value === spRp.when);
      let whenNote = '';
      if (cb) { if (!cb.checked) { try { cb.click(); } catch (_) {} } whenNote = cb.checked ? ` Dicentang "Resep pulang ${spRp.when === '1' ? 'hari ini' : 'besok'}".` : ' ⚠ Centang resep pulang gagal.'; }
      else whenNote = ' ⚠ Kotak "Resep pulang" tidak ditemukan — centang manual.';
      const msg = `RESEP PULANG: ${ok} obat masuk ke draft${skipped ? `, ${skipped} sudah ada` : ''}${errors.length ? `, ${errors.length} gagal (${errors.slice(0, 2).join(' | ')})` : ''}.${whenNote}${cpptNote} Review lalu tekan Simpan resep.`;
      clearRecipeProgress(msg);
      console.log('[RESEP PULANG]', { items, errors, when: spRp.when, days: spRp.days });
    }

    function renderCpptMenu() {
      menu.classList.remove("sp-package-modal");
      menu.innerHTML = `
        <div class="sp-title">🛏️ RAWAT INAP</div>
        <div class="sp-note">Pilih fitur yang ingin dijalankan:</div>

        <button type="button" data-cppt-visit="1">
          🩺 CPPT VISIT
        </button>

        <!-- v3.44.0: tombol CPPT NORMAL dihapus dari menu (permintaan dokter); fungsinya tetap ada. -->

        <button type="button" data-multi-cppt="visit">
          👥 MULTIPLE VISIT
        </button>

        <button type="button" data-cppt-pulang="1">
          🏠 CPPT RENCANA PULANG
        </button>

        <button type="button" data-multi-cppt="pulang">
          🏠 MULTIPLE PULANG
        </button>

        <button type="button" data-resep-pulang="1">
          💊 RESEP PULANG
        </button>

        <button type="button" class="sp-back" data-back="main">
          ← Kembali ke menu utama
        </button>

        <div class="sp-note">
          CPPT VISIT: keluhan singkat dari CPPT dokter terakhir (pasien baru: keluhan masuk IGD); vital mengikuti CPPT
          sebelumnya (dokter/perawat); pemeriksaan fisik = template normal, hanya bagian yang kemungkinan positif diubah
          (dari pemeriksaan dokter sebelumnya / diagnosis); instruksi "Terapi dpjp lanjut".
          CPPT Rencana Pulang diisi "Keluhan perbaikan", objective & vital template normal.
          MULTIPLE VISIT / MULTIPLE PULANG: pilih banyak pasien dari daftar e-Ranap, cek & edit preview, lalu Save (tersimpan).
          Nadi/RR menyesuaikan usia pasien; TD hanya diisi untuk dewasa (≥ 18 thn). Review lalu simpan manual.
        </div>
      `;
    }

    // v3.19.0: order penunjang dikelompokkan (Lab, Ro Thorax, USG, CT Brain non kontras).
    function renderPenunjangMenu() {
      menu.classList.remove("sp-package-modal");
      menu.innerHTML = `
        <div class="sp-title">🧾 AUTO PENUNJANG</div>
        <div class="sp-note">Order otomatis; diagnosis dari GADAR terakhir, lalu Save. Lab Severe tidak memesan ulang pemeriksaan yang sudah ada dalam 1 minggu.</div>

        <button type="button" data-auto-lab="FEBRIS">🧪 Lab</button>
        <button type="button" data-auto-lab="SEVERE">🚨 Lab Severe (Kreatinin, Elektrolit, AGD)</button>
        <button type="button" data-auto-rad="THORAX">🫁 Ro Thorax</button>
        <button type="button" data-auto-rad="USG_WHOLE_ABDOMEN">🔊 USG Whole Abdomen</button>
        <button type="button" data-auto-rad="CT_BRAIN_NK">🧠 CT Brain Non Kontras</button>

        <button type="button" class="sp-back" data-back="main">← Kembali</button>
      `;
    }

    function renderMain() {
      menu.classList.remove("sp-package-modal");
      menu.innerHTML = `
        <div class="sp-title">🚑 SMARTPLUS AUTO ASM v3.47.0</div>
        <div class="sp-note">Pilih modul yang ingin digunakan:</div>

        <button type="button" data-disease-menu="1">
          🩺 ASGADAR PENYAKIT ▶
        </button>

        <button type="button" data-package-menu="1">
          📦 KOMBINASI RESEP ▶
        </button>

        <!-- v3.9.0: MASTER TEMPLATE RESEP disembunyikan dari menu utama atas permintaan dokter
             (isinya sama dengan KOMBINASI RESEP). Kode & template tetap ada dan dipakai KOMBINASI. -->

        <button type="button" data-cppt-menu="1">
          🛏️ RAWAT INAP ▶
        </button>

        <div class="sp-divider"></div>

        <!-- v3.23.0: AUTO SOAP & AUTO SCREENSHOT disembunyikan dari menu (sudah tercakup PAKET KONSUL, permintaan dokter).
             Fungsinya tetap ada karena dipakai PAKET KONSUL; tampilkan lagi tombolnya bila diperlukan. -->

        <button type="button" data-paket-konsul="1">
          📨 PAKET KONSUL – SOAP + Penunjang
        </button>

        <button type="button" data-penunjang-menu="1">
          🧾 AUTO PENUNJANG ▶
        </button>

        <button type="button" data-advis="1">
          📝 ADVIS SPESIALIS
        </button>

        <button type="button" data-review-gadar="1">
          🩺 REVIEW GADAR 24 JAM
        </button>

        <div class="sp-note">
          ASGADAR PENYAKIT berisi seluruh template penyakit yang sudah tersedia.
          KOMBINASI RESEP berisi tabel obat (saran otomatis dari keluhan Assesment GADAR, BB anak dari GADAR) dan resep tindakan.
          Resep keluhan masuk sebagai draft; review lalu Simpan manual.
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

      if (branch.kind === "bbSplit") {
        const sirup = MASTER_RECIPE_TEMPLATES[branch.sirup.key];
        const puyer = MASTER_RACIKAN_TEMPLATES[branch.puyer.key];
        const sirupDrug = Object.values(sirup?.weightGroups || {})[0]?.items?.map((it) => it.obat).join(" + ") || "sirup";
        const pg = Object.values(puyer?.weightGroups || {})[0];
        const puyerDrug = (pg?.items || []).map((it) => it.obat).join(" + ");
        return [
          `BB ≤${branch.maxSirupKg || 15} kg: ${sirupDrug} • dosis sesuai BB`,
          `BB >${branch.maxSirupKg || 15} kg: puyer ${puyerDrug} • ${pg?.jumlahRacikan || 10} bks • ${pg?.dosis || "1 pulv"} ${pg?.frekuensi || ""}`.trim()
        ];
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

      // v3.8.0: pasien dewasa (>17 th) tidak perlu BB: resep otomatis cabang dewasa.
      if (Number.isFinite(ageYears) && ageYears > 17) {
        await runComplaintRecipe(complaintKey, null, { forceAdult: true, age: ageYears, ageYears, ageDisplay, ageMonths });
        return;
      }

      // v3.8.0: BB dari Assesment GADAR terakhir diisikan lebih dulu; dokter tetap konfirmasi/ubah.
      const gadarWeight = await getLatestGadarWeight();
      const rawWeight = window.prompt(
        `MASTER TEMPLATE RESEP • ${COMPLAINT_RECIPE_MAP[complaintKey]?.label || complaintKey}\n\n` +
        (gadarWeight ? `BB dari Assesment GADAR terakhir: ${gadarWeight} kg. Tekan OK jika sesuai.\n` : "BB tidak ditemukan di Assesment GADAR.\n") +
        `Masukkan BB pasien (kg):`,
        gadarWeight ? String(gadarWeight) : ""
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

      if (target.dataset?.penunjangMenu === "1") {
        renderPenunjangMenu();
        return;
      }

      if (target.dataset?.paketKonsul === "1") {
        closeMenu();
        await spExclusive("PAKET KONSUL", runPaketKonsul);
        return;
      }

      if (target.dataset?.resepPulang === "1") {
        renderResepPulangMenu();
        return;
      }

      if (target.dataset?.multiCppt) {
        renderMultiCpptMenu(target.dataset.multiCppt);
        return;
      }

      if (target.dataset?.cpptVisit === "1") {
        await spExclusive("CPPT VISIT", runCpptVisit);
        return;
      }

      if (cpptNormal === "1") {
        await spExclusive("CPPT NORMAL", runCpptNormalRawatInap);
        return;
      }

      if (cpptPulang === "1") {
        await spExclusive("CPPT RENCANA PULANG", runCpptRencanaPulang);
        return;
      }

      if (packageSubmit === "1") {
        await spExclusive("KOMBINASI RESEP", runPackageRecipe);
        return;
      }

      if (complaintMenu === "1") {
        renderComplaintMenu();
        return;
      }

      if (complaint) {
        const weightInput = menu.querySelector("#sp-complaint-weight");
        const rawWeight = weightInput?.value || "";
        await spExclusive("RESEP KELUHAN", () => runComplaintRecipe(complaint, rawWeight));
        return;
      }

      if (autoPackageComplaint && autoPackageBranch) {
        await spExclusive("PAKET RESEP", () => runAutoRecipePackageComplaint(autoPackageComplaint, autoPackageBranch));
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
        await spExclusive("AUTO RACIKAN", () => fillRacikanTemplate(racikanDirect));
        return;
      }

      if (racikanWeight && racikanParent) {
        closeMenu();
        await spExclusive("AUTO RACIKAN", () => fillRacikanTemplate(racikanParent, racikanWeight));
        return;
      }

      if (key) {
        closeMenu();
        await spExclusive("ASGADAR", () => fillTemplate(key));
        return;
      }

      if (directRecipe) {
        closeMenu();
        await spExclusive("AUTO RESEP", () => fillRecipeTemplate(directRecipe));
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
        await spExclusive("TINDAKAN", () => fillActionRecipe(actionDirect));
        return;
      }

      if (target.dataset?.autoPenunjang === "1") {
        closeMenu();
        await spExclusive("AUTO SCREENSHOT", () => runAutoPenunjang());
        return;
      }

      if (target.dataset?.autoRad && AUTO_RAD_ORDERS[target.dataset.autoRad]) {
        closeMenu();
        await spExclusive("ORDER RADIOLOGI", () => runAutoRadOrder(target.dataset.autoRad));
        return;
      }

      if (autoLab === "FEBRIS") {
        closeMenu();
        await spExclusive("AUTO LAB", runAutoLabFebris);
        return;
      }

      if (target.dataset?.advis === "1") {
        closeMenu();
        await runAdvisSpesialis();
        return;
      }

      if (target.dataset?.reviewGadar === "1") {
        closeMenu();
        await runReviewGadar();
        return;
      }

      if (autoLab === "SEVERE") {
        closeMenu();
        await spExclusive("LAB SEVERE", runAutoLabSevere);
        return;
      }

      if (autoSoap === "1") {
        closeMenu();
        await spExclusive("AUTO SOAP", () => runAutoSoap());
        return;
      }

      if (weightKey && parentRecipe) {
        closeMenu();
        await spExclusive("AUTO RESEP", () => fillRecipeTemplate(parentRecipe, weightKey));
      }
    });

    document.documentElement.appendChild(menu);
    spSetupMenuBox(menu);
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

  // v3.24.0 (instruksi dokter): pasien belum mendaftar (belum ada di daftar pasien IGD) -> template diisikan ke
  // "+ BUAT DRAF ASSESMENT GAWAT DARURAT" di halaman daftar pasien IGD. draft_gadar() Smartplus hanya mengosongkan
  // form #form_gadar_draft lalu membuka modal (tidak menyimpan). Simpan draf tetap manual oleh dokter.
  function spIsDraftGadarPage() {
    return !document.getElementById("form_gadar") && !!document.getElementById("form_gadar_draft") &&
      !!document.querySelector('button[onclick*="draft_gadar()"]');
  }

  async function openDraftGadarForTemplate() {
    const modal = document.getElementById("modal_form_gadar_draft");
    if (!(modal && modal.classList.contains("show") && visible(modal))) {
      toast("AUTO ASGADAR: membuka + BUAT DRAF ASSESMENT GAWAT DARURAT...");
      const btn = document.querySelector('button[onclick*="draft_gadar()"]');
      if (!btn) { toast("AUTO ASGADAR: tombol BUAT DRAF ASSESMENT GAWAT DARURAT tidak ditemukan."); return false; }
      btn.click();
    }
    const ok = await waitFor(() => modal && modal.classList.contains("show") && visible(modal), 8000);
    if (!ok) { toast("AUTO ASGADAR: form draf Assesment Gawat Darurat belum muncul."); return false; }
    await recipeSleep(400);
    return true;
  }

  async function openAssessmentGadarForTemplate() {
    if (spIsDraftGadarPage()) return openDraftGadarForTemplate();
    toast('AUTO ASGADAR: membuka Assesment GADAR...');
    await ensureMainEmrTab();

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

    // v3.14.0: riwayat poli spesialis diambil paralel (hanya GET) selama form diisi.
    // v3.24.0: pasien belum terdaftar (draf) -> belum ada No. RM, riwayat poli tidak diambil.
    const isDraft = spIsDraftGadarPage();
    const riwayatPoliP = isDraft
      ? Promise.resolve({ lines: [], draft: true })
      : spBuildRiwayatPoliLines().catch((err) => ({ lines: [], error: String(err && err.message || err) }));

    // Template penyakit sekarang otomatis membuka Assessment GADAR + + TAMBAH.
    const opened = await openAssessmentGadarForTemplate();
    if (!opened) return;

    const root = isDraft ? (document.querySelector("#modal_form_gadar_draft .modal-content") || document.getElementById("modal_form_gadar_draft")) : modalRoot();

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

    setTimeout(async () => {
      // v3.17.0: riwayat poli spesialis ditambahkan di bawah isi Riwayat Penyakit Dahulu
      // (isi bawaan Smartplus = diagnosis kunjungan terakhir dipertahankan).
      let riwayatNote = "";
      try {
        const rp = await riwayatPoliP;
        const rpdEl = root.querySelector('[name="riwayat_sakit_old"]') || document.querySelector('#form_gadar [name="riwayat_sakit_old"]');
        if (rp.draft) riwayatNote = " Draf (pasien belum terdaftar): isi Nama Pasien lalu Save manual.";
        else if (rp.error) riwayatNote = " Riwayat poli: gagal dibaca.";
        else if (!rp.lines.length) riwayatNote = " Riwayat poli spesialis: tidak ada.";
        else if (!rpdEl) { riwayatNote = " Riwayat poli: kolom Riwayat Penyakit Dahulu tidak ditemukan."; fail.push("Riwayat poli spesialis"); }
        else {
          await waitFor(() => rpdEl.value.trim(), 1500);
          setValue(rpdEl, mergeRiwayatPoli(rpdEl.value, rp.lines));
          riwayatNote = ` Riwayat poli spesialis: ${rp.lines.length} poli ditambahkan.`;
        }
        console.log("[AUTO ASM] Riwayat poli spesialis:", rp);
      } catch (err) {
        console.warn("[AUTO ASM] riwayat poli", err);
      }

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

      toast(message + riwayatNote);

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
    if (e.altKey && String(e.key || "").toLowerCase() === "a") { // v3.46.0: e.key bisa kosong pada event buatan
      e.preventDefault();
      openMenu();
    }
  }, true);
})();
