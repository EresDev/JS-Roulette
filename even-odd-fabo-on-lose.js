function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function play(){
    let times = 100;
    let money = 1000;
    let bet_seq = [1,1,2,3,5,8,12,20,32];
    let current_bet_index = 0;

    let minimum = 1000;
    let maximum = 1000;
    let minimum_at = 0;
    let maximum_at = 0;

    let target = 1010;
    let target_at = null;

    let zero_appeared_times = 0;

    for(let i=0; i < times; ++i){
        let bet = bet_seq[current_bet_index];
        let score = getRndInteger(0,34);

        if(score === 0){
            money -= bet;
            ++current_bet_index;
            ++zero_appeared_times;
        }
        else if(score % 2 !== 0){
            money += bet;
            current_bet_index -= 2;
            if (current_bet_index < 0) {
                current_bet_index = 0;
            }

        }
        else{
            money -= bet;
            ++current_bet_index;

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
            console.log('\x1b[33m%s\x1b[0m',"Reached Target:");
            console.log("#"+ i + " Got "+ score + " Money " + money + " nextBet " + bet +
                " nextBetIndex "+ current_bet_index);
            break;

        }

        console.log("#"+ i + " Got "+ score + " Money " + money + " nextBet " + bet +
        " nextBetIndex "+ current_bet_index);

        if (current_bet_index === bet_seq.length) {
            console.error("Reached bet amount above " + bet_seq[current_bet_index-1] +
            " Breaking loop at #" + i );
            break;
        }

    }

    console.log("Max " + maximum + " at " + maximum_at);
    console.log("Min " + minimum + " at " + minimum_at);
    console.log("Target " + target + " at " + target_at);
    console.log("Zero appeared times " + zero_appeared_times);
}

play();



