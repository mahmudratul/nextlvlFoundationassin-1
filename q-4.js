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