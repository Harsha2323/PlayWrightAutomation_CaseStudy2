const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify that user is able to land on Dashboard page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const reportpagee = pomanager.getreportspage()
  await reportpagee.reportsicons()
  await reportpagee.navigatetodashboard()
  // assertion by validating the page name
  await expect(page.getByText('Dashboards')).toContainText('Dashboards')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Dashboards.png', fullPage: true})
})

test('Verify that user is able to land on the reportlist page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const reportpagee = pomanager.getreportspage()
  await reportpagee.reportsicons()
  await reportpagee.navigatetoreportlist()
    // assertion by validating the page name
  await expect(page.getByText('Report list')).toContainText('Report list')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Reportlist.png', fullPage: true})
})

test('Verify that user is able to land on the price list dashboard page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const reportpagee = pomanager.getreportspage()
  await reportpagee.reportsicons()
  await reportpagee.navigatetopricelistdashboard()
    // assertion by validating the page name
  await expect(page.getByText('Price lists broadcasted (')).toContainText('Price lists broadcasted (')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Pricelistsbroadcasted.png', fullPage: true})
})


test('Verify that user is able to land on the Exceptional costs page', async ({page}) => {
    const pomanager =new PoManager(page)
    const loginpage = pomanager.getloginpage()
    await loginpage.pageurl()
    await loginpage.logincred(data.username , data.password)
    const reportpagee = pomanager.getreportspage()
    await reportpagee.reportsicons()
    await reportpagee.navigatetoExceptionalcosts()
      // assertion by validating the page name
    await expect(page.getByText('List of other costs')).toContainText('List of other costs')
    await page.waitForLoadState();
    await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Listofothercosts.png', fullPage: true})
  })