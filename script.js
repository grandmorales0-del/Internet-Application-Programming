document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop standard page reload

    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const messageInput = document.getElementById('userMessage');
    const statusDiv = document.getElementById('formStatus');

    // Basic Validation Check
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        statusDiv.textContent = "❌ Please fill out all required fields.";
        statusDiv.className = "form-status status-error";
        return;
    }

    // Email Pattern Check
    if (!emailInput.validity.valid) {
        statusDiv.textContent = "❌ Please enter a valid email address.";
        statusDiv.className = "form-status status-error";
        return;
    }

    // Success response text parsed safely to avoid execution exploits
    const cleanName = nameInput.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    statusDiv.textContent = `Thank you, ${cleanName}! Your feedback has been sent successfully.`;
    statusDiv.className = "form-status status-success";

    // Clear form inputs after deployment
    this.reset();
});

