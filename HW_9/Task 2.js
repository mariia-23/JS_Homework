// const characters = [
//     { 'name': 'Barney', 'age': 36 },
//     { 'name': 'Fred', 'age': 40 },
//     { 'name': 'Jack', 'age': 50 }
//   ];

// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//     Объект должен иметь поля name (string) и age (number)
// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)

const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
];
// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//     Объект должен иметь поля name (string) и age (number)
function addCharacter(character) {
    if (typeof character['name'] === 'string' && typeof character['age'] === 'number') {
        characters.push(character);
    } else {
        console.log('Invalid fields');
    }
}
addCharacter({ 'name': 'Phill', 'age': 45 });
console.log(characters);

// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }

function getCharacter(charName = '') {
    if (characters.map(element => Object.values(element)).flat().includes(charName)) {
        return characters.find(character => character.name === charName);
    } else console.log('Not found');
}
console.log(getCharacter('Jack'));

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
function getCharactersByAge(minAge) {
    return characters.filter(character => character.age >= minAge);
}
console.log(getCharactersByAge(40));

// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
function updateCharacter(name, newCharacter) {
    const changedChar = getCharacter(name);
    if (changedChar) {
        changedChar.name = newCharacter.name;
        changedChar.age = newCharacter.age;
    }
}
updateCharacter('Phill', { name: 'Phill1', age: 23 });
console.log(characters);

// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)

function removeCharacter(name) {
    const index = characters.findIndex((character) => character.name === name);
    if(index !== -1) {
        characters.splice(index, 1);
    }
    return characters;
    } 
    console.log(removeCharacter('Phill1'));