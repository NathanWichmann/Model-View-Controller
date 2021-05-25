const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


Post.belongsTo(User,{
    foreignKey: 'userId',

});


Post.hasMany(Comment, {
    foreignKey: 'postId',

});

Comment.belongsTo(User, {
    foreignKey: 'userId',

});

User.hasMany(Comment, {
    foreignKey: 'userid'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });


//onDelte: set null


module.exports = { User, Post, Comment };
