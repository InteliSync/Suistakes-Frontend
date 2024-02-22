import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import wallet from '../assets/images/dashboard/wallet.png';
import { black } from '../assets/theme/colors';
import argent from '../assets/images/modal/argent.png';
import coinbaseWallet from '../assets/images/modal/coinbaseWallet.png';
import ledger from '../assets/images/modal/ledger.png';
import metamask from '../assets/images/modal/meatmask.png';
import trust from '../assets/images/modal/trust.png';
import walletConnect from '../assets/images/modal/walletConnecct.png';




const RoundedButton = styled(Button)({
  borderRadius: '20px',
  backgroundColor: '#0088FF',  
  borderColor: '#78B1FF',
  borderWidth:'3px',
  //backgroundImage: 'linear-gradient(to right, #167ECD, #142547)',
  color: 'white',
});



const heading = {alignSelf:"center",fontWeight:"bold",color: black,fontSize:20};
const subHeading = {alignSelf:"left",color: "#b3b1b1",fontSize:15};
const listItem = { display: "flex", alignItems: "center", marginBottom: "10px" }; 
const listText = {alignSelf:"left",color: black,fontSize:15,fontWeight:"bold",marginLeft:"3%"};

const ModalContent = ({ handleClose }) => {
  return (
    <>
      <DialogTitle style={heading}>
        Connect a Wallet
        <IconButton aria-label="close" style={{ position: 'absolute', right: '8px', top: '8px' }} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{ overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

        <DialogContentText>
          <h2 style={subHeading}>Rainbow</h2>
          <div>
            <div style={listItem}>
              <img src={coinbaseWallet} alt="Coinbase" />
              <p style={listText}>Coinbase Wallet</p>
            </div>
            <div style={listItem}>
              <img src={metamask} alt="metamask" />
              <p style={listText}>Metamask</p>
            </div>
            <div style={listItem}>
              <img src={walletConnect} alt="wallet" />
              <p style={listText}>Wallet Connect</p>
            </div>
            <div style={listItem}>
              <img src={walletConnect} alt="wallet" />
              <p style={listText}>Wallet Connect</p>
            </div>
          </div>
        </DialogContentText>
        <DialogContentText>
          <h2 style={subHeading}>More</h2>
          <div>
            <div style={listItem}>
              <img src={argent} alt="argent" />
              <p style={listText}>Argent</p>
            </div>
            <div style={listItem}>
              <img src={trust} alt="trust" />
              <p style={listText}>Trust</p>
            </div>
            <div style={listItem}>
              <img src={ledger} alt="ledger" />
              <p style={listText}>Ledger Live</p>
            </div>
          </div>
        </DialogContentText>
      </DialogContent>
    </>
  );
};

export default function WalletButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <RoundedButton
        variant="contained"
        onClick={handleOpen}
        startIcon={<img src={wallet} alt="logo" />}
      >
        Connect
      </RoundedButton>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs" 
        fullWidth
        backgroundColor='rgba(24, 31, 54, 0.9)'
      >
        <ModalContent handleClose={handleClose} />
      </Dialog>
    </>
  );
}
