
import React from 'react';

function RegisterForm({ toggleForm }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para manejar el envío del formulario
    };

    return (
        <>
            <div className="container-form register">
                <div className="information">
                    <div className="info-childs">
                        <h2>Bienvenido</h2>
                        <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                        <input type="button" value="Iniciar Sesión" onClick={toggleForm} />
                    </div>
                </div>
                <div className="form-information">
                    <div className="form-information-childs">
                        <h2>Crear una Cuenta</h2>
                        <p>o usa tu email para registrarte</p>
                        <form className="form form-register" onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    <i className='bx bx-user'></i>
                                    <input type="text" placeholder="Nombre Usuario" name="userName" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <i className='bx bx-envelope'></i>
                                    <input type="email" placeholder="Correo Electronico" name="userEmail" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <i className='bx bx-lock-alt'></i>
                                    <input type="password" placeholder="Contraseña" name="userPassword" />
                                </label>
                            </div>
                            <input type="submit" value="Registrarse" />
                            <div className="alerta-error">Todos los campos son obligatorios</div>
                            <div className="alerta-exito">Te registraste correctamente</div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterForm;