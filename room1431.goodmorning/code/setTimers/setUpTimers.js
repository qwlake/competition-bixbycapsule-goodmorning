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
  let cycle = 0;
  let resultMessage = "";
  while (zonedDT.isBefore(until)) { //
    zonedDT = zonedDT.plusMinutes(90);
    cycle = cycle + 1;
  }
  let timerTime = utils.toVivDateTime(zonedDT);
  if (cycle >= 6) {
    resultMessage = "9시간 이상의 수면은 좋지 않아요.";
  } else if (cycle < 3) {
    resultMessage = "4시간 미만의 수면은 좋지 않아요.";
  } else {
    let h = timerTime.time.hour;
    if (h > 12) {
      h = h - 12;
      resultMessage = "오후 " + h + "시 " + timerTime.time.minute + "분으로 알람을 맞출게요.";
    } else {
      resultMessage = "오전 " + h + "시 " + timerTime.time.minute + "분으로 알람을 맞출게요.";
    }
  }
  console.log(resultMessage);
  let date = new Date(zonedDT.toString());
  let millisec = date.getTime();
  timerList.push({
    timerTime:timerTime,
    millisec:millisec,
    reason:"일어날 시간",
    hasReason:true,
    resultMessage:resultMessage});
  console.log(timerList);
  return {timer:timerList};
}
