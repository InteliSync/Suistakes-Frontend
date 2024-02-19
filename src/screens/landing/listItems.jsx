import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '../../assets/images/dashboard/Home.png';
import GamesIcon from '../../assets/images/dashboard/Game.png';
import LiveGamesIcon from '../../assets/images/dashboard/LiveGame.png';
import FAQIcon from '../../assets/images/dashboard/Question.png';
import ContactIcon from '../../assets/images/dashboard/Headset.png';
import DiceWallpaper from '../../assets/images/dashboard/Dicewallpaper.png'
import { CPrimary, CSecondary, backgroundColor } from '../../assets/theme/colors'

export const mainListItems = (handleItemClick, selectedItem) => {
  const getIcon = (itemName) => {
    switch (itemName) {
      case 'home':
        return HomeIcon;
      case 'game':
        return GamesIcon;
      case 'livegame':
        return LiveGamesIcon;
      case 'faq':
        return FAQIcon;
      case 'contact':
        return ContactIcon;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      {['home', 'game', 'livegame', 'faq', 'contact'].map((itemName) => (
        <ListItemButton
          key={itemName}
          onClick={() => handleItemClick(itemName)}
          style={{
            background: selectedItem === itemName ? 'linear-gradient(to right, #142547, #181F36)' : 'transparent',
          }}
        >
          <ListItemIcon>
            <img
              src={getIcon(itemName)}
              alt="logo"
              style={{ marginRight: "5%" }}
            />
          </ListItemIcon>
          <ListItemText primary={itemName.charAt(0).toUpperCase() + itemName.slice(1)} style={{ color: CSecondary }} />
          {selectedItem === itemName && (
            <img
              src={DiceWallpaper}
              alt="icon"
              style={{ width: 70,marginTop:-20 ,marginBottom:-20,marginLeft:57}}
            />
          )}
        </ListItemButton>
      ))}
    </React.Fragment>
  );
};


// import * as React from 'react';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Home from '../../assets/images/dashboard/Home.png';
// import Games from '../../assets/images/dashboard/Game.png';
// import LiveGames from '../../assets/images/dashboard/LiveGame.png';
// import FAQ from '../../assets/images/dashboard/Question.png';
// import Contact from '../../assets/images/dashboard/Headset.png';
// import { CPrimary, CSecondary, backgroundColor } from '../../assets/theme/colors'


// export const mainListItems = (handleItemClick, selectedItem) => (
//   <React.Fragment>
//     <ListItemButton onClick={() => handleItemClick('home')}
//       style={{
//         background: selectedItem === 'home' ? 'linear-gradient(to right, #142547, #181F36)' : 'transparent',
//       }}>
//       <ListItemIcon>
//         <img src={Home} alt="logo"
//           style={{ marginRight: "5%", }}
//         />
//       </ListItemIcon>
//       <ListItemText primary="Home" style={{ color: CSecondary }} />
//     </ListItemButton>
//     <ListItemButton onClick={() => handleItemClick('game')}
//       style={{
//         background: selectedItem === 'game' ? 'linear-gradient(to right, #142547, #181F36)' : 'transparent',
//       }}    >
//       <ListItemIcon>
//         <img src={Games} alt="logo"
//           style={{ marginRight: "5%", }}
//         />
//       </ListItemIcon>
//       <ListItemText primary="Games" style={{ color: CSecondary }} />
//     </ListItemButton>
//     <ListItemButton onClick={() => handleItemClick('livegame')}
//       style={{
//         background: selectedItem === 'livegame' ? 'linear-gradient(to right, #142547, #181F36)' : 'transparent',
//       }}    >
//       <ListItemIcon>
//         <img src={LiveGames} alt="logo"
//           style={{ marginRight: "5%", }}
//         />
//       </ListItemIcon>
//       <ListItemText primary="Live Games" style={{ color: CSecondary }} />
//     </ListItemButton>
//     <ListItemButton onClick={() => handleItemClick('faq')}
//       style={{
//         background: selectedItem === 'faq' ? 'linear-gradient(to right, #142547, #181F36)' : 'transparent',
//       }}    >
//       <ListItemIcon>
//         <img src={FAQ} alt="logo"
//           style={{ marginRight: "5%", }}
//         />
//       </ListItemIcon>
//       <ListItemText primary="FAQ" style={{ color: CSecondary }} />
//     </ListItemButton>
//     <ListItemButton onClick={() => handleItemClick('contact')}
//       style={{
//         background: selectedItem === 'contact' ? 'linear-gradient(to right, #142547, #181F36)' : 'transparent',
//       }}    >
//       <ListItemIcon>
//         <img src={Contact} alt="logo"
//           style={{ marginRight: "5%", }}
//         />
//       </ListItemIcon>
//       <ListItemText primary="Contact" style={{ color: CSecondary }} />
//     </ListItemButton>
//   </React.Fragment>
// );
