import React from 'react';
import Banner from '../landing/Banner';
import Grid from '@mui/material/Grid';
import BeastProtector from '../../assets/images/dashboard/beastProtector.png';
import Poker from '../../assets/images/dashboard/poker.png';
import Dice from '../../assets/images/dashboard/dice.png';
import Mines from '../../assets/images/dashboard/mines.png';
import RedDog from '../../assets/images/dashboard/RedDog2.png';
import SpinWheel from '../../assets/images/dashboard/spinWheel.png';
import Checkers from '../../assets/images/dashboard/Checkers2.png';
import { CPrimary, CSecondary } from '../../assets/theme/colors';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Rect from '../../assets/images/dashboard/Rect.png';
import PlayNowButton from '../../components/PlayNow';

function createData(id, name, imageSrc) {
  return { id, name, imageSrc };
}

const cardData1 = [
  createData(0, 'Poker', Poker),
  createData(1, 'Dice', Dice),
  createData(3, 'Mines', Mines),
];

const cardData2 = [
  createData(2, 'Red Dog', RedDog),
  createData(4, 'Spin Wheel', SpinWheel),
  createData(5, 'Checkers', Checkers),
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


const Games = () => {

  return (
    <Grid container spacing={3}>

      {/* First Component of the screen banner Start */}

      <Grid item xs={12} style={{ marginLeft: "2%" }}>
        <Banner />
      </Grid>

      {/* First Component of the screen banner end */}

      {/* Second Component of the screen Live Games Start */}


      <Grid item xs={6.5} style={{ marginTop: "-2%", marginLeft: "2%" }}>
        <div style={containerStyle}>
          <div style={lineStyle}></div>
          <span style={textStyle}>Live Games</span>
          <div style={lineStyle}></div>
        </div>
      </Grid>
      <Grid container xs={9} style={{ marginTop: "-5%", marginLeft: "5%" }}>
        <Grid item container xs={8} spacing={3}>
          {cardData1.map((card) => (
            <Grid item key={card.id} xs={4} sm={4} md={4} lg={4} style={{ marginTop: "20%" }}>
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

        <Grid item xs={4} style={{ marginTop: "-10%", display: 'block' }}>

          <div>
            <img
              src={BeastProtector}
              alt="logo"
              style={{ display: 'block' }}
            />
          </div>

          <div style={{ marginTop: "-40%", marginLeft: "88%", width: '100px' }}>
            <button style={{ backgroundColor: '#0088FF', borderRadius: 50, height: 40, color: CSecondary, padding: "3%", borderColor: "white", width: 100 }}>&nbsp;&nbsp;Play Now&nbsp;&nbsp;</button>
          </div>

        </Grid>

      </Grid>
      <Grid item xs={6.5} style={{ marginTop: "-250px", marginLeft: "2%" }}>
        <div style={containerStyle}>
          <div style={lineStyle}></div>
          <span style={textStyle}>Live Games</span>
          <div style={lineStyle}></div>
        </div>
      </Grid>
      <Grid item container xs={6} spacing={3} style={{ marginLeft: "1%" }} >
        {cardData2.map((card) => (
          <Grid item key={card.id} xs={4} sm={4} md={4} lg={4} style={{ marginTop: "-35%", marginBottom: "15%" }}>
            <Card style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, }}>
              <CardMedia
                component="img"
                image={card.imageSrc}
                alt={card.name}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Second Component of the screen Live Games end */}

    </Grid>
  )
}

export default Games;
