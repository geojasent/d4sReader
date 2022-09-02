import RSSParser from 'rss-parser';
import connectDb from './modules/connectDb.js'
import checkDbDate from './modules/compareDate.js';
import d4sSchema from './modules/feed.js';
import addDocument from './modules/addDocument.js';

function getFeed() {
    const feedUrl = 'https://www.reddit.com/r/flashlight/comments/x2xnze/bst_september_2022_buy_sell_trade_thread.rss';//need to check if url is valid
    const parse = async url =>{
        const feed = await new RSSParser().parseURL(url);

        console.log(feed.title);

        let date = new Date();
        let feedDate = date.toISOString().split('T')[0];

        //Compare current date to date of documents in db 
        checkDbDate(feedDate);
        
        //Add feed to db
        feed.items.forEach(item => {
            if (item.pubDate.split('T')[0] == feedDate) { 
                let content = item.contentSnippet.split(' ');
                if (content.includes('WTS') || content.includes('[WTS]') || content.includes('wts') || content.includes('[wts]')) {
                    addDocument(feedDate, item.author, item.contentSnippet);
                } else {
                    console.log('Item is not WTS post')
                };
            };
        });

    };

    console.log('Parsing' + feedUrl);
    parse(feedUrl);
}
//if the feed date is not the same as in db, empty db
//if the feed (need an identifier e.g. author, content, for each feed) is not the same => add new feed to db
//send notification with update (make new function or module for this)

connectDb()
getFeed()
// addDocument(feedDate, feedUser, feedContent) //put this in get feed?