import Cars from './Data/Cars.js';
import Order from './Data/Order.js';
import SpeciesTree from './Data/SpeciesTree.js'

/* filter, map */
// Print the names of all fast cars
console.log("FUNCTIONS: [filter, map]");
console.log("---->\n");
const carNames = Cars.filter((car) => {
    return car.tags[1] == "fast";
}).map(car => { return car.name });

console.log(carNames); // [ 'BMW', 'lamborghini', 'ferrari', 'Audi' ]
console.log("<----\n");

/* reduce */
console.log("FUNCTIONS: [reduce]");
console.log("---->\n");
const totalSum = Order.reduce((sum, order) => {
    return sum + order.price;
}, 0);

console.log('Total Amount: ' + totalSum); // 15
console.log("<----\n");

/* filter, map, reduce */
console.log("FUNCTIONS: [map, reduce]");
console.log("---->\n");
import fs from 'fs';
const data = fs.readFileSync('./Data/data.txt', 'utf8')
    .trim()
    .split('\r\n')
    .map((line) => line.split('  '))
    .reduce((customer, line) => {
        customer[line[0]] = customer[line[0]] || [];
        customer[line[0]].push({
            "product": line[1],
            "price": line[2],
            "quantity": line[3]
        })
        return customer;
    }, {});;

console.log(data);
console.log("<----\n");

/* curring */
console.log("FUNCTIONS: [curring]");
console.log("---->\n");
const intro =
    (name) =>
    (degree) =>
    (title) => {
        return `I am ${name}, recently completed my ${degree} degree in ${title}.`;
    }

console.log(intro('X')('Y')('ZZZZ'));
console.log("<----\n");

/* recursion */
console.log("FUNCTIONS: [recursion, filter]");
console.log("---->\n");
const makeTree = (SpeciesTree, parent) => {
    let node = {};
    SpeciesTree
        .filter((s) => {
            return s.parent === parent;
        })
        .forEach((s) => {
            node[s.id] = makeTree(SpeciesTree, s.id);
        });
    return node;
}
console.log(JSON.stringify(makeTree(SpeciesTree, null), null, 2));
console.log("<----\n");

/* functor - any object (e.g., JS array) that has the options for funtional programming, such as map, is known as functor.
An object to qualify as functor:
- transformation of contents
- maintain structure
- return a new functor
 */
console.log("FUNCTIONS: [map]");
console.log("---->\n");
const stringFunctor = (value, func) => {
    const chars = value.split("");
    const result = chars.map(char => {
        return String.fromCharCode(func(char.charCodeAt(0)));
    }).join("");
    return result;
}

const plus1 = (value) => {
    return value + 1;
}

const minus1 = (value) => {
    return value - 1;
}

const value1 = "ABC";
console.log(stringFunctor(value1, plus1)); // BCD

const value2 = "BCD";
console.log(stringFunctor(value2, minus1)); // ABC
console.log("<----\n");