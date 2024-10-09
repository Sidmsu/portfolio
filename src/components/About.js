import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 110vh;
  background-color: #1e1e1e;
  color: white;
  padding: 0px;
`;

const Terminal = styled.div`
  background-color: #2d2d2d;
  border-radius: 5px;
  width: 80%;
  max-width: 800px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #333;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 5px;
`;

const TerminalBody = styled.div`
  padding: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1em;
`;

const Command = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Prompt = styled.span`
  color: #33ff33;
`;

const CommandText = styled.span`
  color: white;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AboutMeHeading = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const BorderLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: #00ff99;
  margin-bottom: 40px;
`;

const About = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <AboutMeHeading>About Me</AboutMeHeading>
      <BorderLine />
      <Terminal>
        <TerminalHeader>
          <Circle color="#ff5f56" />
          <Circle color="#ffbd2e" />
          <Circle color="#27c93f" />
        </TerminalHeader>
        <TerminalBody>
          <Command>
            <Prompt>siddhesh $ </Prompt>
            <CommandText>aboutsiddhesh</CommandText>
          </Command>
          <Command>
            <Prompt>aboutsiddhesh (main) $ </Prompt>
            <CommandText>
              I’ve always believed that technology isn’t just about solving problems—it’s about creating something that moves people. As a Computer Science student at Michigan State University, my journey has been about turning ideas into reality, whether it’s building AI-driven apps that achieve 98% accuracy or designing user-friendly web solutions that make life simpler.

               What drives me? It’s the thrill of innovation and the challenge of creating something that truly makes a difference. From leading projects that merge creativity with technical precision to co-leading the Google Developer Groups at MSU, I’m all about fostering collaboration, pushing boundaries, and turning vision into impact.

               If you’re looking to connect over shared passions in tech, AI, or software development—or if you’re just as excited about shaping the future of technology as I am—let’s chat!
            </CommandText>
          </Command>
        </TerminalBody>
      </Terminal>
      <Terminal>
        <TerminalHeader>
          <Circle color="#ff5f56" />
          <Circle color="#ffbd2e" />
          <Circle color="#27c93f" />
        </TerminalHeader>
        <TerminalBody>
          <Command>
            <Prompt>siddheshkulkarni $ </Prompt>
            <CommandText>cd skills/programming languages</CommandText>
          </Command>
          <Command>
            <Prompt>skills/programming languages (main) $ </Prompt>
            <CommandText>ls</CommandText>
          </Command>
          <Command>
            <Prompt>Proficient:</Prompt>
          </Command>
          <SkillsContainer>
            <SkillsColumn>
              <CommandText>Python</CommandText>
              <CommandText>Dart</CommandText>
              <CommandText>Javascript</CommandText>
            </SkillsColumn>
            <SkillsColumn>
              <CommandText>C++</CommandText>
              <CommandText>HTML5</CommandText>
              <CommandText>CSS3</CommandText>
            </SkillsColumn>
          </SkillsContainer>
          
        </TerminalBody>
      </Terminal>
      <Terminal>
        <TerminalHeader>
          <Circle color="#ff5f56" />
          <Circle color="#ffbd2e" />
          <Circle color="#27c93f" />
        </TerminalHeader>
        <TerminalBody>
          <Command>
            <Prompt>siddheshkulkarni $ </Prompt>
            <CommandText>cd skills/frameworks and tools</CommandText>
          </Command>
          <Command>
            <Prompt>skills/frameworks and tools (main) $ </Prompt>
            <CommandText>ls</CommandText>
          </Command>
          <Command>
            <Prompt>Proficient:</Prompt>
          </Command>
          <SkillsContainer>
            <SkillsColumn>
              <CommandText>Flutter</CommandText>
              <CommandText>React</CommandText>
              <CommandText>Git</CommandText>
              <CommandText>Next.Js</CommandText>
              <CommandText>Node.Js</CommandText>
            </SkillsColumn>
            <SkillsColumn>
            <CommandText>Express</CommandText>
              <CommandText>Arduino</CommandText>
              <CommandText>Adafruit</CommandText>
              <CommandText>MongoDB</CommandText>
              <CommandText>Firebase</CommandText>
            </SkillsColumn>
          </SkillsContainer>
          
        </TerminalBody>
      </Terminal>
    </Container>
  );
});

export default About;
