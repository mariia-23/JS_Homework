// У вас есть массив чисел. 
// Напиши функцию countOccurrences, которая принимает массив чисел и возвращает объект с подсчётом каждого числа.

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

function countOccurrences(arr) {
 const occurrences = {};
 arr.forEach(number => {
    if(occurrences[number]){
        occurrences[number]++;
    } else {
        occurrences[number] = 1;
    }
 });
 return occurrences;
};

console.log(countOccurrences(numbers));

