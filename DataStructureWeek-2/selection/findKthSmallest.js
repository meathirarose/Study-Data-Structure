function findKthSmallest(nums, k) {

    for (let i = 0; i < k; i++) {
        let minIndex = i;
        for (let j = i+1; j < nums.length; j++) {
            if(nums[j] < nums[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
        }
    }
    return nums[k - 1];
    
}

const nums = [2,4,3,1,6,7,5,9];//[1,2,3,4,5,6,7,9]
const k = 2;
console.log(findKthSmallest(nums, k));