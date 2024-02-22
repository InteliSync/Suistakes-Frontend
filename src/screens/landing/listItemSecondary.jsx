import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Telegram from '../../assets/images/listItem/Telegram.png';
import Github from '../../assets/images/listItem/Github.png';
import X from '../../assets/images/listItem/X.png';
import Facebook from '../../assets/images/listItem/Facebook.png';
import Linkedin from '../../assets/images/listItem/linkedin.png';
import Discord from '../../assets/images/listItem/Discord.png';
import Instagram from '../../assets/images/listItem/Instagram.png';

const sections = [
  { name: Telegram, label: 'Telegram', link: 'https://www.google.co.in/' },
  { name: Github, label: 'Github', link: 'https://www.google.co.in/' },
  { name: X, label: 'X', link: 'https://www.google.co.in/' },
  { name: Facebook, label: 'Facebook', link: 'https://www.google.co.in/' },
  { name: Linkedin, label: 'Linkedin', link: 'https://www.google.co.in/' },
  { name: Discord, label: 'Discord', link: 'https://www.google.co.in/' },
  { name: Instagram, label: 'Instagram', link: 'https://www.google.co.in/' },
];

const iconContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',  
  };
  
  export const secondaryListItems = (handleItemClick, selectedItem) => {
    return (
      <div style={iconContainerStyle}>
        {sections.map((section, index) => (
          <ListItemButton key={section.name} style={{width:"31%"}}>
            <ListItemIcon>
              <img src={section.name} alt="logo"/>
              <div>&nbsp;</div>
            </ListItemIcon>
            {(index + 1) % 4 === 0 && <div style={{ flexBasis: '100%', height: 0 }}></div>} {/* Start a new row after every 4 items */}
          </ListItemButton>
        ))}
      </div>
    );
  };
  
