var console = require("console")
var dates = require("dates")
var utils = require('Utils.js')

// 일어날 시간을 위한 잘 시간 계산
module.exports.function = function calculateSleepTime (wakeupTime) {
  let time = utils.convertToDateTime(wakeupTime);
  let sleepTimes = [];
  while (dates.ZonedDateTime.now().isBefore(time)) {
    sleepTimes.push(time.minusMinutes(104));
    time = time.minusMinutes(90);
  }
  return sleepTimes;
}
