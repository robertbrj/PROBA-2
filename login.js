document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the email and password values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Retrieve the stored user data from localStorage
    var storedData = localStorage.getItem("userData");
    
    // Check if storedData exists
    if (storedData) {
        // Parse the stored data from JSON to JavaScript object
        var userDataArray = storedData.split("\n").map(JSON.parse);
        
        // Check if there's a match for the provided email and password
        var userFound = userDataArray.find(function(user) {
            return user.email === email && user.password === password;
        });
        
        if (userFound) {
            // If user is found, redirect to loggedin.html
            window.location.href = "loggedin.html";
        } else {
            // If user is not found, display an error message
            alert("Invalid email or password. Please try again.");
        }
    } else {
        // If no user data is found, display an error message
        alert("No user data found. Please sign up first.");
    }
});
