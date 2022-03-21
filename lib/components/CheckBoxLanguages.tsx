import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';



export default function CheckboxLanguages() {
  const [state, setState] = React.useState({
    react: false,
    vue: false,
    angular: false,
  });

  const handleChange = (event: { target: { name: any; checked: any; }; }) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    
  };

  const { react, vue, angular } = state;
  console.log(state);

  return (
    <FormGroup sx={{
      paddingLeft: '2rem',
    }}>
      <Typography>Quais adesivos?</Typography>
      <FormControlLabel control={<Checkbox name='react' checked={react} onChange={handleChange} />} label="React" />
      <FormControlLabel control={<Checkbox name='vue'  checked={vue} onChange={handleChange} />} label="Vue" />
      <FormControlLabel control={<Checkbox name='angular'  checked={angular} onChange={handleChange}/>} label="Angular" />
    </FormGroup>
  );
}