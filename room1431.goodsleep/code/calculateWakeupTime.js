var console = require("console")
var dates = require("dates")
var utils = require('Utils.js')

// 지금 자서 일어날 시간 계산
module.exports.function = function calculateWakeupTime (sleepTime) {
    let time = utils.convertToDateTime(sleepTime);
    let wakeupTimes = [];
    time = time.plusMinutes(14);
    for (let i = 0; i < 6; i++) {
      time = time.plusMinutes(90);
      wakeupTimes.push({resultWakeup:time.datetime});
    }
    console.log(wakeupTimes);
    return wakeupTimes;
}
