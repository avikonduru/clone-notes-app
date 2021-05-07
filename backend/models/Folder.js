const mongoose = require('mongoose');

const FolderSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model('user', FolderSchema);