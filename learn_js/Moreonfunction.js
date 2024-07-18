/*
person1={
    firstName:'John',
    lastName:'Doe'
}
person2={
    fullname: function(){
        console.log(this.firstName+ " "+ this.lastName)
    }
}
person2.fullname.call(person1)

// passing an arguments

person1={
    firstName:'John',
    lastName:'Doe'
}
person2={
    fullname: function(city,country){
        console.log(this.firstName+ " "+ this.lastName +" lives in "+ city +" in " + country)
    }
}
person2.fullname.call(person1,'Indore','India')

// apply

person1={
    firstName:'John',
    lastName:'Doe'
}
person2={
    fullname: function(city,country){
        console.log(this.firstName+ " "+ this.lastName +" lives in "+ city +" in " + country)
    }
}
person2.fullname.apply(person1,['Indore','India'])


// String Methods


//1. at()
console.log("hello".at(2))
console.log("hello".at(-2))

//2. charat()
console.log("hello".charAt(1))

//3. concat()
console.log("hello ".concat("world"))

//4.endswith()
console.log("hello".endsWith("o"))
console.log("hello".endsWith("o",4))

//5.includes()
console.log("hello".includes("o"))

//6. indexof()
console.log("hello".indexOf("l"))

//7.padend()
console.log("hello".padEnd(7,"."))

//8.padstart()
console.log("hello".padStart(7,"."))

//9. repeat()
console.log("hi".repeat(3))

//10. replace()
console.log("hi world world".replace("world","earth"))

//11. replce all()
console.log("hello world world".replaceAll("world","earth"))

//12. search()
console.log("hello world".search("world"))

//13. slice()
console.log("hello".slice(2))
console.log("hello world".slice(3,7))

//14. split
console.log("hello".split(","))


//15. substring
console.log("hello world".substring(4))
console.log("hello world".substring(4,8))
console.log(Date.now())

date=new Date()
//getdate
console.log(date.getDate())

//getday
console.log(date.getDay())

//getfullyear
console.log(date.getFullYear())

//gethours
console.log(date.getHours())

//getmilliseconds
console.log(date.getMilliseconds())

//getminutes
console.log(date.getMinutes())

//gettime
console.log(date.getTime())

//getmonth
console.log(date.getMonth())

//todatestring
console.log(date.toDateString())


//set
// new set() constructor.
const setDemo = new Set()
// add method.
setDemo.add(1)
setDemo.add(2)
setDemo.add(2)
console.log(setDemo.size)
console.log(setDemo)

//add
setDemo.add(3)

//delete
setDemo.delete(3)

//clear
setDemo.clear()
console.log(setDemo)

// entries
data = new Set();
data.add("mangesh");
data.add({
like: "movies",
});
console.log(data);
console.log(data.entries());

//create set from array
setdemo=new Set([1,2,3])
console.log(setdemo)

// create array from set
const setData = new Set();
setData.add(1);
setData.add(2);
setData.add(3);
console.log(Array.from(setData))
 // output [ 1, 2, 3 ]

//****** map in javascript ******


const mapDemo = new Map();
console.log(mapDemo); // Map(0) {}
mapDemo.set("key1", "value1");
console.log(mapDemo);


// // clear method
const days = new Map();
days.set("mon", "monday");
days.set("tue", "tuesday");
days.set("wed", "wednesday");
console.log(days); // Map(3) { 'mon' => 'monday', 'tue'
// => 'tuesday', 'wed' => 'wednesday' }
days.clear();
console.log(days); // Map(0) {}

// // delete method
const days = new Map();
days.set("mon", "monday");
days.set("tue", "tuesday");
days.set("wed", "wednesday");
console.log(days); // Map(3) { 'mon' => 'monday', 'tu
//=> 'tuesday', 'wed' => 'wednesday' }
days.delete("wed");
console.log(days); Map(2) 
//{ 'mon' => 'monday', 'tue' => 'tuesday' }


// entries method
const days = new Map();
days.set("mon", "monday");
days.set("tue", "tuesday");
days.set("wed", "wednesday");
console.log(days.entries());
/**
output -
[Map Entries] {
[ 'mon', 'monday' ],
[ 'tue', 'tuesday' ],
[ 'wed', 'wednesday' ]
}


// // forEach -
const days = new Map();
days.set("mon", "monday");
days.set("tue", "tuesday");
days.set("wed", "wednesday");
days.forEach(function (value, key) {
console.log(`${key} = ${value}`);
});
/**
output -
mon = monday
tue = tuesday
wed = wednesday


// // get method
const days = new Map();
days.set("mon", "monday");
days.set("tue", "tuesday");
days.set("wed", "wednesday");
console.log(days.get("mon")); // output - monday


// has method
const days = new Map();
days.set("mon", "monday");
days.set("tue", "tuesday");
days.set("wed", "wednesday");
console.log(days.has("mon")); // output - true


// keys method
const days = new Map();
days.set("mon", "monday");
days.set("tue", "tuesday");
days.set("wed", "wednesday");
console.log(days.keys());
// output - [Map Iterator] { 'mon', 'tue', 'wed' }


// values
const days = new Map();
days.set("mon", "monday");
days.set("tue", "tuesday");
days.set("wed", "wednesday");
console.log(days.values());
// output - [Map Iterator] { 'monday', 'tuesday',
//'wednesday' }


// map constructor --
const user = {
    name: "mangesh",
    email: "mangesh@gmail.com",
    };
    const userFinal = new Map(Object.entries(user));
    console.log(userFinal);
    //output - Map(2) { 'name' => 'mangesh', 'email' =>
    //'mangesh@gmail.com' }
*/

    // convert map to object using Object.fromEntries //
        const map = new Map([
        ["fruit", "apple"],
        ["vegetables", "cabbage"],
        ]);
        console.log(map);
        /* output - Map(2) { 'fruit' => 'apple', 'vegetables' =>
        'cabbage' } */
        const obj = Object.fromEntries(map);
        console.log(obj);
        // output - { fruit: 'apple', vegetables: 'cabbage' }