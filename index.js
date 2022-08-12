import RSSParser from 'rss-parser';

const feedUrl = 'https://www.reddit.com/r/flashlight/comments/wd7nme/bst_august_2022_buy_sell_trade_thread.rss';
const parse = async url =>{
    const feed = await new RSSParser().parseURL(url);

    console.log(feed.title);

    let date = new Date();

    feed.items.forEach(item => {
        if (item.pubDate.split('T')[0] == date.toISOString().split('T')[0]) {
            let content = item.contentSnippet.split(' ')
            if (content.includes('WTS') || content.includes('[WTS]')) {
            // let content = item.content.split(' ');
            // if (content.includes('WTS')) {
                console.log(item.contentSnippet)
                console.log('true')
            };
        };
    });
};

console.log('Parsing' + feedUrl);
parse(feedUrl);