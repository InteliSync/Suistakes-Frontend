// Copyright.js

import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CPrimary, CSecondary, backgroundColor, darkBlue } from '../../assets/theme/colors';
import Telegram from '../../assets/images/listItem/Telegram.png';
import Github from '../../assets/images/listItem/Github.png';
import X from '../../assets/images/listItem/X.png';
import Facebook from '../../assets/images/listItem/Facebook.png';
import Meta from '../../assets/images/listItem/meta.png';
import Linkedin from '../../assets/images/listItem/linkedin.png';
import Discord from '../../assets/images/listItem/Discord.png';
import Instagram from '../../assets/images/listItem/Instagram.png';

const sections = [
  { name: X, label: 'X' },
];

const iconContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',  // Allow items to wrap to the next line
};

export const CopyRight = (handleItemClick, selectedItem) => {
  return (
    <div style={iconContainerStyle}>
      {sections.map((section, index) => (
        <ListItemButton key={section.name} style={{ width: "31%" }}>
          <ListItemIcon>
            <div style={{ color: CSecondary, fontSize: 12,  }}>©</div>
            <div style={{ color: CSecondary, fontSize: 12 }}>{new Date().getFullYear()}</div>
          </ListItemIcon>
          <ListItemText primary={' Suistakes Casino'} style={{ color: '#0088FF' ,marginLeft:"-5%"}} />
        </ListItemButton>
      ))}
    </div>
  );
};



// import React from 'react';
// import { CSecondary } from '../../assets/theme/colors';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import X from '../../assets/images/listItem/X.png';

// export const CopyRight = (handleItemClick, selectedItem) => {

//   return (
//     <React.Fragment>
//       <ListItemButton >
//         <ListItemIcon>
//           <img src={X} alt="logo" />
//         </ListItemIcon>
//         <ListItemText primary={'Suistakes Casino'} style={{ color: CSecondary }} />

//       </ListItemButton>

//     </React.Fragment>

//   );
// }
{/* <ListItemText primary={' ©' + new Date().getFullYear() + 'Suistakes Casino'} style={{ color: CSecondary }} /> */ }
