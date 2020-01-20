var console = require("console")

module.exports.function = function beginReport (timerList) {
  console.log(timerList);
  // let ret = [];
  // timerList.forforEach(function(timer) {
  //   ret.push(timer);
  // })
  return {timer:timerList[0]};
}
