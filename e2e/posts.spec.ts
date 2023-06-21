import { test, expect } from '@playwright/test'

test('Should run posts page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About Page' and click on it
  await page.click('text=Posts')
  // The new URL should be "/posts" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/posts')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('Posts')
})