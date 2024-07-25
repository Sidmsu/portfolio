import React from 'react';
import styled, { keyframes } from 'styled-components';
import profileImage from '../assets/images/Screenshot_2024-06-11_at_9.40.08_PM-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import About from './About';
import Contact from './Contact';

// Keyframes for typing effect
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e1e1e;
  color: white;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  flex: 1;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4em;
  margin: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2em;
  color: #ccc;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 1.5em;
  color: white;
  background-color: #00ff99;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00cc7a;
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #00ff99;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-top: 10px;
  width: 150px;

  &:hover {
    background-color: #00cc7a;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 400px;
  border-radius: 50%;
  border: 5px solid #00ff99;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const Name = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid orange; /* Adjust as needed */
  animation:
    ${typing} 2s steps(12, end) forwards, /* Typing animation */
    ${blink} 0.75s step-end infinite; /* Cursor blink animation */
  font-size: 1.2em;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Content>
          <TextSection>
            <Title initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
              Hello, I'm <Name>Siddhesh Kulkarni</Name>
            </Title>
            <Description initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2 }}>
              Student and Developer
            </Description>
            <ButtonContainer initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2.5 }}>
              <SocialIcons>
                <Button href="https://github.com/Sidmsu" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
                <Button href="https://linkedin.com/in/siddhesh-kulkarni05" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
                <Button href="https://x.com/sidmsu27" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
                <Button href="https://www.instagram.com/_siddhesh.kulkarni_/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </Button>
              </SocialIcons>
              <ResumeButton href="https://drive.google.com/file/d/1kKe8p-6KWnvon9k3ci-U6g9Waj8NOoIK/view?usp=sharing" download>
                Download Resume
              </ResumeButton>
            </ButtonContainer>
          </TextSection>
          <ImageSection>
            <ProfileImage
              src={profileImage}
              alt="Profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            />
          </ImageSection>
        </Content>
      </Container>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
