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
    createData(0, 'Spin Wheel', card1Image),
    createData(1, 'Slot Machine', card2Image),
    createData(2, 'Red Dog', card3Image),
    createData(3, 'Poker', card4Image),
    createData(4, 'Mines', card5Image),
    createData(5, 'Dice', card6Image),
    createData(6, 'CoinFlip', card7Image),
    createData(7, 'Chess', card8Image),
    // Add more data as needed
];

import card1Image from '../../assets/images/dashboard/spinWheel.png';
import card2Image from '../../assets/images/dashboard/slotMachine.png';
import card3Image from '../../assets/images/dashboard/redDog.png';
import card4Image from '../../assets/images/dashboard/poker.png';
import card5Image from '../../assets/images/dashboard/mines.png';
import card6Image from '../../assets/images/dashboard/dice.png';
import card7Image from '../../assets/images/dashboard/coinFlip.png';
import card8Image from '../../assets/images/dashboard/checkers.png';

export default function Cards() {
    return (
        <Grid container spacing={3} >
            {cardData.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={card.imageSrc}
                            alt={card.name}
                        />
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {card.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
