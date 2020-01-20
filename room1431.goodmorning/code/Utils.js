var dates = require('dates')
var console = require('console')

exports.toZonedDateTime = toZonedDateTime;
exports.toVivDateTime = toVivDateTime;

function toZonedDateTime(expr) {
    return dates.ZonedDateTime.fromDateTime(
      expr.dateTime);
  
    // if (!expr) {
    //   return null;
    // }
    // if (expr.date) {
    //   return dates.ZonedDateTime.fromDate(expr.date);
    // }
    // return null;
}

function toVivDateTime(zonedDT) {
  return {
    date: {
      year: zonedDT.getYear(),
      month: zonedDT.getMonth(),
      day: zonedDT.getDay()
    },
    time: {
      hour: zonedDT.getHour(),
      minute: zonedDT.getMinute(),
      second: zonedDT.getSecond(),
      timezone: zonedDT.getTimeZoneId()
    }
  };
}
