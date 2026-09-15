// Test Drive Button Interactive Tracker
document.querySelectorAll('.test-drive-btn').forEach(button => {
    button.addEventListener('click', function() {
        const accessibilityLabel = this.getAttribute('aria-label');
        alert(`Success: ${accessibilityLabel}. A confirmation prompt will process next.`);
    });
});

// Feedback Form Processing Block
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('userName');
        const emailInput = document.getElementById('userEmail');
        const messageInput = document.getElementById('userMessage');
        const statusDiv = document.getElementById('formStatus');

        // Verification guard
        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            statusDiv.textContent = "❌ Error: All fields are required.";
            statusDiv.className = "form-status status-error";
            return;
        }

        if (!emailInput.validity.valid) {
            statusDiv.textContent = "❌ Error: Please input a valid email format.";
            statusDiv.className = "form-status status-error";
            return;
        }

        // Sanitized feedback output block
        const cleanName = nameInput.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        statusDiv.textContent = `Thank you, ${cleanName}! Your feedback has been sent safely.`;
        statusDiv.className = "form-status status-success";

        this.reset();
    });
}
