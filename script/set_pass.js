
var app = new Vue({
    el: '#set-pass',
    data: {
        pass:'',
        r_pass:'',
        error_pass:'',
        error_repeat_pass:'',
        msg_alert:'',
        is_show_alert: false,
        urlParams: null
    },

    created() {
        this.urlParams = new URLSearchParams(window.location.search);
    },

    methods:{
        savePass(){
            if(this.pass.length < 7){
                this.error_pass = `Field should be at least 8 characters; you entered ${this.pass.length}.`
                return
            }
            if(this.pass !== this.r_pass){
                this.error_repeat_pass = 'Passwords don\'t match';
                return;
            }
             console.log('Save pass')
            this.sendPass()
        },

        async sendPass() {
            const params = new FormData();
            params.set('token ', this.urlParams.get('token'));
            params.set('password', this.pass);
            console.log('token:', this.urlParams.get('token'))
            console.log('Pass:', this.pass)
            try {
                let response = await fetch('https://client.taskit.pro/login/set_password/', {
                    method: 'POST',
                    body: params
                });

                let result = await response.text();
                console.log(result)
                if(!result.status){
                    console.log(result.msg)
                    switch (result.msg) {
                        case 'old_token':
                            this.showAlert("The token is outdated please go again to the password recovery form and request a new link")
                            break
                        case 'bad request':
                            this.showAlert('Something got wrong try later')
                            break
                    }
                }else{
                    console.log('redirect')
                    this.showAlert('The password was chabge success', 'alert-success')
                    //window.location = 'https://client.taskit.pro/main/index/'
                }
            } catch (err) {
                console.log(err)
            }

        },

        showAlert(msg, type='alert-danger', showTime = 2000){
           this.msg_alert = msg
            this.type_alert = type
            this.is_show_alert = true
            setTimeout(()=>{
                this.msg_alert = ''
                this.type_alert = ''
                this.is_show_alert = false
            }, showTime)
        }
    },

    watch:{
        pass(){
            this.error_pass = ''
        },

        r_pass(){
            this.error_repeat_pass = ''
        }
    }
})