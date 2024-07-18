
/*
// 1st way of defining object 
person={
    name : "Sujal",
    age : 19,
    hobby : "cricket"
}
console.log(typeof person)
console.log(person)



// 2nd way defining object
 object = new Object()
 console.log(object)

 // 3rd way of defining object
 function emp(id,name,salary){
    this.id=id
    this.name=name
    this.salary=salary
 }

 emp_obj=new emp(1,"sujal",20000)
 console.log(emp_obj)

 
student ={
    name : 'sujal',
    age : '19',  
    address : {
        city :'indore',
        pincode : 452010
    }
}
//To read the properties of student
console.log(student.name)

// Using brackets
console.log(student["age"])

console.log(student.address.city)
console.log(student['address'].city)
console.log(student['address']['city'])



//Adding data 
person={}
person.name='sujal'
person.hobby='cricket'
person['country']='India'
console.log(person)



// Changing data
emp={
    id : 101,
    name : 'rohan'
}
emp.id = 102
console.log(emp)
emp['name']='sam'
console.log(emp)

*/

// deleting data 


emp={
    id : 101,
    name : 'rohan'
}
console.log(emp)
delete emp.name
console.log(emp)