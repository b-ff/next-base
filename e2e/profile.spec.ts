import { test, expect } from '@playwright/test'

test('Should run profile page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About Page' and click on it
  await page.click('text=Profile')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/api/auth/signin?callbackUrl=/profile')
})