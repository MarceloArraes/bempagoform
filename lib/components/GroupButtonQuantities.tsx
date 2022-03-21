import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FormLabel from '@mui/material/FormLabel';

export default function GroupButtonQuantities() {
  const [quantities, setQuantities] = React.useState(0);

  const buttons = [
    <Button variant="contained" key="+" onClick={()=>setQuantities(quantities+1)}><AddIcon/></Button>,
    <TextField sx={{
      width: '3rem',
    }} value={quantities}  key="textfieldQuantities"/>,
    <Button variant="contained" key="-" onClick={()=>setQuantities(Math.abs(quantities-1))}><RemoveIcon/></Button>,
  ];


  return (
    <Box
      sx={{
        display: 'flex',
        padding: '2rem',
      flexDirection: 'column',
        /* alignItems: 'center', */ 
        '& > *': {
          m: 1,
        },
      }}
    >
      <Typography>Quantos adesivos de cada?</Typography>
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}