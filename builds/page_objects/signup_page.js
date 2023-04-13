import { assert } from "chai";
import properties_files from "../utilities/properties_files";
const { expect } = require('@playwright/test');

export default class SignupPage {

    constructor(page){

        this.page = page;
        this.contactName = page.locator('#contactName');
        this.email = page.locator('#email');
        this.phone = page.locator('#phone');
   }
  
   async AcUS_verifyRegistrationData(){

    //const name =  document.querySelector('#contactName').value
    const name = await this.contactName.inputValue();
    const email = await this.email.inputValue();
    const phone = await this.phone.inputValue();
    console.log('the given data is  ' + name + email + phone );

    assert.equal(name.trim() , properties_files.registration_TestData.RegistrationName);
    assert.equal(email , properties_files.registration_TestData.RegistrationEmail);
    assert.equal(phone , properties_files.registration_TestData.RegistrationPhone);
   // assert.equal(phone , '753812986');
 
    
      
    }

}
