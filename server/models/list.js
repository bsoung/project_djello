const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
	parent: { type: Schema.Types.ObjectId, ref: "Board" },
	timestamp: { type: Date, default: Date.now }
});


module.exports = mongoose.model("List", ListSchema);