import type { NextPage } from 'next'
import { createContext, ReactChild, ReactFragment, ReactPortal, useCallback, useContext, useMemo, useState } from 'react';
//import Image from 'next/image'
import { useAppThemeContext } from '../lib/ThemeContext';
import { Button } from '@mui/material';
import { useRouter } from 'next/router'
import Box from '@mui/system/Box';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const CheckOut: NextPage = () => {
  const { changeTheme } = useAppThemeContext();

  const router = useRouter();
  
  const {
    query: { itens, quantities, comentary },
  } = router

  if(typeof itens === 'string'){
    var itensArray: Array<string> = [itens] as Array<string>;
  }else{
  var itensArray: Array<string> = itens as Array<string>;
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
        
        {itensArray? itensArray.map(function (item: string) {
            return (
              <Typography sx={{
                paddingLeft: '2rem',
                fontSize: '1.5rem',
              }} key={item}> {item}  {quantities}  Unidades</Typography>
            );
          }): 
            <Typography sx={{
              paddingLeft: '2rem',
              fontSize: '1.5rem',
            }}> Adesivos não selecionados. </Typography>
          }

          <Typography sx={{
              paddingLeft: '2rem',
              fontSize: '1rem',
              backgroundColor: 'secondary.light',
            }}
          >Observações do Pedido: {comentary}</Typography>
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
       Checkout da compra de <b>Pacote de adesivos</b>
      </Typography>
    <Box sx={{
      opacity:'0.3',
      paddingLeft: '25%',
      minWidth: '100px',
      }}>
      <Image src="/img_451655.png" alt="logo"  layout='fixed' width={90} height={90} />
      {/* <Avatar variant="square" sx={{opacity:'0.5', width: 80, height: 80, position:'right'}}alt="delivery Box" src="/img_568435.png" />  */}
    </Box>
  </Box>
  </StyledBox>

  </>
  )
}

export default CheckOut
