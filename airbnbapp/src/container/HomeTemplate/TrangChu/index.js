import React from 'react'
import "./style.css"
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import PersonPinCircleSharpIcon from '@mui/icons-material/PersonPinCircleSharp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function TrangChu() {
  const [location, setLocation] = React.useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div className='trangChuCarousel'>
      <Grid container>
        <Grid item xs={6}>
          <h1>fsdfsd</h1>
        </Grid>
        <Grid item xs={6} className="formTimKiem">
          <div>
            <FormControl sx={{ width: 130 }}>
              <Select
                value={location}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Địa điểm</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
