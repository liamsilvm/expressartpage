const express = require('express'); 
const router = express.Router(); 

let app = express(); 

//Item Model 

const Item = require('../../models/Item'); 

//@route  GET api/items
//@desc   Get All Items 
//#access Public 

router.get('/', (req,res) => { 
    //fetch all items from the database 
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
}); 

//@route  POST api/items
//@desc   Create an Item
//#access Public 

router.post('/', (req,res) => { 
    //constrcut an object to insert into the databse 
    const newItem = new Item({
        name: req.body.name, 
        comment: req.body.comment, 
        image: req.body.image
    }); 

    newItem.save().then(item => res.json(item)); 

}); 

//@route  DELETE api/items/:id
//@desc   Delete a post
//#access Public 

router.delete('/:id', (req,res) => { 
    Item.findById(req.params.id) 
    .then(item => item.remove()
    .then(() => res.json({success: true}))
    )
    .catch(err => res.status(404).json({success: false})); 
    
})




module.exports = router; 




