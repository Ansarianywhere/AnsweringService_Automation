const { expect } = require('@playwright/test');

export default class PlansPage {

    constructor(page){

        this.page = page;
        this.ac_plans = page.locator("#planTwoLink");

    }
  
   async AcUS_chosePlan(){

   await this.ac_plans.click();
      
    }

}
