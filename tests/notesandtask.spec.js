const {test, expect}=require('@playwright/test')
const {PoManager} = require('../PageObject/PoManager')
const data =JSON.parse(JSON.stringify(require('../testdata/Testdata.json')))



test('Verify that user is able to land on the Notes page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const notesandtaske = pomanager.getNotesandtaskpage()
  await notesandtaske.notesandtasksicons()
  await notesandtaske.navigatetonotes()
  // assertion by validating the page name
  await expect(page.getByText('Notes', { exact: true })).toContainText('Notes')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'notes.png', fullPage: true})
})



test('Verify that user is able to land on the tasks page', async ({page}) => {
  const pomanager =new PoManager(page)
  const loginpage = pomanager.getloginpage()
  await loginpage.pageurl()
  await loginpage.logincred(data.username , data.password)
  const notesandtaske = pomanager.getNotesandtaskpage()
  await notesandtaske.notesandtasksicons()
  await notesandtaske.navigatetotasks()
  // assertion by validating the page name
  await expect(page.getByText('Tasks', { exact: true })).toContainText('Tasks')
  await page.waitForLoadState();
  await page.screenshot({ path:'tests/Screenshot/'+Date.now()+'tasks.png', fullPage: true})

})