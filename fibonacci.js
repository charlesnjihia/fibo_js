/** a simple js code for fibonacci series: adding the even values of the series

to excute the code run : node  fibonacci.js or 
npm run runfibbo

*/


///declare the fibbo array to store fibo values
let fiboArray=[];
  fiboArray[0]=1;
  fiboArray[1]=2;
/// initialize sum to 2.sum should include the second value in the array since its even
let sum=2;
///loop should start from index 2 for array values
let n=2;
///start loop from index 2 .It should break when the fibonacci value exceeds 4000000 
while(n>1)
 {
  ///fibonacci is sum of the two values before the given value
 fiboArray[n]=fiboArray[n-1]+fiboArray[n-2];
  
  ///if the value is greater than 4000000 break from the loop
  ///else
  ///check if value is even.if even increment the sum with the value
  if(fiboArray[n]>4000000){
    break;  
      
  }else if(fiboArray[n]%2===0)
  {
   sum+=fiboArray[n]; 
   } 
 console.log("value", fiboArray[n]);

n++;
}
///display the sum of all even elements in the fibonacci sequence 
console.log("sum of even fibonacci values is: ", sum);
