// Narrowing

interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isUser:true
}

function userType(account: User|Admin){
    if("isUser" in account){
        return account.isUser
    }
}


type Fish = {swim:()=>void}
type Bird = {fly:()=>void}

function isFish(pet: Fish|Bird):pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        return "don't eat the fish"
    }else{
        pet
        return "You are free to eat to bird"
    }
}


interface circle{
    kind:"circle",
    radius:number
}

interface square{
    kind:"square",
    side:number
}

interface rectangle{
    kind:"rectangle",
    length:number,
    width:number
}

type Shape = circle|square|rectangle

function getTrueShape(shape:Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius**2
    } else{
        // return shape.side * shape.side
    }
}

function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius**2

        case "square":
            return shape.side * shape.side

        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape:never = shape
            return _defaultforshape
    }
}