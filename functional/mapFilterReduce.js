const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

//Any scores that are below 10 needs to be multiplied by 10 and the new value included.
const multiplyByTen = function(array){
    let tempArr = array.map(function(num){
        if (num < 10){
            return num *10;
        }
        return num;
    });
    return tempArr;
};
//Remove any scores that are over 100.
const removeHighScores = function(array){
    let lessThan100 = array.filter(function(num){
        return num <= 100;
    });
    return lessThan100;
};
//Remove any scores that are 0 or below.
const aboveZero = function(array){
    let tempArr = arr2.filter(function(num){
        return num > 0;
    });
    return tempArr;
};
//Sum the scores.
const totalScores = function(array){
    let sumScores = arr3.reduce(function(prev, next){
        return prev += next;
    }, 0);
    return sumScores;
};
//Provide a count for the number of scores still remaining.
const numOfScores = function(arr){
        return arr.length;
    };

let arr1 = multiplyByTen(scores);
let arr2 = removeHighScores(arr1);
let arr3 = aboveZero(arr2);
let total = totalScores(arr3);
let numberOfScores = numOfScores(arr3);

