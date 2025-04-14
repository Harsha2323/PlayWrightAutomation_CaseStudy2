const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify that user is able to land on the stock page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const inventorypagee = pomanager.getinventorypage()
  await inventorypagee.invebtoryiconpage()
  await inventorypagee.navigatetoStock()
  // assertion by validating the page name
  await expect(page.getByText('Stocks')).toContainText('Stocks')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'stocks.png', fullPage: true})
})

test('Verify that user is able to land on the inbond load page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const inventorypagee = pomanager.getinventorypage()
  await inventorypagee.invebtoryiconpage()
  await inventorypagee.navigatetoinbondload()
    // assertion by validating the page name
  await expect(page.getByText('Inbound loads')).toContainText('Inbound loads')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'inbond.png', fullPage: true})
})

test('Verify that user is able to land on the outbond load page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const inventorypagee = pomanager.getinventorypage()
  await inventorypagee.invebtoryiconpage()
  await inventorypagee.navigatetooutbondload()
    // assertion by validating the page name
  await expect(page.getByText('Outbound loads').first()).toContainText('Outbound loads')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'outbond.png', fullPage: true})
})