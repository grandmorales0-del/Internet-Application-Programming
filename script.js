const carGalleries = {
    apex: [
        { emoji: "🏎️", label: "Exterior View" },
        { emoji: "🚘", label: "Front Interior Cabin" },
        { emoji: "🛞", label: "Alloy Wheels Detail" }
    ],
    vortex: [
        { emoji: "⚡", label: "Front Profile" },
        { emoji: "🔋", label: "Battery Bay View" },
        { emoji: "🖥️", label: "Digital Cockpit Interface" }
    ],
    titan: [
        { emoji: "🚙", label: "Side Profile" },
        { emoji: "🧳", label: "Trunk Cargo Space" },
        { emoji: "🏕️", label: "Offroad Capability View" }
    ]
};

const currentImageIndices = { apex: 0, vortex: 0, titan: 0 };

function updateCarImage(carCardElement, carId) {
    const carDataIndex = currentImageIndices[carId];
    const itemData = carGalleries[carId][carDataIndex];
    
    const windowElement = carCardElement.querySelector('.car-image-window');
    const emojiSpan = carCardElement.querySelector('.gallery-emoji');
    const labelSpan = carCardElement.querySelector('.image-label');
    
    emojiSpan.textContent = itemData.emoji;
    labelSpan.textContent = itemData.label;
    
    windowElement.setAttribute('aria-label', `Morales Motors Image: Showing ${itemData.label}`);
}

document.querySelectorAll('.car-card').forEach(card => {
    const carId = card.getAttribute('data-car-id');
    if (!carId) return;

    card.querySelector('.prev-btn').addEventListener('click', () => {
        const totalItems = carGalleries[carId].length;
        currentImageIndices[carId] = (currentImageIndices[carId] - 1 + totalItems) % totalItems;
        updateCarImage(card, carId);
    });

    card.querySelector('.next-btn').addEventListener('click', () => {
        const totalItems = carGalleries[carId].length;
        currentImageIndices[carId] = (currentImageIndices[carId] + 1) % totalItems;
        updateCarImage(card, carId);
    });
});

document.querySelectorAll('.test-drive-btn').forEach(button => {
    button.addEventListener('click', function() {
        const accessibilityLabel = this.getAttribute('aria-label');
        alert(`Success: Booking inquiry captured at Morales Motors for "${accessibilityLabel}".`);
    });
});

const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('userName');
        const emailInput = document.getElementById('userEmail');
        const messageInput = document.getElementById('userMessage');
        const statusDiv = document.getElementById('formStatus');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            statusDiv.textContent = "❌ Error: All fields are required.";
            statusDiv.className = "form-status status-error";
            return;
        }

        const cleanName = nameInput.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        statusDiv.textContent = `Thank you, ${cleanName}! Your feedback has been sent safely to Morales Motors.`;
        statusDiv.className = "form-status status-success";

        this.reset();
    });
}
