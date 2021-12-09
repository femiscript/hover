// THIS IS THE SOLUTION TO QUESTION 1
let newStr = "";
function reverseWord(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    console.log(newStr);
}
reverseWord("Decagon Institute");

// The code can also be written as below
let reverse = (string) => {
    let newString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    console.log(newString);
}
reverse("Hello World");