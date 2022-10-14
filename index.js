// import RSSParser from 'rss-parser';
import express from 'express';
import connectDb from './modules/connectDb.js'
// import deleteOldFeed from './modules/compareDate.js';
import d4sModel from './modules/feed.js';
// import addDocument from './modules/addDocument.js';
import getFeed from './modules/getFeed.js';

//while server is running make request to url every 10 min, feed refresh counter*****
//if new post, update db, client alert*****
function startServer() {
    getFeed()
    const app = express();
    app.set('view engine', 'ejs');
    app.use('/public', express.static('public'))
    
    app.get('/', function (req, res) {
        const query = d4sModel.find({}, function(err, feedList) {
            if (err) {
                console.log(err);
            } else {
                if (feedList) {
                    return res.render('index', {'feedList': feedList, clickHandler: 'refreshFeed()'});
                } else {
                    return console.log('No feed in db to show');
                };
            };
        });
    });
        
    const server = app.listen(7000, () => {
        console.log(`Express running → PORT ${server.address().port}`);
    });
}

//send notification with update (make new function or module for this)****

connectDb()
startServer()

const interval = setInterval(function() {getFeed()}, 600000);

export default startServer