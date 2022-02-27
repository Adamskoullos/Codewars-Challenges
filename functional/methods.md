## Methods

#### Array Methods

`Immutable`

- [map](#map)
- [flat](#flat)
- [reduce](#reduce)
- [slice](#slice)
- [filter](#filter)
- [find](#find)
- [findIndex](#findIndex)

`Mutable`

- [splice](#splice)
- [sort](#sort)

#### String Methods

`Immutable`

- [slice](#slice)

`Mutable`

- [replace and replaceAll](#replace-and-replaceAll)
- [toLowercase and toUpperCase](#toLowercase-and-toUpperCase)
- [Remove whitespace](#Remove-whitespace)

#### Search

- [search](#search)

---

## Array Methods

```js
array.join(""); // Turn to string - can specify the separator
array.toString(); // Turn to string
```

`Immutable`

#### map

```js
const arrayOfScores = (arr) => arr.map((obj) => obj.score);

const scores = arrayOfScore(array);
```

```js
const multiplyByTen = (array) => array.map((num) => {
        return num < 10 ? num * 10 : num;
    });
};

const randomArray = multiplyByTen(scores);
```

#### flat

```js
const flatArray = nestedArray.flat(Infinity);
```

#### reduce

```js
// code
```

#### slice

```js
array.slice(indexFrom, indexTo);
```

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 2);
console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log(citrus); // ['Orange']
```

#### filter

Returns new array

```js
const ages = [32, 33, 16, 40];
const result = ages.filter((num) => num > 20);
```

#### find

Returns first matching item

```js
const ages = [32, 33, 16, 40];
const result = ages.find((num) => num === 16);
// 16
```

#### findIndex

Simlar to above but returns the index of the first matching item

```js
const ages = [32, 33, 16, 40];
const result = ages.findIndex((num) => num === 16);
// 2
```

`Mutable`

#### splice

```js
fruits.splice(indexToCutInto, numberOfIndexesToRemove, ItemToBeAdded);
```

> To inject items without removing: second argument to be `0`

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango']

const newArr = fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'Kiwi'] Mutates
console.log(newArr); // ['Apple', 'Mango']
```

Remove first item:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits); // ['Orange', 'Apple', 'Mango']
```

#### sort

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

fruits.sort().reverse();
```

```js
const numbers = [{ id: 9 }, { id: 4 }, { id: 6 }, { id: 31 }];
numbers.sort((a, b) => a.id - b.id);
```

```js
const array = [{ name: "a" }, { name: "k" }, { name: "e" }, { name: "g" }];
array.sort((a, b) => {
  let aName = a.name.toLowerCase();
  let bName = b.name.toLowerCase();

  return aName < bName ? -1 : aName > bName ? 1 : 0;
});
// [ {"name": "a"},{"name": "e"},{"name": "g"},{"name": "k"}]
```

---

## String Methods

```js
string.split(""); // Turns string to array
string.split(" "); // Can be split by space
string.split(","); // Can be split at comma's or other characters
```

`Immutable`

#### Slice

```js
const string = "abcdefghijklm";

const part = string.slice(0, 3);

// 'abc'
```

`Mutable`

#### replace and replaceAll

```js
string.replace("old", "new"); // replaces first instance

string.replaceAll("old", "new"); // replaces all instances
```

#### toLowercase and toUpperCase

```js
string.toUpperCase();
```

#### Remove whitespace

```js
string.trim();
```

#### search

```js
string.search("subject"); // cannot take 2nd argument start position
string.indexof("subject"); // cannot take regEx
// Both return index of first letter S or -1 if not
```

```js
string.lastindexof();
```

```js
string.match(/ain/g);
// returns a string with every instance separated by a comma
```

```js
string.includes("subject");
// returns boolean
```

```js
string.endsWith("subject");
string.startsWith("subject");
// returns boolean
```
