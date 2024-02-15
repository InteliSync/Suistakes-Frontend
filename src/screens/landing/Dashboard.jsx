
import * as React from 'react';
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
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from './listItems';
import LiveBets from './LiveBets';
import Banner from './Banner';
import Cards from './Cards';
import image1 from '../../assets/images/dashboard/suiStakeLogo.png';
import image2 from '../../assets/images/dashboard/PokerChip.png';
import Button from '../../components/Button';
import { CPrimary, CSecondary, backgroundColor } from '../../assets/theme/colors'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

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
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'relative',

  };

  const lineStyle = {
    height: '2px',
    width: '41%', // Adjust the width of the lines as needed
    backgroundColor: CSecondary,
  };

  const textStyle = {
    margin: '0 10px', // Adjust the margin as needed
    fontSize: '18px', // Adjust the font size as needed
    //fontWeight: 'bold',
    color: CSecondary,

  };


  const CustomScrollbar = styled('div')({
    overflow: 'auto',
    flexGrow: 1,
    height: '100vh',
  });


  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (

    <div style={{ backgroundColor: backgroundColor }}>
      <ThemeProvider theme={defaultTheme} style={{ backgroundColor: CPrimary }}>
        <Box sx={{
          display: 'flex',
          pr: '24px',
        }}>

          <CssBaseline />
          <AppBar position="absolute" open={open}>

            <Toolbar
              sx={{
                //  pr: '24px', // keep right padding when drawer closed
                backgroundColor: CPrimary
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <img src={image2} alt="logo"
                  style={{ marginRight: "5%", }}
                />
              </IconButton>


              <Typography
                component="h1"
                variant="h6"
                color={CSecondary}
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Welcome
              </Typography>
              <IconButton color="inherit">

                <Button />

              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open} style={{ backgroundColor: CPrimary ,
                borderBottom: `2px solid ${CPrimary}`}}>
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
              <IconButton onClick={toggleDrawer}>

                <ChevronLeftIcon style={{ color: "gray" }} />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav" style={{ backgroundColor: CPrimary, flex: 1 }}>
              {mainListItems}

            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              // backgroundColor: (theme) =>
              //   theme.palette.mode === 'light'
              //     ? theme.palette.grey[100]
              //     : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'scroll',
              '&::-webkit-scrollbar': {
                width: '0.5em',  // Adjust the width as needed
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: backgroundColor,  // Adjust the color as needed
              },
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} style={{ marginTop: "-3%" }}>
                  <Banner />
                </Grid>
                <Grid item xs={12} style={{ marginTop: "-5%" }}>
                  <div style={containerStyle}>
                    <div style={lineStyle}></div>
                    <span style={textStyle}>Featured Games</span>
                    <div style={lineStyle}></div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Cards />
                </Grid>
                <Grid item xs={12} style={{marginTop:"2%",marginBottom:"2%"}}>
                  <div style={containerStyle}>
                    <div style={{
                      height: '2px',
                      width: '44%',
                      backgroundColor: CSecondary
                    }}></div>
                    <span style={textStyle}>  Live Bets   </span>
                    <div style={{
                      height: '2px',
                      width: '44%',
                      backgroundColor: CSecondary
                    }}></div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <LiveBets />
                  </Paper>
                </Grid>
              </Grid>

            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </div>

  );
}