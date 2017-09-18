const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoPopulateAuthor = function(next) {
	this.populate("author");
	next();
};

const BoardSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	lists: [{ type: Schema.Types.ObjectId, ref: "List" }],
	members: [{ type: Schema.Types.ObjectId, ref: "User" }],
	timestamp: { type: Date, default: Date.now },
});

BoardSchema.pre("findOne", autoPopulateAuthor);


module.exports = mongoose.model("Board", BoardSchema);