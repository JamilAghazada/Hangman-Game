//<------These are our basic variables------->
var wins = 0
var lose = 0
var heart = 13
var random_words = ["finger", "eminem", "number", "hungry", "burgerking", "bmw", "egg", "metropol", "bashir", ""]
// <-----------Computer choose one word from random_rods array------------->
var computer = Math.random()
computer = computer * (random_words.length - 1)
computer = Math.floor(computer)
var word = random_words[computer]//komputerin secdiyi random soz.
//<----These are our necessary variables---->
var letters_w = []
var wordsletters = []
var wrongletters = []
var currents = '_|'.repeat(word.length)
currents = currents.split("|")

//<-----------------I want see our changes------------------>
console.log("Our word : " + word)
console.log("Letters: " + letters_w)
console.log("withour repetation: " + wordsletters)
console.log("Our document: " + currents)
//<---------------We push word's letters to letters_w array----------------->
for (c of word) {
    letters_w.push(c)
}
//<-----------We push word's letters without repetation--------------->
letters_w.forEach(function (value) {
    if (wordsletters.indexOf(value) == -1) wordsletters.push(value);
})
//<--------This function helps to change the letters of strings------->Note:Thanks Stackoverflow :D
String.prototype.replaceAt = function (a, index, char) {
    a = this.split("");
    a[index] = char;
    return a.join("");
}
//<----------This function helps to delete the letters of strings--------->
function deleteletter(arrword, num1, num2) {
    let array = []
    for (c in arrword) {
        array.push(c)
    }
    arrword2 = array.splice(num1, num2)
    return arrword2
}
//<---------Okay,Our main function--------->
document.getElementById('current').innerHTML = currents;
function presskey(t) {
    userchoose = t.key
    console.log(userchoose)
    word_index = letters_w.indexOf(userchoose)
    if (letters_w.indexOf(userchoose) != -1) {
        index = letters_w.indexOf(userchoose)
        currents[index] = userchoose
        letters_w[index] = "-"
        index = letters_w.indexOf(userchoose)
        currents[index] = userchoose
        document.getElementById("current").innerHTML = (currents)

    }
    else if(letters_w.indexOf(userchoose)== -1){
       if(wrongletters.indexOf(userchoose) == -1){
        wrongletters.push(userchoose)
        heart --
        console.log(heart)
        console.log(wrongletters)
        document.getElementById("wrongs").innerHTML = wrongletters
        document.getElementById("hearts").innerHTML = heart
   }}
}
    

//<-------I don't need to explain this code------------>
window.onkeypress = presskey
//<--------This is for me!------------>
//userchoose aldi ,ilk once document write ile gerek sozun uzunlugu qeder _ yazdirim ,okay!--Ela hell oldu +
//indi verdiyi herfi yoxlamaliyiq eger duzdurse replace etmeliyik,biraz cetin olacaq!