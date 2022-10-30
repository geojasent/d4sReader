import RSSParser from 'rss-parser';
import refreshCounter from './refreshCounter.js';
import { deleteOldFeed, checkDb } from './checkDb.js';

function getFeed() {
    //Update feedUrl every month
    const feedUrl = 'https://www.reddit.com/r/flashlight/comments/xslghd/bst_october_2022_buy_sell_trade_thread.rss';
    const parse = async url =>{
        const feed = await new RSSParser().parseURL(url);

        let date = new Date();
        let feedDate = date.toISOString().split('T')[0];

        deleteOldFeed(feedDate);
        
        //Check db
        feed.items.forEach(item => {
            if (item.pubDate.split('T')[0] == feedDate) { 
                let content = item.contentSnippet.split(' ');
                if (content.includes('WTS') || content.includes('[WTS]') || content.includes('wts') || content.includes('[wts]')) {
                    checkDb(item.id, feedDate, item.author, item.contentSnippet)
                } else {
                    console.log('Not WTS post')
                };
            };
        });

    };
    refreshCounter()
    console.log('Parsing ' + feedUrl);
    parse(feedUrl);
}

export default getFeed