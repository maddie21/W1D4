var words = ["ground", "control", "to", "major", "tom"];

// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });

function mapLength(words) {
    var array = new Array(words.length);
    for(var i = 0; i < words.length; i++) {
        array[i] = words[i].length;
    }
    return array;  
}
console.log(mapLength(words));

// var array = words.map(function (words) {
//   var array = new Array(words.length);
//   for(var i = 0 ; i < words.length ; i++) {
//     array[i] = words[i].length;
//   }
//   return array;
// });

function maptoUpperCase(words) {
    var array = new Array(words.length);
    for(var i = 0; i < words.length; i++) {
        array[i] = words[i].toUpperCase();
    }
    return array;  
}
console.log(maptoUpperCase(words));

function srj(words) {
    var array = new Array(words.length);
    for(var i = 0; i < words.length; i++) {
        array[i] = words[i].split('').reverse().join('');
    }
    return array;  
}
console.log(srj(words));
