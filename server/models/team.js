const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	profile: { 
		image: { type: String, default: null },
		description: { type: String, default: null }
	 },
	boards: [{ type: Schema.Types.ObjectId, ref: "Board" }],
	members: [{ type: Schema.Types.ObjectId, ref: "User" }],
	timestamp: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Team", TeamSchema);