import React from 'react';
import Grid from '@mui/material/Grid';
import { CPrimary, CSecondary } from '../../assets/theme/colors';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import LiveGamesBanner from './LiveGamesBanner';
import LiGameCard from './LiGameCard';
import bingo from '../../assets/images/dashboard/bingo.png';
import baccarat from '../../assets/images/dashboard/baccarat.png';
import cardmonte from '../../assets/images/dashboard/3cardmonte.png';
import roulette from '../../assets/images/dashboard/roulette.png';
import cardss from '../../assets/images/dashboard/3cards.png';
import card1Image from '../../assets/images/dashboard/crashgame.png';
import card2Image from '../../assets/images/dashboard/RedDog.png';
import card3Image from '../../assets/images/dashboard/Checkers.png';
import card4Image from '../../assets/images/dashboard/crystal.png';
import card5Image from '../../assets/images/dashboard/blackJack.png';

function createData(id, name, imageSrc) {
  return { id, name, imageSrc };
}

const cardData1 = [
  createData(0, 'Bingo', bingo),
  createData(1, 'Crash Game', card1Image),
  createData(3, 'Baccarat', baccarat),
  createData(4, 'Crystal', card4Image),
  createData(5, '3Card Monte', cardmonte),
  createData(6, 'Roulette', roulette),
];

const cardData2 = [
  createData(6, 'Roulette', roulette),
  createData(5, 'Black Jack', card5Image),
  createData(7, '3Card Monte', cardss),
  createData(8, 'Red dog', card2Image),
  createData(9, 'Checkers', card3Image),
  createData(0, 'Bingo', bingo),
];


const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const lineStyle = {
  height: '2px',
  width: '40%',
  backgroundColor: "gray",
};

const textStyle = {
  margin: '0 10px',
  fontSize: '15px',
  color: CSecondary,
};


const dotStyle = {
  top: '50%',
  left: '20%',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: 'green',
};


const LiveGames = () => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} style={{ marginLeft: "2%" }}>
        <LiveGamesBanner />
      </Grid>

      <Grid item xs={12} style={{ marginLeft: "2%", marginTop: "-2%" }}>
        <LiGameCard />
      </Grid>

      <Grid item xs={12} style={{ marginTop: "2%", marginLeft: "2%" }}>
        <div style={containerStyle}>
          <div style={lineStyle}></div>
          <span style={textStyle}>&nbsp;</span>
          <span style={dotStyle}></span>
          <span style={textStyle}>&nbsp;&nbsp;Live Games</span>
          <div style={lineStyle}></div>
        </div>
      </Grid>

      <Grid container xs={12} style={{ marginTop: "5%", marginLeft: "5%" }}>
        <Grid item container xs={12} sm={12} md={12} lg={12} spacing={1}>
          {cardData1.map((card) => (
            <Grid item key={card.id} xs={2} sm={2} md={2} lg={2} >
              <Card style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, marginRight: "2%", marginLeft: "2%", }}>
                <CardMedia
                  component="img"
                  image={card.imageSrc}
                  alt={card.name}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>


      <Grid item xs={12} style={{ marginTop: "2%", marginLeft: "2%" }}>
        <div style={containerStyle}>
          <div style={lineStyle}></div>
          <span style={textStyle}>&nbsp;</span>
          <span style={dotStyle}></span>
          <span style={textStyle}>&nbsp;&nbsp;Live Sports</span>
          <div style={lineStyle}></div>
        </div>
      </Grid>

      <Grid container style={{ marginTop: "5%", marginLeft: "5%" }}>
        <Grid item container xs={12} sm={12} md={12} lg={12} spacing={1}>
          {cardData2.map((card) => (
            <Grid item key={card.id} xs={2} sm={2} md={2} lg={2} >
              <Card style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, marginRight: "2%", marginLeft: "2%", }}>
                <CardMedia
                  component="img"
                  image={card.imageSrc}
                  alt={card.name}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>


    </Grid>
  )
}

export default LiveGames;
