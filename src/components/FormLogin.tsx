import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { GetServerSideProps } from 'next';

import styles from '../styles/components/FormLogin.module.css'
import Cookies from 'js-cookie';

export default function FormLogin() {

    const [username, setUsername] = useState('')

    useEffect(() => {
      Cookies.set('username', String(username))
    },[username])

    function onChange(ev: any) {
      const { name, value } = ev.target;
      setUsername(value);
    }

    return (
      <form className={styles.loginContainer}>
        <img src="./logo-white.svg" alt="logo"/>
        <h1>Bem-vindo</h1>
        <img src="./icons/git.svg" alt="git"/>
        <div>
          <div>
            <input type="text" placeholder="Digite seu username" onChange={onChange}/>
          </div>
          <button formAction="./home" type="submit">
            <FaArrowRight size={20} style={{color: "white"}}/>
          </button>
        </div>
      </form>
    )
}