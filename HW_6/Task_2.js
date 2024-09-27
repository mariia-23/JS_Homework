const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['Caprichosa', 'Romana', 'Siciliana', 'Margarita', 'Hawai'];
let onlyMyPizzas = [];
// for (let myPizza of myPizzas){
//    if (!competitorPizzas.includes(myPizza)){
//     differentPizzas.push(myPizza);
//    }
// }

for (let myPizza of myPizzas){
    let exist = false;
    for (let element of competitorPizzas) {
        if(element.toLowerCase() === myPizza.toLowerCase()) {
            exist = true;
        }
    }

    if(!exist) {
        onlyMyPizzas.push(myPizza);
    } 

}
console.log(onlyMyPizzas);
