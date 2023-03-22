import axios from 'axios';
import chalk, { bgYellow } from 'chalk';
import moment from 'moment';
import sound from 'sound-play';
import AvailableLocationsAPI from './AvailableLocationsAPI';
import ScheduleTable from './ScheduleTable';
import SelectLocationPage from './SelectLocation.page';
import data from './data';
import { getButton } from './helpers';

class DriverAppointmentPages {
  get landBtn() {
    // const link = await $('=WebdriverIO')
    return $('=English');
  }

  async pageLang() {
    await browser.pause(1000);
    const langBtn = await $('button=English');
    await langBtn.click();
  }

  async pageLogin() {
    let btn;

    let label = 'First Name';
    let element = await $(`//div[label[contains(., '${label}')]]/input`);
    await element.setValue(data.firstName);

    label = 'Last Name';
    element = await $(`//div[label[contains(., '${label}')]]/input`);
    await element.setValue(data.lastName);

    label = 'Date of Birth';
    element = await $(`//div[label[contains(., '${label}')]]/input`);
    await element.setValue(data.birthDate);

    label = 'SSN';
    element = await $(`//div[label[contains(., '${label}')]]/input`);
    await element.setValue(data.ssn);

    await browser.pause(1000);

    label = 'Log On';
    btn = await $(`button*=${label}`);
    await btn.click();
  }

  async pageNewAppointment() {
    await browser.pause(1000);

    let label = 'New Appointment';
    let btn = await $(`button*=${label}`);
    await btn.click();
  }

  async pageSelectService() {
    let btn;
    let label;

    label = 'Appointment Exists';
    const element = await $(`//*[contains(text(), "${label}")]`);
    if ((await element.isExisting()) === true) {
      btn = await getButton('OK');
      await btn.click();
    }

    label = 'first time Texas DL/Permit';
    console.log('❗Looking for', label);
    btn = await getButton(label, { contains: true });
    await btn.click();

    // await browser.pause(1000);
    // await browser.debug();
    // console.log('❗await langBtn.getText()', [await element.getValue()]);
  }
  async pageCustomerDetails() {
    let item, btn, label, element;

    label = 'Cell Phone';
    element = await $(`//div[label[contains(., '${label}')]]/input`);
    await element.setValue(data.cellPhone);

    label = 'Email';
    element = await $(`//div[label[contains(., '${label}')]]/input`);
    await element.setValue(data.email);

    label = 'Verify Email';
    element = await $(`//div[label[contains(., '${label}')]]/input`);
    await element.setValue(data.email);

    label = 'Zip Code';
    element = await $(`//div[label[contains(., '${label}')]]/input`);
    await element.setValue(data.zip);

    label = 'id="city"';
    // element = await $(`input[${label}]`);
    // await element.setValue(data.city);
    // item = await $(`//div[contains(@class, 'v-list-item__content')]/div[contains(., '${data.city}')]`);
    // await item.click();

    label = 'Next';
    console.log('❗Looking for', label);
    btn = await $(`//div[button[contains(., '${label}')]]/button`);
    await btn.click();
  }

  async waitForSuitDate() {
    const availableLocations = new AvailableLocationsAPI(data);
    let res, error;

    [res, error] = await availableLocations.getAvailableLocation();
    availableLocations.setLog(res.map((item) => [item.NextAvailableDate, item.Name, item.MapUrl].join('\n')));

    if (!error) {
      const minDate = await availableLocations.checkAPIDates(res);
      const maxDate = moment().add(1, 'month');

      if (minDate.date.isBefore(maxDate)) {
        sound.play('./sound.mp3');
        console.log(chalk.hex('#ff9632')('❗\n\n Main date ', minDate.format('DD-MM-YYYY'), ' is available !!!\n\n'));

        // await page.grabDate();
      }
      console.log('❗minDate', minDate);
    }

    console.log(
      '❗res',
      // res,
      res.map((item) => item.NextAvailableDate),
    );
  }

  async pageSelectLocation() {
    let item, btn, label, locator;

    await browser.pause(1000);

    const page = new SelectLocationPage();
    const date = await page.getMainDate();
    const otherDates = await page.getOtherDates();

    console.log('❗date', [date]);
    console.log('❗otherDates', [otherDates]);

    const [minDate, pos] = page.getMinDate([date, ...otherDates]);
    console.log('❗minDate', minDate);

    const maxDate = moment().add(1, 'month');

    console.log('❗minDate.isBefore(date)', minDate, maxDate);
    if (pos === 0 && minDate.isBefore(maxDate)) {
      sound.play('./sound.mp3');
      console.log(chalk.hex('#ff9632')('❗\n\n Main date ', minDate.format('DD-MM-YYYY'), ' is available !!!\n\n'));

      await page.grabDate();
    }

    await browser.debug();

    // item = await item.$(`//div[@class='locations']//td[contains(preceding::th, 'Selected Location')][last()]/text()`);
    // item = await item.$(`//td[last()]/text()`);

    // console.log('❗item', [await item]);
    // console.log('❗item1', [await item.getText()]);

    await browser.debug();

    label = 'Next';
    console.log('❗Looking for', label);
    btn = await $(`//div[button[contains(., '${label}')]]/button`);
    await btn.click();
    await browser.debug();
  }

  open() {
    return browser.url(`https://public.txdpsscheduler.com`);
  }
}

module.exports = new DriverAppointmentPages();
