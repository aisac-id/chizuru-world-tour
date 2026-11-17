# AGENTS.md — chizuru-world-tour

1. **Baca `HARNESS.md` sampai selesai sebelum menulis kode.** Semua aturan di sana mengikat; reviewer menolak PR yang melanggar.
2. Game HTML statis (vanilla JS, localStorage, GitHub Pages). Tanpa backend, tanpa framework, tanpa CDN, tanpa eval.
3. Maks 300 LoC per file kode; ES modules untuk JS baru. `index.html` warisan single-file — jangan tambah besar, modularisasi lewat issue #27.
4. Nol hardcode secret/kredensial. Jalankan `C:\Users\Acer\.aisac\no-hardcode.cmd` dan tempel hasil LULUS di PR.
5. WCAG 2.1 AA + performance budget (initial load ≤ 100 KB, WebP/AVIF, lazy-load) sesuai HARNESS.md.
6. Test: `npm ci --ignore-scripts && npx playwright install chromium && npm test`. Bug fix wajib test regresi.
7. Alur: branch fitur → commit kecil Conventional Commits (rujuk issue) → PR ke `main` → review Code + Security → QA GATE → merge oleh Owner.
8. DILARANG: push langsung ke `main`, force-push/rewrite history, merge sendiri, mengubah setting repo, commit `Operation/` atau dokumen internal, publikasi ke luar, memakai Claude (Owner).
9. Konten ramah semua umur; data kostum/budaya wajib akurat sesuai audit di HARNESS.md §8.
10. Jalankan `C:\Users\Acer\.aisac\quota.cmd` sebelum langkah besar; berhenti bila STOP.
11. Bahasa kerja & UI: Bahasa Indonesia (disclaimer legal ID/EN). Konflik permintaan vs harness → tanya Leader (GM Games & Entertainment), jangan diam-diam melanggar.
