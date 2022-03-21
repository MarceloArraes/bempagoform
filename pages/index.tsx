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
import Avatar from '@mui/material/Avatar';
import { borderRadius } from '@mui/system';
import CheckboxLanguages from '../lib/components/CheckBoxLanguages';

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
    <Box
    sx={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      //backgroundColor: appConfig.theme.colors.primary[500],
      backgroundColor: 'background.pink',
      minHeight: 'max-content',
  }}
    >
      
      <Box sx={{
        //display: 'flex',
        flexDirection: 'column',
        //flex:1,
        //alignItems: 'left',
        //justifyContent: 'center',
        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
        borderRadius: '7px',
        backgroundColor: 'background.paper',
        width: '70%',
        maxWidth: '500px',
        minHeight: '95%',
        marginTop: '3%',
        overflow: 'overlay',
        display:'inline-block',
        
      }}>
        
         <Titulo/> 
        <CheckboxLanguages/>
        {/* Here i will make the checkBoxes*/}
        {/* Here i will ask how many stickers*/}
        {/* Then a textField for observations*/}
        {/* change themes on the bottom.*/}

        <Button color="primary" onClick={changeTheme}>Change Themes</Button>
        <Button onClick={handleClick}>Go to CheckOut</Button>

      </Box>
    </Box>
  )
}

function Titulo() {

  const CustomizedTitleBox = styled(Box)`
    display: flex;

    height: 30%;
    width: 100%;
    background-color: #2e3676;
    border-radius: 7px;
    padding: 15px;
    padding-top: 15px;
    clip-path: ellipse(72% 100% at 37.46% 0%);
    color: #FFFFFF;
    margin-bottom: 25px;

  :hover {
    color: #2e8b57;
  }
`;

const StyledBox: React.FC = ({ children }) => {
  return <CustomizedTitleBox defaultValue={30}>{children}</CustomizedTitleBox>;
}

  return (
  <>  
  <StyledBox>
  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
    <Typography sx={{
      fontSize: '1rem',
    }} >
       Formulário para compra de <b>Pacote de adesivos</b>
      </Typography>
    <Box sx={{
      opacity:'0.3',
      paddingLeft: '25%',
      minWidth: '100px',
      }}>
      <img src="/img_568435.png" alt="logo"  width="95px" height="auto"/>
      {/* <Avatar variant="square" sx={{opacity:'0.5', width: 80, height: 80, position:'right'}}alt="delivery Box" src="/img_568435.png" />  */}
    </Box>
  </Box>
  </StyledBox>

  </>
  )
}

function Header() {
  return (
      <>
          <Box sx={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
              <Typography variant='body2'>
                  Bem Paggo
              </Typography>
          </Box>
      </>
  )
}



export default Home
