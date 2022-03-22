import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function GroupButtonQuantities() {
  const [quantities, setQuantities] = React.useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(e.currentTarget.name === 'add'){
      setQuantities(quantities + 1);
    }else{
      if(quantities > 0){
        setQuantities(quantities - 1);
      }
    }
  }


  const buttons = [
    <Button name="add" variant="contained" key="+" onClick={handleClick}><AddIcon/></Button>,
    <TextField sx={{
      width: '3rem',
    }} value={quantities}  key="textfieldQuantities"/>,
    <Button name="remove" variant="contained" key="-" onClick={ handleClick}><RemoveIcon/></Button>,
  ];


  return (
    <Box
      sx={{
        display: 'flex',
        paddingLeft: '2rem',
        flexDirection: 'column',

      }}
    >
      <Typography>Quantos adesivos de cada?</Typography>
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}