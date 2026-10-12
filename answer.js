
// ## Question 1: Value Detective · 10 marks


function describeValue(value) {
    return typeof value + " | " + (value ? "truthy" : "falsy");
}

console.log(describeValue("Ratul"));

// Question 2: Bangladesh Weekend Machine · 10 marks
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



// Question 3: Username Gatekeeper · 10 marks

function validateUsername(name) {
    if (name.length< 4) {

        return "Too Short";
    }  
    else if (name.includes(" ")) {
        return "No Space Allowed";
    } 
    else if (name.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }
}
console.log(validateUsername("Billu123"));



// Question 4: Dhaka CNG Fare Meter · 15 marks

function getCngFare(distance, isNight=false, waitingMinutes=0){
    let fare=50; ///minimum fare is 50 tk
    if(distance>2){
        // Every km after the first 2 km costs 15 taka.
        fare+=(distance-2)*15;

    }
    // Waiting charge: 2 
    fare+=waitingMinutes*2;

    if (isNight) {
        fare *= 1.2;
    }

    return fare;
}

console.log(getCngFare(5));
console.log(getCngFare(5, false, 10));


// Question 5: Run Chase Commentator · 15 marks
const getChaseVerdict = (target, scored, ballsLeft)=>{
    let  runsNeeded = target - scored;
    if(runsNeeded<=0){
        return "Won";


    }
    if(ballsLeft<=0){
        return "Lost"
    }
    
        let requiredRate = (runsNeeded / ballsLeft) * 6;
        let verdict;
        if(requiredRate<=6){
            verdict="Comfortable";

        }
        else  if(requiredRate<=12){
            verdict="Tough";

        }
        else{ verdict="Almost Impossible"};
    
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;

}

console.log(getChaseVerdict(150, 149, 1));