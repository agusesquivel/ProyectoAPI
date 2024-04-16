import React from 'react';

function LoginForm({ toggleForm }) {
    return (
        <React.Fragment>
            <div className="container-form login hide">
                <div className="information">
                    <div className="info-childs">
                        <h2>¡¡Bienvenido nuevamente!!</h2>
                        <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                        <input type="button" value="Registrarse" onClick={toggleForm} />
                    </div>
                </div>
                <div className="form-information">
                    <div className="form-information-childs">
                        <h2>Iniciar Sesión</h2>
                        <p>o Iniciar Sesión con una cuenta</p>
                        <form className="form form-login" noValidate>
                            {/* Inputs y campos del formulario de inicio de sesión */}
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LoginForm;