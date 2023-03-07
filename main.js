const box = document.getElementById("box");
// const box = document.querySelectorAll("#box");
const a = document.getElementsByClassName("a");
const b = document.getElementsByClassName("b");
const c = document.getElementsByClassName("c");
const d = document.getElementsByClassName("d");
const e = document.getElementsByClassName("e");
const f = document.getElementsByClassName("f");
const g = document.getElementsByClassName("g");
const h = document.getElementsByClassName("h");
const i = document.getElementsByClassName("i");
const win = document.getElementById("winner");
const playAgain = document.getElementById("play-again");

const highlight = (event) => {
    box.style.backgroundColor = 'lightblue';
}

const donthighlight = () => {
    box.style.backgroundColor = '';
}

const addText = (event) => {
    const hasInput = false;
    const input = 'X';
    box.innerHTML = input;
    if(input === 'X'){
        input = 'O'
        event.target.getElementById('box').innerHTML = input;
    }
    else{
        input = 'X';
        event.target.getElementById('box').innerHTML = input;
    }
    // box.getElementById('box').innerHTML = "X";
}

const wins = () => {
    const x = 'X';
    const o = 'O';
    if((a.value === x && b.value === x && c.value === x) || (a.value === o && b.value === o && c.value === o)){
        win.innerHTML = "Player Wins!";
        playAgain.refresh;
    }
}

box.onmouseover = highlight;
box.onmouseleave = donthighlight;
box.onclick = addText;
playAgain.onclick = wins;


