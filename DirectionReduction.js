function dirReduc(arr){
    let Arr = []
    let str = arr.join(' ')
    console.log(str)
    let repStr = str
    let lengthArr = repStr.split(' ').length
    for ( i = 0 ; i < lengthArr ; i++)
    repStr = repStr
        .replace('WEST EAST', '').replace(/\s+/g, ' ')
        .replace('NORTH SOUTH', '').replace(/\s+/g, ' ')
        .replace('EAST WEST', '').replace(/\s+/g, ' ')
        .replace('SOUTH NORTH', '').replace(/\s+/g, ' ')
    Arr = repStr.trim().split(' ')
        if ( Arr[0] === '') {
            return Arr.join('').split('')
        } else return Arr
  }

console.log(dirReduc(["NORTH", 'WEST', "SOUTH", 'WEST', 'NORTH', 'SOUTH', 'EAST']))