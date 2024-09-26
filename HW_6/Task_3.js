 const arr = [1, 1, 13, 17, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
 let noDuplicatesArr = [];
 for (const element of arr) {
    if(!noDuplicatesArr.includes(element)){
        noDuplicatesArr.push(element);
 }
}
console.log(noDuplicatesArr);

let result = new Set();
for (const element of arr) {
   result.add(element);
}
console.log(result);
console.log([...result]);


console.log([...new Set(arr)]);