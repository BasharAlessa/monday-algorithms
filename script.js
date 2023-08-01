

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
console.log("    break")


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
console.log("    break")


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
console.log("    break")

//                  #4                  //
/*Print the elements of an array
Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. 
Your program should work with arrays of all sizes.*/
const x = [1 , 4 , 2 , 12]
for (let i=0 ; i<x.length ; i++){
    console.log (x[i])
}
console.log("    6break")

//          #5                      //
// Find Max

// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

//coding

function max(maxarr=[]){
    let maxnum=maxarr[0];
    for(let i=1 ; i<maxarr.length ; i++){
        if (maxarr[i]>maxnum){
            maxnum=maxarr[i]
        }
    }
    return maxnum
}
let maxarrA= [-3,-1,4,-10,11]
let maxarrB = max(maxarrA)
console.log(maxarrB)
console.log("    6break")

//              #6                  //
/*Get Average
Given an array X, write a program that will return the average value of all elements in the array.
For example, for array X = [2,1,3] your output should be 2.*/

let xAfrg = [2 , 1 , 3,10];
let xAfrgSum= 0;

for (let i= 0 ; i<xAfrg.length ; i++){
    xAfrgSum = xAfrg[i] + xAfrgSum
}
console.log(xAfrgSum/xAfrg.length)
console.log("    break")


//              #7                  //
/*Eliminate the Negatives
Given an array X, write a program that will remove all negative numbers and replace them with a 0. 
For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].*/

let e=[2 , -1 , 4 , -3]
for (let i = 0 ; i<x.length ; i++){
    if (e[i] < 0){
        e[i] = 0
    }
    console.log (e[i])
}
console.log("    break")


//              #8              //
/*Number to String
Write a program that takes an array of numbers and turns the negative values to strings. 
For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].*/
let s=[2 , -1 , 4 , -3]
for (let i = 0 ; i<s.length ; i++){
    if (s[i] < 0){
        s[i] = "turing"
    }
    console.log (s[i])
}
console.log("    break")
