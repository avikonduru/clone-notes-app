const express = require('express');
const router = express.Router();

// @route   GET api/movie/popular
// @desc    Get a list of the most popular movies
// @access  Public
router.get('/', (req, res) => {
	try {
		res.send("Notes API Route running");
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;