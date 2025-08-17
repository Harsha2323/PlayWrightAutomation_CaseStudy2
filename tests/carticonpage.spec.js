const { test, expect } = require('@playwright/test');
const { PoManager } = require('../PageObject/PoManager');
const data = JSON.parse(JSON.stringify(require('../testdata/Testdata.json')));

test('Verify that user is able to land on the Purchase & Opportunity list page', async ({ page }) => {
  const pomanager = new PoManager(page);
  const loginpage = pomanager.getloginpage();
  await loginpage.pageurl();
  await loginpage.logincred(data.username, data.password);
  const carticonpagee = pomanager.getcartpage();
  await carticonpagee.Carticon();
  await carticonpagee.navigatetoPurchase1();
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Purchase & Opportunity list')).toContainText('Purchase & Opportunity list');
  await page.screenshot({ path: `tests/Screenshot/${Date.now()}_PurchaseAndOpportunityList.png`, fullPage: true });
});

test('Verify that user is able to land on the Purchase & Opportunity list page 2', async ({ page }) => {
  const pomanager = new PoManager(page);
  const loginpage = pomanager.getloginpage();
  await loginpage.pageurl();
  await loginpage.logincred(data.username, data.password);
  const carticonpagee = pomanager.getcartpage();
  await carticonpagee.Carticon();
  await carticonpagee.navigatetoPurchase2();
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Purchase & Opportunity list')).toContainText('Purchase & Opportunity list');
  await page.screenshot({ path: `tests/Screenshot/${Date.now()}_PurchaseAndOpportunityList2.png`, fullPage: true });
});

test('Verify that user is able to land on the Contracts & Services page', async ({ page }) => {
  const pomanager = new PoManager(page);
  const loginpage = pomanager.getloginpage();
  await loginpage.pageurl();
  await loginpage.logincred(data.username, data.password);
  const carticonpagee = pomanager.getcartpage();
  await carticonpagee.Carticon();
  await carticonpagee.navigateContractsServices();
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Contracts & Services')).toContainText('Contracts & Services');
  await page.screenshot({ path: `tests/Screenshot/${Date.now()}_ContractsAndServices.png`, fullPage: true });
});

test('Verify that user is able to land on the offers page', async ({ page }) => {
  const pomanager = new PoManager(page);
  const loginpage = pomanager.getloginpage();
  await loginpage.pageurl();
  await loginpage.logincred(data.username, data.password);
  const carticonpagee = pomanager.getcartpage();
  await carticonpagee.Carticon();
  await carticonpagee.navigatetoOffers();
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Offers')).toContainText('Offers');
  await page.screenshot({ path: `tests/Screenshot/${Date.now()}_Offers.png`, fullPage: true });
});

test('Verify that user is able to land on the Sourcing hub page', async ({ page }) => {
  const pomanager = new PoManager(page);
  const loginpage = pomanager.getloginpage();
  await loginpage.pageurl();
  await loginpage.logincred(data.username, data.password);
  const carticonpagee = pomanager.getcartpage();
  await carticonpagee.Carticon();
  await carticonpagee.navigateSourcingHub();
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Sourcing hub')).toContainText('Sourcing hub');
  await page.screenshot({ path: `tests/Screenshot/${Date.now()}_SourcingHub.png`, fullPage: true });
});

test('Verify that user is able to land on the Purchase goals & Target purchase costs page', async ({ page }) => {
  const pomanager = new PoManager(page);
  const loginpage = pomanager.getloginpage();
  await loginpage.pageurl();
  await loginpage.logincred(data.username, data.password);
  const carticonpagee = pomanager.getcartpage();
  await carticonpagee.Carticon();
  await carticonpagee.navigatePurchaseGoals();
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Purchase goals & Target purchase costs')).toContainText('Purchase goals & Target purchase costs');
  await page.screenshot({ path: `tests/Screenshot/${Date.now()}_PurchaseGoalsAndTargetCosts.png`, fullPage: true });
});
