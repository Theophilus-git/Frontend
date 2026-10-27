// classes in typescript
// class User {
//     email: string
//     name: string
//     readonly city:string = "Accra"
//     constructor(email:string,name:string){
//         this.email = email
//         this.name = name
//     }
// }
// const myUser = new User("theo","millionaire")
// const millionaire = new User("theophilusofori819@gmail.com","Theophilus Ofori")
// console.log(millionaire)
// Typescript style of writing a class
class User {
    email;
    name;
    userID;
    city = "Accra";
    accBale = 100;
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get userid() {
        return `The user ID is ${this.userID}`;
    }
    set userid(id) {
        if (id === null) {
            throw new Error("You must enter an ID");
        }
        this.userID = id;
    }
}
let userInfo = new User("t@o", "ofori", "TO12");
console.log(userInfo.email);
// userInfo.deleteToken() --> This will throw an error, simply because it can not be used outside the class.
// Inheritance
class superUser extends User {
    isFamily = true;
    changeaccBale() {
        return this.accBale = 200;
    }
}
export {};
//# sourceMappingURL=index.js.map