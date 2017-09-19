const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const autoPopulateLists = function(next) {
// 	this.populate("lists");
// 	next();
// };

const BoardSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	lists: [{ type: Schema.Types.ObjectId, ref: "List" }],
	members: [{ type: Schema.Types.ObjectId, ref: "User" }],
	timestamp: { type: Date, default: Date.now },
});

// BoardSchema.pre("find", autoPopulateLists);

module.exports = mongoose.model("Board", BoardSchema);