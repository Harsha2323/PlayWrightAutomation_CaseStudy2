const {test, expect}=require('@playwright/test')
const{login} = require('../PageObject/login')
const{Carticonpage} = require('../PageObject/Carticonpage')
const{Inventory} = require('../PageObject/Inventory')
const {logisiticsiconpage}=require('../PageObject/logisiticsiconpage')
const {logisticseRateiconpage} = require('../PageObject/logisticseRateiconpage')
const {Notesandtask} = require('../PageObject/Notesandtask')
const {Riskiconpage} = require('../PageObject/Riskiconpage')
const {Tagiconpage} = require('../PageObject/Tagiconpage')
const {Invoiceandpayable} = require('../PageObject/Invoiceandpayable')

class PoManager
{

    constructor(page)
    {
    
         this.page = page
         this.Login = new login(this.page)
         this.CarticonPage = new Carticonpage(this.page)
         this.inventoryPage = new Inventory(this.page)
         this.logisiticsiconPage = new logisiticsiconpage(this.page)
         this.logisticseRateiconPage = new logisticseRateiconpage(this.page)
         this.NotesandtaskPage = new Notesandtask(this.page)
         this.RiskiconPage = new Riskiconpage(this.page)
         this.tagiconpage = new Tagiconpage(this.page)
         this.Invoiceandpayablepage = new Invoiceandpayable(this.page)
    
    
    
    }
    
    getloginpage()
    {
        return this.Login 
    }

    getcartpage()
    {
        return this.CarticonPage 
    }


    getinventorypage()
    {
        return this.inventoryPage 
    }


    getlogisiticspage()
    {
        return this.logisiticsiconPage 
    }


    getlogisticseRatepage()
    {
        return this.logisticseRateiconPage 
    }

    getNotesandtaskpage()
    {
        return this.NotesandtaskPage 
    }

    getRiskipage()
    {
        return this.RiskiconPage 
    }


    gettagpage()
    {
        return this.tagiconpage 
    }

    getInvoiceandpayablepage()
    {
        return this.Invoiceandpayablepage 
    }

}
module.exports = {PoManager}
