const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))

async function applyZoomOut(page) {
  await page.addStyleTag({
    content: `body { transform: scale(0.8); transform-origin: top left; }`
  });
}

test('Verify that user is able to land on provider page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  await applyZoomOut(page);
  const adminpagee = pomanager.getadminpanelpagepage()
  await adminpagee.adminpanelicon()
  await adminpagee.navigatetoproviders()
  // assertion by validating the page name
  await expect(page.getByText('Providers')).toContainText('Providers')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Providers.png', fullPage: true})
})

test('Verify that user is able to land on the products page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  await applyZoomOut(page);
  const adminpagee = pomanager.getadminpanelpagepage()
  await adminpagee.adminpanelicon()
  await adminpagee.navigatetoproducts()
    // assertion by validating the page name
  await expect(page.getByText('Products', { exact: true })).toContainText('Products')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Products.png', fullPage: true})
})

test('Verify that user is able to land on the audit logs page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  await applyZoomOut(page);
  const adminpagee = pomanager.getadminpanelpagepage()
  await adminpagee.adminpanelicon()
  await adminpagee.navigatetoauditlog()
    // assertion by validating the page name
  await expect(page.getByText('Audit Logs')).toContainText('Audit Logs')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'auditlog.png', fullPage: true})
})


test('Verify that user is able to land on the Notification preferences page', async ({page}) => {
    const pomanager =new PoManager(page)
    const loginpage = pomanager.getloginpage()
    await loginpage.pageurl()
    await loginpage.logincred(data.username , data.password)
    await applyZoomOut(page);
    const adminpagee = pomanager.getadminpanelpagepage()
    await adminpagee.adminpanelicon()
    await adminpagee.navigatetoNotificationpreferences()
      // assertion by validating the page name
    await expect(page.getByText('Notification preferences')).toContainText('Notification preferences')
    await page.waitForLoadState();
    await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Notificationpreferences.png', fullPage: true})
  })