var countdownGenerator = function (x) {
    /* your code here */
    return function() {
        var result = "";
        if(x > 0) {
            result = "T-minus " + x-- + "...";
            return result;
        } else if( x < 0 ) {
            return "Rockets already gone, bub!";
        } else if (x === 0) {
            return "Blast Off!";
        } 
    }
};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!