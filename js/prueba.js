// script.js
document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    const steps = document.querySelectorAll('.form-page.step');
    const stepItems = document.querySelectorAll('.steps-nav .step-item');
    const inputs = document.querySelectorAll('.form-page input, .form-page select');

    showStep(currentStep);

    inputs.forEach(input => {
        input.addEventListener('blur', (event) => {
            if (validateInput(input)) {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    showStep(currentStep);
                } else {
                    alert("Formulario completado");
                }
            }
        });
    });

    function showStep(step) {
        steps.forEach((stepElement, index) => {
            stepElement.classList.toggle('active', index === step);
        });
        stepItems.forEach((stepItem, index) => {
            stepItem.classList.toggle('active', index === step);
        });
    }

    function validateInput(input) {
        if (input.type === 'checkbox' || input.type === 'radio') {
            return input.checked;
        } else if (input.type === 'range') {
            return input.value !== '';
        } else {
            return input.value.trim() !== '';
        }
    }
});

