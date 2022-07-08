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
            "type": "flex",
            "altText": "this is a flex message",
            "contents": {
              "type": "bubble",
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "image",
                    "url": "https://stickershop.line-scdn.net/products/0/0/1/19134836/android/stickers/492435199.pnga"
                  }
                ]
              }
            }
          }
          ,
    ]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Error sending message: ' + error.message);
    });
}