function init(){
    console.log("Init körs!");
    let b = document.getElementById("button_text");
    b.onclick = button_text;
}

function button_text(){
    let text =document.getElementById("text");
    text.hidden=!text.hidden;
}

window.onload = init;