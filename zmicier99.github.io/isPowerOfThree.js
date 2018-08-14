const isPowerOfThree = (num) =>{
  const three = 3;
  let result = 1 ;
  while (result < num)
  {
    result*=three;}
    
    if (result=== num)
    return true;
    else return false;
    
    }
  
  isPowerOfThree(81);
