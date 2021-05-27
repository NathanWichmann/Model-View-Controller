const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
  Post.findAll({
      attributes: [
        'id',
        'title',
        'body',
        'date_created'
      ],
    order: [['date_created', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'body', 'userId', 'postId', 'date_created'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      },
    ]
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});




  module.exports = router;