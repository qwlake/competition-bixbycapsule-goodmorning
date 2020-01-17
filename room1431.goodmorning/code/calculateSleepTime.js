var console = require("console")
var dates = require("dates")
var utils = require('Utils.js')

// 일어날 시간을 위한 잘 시간 계산
module.exports.function = function calculateSleepTime (wakeupTime) {
  let zonedDT = utils.convertToDateTime(wakeupTime);
  let sleepTimes = [];
  while (dates.ZonedDateTime.now().isBefore(zonedDT.minusMinutes(14))) {
    sleepTimes.push({resultSleep:zonedDT.minusMinutes(104)});
    zonedDT = zonedDT.minusMinutes(90);
    let dt = {
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
    }
    sleepTimes.push({
      resultSleep: {
        datetime:dt,
      },
    });
  }
  sleepTimes = sleepTimes.reverse();
  console.log(sleepTimes);
  return sleepTimes;
}
