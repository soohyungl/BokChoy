import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  text-shadow: 2px 2px #cc0000;
  font-family: Arial;
  color: red;
  justify-Content: center;
  text-align: center;
  font-size: 30px;
  padding-top: 10px;
`;
const Outer = styled.div`
    background-color: #ccf3ff;
    box-shadow: 10px 5px 5px #1ac9ff;
    font-family: Arial;
    font-weight: bold;
`;

const Box = styled.img`
    flex: 1;
    width: auto;
    height: auto;
    padding: 15px;
`;
const BoxTwo = styled.div`
    flex: 3;
    padding: 15px;
`;
const Container = styled.div`
    display: flex;
`;
export default function recipe (props) {


    return (
        <Outer>
            <Header>{props.value.title}</Header>
            <Container>
            <Box src={props.value.image}/>
            <BoxTwo>
                Ingredients : {props.value.usedIngredients.map((ingredient) => { 
                    return <ul>{ingredient.amount + ' ' + ingredient.unit + ' ' + ingredient.name}</ul>
                })}
                {props.value.missedIngredients.map((ingredient) => {
                    return <ul>{ingredient.amount + ' ' + ingredient.unit + ' ' + ingredient.name}</ul>
                })
                } 
            </BoxTwo>
            </Container>
        </Outer>    
    )
}