const { model, Schema, } = require('../connection');

const blogSchema = new Schema({
    title: String,
    cover: String,
    description: String,
    content: String,
    uploadedBy: String,
    createdAt: { type: Date, default: Date.now }

});

module.exports = model('blog', blogSchema); 