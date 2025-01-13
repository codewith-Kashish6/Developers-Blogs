//importing express
const express = require('express');
const UserRouter = require('./routers/userRouter')
const BlogRouter = require('./routers/blogrouter')


const cors = require('cors');

//initialisng express
const app = express();
const port = 5000;

//middleware
app.use(cors({
    origin: "http://localhost:3000"
}
));
app.use(express.json());
app.use('/user',UserRouter);
app.use('/blog',BlogRouter);

//routes


//accept and process request
app.get('/',(req, res) => { //two parameters
    res.send('response from express');
});

app.get('/add',(req,res) => {
    res.send('response from add')
});

//getall
app.get('/getall',(req,res)=>{
    res.send('response from getall')

});

//delete
app.get('/delete',(req,res)=>{
    res.send('response from delete')

});

//update
app.get('/update',(req,res)=>{
    res.send('response from update')

});

//start the server
app.listen(port, () => {
    console.log('server started');
    
});