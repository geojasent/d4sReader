import RSSParser from 'rss-parser';
import deleteOldFeed from './compareDate.js';
import addDocument from './addDocument.js';
import refreshCounter from './refreshCounter.js';

function getFeed() {
    //Update feedUrl every month
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
    refreshCounter()
    console.log('Parsing' + feedUrl);
    parse(feedUrl);
}

export default getFeed