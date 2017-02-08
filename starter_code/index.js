const Elevator = require('./elevator');
const Person = require('./person');

let elevator = new Elevator();
let daniel = new Person("Daniel", 0, 5);
let laura = new Person("Laura", 2, 10);
let sebastian = new Person("Sebastian", 7, 1);

elevator.start();
elevator.call(daniel);
// elevator.call(laura);
elevator.call(sebastian);

setTimeout(() => {elevator.call(laura)}, 6000);
