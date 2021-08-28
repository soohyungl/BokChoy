const express = require('express');

const router = express.Router();
const model = require('../model/model.js');

router.get('/image', (req, res) => {
  
// encodeURIComponent(req.query.url)
  const params = {
    engine: "google_reverse_image",
    image_url: "https://www.kroger.com/product/images/large/front/0001111096968"
  }

  model.getImage(params, async (data) => {

      if(data.image_results) {
        const state = await model.identifier(data);
        const recipes = await model.getRecipes(state.data[0].name);
        const rez = {
          item: state.data[0].name,
          recipes: recipes.data
        }
        res.status(200).send(rez);
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
