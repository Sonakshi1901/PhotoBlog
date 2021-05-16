import mongoose from "mongoose";

{/*mongoose gives us a uniformity in our documents*/}
const postSchema = mongoose.Schema({
  title: {
    type: String
  },
  message: {
    type: String
  },
  creator: {
    type: String
  },
  tags: [String],
  selectedFile: {
    type: String
  },
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
