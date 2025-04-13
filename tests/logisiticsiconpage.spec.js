const {test, expect}=require('@playwright/test')
const {login} = require('../PageObject/login')
const {logisiticsiconpage} = require('../PageObject/logisiticsiconpage')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))


test('Verify that user is able to land on the planing booking page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const logisiticsiconpagee = new logisiticsiconpage(page)
  await logisiticsiconpagee.logisiticsiconpage()
  await logisiticsiconpagee.navigatetoplaningbooking()
  // assertion by validating the page name
  await page.waitForLoadState();
  await expect(page.getByText('Planning/Booking')).toContainText('Planning/Booking')
})

test('Verify that user is able to land on the loades/holdes page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const logisiticsiconpagee = new logisiticsiconpage(page)
  await logisiticsiconpagee.logisiticsiconpage()
  await logisiticsiconpagee.navigatetoloadesholdes()
  // assertion by validating the page name
  await page.waitForLoadState();
  await expect(page.getByText('Loads/Holds')).toContainText('Loads/Holds')
})

test('Verify that user is able to land on the shipments page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const logisiticsiconpagee = new logisiticsiconpage(page)
  await logisiticsiconpagee.logisiticsiconpage()
  await logisiticsiconpagee.navigatetoshipments()
  // assertion by validating the page name
  await page.waitForLoadState();
  await expect(page.getByText('Shipments')).toContainText('Shipments')
})

test('Verify that user is able to land on the bookings page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const logisiticsiconpagee = new logisiticsiconpage(page)
  await logisiticsiconpagee.logisiticsiconpage()
  await logisiticsiconpagee.navigatetobookings()
  // assertion by validating the page name
  await expect(page.getByText('Bookings')).toContainText('Bookings')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'booking.png', fullPage: true})
})

test('Verify that user is able to land on the shipment Tracking page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const logisiticsiconpagee = new logisiticsiconpage(page)
  await logisiticsiconpagee.logisiticsiconpage()
  await logisiticsiconpagee.navigatetoshipmenttracking()
  // assertion by validating the page name
  await expect(page.getByText('Shipment tracking')).toContainText('Shipment tracking')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'shipmenttracking.png', fullPage: true})
})