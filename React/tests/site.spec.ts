import { test, expect } from '@playwright/test';

test.describe('Guitar Lessons Site', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows header banner image', async ({ page }) => {
    const img = page.locator('img[src*="banner"]');
    await expect(img).toBeVisible();
  });

  test('landing page content is visible by default', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Velkomin' })).toBeVisible();
    await expect(page.locator('a[href="mailto:robertaandersen1978@gmail.com"]').first()).toBeVisible();
    await expect(page.locator('text=695 3893').first()).toBeVisible();
  });

  test('navigation shows all menu items', async ({ page }) => {
    const navItems = ['Velkomin', 'Bóka Tíma', 'Uppbygging Námsins', 'Verð', 'Um Mig', 'Gítargrip'];
    for (const item of navItems) {
      await expect(page.locator(`button`, { hasText: item })).toBeAttached();
    }
  });

  test('navigate to Bóka Tíma', async ({ page }) => {
    await page.click('button:has-text("Bóka Tíma")');
    await expect(page.locator('h1', { hasText: 'Bóka Tíma' })).toBeVisible();
  });

  test('navigate to Uppbygging Námsins', async ({ page }) => {
    await page.click('button:has-text("Uppbygging Námsins")');
    await expect(page.locator('h1', { hasText: 'Uppbygging námsins' })).toBeVisible();
    await expect(page.locator('h3', { hasText: 'Byrjendur' })).toBeVisible();
    await expect(page.locator('h3', { hasText: 'Miðstig' })).toBeVisible();
    await expect(page.locator('h3', { hasText: 'Framhald' })).toBeVisible();
  });

  test('navigate to Verð (Catalog)', async ({ page }) => {
    await page.click('button:has-text("Verð")');
    await expect(page.locator('h1', { hasText: 'Verðskrá' })).toBeVisible();
    await expect(page.locator('text=60.000 kr')).toBeVisible();
    await expect(page.locator('text=6000 kr')).toBeVisible();
  });

  test('navigate to Um Mig', async ({ page }) => {
    await page.click('button:has-text("Um Mig")');
    await expect(page.locator('h1', { hasText: 'Um Mig' })).toBeVisible();
    await expect(page.locator('img[alt="roberta"]')).toBeVisible();
  });

  test('navigate to Gítargrip (Chords)', async ({ page }) => {
    await page.click('button:has-text("Gítargrip")');
    await expect(page.locator('h1', { hasText: 'Nokkur Gítargrip' })).toBeVisible();
    await expect(page.locator('h3', { hasText: 'Dúr hljómar' })).toBeVisible();
    await expect(page.locator('h3', { hasText: 'Moll hljómar' })).toBeVisible();
    await expect(page.locator('h3', { hasText: '7-undar hljómar' })).toBeVisible();
  });

  test('chord diagrams display chord names', async ({ page }) => {
    await page.click('button:has-text("Gítargrip")');
    const chordNames = ['E', 'A', 'D', 'G', 'C', 'Em', 'Am', 'E7', 'A7'];
    for (const chord of chordNames) {
      await expect(page.locator('h4', { hasText: new RegExp(`^${chord}$`) })).toBeVisible();
    }
  });

  test('can navigate back to landing from another page', async ({ page }) => {
    await page.click('button:has-text("Um Mig")');
    await expect(page.locator('h1', { hasText: 'Um Mig' })).toBeVisible();
    await page.click('button:has-text("Velkomin")');
    await expect(page.locator('h1', { hasText: 'Velkomin' })).toBeVisible();
  });
});
