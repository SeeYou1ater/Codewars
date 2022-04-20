function longest(s1, s2) {
    let setArray = [...new Set(s1+s2)]
    return setArray.sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))