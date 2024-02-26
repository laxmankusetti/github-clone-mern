import mongoose from "mongoose"


const connectMongoDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('App is connected with MONGODB')
}

export default connectMongoDB;