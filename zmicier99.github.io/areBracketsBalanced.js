//areBracketsBalanced.js
//Реализуйте и экспортируйте функцию по умолчанию, 
//которая принимает на вход строку, состоящую только из 
//открывающих и закрывающих круглых скобок, и проверяет 
//является ли эта строка корректной. Пустая строка 
//(отсутствие скобок) считается корректной.

//Строка считается корректной (сбалансированной), если содержащаяся 
//в ней скобочная структура соответствует требованиям:

//Закрывающая скобка не должна идти впереди открывающей.
//Скобки — это парные структуры. У каждой открывающей скобки 
//должна быть соответствующая ей закрывающая скобка.
let i;

const areBracketsBalanced = (str) => {
let finish;
let leftBrackets='';
let rightBrackets='';
for (i=0;str[i]===('(');i++)
{leftBrackets+=str[i]};

for (i;str[i]===(')');i++)
if (str[i+1]===('('))
return false
else
{rightBrackets+=str[i]};
    
  
return finish= counter(leftBrackets)===counter(rightBrackets);
}

const counter = (brackets) => {
  let result='';
  for (i=0; i<brackets.length; i++)
  result+=brackets[i];
  return result=result.length;
  }  

areBracketsBalanced('((()))(');
