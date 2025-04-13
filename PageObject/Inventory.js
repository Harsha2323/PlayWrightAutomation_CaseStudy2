class Invebtory

{

constructor(page)
{
this.page = page
this.invebtoryicon = page.locator("(//div[@class = 'anchor'])[4]")
this.stock = page.getByRole('link', { name: 'Stocks' })
this.inbondload = page.getByRole('link', { name: 'Inbound loads' })
this.outbondload = page.getByRole('link', { name: 'Outbound loads' })



}

async invebtoryiconpage() 
  {
    await this.invebtoryicon.click()
  }

async navigatetoStock() 
  {
    await this.stock.click()
  }

  async navigatetoinbondload() 
  {
    await this.inbondload.click()
  }
  async navigatetooutbondload() 
  {
    await this.outbondload.click()
  }

 


}

module.exports = {Invebtory}