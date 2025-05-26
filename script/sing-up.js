
const phoneInput = document.querySelector("#input-phone-number");
const itiInstance = intlTelInput(phoneInput, {
    customContainer: 'iti--liquid mb-4',
    separateDialCode: true,
    autoPlaceholder: 'aggressive',
    hiddenInput: 'country',
    excludeCountries: ['eh', 'wf', 'va', 'ae', 'ba', 'cf', 'st', 'cd', 'pm', 'do', 'kp', 'mf', 'sa'],
    placeholderNumberType: 'MOBILE',
    utilsScript: "https://taskit.pro/libs/intl-tel-input/js/utils.js"
});

const countryInput = document.querySelector("#input-phone-number ~ input");

function setDialCode() {
    const obj = itiInstance.getSelectedCountryData()
    countryInput.value = obj.dialCode;
}

setDialCode();

phoneInput.addEventListener('countrychange', setDialCode)

const modal_policy = document.querySelector('.modal-policy');
const alertError = document.querySelector("#errorAlert");



const form = document.querySelector('.form');
const acceptInput = document.getElementById('accept')
const emailInput = document.querySelector('.form-input__email')
const emailError = document.querySelector('#error-email')

const nameInput = document.querySelector('.form-input__name')
const nameError = document.querySelector('#error-name')

const passInput = document.querySelector('.form-input__pass')
const passError = document.querySelector('#error-pass')

const repeatInput = document.getElementById('form-input__repeat');
const repeatError = document.querySelector('#error-repeat')


emailInput.addEventListener('input', function (event) {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
        emailError.classList.remove('error-message_active');
    } else {
        showError(emailInput, emailError);
    }
});

nameInput.addEventListener('input', function (event) {
    if (nameInput.validity.valid) {
        nameError.textContent = '';
        nameError.classList.remove('error-message_active');
    } else {
        showError(nameInput, nameError);
    }
});

passInput.addEventListener('input', function (event) {
    if (passInput.validity.valid) {
        passError.textContent = '';
        passError.classList.remove('error-message_active');
    } else {
        showError(passInput, passError);
    }
});

repeatInput.addEventListener('input', function (event) {
    if (repeatInput.value === passInput.value) {
        repeatError.textContent = '';
        repeatError.classList.remove('error-message_active');
    } else {
        repeatError.textContent = 'Passwords don\'t match';
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;
    if (!emailInput.validity.valid) {
        showError(emailInput, emailError);
        isValid = false;
    }
    if (!nameInput.validity.valid) {
        showError(nameInput, nameError);
        isValid = false;
    }
    if (!passInput.validity.valid) {
        showError(passInput, passError);
        isValid = false;
    }

    if (!itiInstance.isValidNumber()) {
        const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
        const node = document.getElementById('error-phone');
        const errCode = itiInstance.getValidationError();
        if (errCode > 0) {
            node.innerHTML = errorMap[errCode];
        }
        else {
            node.innerHTML = errorMap[0];
        }

        showError(phoneInput, node);
        isValid = false;
    }
    else {
        const node = document.getElementById('error-phone');
        node.innerHTML = '';
    }

    if (repeatInput.value !== passInput.value) {
        repeatError.textContent = 'Passwords don\'t match';
        repeatError.classList.add('error-message_active');
        isValid = false;
    }
    if (!accept.checked) {
        document.querySelector('.accept__check').style.borderColor = 'red'
        isValid = false;
    }

    if (isValid) {
        console.log('Send request registration')
        singUp()
    }

    if (isValid) {
        console.log('Send request registration')
        singUp()
    }
});

function showError(target, errorBox) {
    if (target.validity.valueMissing) {
        // Если поле пустое,
        errorBox.textContent = 'You need to fill this field';
    } else if (target.validity.typeMismatch) {
        errorBox.textContent = 'Entered value needs to be an e-mail address.';
    } else if (target.validity.tooShort) {
        // Если содержимое слишком короткое,
        errorBox.textContent = `Field should be at least ${target.minLength} characters; you entered ${target.value.length}.`;
    }

    // Задаём соответствующую стилизацию
    errorBox.classList.add('error-message_active');
}

async function singUp() {
    const params = new FormData();
    const countryData = itiInstance.getSelectedCountryData();
    const wholeNumber = '+' + countryData.dialCode + phoneInput.value;
    const countryName = countryData.name;
    
    params.set('email', emailInput.value);
    params.set('full_name', nameInput.value);
    params.set('password', passInput.value);
    params.set('phone2', wholeNumber);
    params.set('country', countryName);

    try {
        let response = await fetch('https://client.taskit.pro/register/saved/', {
            method: 'POST',
            body: params
        });

        let result = await response.json();

        if(!result.status){
            console.log(result.msg)
            switch (result.msg) {
                case 'email_exist':
                    emailError.textContent = 'E-mail address exists'
                    emailError.classList.add('error-message_active');
                    break;
                case 'bad request':
                    emailError.textContent = 'Entered value needs to be a correct e-mail address.'
                    emailError.classList.add('error-message_active');
            }
        }else{
            localStorage.setItem('afterRegister', 'yes')
            window.location.replace(`https://client.taskit.pro/`);
            showAlert('We sent you an e-mail  link for activating', 'alert-success', 3000)
            //window.location = 'https://client.taskit.pro/main/index/'
        }
    } catch (err) {
        console.log(err)
    }

}

function showAlert(msg, type='alert-danger', showTime = 2000){
    alertError.classList.add('show', type);
    alertError.textContent = msg
    setTimeout(()=>{
        alertError.classList.remove('show');
        alertError.classList.remove(type);
        alertError.textContent = ''
    }, showTime)
}
 