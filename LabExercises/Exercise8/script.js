function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

document.getElementById("rollButton").addEventListener("click", function() {
    const diceType = document.getElementById("diceType").value;
    const result = rollDice(parseInt(diceType));
    
    document.getElementById("diceResult").textContent = result;
});


