# HARNESS — chizuru-world-tour

Standar kerja wajib repo ini. Semua issue, PR, dan review WAJIB merujuk dokumen ini.
Pemilik harness: **GM Games & Entertainment** (Project Lead). Perubahan harness hanya lewat PR `chore/harness-*`.

## 1. Identitas

| Field | Isi |
|---|---|
| Jenis proyek | Game web / visual novel HTML statis (single-file SPA), tanpa backend/build |
| Stack | HTML + CSS + vanilla JS, localStorage (`vn_save`), hosting GitHub Pages |
| Basis harness | Harness ringan turunan `Aisac-Indonesia/loop-v5` @ `57d414ccde3ca77f4194666032f4b3942bd5b3aa` (RULES-OF-THE-GAME, standards/, harness/review-checklist) + `aisac-id/harness-extension` @ `2301564c22989c5b11efd2f81f76edf8bcb1ae71` (AGENTS.md, STANDARDS.md: maks 300 LoC/file, ES modules, nol hardcode) |
| Status legal | Fan-made non-komersial. Kode berlisensi MIT (lihat `LICENSE`); karakter Chizuru Mizuhara © Reiji Miyajima/Kodansha (lihat `NOTICE`). Aset fan-art TIDAK dicakup MIT. |

## 2. Aturan yang berlaku + pengecualian

