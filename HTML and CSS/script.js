const btn = document.getElementById("button");


const randomColor = () => {
    let val = "1234567890ABCDEF";
    let hash = "#";

    for (let i = 0; i < 6; i++) {
        hash = hash + val[Math.floor(Math.random() * 16)];
    }
    return hash;
};
//console.log(randomColor()); //D8CF13

function changeBackground() {
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener('click', changeBackground);