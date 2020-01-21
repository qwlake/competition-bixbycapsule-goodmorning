var console = require("console")
var dates = require("dates")
var fail = require("fail")
var utils = require('../Utils.js')

// 잘 시간과 일어날 시간 계산
module.exports.function = function setUpDnTimers (wakeupTime) {
  let zonedDT = utils.toZonedDateTime(wakeupTime);
  let date = new Date(zonedDT.toString());
  let millisec = date.getTime();
  let timerList = [];
  let cycle = 1;
  let resultMessage;
  let h = wakeupTime.dateTime.time.hour;
  if (h > 12) {
    h = h - 12;
    resultMessage = "오후 " + h + "시 " + wakeupTime.dateTime.time.minute + "분으로 알람을 맞출게요. ";
  } else {
    resultMessage = "오전 " + h + "시 " + wakeupTime.dateTime.time.minute + "분으로 알람을 맞출게요. ";
  }
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
  } else {
    h = vivDateTime.time.hour;
    let p;
    if (h > 12) {
      h = h - 12;
      p = "오후 " + h + "시 " + vivDateTime.time.minute + "분에 주무시면 돼요.";
    } else {
      p = "오전 " + h + "시 " + vivDateTime.time.minute + "분에 주무시면 돼요.";
    }
    resultMessage = resultMessage + p;
  }
  console.log(resultMessage);
  timer.resultMessage = resultMessage;
  timerList.push(timer);
  if (dates.ZonedDateTime.now().isBefore(flag)) {
    timerList.push({
      timerTime:vivDateTime,
      millisec:date.getTime(),
      reason:"잘 시간",
      hasReason:true,
      resultMessage:resultMessage,});
  }
  console.log(timerList);
  timerList.reverse();
  return {timer:timerList};
}
