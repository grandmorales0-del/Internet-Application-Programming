document.querySelectorAll('.test-drive-btn').forEach(button => {
    button.addEventListener('click', function() {
        const carName = this.parentElement.getAttribute('data-car');
        alert(`Thank you for your interest! A representative will contact you shortly to schedule your test drive for the ${carName}.`);
    });
});
