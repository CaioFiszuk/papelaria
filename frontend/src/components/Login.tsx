//import { useState } from "react";
import { Link } from "react-router-dom";

function Login(/*{handleLogin}*/) {
  /*const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      toast.error("Preencha todos os campos!", { autoClose: 3000 });
      return;
    }

    handleLogin(data);
  };*/

    return (
      <section className="page">

         <form className="auth-form">
            <legend className="auth-form__title">Entrar</legend>

            <input 
              type='email' 
              name='email'
              placeholder='E-mail' 
              className='auth-form__input'
              //value={data.email}
              //onChange={handleChange}
            />

            <input 
              type='password' 
              name='password'
              placeholder='Senha' 
              className='auth-form__input'
              //value={data.password}
              //onChange={handleChange}
            />

            <button type="submit" className='auth-form__button'>Entrar</button>

            <span className='auth-form__link-paragraph'>Inscreva-se <Link className='auth-form__link' to='/signup'>aqui!</Link></span>
         </form>
      </section>
    )
  }
  
  export default Login;
