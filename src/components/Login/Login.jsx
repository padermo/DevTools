import React, {useState} from 'react'
import { login, register } from '../../firebase/firebase_config'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router';

function Login() {
  const [validarEstado, setValidarEstado] = useState(null);

  const [viewAlert, setViewAlert] = useState();

  const [captureInputs, setCaptureInputs] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleOnChangeInputs = (e) => {
    setCaptureInputs({...captureInputs, [e.target.name]: e.target.value})
  }

  const handleResgister = async (e) => {
    e.preventDefault();
    if(!captureInputs.email || !captureInputs.password){
      setViewAlert(<p className='error'>Campos vacios</p>)
      setTimeout(()=>{
        setViewAlert()
      },2000)
    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(captureInputs.email)){
      setViewAlert(<p className='error'>Correo no valido</p>)
      setTimeout(()=>{
        setViewAlert()
      },2000)
    }else if(validarEstado){
      // si existe validar estado nos registramos
      await register(captureInputs.email, captureInputs.password)
      setCaptureInputs({
        email: "",
        password: ""
      })
      setTimeout(()=>{
        navigate('/')
      },1000)
    }else{
      // si no existe validar estado nos logueamos
      await login(captureInputs.email, captureInputs.password)
      setCaptureInputs({
        email: "",
        password: ""
      })
      setTimeout(()=>{
        navigate('/')
      },1000)
    }
  }

  const handleEstado = (e) => {
    e.preventDefault();
    setValidarEstado(!validarEstado);
  }

  return (
    <div className='login'>
      <Navbar/>
      <div className="login__content">
        <h1 className='login__title'>{validarEstado ? "Registrate" : "Inicia sesion"}</h1>
        <form className="login__form">
          <div className="login__inputs">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' value={captureInputs.email} placeholder="email@email.com" className='login__input' onChange={handleOnChangeInputs} />
          </div>

          <div className="login__inputs">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' value={captureInputs.password} placeholder="*****" className='login__input' onChange={handleOnChangeInputs} />
          </div>

          <div className="login__alert">
            {viewAlert && viewAlert}
          </div>
          <button className="login__btn login__btn--register" onClick={handleResgister}>{validarEstado ? "Registrate" : "Iniciar sesion"}</button>
          <p className="login__cambio" onClick={handleEstado}>{validarEstado ? "¿Ya tienes cuenta? Inicia sesion" : "¿No tienes cuenta? Registrate"}</p>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login