// function* foo(index) {
//   while (index < 2) {
//     yield index;
//     index++;
//   }
// }

// const iterator = foo(0);

// console.log(iterator.next().value);
// // expected output: 0

// console.log(iterator.next().value);
// expected output: 1

function* doStuff(value) {
  yield value + 1;
  yield (value * 3);
  return value;
}

const iterator = doStuff(1);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
