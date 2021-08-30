import React from 'react';
import Recipe from './Recipe.jsx';
import styled from 'styled-components';

const Header = styled.h1`
  text-shadow: 1px 1px #ff0000;
  font-family: Arial;
  color: yellow;
  text-align: center;
  font-size: 50px;
`;

export default function RecipeList (props) {

    return(
        <div>
            <Header>Recipe List</Header>
            {props.recipes.map((recipe, index) => {
            return <Recipe key={index}
                    value={recipe} />
            })
        }
        </div>
    )
}
