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
class Login {
    username;
    password;
    databaseID;
    constructor(username, password, databaseID) {
        this.username = username;
        this.password = password;
        this.databaseID = databaseID;
    }
    isUser() {
        if (this.databaseID !== "") {
            return `Home page`;
        }
        else {
            console.log(`You do not have an account,kindly create one`);
            return `SignUp Page`;
        }
    }
}
export {};
//# sourceMappingURL=index.js.map