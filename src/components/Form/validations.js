
export default function validations({username, password}){
    let errors = {}
    let validationEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    let validationPassword = /[0-9]/
    if(username === "" || !validationEmail.test(username ) || username.length >= 35){
        errors.username = "No se ingreso de forma correcta su Gmail"
    }else if(password.length < 6 || password.length > 10 || !validationPassword.test(password)){
        errors.password = "la contraseña debe tener entre 6 y 10 caracteres, y un numero"
    }
    return errors
}

