firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        // No autenticado
        alert("Debes iniciar sesión para acceder.");
        window.location.href = "/index.html";
        return;
    }

    const email = user.email.toLowerCase();
    const domain = email.split('@')[1];
    const path = window.location.pathname;

    // Reglas por dominio
    const reglas = [
        {
            dominio: 'ipn.mx',
            include: 'alumno.', // para identificar alumno IPN
            permitido: '/public/ipn/',
            redir: '/index.html'
        },
        {
            dominio: 'unam.mx',
            permitido: '/public/unam/',
            redir: '/index.html'
        },
        {
            dominio: 'gmail.com',
            permitido: '/public/alumnos/',
            redir: '/index.html'
        }
    ];

    let accesoPermitido = false;

    for (let regla of reglas) {
        const coincideDominio = domain.endsWith(regla.dominio);
        const esValidoIPN = regla.include ? email.includes(regla.include) : true;
        const estaEnRuta = path.startsWith(regla.permitido);

        if (coincideDominio && esValidoIPN && estaEnRuta) {
            accesoPermitido = true;
            break;
        }
    }

    if (!accesoPermitido) {
        alert("Acceso denegado. No tienes permiso para ver esta página.");
        window.location.href = "/index.html";
    }
});
