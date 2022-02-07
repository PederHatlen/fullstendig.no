let contentEL = document.getElementById("content");

let ellArr = document.getElementsByClassName("optionButton");
for (let i = 0; i < ellArr.length; i++) {
    ellArr[i].onclick = function (e){changeText(e, ellArr[i].name)}
}

function changeText(e, input){
    console.log(input)
    switch (input) {
        case "Ønskelister":
            contentEL.innerHTML = "<h2>Du har ingen ønskelister, sorry ass.<h2>"
            break;
        case "Kundeservice":
            contentEL.innerHTML = "<h2>Get your own support</h2>"
            break;
    }
    e.preventDefault();
}