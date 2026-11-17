# Operation — Chizuru World Tour

Knowledge base komersial dan operasional untuk **Chizuru World Tour**, visual novel satu halaman bertema jelajah dunia dalam kostum adat, diterbitkan oleh [PT. Sainskerta Solusi Nusantara](https://sainskerta.net) — software house & AI partner berbasis di Gedung Graha Mampang Lt. 3, Jakarta Selatan, beroperasi sejak 2013.

Chizuru World Tour dibangun sebagai satu berkas `index.html` (11.603 byte) tanpa framework, tanpa proses bangun, tanpa backend, dan tanpa dependensi pihak ketiga: delapan destinasi dibuka berurutan (Yogyakarta, Bali, Longhouse Dayak Kenyah Kalimantan, Pantai Papua, Hawaii, Sevilla, Gyeongbokgung Korea, dan Hoi An Vietnam — lima negara, empat di antaranya wilayah Indonesia), setiap destinasi memuat lima langkah dialog dengan satu keputusan tiga opsi berbobot 0/1/2, skor affection maksimum 16 menentukan tiga ending (TRUE pada 13 ke atas, GOOD pada 8 sampai 12, NORMAL di bawah 8), dan progres disimpan pada `localStorage` kunci `vn_save` tanpa akun maupun telemetri. Permainan dapat dibuka langsung sebagai berkas maupun melalui GitHub Pages di `aisac-id.github.io/chizuru-world-tour/`. Keseluruhan suite ini disusun dari fakta yang terbaca di repositori (`index.html`, `README.md`, 13 berkas `assets/`, 6 berkas `promo/`, dan riwayat commit) serta dari riset kompetitor dan kebijakan platform yang sumbernya dicantumkan pada tiap dokumen; tidak ada fitur yang ditulis kecuali terbukti ada di kode.

> **Catatan posisi hukum dan komersial (WAJIB dibaca lebih dahulu).** Karakter yang tampil, Chizuru Mizuhara, adalah hak cipta pihak ketiga (serial *Kanojo, Okarishimasu* karya Reiji Miyajima, terbit di majalah Kodansha, adaptasi animasi TMS Entertainment); kami tidak memegang izin tertulis dan tidak menemukan panduan karya turunan publik untuk serial ini. Karena itu posisi resmi produk adalah **fan showcase NON-KOMERSIAL**: tidak boleh dijual, tidak boleh disisipi iklan, sponsorship, donasi berimbalan, maupun merchandise karakter. Jalur sah yang direkomendasikan seluruh suite: (1) **rebranding karakter orisinal** — mesin cerita, naskah, dan konten edukasi geografi-budaya adalah aset orisinal milik perusahaan yang dapat dikomersialkan dengan karakter pengganti; atau (2) **izin/lisensi tertulis dari pemegang IP**, yang hingga kini belum ada dan belum diajukan. Proposal B2B menyasar institusi edukasi dan pariwisata dengan prasyarat karakter orisinal ditulis jujur; proposal B2C menyasar komunitas penggemar sebagai segmen non-komersial. Repo juga belum memuat `LICENSE` dan belum menampilkan pernyataan non-komersial di layar — keduanya diusulkan sebagai pekerjaan R7 dan R8 pada dokumen 12.

> **Catatan harga.** Harga, paket, target pasar, volume, proyeksi pendapatan, tarif orang-hari, nilai RTO/RPO, dan target SLA dalam dokumen ini berstatus **usulan — perlu validasi manajemen**, belum diuji ke pasar, dan tidak mencakup pajak maupun mekanisme pengadaan.

## 01-Business-Strategy

| Dokumen | Isi Singkat |
|---|---|
| [01-Business-Model-Canvas](01-Business-Strategy/01-Business-Model-Canvas.docx) | Sembilan blok dua jalur: showcase non-komersial dan aset orisinal |
| [02-ICP-dan-Segmentasi-Pasar](01-Business-Strategy/02-ICP-dan-Segmentasi-Pasar.docx) | Empat ICP, skor prioritas, dan segmen yang dikecualikan |
| [03-Analisis-Kompetitor](01-Business-Strategy/03-Analisis-Kompetitor.docx) | GeoGuessr, Seterra, Kahoot, Wayground, Ruangguru, ekosistem Ren'Py |
| [04-Analisis-SWOT](01-Business-Strategy/04-Analisis-SWOT.docx) | Faktor internal-eksternal, risiko kekayaan intelektual, strategi turunan |

## 02-Sales

| Dokumen | Isi Singkat |
|---|---|
| [05-Proposal-Penjualan-B2B-Institusi-Edukasi-Budaya](02-Sales/05-Proposal-Penjualan-B2B-Institusi-Edukasi-Budaya.docx) | Sekolah, museum, dinas pariwisata; prasyarat karakter orisinal dinyatakan di depan |
| [05-Proposal-Penjualan-B2C-Komunitas-Fan](02-Sales/05-Proposal-Penjualan-B2C-Komunitas-Fan.docx) | Komunitas penggemar non-komersial, tanpa satu rupiah transaksi |
| [06-Statement-of-Work](02-Sales/06-Statement-of-Work.docx) | W1 sampai W14, termin, kriteria terima, dan daftar di luar lingkup |
| [07-Pricing-dan-Packaging](02-Sales/07-Pricing-dan-Packaging.docx) | P0 gratis permanen, P1 sampai P5 berbayar, larangan masuk daftar harga |
| [08-Sales-Playbook-dan-Battlecard](02-Sales/08-Sales-Playbook-dan-Battlecard.docx) | Kartu tempur enam pesaing dan jawaban keberatan soal karakter |
| [09-Product-Datasheet](02-Sales/09-Product-Datasheet.docx) | Spesifikasi terukur dan daftar 13 hal yang tidak didukung |

## 03-Pre-Sales

| Dokumen | Isi Singkat |
|---|---|
| [10-Discovery-Questionnaire](03-Pre-Sales/10-Discovery-Questionnaire.docx) | Tujuh bagian pertanyaan dan daftar penghenti peluang |
| [11-Demo-Script-dan-PoC-Plan](03-Pre-Sales/11-Demo-Script-dan-PoC-Plan.docx) | Naskah demo 20 menit dan PoC 14 hari dengan tujuh kriteria lolos |
| [12-Technical-Proposal](03-Pre-Sales/12-Technical-Proposal.docx) | Lima opsi penempatan, R1 sampai R10, dan batas integrasi |
| [13-ROI-dan-Business-Case](03-Pre-Sales/13-ROI-dan-Business-Case.docx) | Tiga skenario investasi, bertahap Rp34 jt versus penuh Rp85,25 jt |

## 04-IT-Communication

| Dokumen | Isi Singkat |
|---|---|
| [14-Arsitektur-Solusi](04-IT-Communication/14-Arsitektur-Solusi.docx) | Komponen, alur sesi, pola penempatan, dan batas vertikal |
| [15-Arsitektur-Keamanan-dan-Threat-Model](04-IT-Communication/15-Arsitektur-Keamanan-dan-Threat-Model.docx) | Permukaan tanpa dependensi, risiko kompromi repo dan takedown |
| [16-Privasi-Data-dan-Kepatuhan](04-IT-Communication/16-Privasi-Data-dan-Kepatuhan.docx) | Nol pengumpulan data, pemetaan UU PDP, dan dampak R4 |

## 05-Resilience-Operations

| Dokumen | Isi Singkat |
|---|---|
| [17-Business-Continuity-Plan](05-Resilience-Operations/17-Business-Continuity-Plan.docx) | Kontinuitas distribusi, lima skenario, dan peran tanggap |
| [18-Disaster-Recovery-Plan](05-Resilience-Operations/18-Disaster-Recovery-Plan.docx) | Pulih dari git tanpa basis data, sepuluh uji manual, pencegahan |
| [19-SOP-Insiden-dan-Breach-Response](05-Resilience-Operations/19-SOP-Insiden-dan-Breach-Response.docx) | Deteksi sampai notifikasi, skenario hak, budaya, dan data |
| [20-SLA-dan-Model-Dukungan](05-Resilience-Operations/20-SLA-dan-Model-Dukungan.docx) | Empat tingkatan, target S1 sampai S5, dan batas uptime jujur |

## Cara Membaca Suite Ini

1. Baca `01` sampai `04` lebih dahulu untuk memahami batasan hukum yang membentuk seluruh model bisnis.
2. Gunakan `02-Sales` sebagai materi depan; dokumen 05 B2C menegaskan bahwa segmen penggemar tidak dimonetisasi.
3. Pakailah `03-Pre-Sales` untuk discovery, demo, dan uji coba; kriteria penghenti peluang pada 10 melindungi tim dari janji yang tidak dapat ditepati.
4. Diskusikan `04-IT-Communication` bersama tim keamanan dan pejabat perlindungan data klien, terutama ketiadaan header kustom pada GitHub Pages.
5. Tutup dengan `05-Resilience-Operations` saat menyusun kontrak dukungan dan kesiapan insiden.

Empat keputusan yang berulang di seluruh dokumen dan harus ditetapkan manajemen sebelum komersialisasi: **persetujuan produksi karakter orisinal pengganti** (prasyarat mutlak setiap rupiah pendapatan), penerbitan berkas `LICENSE` serta pernyataan non-komersial di layar, penunjukan penasihat hukum untuk pendapat tertulis dan prosedur takedown 1x24 jam, serta pengesahan rentang harga dan tarif orang-hari yang saat ini masih berupa usulan.

## Penerbit

PT. Sainskerta Solusi Nusantara — Gedung Graha Mampang Lt. 3, Jakarta Selatan
hello@sainskerta.id · +62 813-5988-3131 · sainskerta.net

Dokumen bersifat rahasia dan hanya untuk pemakaian internal serta prospek bisnis yang telah menandatangani perjanjian kerahasiaan.

© 2026 PT. Sainskerta Solusi Nusantara · hello@sainskerta.id · sainskerta.net
