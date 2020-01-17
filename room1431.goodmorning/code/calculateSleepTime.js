var console = require("console")
var dates = require("dates")
var utils = require('Utils.js')

// 일어날 시간을 위한 잘 시간 계산
module.exports.function = function calculateSleepTime (wakeupTime) {
  let zonedDT = utils.toZonedDateTime(wakeupTime);
  let sleepTimes = [];
  zonedDT = zonedDT.minusMinutes(104);
  while (dates.ZonedDateTime.now().isBefore(zonedDT)) {
    let vivDateTime = utils.toVivDateTime(zonedDT);
    sleepTimes.push({
      resultSleep: {
        datetime:vivDateTime,
      },
    });
    zonedDT = zonedDT.minusMinutes(90);
  }
  sleepTimes = sleepTimes.reverse();
  console.log(sleepTimes);
  return sleepTimes;
}
