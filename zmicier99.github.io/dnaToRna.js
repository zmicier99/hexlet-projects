const dnaToRna = (str) => {

let i;
let result="";

for (i=0; i< str.length;i++) {
 if (str[i]===' ')
 return result = ''
 else if (str[i]===('A' || 'a')) 
 result+='u';
 else if (str[i]===('C' || 'c'))
 result+='g';
 else if (str[i]===('G' || 'g'))
 result+='c';
 else if (str[i]===('T' || 't'))
 result+='a'
 else return null;
}
return result;
}

console.log(dnaToRna('CCGTA'));
