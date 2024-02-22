import React, { useState } from 'react';
import { CPrimary, CSecondary, backgroundColor, darkBlue } from '../../assets/theme/colors';
import Plus from '../../assets/images/dashboard/plus.png';
import Minus from '../../assets/images/dashboard/minus.png';
import Steller from '../../assets/images/dashboard/TrySteller.png';
import Dice from '../../assets/images/dashboard/ChanceDice.png';
import PlayNowButton from '../../components/PlayNow';
import LiveGamesCard from '../games/LiveGamesCard';
import CasRoc1 from '../../assets/images/dashboard/CasRoc1.png';
import CasRoc2 from '../../assets/images/dashboard/CasRoc2.png';

const Faq = () => {
  const containerStyle = {
    backgroundColor: darkBlue,
    marginLeft: '2%',
    padding: '20px',
    marginTop: "5%",
    borderRadius: '15px',
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
    backgroundColor: ' #167ECD',
    color: CSecondary,
    padding: "1%",
    borderRadius: 10,
    //backgroundImage: 'linear-gradient(to right, #167ECD , #1A1F3F)', 

  };

  const answerContainerStyle = {
    width: "100%",
    backgroundColor: CPrimary,
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
    console.log('Play Now clicked');
  };

  const handlePlayNowSteler = () => {
    console.log('Play Now clicked on Page 1');
  };

  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {/* First Component of the screen Horizontal List Start */}

      <LiveGamesCard />

      {/* First Component of the screen Horizontal List end */}

      {/* Second Component of the screen FAQ Start */}

      <div style={containerStyle}>
        <div style={{ display: 'flex', marginBottom: "3%" }}>
          <div style={lineStyle}></div>
          <span style={textStyle}>FREQUENTLY ASKED QUESTIONS</span>
          <div style={lineStyle}></div>
        </div>


        {/* Faq Start */}

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

        {/* Faq end */}


      </div >

      {/* Second Component of the screen faq end */}

      {/* Third Component of the screen banner Start */}


      <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: "center", alignItems: "center", marginLeft: "-2%" }}>
        <div>
          <img
            src={CasRoc2}
            alt={'CasRoc2'}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src={CasRoc1}
            alt={'CasRoc1'}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      {/* third Component of the screen banner end */}

    </>
  );
};

export default Faq;

