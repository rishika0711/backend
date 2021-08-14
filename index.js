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

app.listen(9000, () => {
    console.log("sever is listening to port 9000")
});