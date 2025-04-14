const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify User is able to navigate to the url', async ({page}) => {

  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  const currentUrl = page.url();
  //Assertion to confirm the URL
   expect(currentUrl).toBe('https://demo.haroldwaste.com/authentication');
   await page.waitForLoadState();
   await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Login.png', fullPage: true})
});


test('Verify User is able to login to the application', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  //Assertion for login (checking profile icon visible only when user login)
  await expect(page.locator("(//span[@class='MuiIconButton-label'])[2]")).toBeVisible()
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'HomeScreen.png', fullPage: true})
});


test('Verify User is able to logout from the application', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  await loginpage.logout()
  await page.waitForURL('https://demo.haroldwaste.com/authentication')
  const loginUrl = page.url();
  //Assertion to confirm the logout
   await expect(loginUrl).toBe('https://demo.haroldwaste.com/authentication');
   await page.waitForLoadState();
   await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'Logout.png', fullPage: true})
});


