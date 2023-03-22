import moment from 'moment/moment';

export default class ScheduleTable {
  table = null;

  constructor(tableLocator) {
    this.table = $(`${tableLocator}`);
  }

  async getAllRows() {
    return await this.table.$$('tr');
  }

  async getRowsCount() {
    return (await this.table.$$('tr')).length;
  }

  async getCellsCount(row) {
    // return (await row.$$(`tr:nth-child(${row}) td`)).length;
    return (await row.$$(`td`)).length;
  }

  async getElementText(row, column) {
    const element = await this.table.$(`tr:nth-child(${row}) td:nth-child(${column})`);
    return await element.getText();
  }

  async getDates() {
    const rows = await this.getAllRows();

    const dates = await rows.map(async (row) => {
      const cellsCount = await this.getCellsCount(row);
      const dateCell = await row.$(`td:nth-child(${cellsCount - 1})`);
      // console.log('❗dateCell', [await dateCell.getText()]);
      const dateString = String(await dateCell.getText()).trim();
      // dates.push(moment(dateString, 'M/D/YYYY'));

      return moment(dateString, 'M/D/YYYY');
    });

    // console.log('❗dates', [await Promise.all(dates)]);

    return await Promise.all(dates);
  }
}
