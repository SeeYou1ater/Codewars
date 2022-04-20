function solution(number){
    const maxNumber = number
    let numArray = []
    const readyArray = []
    for (i=1 ; i<maxNumber ; i++) {
        numArray.push(i)
    }
    // Массив получен выше до определённого числа
    numArray.map( el => {
        if ( el < 0 ) 
           { readyArray.push(0) }
        else if ( (el % 3 == 0) || (el % 5 == 0) )
            { readyArray.push(el) }
    })
    return readyArray.reduce((sum, current) => {
        return sum + current
    }, 0)
}


console.log(solution(23))