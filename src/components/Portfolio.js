import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Importing images from assets directory
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #1e1e1e;
  color: white;
  min-height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background-color: #2d2d2d;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain; 
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0;
  color: #00ff99;
`;

const CardDescription = styled.p`
  margin-top: 10px;
  color: #ccc;
`;

const CardLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #00ff99;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const projects = [
  {
    title: 'Portfolio Website',
    imageUrl: img1,
    githubUrl: 'https://github.com/Sidmsu/portfolio.git',
  },
  {
    title: 'JARVIS - AI',
    imageUrl: img2,
    githubUrl: 'https://github.com/Sidmsu/AI_Assistant_JARVIS.git',
  },
  {
    title: 'Social Network Analyzer',
    imageUrl: img3,
    githubUrl: 'https://github.com/Sidmsu/Social_Network_Analyzer.git',
  },
  {
    title: 'Arduino Obstacle Avoiding Car',
    imageUrl: img4,
    githubUrl: 'https://github.com/Sidmsu/arduino-obstacle-avoiding-car.git',
  },
];

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <h1>My Portfolio</h1>
      <Grid>
        {projects.map((project, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CardImage src={project.imageUrl} alt={project.title} />
            <CardContent>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <CardLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> View Project
              </CardLink>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </PortfolioContainer>
  );
};

export default Portfolio;
