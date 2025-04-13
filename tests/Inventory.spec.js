const {test, expect}=require('@playwright/test')
const {login} = require('../PageObject/login')
const {Invebtory} = require('../PageObject/Inventory')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify that user is able to land on the stock page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const invebtorypagee = new Invebtory(page)
  await invebtorypagee.invebtoryiconpage()
  await invebtorypagee.navigatetoStock()
  // assertion by validating the page name
  await expect(page.getByText('Stocks')).toContainText('Stocks')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'stocks.png', fullPage: true})
})

test('Verify that user is able to land on the inbond load page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const invebtorypagee = new Invebtory(page)
  await invebtorypagee.invebtoryiconpage()
  await invebtorypagee.navigatetoinbondload()
    // assertion by validating the page name
  await expect(page.getByText('Inbound loads')).toContainText('Inbound loads')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'inbond.png', fullPage: true})
})

test('Verify that user is able to land on the outbond load page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const invebtorypagee = new Invebtory(page)
  await invebtorypagee.invebtoryiconpage()
  await invebtorypagee.navigatetooutbondload()
    // assertion by validating the page name
  await expect(page.getByText('Outbound loads').first()).toContainText('Outbound loads')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'outbond.png', fullPage: true})
})