const publicKey = 'BCvoEOcVhzpv7sCf9RAsgz9Wox-RLIKwETYzgcclP9LyHtnTxMowObD93t-S5EP9QnR24mWW1bxui1j0lRn1Gzo'

//Check for service worker
if ('serviceWorker' in navigator) {
    send().catch(err => console.log(err));
}

//Register sw, register push, send push
async function send() {
    console.log("Registering service worker...");
    const register = await navigator.serviceWorker.register('/public/worker.js', {
    });
    console.log('Service worker registered')

    //Register push
    console.log('Registering push...');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey
    })
    console.log('Push registered');
    //Send push notification    
    console.log('Sending Push...');
    await fetch('/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    })
    console.log('Push sent');
}