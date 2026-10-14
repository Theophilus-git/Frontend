"use strict";
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
    // return {blockName:"k-block",floorNumber: 2,roomNumber:6,isOccupied:false}
}
// classVenue({blockName:"k-block",floorNumber: 2,roomNumber:6,isOccupied:false})
