const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//Create Schema 
const pageSchema = new Schema({ 
    page: {
        type: String, 
        required: true
    }, 
    date: { 
        type: Date, 
        default: Date.now
    }, 
    title: { 
        type: String, 
        required: false
    }, 
    body: { 
        type: String, 
        required: false
    }

}); 

module.exports = Page = mongoose.model('pageText', pageSchema); 

