import React from "react";
import ImageUploader from './ImageUploader.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content: center;
`;

const Image = styled.div`
width: 100%;
height: 500px;
align-self: center;
`;
const Header = styled.h1`
text-shadow: 2px 2px #ff0000;
font-family: Arial;
color: white;
justify-Content: center;
text-align: center;
font-size: 100px;
`;

export default function App() {


  return (
  <div>
    <Header>BokChoy?</Header>
    <Container>
      <Image><ImageUploader/></Image>
    </Container>
  </div>
  );
}