import { test, expect } from '@playwright/test';

test.describe('Wizikey Media Search - Smoke & Basic Functional Tests', () => {

    const baseUrl = "https://wizikey.com/media/search";


    test('Verify page loads and basic elements are visible', async ({ page }) => {
        await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
        await expect(page.getByPlaceholder('Type any keyword to search for reporters')).toBeVisible();
        await expect(page.getByPlaceholder('Go to page').first()).toBeVisible();
        await expect(page.getByPlaceholder('Go to page').last()).toBeVisible();
    });


    test('Verify search bar is visible and accepts input', async ({ page }) => {
        await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
        const searchBox = page.getByPlaceholder('Type any keyword to search for reporters');

        await expect(searchBox).toBeVisible();
        await searchBox.fill("Press Trust of India");

        const value = await searchBox.inputValue();
        expect(value).toBe("Press Trust of India");
    });

    test('Verify keyword search filters results', async ({ page }) => {
        await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
        const row = page.locator('[data-cy="data-0-table-row"]');
        if (await row.count() > 0) {
            const fullName = await row.locator('p').nth(1).innerText();
            await page.getByRole('combobox').selectOption({ label: 'by name' });

            const searchBox = page.getByPlaceholder('Type any keyword to search for reporters');
            await searchBox.fill(fullName);
            await page.keyboard.press("Enter");

            const rows = page.locator('[data-cy="data-table-body"] [data-cy="data-0-table-cell"] p').getByText(fullName);
            await expect(rows.first()).toBeVisible();

        } else {
            console.log(`Record not available to search`)
        }

    });
});
