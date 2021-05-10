import PostMessage from "../models/postMessage.js";

{/*Async func because PostMessage.find() will take time to load and find something in the model*/}
export const getPosts = async (req, res) => {
  try {
      const postMessages = await PostMessage.find();

      res.status(200).json(postMessages);
  } catch (error) {
      res.status(404).json({message: error.message});
  }
}

export const createPost = (req, res) => {
  const body = req.body;
  const newPost = new PostMessage(post);

  try {
      await newPost.save();
      
      res.status(201).json(newPost);
  } catch (e) {
      res.status(409).json({message: error.message});
  }
}