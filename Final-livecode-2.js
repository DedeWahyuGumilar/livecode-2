// #SOAL1

function sumProductDiff(num1, num2) {
  let arr = [];

  let tambah = num1 + num2;
  let kali = num1 * num2;
  let kurang = num1 - num2;
  arr.push(tambah, kali, kurang);
  return arr;
}
console.log("=======SOAL 1============");
console.log(sumProductDiff(3, 4));
console.log("=========================");

// #Soal 2
// Fungsi return true jika sebuah number merupakan bilangan genap, sebaliknya false
function isEven(number) {
  let number1 = number;
  let result = number1 % 2 === 0 ? `${number1} true` : `${number1} false`;
  return result; // harus return boolean
}
console.log("=======SOAL 2.1============");
console.log(isEven(4));
console.log("=========================");

// Fungsi return true jika sebuah number merupakan bilangan ganjil, sebaliknya false
function isOdd(number) {
  let number1 = number;
  let result = number1 % 2 === 0 ? `${number1} false` : `${number1} true`;
  return result; // harus return boolean
}
console.log("=======SOAL 2.2============");
console.log(isOdd(3));
console.log("=========================");

// Fungsi return string yang merupakan gabungan dari hasil filter berdasarkan parameter func
function filter(numbers, func) {
  let result = [1, 2, 3, 4, 5, 7];
  let itIsFilter = result.filter((item) => item % 2 === 0);
  return itIsFilter; // harus return string isi dari result yang digabungkan dengan tanda ,
}
function filters(numbers, func) {
  let result = [1, 2, 3, 4, 5, 7];
  let itIsFiltergn = result.filter((item) => item % 1 === 0);
  return itIsFiltergn; // harus return string isi dari result yang digabungkan dengan tanda ,
}

console.log("=======SOAL 2.3============");
console.log("Odd:", filters());
console.log(`Even:`, filter());
console.log("=========================");
// Sample Output
Odd: 1, 3, 5, 7;
Even: 2, 4;
