var console = require("console")
var dates = require("dates")
var fail = require("fail")
var utils = require('../Utils.js')

// 잘 시간과 일어날 시간 계산
module.exports.function = function setUpDnTimers (wakeupTime) {
  let zonedDT = utils.toZonedDateTime(wakeupTime);
  let date = new Date(zonedDT.toString());
  let millisec = date.getDate();
  let timerList = [];
  let cycle = 1;
  let resultMessage = wakeupTime.time + "으로 알람을 맞출게요.";
  let timer = {
      timerTime:utils.toVivDateTime(zonedDT),
      millisec:millisec,
      reason:"일어날 시간",
      hasReason:true,
      resultMessage:"",};
  zonedDT = zonedDT.minusMinutes(104);
  let flag = zonedDT.clone();
  let vivDateTime = utils.toVivDateTime(zonedDT);
  while (dates.ZonedDateTime.now().isBefore(zonedDT)) {
    vivDateTime = utils.toVivDateTime(zonedDT);
    date = new Date(zonedDT.toString());
    zonedDT = zonedDT.minusMinutes(90);
    cycle = cycle + 1;
  }
  if (cycle >= 6) {
    resultMessage = "9시간 이상의 수면은 좋지 않아요.";
  } else if (cycle < 3) {
    resultMessage = "4시간 미만의 수면은 좋지 않아요.";
  }
  timer.resultMessage = resultMessage;
  timerList.push(timer);
  if (dates.ZonedDateTime.now().isBefore(flag)) {
    timerList.push({
      timerTime:vivDateTime,
      millisec:date.getDate(),
      reason:"잘 시간",
      hasReason:true,
      resultMessage:resultMessage,});
  }
  console.log(timerList);
  return {timer:timerList};
}
