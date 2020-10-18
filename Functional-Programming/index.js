import Cars from './Data/Cars.js';
import Order from './Data/Order.js';
import SpeciesTree from './Data/SpeciesTree.js'

/* filter, map */
// Print the names of all fast cars
console.log("FUNCTIONS: [filter, map]\n");
const carNames = Cars.filter((car) => {
    return car.tags[1] == "fast";
}).map(car => { return car.name });

console.log(carNames); // [ 'BMW', 'lamborghini', 'ferrari', 'Audi' ]
console.log("----\n");

/* reduce */
console.log("FUNCTIONS: [reduce]\n");
const totalSum = Order.reduce((sum, order) => {
    return sum + order.price;
}, 0);

console.log('Total Amount: ' + totalSum); // 15
console.log("----\n");

/* filter, map, reduce */
console.log("FUNCTIONS: [map, reduce]\n");
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
console.log("----\n");

/* curring */
console.log("FUNCTIONS: [curring]\n");
const intro =
    (name) =>
    (degree) =>
    (title) => {
        return `I am ${name}, recently completed my ${degree} degree in ${title}.`;
    }

console.log(intro('X')('Y')('ZZZZ'));
console.log("----\n");

/* recursion */
console.log("FUNCTIONS: [recursion, filter]\n");
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