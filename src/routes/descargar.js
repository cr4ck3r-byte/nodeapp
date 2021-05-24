const express = require('express');
const router = express.Router();

router.get('/descargar', (req, res)=>{
    res.render('descargar');
});

router.get('/app', (req, res)=>{
    res.render('app');
});

module.exports = router;