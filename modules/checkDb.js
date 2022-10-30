import d4sModel from "./feed.js";
import { addDocument, updateDocument } from './addDocument.js';

//Delete old feed in db
async function deleteOldFeed(feedDate) {
    console.log('running date compare');

    const query = d4sModel.findOne({date: {$lt:feedDate}}, function(err, docs) {
        if (err) {
            console.log(err);
        } else {

            if (docs) {
                console.log('Deleting old feed in db');
                d4sModel.deleteMany(({}), function(err, result) {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log(result);
                    }
                });
            } else {
                return console.log('No old feed in db to delete');
            };
        };
    });
};

//Check db for content id
async function checkId(feedId) {
    const dbDoc = await d4sModel.findOne({id: feedId}, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            return docs;
        }
    }).clone();
    return dbDoc ? true : false
};

//Check db for matching content
async function checkContent(feedContent) {
    const dbDoc = await d4sModel.findOne({content: feedContent}, function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            return docs;
        }
    }).clone();
    return dbDoc ? true : false;
}

async function checkDb (feedId, feedDate, feedUser, feedContent) {
    if (!await checkId(feedId).then() && !await checkContent(feedContent).then()) {
        console.log('Add WTS post');
        addDocument(feedId, feedDate, feedUser, feedContent);
    } else if (await checkId(feedId).then() && !await checkContent(feedContent).then()) {
        console.log('Update WTS post')
        updateDocument(feedId, feedContent);
    } else {
        console.log('Repeat post');
    }
}

export { deleteOldFeed, checkDb }