class Adminpanel

{

constructor(page)
{
this.page = page
this.adminpanelpageicon = page.locator("(//div[@class = 'anchor'])[11]")
this.providers = page.getByRole('link', { name: 'Providers' })
this.products = page.getByRole('link', { name: 'Products' })
this.auditlog = page.getByRole('link', { name: 'Audit logs' })
this.Notificationpreferences = page.getByRole('link', { name: 'Notification preferences' })

}

async adminpanelicon() 
  {
    await this.adminpanelpageicon.click()
  }

async navigatetoproviders() 
  {
    await this.providers.click()
  }

  async navigatetoproducts() 
  {
    await this.products.click()
  }

  async navigatetoauditlog() 
  {
    await this.auditlog.click()
  }

  async navigatetoNotificationpreferences() 
  {
    await this.Notificationpreferences.click()
  }

}

module.exports = {Adminpanel}


