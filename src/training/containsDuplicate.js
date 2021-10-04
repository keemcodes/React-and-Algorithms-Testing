

// better on time
let containsDuplicate = (nums) => {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return true;
} 

// better on space
function containsDupe(nums) {
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) return true;
    }
    return false; 
} 