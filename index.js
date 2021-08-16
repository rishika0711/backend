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
app.use('/api/',route);
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