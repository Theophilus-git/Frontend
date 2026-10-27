// Narrowing
function userType(account) {
    if ("isUser" in account) {
        return account.isUser;
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "don't eat the fish";
    }
    else {
        pet;
        return "You are free to eat to bird";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        // return shape.side * shape.side
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
export {};
//# sourceMappingURL=myNarrowing.js.map