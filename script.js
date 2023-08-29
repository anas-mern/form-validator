let form = document.querySelector('form')
let name = document.getElementById('userName')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')

form.onsubmit = function (event) {
    event.preventDefault()

    function validate(ele,bool) {
        if (bool) {
            ele.nextElementSibling.classList.remove('display-none')
            ele.style.borderColor = "red"
        } else{
            if(ele.nextElementSibling.classList.contains('display-none')){}else{ele.nextElementSibling.classList.add('display-none')}
            ele.style.border = "2px solid green"
        }        
    }
    validate(name,name.value.length<=3 || name.value.length>=17)
    validate(password,password.value.length<=8 || password.value.length>=25)
    validate(confirmPassword,confirmPassword.value !== password.value)
}