'use strict';

// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [[1, 2, 3, 4, 5]]

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers); // Очікуваний результат: [1, 4, 9, 16, 25]

// Пояснення:
// map() — це метод масиву, який застосовує функцію до кожного елементу масиву 
// і повертає новий масив з результатами.

// У цьому випадку, функція num => num * num приймає кожен елемент масиву
//  (num) і повертає його квадрат.

// Таким чином, squaredNumbers буде новим масивом, що містить квадрати
//  кожного елементу з початкового масиву numbers.

// та ж задача 1 тільки із Math.pow

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => Math.pow(num, 2));

// console.log(squaredNumbers); // Очікуваний результат: [1, 4, 9, 16, 25]





// const numbers = [1, 5, 17, 18];

// console.log(numbers.map(()=>{}));


// function second(first) {
    
// }; 




// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];


// const data = [
//     { id: 1, values: [1, 2, 3] },
//     { id: 2, values: [4, 5, 6] },
//     { id: 3, values: [7, 8, 9] },
// ];

//   // Використовуємо flatMap для створення нового масиву
// const result = data.flatMap(obj => obj.values);

//   console.log(result); // Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Завдання 3:

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// не вирішено задачі [3-10]


// Завдання 11:

 // Створи клас для калькулятора, який має такі методи:
 // - метод number, який набуває початкового значення для наступних операцій
 // - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 // - методи add, substruct, divide, multiply
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка