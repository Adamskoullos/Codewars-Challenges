// Return the sum of all positive numbers


// Using standard for loop

function positiveSum(arr) {
  let sum =  0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        sum += arr[i];
    }
  }
  return sum;
}

// For Of Loop

function positiveSum(arr){
    let sum = 0;
    for(let i of arr){
        if(arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([-1,2,3,4,-5]));
