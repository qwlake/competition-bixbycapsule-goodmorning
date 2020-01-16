// 지금 자서 일어날 시간 계산
module.exports.function = function calculateWakeupTime (sleepTime) {
    const console = require('console');
    const dates = require('dates');
    console.log(sleepTime);
    let time = convertToDateTime(sleepTime);
    console.log(time);
    let wakeupTimes = [];
    time = time.plusMinutes(14);
    for (let i = 0; i < 6; i++) {
      time = time.plusMinutes(90);
      wakeupTimes.push(time);
      console.log(time);
    }
    return wakeupTimes;
}

function convertToDateTime(expr) {
    const dates = require('dates');
    return dates.ZonedDateTime.fromDateTime(
      expr.dateTime);
  
    // if (!expr) {
    //   return null;
    // }
    // if (expr.date) {
    //   return dates.ZonedDateTime.fromDate(expr.date);
    // }
    // return null;
}