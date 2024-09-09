const express = require('express');
const router = express.Router();

// Route for the welcome page
router.get('/welcome', (req, res) => {
    res.render('welcome', { layout: 'layout' });
});

// Route for the index page (using the same view as welcome)
router.get('/', (req, res) => {
    res.render('welcome', { layout: 'layout' });
});

module.exports = router;

