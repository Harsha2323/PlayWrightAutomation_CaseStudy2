class logisticseRateiconpage

{

constructor(page)
{
this.page = page
this.logisitrateicsicon = page.locator("(//div[@class = 'anchor'])[7]")
this.exportratemanagement = page.getByRole('link', { name: 'Rate management' }).first()
this.exportrateexplore = page.getByRole('link', { name: 'Rate explorer' }).first()
this.localratemanagement = page.getByRole('link', { name: 'Rate management' }).nth(1)
this.localrateexplore = page.getByRole('link', { name: 'Rate explorer' }).nth(1)

}

async logisiticsrateicon() 
  {
    await this.logisitrateicsicon.click()
  }

async navigatetoexportratemanagement() 
  {
    await this.exportratemanagement.click()
  }
  
async navigatetoexportrateexplore() 
  {
    await this.exportrateexplore.click()
  }

  async navigatetolocalratemanagement() 
  {
    await this.localratemanagement.click()
  }

  async navigatetolocalrateexplore() 
  {
    await this.localrateexplore.click()
  }


}

module.exports = {logisticseRateiconpage}