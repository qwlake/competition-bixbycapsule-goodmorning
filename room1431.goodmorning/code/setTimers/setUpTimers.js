var console = require("console")
var dates = require("dates")
var fail = require("fail")
var utils = require('../Utils.js')

// 지금 자서 일어날 시간 계산
module.exports.function = function setUpTimers (sleepPeriod) {
  console.log(sleepPeriod);
  let zonedDT = utils.toZonedDateTime(sleepPeriod);
  let timerList = [];
  zonedDT = zonedDT.plusMinutes(14);
  while (dates.ZonedDateTime.now().isBefore(zonedDT)) { //
    zonedDT = zonedDT.plusMinutes(90);
  }
  timerList.push({
    timerTime:utils.toVivDateTime(zonedDT),
    reason:"일어날 시간",
    hasReason:true,});
  console.log(timerList);
  return timerList;
}
