import type { NextPage } from 'next'
import React, { Children, createContext, useCallback, useContext, useMemo, useState } from 'react';
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
        flex:1,
        alignItems: 'left',
        //justifyContent: 'center',
        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
        borderRadius: '5px',
        maxWidth: '100%',
        height: '100%',
      }}>
        <Header />
        <Titulo>TITULO</Titulo>

        <Button color="secondary" variant="contained" onClick={changeTheme}>Change Themes</Button>
        <Button variant="contained" onClick={handleClick}>Go to CheckOut</Button>
        <main >
          
          <h1 >
            Teste
          </h1>
          </main>
      </Box>
  )
}

function Titulo(props: { children: string}) {

  const CustomizedTitleBox = styled(Box)`
    display: flex;

    height: 30%;
    width: 100%;
    background-color: #2e3676;
    clip-path: ellipse(72% 100% at 37.46% 0%);
    color: #FFFFFF;

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
      
       <Typography variant="h6" fontWeight='bold' gutterBottom component="div">
       Pacote de adesivos<br/>
      </Typography>
      </Typography>
      </StyledBox>

  </>
  )
}

function Header() {
  return (
      <>
          <Box sx={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
              <Typography variant='body2'>
                  Metrics
              </Typography>
              <Button
                  variant='outlined'
                  label='Logout'
                  href="/"
              >Logout
              </Button>
          </Box>
      </>
  )
}



export default Home
