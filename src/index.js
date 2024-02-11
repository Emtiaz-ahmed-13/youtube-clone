import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
    path:'/env'
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Listening on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed!", err);
    });

























// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/$
//     {DB_NAME}`);
//   } catch (error) {
//     console.log("ERROR", error);
//     throw err;
//   }
// })();
