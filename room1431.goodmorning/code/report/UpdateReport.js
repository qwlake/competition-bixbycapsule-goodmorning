var console = require("console")
var dates = require("dates")
var fail = require("fail")
var utils = require('../Utils.js')

module.exports.function = function updateProcessShow (timersReport, command) {
  console.log(timersReport, command);
  let timer = timersReport[0].timer;
  let zonedDT = utils.toZonedDateTime(timer.timerTime);
  if (command == '더잘래') {
    if (timer.sleepCycle >= 7) {
      throw fail.checkedError('더 자면 몸에 좋지 않아요.','MaximumSleepCycle',[])
    }
    timersReport[0].timer.timerTime = utils.toVivDateTime(zonedDT.plusMinutes(90));
  } else if (command == '덜잘래') {
    if (timer.sleepCycle <= 0) {
      throw fail.checkedError('잘 수 있는 시간이 없어요.','MinimumSleepCycle',[])
    }
    timersReport[0].timer.timerTime = utils.toVivDateTime(zonedDT.minusMinutes(90));
  }
  return timersReport;
}
