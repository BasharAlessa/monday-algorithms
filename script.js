

//              #1              //
/*Print Odd Numbers 1 - 135
Write a program using JavaScript that will print all the odd numbers from 1 to 135.*/
//Pseudocode
let a = 1;
console.log(a); 
let b = 2;
console.log(b)
//...
//coding 
let num = 1;
while(num <= 135) {
    console.log(num)
    num=num + 1
}


//              #2                 //
/* Print Odd Numbers 1 - 135
Write a program using JavaScript that will print all the odd numbers from 1 to 135.*/
//Pseudocode
let aa=2
console.log(aa)
let bb = 4
console.log(bb)
//...
//coding
let oddNum = 1
while (oddNum <=135){
    if(oddNum % 2 !==0){
        console.log(oddNum);
    }
    oddNum = oddNum + 1

}

//            #3                  //
/*Sum of Printed Numbers
Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far*/
//Pseudocode
// let aNumSum = 1
// let bNumSum = aNumSum + 1
// console.log ( "Number is:" + aNumSum + " Sum: " +(aNumSum + aNumSum) )

//..
//coding
let numSumNum = 0;
let numSum = 0

while (numSumNum <= 135){
    console.log("Number is: " + numSumNum + " Sum:" + (numSum))
    numSumNum = numSumNum + 1
    numSum =  numSumNum + numSum
}
//note for ibinu
//                  #4                  //
/*Print the elements of an array
Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. 
Your program should work with arrays of all sizes.*/
const x = [1 , 4 , 2 , 12]
for (let i=0 ; i<x.length ; i++){
    console.log (x[i])
}
