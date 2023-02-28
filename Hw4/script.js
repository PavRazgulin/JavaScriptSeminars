// // Задание 1
// // Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// // 0 – это ноль
// // 1 – нечетное число
// // 2 – четное число
// // 3 – нечетное число
// // …
// // 10 – четное число

// const newArray = [];

// newArray.push("0");
// newArray.push("1");
// newArray.push("2");
// newArray.push("3");
// newArray.push("4");
// newArray.push("5");
// newArray.push("6");
// newArray.push("7");
// newArray.push("8");
// newArray.push("9");
// newArray.push("10");
// newArray.push("11");
// console.log(newArray);

// for (let i = 0; i < newArray.length; i++);
// {
//   if ((i == 0)) {
//     console.log(${i} -"это ноль");
//   }
//   if (i % 2 == 0) {
//     console.log(${i} - "четное число");

//   }
//   if (i / 2 !== 0) {
//     console.log(${i} "- нечетное число");

//   }
// }

// ДЗ 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const task = [1, 2, 3, 4, 5, 6, 7];
// task.splice(3, 2);
// console.log(task);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// let max = 9;
// let min = 0;
// let lenght=5;
// let task = Array(lenght).fill(0);
// task = task.map(_ => {
// const seed = [Math.random() * min, Math.random() * max];
// const randomValue = seed[Math.floor(Math.random() * seed.length)];
// return Math.round(randomValue)
// });
// console.log(task);
// // [ 1, 0, 7, 0, 0 ]
// Найти сумму
// const task = [ 1, 0, 7, 0, 0 ];
// let sum = 0;
// for (let i = 0; i < 5; i++) {
// sum += task[i];
// }
// console.log("Сумма значений данного массива равна" + sum);

// Найти минимум

// const task=[ 1, 0, 7, 0, 0 ];
// let m = Math.min.apply(null, task);
// console.log(m);

// Найти число 3
// const task=[ 1, 0, 7, 3, 0];
// let result = task.includes(3);
// console.log(result);  // Выведет true;
