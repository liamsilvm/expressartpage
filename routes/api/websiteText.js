const express = require('express'); 
const router = express.Router(); 

let app = express(); 

const Page = require('../../models/WebText'); 







router.get('/', (req,res) => { 
    //fetch all items from the database 
    Page.find()
    .sort({ date: -1 })
    .then(pages => res.json(pages))
}); 










router.post('/', (req,res) => { 

    const newPage = new Page({
        page: req.body.page, 
        title: req.body.title, 
        body: req.body.body
    }); 

    newPage.save().then(page => res.json(page)); 

}); 











router.delete('/:id', (req,res) => { 
    Page.findByIdAndDelete(req.params.id)
    .then(() => res.json({success:true}))
    .catch(err => res.status(404).json({success:false, error: err}))
   
})

router.put('/:id', (req, res) => {
    Page.findByIdAndUpdate(req.params.id, { title: req.body.title, body: req.body.body }, { new: true })
      .then(page => {
        res.json(page);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      });
  });
  









module.exports = router; 