var console = require("console")
var dates = require("dates")
var fail = require("fail")
var utils = require('../Utils.js')

// 잘 시간과 일어날 시간 계산
module.exports.function = function setUpDnTimers (wakeupTime) {
  let zonedDT = utils.toZonedDateTime(wakeupTime);
  let timerList = [];
  timerList.push({timer:{
      timerTime:utils.toVivDateTime(zonedDT),
      sleepCycle:0,
      reason:"일어날 시간",
      hasReason:true,},});
  zonedDT = zonedDT.minusMinutes(104);
  let vivDateTime;
  let sleepCycle = -1;
  while (dates.ZonedDateTime.now().isBefore(zonedDT)) {
    vivDateTime = utils.toVivDateTime(zonedDT);
    zonedDT = zonedDT.minusMinutes(90);
    sleepCycle += 1;
  }
  timerList[0].timer.sleepCycle = sleepCycle;
  if (vivDateTime) {
    timerList.push({timer:{
      timerTime:vivDateTime,
      sleepCycle:0,
      reason:"잘 시간",
      hasReason:true,},});
  }
  console.log(timerList);
  return timerList;
}
