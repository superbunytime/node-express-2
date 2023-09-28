function timeWord(time) {
  const milTime = Number(time.replace(":", ""));

  if (milTime == 1200) {
    return "noon";
  }
  if (milTime == 0) {
    return "midnight";
  }

  let [hour, minutes] = time.split(":");

  hour = Number(hour);
  minutes = Number(minutes);
  let UTC = setUTC(milTime);

  if (minutes == 0) {
    return hours[hour] + " o'clock " + UTC;
  }

  return hours[hour] + " " + setMin(minutes) + " " + UTC;
}
/** Takes in a number of minutes and returns a string
 * of the minutes converted to word numbers
 */
function setMin(minutes) {
  if (minutes < 10) {
    return "oh " + singleDig[minutes];
  }
  if (minutes == 10) {
    return "ten";
  }
  if (minutes < 20) {
    return tenNums[minutes];
  }
  if (minutes % 10 == 0) {
    return doubleDig[Math.floor(minutes / 10)];
  }
  return doubleDig[Math.floor(minutes / 10)] + " " + singleDig[minutes % 10];
}

function setUTC(time) {
  let UTC = "";
  if (time > 1200) {
    UTC = "pm";
  }
  if (time < 1200 && time > 0) {
    UTC = "am";
  }

  return UTC;
}

const singleDig = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const tenNums = {
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "forteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const doubleDig = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
};

const hours = {
  0: "twelve",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "one",
  14: "two",
  15: "three",
  16: "four",
  17: "five",
  18: "six",
  19: "seven",
  20: "eight",
  21: "nine",
  22: "ten",
  23: "eleven",
};

module.exports = timeWord;
