import mongoose from "mongoose"

export const ConnectDB = async () => {
    try {
        console.log("🔄 Attempting to connect to MongoDB...");
        await mongoose.connect('mongodb+srv://harmankhurmi365_db_user:sQ0CERJ9DzKLkDw4@cluster0.edmv7uk.mongodb.net/todo-next-app');
        console.log("✅ DB connected successfully!");
    } catch (error) {
        console.error("❌ DB connection failed:", error.message);
    }
}

