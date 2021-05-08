let fT = false && true || true;
console.log(fT); true

let faTr = false && (true || true);
console.log(faTr); false

let aB = +'40' + +'2';
console.log(aB); 42

let bC = '2' + 3 ** 2;
console.log(bC); 29

let cD = 3 ** 2 / 3;
console.log(cD); 3

let dE = 3 ** (9 / 3);
console.log(dE); 27

let eF = '10' + (5 === 6);
console.log(eF); 10(false)

let fG = '10' - 5 === 6;
console.log(fG); false

let gH = undefined + 1;
console.log(gH); NaN

let hI = (+null == false) < 1;
console.log(hI); false

let iG = (+null == false) < 1 ** 5;
console.log(iG); false

// let number = 5;
// 2 * ++number;
// 2 * number --;s
// console.log(number); по логике 10, но консоль выводит 5


let number = +prompt('Сколько Вам лет?');
let year;
if (number == 1 || 21 || 31 || 41 || 51 || 61 || 71 || 81 || 91 || 101) {
    year = ('год');
  }
if (number == 2 || 3 || 4 || 22 || 23 || 24 || 32 || 33 || 34 || 42 || 43 || 44 || 52 || 53 || 54 || 62 || 63 || 64 || 72 || 73 ||74) {
  year = ('года');
 }
alert(`Вам ${number} ${year} `);

