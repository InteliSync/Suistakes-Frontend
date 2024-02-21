import React from 'react';
import Grid from '@mui/material/Grid';
import Banner1 from '../../assets/images/dashboard/LiveCasinoBanner.png';
import Banner2 from '../../assets/images/dashboard/LiveCheckersBanner.png';
import Banner3 from '../../assets/images/dashboard/LiveGamesBanner.png';
import Banner4 from '../../assets/images/dashboard/LivePokerBanner.png';
import Image1 from '../../assets/images/dashboard/CasinoBannerImg.png';
import Image2 from '../../assets/images/dashboard/ChackersBannerImg.png';
import Image3 from '../../assets/images/dashboard/GamesBannerImg.png';
import Image4 from '../../assets/images/dashboard/PokerBannerImg.png';


const LiGameCard = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <div style={{
                    display: 'flex',
                    objectFit: 'cover',
                    borderRadius: "5%",
                }}>
                    <img src={Banner2} alt="Banner 2"
                        style={{ width: '100%', height: '130%', }}
                    />
                    <img src={Image2} alt="Image 2"
                        style={{ marginLeft: "-40%", marginTop: "-5%" }}
                    />
                </div>
            </Grid>

            <Grid item xs={3}>
                <div style={{
                    display: 'flex',
                    objectFit: 'cover',
                    borderRadius: "5%",
                }}>
                    <img src={Banner1} alt="Banner 2"
                        style={{ width: '100%', height: '130%', }}
                    />
                    <img src={Image1} alt="Image 2"
                        style={{ marginLeft: "-40%" }}
                    />
                </div>
            </Grid>
            <Grid item xs={3}>
                <div style={{
                    display: 'flex',
                    objectFit: 'cover',
                    borderRadius: "5%",
                }}>
                    <img src={Banner3} alt="Banner 2"
                        style={{ width: '100%', height: '130%', }}
                    />
                    <img src={Image3} alt="Image 2"
                        style={{ marginLeft: "-40%" }}
                    />
                </div>
            </Grid>
            <Grid item xs={3}>
                <div style={{
                    display: 'flex',
                    objectFit: 'cover',
                    borderRadius: "5%",
                }}>
                    <img src={Banner4} alt="Banner 2"
                        style={{ width: '100%', height: '130%', }}
                    />
                    <img src={Image4} alt="Image 2"
                        style={{ marginLeft: "-40%" }}
                    />
                </div>
            </Grid>
        </Grid>
    );
};

export default LiGameCard;
