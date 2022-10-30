import d4sModel from "./feed.js";

async function addDocument(feedId, feedDate, feedUser, feedContent) {

    //Query db for post, add post if post not found
    const query = await d4sModel.findOne({content: feedContent}, function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            if (docs === null) {
                console.log('Add WTS post to db');
                d4sModel.create({
                    id: feedId,
                    date: feedDate,
                    user: feedUser,
                    content: feedContent
                });
                //add function to notify user of new post*****
            } else {
                console.log('Repeat post not added to db');
            };
        };
    }).clone();

};
//where does this function go
async function updateDocument(feedId, feedContent) {
    console.log('Updating document in db')

    //Query db to update post - test to see if this works****
    const query = await d4sModel.updateOne({id: feedId}, {content: feedContent})
}

export { addDocument, updateDocument } 