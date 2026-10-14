function sayHello(say: string): string{
    return `${say} You are a millioniare`
}

console.log(sayHello('Theophilus Ofori'))

let addTwo =(num: number) => num+2;

let age = addTwo(20)

console.log(age)

function getUpper(val:string){
    return val.toUpperCase()
}

getUpper("Happy")   


function signUpUser(name:string, email:string,isPaid:boolean){

}

signUpUser("Theophilus","theo@gh.com",true)

let loginUser = (userName:string,email:string,age:number) =>{

}
loginUser("Charis", "charis@a.con", 22)

// Functions 2

let addNum = (num: number): number => {
    return num +num
}

// what happens if the function contain both a number and a string

// function doSomething(action: number): number{
//     if (action > 0){
//         return 5
//     }else{
//         return "You are wrong" // TypeScript trigger an error because the funtion has been assigned a number type it does the vice versa if it is changed to string
//     }
// }
// void
function consoleErro(errmsg: string):void{
    console.log("This function does not return any value('In order words - the return function does not work in this function'")
}

// never
function handleError(errmsg:string):never{
    throw new Error(errmsg)
}
addNum(2)
export {}