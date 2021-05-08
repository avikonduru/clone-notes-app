const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Model
const Notes = require('../models/Notes');

// @route   GET api/notes/create
// @desc    Create a note
// @access  Public
router.put(
	'/create',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('content', 'Content is required').not().isEmpty(),
		check('timeCreated', 'Time Created is required').not().isEmpty(),
		check('timeModified', 'Time Modified is required').not().isEmpty(),
		check('folderId', 'Folder Id is required').not().isEmpty(),
		check('folderName', 'Folder Name is required').not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		let {
			name,
			content,
			timeCreated,
			timeModified,
			folderId,
			folderName,
		} = req.body;

		try {
			
			const newNote = new Notes({
				name: name,
				content: content,
				timeCreated: timeCreated,
				timeModified: timeModified,
				folder: {
					folderId: folderId,
					folderName: folderName,
				},
			});

			await newNote.save();

			res.send({'Added note: ': newNote.id});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;