/*
emp={
    name : 'Sujal',
    age : 18,
    salary : 1000,
    address : {
        city : 'indore',
        pincode : 452010
    }
}

// List all keys in given object
console.log(Object.keys(emp))

// List all values in given object
console.log(Object.values(emp))

// List all key values pairs
console.log(Object.entries(emp))


// Assign
emp_new=Object.assign({},emp,{role:'developer'})
console.log(emp_new)

*/

// Objectfreeze and Objectisfrozen

person={
    name : 'sujal',
    age : 18
}
/*
Object.freeze(person)

person.name='ram'
console.log(person)
console.log(Object.isFrozen(person))

//Seal and isseal

Object.seal(person)
person.name='ram'
console.log(person)
console.log(Object.isSealed(person))

// hasown
*/
person={
    name: "Vishwas",
    age:19,
    salary:7000
}
console.log(Object.hasOwn(person,"name"))
console.log(Object.hasOwn(person,"company"))

// getownpropertynames

//console.log(Object.getOwnPropertyNames(person))//Object.keys(person)

//getownpropertydescriptors

//console.log(Object.getOwnPropertyDescriptors(person))

// object.defineproperties
Object.defineProperties(person,{
    salary:{
        value:7000,
        enumerable:false
    }
})
for(k in person)
    console.log(k)