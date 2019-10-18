let array = [{hi: 3},9];
Object.freeze(array);
array[0].hi = 1;
console.log(array);