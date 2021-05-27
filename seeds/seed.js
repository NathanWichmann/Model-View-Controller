const sequelize = require('../config/connection');
const { User } = require('../models');
const { Post } = require('../models');
const { Comment } = require('../models');
const { Project } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData, {
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    returning: true,
  });

  await Project.bulkCreate(projectData, {
    returning: true,
  });



  process.exit(0);
};

seedDatabase();
