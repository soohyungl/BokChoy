import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-family: Arial;
  color: red;
  justify-Content: center;
  text-align: center;
  font-size: 15px;
  padding-top: 10px;
`;
const Outer = styled.div`
    background-color: #ccf3ff;
    box-shadow: 10px 5px 5px #1ac9ff;
    font-family: Arial;
    font-weight: bold;
`;
const Box = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;


export default function Video (props) {
const URL = `https://www.youtube.com/embed/${props.value.youTubeId}`;

    return(
        <Outer>
            <Header>{props.value.title}</Header>
            <Box>
                <iframe width="250" height="250"
                src={URL}>
                </iframe>
            </Box>
        </Outer>
    )
}