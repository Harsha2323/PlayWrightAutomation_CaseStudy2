class Reports

{

constructor(page)
{
this.page = page
this.reportspageicon = page.locator("(//div[@class = 'anchor'])[10]")
this.dashboard= page.getByRole('link', { name: 'Dashboards' })
this.reportlist = page.getByRole('link', { name: 'Report list' })
this.pricelistdashboard = page.getByRole('link', { name: 'Price lists broadcasted (' })
this.Exceptionalcosts = page.getByRole('link', { name: 'Exceptional costs' })

}

async reportsicons() 
  {
    await this.reportspageicon.click()
  }

async navigatetodashboard() 
  {
    await this.dashboard.click()
  }

  async navigatetoreportlist() 
  {
    await this.reportlist.click()
  }

  async navigatetopricelistdashboard() 
  {
    await this.pricelistdashboard.click()
  }

  async navigatetoExceptionalcosts() 
  {
    await this.Exceptionalcosts.click()
  }

}

module.exports = {Reports}


