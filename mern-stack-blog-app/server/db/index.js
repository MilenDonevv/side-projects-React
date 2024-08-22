const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://milendonev95:FiUfoLCylcX15FpV@mern-app.fjgcf.mongodb.net/')
.then(() => console.log('Connected mongo db'))
.catch(e => console.log(e));


