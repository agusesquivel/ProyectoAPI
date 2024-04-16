/**import React from 'react';*/
/** CSS Forms */
import React, { useState } from 'react';
import './componentes/clientes/CSSForms.css';
/**LoginForm */
import LoginForm from './componentes/clientes/LoginForm';
/**RegisterForm */
import RegisterForm from './componentes/clientes/RegisterForm';


function App() {
  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(true);

  const toggleForm = () => {
      setIsRegisterFormVisible(!isRegisterFormVisible);
  };

  return (
      <>
          <div className="container">
              {isRegisterFormVisible ? (
                  <RegisterForm toggleForm={toggleForm} />
              ) : (
                  <LoginForm toggleForm={toggleForm} />
              )}
          </div>
      </>
  );
}

export default App;
