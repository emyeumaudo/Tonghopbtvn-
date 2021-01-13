//Bai tap
// cho mang [5, 5, 35, 2, 5, 44, #, 2, 5, 6, 8, 9];

//Tinh tong tat ca so truoc dau #

var numbers = [5, 5, 35, 2, 5, 44, "#", 2, 5, 6, 8, 9];
var sum = 0;
for (index = 0; index < numbers.length - 6; index++) {
  sum += numbers[index];
}
console.log(sum);

//Tinh tong tat ca cac so sau #

var numbers = [5, 5, 35, 2, 5, 44, "#", 2, 5, 6, 8, 9];
var numbersreverse = numbers.reverse(numbers);
console.log(numbers);
var sum = 0;
for (index = 0; index < numbers.length - 7; index++) {
  sum += numbers[index];
}
console.log(sum);
