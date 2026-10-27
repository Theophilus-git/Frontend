// interface Login{
//     username:string,
//     password:String
// }

// interface signUp{
//     username:string,
//     legalname:string,
//     age:number,
//     isMillionaire:boolean
// }


class Login{
    constructor(
        public username:string,
        public password:string,
        public databaseID:string
    ){}
    public isUser(){
        if (this.databaseID !== ""){
            return `Home page`
        }else{
            console.log(`You do not have an account,kindly create one`)
            return `SignUp Page`
        }
    }
}