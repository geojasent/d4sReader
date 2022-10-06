// import mongoose from "mongoose";
import d4sModel from "./feed.js";

async function addDocument(feedDate, feedUser, feedContent) {
    console.log('Adding WTS post');

    //Query db for post, add post if post not found
    const query = d4sModel.findOne({content: feedContent}, function(err, docs) {
        if (err) {
            console.log(err);
        } else {

            if (docs === null) {
                console.log('Add WTS post to db');
                d4sModel.create({
                    date: feedDate,
                    user: feedUser,
                    content: feedContent
                });
                //add function to notify user of new post*****
            } else {
                console.log('Repeat post not added to db');
            };
        };
    });
};

export default addDocument