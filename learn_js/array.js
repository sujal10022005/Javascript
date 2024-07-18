
/** 
arr_nums=[1,2,3]
console.log(arr_nums)

//Find element at given index
console.log(arr_nums[0])
console.log(arr_nums[2])

//Finding length of an array
console.log(arr_nums.length)


//Other way of defining array

//2nd way of creating array

arr=Array(1,2,3,4,5)
console.log(arr)


empty__arr=Array(3)
console.log(empty__arr)

//3rd way of creating array

fruit=new Array(1,2,3)
console.log(fruit)




//Deleting the elment from array

arr=[1,1,2,3,5]
delete arr[3]
console.log(arr)




//Iterating array items

//For Loop 
arr=[88,96,74,23,45]
for(i=0;i<arr.length;i++)
    console.log(arr[i])


**/
function sum_arr(arr){
    sum=0
    for(i=0;i<arr.length;i++)
        sum=sum + arr[i]
    return sum
}

console.log(sum_arr([89,6,8]))