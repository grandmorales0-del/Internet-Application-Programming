// Image configurations database setup mapping views seamlessly
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

// Internal local indices tracking map states globally
const currentImageIndices = { apex: 0, vortex: 0, titan: 0 };

// Main update workflow cycle matching interactive components on screen
function updateCarImage(carCardElement, carId) {
    const carDataIndex = currentImageIndices[carId];
    const itemData = carGalleries[carId][carDataIndex];
    
    const windowElement = carCardElement.querySelector('.car-image-window');
    const emojiSpan = carCardElement.querySelector('.gallery-emoji');
    const labelSpan = carCardElement.querySelector('.image-label');
    
    // Smooth DOM content change transitions safely
    emojiSpan.textContent = itemData.emoji;
    labelSpan.textContent = itemData.label;
    
    // Update live accessibility descriptions for assistive tech screen readers
    windowElement.setAttribute('aria-label', `${carId.toUpperCase()} - Image state showing: ${itemData.label}`);
}

// Attach explicit listener routes dynamically across all cards
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

// Test Drive Booking Engine Implementation
document.querySelectorAll('.test-drive-btn').forEach(button => {
    button.addEventListener('click', function() {
        const accessibilityLabel = this.getAttribute('aria-label');
        alert(`Success: Request submitted for: "${accessibilityLabel}". Our representative will contact you shortly.`);
    });
});
