// Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
//   и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
//   Решите эту задачу, используя эффективные методы массива.

// Пример: const arr = [5,2,7,3,8,1,6] //4

function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num);
    return expectedSum - actualSum;
}
const arr = [5, 2, 7, 3, 8, 1, 6];
const missingNumber = findMissingNumber(arr);
console.log(missingNumber);