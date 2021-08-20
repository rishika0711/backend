const express = require('express');
const router = express.Router();

// router.get('/name',(req , res) => {
//     res.send({
//         name:'rihika',
//         class:'tets',
//     });
// });

router.post('/',(req , res) => {
    console.log('Body',req.body);
    res.send(" put hello");
});

//dynamic routes
// router.get('/:id/users',(req, res) => {
//     console.log(`this is the value - ${req.params.id}`);
//     res.send({
//        
//         name:'rihika',
//         class:'tets',
//     });
// });

//using regular expression [Reg ex]=define a rule set for string or number

// router.get('/:id([0-9])',(req, res) => {
//     console.log(`this is the value - ${req.params.id}`);
//     res.send({
//        // name:'hello', rts = router;
//         name:'rihika',
//         class:'tets',
//     });
// });

// router.get('/:id([0-9]{5})',(req, res) => {
//     console.log(`this is the value - ${req.params.id}`);
//     res.send({
//        // name:'hello', rts = router;
//         name:'rihika',
//         class:'tets',
//     });
// });

// router.get('/:id(*)',(req, res) => {
//     console.log(`this is the value - ${req.params.id}`);
//     res.send({
//        // name:'hello', rts = router;
//         name:'rihika',
//         class:'tets',
//     });
// });


// router.get('/:id([A-Z])',(req, res) => {
//         console.log(`this is the value - ${req.params.id}`);
//         res.send({
//            // name:'hello', rts = router;
//             name:'rihika',
//             class:'tets',
//         });
//     });

// Query parameter

// router.get('/:id',(req, res) => {
//             console.log(`this is the value - ${req.params.id}`);
//             console.log(`this is the value - ${req.query.status}`);
//             res.send({
//                // name:'hello', rts = router;
//                 name:'rihika',
//                 class:'tets',
//             });
//         });

router.get('/:id',(req, res) => {
            console.log(`this is the value - ${req.params.id}`);
            console.log(`this is the value - ${req.query.page} & ${req.query.limit} `);
            res.send({
               // name:'hello', rts = router;
                name:'rihika',
                class:'tets',
            });
        });



module.exports = router; 

// Middleware
// 1.between req an res
// 2.it can manipulet the req
// 3.it can manipulet the res
// 4.execute any logical Code
//5.end the req and res cycle
