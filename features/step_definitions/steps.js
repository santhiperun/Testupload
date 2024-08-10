const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../pageobjects/POManager');
const {playwright} = require('@playwright/test');
const {chromium} = require('playwright');

Given('I open the registration page', {timeout :100 *1000}, async function () {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    this.poManager = new POManager(page);
    const launchurl = this.poManager.getLaunchPage();
    //await launchurl.goTo("https://demo.automationtesting.in/Register.html");
    await launchurl.goTo("https://demo.automationtesting.in/Index.html");
    

});

When('I fill in the registration form with data from {string}', async function (excelName) {
    const exceldata = this.poManager.getExcelFile();
    const row=exceldata.readExcelsheet(excelName,2);
    console.log(row);
   
});




When('I submit the form', function () {

});



Then('I should see the registration confirmation', function () {


});
