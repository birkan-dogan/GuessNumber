const hold = Math.floor(Math.random() * 100);
// console.log(number);
const buton = document.getElementById("btn");
const guess = document.getElementById("guess");
const write = document.getElementById("write");
let count = document.getElementById("count");
const quit = document.getElementById("quit");
const again = document.getElementById("again");
const input = document.getElementById("input");

let forCount = 0;
quit.onclick = function(){
    document.querySelector(".container").style.display = "none";
    document.getElementById("quit1").style.display = "flex";
}

let lowNumber = 0;
let upNumber = 100;

buton.onclick = function(){
    let number = document.getElementById("input").value;
    number = Number(number)
    if(number >= 100 || number <= 0){
        alert("Please enter a number between 1-100");
    }
    else{
        if(hold > number){
            write.innerHTML = `A bit higher than ${number}`;
            input.value = " ";
            lowNumber = number
            guess.innerHTML = `Guess The Number (${lowNumber}-${upNumber})`;
            forCount++
            count.innerHTML = `Number of attempts: ${forCount} `;

            // console.log(write);
        } else if (hold < number){
            write.innerHTML = `A bit lower than ${number}
            `;
            upNumber = number;
            guess.innerHTML = `Guess The Number (${lowNumber}-${upNumber})`;
            input.value = " ";

            forCount++
            count.innerHTML = `Number of attempts: ${forCount}`;

        }
        else{
            document.querySelector(".container").style.display = "none";
            document.getElementById("win").style.display = "flex";
        }
    }
}
again.onclick = function(){
    document.querySelector(".container").style.display = "flex";
    document.getElementById("win").style.display = "none";
}
// window.onload = () => {
//     input.focus();
// }
input.addEventListener(("keydown", (e) => {
    if(e.keyCode === 13){
        buton.onclick();
    }
}))