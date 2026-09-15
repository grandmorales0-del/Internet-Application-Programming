document.querySelectorAll('.test-drive-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Reads out the explicit description from the button's aria-label attribute
        const accessibilityLabel = this.getAttribute('aria-label');
        
        alert(`Success: ${accessibilityLabel}. A confirmation prompt will process next.`);
    });
});
