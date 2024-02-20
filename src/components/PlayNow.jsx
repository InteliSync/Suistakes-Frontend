import React from 'react';

const PlayNowButton = ({ onPress, backgroundColor, textColor, borderRadius }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || '#4CAF50', // Default to green if backgroundColor is not provided
    color: textColor || '#fff', // Default to white if textColor is not provided
    paddingHorizontal: '2%',
    borderRadius: borderRadius || '5px', // Default to 5px border radius if not provided
    cursor: 'pointer',
    border: 'none',
    fontSize: '12px',
    width:"100px",
    height:"40px"
  };

  return (
    <button style={buttonStyle} onClick={onPress}>
      Play Now
    </button>
  );
};

export default PlayNowButton;
