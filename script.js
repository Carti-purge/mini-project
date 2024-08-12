document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var nameValue = nameInput.value.trim();
    var emailValue = emailInput.value.trim();
    var errorMessage = document.getElementById('error-message');

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (nameValue === "") {
        errorMessage.textContent = "Please enter your name.";
        errorMessage.style.display = 'block';
    } else if (emailValue === "") {
        errorMessage.textContent = "Please enter your email.";
        errorMessage.style.display = 'block';
    } else if (!emailPattern.test(emailValue)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert("Thank you for subscribing, " + nameValue + "!");
        nameInput.value = ''; // Clear the input fields after success
        emailInput.value = '';
    }
});