const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//Create Schema 
const ItemSchema = new Schema({ 
    name: {
        type: String, 
        required: true
    }, 
    date: { 
        type: Date, 
        default: Date.now
    }
}); 

module.exports = Item = mongoose.model('item', ItemSchema); 

/* 
What is a Schema? A schema is a JSON object 
that defines the the structure and contents
 of your data. You can use Atlas App Services'
  BSON schemas, which extend the JSON Schema 
  standard, to define your application's data 
  model and validate documents whenever they're 
  created, changed, or deleted.

*/ 




/* 

WHAT ARE SCHEMAS 


this is going to be a little in a nutshell about what schemas are. 

first you learn how to install mongo, then how to create databases, and the finally, how to enter 
data into the data base. 



there is a little bit mroe discussion on mongo db. 


some theoretical discussion on mongo db +++ === 

SCHEMA 

What is a schema? 

is is the organization of your database. 



*/ 

