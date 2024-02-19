import React from 'react';
import { darkBlue } from '../../assets/theme/colors';
import Grid from '@mui/material/Grid';
import Casino from '../../assets/images/dashboard/casino.png'

const Contact = () => {
 
  return (
    <Grid container spacing={3} style={{    backgroundColor: darkBlue   ,marginLeft:"2%" }}>
      <Grid container xs={9} style={{}}>
        <Grid item container xs={8} spacing={3}>
        <img
            src={Casino}
            alt="logo"
            style={{}}
          />
        </Grid>

        <Grid item xs={4} style={{ }}>
          <img
            src={Casino}
            alt="logo"
            style={{}}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact