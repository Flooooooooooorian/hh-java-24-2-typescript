console.log("Hello World!");
console.log("Test123");

//Variable
let myName: string = "Florian";

console.log(myName)

myName = "Marcell"

console.log(myName)



//Konstante
const test: string = "TEST";

console.log(test)

//test = "123";

//var nicht benutzten
//var abc: string = "asd";


const yourName: string = "Test";
const age: number = 0.5
const is18YearsOld: boolean = true

let test1: string | undefined = "Florian"

console.log(test1)




console.log(3+5+age)

console.log(age !== 0.5)

console.log(is18YearsOld && age !== 0.5)


if(age !== 0.5) {
    console.log("Age ist nicht 0.5")
}
else {
    console.log("Age ist 0.5")
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}



//Truthy & Falsy
if (undefined) {
    console.log("true")
}
else {
    console.log("false")
}
