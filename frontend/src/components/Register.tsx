//import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register(/*{ handleRegistration }*/) {
  /*const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
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

    if (!data.username || !data.email || !data.password) {
      toast.error("Preencha todos os campos!", { autoClose: 3000 });
      return;
    }

    handleRegistration(data);
  }; */

    return (
      <section className="page">
      <form className="auth-form">
         <legend className="auth-form__title">Inscreva-se</legend>

         <input 
           type='text' 
           name='username'
           placeholder='Nome' 
           className='auth-form__input'
           //value={data.username}
           //onChange={handleChange}
         />

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

         <button className="auth-form__button" type='submit'>Inscrever-se</button>

         <span className="auth-form__link-paragraph">Faça o login <Link to='/signin' className='auth-form__link'>aqui</Link></span>
      </form>
      </section>
    )
  }
  
  export default Register;