const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
        default: ""
	},
    content: {
		type: String,
		required: true,
        default: ""
	},
    timeCreated: {
		type: Date,
		required: true,
        default: Date.now()
	},
    timeModified: {
		type: Date,
		required: true,
        default: Date.now()
	},
    folder: {
        folderId: {
            type: String,
		    required: true,
        },
        folderName: {
            type: String,
		    required: true,
        }
    }
});

module.exports = mongoose.model('user', NotesSchema);