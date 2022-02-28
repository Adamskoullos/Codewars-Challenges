/*
High level problem:



Break problem down:

1. 

2. 

3. 

*/ // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("Testing !!");

// const numbers = [175, 50, 25, 33];

// const result = numbers.reduce((total, num) => total + num, 0);

const people = [
  { name: "dave", age: 20 },
  { name: "don", age: 20 },
  { name: "derek", age: 35 },
  { name: "dell", age: 35 },
  { name: "dan", age: 30 },
];

const result = people.reduce((groupedByAge, person) => {
  const age = person.age;
  if (!groupedByAge[age]) groupedByAge[age] = [];
  groupedByAge[age].push(person);
  return groupedByAge;
}, {});

console.log(result);
