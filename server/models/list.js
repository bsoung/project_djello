const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
	timestamp: { type: Date, default: Date.now }
});


module.exports = mongoose.model("List", ListSchema);