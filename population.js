function nbYear(p0, percent, aug, p) {
    let count = 0  
    while (p0 < p) {
        p0 += p0 * (percent/100) + aug
        p0 = Math.floor(p0)
        count += 1
      }
    return count
  }

console.log(nbYear (1000, 2, 50, 1214))