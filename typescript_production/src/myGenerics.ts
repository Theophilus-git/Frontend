function identify<T>(arg: T): T {
    return arg;
}

identify<string>("Hello, TypeScript!"); // Returns: "Hello, TypeScript!"

identify<number>(42); // Returns: 42

identify<boolean>(true); // Returns: true

interface Bootle{
    brandName:string,
    brandtype:string,
}

identify<Bootle>({brandName:"Happy",brandtype:"Millions"})

identify("Jan")

function getSearchProducts<T>(products:T[]):T|undefined{
    const myIndex = 4
    return products[4]
}

const getMoreProducts = <T>(products:T[]):T|undefined =>{
    const myindex = 5
    return products[myindex]
}

interface Database{
    startLocation:string,
    nextLocation:string,
    previousLocation:string,
    finalDestination:string
}

function anotherFunction<T extends Database,U extends string>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

// console.log(anotherFunction(1,"Millionaire"))

// console.log(anotherFunction("Millioanire",3)) // It works in the console but it gives typescript error

console.log(anotherFunction(
    {
        startLocation:"mainGate",
        nextLocation:"administrationBlock",
        previousLocation:"SLT block",
        finalDestination:"k-block"
    },
    "You have reached K-Block"
))

// class in generics

class syllables<T>{
    public cart:T[] = []

    addToCart(product:T){
        this.cart.push(product)
        console.log(`Item successfully added ${product}`)
    }
}

const mySyllables = new syllables

mySyllables.addToCart("Millionaire")

console.log(mySyllables)

mySyllables.addToCart("Billionaire")
console.log(mySyllables)

