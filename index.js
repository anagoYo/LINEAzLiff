function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

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

function share(){
    const type = getParam("type")
    const packageId = getParam("packageId")
    const stickerId = getParam("stickerId")
    var url = "";
    var animated = false
    if(type == "static"){
        url = "https://stickershop.line-scdn.net/products/0/0/1/"+packageId+"/android/stickers/"+stickerId+".png"
    }else if(type == "animation"){
        animated = true;
        url = "https://stickershop.line-scdn.net/products/0/0/1/"+packageId+"/android/animation/"+stickerId+".png"
    }else{
        url = "https://stickershop.line-scdn.net/products/0/0/1/"+packageId+"/android/stickers/"+stickerId+".png"
    }
    liff.shareTargetPicker([
        {
            "type": "flex",
            "altText": "AzSticker",
            "contents": {
              "type": "bubble",
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "image",
                        "url": url,
                        "size": "full",
                        "animated": animated
                    }
                    ]
                }
            }
        },
    ]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        alert("Failed to launch ShareTargetPicker　: "+ error.message)
    });
}
