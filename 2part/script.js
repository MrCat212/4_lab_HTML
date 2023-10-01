// 2 задача

// Реализовать генератор, бесконечно возвращающий случайное число в заданном диапазоне random(n, m).

// function* randomGenerator(n, m) {
//     while (true) {
//         yield Math.floor(Math.random() * (m - n + 1) + n);
//     }
// }

// const randomNums = randomGenerator(1, 100); // Генератор случайных чисел от 1 до 100
// console.log(randomNums.next().value);
// console.log(randomNums.next().value);

// Реализовать генератор, бесконечно возвращающий очередное число из последовательности Падована.

// function* padovanGenerator() {
//     let a = 1, b = 1, c = 1;
//     while (true) {
//         yield a;
//         const next = a + b;
//         a = b;
//         b = c;
//         c = next;
//     }
// }

// const padovanSeq = padovanGenerator();
// console.log(padovanSeq.next().value);
// console.log(padovanSeq.next().value);
// console.log(padovanSeq.next().value);
// console.log(padovanSeq.next().value);
// console.log(padovanSeq.next().value);
// console.log(padovanSeq.next().value);
// console.log(padovanSeq.next().value);
// console.log(padovanSeq.next().value);
// console.log(padovanSeq.next().value);


//Генератор простых чисел

// function* primeGenerator() {
//     const primes = [2];
//     yield 2;

//     let candidate = 3;

//     while (true) {
//         let isPrime = true;
//         for (const prime of primes) {
//             if (prime * prime > candidate) break;
//             if (candidate % prime === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             primes.push(candidate);
//             yield candidate;
//         }
//         candidate += 2;
//     }
// }

// const primes = primeGenerator();
// console.log(primes.next().value);
// console.log(primes.next().value);
// console.log(primes.next().value);
// console.log(primes.next().value);
// console.log(primes.next().value);
// console.log(primes.next().value);
// console.log(primes.next().value);
// console.log(primes.next().value);

//Посчитать число вхождений букв (или слов) в строке, используя Map.

// function countOccurrences(inputString) {
//     const charMap = new Map();

//     for (const char of inputString) {
//         if (charMap.has(char)) {
//             charMap.set(char, charMap.get(char) + 1);
//         } else {
//             charMap.set(char, 1);
//         }
//     }

//     return charMap;
// }

// const text = "Hello, world My name is Andrey!";
// const charOccurrences = countOccurrences(text);


// charOccurrences.forEach((value, key) => {
//     console.log(`"${key}": ${value}`);
// });

// Написать функцию getPrime(n), возвращающее n-ное по счёту простое число, используя BigInt.


// function isPrime(number) {
//     if (number <= 1n) return false;
//     if (number <= 3n) return true;

//     if (number % 2n === 0n || number % 3n === 0n) return false;

//     let i = 5n;
//     while (i * i <= number) {
//         if (number % i === 0n || number % (i + 2n) === 0n) return false;
//         i += 6n;
//     }

//     return true;
// }

// function getPrime(n) {
//     if (n <= 0) return null;

//     let count = 0;
//     let currentNumber = 2n;

//     while (count < n) {
//         if (isPrime(currentNumber)) {
//             count++;
//             if (count === n) {
//                 return currentNumber;
//             }
//         }
//         currentNumber++;
//     }

//     return null;
// }

// const nthPrime = getPrime(20); // 71 - 20-е простое число.
// console.log(nthPrime.toString());
