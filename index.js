const express = require('express');
const app = express();
const route = require('./routes');

// app.get('/name',(req , res) => {
//     res.send({
//         name:'rihika',
//         class:'tets',
//     });
// });

// app.put('/',(req , res) => {
//     res.send(" put hello");
// });

//parsing the application json request type
app.use(express.json());

const middleware = (req,res,next)=>{
    console.log('Logging the value');
    next(); 
}
app.use(middleware);

app.use('/api/',route);
app.use('/static/',express.static('public'));
app.use('/images/',express.static('public/images'));

//app.use('/',route);

// this *  is use to print the msg when user try to call api which not deine in sytem
// app.get('*',(req,res)=>
// {
//     console.log('Sorry this url doessnt exit');
//     res.send('Sorry this url this not exit');
// })
app.listen(9000, () => {
    console.log("sever is listening to port 9000")
});