import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';



export default function CheckboxLanguages(props: any ) {


  const handleChange = (event: { target: { name: any; checked: any; }; }) => {
    props.setState({
      ...props.state,
      [event.target.name]: event.target.checked,
    });
    
  };

  const { react, vue, angular } = props.state;
  console.log(props.state);

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