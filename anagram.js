var isAnagram = (test, original) =>
    test.toLowerCase().split('').sort().join() === original.toLowerCase().split('').sort().join()


console.log(isAnagram("Buckethead", "DeathCubeK"))