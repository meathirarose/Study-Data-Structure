function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        let middle = Math.floor((left + right)/2);
        if(target === nums[middle]){
            return middle;
        }
        if(target < nums[middle]){
            right = middle - 1;
        }else{ 
            left = middle + 1;
        }
    }
    return null;
}

console.log(binarySearch([2,4,6,7,8,9,10], 6));