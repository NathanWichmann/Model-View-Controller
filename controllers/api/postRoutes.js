const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
  Post.findAll()
  .then((dbPostData) =>{ 

    // convert the data to smething handlebars can use (serialize)
    var posts = dbPostData.map(post => post.get({plain:true}))
    // render the data in a handlebars template
    res.render("posts", {posts})
    
   })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', async (req, res) => {
  try { 
    const postData = await Post.create({
    title: req.body.title,
    body: req.body.body,
    
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(postData)
  console.log(postData)
} catch (err) {
  res.status(400).json(err);
}
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });
      console.log(postData)
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});




  module.exports = router;