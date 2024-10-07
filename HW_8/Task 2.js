// const words = [
//     "umbrella",   
//     "apple",      
//     "ocean",      
//     "independent",
//     "education",  
//     "elephant",   
//     "island",     
//     "universe",   
//     "environment",
//     "queue"       
//   ];
//   Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
//     Массив должен быть отсортирован по возрастанию количества гласных букв в слове.

const vowels = "aeiouy";
const words = [
        "umbrella",   
        "apple",      
        "ocean",      
        "independent",
        "education",  
        "elephant",   
        "island",     
        "universe",   
        "environment",
        "queue"       
      ];

const sortedArr = [...words].sort((first, second) => vowelsCount(first) - vowelsCount(second));
console.log(sortedArr);

function vowelsCount(word) {
    let vowelsCount = 0;
    for (let i = 0; i < word.length; i++) {
        let symbol = word[i].toLowerCase();    
        if (vowels.indexOf(symbol) > -1) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

