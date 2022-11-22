import express from 'express';
import webpush from 'web-push';
import cors from 'cors';
import 'dotenv/config';
import connectDb from './modules/connectDb.js';
import d4sModel from './modules/feed.js';
import getFeed from './modules/getFeed.js';

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
        
    //Set vapid keys
    webpush.setVapidDetails(
        'mailto:test@test.com', 
        process.env.publicVapidKey, 
        process.env.privateVapidKey
    );

    // app.use(express.json());  c
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json()) 
    app.use(cors());
    app.post('/subscribe', (req, res) => {
        try {
        //Get subscription object
        const subscription = req.body;
        res.status(201).json("Subscription Saved");
    } catch (err) {
            console.log(err)
        }
    })

    const server = app.listen(7000, () => {
        console.log(`Express running → PORT ${server.address().port}`);
    });
}

// Sending push notification to subscribers
async function sendPushNotification(subscription) {//update parameter to req.body
    console.log('send push notification')
        subscription = {
            endpoint: "https://fcm.googleapis.com/fcm/send/dVBYqKtXLqw:APA91bE-oxL0y4KaIHgV10XQyMT9r19C_rNCOT-ynhNJJkaeFZS_6uLcRxWEc0RLJdV1LTw2wf8iSuJ28i3Bc4ymWF3yLwSSRZPnJRcYL6TExaI0w2xWhmIwAP_Q4IQ7gq7bP4HHYF_m", 
            expirationTime: null,
            keys: {
                p256dh: "BCgke60j4oBWT_uRVTw6irZrAPnjiG0aFCs8M7EkNPoUPhkrTpJh28UfZxq1Fh_sORfz3k1sVDScGaPwbMpgKbs",
                auth: "3ot1v2m6SqhQffwRWFe8xA" 
            }
        };

        //Notification Payload, this could contain more information about the notification
        const payload = {
            title: "New WTS Post", 
            body: JSON.stringify('feedContent')
        };

        //Pass object into sendNotification
        webpush.sendNotification(subscription, JSON.stringify(payload)).catch(err => console.log(err))

}

connectDb()
startServer()

const interval = setInterval(function() {getFeed()}, 600000);

export default sendPushNotification