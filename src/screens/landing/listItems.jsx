import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Home from '../../assets/images/dashboard/homeicon.png';
import Games from '../../assets/images/dashboard/Game.png';
import FAQ from '../../assets/images/dashboard/Question.png';
import Contact from '../../assets/images/dashboard/Headset.png';
import { CPrimary, CSecondary, backgroundColor } from '../../assets/theme/colors'


export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <img src={Home} alt="logo"
          style={{ marginRight: "5%", }}
        />
      </ListItemIcon>
      <ListItemText primary="Home" style={{color:CSecondary}}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={Games} alt="logo"
          style={{ marginRight: "5%", }}
        />
      </ListItemIcon>
      <ListItemText primary="Games"  style={{color:CSecondary}}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={FAQ} alt="logo"
          style={{ marginRight: "5%", }}
        />
      </ListItemIcon>
      <ListItemText primary="FAQ"  style={{color:CSecondary}}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={Contact} alt="logo"
          style={{ marginRight: "5%", }}
        />
      </ListItemIcon>
      <ListItemText primary="Contact"  style={{color:CSecondary}}/>
    </ListItemButton>
  </React.Fragment>
);

//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );