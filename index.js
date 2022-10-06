import RSSParser from 'rss-parser';
import express from 'express';
import connectDb from './modules/connectDb.js'
import deleteOldFeed from './modules/compareDate.js';
import d4sModel from './modules/feed.js';
import addDocument from './modules/addDocument.js';

function startServer() {
    const app = express();
    app.set('view engine', 'ejs');
    
    app.get('/', (req, res) => {
            // let feedList = [{'feedtest': 'feed one'}, {'feedtest': 'feed two'}];
            // let feedList = getDbFeed()
            const query = d4sModel.find({}, function(err, feedList) {
                if (err) {
                    console.log(err);
                } else {
                    if (feedList) {
                        return res.render('index', {'feedList': feedList});
                        //how to get this in ejs, send to controller?*****
                    } else {
                        return console.log('No feed in db to show');
                        //how to get this in ejs, send to controller?*****
                    };
                };
            });
          });
        
    const server = app.listen(7000, () => {
        console.log(`Express running → PORT ${server.address().port}`);
    });
}

//maybe move this function to another file?****
function getFeed() {
    //Update feedUrl
    const feedUrl = 'https://www.reddit.com/r/flashlight/comments/xslghd/bst_october_2022_buy_sell_trade_thread.rss';
    const parse = async url =>{
        const feed = await new RSSParser().parseURL(url);

        console.log(feed.title);

        let date = new Date();
        let feedDate = date.toISOString().split('T')[0];

        deleteOldFeed(feedDate);
        
        //Add feed to db
        feed.items.forEach(item => {
            if (item.pubDate.split('T')[0] == feedDate) { 
                let content = item.contentSnippet.split(' ');
                if (content.includes('WTS') || content.includes('[WTS]') || content.includes('wts') || content.includes('[wts]')) {
                    addDocument(feedDate, item.author, item.contentSnippet);
                    console.log('WTS post')
                } else {
                    console.log('Not WTS post')
                };
            };
        });

    };

    console.log('Parsing' + feedUrl);
    parse(feedUrl);
}

//send notification with update (make new function or module for this)****

connectDb()
getFeed()
startServer()