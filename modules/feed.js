import mongoose from "mongoose";

const Schema = mongoose.Schema;

const d4sSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const d4sModel = mongoose.model('dailyfeeds', d4sSchema)

export default d4sModel