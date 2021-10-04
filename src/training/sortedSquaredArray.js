
// Bruteforce is looping through the array, squaring each number then sort the array and return it.
function sortedSquaredArrayBrute(arr) {
    let squared = [];
    for (let i = 0; i < arr.length; i++) {
        squared[i] = arr[i] * arr[i];
    }
    squared.sort((a, b) => a - b);
    return squared;
}

let numbers = [-6,-4,1,2,3,5];
// let outputb4sort = [36,16,1,4,9,25];
// let output = [1,4,9,16,36,25];


// Better solution
function sortedSquaredArray(arr) {
    let result = [];
    let left = 0;
    let right = arr.length - 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (Math.abs(arr[left]) > arr[right]) {
            result[i] = arr[left] * arr[left];
            left++;
        }
        else {
            result[i] = arr[right] * arr[right];
            right--;
        }
    }
    return result;
}
console.log('squared&sorted', sortedSquaredArrayBrute(numbers));
console.log('squared&sortedBetter', sortedSquaredArray(numbers));