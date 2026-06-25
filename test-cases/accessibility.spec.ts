
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from 'fixtures';

test.describe('homepage', () => {
  test('should not have any automatically detectable accessibility issues', async ({ homePage, page }) => {

    const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['color-contrast'])
        .analyze();

    const criticalOrSerious = accessibilityScanResults.violations.filter(
      v => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(criticalOrSerious).toHaveLength(0);

  });
});