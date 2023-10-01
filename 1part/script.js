// 1 задача

// Найти максимальную разницу между элементами массива.

// function findMaxDifference(arr) {
//     if (arr.length < 2) {
//         return 0; // Если массив содержит меньше двух элементов, максимальная разница равна 0
//     }

//     let maxDiff = arr[1] - arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             const diff = arr[j] - arr[i];
//             if (diff > maxDiff) {
//                 maxDiff = diff;
//             }
//         }
//     }

//     return maxDiff;
// }

// const numbers = [4, 2, 9, 5, 1];
// const maxDifference = findMaxDifference(numbers);
// console.log(maxDifference);


// Вернуть массив без повторяющихся элементов

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6];
// const uniqueNumbers = removeDuplicates(numbers);
// console.log(uniqueNumbers);

//Дан массив объектов, вернуть только те, у которых isDone: true.

// function filterDoneObjects(arr) {
//     return arr.filter(obj => obj.isDone === true);
// }

// const objects = [
//     {id: 1, isDone: true},
//     {id: 2, isDone: false},
//     {id: 3, isDone: true}
// ];
// const doneObjects = filterDoneObjects(objects);
// console.log(doneObjects);


// 2 задание

// Найти элементы массива, которые больше указанного числа

// function findElementsGreaterThan(arr, number) {
//     return arr.filter(element => element > number);
// }

// const inputArray = [1, 4, 6, 3, 2];
// const threshold = 2;

// const result = findElementsGreaterThan(inputArray, threshold);
// console.log(result);


//Дан многомерный массив произвольной вложенности. Написать функцию, делающую из него "плоский" массив

// function flattenArray(arr) {
//     const flattened = [];
    
//     for (const element of arr) {
//         if (Array.isArray(element)) {
//             // Если элемент является массивом -> вызываем функцию для него
//             flattened.push(...flattenArray(element));
//         } else {
//             // Если элемент не массив -> добавляем его в "плоский" массив
//             flattened.push(element);
//         }
//     }
    
//     return flattened;
// }

// const nestedArray = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];
// const flatArray = flattenArray(nestedArray);
// console.log(flatArray);

//Найти, сколько есть в массиве пар чисел, дающих в сумме 0

// function findPairsWithSumZero(arr) {
//     let count = 0;
//     const numCount = {};

//     for (const num of arr) {
//         const complement = -num;
//         if (numCount[complement]) {
//             count += numCount[complement];
//         }
//         if (!numCount[num]) {
//             numCount[num] = 0;
//         }
//         numCount[num]++;
//     }

//     return count;
// }

// const arr1 = [-7, 12, 4, 6, -4, -12, 0];
// const arr2 = [-1, 2, 4, 7, -4, 1, -2];
// const arr3 = [-1, 1, 0, 1];
// const arr4 = [-1, 1, -1, 1];
// const arr5 = [1, 1, 1, 0, -1];
// const arr6 = [0, 0];
// const arr7 = [];

// console.log(findPairsWithSumZero(arr1));
// console.log(findPairsWithSumZero(arr2));
// console.log(findPairsWithSumZero(arr3));
// console.log(findPairsWithSumZero(arr4));
// console.log(findPairsWithSumZero(arr5));
// console.log(findPairsWithSumZero(arr6));
// console.log(findPairsWithSumZero(arr7));


//То же самое, но найти количество троек таких чисел

// function findTripletsWithSumZero(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length - 2; i++) {
//         for (let j = i + 1; j < arr.length - 1; j++) {
//             for (let k = j + 1; k < arr.length; k++) {
//                 if (arr[i] + arr[j] + arr[k] === 0) {
//                     count++;
//                 }
//             }
//         }
//     }

//     return count;
// }

// const arr1 = [-7, 12, 4, 6, -4, -12, 0];
// const arr2 = [-1, 2, 4, 7, -4, 1, -2];
// const arr3 = [-1, 1, 0, 1];
// const arr4 = [-1, 1, -1, 1];
// const arr5 = [1, 1, 1, 0, -1];
// const arr6 = [0, 0];
// const arr7 = [];

// console.log(findTripletsWithSumZero(arr1));
// console.log(findTripletsWithSumZero(arr2));
// console.log(findTripletsWithSumZero(arr3));
// console.log(findTripletsWithSumZero(arr4));
// console.log(findTripletsWithSumZero(arr5));
// console.log(findTripletsWithSumZero(arr6));
// console.log(findTripletsWithSumZero(arr7));