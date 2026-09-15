// Realistic car models mapping views
const carGalleries = {
    bmw: [
        { emoji: "🇩🇪", label: "BMW Front Profile" },
        { emoji: "🚘", label: "Live Cockpit Interior" },
        { emoji: "🛞", label: "M Sport Alloy Wheels" }
    ],
    audi: [
        { emoji: "⚡", label: "Audi Exterior View" },
        { emoji: "🛋️", label: "Virtual Cockpit Cabin" },
        { emoji: "🔋", label: "e-tron Charge Dock" }
    ],
    mercedes: [
        { emoji: "🚙", label: "Mercedes Side Profile" },
        { emoji: "🪵", label: "G-Class Luxury Trim" },
        { emoji: "⛰️", label: "Offroad Capability Configuration" }
    ]
};

const currentImageIndices = { bmw: 0, audi: 0, mercedes: 0 };

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
