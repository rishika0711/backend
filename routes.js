const express = require('express');
const router = express.Router();

router.get('/name',(req , res) => {
    res.send({
        name:'rihika',
        class:'tets',
    });
});

router.post('/',(req , res) => {
    res.send(" put hello");
});

module.exports = router;