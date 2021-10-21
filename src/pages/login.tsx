import React from 'react';
import { FaGithub, FaFacebookF  } from 'react-icons/fa';

import Head from "next/head";
import { GetServerSideProps } from 'next';
import { useSession, signIn, signOut, getSession } from 'next-auth/client'

import styles from '../styles/pages/Login.module.css';

export default function App() {

  const [ session, loading] = useSession()

  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Home | move.it</title>
      </Head>

      <div className={styles.simboloContainer}>
      </div>

      <div className={styles.loginContainer}>
        <img src="./logo-white.svg" alt="logo"/>
        <h1>Bem-vindo</h1>
        <div className={styles.buttonsLogin}>
          <button onClick={() => signIn('github')}><FaGithub /> Sign in with GitHub</button>
          <button onClick={() => signIn('facebook')}><FaFacebookF /> Sign in with Facebook</button>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const session = await getSession(ctx)

  if(session) {
      return {
          redirect: {
              destination: '/',
              permanent: false
          }
      }
  }

  return {
    props: {
      
    }
  }
}