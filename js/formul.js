// Define setActiveStep primero
function setActiveStep(step) {
    const steps = document.querySelectorAll('.steps .step');
    steps.forEach((el, index) => {
        if (index === step - 1) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

// Luego define mostrarPaso y ocultarPaso
function mostrarPaso(event) { 
    const stepIndicator = event.target.previousElementSibling; 
    if (stepIndicator && stepIndicator.classList.contains('step-indicator')) { 
        stepIndicator.style.display = 'block'; 
        // Extraer el número del paso desde el texto del paso
        const stepNumber = parseInt(stepIndicator.textContent.match(/\d+/)[0]);
        setActiveStep(stepNumber);
    } 
}

function ocultarPaso(event) { 
    const stepIndicator = event.target.previousElementSibling; 
    if (stepIndicator && stepIndicator.classList.contains('step-indicator')) { 
        stepIndicator.style.display = 'none'; 
        // Extraer el número del paso desde el texto del paso
        const stepNumber = parseInt(stepIndicator.textContent.match(/\d+/)[0]);
        setActiveStep(stepNumber);
    }
}

