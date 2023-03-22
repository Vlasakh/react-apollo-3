import axios from 'axios';
import moment from 'moment/moment';
import ScheduleTable from './ScheduleTable';
import data from './data';

export default class AvailableLocationsAPI {
  data = null;
  log = null;

  constructor(data) {
    this.data = data;
  }

  async setLog(info) {
    let label = 'qa-log';

    if (!this.log) {
      const body = await $('body');
      const newLog = `<div style="position: absolute; left: 0; top: 0; z-index: 99999"><textarea id="${label}" style="width: 500px; height: 400px"></textarea></div>`;

      await body.setHTML(newLog);
      this.log = await $(`#${label}`);
      console.log('❗this.log', [await this.log.getHTML()]);
    }

    this.log.setText(info);
  }

  async getAvailableLocation() {
    const api = 'https://publicapi.txdpsscheduler.com/api/AvailableLocation';
    const request = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Origin: 'https://public.txdpsscheduler.com',
        Referer: 'https://public.txdpsscheduler.com/',
      },
      // headersTimeout: 20000,
      // data: '{"FirstName":"Volodymyr","LastName":"Sakharov","DateOfBirth":"07/05/1984","LastFourDigitsSsn":"9046"}',
      data: { TypeId: 71, ZipCode: data.zip, CityName: '', PreferredDay: 0 },
    };
    let res,
      error = 0;

    try {
      const response = await axios(api, request);
      res = response.data;
    } catch (e) {
      error = e.message;
    }

    return [res, error];
  }

  getMinDate(dates) {
    const getDate = ({ NextAvailableDate }) => moment(NextAvailableDate, 'M/D/YYYY');

    return dates.reduce(
      (res, location, idx) => {
        const date = getDate(location);
        return date.isBefore(res.date) ? { date, ...location, idx } : res;
      },
      { date: getDate(dates[0]), ...dates[0], idx: 0 },
    );
  }

  async checkAPIDates(response) {
    const minDate = this.getMinDate(response);

    return minDate;
  }
}
