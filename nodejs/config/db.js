const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        console.log("DB_URI", process.env.DB_URI);
        await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connected…')
    } catch (err) {
        console.error("error happens:", err);
    }
}
module.exports = connectDB;
