/**  Loop for

for(i=0;i<4;i++){
    console.log(i)
}

**/


/** Loop in decrement order

for(i=3;i>0;i--)
    console.log(i)




//   1 to 20 print even number
 for(i=1;i<=20;i++){
    if(i%2==0)
        console.log(i)
 }



 for(i=2;i<=20;i=i+2)
    console.log(i)

 

 for(i=0,j=10;i<j;i++,j--)
    console.log("hello : i,j",i,j)


  

 for(rows=1;rows<=5;rows++){
    for(col=1;col<=5;col++)
        process.stdout.write("*")
    console.log()
 }

 

 for(rows=1;rows<=5;rows++){
    for(col=1;col<=rows;col++)
        process.stdout.write("*")
    console.log()
 } 



 // Break statemnt 

 for(i=0;i<4;i++){
    if(i==2)
        break
    console.log(i)
 }




 //continue statement 

 for(i=0;i<4;i++){
    if(i==2)
        continue
    console.log(i)
 }


 //While loop

 i=1
 while(i<=5){
    console.log(i)
    i++
 }

 

age=15
 while(true){
    console.log(age)
    age++
    if(age>=18) 
        break
 }

 

 
 
 right_swaps=10
 while(right_swaps>=0){
    if(right_swaps==3 || right_swaps==7  ||  right_swaps==9){
        right_swaps--
        continue
    }
    right_swaps--
    console.log(right_swaps)
 }




 //Do while loop

 i=1
 do{
    console.log(i)
    i--
 }while(i>5)
    
**/

i=1
while(i<3)
    i++
console.log(i)