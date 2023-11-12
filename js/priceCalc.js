document.getElementById('calculateBtn').addEventListener('click', function() {
    calculatePrice();
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('materialCost').value = ""; // Clear input
    document.getElementById('hoursWorked').value = "";
    document.getElementById('result').innerText = "Your result will appear here."; // Clear previous result
});

function calculatePrice() {
    let materialCost = parseFloat(document.getElementById("materialCost").value);
    let hoursWorked = parseFloat(document.getElementById("hoursWorked").value);

    if (isNaN(materialCost) || isNaN(hoursWorked)) {
        console.error("Invalid input");
        return;
    }

    let profitMargin = 0.25;
    let overheadCost = materialCost * 0.1;
    let laborCost = 50 * hoursWorked;
    
    let totalCost = materialCost + laborCost + overheadCost;
    let sellingPrice = totalCost + (profitMargin * totalCost);

    document.getElementById("result").textContent = sellingPrice.toFixed(2);
    console.log("Sale Price: " + sellingPrice.toFixed(2));
}
