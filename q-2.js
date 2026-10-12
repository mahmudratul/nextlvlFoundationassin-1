// const weekend = ["friday", "Staurday"];
// const workingday = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"
// ]


// function getDayType(){
//     if () { }
// }

function getDayType(day) {
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}
console.log(getDayType("friday"))