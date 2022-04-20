var isSquare = function(n){
    if (Math.round(Math.sqrt(n)) === n) 
      return true
    else
      return false; // fix me
  }

  console.log(isSquare(25))

  let k = 25

  let N = Math.sqrt(k)

  let S = Math.round(N)

  let J = Math.pow(S)

  console.log(N, S, J)