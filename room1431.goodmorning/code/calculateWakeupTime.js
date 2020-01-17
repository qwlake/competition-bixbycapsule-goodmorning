var console = require("console")
var dates = require("dates")
var utils = require('Utils.js')

// 지금 자서 일어날 시간 계산
module.exports.function = function calculateWakeupTime (sleepTime) {
    let zonedDT = utils.convertToDateTime(sleepTime);
    console.log(zonedDT);
    let wakeupTimes = [];
    zonedDT = zonedDT.plusMinutes(14);
    for (let i = 0; i < 6; i++) {
      zonedDT = zonedDT.plusMinutes(90);
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
      wakeupTimes.push({
        resultWakeup: {
          time:dt,
          },
      });
      console.log(dt);
    }
    console.log(wakeupTimes);
    return wakeupTimes;
}
