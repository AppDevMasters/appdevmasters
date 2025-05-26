const emailInput = document.querySelector('.form-input__email')
const emailError = document.querySelector('#error-email')
const emailRecovery = document.querySelector('#recoveryPassEmail')

const passInput = document.querySelector('.form-input__pass')
const passError = document.querySelector('#error-pass')

const alertError = document.querySelector("#errorAlert");
const recoveryModal = new bootstrap.Modal(document.getElementById('recoveryPass'), {
    keyboard: false
})

emailInput.addEventListener('input', function (event) {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
        emailError.classList.remove('error-message_active');
    } else {
        showError(emailInput, emailError);
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

async function singIn() {
    console.log('Sing in');
    if(emailInput.validity.valueMissing){
        showError(emailInput, emailError);
        // showAlert('You need to fill E-mail field ')
        return;
    }

    if(passInput.validity.valueMissing){
        showError(passInput, passError);
        // showAlert('You need to fill Password field ')
        return
    }

    const params = new FormData();
    params.set('email', emailInput.value);
    params.set('password', passInput.value);

    try{
        let response = await fetch('https://client.taskit.pro/login/entry/', {
            method: 'POST',
            body: params
        });

        let result = await response.json();
        console.log(result)
        if(!result.status){
            console.log(result.msg)
            switch (result.msg) {
                case 'email_not_exist':
                case 'bad request':
                case 'bad_password':
                    showAlert('Invalid email or password')
            }
        }else{
            console.log('redirect')
            window.location = 'https://client.taskit.pro/app/'
        }
    }catch(error){
        showAlert('Something got wrong please try later')
        console.log(error)
    }
}

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

function getPageSingUp(){
    window.location = 'https://client.taskit.pro/register/form/'
}


async function recoveryPass(){
    console.log('Recovery');
    if(emailRecovery.validity.valueMissing){
        showAlert('You need to fill E-mail field ' )
        return;
    }

    const params = new FormData();
    params.set('email', emailRecovery.value);


    try{
        let response = await fetch('https://client.taskit.pro/register/restore_password/', {
            method: 'POST',
            body: params
        });

        let result = await response.json();
        console.log(result)
        if(!result.status){
            console.log(result.msg)
            switch (result.msg) {
                case 'email_not_exist':
                case 'bad request':
                case 'bad_data':
                    showAlert('Invalid email or not exist')
            }
        }else{
            showAlert('We sent you an e-mail  link for recovery password', 'alert-success', 3000)
            setTimeout(()=>{
                recoveryModal.hide()
            },3000 )
        }
    }catch(error){
        showAlert('Something got wrong please try later')
        console.log(error)
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
