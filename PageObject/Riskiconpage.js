class Riskiconpage

{

constructor(page)
{
this.page = page
this.Riskicon = page.locator("(//div[@class = 'anchor'])[5]")
this.Hedgingcontracts= page.getByRole('link', { name: 'Hedging contracts' })
this.position = page.getByRole('link', { name: 'Position report' })

}

async riskicon() 
  {
    await this.Riskicon.click()
  }

async navigatetoHedgingcontracts() 
  {
    await this.Hedgingcontracts.click()
  }

  async navigatetoposition() 
  {
    await this.position.click()
  }

}

module.exports = {Riskiconpage}