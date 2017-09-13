const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	profile: { 
		image: { type: String, default: null },
		bio: { type: String, default: null }
	 },
	comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
	boards: [{ type: Schema.Types.ObjectId, ref: "Board" }],
	teams: [{ type: Schema.Types.ObjectId, ref: "Team" }],
	timestamp: { type: Date, default: Date.now },
});

UserSchema.pre("save", async function(next) {
	const user = this;
	const hash = await bcrypt.hashSync(user.password, 12);

	user.password = hash;
	next();
});

module.exports = mongoose.model("User", UserSchema);