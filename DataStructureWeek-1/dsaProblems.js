
// checking palindrome or not
const isPalidrome = (number) => {
    return number === +number.toString().split("").reverse().join("");
}
console.log("p1",isPalidrome(121));

// adding sum of two numbers - target sum----------------------------
// complexity 
// time = O(n^2)
// space = O(1)
const sumOfTwoNumbers = (target) => {
    const array = [3,5,6,2,7,4];
    const answer = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i]+array[j] === target){
                answer.push(array[i], array[j]);
                return answer; 
            }
        }
    }
    return [];
} 
console.log("p2",sumOfTwoNumbers(10));

// complexity - O(n)TS
const sumOfTwo = (nums, target) => {

    const map = new Map();
    for(let i = 0; i<nums.length; i++){
        const balance = target - nums[i];
        if(map.has(balance)){
            return [balance, nums[i]];                                                                  
        }
        map.set(nums[i], i);
    }
    return [];
}
console.log("p3",sumOfTwo([2,5,4,7,4,3], 10));

// rearrange numbers----------------------------------------------
// complexity - O(n)TS
const sameNumbers = (nums, target) => {
    const answer = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==target){
            answer.push(nums[i]);
        }
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i]===target){
            answer.push(nums[i]);
        }
    }
    return answer;
}
console.log("p4",sameNumbers([6,1,6,8,10,4,11,6,3,2,6], 6));

// fibanocci series -------------------------------------------
// complexity - O(n)TS
const fibinocciSeries1 = (n) => {
    const series = [0,1];
    for(let i=2; i<=n; i++){
        series.push(series[i-1]+series[i-2]);
    }
    return series;
}
console.log("p5",fibinocciSeries1(6));

const fibinocciSeries2 = (n) => {
    if(n<=1)
        return n;
    return fibinocciSeries2(n-1) + fibinocciSeries2(n-2);
}
console.log("p6",fibinocciSeries2(6));

