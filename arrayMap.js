var words = ["ground", "control", "to", "major", "tom"];

function map(words, find) {
    var array = new Array(words.length);
    for(var i = 0 ; i < words.length ; i++) {
      array[i] = find(words[i]);
    }
    return array;
  }
  function findLength(word) {
    return word.length;
  }
  console.log(map(words,findLength));
  
  
  //2nd function
  function mapToUpperCase(words, upperCase) {
    var array = new Array(words.length);
    for(var i = 0 ; i < words.length ; i++) {
      array[i] = upperCase(words[i]);
    }
    return array;
  }
  function toUpper(word) {
    return word.toUpperCase();
  }
  console.log(mapToUpperCase(words, toUpper));
  
  //3rd function
  function mapSRJ(words, sRJ) {
    var array = new Array(words.length);
    for(var i = 0 ; i < words.length ; i++) {
      array[i] = splitReverseJoin(words[i]);
    }
    return array;
  }
  function splitReverseJoin(word){
    return word.split('').reverse().join('');
  }
  console.log(mapSRJ(words, splitReverseJoin));
