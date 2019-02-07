// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
    arr.forEach(function(name, index) {
      if (name === "Waldo") {
        found(index);   // execute callback
      }
    });
  }
  
  function actionWhenFound(index) {

    console.log("Found Waldo at index" + " " + index + "!");
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// Modify the callback function to print out "Found Waldo at index 2!"  