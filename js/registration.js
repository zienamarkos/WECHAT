const password = document.getElementById('password');
const rePassword = document.getElementById('rePassword');
form.addEventListener('submit', e => {
    var passwordValue = password.value;
    var rePasswordValue = rePassword.value;
    if (passwordValue != rePasswordValue) {
        const myh5 = document.querySelector('h5');
        myh5.className = 'error'
        e.preventDefault();
    } else {

    }
});