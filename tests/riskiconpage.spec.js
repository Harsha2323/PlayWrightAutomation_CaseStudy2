const {test, expect}=require('@playwright/test')
const {login} = require('../PageObject/login')
const {Riskiconpage} = require('../PageObject/Riskiconpage')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify that user is able to land on the Hedging contracts page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const riskiconpagee = new Riskiconpage(page)
  await riskiconpagee.riskicon()
  await riskiconpagee.navigatetoHedgingcontracts()
  // assertion by validating the page name
  await expect(page.getByText('Hedging contracts')).toContainText('Hedging contracts')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'hedingcontracts.png', fullPage: true})
})



test('Verify that user is able to land on the position page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const riskiconpagee = new Riskiconpage(page)
  await riskiconpagee.riskicon()
  await riskiconpagee.navigatetoposition()
  // assertion by validating the page name
  //await expect(page.getByText('')).toContainText('')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'position.png', fullPage: true})
})