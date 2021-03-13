import React from 'react';
import Head from "next/head";

import FormLogin from '../components/FormLogin';

import styles from '../styles/pages/App.module.css';



export default function App() {

  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Home | move.it</title>
      </Head>

      <div className={styles.simboloContainer}>
        <img src="./icons/simbolo.svg" alt="simbolo"/>
      </div>

      <FormLogin/>
    </div>
  )
}