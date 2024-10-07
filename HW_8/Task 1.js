/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30
  2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - найдите элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/

const taskArray = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

//task 1
taskArray.forEach((element) => {
    if (element % 3 === 0) {
        console.log((element))
    }
});

// task 2
const task2Arr = taskArray.map((element) => element - taskArray.length);
console.log(task2Arr);

// task 3
const task3Arr = taskArray.filter((element, index, taskArray1) => element > taskArray1[index - 1]);
console.log(task3Arr);

// task 4
const task4Array = taskArray.find((element, index, taskArray2) => element === index);
console.log(task4Array);

// task 5
const sortedArrayAsc = taskArray.toSorted((a,b) => a - b);
console.log(sortedArrayAsc);

// task 6
const sumOfArray = taskArray.reduce((initialValue, currentValue) => initialValue + currentValue);
console.log(sumOfArray);

// task 7
const isBiggerThan90 = taskArray.some((element) => element > 90);
console.log(isBiggerThan90);

// task 8
const isBiggerThan10 = taskArray.every((element) => element >= 10  && element < 100);
console.log(isBiggerThan10);



