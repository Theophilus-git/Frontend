function identify(arg) {
    return arg;
}
identify("Hello, TypeScript!"); // Returns: "Hello, TypeScript!"
identify(42); // Returns: 42
identify(true); // Returns: true
identify({ brandName: "Happy", brandtype: "Millions" });
identify("Jan");
function getSearchProducts(products) {
    const myIndex = 4;
    return products[4];
}
const getMoreProducts = (products) => {
    const myindex = 5;
    return products[myindex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// console.log(anotherFunction(1,"Millionaire"))
// console.log(anotherFunction("Millioanire",3)) // It works in the console but it gives typescript error
console.log(anotherFunction({
    startLocation: "mainGate",
    nextLocation: "administrationBlock",
    previousLocation: "SLT block",
    finalDestination: "k-block"
}, "You have reached K-Block"));
// class in generics
class syllables {
    cart = [];
    addToCart(product) {
        this.cart.push(product);
        console.log(`Item successfully added ${product}`);
    }
}
const mySyllables = new syllables;
mySyllables.addToCart("Millionaire");
console.log(mySyllables);
mySyllables.addToCart("Billionaire");
console.log(mySyllables);
export {};
//# sourceMappingURL=myGenerics.js.map