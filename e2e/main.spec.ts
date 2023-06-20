import { test, expect } from '@playwright/test'

test('Should run index page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('Let be the index page!')
})
