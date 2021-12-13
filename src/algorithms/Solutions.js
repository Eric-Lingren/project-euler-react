

export const Solution1 = () => {
    let numbersArr = []
    for (let i = 0; i < 1000; i++){
        if(i % 5 === 0) numbersArr.push(i)
        if(i % 3 === 0) numbersArr.push(i)
    }
    const result = numbersArr.reduce((total, number) => total + number)
    return result
}



export const Solution2 = () => {
    let fibArr = [1, 2]
    let result = 0

    while(fibArr[fibArr.length - 1] < 4000000){
        let lastNumber = fibArr[fibArr.length - 1]
        let secondToLastNumber = fibArr[fibArr.length - 2]
        let nextNumber = lastNumber + secondToLastNumber
        fibArr.push(nextNumber)
            if(nextNumber % 2 === 0 ){
                result += nextNumber
            } 
    }
    return result
}



export const Solution3 = () => {
    let num = 600851475143
    let primeFactors = [];

    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }
    
    let sqrtNum = Math.sqrt(num);

    for (let i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) primeFactors.push(num)
    const result = primeFactors.pop()
    return result
}



export const Solution4 = () => {
    let largestProduct = {
        num1 : 0,
        num2 : 0,
        product: 0
    }

    for(let i = 999; i > 99; i--){
        for(let j = 999; j > 99; j--){
            let product = i * j
            let productString = product.toString()
            let reversedProduct = product.toString().split("").reverse().join("")
            if(productString === reversedProduct && product > largestProduct.product){
                largestProduct = {
                    num1: i,
                    num2: j,
                    product: product
                }
            }
        }
    }
    const result = largestProduct.product
    return result
}



export const Solution5 = () => {
    let numberFound = false
    let increment = 20;
    let result = 0
    while(!numberFound){
        increment +=20
        if (increment % 19 === 0 && increment % 18 === 0 && increment % 17 === 0 && increment % 16 === 0 && increment % 15 === 0 &&     increment % 14 === 0 && increment % 13 === 0 && increment % 12 === 0  && increment % 11 === 0 ){
            result = increment
            numberFound = true
        }
    }
    return result
}



export const Solution6 = () => {
    let sumOfSquares = 0
    let sums = 0

    for(let i = 1; i < 101; i++){
        sumOfSquares += i*i
        sums += i
    }
    const squareOfSums = sums * sums
    const result = squareOfSums - sumOfSquares
    return result
}



export const Solution7 = () => {
    let primeNumbersArray = []
    let num = 2
    while(primeNumbersArray.length < 10000){
        num++
        let checkingNumber = true
        let increment = 2
        while(checkingNumber){
            if (num === increment){ // number is prime
                primeNumbersArray.push(num)
                checkingNumber = false
            } else if (num % increment === 0){ // number is not prime and break the checks
                checkingNumber = false
            }
            increment++
        }
    }
    let result = primeNumbersArray.pop()
    return result
}


export const Solution8 = () => {
    let num = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450'
    let newNum = num.split('')

    let largestProduct = 0
    let currentProduct = 0

    //  This solution takes an average of < 2 ms :
    for(let i = 0; i < newNum.length- 13; i++){
        currentProduct = parseInt(newNum[i]) * parseInt(newNum[i+1]) *parseInt(newNum[i+2]) *parseInt(newNum[i+3]) *parseInt(newNum[i+4]) *parseInt(newNum[i+5]) *parseInt(newNum[i+6]) *parseInt(newNum[i+7]) *parseInt(newNum[i+8]) *parseInt(newNum[i+9]) *parseInt(newNum[i+10]) *parseInt(newNum[i+11]) *parseInt(newNum[i+12]) 
        
        if(currentProduct > largestProduct) largestProduct = currentProduct
    }
    //  This alternatesolution takes an average of 7 ms :
    // for(let i = 0; i < num.length; i++){
    //     const nums = [...num.slice(i, i + 12)]
    //     const sum = nums.reduce((final, num) => final * parseInt(num), 1)
    //     if(sum > largestProduct){
    //         largestProduct = sum
    //     }
    // }
    const result = largestProduct
    return result
}


export const Solution9 = () => {
    let tripletProduct = null
    let startingValue = 500
    for(let c = startingValue; c > 2; c--){
        let c2 = c*c
        for(let b = c-1; b > 1; b--){
            let b2 = b*b
            for(let a = b-1; a > 0; a--){
                let a2 = a*a
                if(a2 + b2 === c2){
                    let tripletSum = a+b+c
                    if(tripletSum === 1000) {
                        tripletProduct = a*b*c
                        let result = tripletProduct
                        return result
                    }
                }
            }
        }
    }
}



