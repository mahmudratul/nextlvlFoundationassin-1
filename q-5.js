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