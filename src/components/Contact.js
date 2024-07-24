import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  padding: 40px;
  background-color: #1e1e1e;
  color: white;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  color: #00ff99;
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #ccc;
`;

const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Form = styled.form`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  border: 2px solid #00ff99;
  background-color: #1e1e1e;
  color: white;
  border-radius: 5px;
  font-size: 1em;

  &::placeholder {
    color: #aaa;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: 2px solid #00ff99;
  background-color: #1e1e1e;
  color: white;
  border-radius: 5px;
  font-size: 1em;
  height: 150px;

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #ffa500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;

  &:hover {
    background-color: #ff8c00;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
`;

const InfoDetail = styled.div`
  font-size: 1.5em;
  margin: 0;
  color: #ccc;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxE5krvS_kCp38nhabtZInwSSEtx6w_07xBsWgltYmOfAfsFjB_9HNnREQmW8Mc3KTlyQ/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.result === 'success') {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <Container>
      <Subtitle>— Contact Me</Subtitle>
      <Title>Get In Touch With Me</Title>
      <Description>
        If you have any questions or want to work together, feel free to send me
      </Description>
      <FormSection>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <TextArea name="message" placeholder="Message *" value={formData.message} onChange={handleChange}></TextArea>
          <Button type="submit">Send To Me</Button>
        </Form>
        <InfoSection>
          <InfoItem>
            <InfoText>
              <InfoTitle>Email</InfoTitle>
              <InfoDetail>
                kulka115@msu.edu
                <a href="mailto:kulka115@msu.edu">
                  <FontAwesomeIcon icon={faEnvelope} color="#00ff99" />
                </a>
              </InfoDetail>
              <InfoDetail>
                ksiddhesh647@gmail.com
                <a href="mailto:ksiddhesh647@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} color="#00ff99" />
                </a>
              </InfoDetail>
            </InfoText>
          </InfoItem>
        </InfoSection>
      </FormSection>
    </Container>
  );
};

export default Contact;
