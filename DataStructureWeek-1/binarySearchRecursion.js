function binarySearchRecursion(nums, target){
    return search(nums, target, 0, nums.length - 1);
}

function search(nums, target, left, right) {
    if(left > right){
        return -1;
    }

    let middle = Math.floor((left + right)/2);    
    if(target === nums[middle]){
        return middle;
    }

    if(target < nums[middle]) {
        return search(nums, target, left, middle-1);
    }else{
        return search(nums, target, middle+1, right);
    }
}

console.log(binarySearchRecursion([1,2,3,4,5,6,7,8],5));