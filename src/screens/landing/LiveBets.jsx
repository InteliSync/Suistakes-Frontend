import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import bingo from '../../assets/images/dashboard/bingo.png';
import baccarat from '../../assets/images/dashboard/baccarat.png';
import cardmonte from '../../assets/images/dashboard/3cardmonte.png';
import roulette from '../../assets/images/dashboard/roulette.png';
import cardss from '../../assets/images/dashboard/3cards.png';

function createData(id, name, imageSrc) {
  return { id, name, imageSrc };
}

const cardData = [
  createData(0, 'Bingo', bingo),
  createData(1, 'Crash Game', card1Image),
  createData(3, 'Baccarat', baccarat),
  createData(4, 'Crystal', card4Image),
  createData(5, '3Card Monte', cardmonte),
  createData(6, 'Roulette', roulette),
  createData(2, 'Black Jack', card5Image),
  createData(7, '3Card Monte', cardss),
  createData(8, 'Red dog', card2Image),
  createData(9, 'Checkers', card3Image),
];

import card1Image from '../../assets/images/dashboard/crashgame.png';
import card2Image from '../../assets/images/dashboard/RedDog.png';
import card3Image from '../../assets/images/dashboard/Checkers.png';
import card4Image from '../../assets/images/dashboard/crystal.png';
import card5Image from '../../assets/images/dashboard/blackJack.png';
import { CPrimary, CSecondary, darkBlue } from '../../assets/theme/colors';


const scroll_Container = {
  display: 'flex',
  marginTop: '20px', 
};
const heading_Container = {
  flexDirection: 'column-reverse',
  backgroundColor: CPrimary,
  fontWeight: 'bold',
  color: CSecondary,
  overflowY: 'auto',
  transform: 'rotate(-90deg)', // Rotate by 90 degrees counterclockwise
  justifyContent: "center",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: "2%",
  marginLeft: "-14%",
  fontSize: 15,
  height: "3%",
  marginTop: "7.9%",
  paddingTop: "2%",
  paddingLeft: "1%",

};


export default function Orders() {
  return (
    <>
      <Grid container xs={12} style={scroll_Container} wrap="wrap">
        {cardData.map((card) => (
          <Grid item key={card.id} xs={6} sm={3} md={3} lg={2.3}>
            <Card style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, marginRight: "5%", marginLeft: "5%",marginBottom:"15%", borderColor: CPrimary, borderWidth: 2, }}>
              <CardMedia
                component="img"
                height={"25%"}
                image={card.imageSrc}
                alt={card.name}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

    </>
  );
}

