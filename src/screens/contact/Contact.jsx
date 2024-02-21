import React, { useState } from 'react';
import { CPrimary, CSecondary, darkBlue } from '../../assets/theme/colors';
import CasinoImage from '../../assets/images/dashboard/casino.png';
import PlayNowButton from '../../components/PlayNow';
import LiveGamesCard from '../games/LiveGamesCard';

const Contact = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const containerStyle = {
    backgroundColor: darkBlue,
    marginLeft: '2%',
    padding: '20px',
    marginTop: "5%",
    borderRadius: 20,
  };

  const formStyle = {
    display: 'flex',
    width: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    marginLeft: "15%",
    marginTop: "5%",
  };

  const fieldContainerStyle = {
    marginLeft: '15%',
    marginTop: "5%",
    width: "100%"
  };

  const fieldStyle1 = {
    marginBottom: '10px',
    backgroundColor: CPrimary,
    borderRadius: '5px',
    borderColor: 'rgba(22, 126, 205, 0.1)',
    borderWidth: '1.5px',
    height: '40px',
    padding: "2%",
    width: '100%',
    color: CSecondary,
  };

  const fieldStyle2 = {
    marginBottom: '10px',
    color: CSecondary,
    backgroundColor: CPrimary,
    borderRadius: '5px',
    borderColor: 'rgba(22, 126, 205, 0.1)',
    borderWidth: '1.5px',
    height: '40px',
    padding: "2%",
    width: '100%',
    marginRight: '4%',
  };

  const fieldStyle3 = {
    marginBottom: '10px',
    backgroundColor: CPrimary,
    borderRadius: '5px',
    borderColor: 'rgba(22, 126, 205, 0.1)',
    borderWidth: '1.5px',
    padding: "2%",
    color: CSecondary,
    width: '100%',
    marginRight: '4%',
  };

  const lineStyle = {
    height: '2px',
    width: '43%',
    marginTop: '1%',
    backgroundColor: CSecondary,
  };

  const textStyle = {
    margin: '0 10px',
    fontSize: '15px',
    color: CSecondary,

  };

  const handleSendButtonClick = () => {
    // Validation logic using regular expressions
    const firstNameRegex = /^[A-Za-z]+$/;
    const lastNameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstNameRegex.test(firstName)) {
      alert('Please enter a valid first name');
      return;
    }

    if (!lastNameRegex.test(lastName)) {
      alert('Please enter a valid last name');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }


    console.log('Sending message...');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Message:', message);
  };


  return (
    <>
      <LiveGamesCard />

      <div style={containerStyle}>
        <div style={{ display: 'flex', }}>
          <div style={lineStyle}></div>
          <span style={textStyle}>CONTACT US</span>
          <div style={lineStyle}></div>
        </div>
        <div style={{ display: 'flex', }}>
          <div style={formStyle}>
            <div style={{ width: '30%' }}>
              <img src={CasinoImage} alt="logo" />
            </div>
            <div style={fieldContainerStyle}>
              <div style={{ display: 'flex', marginBottom: '10px' }}>
                <input
                  type="text"
                  placeholder="First Name"
                  style={fieldStyle1}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />              <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <input
                  type="text"
                  placeholder="Last Name"
                  style={fieldStyle1}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />            </div>
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  placeholder="Email Address"
                  style={fieldStyle2}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />            </div>
              <div style={{ marginBottom: '10px' }}>
                <textarea
                  placeholder="Write Your Message Here"
                  rows={6}
                  style={fieldStyle3}
                  aria-multiline
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />            </div>
              <button onClick={handleSendButtonClick} style={{ backgroundColor: '#0088FF', borderRadius: 50, height: 40, color: CSecondary, padding: "2%" }}>Send Message</button>
              {/* <PlayNowButton
            onPress={handlePlayNowSteler}
            backgroundColor="#0088FF"
            textColor={CSecondary}
            borderRadius={50 }
          /> */}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Contact;
