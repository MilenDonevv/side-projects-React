

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
// We gave it the name 'Blog'


/*


The Blog.find() function is a Mongoose method that queries the MongoDB database to retrieve documents from a collection. 
Here’s what it does in detail:

Explanation of Blog.find()
Model Definition:

Blog is a Mongoose model representing a collection in your MongoDB database. 
This model is usually defined by creating a schema and then compiling it into a model using Mongoose.

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);
Here, Blog is the model that interfaces with the blogs collection in your MongoDB database.
Using find():

Blog.find() is a method provided by Mongoose to retrieve documents from the blogs collection.
By default, find() returns an array of all documents in the collection that match the query criteria. 
If no criteria are specified (like in your case), it retrieves all documents.

blogList = await Blog.find();
In the line above, Blog.find() is called with no arguments, so it retrieves all documents in the blogs collection.
Returning the Results:

Blog.find() returns a promise. When you use await before it, your code waits until the promise resolves, 
and then blogList is assigned the array of documents (blogs) returned from the database.
If the collection contains three blog posts, for example, 
blogList will be an array with three objects, each representing a blog post.


Querying with Criteria:

You can pass a query object to find() to filter the documents that are retrieved. 
For example, to find blogs authored by "John Doe":


blogList = await Blog.find({ author: 'John Doe' });
This would return only the documents where the author field matches "John Doe".
Chainable Methods:

find() can also be chained with other methods like .limit(), .sort(), or .select() to further refine the query.

blogList = await Blog.find().sort({ createdAt: -1 }).limit(10);
This retrieves the 10 most recent blog posts, sorted by the createdAt field in descending order.


Summary:
Blog.find() is used to retrieve documents from the blogs collection in MongoDB. 
In the absence of any query criteria, it returns all documents in the collection. 
The await keyword ensures that your code waits for the operation to complete and assigns the result 
(an array of blog posts) to the blogList variable



*/