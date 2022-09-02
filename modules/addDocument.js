import mongoose from "mongoose";
import d4sModel from "./feed.js";

const addDocument = function(feedDate, feedUser, feedContent) {

    //if already in db, do not add*****
    console.log('adding to database')
    d4sModel.create({
        date: feedDate,
        user: feedUser,
        content: feedContent
        }, 
        function (err, feed_instance) {
            if (err) return handleError(err);
    });
}

export default addDocument