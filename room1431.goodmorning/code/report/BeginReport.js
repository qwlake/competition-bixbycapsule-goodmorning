var console = require("console")

module.exports.function = function beginReport (timerList) {
  console.log(timerList);
  let ret = [];
  let tmp = 0;
  while (tmp < timerList.timer.length) {
    ret.push({timer:timerList.timer[tmp]});
    tmp += 1;
  }
  console.log(ret);
  return {timersReport:ret};
}