document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado completamente');
    // Resto de tu código de inicialización
});

window.addEventListener('load', function() {
    console.log('Página completamente cargada');
});

function nextStep(currentStep) {
    // Validar campos antes de continuar
    if (!validateStep(currentStep)) return;
    
    // Ocultar paso actual
    document.getElementById(`step${currentStep}`).style.display = 'none';
    
    // Mostrar siguiente paso
    document.getElementById(`step${currentStep + 1}`).style.display = 'block';
    
    // Actualizar flujograma
    updateSteps(currentStep + 1);
}

function prevStep(currentStep) {
    // Ocultar paso actual
    document.getElementById(`step${currentStep}`).style.display = 'none';
    
    // Mostrar paso anterior
    document.getElementById(`step${currentStep - 1}`).style.display = 'block';
    
    // Actualizar flujograma
    updateSteps(currentStep - 1);
}

function updateSteps(activeStep) {
    const steps = document.querySelectorAll('.steps li');
    steps.forEach((step, index) => {
        if (index + 1 === activeStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function validateStep(step) {
    console.log(`Validating step: ${step}`);
    const currentStep = document.getElementById(`step${step}`);
    const requiredFields = currentStep.querySelectorAll('[required]:not([style*="display: none"])');
    let isValid = true;
    
    requiredFields.forEach(field => {
        console.log(`Validating field: ${field.id}, value: ${field.value}`);
        if (!field.value) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    if (!isValid) {
        const errorMessage = currentStep.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = 'Por favor, complete todos los campos obligatorios (*)';
        }
    }
    
    return isValid;
}

function showPerson(personNumber) {
    const person1 = document.getElementById('person1');
    const person2 = document.getElementById('person2');
    
    if (personNumber === 1) {
        person1.style.display = 'block';
        person2.style.display = 'none';
    } else {
        person1.style.display = 'none';
        person2.style.display = 'block';
    }
}


function submitForm() {
    if (!validateStep(3)) return;
    
    // Ocultar último paso
    document.getElementById('step3').style.display = 'none';
    
    // Mostrar mensaje de éxito
    document.getElementById('success').style.display = 'block';
    
    // Actualizar flujograma al paso final
    updateSteps(4);
}