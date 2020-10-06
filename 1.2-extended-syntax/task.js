"use strict";

function getResult(a, b, c) {
  // код для задачи №1 писать здесь
  // return x;
  let d = Math.pow(b, 2) - 4 * a * c;
  let x = [];

  if (d === 0) {
    x.push(-b / (2 * a));
  } else if (d > 0) {
    x.push((-b + Math.sqrt(d)) / (2 * a));
    x.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return x;
}

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  // return averageMark;
  let averageMark;
  let amountMark = 0;

  if (marks.length === 0) {
    averageMark = 0;
  } else {
    marks.splice(5);
    calculationMark();
  }

  function calculationMark() {
    for (let i = 0; i < marks.length; i++) {
      amountMark += marks[i];
    }
    averageMark = amountMark / marks.length;
  }
  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  // код для задачи №3 писать здесь
  // return result;
  let result;
  if (new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  return result;
}