/** 

add=(a,b)=>{
    return a+b
}
console.log(add(2,4))



hello=()=>{console.log("Hello")}

hello()



// Function with multiple arguments and return 
sum_three=(a,b,c)=>{
    console.log("Inside sum three")
    return a+b+c
}
console.log(sum_three(2,3,4))



// Function with no return 

greet=(name)=>{
    console.log("Hi "+name)
}
greet('sujal')

**/

myfun=(num)=>(num%2==0) ? 'Even' : 'Odd'
console.log(myfun(9))