const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    startdate: { type: Date, default: Date.now, required: true },
    enddate: { type: Date, required: true },
    starttime: { type: Time, required: true },
    endtime: { type: Time, required: true },

});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;