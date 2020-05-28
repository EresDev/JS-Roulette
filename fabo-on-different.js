function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function play(){
    let times = 100;
    let money = 1000;
    let i_previous_bet = 1;
    let previous_bet = i_previous_bet;
    let bet = 1;
    let i=0;

    let minimum = 1000;
    let maximum = 1000;
    let minimum_at = 0;
    let maximum_at = 0;

    let target = 1010;
    let target_at = null;

    let zero_appeared_times = 0;

    let previous = null;

    for(i=0; i < times; ++i){
        let score = getRndInteger(0,34);
        if(score === 0){
            money -= bet;
            previous_bet = i_previous_bet;
            bet = 1;
            ++zero_appeared_times;
        }
        else {
            if (previous == 'odd') {
                if(score % 2 === 0){
                    money += bet;

                    if(bet === 5){
                        previous_bet = i_previous_bet;
                        bet = 1;
                    } else {
                        let temp_previous_bet = bet;
                        bet = bet + previous_bet;
                        previous_bet = temp_previous_bet;
                    }

                    previous = 'even';
                }
                else{
                    money -= bet;
                    previous_bet = i_previous_bet;
                    bet = 1;
                    previous = 'odd';
                }
            }
            else{
                if(score % 2 !== 0){
                    money += bet;

                    if(bet === 5){
                        previous_bet = i_previous_bet;
                        bet = 1;
                    } else {
                        let temp_previous_bet = bet;
                        bet = bet + previous_bet;
                        previous_bet = temp_previous_bet;
                    }

                    previous = 'odd';
                }
                else{
                    money -= bet;
                    previous_bet = i_previous_bet;
                    bet = 1;

                    previous = 'even';
                }
            }


        }

        if (money > maximum) {
            maximum = money;
            maximum_at = i;
        }
        if (money < minimum) {
            minimum = money;
            minimum_at = i;
        }
        if (target_at === null && money > target) {
            target_at = i;
        }


        // Create a <li> node
        console.log("#"+ i + " Got "+ score + " Money " + money + " nextBet " + bet);         // Create a text node

    }

    console.log("Max " + maximum + " at " + maximum_at);
    console.log("Min " + minimum + " at " + minimum_at);
    console.log("Target " + target + " at " + target_at);
    console.log("Zero appeared times " + zero_appeared_times);
}

play();



