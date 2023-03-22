import LoginPage from '../pages/DriverAppointment.pages';

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open();
    await browser.maximizeWindow();

    await LoginPage.pageLang();
    await LoginPage.pageLogin();
    await LoginPage.pageNewAppointment();
    await LoginPage.pageSelectService();
    await LoginPage.waitForSuitDate();
    // await LoginPage.pageCustomerDetails();
    // await LoginPage.pageSelectLocation();

    await browser.debug();
  });
});
