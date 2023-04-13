import properties_files from "../utilities/properties_files";
const { expect } = require('@playwright/test');

export default class RegistrationPage {

    constructor(page){

        this.page = page;
        this.registrationName = page.locator('#name');
        this.email = page.locator('#email');
        this.phone = page.locator('#phone');
        this.companyName =  ('#company');
        this.showPlansButton = page.locator('#register')


    }
  
   async AcUS_Registration(){

    await this.registrationName.type(properties_files.registration_TestData.RegistrationName);
    await this.email.type(properties_files.registration_TestData.RegistrationEmail);
    await this.phone.type(properties_files.registration_TestData.RegistrationPhone);
    await this.showPlansButton.click();
      
    }

}