
/*Assignment operator
name="sujal"
x=4
console.log(x)

//Arithmetic operator
num1=3
num2=5
sum=num1+num2
console.log("Sum",sum)
diff=num1-num2
console.log("Diff",diff)
product=num1*num2
console.log(product)
Quotient=num1/num2
console.log(Quotient)
Remainder=num1%num2
console.log(Remainder)
Exponent=num1**num2
console.log(Exponent)


//Increment and Decrement

a=5
b=5
console.log(a++)
console.log(++b)
*/

/**
 * Relational operator
 */

/*equual and strict equal
a=5
b='5'
console.log(a==b)
console.log(a===b)
*/

// Logical Operators
var num1 = 10;
var num2 = 20;
var num3 = 10;
// 1. Logical AND
var result = num1 >= num3 && num1 == num3; // true
var result = num1 >= num2 && num1 == num3; // false
// 2. Logical OR
var result = num1 >= num3 || num1 == num3; // true
var result = num1 >= num2 || num1 == num3; // true
var result = num1 >= num2 || num1 > num3; // false
// 3. Logical NOT
var result = num1 == num3; // true
var result = !(num1 == num3); // false


//Bitwise Operator
a=10
b=6
console.log(a & b)
console.log(a | b)
console.log(a ^ b)
console.log(~a)