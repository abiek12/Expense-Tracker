import mongoose from "mongoose";
import logger from "../utils/logger.utils";

export const connectDB = async () => {
    try {        
        await mongoose.connect(process.env.MONGO_URI!);
        logger.info("Database connected successfully!")
    } catch (error) {
        logger.error("Database connection failed!", error);
        process.exit(1);;
    }
}