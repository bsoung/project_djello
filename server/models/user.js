const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoPopulateBoards = function(next) {
	this.populate("boards");
	next();
};

const UserSchema = mongoose.Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true },
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

UserSchema.pre("find", autoPopulateBoards);

UserSchema.methods.summary = function() {
	const summary = {
		id: this._id.toString(),
		username: this.username,
		email: this.email,
		profile: this.profile,
		comments: this.comments,
		boards: this.boards,
		teams: this.teams,
		timestamp: this.timestamp
	}

	return summary;
}

module.exports = mongoose.model("User", UserSchema);