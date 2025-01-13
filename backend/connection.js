const mongoose = require('mongoose');

const url="mongodb+srv://codewith-Kashish:kkk6@cluster0.hji1i.mongodb.net/mynewdb?retryWrites=true&w=majority&appName=Cluster0"

//asynchronus functions - returns promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
    
}).catch((err) => {
    console.log(err);
    
    
});

module.exports = mongoose;