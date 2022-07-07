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
            "type": "bubble",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "APENGテスト",
                        "weight": "bold",
                        "size": "xl"
                    },
                    {
                        "type": "text",
                        "text": "電話をかけています..."
                    },
                    {
                        "type": "image",
                        "url": "https://stickershop.line-scdn.net/products/0/0/1/19134836/android/animation/492435199.png",
                        "animated": true
                    }
                ]
            },
            "footer": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "twitter:@inoue2002",
                        "weight": "bold",
                        "style": "normal",
                        "decoration": "none",
                        "position": "relative",
                        "align": "center"
                    }
                ]
            },
            "styles": {
                "footer": {
                    "backgroundColor": "#d4d9df",
                    "separator": true,
                    "separatorColor": "#d4d9df"
                }
            }
        },
    ]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Error sending message: ' + error.message);
    });
}