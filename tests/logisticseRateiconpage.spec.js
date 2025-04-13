const {test, expect}=require('@playwright/test')
const {login} = require('../PageObject/login')
const {logisticseRateiconpage} = require('../PageObject/logisticseRateiconpage')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))


test('Verify that user is able to land on the expert rate management page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const logisticserateiconpagee = new logisticseRateiconpage(page)
  await logisticserateiconpagee.logisiticsrateicon()
  await logisticserateiconpagee.navigatetoexportratemanagement()
  // assertion by validating the page name
  await expect(page.getByText('Rate management - Export')).toContainText('Rate management - Export')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'ratemanagement-export.png', fullPage: true})
})

test('Verify that user is able to land on the expert rate explore page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const logisticserateiconpagee = new logisticseRateiconpage(page)
  await logisticserateiconpagee.logisiticsrateicon()
  await logisticserateiconpagee.navigatetoexportrateexplore()
  // assertion by validating the page name
  await expect(page.getByText('Rate explorer - Export')).toContainText('Rate explorer - Export')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'rateexplre-export.png', fullPage: true})
})

test('Verify that user is able to land on local rate management page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const logisticserateiconpagee = new logisticseRateiconpage(page)
  await logisticserateiconpagee.logisiticsrateicon()
  await logisticserateiconpagee.navigatetolocalratemanagement()
  // assertion by validating the page name
  await expect(page.getByText('Rate management - Local')).toContainText('Rate management - Local')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'ratemanagement-local.png', fullPage: true})
})

test('Verify that user is able to land on the local rate explore page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const logisticserateiconpagee = new logisticseRateiconpage(page)
  await logisticserateiconpagee.logisiticsrateicon()
  await logisticserateiconpagee.navigatetolocalrateexplore()
  // assertion by validating the page name
  await expect(page.getByText('Rate explorer - Local')).toContainText('Rate explorer - Local')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'rateexplor-local.png', fullPage: true})
})
