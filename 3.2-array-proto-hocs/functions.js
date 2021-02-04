// const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

// function getNames() {
//   const namesWeapons = weapons.map(weapons => weapons.name);
//   return namesWeapons;
// }

// function getCountReliableWeapons(value) {
//   const countReliableWeapons = weapons.filter(weapons => weapons.durability > value).length;
//   return countReliableWeapons;
// }

// function hasReliableWeapons(value) {
//   const reliableWeapons = weapons.some(weapons => weapons.durability > value);
//   return reliableWeapons;
// }

// function getReliableWeaponsNames(value) {
//   const reliableWeaponsNames = weapons.filter(weapons => weapons.durability > value).map(weapons => weapons.name);
//   return reliableWeaponsNames;
// }

// function getTotalDamage() {
//   const reliableWeaponsNames = weapons.map(weapons => weapons.attack).reduce((a,b) => a + b);
//   return reliableWeaponsNames;
// }


// 2е задание


// 2.1 Возвращение функции
// const resultFunction = memorize();

// function memorize() {
//   return () => '';
// }

// 2.2 Получение аргументов
// function memorize() {
//   return (...args) => args.join(',');
// }

// 2.3 Вычисление функции

// const resultFunction = memorize(a => a ** 2);

// function memorize(func) {
//   return func;
// }

// 2.4 Поиск посчитанного элемента

console.clear()

const resultFunction = memorize((a, b) => a + b);

function memorize(func) {
  let arr1 = [{
      args: [3, 4],
      result: 7
    },
    {
      args: [1, 3],
      result: 4
    }
  ]

  return (...args) => {

    function compareArrays(arr_1, i) {
      if (arr_1.args.length === args.length && arr_1.args[i] === args[i]) {
        func(...args) === arr_1.result
        return arr_1.result
      }
    }

    let value = arr1.find(compareArrays)

    if (Boolean(value)) {
      return value.result
    } else {
      return console.log(`ничего не найдёт в памяти`)
    }
  }
}
