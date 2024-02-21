
import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { mainListItems } from './listItems';
import { secondaryListItems } from './listItemSecondary';
import { CopyRight } from './CopyRight';
import LiveBets from './LiveBets';
import Banner from './Banner';
import Cards from './Cards';
import image1 from '../../assets/images/dashboard/suiStakeLogo.png';
import LeftIcon from '../../assets/images/dashboard/LeftIcon.png';
import Button from '../../components/Button';
import { CPrimary, CSecondary, backgroundColor, darkBlue } from '../../assets/theme/colors'
import Games from '../games/Games';
import LiveGames from '../liveGames/LiveGames';
import Faq from '../faq/faq';
import Contact from '../contact/Contact';

const drawerWidth = 220;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      borderRight: `1px solid ${backgroundColor}`,
      borderTop: `1px solid ${backgroundColor}`,
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(7),
        },
      }),
    },
  }),
);

const defaultTheme = createTheme();

export default function Dashboard() {

  const [selectedItem, setSelectedItem] = useState('home');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const lineStyle = {
    height: '2px',
    width: '42%',
    backgroundColor: "gray",
  };

  const textStyle = {
    margin: '0 10px',
    fontSize: '18px',
    color: CSecondary,

  };

  const customDivider = {
    backgroundColor: backgroundColor,
    height: 1.5,

  };

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (

    <div style={{ backgroundColor: backgroundColor, }}>
      <ThemeProvider theme={defaultTheme} style={{ backgroundColor: CPrimary }}>
        <Box sx={{
          display: 'flex',
          pr: '24px',
        }}>
          <CssBaseline />

          <AppBar position="absolute" open={open} style={{ backgroundColor: CPrimary, }}>

            <Toolbar

              style={{ backgroundColor: CPrimary }}
            >

              <IconButton onClick={toggleDrawer}>
                <img src={LeftIcon} alt="logo"
                  style={{ marginLeft: -15 }}
                />
              </IconButton>

              <Typography
                component="h1"
                variant="h6"
                color={CSecondary}
                noWrap
                sx={{ flexGrow: 1 }}
              >

              </Typography>

              <IconButton color="inherit">

                <Button />

              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open} style={{
            backgroundColor: CPrimary,
            borderBottom: `2px solid ${CPrimary}`,
          }}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "space-evenly",
                px: [1],
                backgroundColor: CPrimary,

              }}
            >

              <img src={image1} alt="logo"
                style={{ marginRight: "5%", }}
              />

            </Toolbar>
            
            <List component="nav"  style={{ backgroundColor: CPrimary, flex: 1,}}>
            <div style={{ paddingLeft: "10%", paddingRight: "10%", backgroundColor: CPrimary, marginTop: "-5%",marginBottom:'5%'  }}>
                <div style={{ height: '1.8px', backgroundColor: darkBlue, }}></div>
              </div>

              {mainListItems(handleItemClick, selectedItem)}
              <div style={{ paddingLeft: "10%", paddingRight: "10%", backgroundColor: CPrimary, marginTop: "5%",marginBottom:'5%' }}>
              <div style={{ height: '1px', backgroundColor: darkBlue, }}></div>
              </div>

              {secondaryListItems(handleItemClick, selectedItem)}
            
<div style={{marginTop:"20%"}}>
{CopyRight(handleItemClick, selectedItem)}

</div>
          </List>
          </Drawer>
          <Box
            component="main"
            sx={{

              flexGrow: 1,
              height: '100vh',

              overflowY: 'scroll',
              scrollbarWidth: 'none', msOverflowStyle: 'none',
            }}
          >
            <Toolbar />
            {selectedItem === 'home' && (
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} style={{position:"static"}}>
                <Grid container spacing={3}>
                  <Grid item xs={12} style={{ marginLeft: "2%" }}>
                    <Banner />
                  </Grid>

                  <Grid item xs={12} style={{ marginTop: "-5%" }}>
                    <Cards />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: "2%", marginBottom: "2%", marginLeft: "2%" }}>
                    <div style={containerStyle}>
                      <div style={lineStyle}></div>
                      <span style={textStyle}>&nbsp;&nbsp;&nbsp;Live Games&nbsp;&nbsp;&nbsp;</span>
                      <div style={lineStyle}></div>
                    </div>
                  </Grid>
                  <Grid item xs={12} style={{ marginLeft: "2%" }}>

                    <LiveBets />

                  </Grid>
                </Grid>

              </Container>
            )}
            {selectedItem === 'game' && (
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Games />
              </Container>
            )}
            {selectedItem === 'livegame' && (
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <LiveGames />
              </Container>
            )}
            {selectedItem === 'faq' && (
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Faq />
              </Container>
            )}
            {selectedItem === 'contact' && (
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Contact />
              </Container>
            )}
          </Box>
        </Box>
      </ThemeProvider>
    </div>

  );
}