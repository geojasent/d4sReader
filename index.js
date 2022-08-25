import RSSParser from 'rss-parser';
import connectDb from './modules/connectDb.js'
import checkDbDate from './modules/compareDate.js';
import d4sSchema from './modules/feed.js';
import addDocument from './modules/addDocument.js';

function getFeed() {
    const feedUrl = 'https://www.reddit.com/r/flashlight/comments/wd7nme/bst_august_2022_buy_sell_trade_thread.rss';
    const parse = async url =>{
        const feed = await new RSSParser().parseURL(url);

        console.log(feed.title);

        let date = new Date();
        //Compare todays date to date of documents in db
        checkDbDate(date.toISOString().split('T')[0]);

        feed.items.forEach(item => {
            if (item.pubDate.split('T')[0] == date.toISOString().split('T')[0]) { 
                let content = item.contentSnippet.split(' ')
                if (content.includes('WTS') || content.includes('[WTS]')) {
                    //add document to collection
                    //console.log(item.contentSnippet)
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
addDocument()