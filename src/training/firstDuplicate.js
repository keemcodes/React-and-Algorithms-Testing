function firstDuplicate(a) {
    let min_second_value = a.length;
    for ( let i = 0; i < a.length; i++) {
        for ( let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                min_second_value = Math.min(min_second_value, j);
            }
        }
    }

    if (min_second_value === a.length) return -1;
    else return a[min_second_value];
}

function firstDupWithSet(a) {
    let seen = new Set();
    for (let i = 0; i < a.length; i++) {
        if (seen.has(a[i])) {
            return a[i];
        }
        else {
            seen.add(a[i]);
        }
    }
    return -1;
}

console.log('firstDupe',firstDuplicate([2, 1, 3, 5, 3, 2]))
console.log('firstDupWithSet',firstDupWithSet([2, 1, 3, 5, 3, 2]))

// var set = new Set();
// var map = new Map();