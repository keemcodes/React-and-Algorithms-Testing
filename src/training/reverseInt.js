function reverseInt(x) {
    const isNegative = x < 0;
    x = Math.abs(x);
    let rev = 0;
    while (x > 0) {
        const pop = x % 10;
        x = Math.floor(x / 10);
        rev *= 10;
        rev += pop;
    }
    if (rev > 2**31) return 0;
    return isNegative ? rev * -1 : rev
}
// console.log(reverseInt(2023))
function twoSumWithMap(nums, target) {
    let map = new Map();
    let total;
    for (let i = 0; i < nums.length; i++) {
        total = target - nums[i];
        if (map.has(total)) {
            return [map.get(total), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
function reverseKeem(x) {
    const isNegative = x < 0;
    x = Math.abs(x);
    let rev = 0;
    while (x > 0) {
        // const pop = x % 10;
        // x /= 10;
        // rev = rev * 10 + pop;
        // const pop = x % 10;
        // x = Math.floor(x / 10);
        // rev *= 10;
        // rev += pop;
        const pop = x % 10;
        rev = rev * 10 + pop
        // x /= 10|0
        x = Math.floor(x / 10);     
    }
    if (rev > 2**31) return 0;
    return isNegative ? rev * -1 : rev
}
// console.log(reverseKeem(2023))

function reverseKeem2(x) {
    // const isNegative = x < 0;
    let abs = Math.abs(x);
    let rev = 0;
    while (abs > 0) {
        if (rev > 2**31) return 0;
        const pop = abs % 10;
        rev = rev * 10 + pop
        abs = Math.floor(abs / 10);     
    }
    return rev * Math.sign(x)
}
console.log(reverseKeem2(3202322222))

function reverseJS(x) {
    // This is a neat JS trick.
    // Absolute the value math.abs method
    // Convert to string to toString method
    // Split string into array with split('') method
    // reverse array with reverse method
    // convert array back to string with join method
    const absReversed = Math.abs(x).toString().split('').reverse().join('');
    
    // Check if number is out of bounds, since we used abs, we only have to check upper bound.
    if (absReversed > 2**31) return 0;
    
    // add the sign of the input to our reversed value, since we took it away when we need math.abs()
    return absReversed * Math.sign(x);
};
// console.log(reverseInt(202))
