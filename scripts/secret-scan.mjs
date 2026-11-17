import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const PATTERNS = [
  ['AWS access key', /\bAKIA[0-9A-Z]{16}\b/],
  ['GitHub token', /\b(ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{22,})\b/],
  ['OpenAI-style key', /\bsk-[A-Za-z0-9]{20,}\b/],
  ['Slack token', /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/],
  ['Private key block', /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ['Hardcoded password', /\b(password|passwd|secret|api[_-]?key|token)\s*[:=]\s*['"][^'"\s]{8,}['"]/i],
  ['DB connection string', /\b(postgres|mysql|mongodb):\/\/[^\s'"]*:[^\s'"]*@/]
];
const SKIP = new Set(['package-lock.json', '.env.example', 'HARNESS.md', 'AGENTS.md']);
const EXT = /\.(js|mjs|cjs|ts|html|css|json|ya?ml|env|sh|cmd|ps1)$/i;

const files = execFileSync('git', ['ls-files'], { encoding: 'utf8' }).split('\n').filter(Boolean);
let findings = 0;
for (const f of files) {
  if (SKIP.has(f) || !EXT.test(f) || f.startsWith('Operation/')) continue;
  let text;
  try { text = await readFile(f, 'utf8'); } catch { continue; }
  for (const [label, re] of PATTERNS) {
    if (re.test(text)) { console.error(`SECRET SCAN FAIL: ${label} in ${f}`); findings++; }
  }
}
if (findings) { console.error(`Secret scan: ${findings} temuan. LULUS hanya bila 0.`); process.exit(1); }
console.log('Secret scan: LULUS (0 temuan).');
