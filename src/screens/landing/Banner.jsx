import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import image1 from '../../assets/images/dashboard/Group178.png';
import image2 from '../../assets/images/dashboard/Group181.png';


const Banner = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                {/* Image for the first banner */}
                <img src={image1} alt="Banner 1"
                    style={{ width: '90%', height: '85%', objectFit: 'cover', marginTop: '2%'}}
                />
            </Grid>
            <Grid item xs={6}>
                {/* Image for the second banner */}
                <img src={image2} alt="Banner 2"
                    style={{ width: '100%', height: '85%', objectFit: 'cover' }}
                />
            </Grid>
        </Grid>
    );
};

export default Banner;
