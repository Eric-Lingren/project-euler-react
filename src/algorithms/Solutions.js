

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