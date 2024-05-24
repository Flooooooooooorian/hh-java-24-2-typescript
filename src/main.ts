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


console.log(3 + 5 + age)

console.log(age !== 0.5)

console.log(is18YearsOld && age !== 0.5)


if (age !== 0.5) {
    console.log("Age ist nicht 0.5")
} else {
    console.log("Age ist 0.5")
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}


//Truthy & Falsy
if (undefined) {
    console.log("true")
} else {
    console.log("false")
}


//Funktionen


function functionName(param1: string, param2: number): number {
    console.log(param1)
    console.log(param2)
    return param2
}

const result: number = functionName("test", 123)
console.log(result)


const myFunction = (param1: string, param2: number): string => {
    console.log(param1)
    console.log(param2)
    return param1
}


const result2: string = myFunction("test", 123)
console.log(result2)


//Array & Listen

const myArray: string[] = ["Lukas", "Max"]

console.log(myArray)

console.log(myArray[0])

myArray.push("Elvedin")

console.log(myArray)

myArray.pop()

console.log(myArray)


const searchName: string | undefined = myArray.map((name) => name.toUpperCase())
    .filter(name => name.length > 5)
    .find(name => name.startsWith("F"))

console.log(searchName)

type Status = "OPEN" | "IN_PROGRESS" | "DONE"

interface Character2 {
    id: number,
    name: string
    favoriteProgrammingLanguages: string[]
    status: Status
}

const today = new Date()

console.log(today)

type Character = {
    id: number,
    name: string
    favoriteProgrammingLanguages: string[],
    status: Status,
    doSomething: (p1: number, p2: number) => number
}

type MyFunction = (param1: number) => number

const f1 = (p1: number, p2: number) => p1 + p2

function f2(p1: number, p2: number) {
    return p1 * p2;
}

const myCharacter: Character = {
    id: 1,
    name: "Florian",
    favoriteProgrammingLanguages: ["Java", "TypeScript"],
    status: "OPEN",
    doSomething: f1
}

const secondCharacter: Character = {
    id: 2,
    name: "Max",
    favoriteProgrammingLanguages: ["C++", "C"],
    status: "IN_PROGRESS",
    doSomething: f2
}


console.log(myCharacter)
console.log(secondCharacter)
console.log(myCharacter.status)

console.log(Object.values(myCharacter))

console.log(myCharacter.doSomething(6, 2))
