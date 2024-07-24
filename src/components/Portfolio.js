import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

const Card = styled(motion.div)`
  background-color: #2d2d2d;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
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
    title: 'Project One',
    description: 'This project involves building a responsive web application using React and Styled Components.',
    // imageUrl: 'https://via.placeholder.com/300?text=Project+1',
    src: '/Users/sid/Downloads/portfolio/src/assets/images/img1.png',
    githubUrl: 'https://github.com/Sidmsu/AI_Assistant_JARVIS.git',
  },
  {
    title: 'Project Two',
    description: '',
    imageUrl: 'https://via.placeholder.com/300?text=Project+2',
    githubUrl: 'https://github.com/Sidmsu/Social_Network_Analyzer.git',
  },
  {
    title: 'Project Three',
    description: '.',
    imageUrl: 'https://via.placeholder.com/300?text=Project+3',
    githubUrl: 'https://github.com/username/project3',
  },
  {
    title: 'Project Four',
    description: '',
    imageUrl: 'https://via.placeholder.com/300?text=Project+4',
    githubUrl: 'https://github.com/username/project4',
  },
  {
    title: 'Project Five',
    description: '',
    imageUrl: 'https://via.placeholder.com/300?text=Project+5',
    githubUrl: 'https://github.com/username/project5',
  },
  // {
  //   title: 'Project Six',
  //   description: 'A social media application developed with Ruby on Rails and integrated with OAuth for authentication.',
  //   imageUrl: 'https://via.placeholder.com/300?text=Project+6',
  //   githubUrl: 'https://github.com/username/project6',
  // },
  // {
  //   title: 'Project Seven',
  //   description: 'A blockchain-based application for secure online voting using Solidity and Ethereum.',
  //   imageUrl: 'https://via.placeholder.com/300?text=Project+7',
  //   githubUrl: 'https://github.com/username/project7',
  // },
  // {
  //   title: 'Project Eight',
  //   description: 'An IoT project using Arduino to automate home lighting based on environmental conditions.',
  //   imageUrl: 'https://via.placeholder.com/300?text=Project+8',
  //   githubUrl: 'https://github.com/username/project8',
  // },
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
