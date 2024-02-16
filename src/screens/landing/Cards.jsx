import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function createData(id, name, imageSrc) {
    return { id, name, imageSrc };
}

const cardData = [
    createData(0, 'Spin Wheel', card4Image),
    createData(1, 'Slot Machine', card6Image),
    createData(3, 'Poker', card5Image),
    createData(4, 'Mines', card2Image),
    createData(5, 'Dice', card1Image),
    createData(6, 'CoinFlip', card7Image),
    // Add more data as needed
];

import card1Image from '../../assets/images/dashboard/spinWheel.png';
import card2Image from '../../assets/images/dashboard/slotMachine.png';
import card3Image from '../../assets/images/dashboard/roulette.png';
import card4Image from '../../assets/images/dashboard/poker.png';
import card5Image from '../../assets/images/dashboard/mines.png';
import card6Image from '../../assets/images/dashboard/dice.png';
import card7Image from '../../assets/images/dashboard/headsTails.png';
import { CPrimary, CSecondary, darkBlue } from '../../assets/theme/colors';


const scroll_Container = {
    display: 'flex',
    overflowX: 'auto',
    marginTop: '20px', /* Adjust margin as needed */
    backgroundColor: darkBlue,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: "2.2%",
    paddingBottom: "2.2%",
    paddingRight: "3%",
    marginLeft:"-6.2%",
    paddingLeft:"3%",
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
    marginLeft:"-14%",
    fontSize:15,
    height:"3%",
    marginTop:"7.9%",
    paddingTop:"2%",
    paddingLeft:"1%",
    
};




export default function Cards() {



    return (

        <Grid container spacing={0} style={{justifyContent:"center",}}>
        {/* First Grid for FEATURED GAMES */}
        <Grid item xs={2} style={heading_Container}>
            FEATURED GAMES
        </Grid>
    
        {/* Second Grid for cardData */}
        <Grid item xs={10} style={scroll_Container}>
            {cardData.map((card) => (
                <Grid item key={card.id} xs={12} sm={4} md={4} lg={3}>
                    <Card style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginRight: "5%", marginLeft: "5%", borderColor: CPrimary, borderWidth: 2, }}>
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
    </Grid>
    
    );
}

