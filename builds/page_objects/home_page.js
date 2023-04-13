import properties_files from "../utilities/properties_files";
import helper from "../utilities/helper";
const { expect } = require('@playwright/test');

export default class HomePage {

    constructor(page){

        this.page = page;
        this.ac_plans = page.locator("(//a[text()='Plans & Pricing'])[2]");

    }
  
   async AcUS_LaunchBrowser(){

   // await helper.launchBrowser();
   await  this.page.goto(properties_files.browserUrl.AnswerConnectUs);
   await this.ac_plans.click();
      
    }

}

