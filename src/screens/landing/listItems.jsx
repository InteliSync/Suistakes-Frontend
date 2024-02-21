
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '../../assets/images/listItem/Home.png';
import GamesIcon from '../../assets/images/listItem/Game.png';
import LiveGamesIcon from '../../assets/images/listItem/LiveGame.png';
import FAQIcon from '../../assets/images/listItem/Question.png';
import ContactIcon from '../../assets/images/listItem/Headset.png';
import DiceWallpaper from '../../assets/images/dashboard/Dicewallpaper.png';
import { CPrimary, CSecondary, backgroundColor } from '../../assets/theme/colors';

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



export const mainListItems = (handleItemClick, selectedItem) => {

  return (
    <React.Fragment>
      {['home', 'game', 'livegame', 'faq', 'contact'].map((itemName) => (
        <ListItemButton
          key={itemName}
          onClick={() => handleItemClick(itemName)}
          style={{
            background: selectedItem === itemName ? 'linear-gradient(to right, #2338A3, #181F36)' : 'transparent',
            marginLeft:"5%",
            borderTopLeftRadius:5,
            borderBottomLeftRadius:5,
          }}
        >
          <ListItemIcon>
            <img
              src={getIcon(itemName)}
              alt="logo"
              style={{ marginRight: "5%", }}
            />
          </ListItemIcon>
          <ListItemText primary={itemName.charAt(0).toUpperCase() + itemName.slice(1)} style={{ color: CSecondary }} />
          {selectedItem === itemName && (
            <img
              src={DiceWallpaper}
              alt="icon"
              style={{ width: 70, marginTop: -20, marginBottom: -20, marginLeft: 57 }}
            />
          )}
        </ListItemButton>
      ))}

    </React.Fragment>
  );
};
