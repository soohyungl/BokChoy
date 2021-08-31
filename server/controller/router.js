const express = require('express');

const router = express.Router();
const model = require('../model/model.js');

router.get('/image', (req, res) => {
  
// encodeURIComponent(req.query.url)
  const params = {
    engine: "google_reverse_image",
    image_url:  req.query.url
  }
  model.getImage(params, async (data) => {
      console.log('back', req.query.url)
      if(data.image_results) {
        const state = await model.identifier(data);
      if(state.data.length > 0){
        const recipes = await model.getRecipes(state.data[0].name);
        const videos = await model.getVideos(state.data[0].name);
        
        const rez = {
          item: await state.data[0].name,
          recipes: await recipes.data,
          videos: await videos.data
        }
        res.status(200).send(rez);
      } else {
        const rez = {
          item: null,
          recipes: null, 
          videos: null
        }
        res.status(200).send(rez);
      } 
        
      } else {
        res.status(500).send('could not get result');
      }
  });
});

// router.get('/recipes', (req, res) => {
//   const dat = req.query;
//   model.getRecipes((dat) =>{
//       if(dat) {
//         res.status(200).send(model.getRecipes(dat.item));
//       } else {
//         res.status(500).send('could not get result');
//       }
//   });
// });


module.exports = router;
