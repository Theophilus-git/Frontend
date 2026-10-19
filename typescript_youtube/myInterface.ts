interface User {
    readonly dbID:number,
    email:string,
    name:string,
    userID:number,
    getC(couponName:string):number,
    googleID?:string
}

interface User{
    age:number
}

interface Admin extends User{
    role:"admin"|"learner"|"lecturer"
}

let myUser:User = {
    email: "theo@gma.",
    name:"Charis",
    userID:123,
    getC(name:"Happy"){
        return 100
    },
    dbID:1122,
    age:22
}

let hisUser:Admin = {
    email:"ce@.t",
    name:"Erastus",
    role:"admin",
    userID:123,
    getC(name:"Happy"){
        return 100
    },
    dbID:1122,
    age:22
    
}



