// Longest Palindromic Substring

// Brute Force...
// Generate all substrings of the string (O)n^2
// Check if given subsring is a palindrone (O)n
// Run time is (O)n^2 * (O)n = (O)n^3

// Brute Force Code Implementation...
// For loop each letter
// Inner for loop generates substring for each character
// Double inner for loop checks if substring is palindrone and keeps track of longest one.

// In-depth solution...
// There are two scenerios based on user input...
// 1). Odd input (babad)
// 2). Even input (abba)

// Theoricial Implementation for Odd
// If an input is even, we can set two pointers from the middle going out.
// Example, both bs get a pointer variable assigned and they increment outward.
// On increment, we check to make sure each pointer equals each other.

// Theoricial Implementation for Even
// 

// function longestPalindrome(s) {
//     if (s == null || s.length < 1) return "";

//     var start = 0;
//     var end = 0;

//     for (var i=0; i < s.length; i++) {
//         var len1 = expandFromMiddle(s, i, i);
//         var len2 = expandFromMiddle(s, i, i+1);
//         var len = Math.max(len1, len2);
//         if (len > end - start) {
//             start = i - ((len - 1) / 2);
//             end = i + (len / 2);
//         }
//     }
//     return s.substring(start, end + 1);
// }


// function expandFromMiddle(s, left, right) {
//     if (s == null || left > right) return 0;

//     while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
//         left--;
//         right++;
//     }
//     return right - left - 1;

// }

// function fromMiddle(s, left, right) {
//     if (s == null || left > right) return 0;

//     while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
//         left--;
//         right++;
//     }
//     return right - left - 1;
// }

// function fromMiddle2(s, left, right) {
//     if (s == null || left > right) return 0;
//     while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
//         left--;
//         right++;
//     } 
//     return right - left - 1;
// }

// function fromMiddle3(s, left, right) {
//     // handle edge case if string is empty or left is greater than right, return nothing.
//     if(s == null || left > right) return;

//     // while left is greater or equal to 0
//     // and right is less than our input length
//     // and our left char === our right char
//     while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {

//         // Move pointers outward.
//         // decrement left, increment right
//         left--;
//         right++;
//     }
//     // at end of loop, return right - left - 1
//     return right - left - 1;

// }

function fromMiddle4(s, left, right) {
    if (s == null || left > right) return;

    // A WHILE LOOP THAT EXPANDS FROM THE MIDDLE
    // While left is greater or equal to 0 and right is less than length
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}

function longestPal(s) {
    if (s == null || s.length < 1) return "";
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = fromMiddle4(s, i, i);
        let len2 = fromMiddle4(s, i, i+1);
        var len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - ((len - 1) / 2);
            end = i + (len / 2);
        }

    }
    return s.substring(start, end + 1);
}



// var log = longestPal('racecar');
// var log = longestPal('badad');
var log = longestPal('reviver');
console.log(log);




// function middleExpand(s, left, right) {
//     if (s == null || left > right) return;

//     while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
//         left--;
//         right++;
//     }
//     return right - left - 1;
// }