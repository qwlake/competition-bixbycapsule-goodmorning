module.exports.function = function convertToDateTime(expr) {
    const dates = require('dates');
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