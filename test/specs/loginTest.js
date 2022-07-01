const landingPage = require('../../pageObjects/ladning.page')
const loginPage = require('../../pageObjects/login.page')
const homePage = require('../../pageObjects/home.page')
describe('Login Smoke Test',  ()=>{
    beforeEach(async ()=>{
       
        await landingPage.skipBtn.click()
        await landingPage.anmeldenLabel.click()
    })

    it('Verfiy landing page is loading sucessfully with all login options ', async ()=>{
        
        //assert login page header text 
        await expect(landingPage.loginHeaderText).toBeDisplayed()
        //assert email login button 
        await expect(landingPage.emailLogin).toBeDisplayed()
        //assert goolge login button 
        await expect(landingPage.googleLogin).toBeDisplayed()
        //assert facebook login button
        await expect(landingPage.facebookLogin).toBeDisplayed()
        
  

    })

    it('Verfiy User can login to the application using email with correct user name and password ',async ()=>{
           await landingPage.emailLogin.click()
           await loginPage.emailTxtbox.setValue('lasantha@example.com') 
           await loginPage.passwortTxtbox.setValue('TestApp0')
           await loginPage.anmeldenBtn.click()  
           
           //assert wallet button is displayed 
           await expect(homePage.walletBtn).toBeDisplayed()

    })

    afterEach(()=>{
        driver.reset()
    })
})