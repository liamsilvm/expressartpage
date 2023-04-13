const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const axios = require('axios'); 
const path = require('path'); 
const useragent = require('express-useragent'); 
const {getImgurAlbumImages} = require('./api_calls/imgur'); 
const items = require('./routes/api/items');
const pages = require('./routes/api/websiteText'); 



const app = express(); 

app.use(bodyParser.json());// body parser middleware. 
//DB config 
const db = require('./config/keys').mongoURI; 


app.use(useragent.express()); 



//Connect to mongo 
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err)); 

//use routes 
app.use('/api/items', items); 
app.use('/api/pages', pages); 

app.get('/', (req,res) => { 
  let folder = ''; 
  if(req.useragent.isMobile){ 
    folder = 'mobile'; 
  }else{ 
    folder = 'desktop'; 
  }
  app.use(express.static(path.join(__dirname, 'build', folder))); 
    res.sendFile(path.join(__dirname, 'build', folder, 'index.html')); 
}); 


//now we need a mongo db uri (database)
//trythis is the password




//this is for getting gallery images from imgur
let imgur = getImgurAlbumImages('nQTfJ41', 'ffcfd436adb20cc')
app.get('/imgurimages/paintings', async (req, res) => {
  try {
    const imgur = await getImgurAlbumImages('nQTfJ41', 'ffcfd436adb20cc');
    res.json({images: imgur}); 
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving Imgur images');
  }
});

app.get('/imgurimages/sketches', async (req, res) => {
  try {
    const imgur = await getImgurAlbumImages('hRSOzlA', 'ffcfd436adb20cc', 'hRSOzlA');
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





