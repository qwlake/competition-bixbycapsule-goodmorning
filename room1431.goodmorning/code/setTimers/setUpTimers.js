var console = require("console")
var dates = require("dates")
var fail = require("fail")
var utils = require('../Utils.js')

// 지금 자서 일어날 시간 계산
module.exports.function = function setUpTimers (sleepPeriodHours, sleepPeriodMinutes) {
  let zonedDT = dates.ZonedDateTime.now();
  let timerList = [];
  let until = zonedDT.plusHours(sleepPeriodHours);
  until.plusMinutes(sleepPeriodMinutes);
  zonedDT = zonedDT.plusMinutes(14);
  let sleepCycle = 0;
  while (zonedDT.isBefore(until)) { //
    zonedDT = zonedDT.plusMinutes(90);
    sleepCycle += 1;
  }
  timerList.push({timer:{
    timerTime:utils.toVivDateTime(zonedDT),
    sleepCycle:sleepCycle,
    reason:"일어날 시간",
    hasReason:true,},});
  console.log(timerList);
  return timerList;
}
