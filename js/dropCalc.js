document.getElementById('calculateBtn').addEventListener('click', function() {
    calculateDrop();
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('moneyInput').value = ""; // Clear input
    document.getElementById('result').innerText = "Your result will appear here."; // Clear previous result
});

function calculateDrop() {
    // Get input values
    var dropAmount = parseFloat(document.getElementById('moneyInput').value);

    // Perform calculation
    var taxAdjustedAmount = dropAmount / (1 - 0.0925);
    var taxRate = 1 - dropAmount / taxAdjustedAmount;
    var finalDrop = (dropAmount / (1 + taxRate)).toFixed(2);

    // Output the result
    document.getElementById('result').innerText = "This is the exact amount you need to type in: $" + finalDrop;
}
