import React from 'react';
import { CPrimary, CSecondary, darkBlue } from '../../assets/theme/colors';
import CasinoImage from '../../assets/images/dashboard/casino.png';


const Contact = () => {
  const containerStyle = {
    backgroundColor: darkBlue,
    marginLeft: '2%',
    padding: '20px',
  };

  const formStyle = {
    display: 'flex',
    width: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    marginLeft:"15%",
    marginTop:"5%",
  };

  const fieldContainerStyle = {
    marginLeft: '15%',
    marginTop:"5%",
    width:"100%"
  };

  const fieldStyle1 = {
    marginBottom: '10px',
    backgroundColor: CPrimary, // Use the appropriate color value from your theme
    borderRadius: '5px',
    borderColor: 'rgba(22, 126, 205, 0.1)',
    borderWidth: '1.5px',
    height: '40px',
    padding:"2%",
    width: '100%', // Adjust the width for First Name and Last Name fields
    color:CSecondary,
  };

  const fieldStyle2 = {
    marginBottom: '10px',
    color:CSecondary,
    backgroundColor: CPrimary, // Use the appropriate color value from your theme
    borderRadius: '5px',
    borderColor: 'rgba(22, 126, 205, 0.1)',
    borderWidth: '1.5px',
    height: '40px',
    padding:"2%",
    width: '100%', // Adjust the width for First Name and Last Name fields
    marginRight: '4%', // Adjust the margin between First Name and Last Name
  };

  const fieldStyle3 = {
    marginBottom: '10px',
    backgroundColor: CPrimary, // Use the appropriate color value from your theme
    borderRadius: '5px',
    borderColor: 'rgba(22, 126, 205, 0.1)',
    borderWidth: '1.5px',
    padding:"2%",
    color:CSecondary,
    width: '100%', // Adjust the width for First Name and Last Name fields
    marginRight: '4%', // Adjust the margin between First Name and Last Name
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

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', }}>
        <div style={lineStyle}></div>
        <span style={textStyle}>CONTACT US</span>
        <div style={lineStyle}></div>
      </div>
      <div style={{ display: 'flex', }}>
        <div style={formStyle}>
          <div style={{ width: '30%' }}>
            <img src={CasinoImage} alt="logo"  />
          </div>
          <div style={fieldContainerStyle}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <input type="text" placeholder="First Name" style={fieldStyle1} />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <input type="text" placeholder="Last Name" style={fieldStyle1} />
            </div>
            <div style={{marginBottom: '10px'}}>
              <input type="text" placeholder="Email Address" style={fieldStyle2} />
            </div>
            <div style={{marginBottom: '10px'}}>
              <textarea placeholder="Write Your Message Here" rows={6} style={fieldStyle3} aria-multiline />
            </div>
            <button style={{ backgroundColor: '#0088FF' ,borderRadius:50,height:40,color:CSecondary,padding:"2%"}}>Send Message</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
