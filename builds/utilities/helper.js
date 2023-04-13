const { expect } = require('@playwright/test');

class Helper {

 async launchBrowser(url){
    await page.goto(url);
   }

   async clickOn(locator) {
    await page.waitForSelector(locator, { state: 'visible' }, { state: 'attached' }, { timeout: 10000 })
    await page.click(locator, { timeout: 20000 });
  }
  
  

}
export default new Helper();
