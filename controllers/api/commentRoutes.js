const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
  Comment.findAll()
  .then((dbcommentData) =>{ 
    // console.log(dbcommentData)
    // convert the data to smething handlebars can use (serialize)
    var comments = dbcommentData.map(comment => comment.get({plain:true}))
    // render the data in a handlebars template
    res.render("comments", {comments})
    // console.log(comments)
    
   })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});




  module.exports = router;