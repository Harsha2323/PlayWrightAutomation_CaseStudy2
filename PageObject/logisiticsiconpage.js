class logisiticsiconpage

{

constructor(page)
{
this.page = page
this.logisiticsicon = page.locator("(//div[@class = 'anchor'])[6]")
this.planingbooking= page.getByRole('link', { name: 'Planning/Booking' })
this.loadesholdes = page.getByRole('link', { name: 'Loads/Holds' })
this.shipments = page.getByRole('link', { name: 'Shipments' })
this.bookings = page.getByRole('link', { name: 'Bookings' })
this.shipmenttracking = page.getByRole('link', { name: 'Shipment tracking' })

}

async logisiticsiconpagee() 
  {
    await this.logisiticsicon.click()
  }

async navigatetoplaningbooking() 
  {
    await this.planingbooking.click()
  }
  
async navigatetoloadesholdes() 
  {
    await this.loadesholdes.click()
  }

  async navigatetoshipments() 
  {
    await this.shipments.click()
  }

  async navigatetobookings() 
  {
    await this.bookings.click()
  }

  async navigatetoshipmenttracking() 
  {
    await this.shipmenttracking.click()
  }

}

module.exports = {logisiticsiconpage}