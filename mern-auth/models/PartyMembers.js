const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for the users of the application
const PartyMembersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = User = mongoose.model("party_members", PartyMembersSchema);