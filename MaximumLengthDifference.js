function mxdiflg(a1, a2) {
    if ((a1.length === 0) || (a2.length === 0))
    return -1
        else {
    let arrayA1 = a1.map(el => el.length)
    let arrayA2 = a2.map(el => el.length)

    let array1Max = Math.max.apply(0, arrayA1)
    let array2Max = Math.max.apply(0, arrayA2)
    
    let array1Min = Math.min.apply(0, arrayA1)
    let array2Min = Math.min.apply(0, arrayA2)                      //1st solution

    dif1Arr = Math.abs(array1Max - array2Min)
    dif2Arr = Math.abs(array2Max - array1Min)

    return dif1Arr > dif2Arr ? dif1Arr : dif2Arr }
}


function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)                                  //2nd solution
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))