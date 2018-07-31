const fizzBuzz = (begin,end) =>{
  let i;
  const FB = 'FizzBuzz';
  const F = 'Fizz';
  const B = 'Buzz';
  
  for (i=begin; i>=begin && i<=end; i++)
  {
    if (i%3 !==0 && i%5 !==0)
    console.log(i);
    
    else if (i%3 ===0 && i%5===0)
    console.log(FB);
    
    else if (i%3 ===0 && i%5!==0)
    console.log(F);
    
    else if (i%3 !==0 && i%5===0)
    console.log(B);
      }
  }

fizzBuzz(11,20);
