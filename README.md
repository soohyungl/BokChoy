# BokChoy?
BokChoy? is an application mainly used for identifying unknown produce items at ethnic grocery stores, parsing recipes, and finding new things to cook with based on this information. This application will take an input photo from your system and return the name of the produce item, a recipe list, and a list of relevant YouTube videos. 

********************                      ********************
____________________ Things you will need ____________________

1. Make sure you have an API Key from SerpAPI for the Google Reverse Image Search. You can create one by making a new account on https://serpapi.com/google-reverse-image .
2. Make sure you have an API Key from Spooncular API for the recipe list and video list. You will have to create a new account on RapidAPI and navigate to SpoonCcular's api from https://rapidapi.com/spoonacular/api/recipe-food-nutrition .
3. Make sure you have a Cloudinary API key as well as the URL for the cloudinary image ready

********************                      ********************
____________________ Starting the App ____________________

1. Run "npm install"
2. This app uses babel/webpack. To use, run "npm run build"Cancel changes
3. To start the server which will be requesting/serving the API responses, use "npm start"
4. Connect to http://localhost:3000/
5. Upload a clear image of the produce in question, make sure it is one item by itself, and have fun!
