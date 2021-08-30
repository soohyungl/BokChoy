import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RecipeList from './Recipes.jsx';
import {Image, CloudinaryContext} from 'cloudinary-react';
import Videos from './Videos.jsx';

// Import the functions you need from the SDKs you need

const Box = styled.div`
  display: flex;
  justify-content: center;
`;
const BoxTwo = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 1000px;
  height: 500px;
`;
const Header = styled.h1`
  text-shadow: 2px 2px #ff0000;
  font-family: Arial;
  color: red;
  justify-content: center;
  text-align: center;
  font-size: 50px;
`;
const Bax = styled.div`
  margin: 0 auto;
  width: 1700px;
`; 

const Container = styled.div`
display: flex;
flex: 1;
`;

const Reci = styled.div`
flex: 3;
justify-content: center;
height: 325px;
width: auto;
`;
const Vidz = styled.div`
flex:1;
justify-content: center;
padding-left: 30px;
height: 325px;
`;
 
export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [BokChoy, setBokChoy] = useState(null);
  const [Recipes, setRecipes] = useState(null);
  const [pub, setPub] = useState(null);
  const [Vids, setVids] = useState(null);


  function uploadImage (e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");
    formData.append("api_key", "326391992575659" )
    const cloudinaryURL = "https://api.cloudinary.com/v1_1/dqzeuauo7/image/upload";

    fetch(cloudinaryURL, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      setURL(result.url);
      setPub(result.public_id);
      setFile(null);
      axios.get('/image', {
        params: {
          url: result.url
        }
      })
      .then((data) => {
          setBokChoy(data.data.item);
          setRecipes(data.data.recipes);
          setVids(data.data.videos.videos);
    
        })
        .catch((error) => {
          console.log(error);
          alert('I have no idea what this thing is', error);
        })
    })
  }

  function handleChange(e) {
    setFile(e.target.files[0]);
    setBokChoy(null);
    setVids(null);
    setPub(null);
    setRecipes(null);
    // let img = e.target.files[0];
    // setURL(URL.createObjectURL(img));
    // console.log(url);
  }

  return (
    <div style={{width: '100%'}}>
    <Box>
      <form onSubmit={uploadImage}>
        <input className="button1" type="file" onChange={handleChange} ></input>
        <button className="button1" onClick={ uploadImage } disabled={!file}>{url === "" ? 'What is this thing?' : 'uploaded'}</button>
      </form>
    </Box>
      <Header>{BokChoy}</Header>
      <CloudinaryContext cloudName="dqzeuauo7">
        <BoxTwo><Image publicID={pub} width="auto" height="auto"/></BoxTwo>
      </CloudinaryContext>  
      <Bax><Container>
        <Reci>{!Recipes ? null : <RecipeList recipes={Recipes}/>}</Reci>
        {!Vids ? null : <Vidz><Videos videos={Vids}/></Vidz>}
      </Container></Bax>
    </div>
  );
}
