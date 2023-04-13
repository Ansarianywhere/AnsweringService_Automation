const {test, expect} = require('@playwright/test')
import HomePage from '../builds/page_objects/home_page';
import RegistrationPage from '../builds/page_objects/registration_page';
import PlansPage from '../builds/page_objects/plans_page';
import SignupPage from '../builds/page_objects/signup_page';

test('AC_US_Registration', async ({ page }) =>{

  const homePage = new HomePage(page);
  await homePage.AcUS_LaunchBrowser();

  const registration = new RegistrationPage(page);
  await page.waitForTimeout(3000);
  await registration.AcUS_Registration();

  const plans = new PlansPage(page);
  await plans.AcUS_chosePlan();

  const signup = new SignupPage(page);
  await page.waitForTimeout(3000);
  await signup.AcUS_verifyRegistrationData();

});



