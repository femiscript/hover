// THIS IS SOLUTION TO QUESTION 4
function checkNum(givenStr) {
    let vowels = "aeiou";
    let consonants = "bcdfghjklmnpqrstvwxyz";

    let vowNum = 0;
    let constNum = 0;

    for (let j = 0; j < givenStr.length; j++) {
        for (let x = 0; x < vowels.length; x++) {
            if (givenStr[j] == vowels[x]) {
                vowNum++;
            }
        }
        for (let y = 0; y < consonants.length; y++) {
            if (givenStr[j] == consonants[y]) {
                constNum++;
            }
        }
    }

    if (vowNum > constNum) {
        console.log("Vowels Wins");
    } else if (vowNum < constNum) {
        console.log("Consonants Wins");
    } else {
        console.log("Draw");
    }
}
checkNum("decagon");
