const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
	author: { type: Schema.Types.ObjectId, ref: "User" },
	body: { type: String, required: true },
	timestamp: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Comment", CommentSchema);