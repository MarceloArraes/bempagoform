import type { NextPage } from 'next'
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAppThemeContext } from '../lib/ThemeContext';
import { Button } from '@mui/material';
import { useRouter } from 'next/router'


const CheckOut: NextPage = () => {
  const { changeTheme } = useAppThemeContext();

  return (
      <div className={styles.container}>
        <Head>
          <title>Bem Paggo</title>
          <meta name="description" content="Desafio de Front End" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Button variant="contained" onClick={changeTheme}>Change Themes</Button>
        <main className={styles.main}>
          <h1 className={styles.title}>
            CheckOut
          </h1>
          </main>
      </div>
  )
}

export default CheckOut
