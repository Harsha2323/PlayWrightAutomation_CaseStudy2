class Invoiceandpayable

{

constructor(page)
{
this.page = page
this.invoceandpayableicon = page.locator("(//div[@class = 'anchor'])[8]")
this.invoice = page.getByRole('link', { name: 'Invoices' })
this.payable = page.getByRole('link', { name: 'Payables', exact: true })
this.vendorpayable = page.getByRole('link', { name: 'Vendor payables' })
}

async invoiceandpayableiconpage() 
  {
    await this.invoceandpayableicon.click()
  }

async navigatetoinvoice() 
  {
    await this.invoice.click()
  }

async navigatetoinpayable() 
  {
    await this.payable.click()
  }
async navigatetovendorpayable() 
  {
    await this.vendorpayable.click()
  }


}

module.exports = {Invoiceandpayable}