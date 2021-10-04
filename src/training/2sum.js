// twoSum

// Given an array of integers, return indices of the two numbers such that they add up to a specfic target.

// Theoricial Implementation 
// Iterate through array
// On each iteration, loop over remaining elements checking if the element equals the target minus our current outter loop element
// If they match, return their positions in an array. 

// Brute Force Code Implementation
function twoSum(nums, target) {

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var complement = target - nums[i];

            if (nums[j] === complement) {
                // return new nums[] {i, j};
                return nums = [i, j];
            }
        }
    }
    return [];
}

// function twoSumMap(nums, target) {
//     let numberMap = new Map();
//     var el;
//     for (var i = 0; i < nums.length; i++) {
//         el = nums[i];
//         if (numberMap.has(target - el)) {

//             return [i, numberMap.get(target - el)];
//         }
//         else {
//             numberMap.set(el, i);
//         } 
//     }
//     return [];
// }

// Looping array is o(n)
// looking up and setting hashmap is both o(1)
// o(n) + o(1) + o(1) = o(n)
function twoSumMapp(nums, target) {
    let map = new Map();
    let complement;
    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// function nickMap(nums, target) {
//     let map = new Map();
//     let complement;
//     for (let i = 0; i < nums.length; i++) {
//         complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return "nothing found";
// }

function keemMap(nums, target) {
    let map = new Map();
    let complement;
    for (var i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

function keemMap2(nums, target) {
    let map = new Map();
    let complement;
    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

var numbers = [2, 7, 11, 15];
console.log('bruteMap', twoSum(numbers, 18));
// console.log('geeksMap', twoSumMap(numbers, 18));
console.log('twoSumpMap', twoSumMapp(numbers, 18));
// console.log('nickMapTrue', nickMap(numbers, 18));
console.log('keemMap', keemMap(numbers, 18));
console.log('keemMap2', keemMap2(numbers, 18));

function keemsMap3(nums, target) {
    // First we initilize a map
    let map = new Map();
    // we initilize total
    let total;

    // then we loop over the array
    for (let i = 0; i < nums.length; i++) {
        // calculate total in loop.
        total = target - nums[i];

        // check if the total is in the map
        if (map.has(total)) {
            // if it does, return it
            return [map.get(total), i];
        }
        // set key value pairs on each iteration
        map.set(nums[i], i);
    }
    return [];

}
console.log('keemMap3', keemsMap3(numbers, 17));


function twoSumWithMap(nums, target) {
    let map = new Map();
    let total;
    for (let i = 0; i < nums.length; i++) {
        total = target - nums[i];
        map.set(nums[i], i);
        if (map.has(total)) {
            return [map.get(total), i];
        }
    }
    return [];
}
twoSumWithMap(numbers)
function twoSumForSortedArray(nums, target) {
    let a = 0;
    let b = nums.length - 1;
    let sum;

    while (a <= b) {
        sum = nums[a] - nums[b];

        if (sum > target) {
            b -= 1;
        }
        else if (sum < target) {
            a += 1;
        }
        else {
            return [a+1, b+1];
        }
    }
    return [a+1, b+1];

}

// console.log('2sumw/Map', twoSumWithMap(numbers, 17));


