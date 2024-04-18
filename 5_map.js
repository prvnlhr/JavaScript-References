// let usermap = new Map();

// usermap.set("Harry", 24);
// usermap.set("hermoine", 23);
// usermap.set("Ron", 24);

// console.log(usermap);

// for (let entry of usermap.entries()) {
//   console.log(entry);
// }

// Example using Map
let map = new Map();

// Creating a key object
let key = { id: 1 };

// Adding key-value pair to the Map
map.set(key, "Value associated with key");
console.log(map);

// Removing the reference to the key object
key = null;
console.log(map);

// Attempting to access the Map
console.log("Map size:", map.size); // Output: 1
console.log("Map value:", map.get(key)); // Output: undefined (key is no longer reachable)

// Example using WeakMap
let weakMap = new WeakMap();

// Creating a key object
let weakKey = { id: 1 };

// Adding key-value pair to the WeakMap
weakMap.set(weakKey, "Value associated with weakKey");

// Removing the reference to the key object
weakKey = null;

// Attempting to access the WeakMap
// Note: Since weakKey is no longer reachable, the entry in the WeakMap may be garbage collected.
console.log("WeakMap size:", weakMap.size); // Output: undefined (WeakMap does not have a size property)
console.log("WeakMap value:", weakMap.get(weakKey)); // Output: undefined (key has been garbage collected)
