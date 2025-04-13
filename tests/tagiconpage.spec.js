const {test, expect}=require('@playwright/test')
const {login} = require('../PageObject/login')
const {Tagiconpage} = require('../PageObject/Tagiconpage')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify that user is able to land on sales page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const tagiconpagee = new Tagiconpage(page)
  await tagiconpagee.Tagicon()
  await tagiconpagee.navigatetoSales()
  // assertion by validating the page name
  await expect(page.getByText('Sale & Opportunity list')).toContainText('Sale & Opportunity list')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'salesclear.png', fullPage: true})
})