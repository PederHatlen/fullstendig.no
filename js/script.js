let contentEL = document.getElementById("content");

let ellArr = document.getElementsByClassName("optionButton");
for (let i = 0; i < ellArr.length; i++) {
    ellArr[i].onclick = changeText(e, ellArr.name)
}

function changeText(input){
    console.log(input)
    switch (input) {
        case "Ønskelister":
            contentEL.innerHTML = "<h2>Du har ingen ønskelister, sorry ass.<h2>"
            break;
        case "Kundeservice":
            contentEL.innerHTML = "<h2>Get your own support</h2>"
            break;
    }

}