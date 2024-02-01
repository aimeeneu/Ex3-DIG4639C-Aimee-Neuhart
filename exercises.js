//3-1. flattening(list)
let arrays = [[1, 2, 3], [4, 5], [6]];

export function flattening(list) {
  return list.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
  }, []);
}
console.log(flattening(arrays));

//3-2. loop(value, test, update, body)
export function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

//3-3. everyLoop(array, test)
export function everyLoop(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everyLoop([], n => n < 10));

//3-4. everySome(array, test)
export function everySome(array, test) {
  return !array.some(element => !test(element));
}

console.log(everySome([1, 3, 5], n => n < 10)); //true
console.log(everySome([2, 4, 16], n => n < 10)); //false
console.log(everySome([], n => n < 10)); //true

//i used many internet sources and examples from AI to help write this code