const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("572f2674aa7b9745dd6dce63b1674e408b60f04617d51974aff884e397a951ac");
var axios = require("axios").default;
// const callback = function(data) {
//     console.log('yes it d', data);
// };




const getImage = (params, callback) => {
    search.json(params, callback) 
};

const identifier = (data) => {
    // this is going to recieve data in the form of an array of objects.
    // It'll be a string of words so first break up that string into an array.
    // that array of words will now keep a counter of every word. 
    // this counter will persist through the entire array of objects.
    // we iterate through each array of words in each object in array of objects
    // the word with the highest count will be returned
    const words = {};
    
    for(let i = 0; i < data.image_results.length; i++) {
        let array = data.image_results[i].title.split(" ");
        for(let j = 0; j < array.length; j++) {
            if(!words[array[j]]) {
                words[array[j]] = 1;
            } else if (array[j] === '-'){
                continue;
            } else {
                words[array[j]] ++;
            }
        }
    } 
    const arr = Object.keys(words).filter(x => {
        return words[x] == Math.max.apply(null, 
        Object.values(words));
    });


    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete',
      params: {query: arr[0]},
      headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': '03ffa659d4mshc4e93e3796be872p13a91djsnbba8107fc74f'
      }
    };
    
    return axios.request(options);
    // .then(function (response) {
    //     return response.data[0].name;
    // }).catch(function (error) {
    //     console.error(error);
    // });
}

const getRecipes = (data) => {
var options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
  params: {ingredients: data},
  headers: {
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'x-rapidapi-key': '03ffa659d4mshc4e93e3796be872p13a91djsnbba8107fc74f'
  }
};
return axios.request(options);
}

const getVideos = (data) => {
  var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search',
    params: {query: data, minLength: '0', maxLength: '999', number: '10', offset: '0'},
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': '03ffa659d4mshc4e93e3796be872p13a91djsnbba8107fc74f'
    }
  };
  
  return axios.request(options)
}

module.exports  = { getImage, identifier, getRecipes, getVideos };
