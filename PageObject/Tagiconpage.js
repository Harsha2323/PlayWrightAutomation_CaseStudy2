class Tagiconpage
{

constructor(page)
{
this.page = page
this.tagicon = page.locator("(//div[@class = 'anchor'])[3]")
this.sales = page.getByRole('link', { name: 'Sales' })



}

async Tagicon() 
  {
    await this.tagicon.click()
  }

async navigatetoSales() 
  {
    await this.sales.click()
  }

 


}

module.exports = {Tagiconpage}