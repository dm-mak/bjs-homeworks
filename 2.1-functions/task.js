// Задача №1. Корни квадратного уравнения

function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  let count = new Object();
  getArgs(D);
  if (D < 0) {
    return count;
  } else if (D === 0) {
    let x1 = -b / (2 * a);
    getArgs(D, x1);
    return count;
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / 2 * a;
    let x2 = (-b - Math.sqrt(D)) / 2 * a;
    getArgs(D, x1, x2);
    return count;
  }

  function getArgs(D, ...roots) {
    count.D = D;
    count.roots = roots;
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  // console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  // console.log(`Значение дискриминанта: ${result.D}`);
  // console.log(`${returnRoots()}`);

  function returnRoots() {
    if (result.roots.length === 0) {
      return `Уравнение не имеет вещественных корней`;
    } else if (result.roots.length === 1) {
      return `Уравнение имеет один корень X₁ = ${result.roots}`;
    } else if (result.roots.length === 2) {
      return `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
    }
  }
}

// ## Задача №2. Журнал успеваемости

function getAverageScore(data) {
  if (Object.keys(data).length === 0) {
    data.average = 0;
    return data;
  } else {
    for (let prop in data) {
      let value = data[prop];
      let valueObject = getAverageMark(value);
      data[prop] = valueObject;
    }
    let objLength = 0;
    let sumMarks = 0;
    for (let key in data) {
      objLength++;
      // console.log(data[key])
      sumMarks += data[key];
    }
    data.average = sumMarks / objLength;
    return data;
  }
}

function getAverageMark(marks) {
  if (marks.length > 0) {
    let amountMarks = null;
    for (let i = 0; i < marks.length; i++) {
      amountMarks = amountMarks + marks[i];
    }
    let countMarks = amountMarks / marks.length;
    return countMarks;
  } else {
    return 0;
  }
}

// ## Задача №3. Расшифровка данных

function getPersonData(secretData) {
  let decodedValueArr = new Array();
  let banditData = new Object();
  for (let value in secretData) {
    decodedValueArr.push(getDecodedValue(secretData[value]));
  }

  for (let i = 0; i < Object.keys(secretData).length; i++) {
    if (i === 0) {
      banditData.firstName = decodedValueArr[i];
    } else {
      banditData.lastName = decodedValueArr[i];
    }
  }
  return banditData;
}

function getDecodedValue(secret) {
  let decodedValue;
  if (secret === 0) {
    decodedValue = 'Родриго'
  } else if (secret === 1) {
    decodedValue = "Эмильо"
  }
  return decodedValue;
}