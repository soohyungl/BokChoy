import React, { useState } from "react";
import { storage } from "./firebase/firebase.js";
import axios from 'axios';
import styled from 'styled-components';
import RecipeList from './Recipes.jsx';
// Import the functions you need from the SDKs you need

const Box = styled.div`
  display: flex;
  justify-content: center;
`;
const Header = styled.h1`
  text-shadow: 2px 2px #ff0000;
  font-family: Arial;
  color: green;
  justify-Content: center;
  text-align: center;
  font-size: 50px;
`;

const Image = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: "auto";
height: "auto";
`;

export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [BokChoy, setBokChoy] = useState(null);
  const [Recipes, setRecipes] = useState(null);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const ref = storage.ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);

          axios.get('/image', {
            params: {
              url: url
            }
          })
            .then((data) => {
              setBokChoy(data.data.item);
              setRecipes(data.data.recipes);
            })
            .catch((error) => {
              alert('I have no idea what this thing is', error);
            })
        });
    });
  }


  return (
    <div>
    <Box>
      <form onSubmit={handleUpload}>
        <input className="button1" type="file" onChange={handleChange} ></input>
        <button className="button1" disabled={!file}>{url === "" ? 'What is this thing?' : 'uploaded'}</button>
      </form>
    </Box>
      <Header>{BokChoy}</Header>
      <Image src={url} alt="" />
      {!Recipes ? null : <RecipeList recipes={Recipes}/>}
    </div>
  );
}
