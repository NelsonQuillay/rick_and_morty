const validation = (userData) => {
    const errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'El email ingresado no es valido'
    }
    if (!userData.email){
        errors.email = 'Debe ingresar un email'
    }
    if(userData.email.length >35){
        errors.email = 'Supero el maximo permitido de caracteres'
    }
    if (!/.*\d+.*/.test(userData.password)){
        errors.password = 'La contraseña debe deter al menos un numero'
    }
    if(userData.password.length>10 || userData.password.length<6){
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation