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


function classVenue(meetPlace:myLocation){
    console.log(`The class is on the ${meetPlace.blockName}`)
    console.log(`I am on the ${meetPlace.floorNumber}rd floor`)
    console.log(`Is it occupied ${meetPlace.isOccupied}`)
    console.log(`We are having the class at room ${meetPlace.roomNumber} at the ${meetPlace.blockName}`)

    // return {blockName:"k-block",floorNumber: 2,roomNumber:6,isOccupied:false}
}
classVenue({blockName:"K-block",floorNumber:3, isOccupied:true,roomNumber:14})
// classVenue({blockName:"k-block",floorNumber: 2,roomNumber:6,isOccupied:false})

export {}