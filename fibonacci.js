/** a simple js code for fibonacci series: adding the even values of the series

to excute the code run : node --max-old-space-size=10240 fibonacci.js or 
npm run runfibbo

*/

///require math.js library to allow dealing with large numbers
let math=require('mathjs');
/// config to 2000 precision
math.config({precision: 20000});
///declare the fibbo array to store fibo values
let fiboArray=[];
  fiboArray[0]=math.bignumber(1);
  fiboArray[1]=math.bignumber(2);
/// initialize sum to 2.sum should include the second value in the array since its even
let sum=2;
///start loop from index 2 .It should break @ 4000000-1 so total array elements will be 4000000
for(let n=2;n < 4000000;n++)
 {
  ///fibonacci is sum of the two values before the given value
 fiboArray[n]=math.add(fiboArray[n-1],fiboArray[n-2]);    
 ///check if value is even.if even increment the sum with the value
   if(fiboArray[n]%2===0){
   sum=math.add(sum,fiboArray[n]); 
     } 
 


}
///display the sum of all even elements in the fibonacci sequence 
console.log("sum of even fibonacci values is: ", math.format(sum, {notation: 'fixed'}));
