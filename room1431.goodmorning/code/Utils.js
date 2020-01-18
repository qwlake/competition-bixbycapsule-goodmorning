var dates = require('dates')
var console = require('console')

exports.toZonedDateTime = toZonedDateTime;
exports.toVivDateTime = toVivDateTime;
exports.calculateSleepTime = calculateSleepTime;
exports.calculateWakeupTime = calculateWakeupTime;

function toZonedDateTime(expr) {
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

function toVivDateTime(zonedDT) {
  return {
    date: {
      year: zonedDT.getYear(),
      month: zonedDT.getMonth(),
      day: zonedDT.getDay()
    },
    time: {
      hour: zonedDT.getHour(),
      minute: zonedDT.getMinute(),
      second: zonedDT.getSecond(),
      timezone: zonedDT.getTimeZoneId()
    }
  };
}

// 일어날 시간을 위한 잘 시간 계산
function calculateSleepTime (wakeupTime) {
  let zonedDT = utils.toZonedDateTime(wakeupTime);
  let sleepTimes = [];
  zonedDT = zonedDT.minusMinutes(104);
  while (dates.ZonedDateTime.now().isBefore(zonedDT)) {
    let vivDateTime = utils.toVivDateTime(zonedDT);
    sleepTimes.push({
      resultSleep: {
        datetime:vivDateTime,
      },
    });
    zonedDT = zonedDT.minusMinutes(90);
  }
  sleepTimes = sleepTimes.reverse();
  console.log(sleepTimes);
  return sleepTimes;
}

// 지금 자서 일어날 시간 계산
function calculateWakeupTime (sleepTime, sleepPeriod) {
  console.log(sleepPeriod);
  let zonedDT = utils.toZonedDateTime(sleepTime);
  let wakeupTimes = [];
  zonedDT = zonedDT.plusMinutes(14);
  for (let i = 0; i < 6; i++) {
    zonedDT = zonedDT.plusMinutes(90);
    let vivDateTime = utils.toVivDateTime(zonedDT);
    wakeupTimes.push({
      resultWakeup: {
        datetime:vivDateTime,
      },
    });
  }
  console.log(wakeupTimes);
  return wakeupTimes;
}