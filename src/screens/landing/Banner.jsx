import React from 'react';
import Grid from '@mui/material/Grid';
import image1 from '../../assets/images/dashboard/image1.png';
import image2 from '../../assets/images/dashboard/image2.png';
import image3 from '../../assets/images/dashboard/image3.png';


const Banner = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                {/* Image for the first banner */}
                <img src={image1} alt="Banner 1"
                    style={{ width: '100%', height: '75%', objectFit: 'cover', marginTop: '2%', marginRight: "-5%", borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                />
            </Grid>
            <Grid item xs={3}>
                {/* Image for the second banner */}
                <img src={image2} alt="Banner 2"
                    style={{ width: '100%', height: '79%', objectFit: 'cover' }}
                />
            </Grid>
            <Grid item xs={3}>
                {/* Image for the third banner */}
                <img src={image3} alt="Banner 2"
                    style={{ width: '100%', height: '88%', objectFit: 'cover', marginTop: "-10%" }}
                />
            </Grid>
        </Grid>
    );
};

export default Banner;
