player1Name = localStorage.getItem("player1Name")
player2Name = localStorage.getItem("player2Name")


document.getElementById("player_question").innerHTML = player1Name;
document.getElementById("player_answer").innerHTML = player2Name;