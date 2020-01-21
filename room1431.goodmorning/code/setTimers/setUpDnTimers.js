var console = require("console")
var dates = require("dates")
var fail = require("fail")
var utils = require('../Utils.js')

// 잘 시간과 일어날 시간 계산
module.exports.function = function setUpDnTimers (wakeupTime) {
  let zonedDT = utils.toZonedDateTime(wakeupTime);
  let stringTime = zonedDT.toString();
  let timerList = [];
  timerList.push({
      timerTime:utils.toVivDateTime(zonedDT),
      stringTime:stringTime,
      reason:"일어날 시간",
      hasReason:true,});
  zonedDT = zonedDT.minusMinutes(104);
  let vivDateTime;
  while (dates.ZonedDateTime.now().isBefore(zonedDT)) {
    vivDateTime = utils.toVivDateTime(zonedDT);
    stringTime = zonedDT.toString();
    zonedDT = zonedDT.minusMinutes(90);
  }
  if (vivDateTime) {
    timerList.push({
      timerTime:vivDateTime,
      stringTime:stringTime,
      reason:"잘 시간",
      hasReason:true,});
  }
  console.log(timerList);
  return {timer:timerList};
}
