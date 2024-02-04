

document.querySelector(".img2").addEventListener("click", () => {
    var randomImg = Math.floor(Math.random() * 6) + 1;
    var player = Math.floor(Math.random() * 6) + 1;


    console.log("click");

    if (randomImg > player) {
        document.querySelector("h2").textContent = "🎏Computer Wins!"
    }

    else if (randomImg < player) {
        document.querySelector("h2").textContent = "You Wins!🎏"
    }
    else {
        document.querySelector("h2").textContent = "Draw!"
    }
    document.querySelector(".img2").src = "images/dice" + player + ".png";
    document.querySelector(".img1").src = "images/dice" + randomImg + ".png";
})