Berlaku (adaptasi dari basis):
1. **Maks 300 LoC per file** kode (`*.js`, `*.mjs`, `*.css`). Lebih → pecah. Pengecualian sementara: `index.html` (197 baris, warisan single-file) sampai modularisasi issue #27; jangan menambah baris di dalamnya tanpa rencana pecah.
2. **ES modules** untuk semua JS baru; tanpa framework, tanpa CDN, tanpa `eval`.
3. **Nol hardcode**: tidak ada secret/kredensial/token di kode, aset, atau dokumen. Konfigurasi lewat env (`.env` lokal di-gitignore; `.env.example` tanpa nilai asli). Data dialog/kostum statis adalah KONTEN game, bukan konfigurasi — wajib akurat sesuai audit (lihat §8).
4. **Aksesibilitas WCAG 2.1 AA**: kontras teks ≥ 4.5:1 (CTA saat ini gagal, issue #5), keyboard (Tab/Enter/Esc/Space), focus ring, `alt` bermakna, `aria-live` untuk dialog, touch target ≥ 44×44px, tanpa `maximum-scale=1` (issue #11).
5. **Performance budget**: initial load ≤ 100 KB (issue #9; baseline 583 KB), gambar WebP/AVIF + `loading="lazy"` di luar layar pertama (issue #7/#8/#25), dimensi gambar eksplisit (CLS ≤ 0.1), LCP ≤ 2.5 s, INP ≤ 200 ms. Ukur dengan Lighthouse/CDP sebelum klaim.
6. **Test e2e Playwright minimal** (`e2e/`, `npm test`). Setiap bug fix WAJIB punya test regresi yang merah sebelum fix. Alur kritis: title → peta → scene → pilihan → affection → ending → save/reset.
7. **Supply chain**: versi dependency exact + `package-lock.json` committed, `npm ci --ignore-scripts`, tanpa auto-merge major, dependency baru lewat review.
8. **Satu PR = satu tujuan, ±maks 400 baris**, Conventional Commits (`fix:`, `feat:`, `perf:`, `content:`, `security:`, `chore:`, `docs:`) rujuk nomor issue. Bukti uji (screenshot/headless/test) wajib di deskripsi PR.
9. **Konten ramah semua umur**: tanpa konten eksplisit/kekerasan/umpatan; framing fiksi + rating jelas; premis "pacar sewaan" diberi framing aman (issue #13) atau diganti pada Versi B.
10. **Alur GitHub** (skill aisac-github-delivery): clone → branch (`security/…`, `fix/…`, `feat/…`, `perf/…`, `content/…`) → commit kecil → push branch → PR ke `main` (Ready for review setelah test lulus) → review Code Reviewer + Security Reviewer → **QA GATE: LULUS/GAGAL** di PR → merge HANYA oleh Owner. Setelah merge: `git fetch --prune`, branch baru dari `main` terbaru.
11. **Kuota**: jalankan `C:\Users\Acer\.aisac\quota.cmd` sebelum langkah besar; STOP bila kuota habis. Claude DILARANG (Owner). Diskusi Qwen4-Max, eksekusi coding Sonus.

Pengecualian basis loop-v5 (alasan: game statis tanpa backend/database):
- Modular Monolith/microservices, DATABASE-RULES (FK, soft delete, CRUD drawer), backend-first, akses DB user: **tidak berlaku** (tanpa server/DB).
- TWELVE-FACTOR penuh, OWASP ASVS L2 server-side, Cloudflare edge, SRE/backup/restore drill, PDP consent UI: **tidak berlaku** di GitHub Pages statis; yang relevan tetap wajib: secret scan, XSS mitigation (data statis, hindari `innerHTML` untuk input user), CSP direncanakan (#27).
- i18n 3 bahasa (id/en/ja): **ditunda**; UI Bahasa Indonesia, disclaimer legal ID/EN wajib (NOTICE). UX heuristic benchmark ≥ 9.0 tetap berlaku untuk perubahan UI besar.

## 3. Struktur folder

```
index.html          # SPA game (warisan; modularisasi #27)
assets/             # gambar scene/sprite (WebP/AVIF bertahap)
promo/              # brand & promo kit
scripts/            # tooling dev (static-server, secret-scan)
e2e/                # test Playwright
.github/workflows/  # CI
Operation/          # DILARANG di repo (dokumen internal Confidential) — di-gitignore, hapus via PR security/remove-internal-docs
```

## 4. Konfigurasi / env

Game statis: **tidak ada secret runtime**. `.env.example` hanya berisi variabel tooling contoh (nilai palsu). Jangan pernah commit `.env`, token, atau kredensial. Produksi = GitHub Pages (tanpa env server).

## 5. Definition of Done (per PR)

- [ ] CI hijau: secret scan + budget 300 LoC + Playwright e2e.
- [ ] `C:\Users\Acer\.aisac\no-hardcode.cmd` **LULUS** (tempel hasil di deskripsi PR).
- [ ] Test regresi untuk bug fix; bukti uji (screenshot/headless/output test) di PR.
- [ ] Aksesibilitas & performance budget tidak memburuk (ukur bila menyentuh UI/aset).
- [ ] Review Code Reviewer + Security Reviewer; **QA GATE: LULUS** dari QA Engineer.
- [ ] Merge oleh Owner; branch terhapus otomatis.

## 6. Review checklist (turunan harness/review-checklist.md loop-v5)

1. Scope PR satu tujuan? ≤ ±400 baris? Conventional Commits + nomor issue?
2. ≤ 300 LoC/file baru? ES modules? Tanpa eval/CDN/framework baru?
3. Nol secret/hardcode? `no-hardcode.cmd` LULUS + secret scan CI?
4. WCAG AA: kontras, keyboard, alt, aria-live, target sentuh?
5. Budget performa: ukuran aset, lazy-load, dimensi gambar, initial load?
6. Konten: ramah semua umur, data kostum/budaya akurat sesuai audit, framing fiksi?
7. Test: regresi merah→hijau untuk fix, e2e alur kritis lulus, bukti di PR?
8. Keamanan: XSS (innerHTML hanya data statis tepercaya), tanpa dokumen internal, tanpa rewrite history/force-push?
9. Legal: atribusi IP di NOTICE, kode saja yang MIT, aset original Versi B tidak meniru Chizuru?

## 7. Rilis & bukti rilis

Rilis = merge ke `main` oleh Owner → GitHub Pages deploy otomatis. Bukti rilis (release-evidence): link PR + commit merge, hasil CI, QA GATE, screenshot/Lighthouse setelah deploy, catatan versi di laporan Leader. Tag/release hanya oleh Owner.

## 8. Catatan khusus repo (keputusan Owner Fase 2)

- Dialog ramah semua umur; koreksi data kostum dari audit PM (`shared/sync-dari-akun-lama/shared/fase1-audit/product-manager-audit-konten.md`): "palmas" bukan "Palmeras"; enggang = kebijaksanaan/kehormatan; Papua spesifik Asmat + kasuari; Yogyakarta kebaya+jarik; Bali senteng/kamen; hanbok = jeogori+chima. Gambar 001/004/097 salah (strapless) → koreksi aset #20.
- Versi B: SATU karakter original konsisten untuk 4 aplikasi Chizuru; konsep grup ini Arunika/Sagara/Nirmala; aset via Qwen 4.0, DILARANG meniru rupa Chizuru/karakter lain.
- `Operation/` = Confidential, hapus dari repo via PR (bukan rewrite history; keputusan history terpisah oleh Owner).
