var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  title: String
});

CategorySchema.belongsTo('TwitterUser', { through: 'editor' });

// should only delete the reference
CategorySchema.habtm('TwitterPost', { through: 'posts', dependent: 'delete' });

CategorySchema.hasMany('pets');

module.exports = mongoose.model('Category', CategorySchema);
