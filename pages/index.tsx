import type { NextPage } from 'next'
import React, { Children, createContext, useCallback, useContext, useMemo, useState } from 'react';
import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAppThemeContext } from '../lib/ThemeContext';
import { Button } from '@mui/material';
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';

interface ITitulo {
  children: string;
  tag: string;
}


const Home: NextPage = () => {
  const router = useRouter();
  const { changeTheme } = useAppThemeContext();

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    router.push('/checkout');
  }


  return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}>
        <Head>
          <title>Bem Paggo</title>
          <meta name="description" content="Desafio de Front End" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box>
        <Titulo>TITULO</Titulo>
        </Box>
        <Button color="secondary" variant="contained" onClick={changeTheme}>Change Themes</Button>
        <Button variant="contained" onClick={handleClick}>Go to CheckOut</Button>
        <main className={styles.main}>
          
          <h1 className={styles.title}>
            Teste
          </h1>
          </main>
      </Box>
  )
}

function Titulo(props: { children: string}) {

/*   .hero {
    display: block;
    box-sizing: border-box;
    height: 500px;
    background-color: #dc3d4b;
    clip-path: ellipse(126% 100% at 6.68% 0%);
    } */

  const CustomizedTitleBox = styled(Box)`
    display: block;
    box-sizing: border-box;
    height: 125%;
    
    background-color: #dc3d4b;
    clip-path: ellipse(126% 100% at 6.68% 0%);
    color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

const StyledBox: React.FC = ({ children }) => {
  return <CustomizedTitleBox defaultValue={30}>{children}</CustomizedTitleBox>;
}

  return (
  <>  <StyledBox>
      <Typography variant="h6" gutterBottom component="div">
       Formulário <br/>para compra de<br/> 
      </Typography>

       <Typography variant="h6" fontWeight='bold' gutterBottom component="div">
       Pacote de adesivos<br/>
      </Typography>
      </StyledBox>

  </>
  )
}



export default Home
