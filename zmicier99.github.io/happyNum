let result;
let finish;
let tried=0;
const sumOfSquareDigits = (num) => {
  let str=String(num);
  result = 0;
   for (let i=0; i<str.length;i++)
  {result+=Math.pow((str[i]*1),2)
  tried++};

 if (result!==1 && tried<10) 
  {sumOfSquareDigits(result)}
    else { finish=result};
    
return finish;
}
    
const happyNum = (num) => {
  if (sumOfSquareDigits(num) === 1) return true;
  else return false;
  } 
  
happyNum(50);
