var moment = require('moment');
require('twix');

function datesToRangeText(start, end) {
  var txt = moment.twix(start, end).format({
    allDay: false,
    implicitYear: false,
    monthFormat: 'MMMM',
    yearFormat: 'YYYY',
    hideTime: true,
    hideYear: false
  });

  if (txt.includes('Invalid')) {
    return false;
  }

  return txt;
}

module.exports = datesToRangeText;
