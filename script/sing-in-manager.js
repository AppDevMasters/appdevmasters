const emailInput = document.querySelector('.form-input__email')
const emailRecovery = document.querySelector('#recoveryPassEmail')
const passInput = document.querySelector('.form-input__pass')
const alertError = document.querySelector("#errorAlert");
const recoveryModal = new bootstrap.Modal(document.getElementById('recoveryPass'), {
    keyboard: false
})

async function singIn() {
    console.log('Sing in');
    if(emailInput.validity.valueMissing){
        showAlert('You need to fill E-mail field ')
        return;
    }

    if(passInput.validity.valueMissing){
        showAlert('You need to fill Password field ')
        return
    }

    const params = new FormData();
    params.set('email', emailInput.value);
    params.set('password', passInput.value);

    try{
        let response = await fetch('https://manager.taskit.pro/login/entry/', {
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
            window.location = 'https://manager.taskit.pro/app/allTasks'
        }
    }catch(error){
        showAlert('Something got wrong please try later')
        console.log(error)
    }

}

function getPageSingUp(){
    window.location = 'https://manager.taskit.pro/register/form/'
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
        let response = await fetch('https://manager.taskit.pro/register/restore_password/', {
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
