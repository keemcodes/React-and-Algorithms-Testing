function A(some) {
    console.log("A", some);
}

function B(some) {
    console.log("B", some);
}
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, A);
myCalculator(5, 6, B);

function Log(some) {
    console.log("Log", some);
}
  
async function myFunction() {return "Hello";}

myFunction().then(
    function(value) {Log(value);},
    function(error) {Log(error);}
);