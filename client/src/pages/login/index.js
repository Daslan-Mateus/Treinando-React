import React from 'react';
import "./style.css";
import logo from '../../assets/logo.svg'
import cadeado from '../../assets/cadeado.png'

export default function Login () {
    return (
        <div className="login-conteiner">
            <section className='form'>
                <img src={logo} alt='Logo'/>
                <form>
                    <h1>Acesse sua conta</h1>
                    <input placeholder='Username'/>
                    <input type='password' placeholder='Password'/>

                    <button type='submit'>Login</button>
                </form>

            </section>

            <img src={cadeado} alt='Login'/>

        </div>
    ) 
}