export const Solution10 = () => {
    //* Works but is very inefficent... O(n^2)
    //* slows to a crawl after 250k numbers
    //* 500k ints takes 110 seconds
    //* 1M ints takes 432 seconds
    // let primeSum = 2
    // let currentNum = 3
    // const totalNums = 1000000
    // while(currentNum < totalNums){
    //     if(currentNum % 10000 === 0) console.log(currentNum)
    //     for (let i = currentNum - 1; i >= 2; i--) {
    //         if(currentNum % i === 0)  break;
    //         if(i===2) primeSum += currentNum
    //     }
    //     currentNum++
    // }
    // const result = primeSum
    // return result


    //* Sieve of Eratosthenes is much more efficient to solve this problem -  O(N log (log N)
    const n = 2000000
    let array = [] 
    let upperLimit = Math.sqrt(n)
    let primeSums = 0

    //* Create starting array with all booleans being set to 'prime = true'
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    //* Remove multiples of primes starting from 2, 3, 5, 7, etc
    for (let i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    //* All array indexes left to true are primes, add them to the sum
    for (let i = 2; i < n; i++) {
        if(array[i]) primeSums += i
    }

    const result = primeSums
    return result
}



export const Solution11 = () => {
    const startingNums = '08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48'
    const grid = []
    //* Build 2d matrix grid:
    let startingNumsArray = startingNums.split(' ')
    let tempArr  = []
    for(let i = 1; i <= startingNumsArray.length+1; i++){
        tempArr.push(startingNumsArray[i-1])
        if(i % 20 === 0) {
            grid.push(tempArr)
            tempArr = []
        }
    }

    let greatestProduct = 0

    //* Loop though each horizontal row of the grid
    for(let i = 0; i< grid.length; i++){

        //* Start at the last int of the row and work backwards
        for(let j = 19; j >= 0; j--){
            let tempSum = 0

            if(j >= 3){ //* enough numbers to check horizontals
                //* Find greatest horizontal series product
                tempSum = parseInt(grid[i][j]) * parseInt(grid[i][j-1]) * parseInt(grid[i][j-2]) * parseInt(grid[i][j-3])
                if(tempSum > greatestProduct) greatestProduct = tempSum
            }

            if(i < 17){ //* enough numbers to check verticals
                //* Find greatest vertical series product
                tempSum = parseInt(grid[i][j]) * parseInt(grid[i+1][j]) * parseInt(grid[i+2][j]) * parseInt(grid[i+3][j])
                if(tempSum > greatestProduct) greatestProduct = tempSum
            }

            if(i >=3 && i < 17 && j <= 16 && j >= 3){ //* enough numbers to check diagonals
                //* check top right diagonal
                tempSum = parseInt(grid[i][j]) * parseInt(grid[i-1][j+1]) * parseInt(grid[i-2][j+2]) * parseInt(grid[i-3][j+3])
                if(tempSum > greatestProduct) greatestProduct = tempSum
                //* check top left diagonal
                tempSum = parseInt(grid[i][j]) * parseInt(grid[i-1][j-1]) * parseInt(grid[i-2][j-2]) * parseInt(grid[i-3][j-3])
                if(tempSum > greatestProduct) greatestProduct = tempSum
                //* check bottom left diagonal
                tempSum = parseInt(grid[i][j]) * parseInt(grid[i+1][j-1]) * parseInt(grid[i+2][j-2]) * parseInt(grid[i+3][j-3])
                if(tempSum > greatestProduct) greatestProduct = tempSum
                //* check bottom right diagonal
                tempSum = parseInt(grid[i][j]) * parseInt(grid[i+1][j+1]) * parseInt(grid[i+2][j+2]) * parseInt(grid[i+3][j+3])
                if(tempSum > greatestProduct) greatestProduct = tempSum
            }
        }
    }

    const result = greatestProduct
    return result
}


const getAllPrimes = (n) => {
    let array = [] 
    let upperLimit = Math.sqrt(n)
    let primeNumbers = []

    //* Create starting array with all booleans being set to 'prime = true'
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    //* Remove multiples of primes starting from 2, 3, 5, 7, etc
    for (let i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    //* All array indexes left to true are primes, add them to the sum
    for (let i = 2; i < n; i++) {
        if(array[i]) primeNumbers.push(i)
    }

    return primeNumbers
}

//* Integer factorization with the congruence of squares seems to be the most efficient way of solving this
export const Solution12 = () => {
    //! The below code works but is only efficent up to numbers with 300 factors
    const requestedFactors = 100
    let count = 3
    let startingNum = 3  //* (triangle value)
    let totalFactorsCount = 0

    while(true){
        startingNum += count
        //* Get all the prime numbers
        const allPrimes = getAllPrimes(startingNum)

        //* Obtain the Prime factors of the Prime numbers
        let primeFactors = [startingNum]
        for(let i = 0; i < allPrimes.length; i++){
            let divisor = startingNum
            let primeNum = allPrimes[i]
            if(primeNum * primeNum > startingNum) break; // all numbers greater than half the starting number will never be a factor
            while(divisor % primeNum === 0){
                divisor = divisor / primeNum // Divide result by same prime factor until no more are found
                primeFactors.push(divisor)
            }
            // repeat with all prime factors
        }

        //** Gets all the factors of the Prime Factors
        let factors = [1, ...primeFactors ]
        for(let i=0; i < primeFactors.length; i++){
            let num = primeFactors[i]
            // Only need to go to the square root since that will include all factors
            for(let j = 2; j <= Math.sqrt(num); j++){
                if (num % j === 0){
                    let jFactor = num /j
                    if(!factors.includes(j))  factors.push(j)
                    if(startingNum % jFactor === 0){
                        if(!factors.includes(jFactor)) factors.push(jFactor)
                    }
                }
            }
        }

        totalFactorsCount = factors.length
        if(totalFactorsCount > requestedFactors) break;
        count++
    }
    return startingNum
}