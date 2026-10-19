type userInfo = {
    name:string,
    age:number,
    isStudent:boolean
}

const userDetails: userInfo[]= [{
    name : "theophilus",
    age : 12,
    isStudent :true,
}]

const hisData:userInfo[] = [
    {
        name:"Charis",
        age:20,
        isStudent:true
    }
]

console.log(userDetails)
console.log(`The millionaire is called ${hisData}`)
console.log(hisData)
export {}  

