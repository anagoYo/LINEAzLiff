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
            "altText": "flexMessageです",
            "contents": {
                "type": "bubble",
                "body": {
                    "type": "image",
                    "url": "https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/488939/b9b1f3c9-b8bc-eaa4-5d75-4868ee3f1fbd.png",
                    "animated": true
              }
            }
        },
    ]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Error sending message: ' + error.message);
    });
}