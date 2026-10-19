// Creating an object without typescript
const user = {
    name: "Theophilus",
    age:12,
    isActive:true,
    email:"theo@gov.com"
}

// with typescript using the TYPE ALIASES

type User = {
    name:string,
    age:number,
    email:string,
    isActive:boolean
}

function createUser(user:User):User{
    return {name:"Theophilus",age:12,email:"theo@charis.com",isActive:true}
}

type myLocation = {
    blockName:string,
    floorNumber:number,
    roomNumber:number,
    isOccupied:boolean
}


function classVenue(meetPlace:myLocation):myLocation{
    console.log(`The class is on the ${meetPlace.blockName}`)
    console.log(`I am on the ${meetPlace.floorNumber}rd floor`)
    console.log(`Is it occupied ${meetPlace.isOccupied}`)
    console.log(`We are having the class at room ${meetPlace.roomNumber} at the ${meetPlace.blockName}`)

    return {blockName:"k-block",floorNumber: 2,roomNumber:6,isOccupied:false}
}
classVenue({blockName:"K-block",floorNumber:3, isOccupied:true,roomNumber:14})
// classVenue({blockName:"k-block",floorNumber: 2,roomNumber:6,isOccupied:false})


type cardNumber = {
    card_number:string
}

type cardDate = {
    card_date:string
}

type cardDetails = cardDate & cardNumber & {
    cvv: number
}

const mumCar:carDetails = {
    cvv:1233,
    car_date:"12/02/2027",
    carNumber:"As22",
}
// You can add two or more types

//  Read only

type carDetails = {
    readonly brandName:string,
    carNumber:string,
    carYear:number,
    owner?:string
}

const myCar: carDetails = {
    brandName:"Toyota",
    carNumber:"AD1123",
    carYear:2027,
    // owner:"Charis"
}

myCar.brandName = "Benz"

console.log(myCar)
export {}