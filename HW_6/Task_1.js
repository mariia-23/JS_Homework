let array = [1,2,3,4,5,6,7,8,9,10];
let result = [];
for (let element of array){
    if (element % 2 === 0){
        element = element ** 2;
    } else {
        element = element ** 3;
    }
    result.push(element); 
}
console.log(result);


const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.unshift(0);
numbers.splice (2,1);
numbers.pop();
console.log(numbers);

const array3 = [5,4,3,2,1];
const [fifth, fourth, ...rest] = array3;
console.log(fifth);
console.log(fourth);
console.log(rest);

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
let mergedArray = [...arr1, ...arr2]
console.log(mergedArray);
