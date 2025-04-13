const {test, expect}=require('@playwright/test')
const {login} = require('../PageObject/login')
const {Invoiceandpayable} = require('../PageObject/Invoiceandpayable')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify that user is able to land on the invoice page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const Invoiceandpayablee = new Invoiceandpayable(page)
  await Invoiceandpayablee.invoiceandpayableiconpage()
  await Invoiceandpayablee.navigatetoinvoice()
  // assertion by validating the page name
  await expect(page.getByText('Invoices').first()).toContainText('Invoices')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'invoices.png', fullPage: true})
})

test('Verify that user is able to land on the payable page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const Invoiceandpayablee = new Invoiceandpayable(page)
  await Invoiceandpayablee.invoiceandpayableiconpage()
  await Invoiceandpayablee.navigatetoinpayable()
    // assertion by validating the page name
  await expect(page.getByText('Payables').first()).toContainText('Payables')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'payables.png', fullPage: true})
})

test('Verify that user is able to land on the vendorpayable page', async ({page}) => {
  const loginpage =new login(page)
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const Invoiceandpayablee = new Invoiceandpayable(page)
  await Invoiceandpayablee.invoiceandpayableiconpage()
  await Invoiceandpayablee.navigatetovendorpayable()
    // assertion by validating the page name
  await expect(page.getByText('Vendor payables').first()).toContainText('Vendor payables')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'vendorpayable.png', fullPage: true})
})