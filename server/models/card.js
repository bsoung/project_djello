const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	members: [{ type: Schema.Types.ObjectId, ref: "User" }],
	comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
	parent: { type: Schema.Types.ObjectId, ref: "List" },
	timestamp: { type: Date, default: Date.now },
});

CardSchema.pre('remove', function(next) {
    // Remove all the assignment docs that reference the removed person.

    this.model('List').remove({ cards: this._id }, next);
});


module.exports = mongoose.model("Card", CardSchema);