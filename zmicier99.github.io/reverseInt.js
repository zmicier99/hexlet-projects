//Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.
//reverseInt(13); // 31
//reverseInt(-123); // -321

const reverseInt = (num) => {
  let str = String(num);
  let i=str.length-1;
  let result='';
  
  if (num>0){
    for (i; i>=0; i--)
    result = result+str[i];
    }
    
      if (num<0){
        result=str[0];
    for (i; i>0; i--)
    result = result+str[i];
    }
  
  return Number(result);
  }
  export default reverseInt;
  
  reverseInt(-213);
