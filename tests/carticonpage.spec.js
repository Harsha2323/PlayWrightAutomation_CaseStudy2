const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify that user is able to land on the Purchase & Opportunity list page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const carticonpagee = pomanager.getcartpage()
  await carticonpagee.Carticon()
  await carticonpagee.navigatetoPurchase1()
  await page.waitForTimeout(4000)
  // assertion by validating the page name
  await expect(page.getByText('Purchase & Opportunity list')).toContainText('Purchase & Opportunity list')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Purchase&Opportunity.png', fullPage: true})
})


test('Verify that user is able to land on the Purchase & Opportunity list page2', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const carticonpagee = pomanager.getcartpage()
  await carticonpagee.Carticon()
  await carticonpagee.navigatetoPurchase2()
  await page.waitForTimeout(4000)
  // assertion by validating the page name
  await expect(page.getByText('Purchase & Opportunity list')).toContainText('Purchase & Opportunity list')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Purchase&Opportunity1.png', fullPage: true})
})

//onepage is missing
test('Verify that user is able to land on the Contracts & Services page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const carticonpagee = pomanager.getcartpage()
  await carticonpagee.Carticon()
  await carticonpagee.navigateContractsServices()
  await page.waitForTimeout(4000)
  // assertion by validating the page name
  //await expect(page.getByText('Purchase & Opportunity list')).toContainText('Purchase & Opportunity list')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Purchase&Opportunity1.png', fullPage: true})
})  

test('Verify that user is able to land on the offers page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const carticonpagee = pomanager.getcartpage()
  await carticonpagee.Carticon()
  await carticonpagee.navigatetoOffers()
  await page.waitForTimeout(4000)
  // assertion by validating the page name
  await expect(page.getByText('Offers')).toContainText('Offers')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'offfers.png', fullPage: true})
})  


test('Verify that user is able to land on the Sourcing hub page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const carticonpagee = pomanager.getcartpage()
  await carticonpagee.Carticon()
  await carticonpagee.navigateSourchub()
  await page.waitForTimeout(4000)
  // assertion by validating the page name
  await expect(page.getByText('Sourcing hub')).toContainText('Sourcing hub')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'sourcinghub.png', fullPage: true})
})


test('Verify that user is able to land on the Purchase goals & Target purchase costs page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const carticonpagee = pomanager.getcartpage()
  await carticonpagee.Carticon()
  await carticonpagee.navigatepurchaseGole()
  await page.waitForTimeout(4000)
  // assertion by validating the page name
  await expect(page.getByText('Purchase goals & Target purchase costs')).toContainText('Purchase goals & Target purchase costs')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Purchasegoals&Targetpurchasecosts.png', fullPage: true})
})



