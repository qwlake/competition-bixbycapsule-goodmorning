var dates = require('dates')
var console = require('console')

exports.convertToDateTime = convertToDateTime;

function convertToDateTime(expr) {
    return dates.ZonedDateTime.of(
      expr.datetime);
  
    // if (!expr) {
    //   return null;
    // }
    // if (expr.date) {
    //   return dates.ZonedDateTime.fromDate(expr.date);
    // }
    // return null;
}