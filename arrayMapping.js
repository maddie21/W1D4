var input = [ 
    {x: 3, y: 4},
    {x: 12, y: 5}, 
    {x: 8, y: 15}
  ];
  
  var result = input.map(obj =>{ 
     var rObj = {};
     var z = (obj.x * obj.x) + (obj.y * obj.y); 
     rObj[obj.x] = Math.sqrt(z);
     return rObj;
  });
  
  console.log("result is ", result);
  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2]);