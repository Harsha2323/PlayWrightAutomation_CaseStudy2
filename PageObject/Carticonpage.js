class Carticonpage
{


  // await page.getByRole('link', { name: 'Contracts & Services' }).click();
  // await page.locator('div:nth-child(3) > .sc-ftvSup').click();
  // await page.getByRole('link', { name: 'Offers' }).click();
  // await page.getByRole('link', { name: 'Sourcing hub' }).click();
  // await page.getByRole('link', { name: 'Purchase goals' }).click();
  // await page.getByRole('link', { name: 'Purchases (Recycling)' }).click();
  // await page.getByRole('link', { name: 'Purchases (Trading)' }).click();

constructor(page)
{
this.page = page
this.carticon = page.locator("(//div[@class = 'anchor'])[2]")
this.purchase1 = page.getByRole('link', { name: 'Purchases (Trading)' })
this.purchase2 = page.getByRole('link', { name: 'Purchases (Recycling)' });
this.offer = page.getByRole('link', { name: 'Offers' });
this.sourchub = page.getByRole('link', { name: 'Sourcing hub' })
this.purchasegole = page.getByRole('link', { name: 'Purchase goals' })
this.ContractsServices = page.getByRole('link', { name: 'Contracts & Services' })

}

async Carticon() 
  {
    await this.carticon.click()
  }
async navigatetoPurchase2() 
  {
    await this.purchase2.click()
  }

async navigatetoPurchase1()
    {
        await this.purchase1.click()
    }

async navigatetoOffers()
    {
        await this.offer.click()
    }
async navigateSourchub()
    {
      await this.sourchub.click()
    }

async navigatepurchaseGole()
    {
      await this.purchasegole.click()
    }

  async navigateContractsServices()
    {
      await this.ContractsServices.click()
    }

}

module.exports = {Carticonpage}