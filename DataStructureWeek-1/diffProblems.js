console.log("----------------------------");
// fibanocci series
function fibanocci(n) {
    const fib = [0,1];
    for(let i=2; i<n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibanocci(5));
console.log("----------------------------");

// factorial of a number
function factorial(n){
    let fact = 1;
    for(let i=1; i<=n; i++){
        fact*= i;
    }
    return fact;
}

console.log(factorial(1));
console.log("----------------------------");

// finding prime or not
function isPrimeNumber(n){
    if(n < 2)
        return false;
    for(let i=2; i<= Math.sqrt(n); i++){
        if(n%i === 0)
            return false;
    }
    return true;
}

console.log(isPrimeNumber(3));
console.log("----------------------------");

// finding power of two or not
function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2 !== 0){
            return false;
        }
        n = n/2;
    }
    return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log("----------------------------");

function isPowerOfTwoBitwise(n){
    if(n<1){
        return false;
    }
    return (n & (n-1)) === 0;
}
console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(2));
console.log(isPowerOfTwoBitwise(3));
console.log("----------------------------");

// recursive fibanocci series
function recursiveFibanocci(n) {
    if(n<2){
        return n;
    }
    return recursiveFibanocci(n-1)+recursiveFibanocci(n-2);
}

console.log(recursiveFibanocci(0));
console.log(recursiveFibanocci(1));
console.log(recursiveFibanocci(6));
console.log("----------------------------");

// recursive factorial = O(2^n)
function recursiveFactorial(n) {
    if(n === 0){
        return 1;
    }
    return n * recursiveFactorial(n-1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));
console.log("----------------------------");

// linear search = O(n)
function linearSearch(nums, target){
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([3,5,2,9,7], 2));
console.log(linearSearch([3,5,2,9,7], 7));
console.log(linearSearch([3,5,2,9,7], 8));
console.log("----------------------------");

// binary search
function binarySearch(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);

        if(target === nums[middleIndex]){
            return middleIndex;
        }

        if(target < nums[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch([-2,3,5,6,7,8,9], 8));
console.log(binarySearch([-2,3,5,6,7,8,9], 3));
console.log(binarySearch([-2,3,5,6,7,8,9], 6));
console.log("----------------------------");

// recursive binary search
function recursiveBinarySearch(nums, target) {
    return search(nums, target, 0, nums.length-1);
}

function search(nums, target, leftIndex, rightIndex) {

    if(leftIndex > rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if(target === nums[middleIndex]){
        return middleIndex;
    }

    if(target < nums[middleIndex]){
        return search(nums, target, leftIndex, middleIndex - 1);
    }else{
        return search(nums, target, middleIndex + 1, rightIndex);
    }

}
console.log(recursiveBinarySearch([6, 7, 8, 9, 10, 11], 9));
console.log(recursiveBinarySearch([6, 7, 8, 9, 10, 11], -2));
console.log(recursiveBinarySearch([6, 7, 8, 9, 10, 11], 7));
console.log("----------------------------");

