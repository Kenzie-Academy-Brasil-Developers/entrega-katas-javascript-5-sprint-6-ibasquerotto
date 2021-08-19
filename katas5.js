// KATAS 01 - REVERSE STRING

function reverseString(sentence){
    let reverse = []
    for (let i = sentence.length; i >= 0; i--){
        reverse.push(sentence[i])

    }
    return reverse.join('')
}  

function testReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testReverseString2() {
    let result = reverseString("1, 2, 3");
    let expected = "321";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }



// KATAS 02 - REVERSE SENTENCE

function reverseSentence(sentence){
    let reverse = []
    let newSentence = sentence.split(" ")
    
    for (let i = newSentence.length; i >= 0; i--){
        reverse.push(newSentence[i])
    }
    reverse = reverse.join(' ')
    return reverse
}

function testReverseSentence1(){
    let result = reverseSentence("bob likes dogs")
    let expected = "dogs likes bob"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseSentence2(){
    let result = reverseSentence("JavaScript é legal")
    let expected = "legal é JavaScript"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



// KATAS 03 - MINIMUM VALUE

const array1 = [1, 2, 5, 0, 4, 7, 9]
const array2 = [4, -1, 8, 2, 1, 5, 3]

function minimumValue(numbers){
    aux = numbers
    result = aux[0]
    for (let i = 1; i < aux.length; i++){
        if (aux[i] <= result){
            result = aux[i]
        }
    }
    return result
}

function testMinimumValue1(){
    let result = minimumValue(array1)
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2(){
    let result = minimumValue(array2)
    let expected = -1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}




// KATAS 04 - MAXIMUM VALUE

//const array1 = [1, 2, 5, 0, 4, 7, 9]
//const array2 = [4, -1, 8, 2, 1, 5, 3]

function maximumValue(numbers){
    aux = numbers
    result = aux[0]
    for (let i = 1; i < aux.length; i++){
        if (aux[i] >= result){
            result = aux[i]
        }
    }
    return result
}

function testMaximumValue1(){
    let result = maximumValue(array1)
    let expected = 9;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2(){
    let result = maximumValue(array2)
    let expected = 8;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



//KATAS 05 - CALCULATE REMAINDER

function calculateRemainder(number1, number2){
    return number1 % number2
}

function testCalculateRemainder1() {
    let result = calculateRemainder(2, 2)
    let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2() {
    let result = calculateRemainder(3, 2)
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



//KATAS 06 - DISTINCT VALUES

function distinctValues(values){
    let result = []
    
    for (let i = 0; i < values.length; i++){
       if (result.indexOf(values[i]) === -1){
           if (values[i] !== " "){
                result.push(values[i])
           }
       }
    }

        return result.join(" ")

}

function testDistinctValues1(){
    let result = distinctValues("1 3 5 3 7 3 1 1 5")
    let expected = "1 3 5 7"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


function testDistinctValues2(){
    let result = distinctValues("0 1 1 2 3 5 8 1 3 2 1")
    let expected = "0 1 2 3 5 8"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



//KATAS 07 - COUNT VALUES

function countValues(sentence){

    let charCounts = {};
    let newSentence = sentence.split(" ")
    let result = []

    for (let i = 0; i < newSentence.length; i++) {
        let currentChar = newSentence[i];
        if(charCounts[currentChar] === undefined){
            charCounts[currentChar] = 1
        }
        else{
            charCounts[currentChar] += 1
        }
    }
    
    for (let value in charCounts){
         result.push((`${value}(${charCounts[value]})`))
    }
    return result
}

function testCountValues1(){
    let result = countValues("1 3 5 3 7 3 1 1 5")
    let expected = "1(3), 3(3), 5(2), 7(1)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


function testCountValues1(){
    let result = countValues("A A B A D C B C A C D C")
    let expected = "A(4), B(2), C(4), D(2)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}




//KATAS 8 - 

/*
.Escreva duas funções de teste unitário chamadas testEvaluateExpression1 e testEvaluateExpression2. 
Em seguida, escreva uma função chamada evaluateExpression que receberá dois parâmetros:

   >Uma string: Com uma expressão a ser avaliada. Ex: `"a + b + c - d"`;
   
   >Um objeto: Com valores que substituira as incógnitas da expressão. Ex: `{a: 1, b: 7, c: 3, d: 14}`.

O resultado esperado da função `evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14})` seria -3.

Por exemplo, um teste unitário para o 8º kata poderia se parecer com isso:

function testEvaluateExpression1() {
   let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
   let expected = -3
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

*/

