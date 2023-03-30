const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const axios = require('axios'); 
const path = require('path'); 
const useragent = require('express-useragent'); 
const {getImgurAlbumImages} = require('./api_calls/imgur'); 

const items = require('./routes/api/items'); //any request that goes to api/items goes to this file




const app = express(); 

//body parser middleware. 
// app.use(bodyParser.json());

app.use(useragent.express()); 
app.use(express.static(path.join(__dirname, 'build'))); 
app.get('/', (req,res) => { 
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


//now we need a mongo db uri (database)
//trythis is the password
//DB config 
const db = require('./config/keys').mongoURI; 

//Connect to mongo 
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err)); 
//use routes 
app.use('/api/items', items); 

//this is for getting gallery images from imgur
let imgur = getImgurAlbumImages('nQTfJ41', 'ffcfd436adb20cc')
app.get('/imgurimages', async (req, res) => {
    try {
      const imgur = await getImgurAlbumImages('nQTfJ41', 'ffcfd436adb20cc');
      res.json({images: imgur}); 
      
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving Imgur images');
    }
  });
  
app.get('/test', (req,res) => { 
    res.send(`server is running `); 
})
// starting the server, giving the option of having 5000 or the local port this is hosted on
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`server started on port ${port}`));





