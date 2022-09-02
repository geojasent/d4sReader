import mongoose from "mongoose";
import d4sModel from './feed.js';

//if the feed date is not the same as date in db, empty db
async function checkDbDate(feedDate) {
    const connection = mongoose.connection;
    const collection = connection.db.collection("dailyFeed");
    console.log('running date compare')
    const query = d4sModel.findOne({date: feedDate}, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            if (docs || docs === null) {
                return console.log('Add to the collection');
                
            } else {
                console.log('Deleting old feed')
                d4sModel.deleteMany(({}), function(err, result) {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log(result);
                    }
                });
            };
        };
    });
};

export default checkDbDate