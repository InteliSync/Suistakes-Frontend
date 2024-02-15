import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import wallet from '../assets/images/dashboard/wallet.png';
const RoundedButton = styled(Button)({
    borderRadius: '20px', // Adjust the value as needed
  });
  
  export default function WalletButton() {
    return (
      <RoundedButton
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<img src={wallet} alt="logo" />}
      >
        Connect
      </RoundedButton>
    );
  }