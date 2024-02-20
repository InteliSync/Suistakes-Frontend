import React, { useState } from 'react';
import { CPrimary, CSecondary, darkBlue } from '../../assets/theme/colors';
import Plus from '../../assets/images/dashboard/plus.png';
import Minus from '../../assets/images/dashboard/minus.png';
import Steller from '../../assets/images/dashboard/TrySteller.png';
import Dice from '../../assets/images/dashboard/ChanceDice.png';
import PlayNowButton from '../../components/PlayNow';
import LiveGamesCard from '../games/LiveGamesCard';

const Faq = () => {
  const containerStyle = {
    backgroundColor: darkBlue,
    marginLeft: '2%',
    padding: '20px',
    marginTop:"5%"
  };

  const faqContainer = {
    backgroundColor: CPrimary,
    borderColor: 'rgba(22, 126, 205, 0.1)',
    borderWidth: '2',
    width: '100%',
    borderRadius: 10,
    marginBottom: "3%",
  }


  const questionContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    width: "100%",
    cursor: 'pointer',
    backgroundColor: ' #167ECD ',
    color: CSecondary,
    padding: "1%",
    borderRadius: 10,
  };

  const answerContainerStyle = {
    width: "100%",
    backgroundColor: CPrimary, // Answer container color (dark blue)
    padding: '10px',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: CSecondary
  };

  const lineStyle = {
    height: '2px',
    width: '35%',
    marginTop: '1%',
    backgroundColor: CSecondary,
  };

  const textStyle = {
    margin: '0 10px',
    fontSize: '15px',
    color: CSecondary,
  };

  const BannerContainer1 = {
    display: 'flex',
    backgroundImage: 'linear-gradient(to right, #6F2BFF , #210c4c)',
    padding: "2%",
    borderRadius: "5%",
  };
  const BannerContainer2 = {
    display: 'flex',
    backgroundImage: 'linear-gradient(to right, #40CF0E , #133e04)',
    padding: "2%",
    borderRadius: "5%",
  };

  const faqs = [
    { question: 'Is there a free trial available?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
    { question: 'What is your cancellation policy?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
    { question: 'Can I change my plan later?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
    { question: 'Can other info be added to an invoice?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
    { question: 'How does billing work?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
    { question: 'How do I change my account email?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
  ];

  const handlePlayNowDice = () => {
    // Your logic for the Play Now button click on Page 1
    console.log('Play Now clicked');
  };

  const handlePlayNowSteler = () => {
    // Your logic for the Play Now button click on Page 1
    console.log('Play Now clicked on Page 1');
  };

  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
    <LiveGamesCard/>
      <div style={containerStyle}>
        <div style={{ display: 'flex', marginBottom: "3%" }}>
          <div style={lineStyle}></div>
          <span style={textStyle}>FREQUENTLY ASKED QUESTIONS</span>
          <div style={lineStyle}></div>
        </div>

        {faqs.reduce((rows, faq, index) => {
          if (index % 2 === 0) {
            rows.push([faq]);
          } else {
            rows[rows.length - 1].push(faq);
          }
          return rows;
        }, []).map((faqPair, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {faqPair.map((faq, index) => (
              <div key={index} style={{ flex: 1, marginLeft: "1%", marginRight: "1%" }}>
                <div style={faqContainer}>
                  <div
                    style={questionContainerStyle}
                    onClick={() => handleQuestionClick(rowIndex * 2 + index)}
                  >
                    {faq.question}
                    <img
                      src={openIndex === rowIndex * 2 + index ? Minus : Plus}
                      alt={openIndex === rowIndex * 2 + index ? 'Minus' : 'Plus'}
                      style={{ width: '20px', height: '20px', }}
                    />
                  </div>
                  {openIndex === rowIndex * 2 + index && (
                    <div style={answerContainerStyle}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}

      </div >

      <div style={{ display: 'flex', marginTop: "3%", marginLeft: '2%', justifyContent: 'space-between',alignContent:"center",alignItems:"center" }}>
        <div style={BannerContainer1}>
          <img
            src={Steller}
            alt={'banner'}
            style={{marginRight:"5%"}}
          />

          <PlayNowButton
            onPress={handlePlayNowSteler}
            backgroundColor="#FDCF39"
            textColor="#111111"
            borderRadius="10px" 

          />
        </div>
        <div style={BannerContainer2}>
          <img
            src={Dice}
            alt={'banner'}
            style={{marginRight:"5%"}}
          />


          <PlayNowButton
            onPress={handlePlayNowDice}
            backgroundColor="#FDCF39"
            textColor="#111111"
            borderRadius="10px"

          />
        </div>
      </div>

    </>
  );
};

export default Faq;

