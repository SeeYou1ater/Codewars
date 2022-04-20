function highAndlow(numbers) {
    let intArr = []
    let max
    let min
    numbers.split(' ').forEach ( el => {
        intArr.push(parseInt(el))                          //1st solution
        max = Math.max.apply(null, intArr)
        min = Math.min.apply(null, intArr)
    })
    return `${max} ${min}`
}

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);  //2nd solution
  }

console.log(highAndlow('1 2 3 4 5'))