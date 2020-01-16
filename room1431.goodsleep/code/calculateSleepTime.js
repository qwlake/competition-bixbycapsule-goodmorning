// 일어날 시간을 위한 잘 시간 계산
module.exports.function = function calculateSleepTime (wakeupTime) {
  const console = require('console');
  const dates = require('dates');
  const convertToDateTime = require("./lib/Functions.js");
  let time = convertToDateTime(wakeupTime);
  let sleepTimes = [];
  while (dates.ZonedDateTime.now().isBefore(time)) {
    sleepTimes.push(time.minusMinutes(104));
    time = time.minusMinutes(90);
  }
  return sleepTimes;
}

function convertToDateTime(expr) {
    const dates = require('dates');
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