// Return Type of Function
function sum(a: number, b: number){
  return a + b;
}
function logger(message) {
  console.log(message);
}

//Auto inferred from return
type TSum = ReturnType<typeof sum>;
type TLogger = ReturnType<typeof logger>;
