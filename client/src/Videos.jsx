import React from 'react';
import Video from './Video.jsx';
import styled from 'styled-components';

const Header = styled.h1`
  text-shadow: 2px 2px #ff0000;
  font-family: Arial;
  color: yellow;
  text-align: center;
  font-size: 50px;
`;

export default function Videos (props) {
 const ifExists = props.videos !== [];
    return(
        <div>
            <Header>{!ifExists ? null : "Related Videos" }</Header>
            {props.videos.map((video, index) => {
            return <Video key={index}
                    value={video} />
            })
        }
        </div>
    )
}
