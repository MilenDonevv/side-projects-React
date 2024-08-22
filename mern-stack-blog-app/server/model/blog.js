

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = mongoose.Schema({
    title: {
        type: String
    },

    description: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Blog', BlogSchema);

// This is how we're creating a model; 
// We gave it the bane 'Blog'