
// Brute force solution
// Please reference video link from excel document. Nick provides a great explanation

// Essentially, we loop through input a and compare each input b value to see if we find our total. (nested forloop)
function sumOfTwo(a, b, v) {
    for (let i = 0; i < a.length; i++) {
        let difference = v - a[i];
        for (let j = 0; j < b.length; j++) {
            if (b[j] === difference) {
                return true;
            }
        }
    }
    return false;
}

function sumOfTwoSet(a, b, v) {
    let set = new Set();
    for (let i = 0; i < a.length; i++) {
        let difference = v - a[i];
        set.add(difference);
    }
    for (let i = 0; i < b.length; i++) {
        if(set.has(b[i])) {
            return true;
        }
    }
    return false;
}

// let inputa = [1, 2, 3];
// let inputb = [10, 20, 30];
// let v = 42;