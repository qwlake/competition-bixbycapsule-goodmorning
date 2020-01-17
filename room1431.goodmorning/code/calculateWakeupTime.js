var console = require("console")
var dates = require("dates")
var utils = require('Utils.js')

// 지금 자서 일어날 시간 계산
module.exports.function = function calculateWakeupTime (sleepTime) {
    let zonedDT = utils.toZonedDateTime(sleepTime);
    let wakeupTimes = [];
    zonedDT = zonedDT.plusMinutes(14);
    for (let i = 0; i < 6; i++) {
      zonedDT = zonedDT.plusMinutes(90);
      let vivDateTime = utils.toVivDateTime(zonedDT);
      wakeupTimes.push({
        resultWakeup: {
          datetime:vivDateTime,
        },
      });
    }
    console.log(wakeupTimes);
    return wakeupTimes;
}
