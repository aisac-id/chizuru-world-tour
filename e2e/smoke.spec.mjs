import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.removeItem('vn_save'));
  await page.reload();
});

test('title screen tampil dan tombol mulai membuka peta', async ({ page }) => {
  await expect(page.locator('#scr-title')).toBeVisible();
  await expect(page.locator('h1').first()).toHaveText('Chizuru World Tour');
  await page.getByRole('button', { name: 'Mulai / Lanjutkan Tur' }).click();
  await expect(page.locator('#scr-map')).toBeVisible();
  await expect(page.locator('.dest')).toHaveCount(8);
  await expect(page.locator('.dest').first()).not.toHaveClass(/locked/);
  await expect(page.locator('.dest').nth(1)).toHaveClass(/locked/);
});

test('scene pertama: dialog, pilihan +2 affection, selesai kembali ke peta', async ({ page }) => {
  await page.getByRole('button', { name: 'Mulai / Lanjutkan Tur' }).click();
  await page.locator('.dest').first().click();
  await expect(page.locator('#scr-scene')).toBeVisible();
  await expect(page.locator('#sc-place')).toHaveText('Yogyakarta, Jawa');
  for (let i = 0; i < 3; i++) await page.locator('#dlg').click();
  await expect(page.locator('#who')).toHaveText('Pilihanmu');
  await page.getByRole('button', { name: 'Ke pendopo, sambil pegangan tangan.' }).click();
  await expect(page.locator('#sc-aff')).toHaveText('♥ 2');
  await page.getByRole('button', { name: 'Lanjut ▸' }).click();
  await page.locator('#dlg').click();
  await expect(page.locator('#scr-map')).toBeVisible();
  await expect(page.locator('.dest').first()).toHaveClass(/done/);
  await expect(page.locator('#map-aff')).toHaveText('♥ 2');
});

test('progres tersimpan di localStorage setelah reload', async ({ page }) => {
  await page.getByRole('button', { name: 'Mulai / Lanjutkan Tur' }).click();
  await page.locator('.dest').first().click();
  for (let i = 0; i < 3; i++) await page.locator('#dlg').click();
  await page.getByRole('button', { name: 'Ke pendopo, sambil pegangan tangan.' }).click();
  await page.getByRole('button', { name: 'Lanjut ▸' }).click();
  await page.locator('#dlg').click();
  await page.reload();
  await page.getByRole('button', { name: 'Mulai / Lanjutkan Tur' }).click();
  await expect(page.locator('#map-aff')).toHaveText('♥ 2');
  await expect(page.locator('.dest').first()).toHaveClass(/done/);
});

test('reset progres menghapus save', async ({ page }) => {
  await page.getByRole('button', { name: 'Mulai / Lanjutkan Tur' }).click();
  await page.locator('.dest').first().click();
  for (let i = 0; i < 3; i++) await page.locator('#dlg').click();
  await page.getByRole('button', { name: 'Ke pendopo, sambil pegangan tangan.' }).click();
  await page.getByRole('button', { name: 'Lanjut ▸' }).click();
  await page.locator('#dlg').click();
  await page.reload();
  page.once('dialog', (d) => d.accept());
  await page.getByRole('button', { name: 'Reset Progres' }).click();
  await expect(page.locator('#map-aff')).toHaveText('♥ 0');
  const save = await page.evaluate(() => localStorage.getItem('vn_save'));
  expect(JSON.parse(save)).toEqual({ aff: 0, done: [] });
});
