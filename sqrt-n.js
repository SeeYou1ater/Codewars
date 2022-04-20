var isSquare = function(n){
    return (Math.pow(Math.round(Math.sqrt(n)), 2) === n) // 1nd solution
  }

  console.log(isSquare(83))

  function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;     // 2ns solution
  }
