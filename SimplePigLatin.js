function pigIt(str){
    let pigLatinWord = []
    const pigLatWord = str.split(' ') 
    pigLatWord.forEach(el => {
        let pigLatLetter = el.split('')                 //Расписать на листке последовательность
        pigLatLetter.push(pigLatLetter[0], 'ay')
        pigLatLetter.shift()
        if (el ==='!' || el ===',' || el ==='.' || el ==='?')
           { pigLatinWord.push(el) }
        else
            { pigLatinWord.push(pigLatLetter.join('')) }
    })
    return pigLatinWord
  }
  
  console.log(pigIt('Pig latin is cool !'))