
const object = {
    name: 'athira',
    age: 28,
    "key-value": true,
    someRandom : function (greeting){
        console.log(`${greeting}, my name is ${this.name}`);
    }
}

const anotherobject = {
    name: 'Rose'
}

object.someRandom.call(anotherobject, 'Hello');

console.log("--------------------------");

console.log(object.name);
console.log("--------------------------");

console.log(object.age);
console.log("--------------------------");

console.log(object['key-value']);
console.log("--------------------------");

object.hobby = "embroidery"
console.log(object);
console.log("--------------------------");

delete object.hobby;
console.log(object);
console.log("--------------------------");

object.someRandom();
console.log("--------------------------");

// Object.keys() - extracts keys from an object and returns them as an array.
console.log("Keys = ", Object.keys(object));
console.log("--------------------------");

// Object.values() - extracts values from an object and returns them as an array.
console.log("Values = ", Object.values(object));
console.log("--------------------------");

/* Object.entries() - extracts key-value pairs from an object and returns them as an array of arrays, 
each inner array containing a key-value pair. */
console.log("Entries = ", Object.entries(object));
console.log("--------------------------");