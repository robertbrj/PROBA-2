document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the email and password values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Create an object to store the user data
    var userData = {
        email: email,
        password: password
    };
    
    // Convert the object to a JSON string
    var userDataString = JSON.stringify(userData);
    
    // Append the data to localStorage
    var existingData = localStorage.getItem("userData");
    if (existingData) {
        // If data already exists, append the new data
        var newData = existingData + "\n" + userDataString;
        localStorage.setItem("userData", newData);
    } else {
        // If no data exists yet, set the new data
        localStorage.setItem("userData", userDataString);
    }
    
    // Optionally, you can clear the form fields after submission
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    
    console.log("Data appended to localStorage successfully.");
});
