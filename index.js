window.onload = function (e) {
    liff.init({
        liffId: '1657284809-ew3YylaE'
    }).then(() => {
        if (!liff.isInClient()) {
            window.alert('This button is unavailable as LIFF is currently being opened in an external browser.');
        } else {
            
        }
    });
};

function sendMessage(){
    liff.sendMessages([
        {
            "type": "image",
            "url": "https://stickershop.line-scdn.net/products/0/0/1/19134836/android/animation/492435199.png",
            "animated": true
        },
    ])
}