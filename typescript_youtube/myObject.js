// Creating an object without typescript
const user = {
    name: "Theophilus",
    age: 12,
    isActive: true,
    email: "theo@gov.com"
};
function createUser(user) {
    return { name: "Theophilus", age: 12, email: "theo@charis.com", isActive: true };
}
function classVenue(meetPlace) {
    console.log(`The class is on the ${meetPlace.blockName}`);
    console.log(`I am on the ${meetPlace.floorNumber}rd floor`);
    console.log(`Is it occupied ${meetPlace.isOccupied}`);
    console.log(`We are having the class at room ${meetPlace.roomNumber} at the ${meetPlace.blockName}`);
    return { blockName: "k-block", floorNumber: 2, roomNumber: 6, isOccupied: false };
}
classVenue({ blockName: "K-block", floorNumber: 3, isOccupied: true, roomNumber: 14 });
const myCar = {
    brandName: "Toyota",
    carNumber: "AD1123",
    carYear: 2027,
    // owner:"Charis"
};
myCar.brandName = "Benz";
console.log(myCar);
export {};
