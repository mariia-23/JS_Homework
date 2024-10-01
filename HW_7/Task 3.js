function getSum(number) {
    if (number < 10) {
        return number;
    }

    let sum = 0;

    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    if(sum > 9){
        return getSum(sum);
    } 
    return sum;
}

console.log(getSum(2344));
