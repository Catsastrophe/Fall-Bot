const moment = require('moment')

module.exports = {
  calculator: function (num1, operator, num2) {
    if (!num1) throw new TypeError("Missing num1");
    if (!operator) throw new TypeError("Missing operator");
    if (!num2) throw new TypeError("Missing num2");
    if (operator == "*") return num1 * num2;
    if (operator == "^") return num1 ^ num2;
    if (operator == "+") return num1 + num2;
    if (operator == "-") return num1 - num2;
    if (operator == "/") return num1 / num2;
  },
  formatDate: function (date) {
    // ik lol
    const d = new Date(date)

    return `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()}`
  },
};