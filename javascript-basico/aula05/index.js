/** 
 == ----igual ----- a==b ---- vai ser verdadeiro se A for igual a B
 === ---- idêntico ---- a===b ----verdadeiro se a for identico a B
 != ----DIFERENTE ----- a != b ==== verdadeiro se a tiver conteudo diferente de b
 !== ---- NÃO IDENTICO --- a !== b ----se o A não for identico a B
 < ----menor que ---- a < b ---- verdadeiro se a for menor que b
 <= ---- menor ou igual que --- a <= b ---- verdadeiro se a for menor ou igual a b
 > ---- maior ------ a > b ----- verdadeiro se a for maior que b
 >= ---- maior ou igual que -----a >= b ----verdadeiro se a foi maior ou igual a b
*/

const a = 3;
const b = 3;
/*
console.log(a==b);
console.log(a===b);
console.log(a !== b);
console.log(a != b);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);

*/
/*
console.log(a === b && a <= b);
// V e V = V
console.log(a === b && a < b );
// V e F = F

console.log(a !== b && a <= b);
// F e V = F

console.log(a !== b && a < b);
//F e F = F


//OR

console.log(a === b || a <= b);
// V e V = V 

console.log (a === b || a < b);
//V e F = V

console.log(a > b || a === b);
// F e V = V

console.log(a > b || a < b);
//F e F = F
*/
//NOT

console.log(!(a === b));

console.log(!(a < b))