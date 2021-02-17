const array = [10, 0, 90, 80, 50, 0, 60];

//Create a function that will take the array and a student id (any number you want) as parameters. Use map to create a new array that stores each score in an object that includes the activity ID (first score is 0, second score 1, etc.) as well as the student ID. 
let newArray = (arr, id) => {
    return arr.map(score => {
        return {
            id: [id],
            score: score
        };
    });
};

//Create a function that will create a new array with the lowest score removed. (For this exercise if both 0s are removed that is OK.)

// create array of scores function
let arrayOfScores = arr => arr.map(obj => obj.score);

    // Did in two steps: sort array first, then remove lowest
let sortArray = function (arr){
    let arr1 = arr.sort(function(a, b){ // order objects lowest score first
        return a.score - b.score;
    });
    return arr1;
};
let removeLowest = function(arr){
    return arr.slice(1,arr.length); // new array without lowest score
};

//Create a function that will Sum the scores.
let sumScores = arr => arr.reduce((a,b) => a += b);

console.log(sumScores(array));
//Create a function that will compute the average from an array passed in.
let average = function(arr){
    let total = arr.reduce(function(a,b){
        return a += b;
    });
    return total / arr.length;    
};

//This function uses the array of objects with property of score
let zeroScoreArray = function(arr){
    let zero = arr.filter(function(obj){
        return obj.score === 0;// create array of scores function
    });
    return zero;
};

//Using the functions you have created, generate a new array with full data. Compute the average once the lowest score has been removed. And create an array of zero scores with the full data that could be provided to the learner.
let array1 = newArray(array, 's01');
console.log(array1);

let array2 = sortArray(array1);
console.log(array2);

let array3 = removeLowest(array2);
console.log(array3);

let array4 = arrayOfScores(array3);
console.log(array4);

let array5 = average(array4);
console.log(array5);

let array6 = zeroScoreArray(array1);
console.log(array6);
