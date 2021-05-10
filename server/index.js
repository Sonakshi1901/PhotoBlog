import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js'


const app = express();

{/* http://localhost:5000/posts */}
app.use("/posts", postRoutes);

{/*bodyParser is done so that we can properly send our requests (images)*/}
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://Sonakshi_1901:Suga1993@cluster0.xbzaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

{/*The parameters are given as true so that we can avoid errors and warnings in the console. Mongoose returns a promise so we need the then and catch func*/}
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
   .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
