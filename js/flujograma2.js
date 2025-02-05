document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM cargado completamente');
});

window.addEventListener('load', function () {
    console.log('Página completamente cargada');
});

// ✅ FUNCIONES PARA AVANZAR Y RETROCEDER PASOS
function nextStep(currentStep) {
    if (!validateStep(currentStep)) return;

    changeStep(currentStep, currentStep + 1);
}

function prevStep(currentStep) {
    changeStep(currentStep, currentStep - 1);
}

// ✅ FUNCIÓN PRINCIPAL PARA CAMBIAR DE PASO
function changeStep(currentStep, newStep) {
    // Ocultar paso actual
    document.getElementById(`step${currentStep}`).style.display = 'none';

    // Mostrar nuevo paso
    document.getElementById(`step${newStep}`).style.display = 'block';

    // Actualizar flujograma
    updateSteps(newStep);
}

// ✅ ACTUALIZA EL FLUJOGRAMA VISUALMENTE
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

// ✅ HABILITAR NAVEGACIÓN CON CLIC EN LOS NÚMEROS
document.querySelectorAll('.steps li').forEach((step, index) => {
    step.addEventListener('click', function () {
        const stepNumber = index + 1;
        const currentActive = document.querySelector('.steps .active');

        if (stepNumber < parseInt(currentActive.textContent)) {
            changeStep(parseInt(currentActive.textContent), stepNumber);
        }
    });
});

// ✅ VALIDACIÓN DE CAMPOS OBLIGATORIOS
function validateStep(step) {
    console.log(`Validando paso: ${step}`);
    const currentStep = document.getElementById(`step${step}`);
    const requiredFields = currentStep.querySelectorAll('[required]:not([style*="display: none"])');
    let isValid = true;

    requiredFields.forEach(field => {
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

// ✅ ENVÍO DEL FORMULARIO
function submitForm() {
    if (!validateStep(2)) return;

    document.getElementById('step2').style.display = 'none';
    document.getElementById('success').style.display = 'block';

    updateSteps(3);
}

