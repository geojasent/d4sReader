import mongoose from "mongoose";
import d4sModel from "./feed.js";

const addDocument = function() {
    // const feed_instance = new d4sModel({
    //     date: '2022-08-25', //update to input variables from index.js
    //     user: 'testusername',
    //     content: 'test of the content to see if it works'
    // })

    d4sModel.create({
        date: '2022-08-25', //update to input variables from index.js
        user: 'testusername',
        content: 'test of the content to see if it works'
        }, 
        function (err, feed_instance) {
            if (err) return handleError(err);
    });
}

export default addDocument