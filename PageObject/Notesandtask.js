class Notesandtask

{

constructor(page)
{
this.page = page
this.noteandtasksicon = page.locator("(//div[@class = 'anchor'])[9]")
this.notes= page.getByRole('link', { name: 'Notes' })
this.tasks = page.getByRole('link', { name: 'Tasks' })

}

async notesandtasksicons() 
  {
    await this.noteandtasksicon.click()
  }

async navigatetonotes() 
  {
    await this.notes.click()
  }

  async navigatetotasks() 
  {
    await this.tasks.click()
  }

}

module.exports = {Notesandtask}