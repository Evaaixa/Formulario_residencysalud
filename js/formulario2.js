let currentStep = 0;

function updateStep() {
    const container = document.getElementById('formContainer');
    container.style.transform = `translateX(-${currentStep * 100}%)`;
    const steps = document.querySelectorAll('.steps li');
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep);
    });
}

function nextStep(currentStep) {
    if (!validateStep(currentStep)) return;
    document.getElementById(`step${currentStep}`).style.display = 'none';
    currentStep++;
    document.getElementById(`step${currentStep}`).style.display = 'block';
    updateStep();
}

function prevStep(currentStep) {
    document.getElementById(`step${currentStep}`).style.display = 'none';
    currentStep--;
    document.getElementById(`step${currentStep}`).style.display = 'block';
    updateStep();
}

function goToStep(step) {
    document.getElementById(`step${currentStep}`).style.display = 'none';
    currentStep = step;
    document.getElementById(`step${currentStep}`).style.display = 'block';
    updateStep();
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

function submitForm() {
    if (!validateStep(3)) return;
    document.getElementById('step3').style.display = 'none';
    document.getElementById('success').style.display = 'block';
    updateSteps(4);
}
