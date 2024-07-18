
/** 
function greet(){
    console.log("Hi")
}

greet()



//Function to add 2 numbers

function sum(a,b){
    console.log("Inside the function")
    return a+b
}
console.log(sum(3,4))



// Factorial number

function fact(num){
    if(num==0 || num==1)
        return 1
    result=1
    for(i=1;i<=num;i++)
        result*=i
    return result
}
console.log(fact(5))


// Assigned to variable(function)

hello_func=function hello(){
    console.log("hi")
}
hello_func()



// Now function can not be called directly

sum_func=function sum(a,b){
    return a+b
}
console.log(sum_func(5,6))



// Anonymous function

hello=function(){
    console.log("Hi")
}
hello()



// Return function from function 

function return_greet_fn(){
    return function(){
        console.log("Hello  Students")
    }
}
return_greet_fn()()

**/

function func1(){
    console.log("Hello from inner")
    return function(){
        console.log("Hello from outer")
        return function(){
            console.log("Hello from innermost")
        }
    }
}
func1()












