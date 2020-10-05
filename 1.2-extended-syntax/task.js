function getResult(a, b, c) {
  // код для задачи №1 писать здесь
  // return x;
  "use strict";
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

  if (marks.length === 0 || marks === undefined) {
    averageMark = 0;
  } else if (marks.length > 5) {
    let rengeDelete = -marks.length + 5;
    marks.splice(rengeDelete, -rengeDelete);
    calculationMark();
  } else if (marks.length <= 5) {
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
  let birthdayYear = dateOfBirthday.getFullYear();
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthdayYear;
  let result;
  if (age >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  return result;
}
