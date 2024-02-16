import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

import Grid from '@mui/material/Grid';
import banner1 from '../../assets/images/dashboard/divbanner1.png';
import banner2 from '../../assets/images/dashboard/divbanner2.png';
import bingo from '../../assets/images/dashboard/bingo.png';
import crashgame from '../../assets/images/dashboard/crashgame.png';
import baccarat from '../../assets/images/dashboard/baccarat.png';
import cardmonte from '../../assets/images/dashboard/3cardmonte.png';
import roulette from '../../assets/images/dashboard/roulette.png';
import cardss from '../../assets/images/dashboard/3cards.png';
// Generate Order Data
function createData(id, game, time, bet, payout) {
  return { id, game, time, bet, payout };
}

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <img src={bingo} alt="Banner 2"
            style={{ width: '100%', height: '88%', objectFit: 'cover', marginTop: "-10%" }}
            />
        </Grid>
        <Grid item xs={2}>
          <img src={crashgame} alt="Banner 2"
            style={{ width: '100%', height: '88%', objectFit: 'cover', marginTop: "-10%" }}
          />
        </Grid>
        <Grid item xs={2}>
          <img src={baccarat} alt="Banner 2"
            style={{ width: '100%', height: '88%', objectFit: 'cover', marginTop: "-10%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <img src={banner1} alt="Banner 1"
            style={{ width: '100%', height: '88%', objectFit: 'cover', marginTop: '-3%',  borderTopLeftRadius: 5, borderTopRightRadius: 5,borderBottomLeftRadius:5,borderBottomRightRadius:5 }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <img src={cardmonte} alt="Banner 2"
            style={{ width: '100%', height: '88%', objectFit: 'cover', marginTop: "-10%" }}
            />
        </Grid>
        <Grid item xs={2}>
          <img src={roulette} alt="Banner 2"
            style={{ width: '100%', height: '88%', objectFit: 'cover', marginTop: "-10%" }}
          />
        </Grid>
        <Grid item xs={2}>
          <img src={cardss} alt="Banner 2"
            style={{ width: '100%', height: '88%', objectFit: 'cover', marginTop: "-10%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <img src={banner2} alt="Banner 1"
            style={{ width: '100%', height: '88%', objectFit: 'cover', marginTop: '-3%',  borderTopLeftRadius: 5, borderTopRightRadius: 5,borderBottomLeftRadius:5,borderBottomRightRadius:5 }}
            />
        </Grid>
      </Grid>
    </>
  );
}

