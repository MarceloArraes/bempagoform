import type { NextPage } from 'next'
import React, { Children, createContext, useCallback, useContext, useMemo, useState } from 'react';
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAppThemeContext } from '../lib/ThemeContext';
import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import CheckboxLanguages from '../lib/components/CheckBoxLanguages';
import GroupButtonQuantities from '../lib/components/GroupButtonQuantities';
import Image from 'next/image'
import { log } from 'console';
interface ITitulo {
  children: string;
  tag: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const { changeTheme } = useAppThemeContext();
  const [state, setState] = React.useState({
    react: false,
    vue: false,
    angular: false,
  });
  const [quantities, setQuantities] = React.useState(0);
  const [comentary, setComentary] = React.useState('');

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    let itens: string[] = [];
    
    Object.entries(state).forEach((item) => {
      if (item[1]) {
        itens.push(item[0]);
      }
    });

   router.push({
      pathname: '/checkout',
      query: { itens: itens, quantities: quantities, comentary: comentary } as any,
    }) 
  }
  const handleTextFieldComentary = (e: { target: { value: string; }; }) => {
    setComentary(e.target.value);
  }

  return (
    <Box
    sx={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      height: 'auto',
      width: '100vw',
      //backgroundColor: appConfig.theme.colors.primary[500],
      backgroundColor: 'background.pink',
      /* minHeight: 'min-content', */
  }}
    >
      <Box sx={{
        //display: 'flex',
        flexDirection: 'column',
        //flex:1,
        alignItems: 'center',
        //justifyContent: 'center',
        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
        borderRadius: '7px',
        backgroundColor: 'background.paper',
        width: '85%',
        maxWidth: '500px',
        minHeight: '95%',
        marginTop: '3%',
        overflow: 'overlay',
        display:'inline-block',
        
      }}>
        
         <Titulo/> 
         {/* Here i will make the checkBoxes*/}
        <CheckboxLanguages state={state} setState={setState} />
        {/* Here i will ask how many stickers*/}
        <GroupButtonQuantities quantities={quantities} setQuantities={setQuantities}/>
        
        
        {/* Then a textField for observations*/}
        <Box sx={{
          alignItems: 'left',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '2rem',
          marginLeft: '2rem',
          marginRight: '2rem',
        }}>
        <Typography>Observa????es</Typography>
        <TextField sx={{
          backgroundColor: 'secondary.light',
        }} multiline rows={4} variant="outlined" onChange={handleTextFieldComentary}/>
        </Box>
        {/* change themes on the bottom.*/}
        <Box sx={{ width: '100%', paddingBottom: '16px', display: 'flex', alignItems: 'center', backgroundColor: 'secondary.light', justifyContent: 'space-between' }} >
        <Button data-cy="chg-btn" variant="contained" size='small' sx={{marginLeft:'2rem'}}  onClick={changeTheme}>Change Themes</Button>
        <Button data-cy="snd-btn" variant="contained" size='small' sx={{marginRight:'2rem'}} onClick={handleClick}>Enviar</Button>
        </Box>
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
    padding-top: 25px;
    
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
      marginTop:' 20px',
    }} >
       Formul??rio para compra de <b>Pacote de adesivos</b>
      </Typography>
    <Box sx={{
      opacity:'0.3',
      paddingLeft: '25%',
      minWidth: '100px',
      }}>
      <Image src="/img_568435.png" alt="logo"  layout='fixed' width={90} height={90} />
      {/* <Avatar variant="square" sx={{opacity:'0.5', width: 80, height: 80, position:'right'}}alt="delivery Box" src="/img_568435.png" />  */}
    </Box>
  </Box>
  </StyledBox>

  </>
  )
}


export default Home
