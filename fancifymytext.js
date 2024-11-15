/*------- buttons -------*/
const big = document.getElementById("bigger");
const rFancy = document.getElementById("fancy");
const rPlain = document.getElementById("plain");
const moo = document.getElementById("moo");

/*------- functions -------*/

//this one makes plain
function plainify(){
    userText = document.getElementById("usertext");
    userText.style.fontWeight = "normal";
    userText.style.color = "black";
    userText.style.textDecoration = "initial";
}

//this one fancifies
function fancify(){
    userText = document.getElementById("usertext");
    userText.style.fontWeight = "bold";
    userText.style.color = "blue";
    userText.style.textDecoration = "underline";
}

//this one makes text big
function bigify(){
    document.getElementById("usertext").style.fontSize = "24pt";
}

//this one uppercases and adds '-Moo' to the last word in
//each sentence
function mooify(){
    userText = document.getElementById("usertext");
    userText.value = userText.value.toUpperCase();
    var first = userText.value.split(".");
    var mood = first.join("-Moo.");
    userText.value = mood;
}

//these are the event listeners
big.onclick = bigify;
rFancy.onchange = fancify;
rPlain.onchange = plainify;
moo.onclick = mooify