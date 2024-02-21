import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
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
];

import card1Image from '../../assets/images/dashboard/spinWheel.png';
import card2Image from '../../assets/images/dashboard/slotMachine.png';
import card4Image from '../../assets/images/dashboard/poker.png';
import card5Image from '../../assets/images/dashboard/mines.png';
import card6Image from '../../assets/images/dashboard/dice.png';
import card7Image from '../../assets/images/dashboard/headsTails.png';
import { CPrimary, CSecondary, darkBlue } from '../../assets/theme/colors';


const scroll_Container = {
    display: 'flex',
    overflowX: 'auto',
    marginTop: '20px', 
    backgroundColor: darkBlue,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: "2.2%",
    paddingBottom: "2.2%",
    paddingRight: "7%",
    marginLeft: "-6.2%",
    paddingLeft: "3%",

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
    width: "3%",
    marginLeft: "-14%",
    fontSize: 15,
    height: "4%",
    marginTop: "8.1%",
    paddingTop: "2%",
    paddingLeft: "3%",
    paddingBottom:"1%",

};

const dotStyle = {
    position: 'absolute',
    top: '50%',          
    left: '1.5rem',      
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'green',
};



export default function LiveGamesCard() {


    return (

        <Grid container spacing={0} style={{ marginLeft: "10%" }}>
            {/* First Grid for Live GAMES */}
            <Grid item xs={2.1} style={heading_Container}>
                <span style={dotStyle}></span>
                &nbsp;&nbsp;LIVE GAMES
            </Grid>


            {/* Second Grid for cardData */}
            <Grid item xs={11.2} style={scroll_Container}>
                {cardData.map((card) => (
                    <Grid item key={card.id} xs={12} sm={4} md={4} lg={3}>
                        <Card style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: CPrimary, borderWidth: 2, marginRight: "3%", marginLeft: "5%" }}>
                            <CardMedia
                                component="img"
                                //height={"45%"}
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

