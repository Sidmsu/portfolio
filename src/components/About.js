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
              As a Software Engineering Fellow at Headstarter AI, my focus is on leveraging Android Framework and Web Development skills to drive technological innovation. At Michigan State University, I'm immersed in a Computer Science program that shapes my analytical and technical competencies, enriching the advanced projects our team engages with. My role in Student Outreach at MSU encapsulates my commitment to community and growth. This dedication is mirrored in my co-founding of EwebBuild, where we empowered local businesses in India with web solutions, reflecting a 99% customer satisfaction score. It's this blend of technical acumen and customer-centric values that I bring to my current endeavors.
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
            <CommandText>cd skills/tools</CommandText>
          </Command>
          <Command>
            <Prompt>skills/tools (main) $ </Prompt>
            <CommandText>ls</CommandText>
          </Command>
          <Command>
            <Prompt>Proficient:</Prompt>
          </Command>
          <SkillsContainer>
            <SkillsColumn>
              <CommandText>Javascript</CommandText>
              <CommandText>React</CommandText>
              <CommandText>git</CommandText>
              <CommandText>github</CommandText>
              <CommandText>C++</CommandText>
              <CommandText>Python</CommandText>
              <CommandText>Flutter</CommandText>
            </SkillsColumn>
            <SkillsColumn>
              <CommandText>bootstrap</CommandText>
              <CommandText>html5</CommandText>
              <CommandText>css3</CommandText>
              <CommandText>figma</CommandText>
              <CommandText>figma</CommandText>
            </SkillsColumn>
          </SkillsContainer>
        </TerminalBody>
      </Terminal>
    </Container>
  );
});

export default About;
