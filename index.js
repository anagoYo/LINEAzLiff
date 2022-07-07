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
                  "type": "image",
                  "url": "https://www.silhouette-illust.com/wp-content/uploads/2017/08/icon_movie_36335-300x300.jpg"
                },
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text": "Text in the box"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [],
                  "width": "30px",
                  "height": "30px",
                  "background": {
                    "type": "linearGradient",
                    "angle": "90deg",
                    "startColor": "#FFFF00",
                    "endColor": "#0080ff"
                  }
                }
              ],
              "height": "400px",
              "justifyContent": "space-evenly",
              "alignItems": "center"
            }
          }
          ,
    ]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Error sending message: ' + error.message);
    });
}