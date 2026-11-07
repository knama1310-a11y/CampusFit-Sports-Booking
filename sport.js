
// Function for welcome message
function showMessage() {
    alert("Welcome to CampusFit Sports Booking!");
}

// Handle booking form
document.getElementById("bookingForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let name = document.getElementById("studentName").value;
    let facility = document.getElementById("facility").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    // Display confirmation
    let result = document.getElementById("result");

    result.innerHTML =
        "<h3>Booking Successful!</h3>" +
        "<p>Student: " + name + "</p>" +
        "<p>Facility: " + facility + "</p>" +
        "<p>Date: " + date + "</p>" +
        "<p>Time: " + time + "</p>";

    alert("Your sports slot has been booked!");
});

// Available equipment
let equipmentStock = {
    "Badminton Racket": 8,
    "Basketball": 5,
    "TT Bat": 10
};

// Store borrowed equipment
let borrowedItems = [];

// Borrow equipment function
function borrowEquipment(item) {

    let message = document.getElementById("equipmentMessage");

    if (equipmentStock[item] > 0) {

        // Decrease available stock
        equipmentStock[item]--;

        // Add item to borrowed list
        borrowedItems.push(item);

        // Display borrowed equipment
        document.getElementById("borrowList").innerHTML =
            borrowedItems.map((item, index) =>
                "<p>" + (index + 1) + ". " + item + "</p>"
            ).join("");

        // Display success message
        message.innerHTML =
            "✓ Successfully borrowed " + item +
            "! Please return it within 2 days.";

        message.className = "message success-message";

        // Update stock values
        updateEquipment();

    } else {

        message.innerHTML =
            "Sorry! " + item + " is currently unavailable.";

        message.className = "message error-message";
    }
}

// Update stock values
function updateEquipment() {

    document.getElementById("racketStock").innerHTML =
        equipmentStock["Badminton Racket"];

    document.getElementById("basketStock").innerHTML =
        equipmentStock["Basketball"];

    document.getElementById("ttStock").innerHTML =
        equipmentStock["TT Bat"];
}