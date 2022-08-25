import mongoose from "mongoose";
import d4sModel from './feed.js';

async function checkDbDate(date) {
    const connection = mongoose.connection;
    connection.db.listCollections().toArray(function (err, names) {
        console.log(names);})
    // const collection  = connection.db.collection("dailyFeed");
    // collection.find({}).toArray(function(err, data){
    //       console.log(data); // it will print your collection data
    // });
};

export default checkDbDate