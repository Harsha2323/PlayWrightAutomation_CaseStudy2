class login{


    constructor(page)
    {
        this.page = page
        this.loginicon = page.locator("(//span[@class='MuiIconButton-label'])[2]")
        this.username =  page.locator("input[name='email']")
        this.userpass = page.locator("input[name='password']")
        this.logoutbutton = page.locator("(//li[@role='menuitem'])[2]")
        this.loginbtn = page.locator("(//span[@class='MuiButton-label'])[1]")
    }
    
    async pageurl()
    {
        await this.page.goto('https://demo.haroldwaste.com/authentication')
    }
    

    
    async logincred(username , password)
    {
        await this.username.fill(username)
        await this.userpass.fill(password)
        await this.loginbtn.click()
    }

    async logout()
    {
        await this.loginicon.click()
        await this.logoutbutton.click()
    }

}

module.exports = {login}