

// Interaction Container 
const greenCircle = document.getElementById("green");
const PinkCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");

//Selecting the container 
let interCont = document.getElementById("interactionContainer");

greenCircle.addEventListener("click", function () {
    //console.log(interCont);
    interCont.style.backgroundColor = "lightgreen";

});

PinkCircle.addEventListener("click", function () {
    interCont.style.backgroundColor = "plum";
});

blueCircle.addEventListener("click", function () {
    interCont.style.backgroundColor = "lightblue";
});

// Loop task
const loopContainer = document.getElementById("loopContainer");
const message = "brave";

for (let i = 0; i < 10; i++) {
    //console.log("brave");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
};

//condition

const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");

conditionContainer.addEventListener("mouseover", function () {
    //console.log("hover")
    square.style.backgroundColor = "green";

});
conditionContainer.addEventListener("mouseout", function () {
    square.style.backgroundColor = "lightsalmon";

});

// time
//https://www.w3schools.com/js/js_timing.asp

const increaseText = document.getElementById("increaseText");
let size = 10;

var increaseFontSize = function () {
    size++;
    increaseText.style.fontSize = size + 'px';
};
setInterval(increaseFontSize, 1000);

//Input
/* brain storming:
i need something to count letters
i need something to returen the letters counted 
i need somehting that reads the submit buttons action 
i need a lot of things 
 */
const inputText = document.getElementById("inputText");
const textLength = document.getElementById("text-length");
document.getElementById("submit").onclick = function (send) {
    send.preventDefault()
    textLength.innerHTML = inputText.value.length
};


// Printing message in console
console.log("Yayayayayayayay");

