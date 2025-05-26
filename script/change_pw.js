const alertError = document.querySelector("#errorAlert");

const form = document.querySelector('.form');
console.log('123', form)
const passInput = document.querySelector('.form-input__pass')
const passError = document.querySelector('#error-pass')

const repeatInput = document.querySelector('.form-input__repeat')
const repeatError = document.querySelector('#error-repeat')


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
    if (!passInput.validity.valid) {
        showError(passInput, passError);
        isValid = false;
    }
    if (repeatInput.value !== passInput.value) {
        repeatError.textContent = 'Passwords don\'t match';
        repeatError.classList.add('error-message_active');
        isValid = false;
    }
    if (isValid) {
        console.log('Send request registration')
        changePw()
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

async function changePw() {
    const params = new FormData();

    params.set('password', passInput.value);
    params.set('token', $_GET('token'));

    function $_GET(key) {
        var p = window.location.search;
        p = p.match(new RegExp(key + '=([^&=]+)'));
        return p ? p[1] : false;
    }


    try {
        let response = await fetch('https://client.taskit.pro/login/set_password/', {
            method: 'POST',
            body: params,
        });

        let result = await response.json();

        if(!result.status){
            console.log(result.msg)
        }else{
            showAlert('Password was changed', 'alert-success', 3000)
            setTimeout(() => {
                window.location.replace(`https://client.taskit.pro/login/form`);
            }, 2500)
        }
    } catch (err) {
        console.log(err)
        showAlert('Request error')
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
