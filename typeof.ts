// Return the Type of Variable or Property
function sumOfTwo(a: number, b: number) {
    return a + b;
  }
  function loggerMethod(message) {
    console.log(message);
  }
    
  //Auto inferred from return
  type TSum1 = ReturnType<typeof sum>;
  type TLogger1 = ReturnType<typeof logger>;
  