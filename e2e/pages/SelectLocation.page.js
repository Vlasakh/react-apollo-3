import moment from 'moment/moment';
import ScheduleTable from './ScheduleTable';

export default class SelectLocationPage {
  async getMainDate() {
    let item, label, locator;

    label = 'Selected Location';
    locator = `//div[contains(@class, 'locations')]/div[contains(., '${label}')]/..//td[last()]`;
    console.log('❗locator', locator);
    item = await $(locator);
    const dateString = String(await item.getText()).trim();
    // const date = moment(dateString, 'M/D/YYYY');
    const date = moment('3/15/2023', 'M/D/YYYY');

    return date;
  }

  async getOtherDates() {
    let label, locator;

    label = 'Other Suggested Locations';
    locator = `//div[contains(@class, 'locations')]/div[contains(., '${label}')]/..//table`;
    console.log('❗locator', locator);
    const table = new ScheduleTable(locator);

    console.log('❗table.getRowsCount', [await table.getRowsCount()]);
    const otherDates = await table.getDates();

    return otherDates;
  }

  getMinDate(dates) {
    return dates.reduce(
      ([min, pos], date, idx) => {
        return date.isBefore(min) ? [date, idx] : [min, pos];
      },
      [dates[0], 0],
    );
  }

  async grabDate() {
    let label, locator, table, cards;

    label = 'Select from the available dates';
    locator = `//div[contains(text(),\'${label}\')]/following::table[1]`;
    console.log(`❗${label}`, locator);
    table = await $(locator);
    cards = await table.$$('.card');
    await cards[0].click();

    label = 'Select from the available times';
    locator = `//div[contains(text(),\'${label}\')]/following::table[1]`;
    console.log(`❗${label}`, locator);
    table = await $(locator);
    cards = await table.$$('tr td:nth-child(2) div div');
    await cards[0].click();

    await browser.pause(300);

    console.log('❗daddd', [await cards[0].getHTML()]);
  }
}
