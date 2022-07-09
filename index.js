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

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function share(type, packageId, stickerId){
    if(type == null){
        type = getParam("type")
        if(type == null){
            type = "static"   
        }
    }
    if(packageId == null){
        packageId = getParam("packageId")
        if(packageId == null){
            return;
        }
    }
    if(stickerId == null){
        stickerId = getParam("stickerId")
        if(stickerId == null){
            return;
        }
    }
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
            "altText": "Azarasi Big Sticker",
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

function select(){
    console.log("select")
    var packageId = window.prompt("パッケージIDを入力してください", "");
    console.log(packageId)
    fetch("https://stickershop.line-scdn.net/products/0/0/1/"+packageId+"/android/productInfo.meta").then((response) => {
        return response.json()
    })
    .then((result) => {
        console.log(result)
        for (var sticker in result["stickers"]){
            sticker = result["stickers"][sticker]
            console.log(sticker)
            var stickerId = sticker["id"]
            const img = document.createElement("img")
            img.id = stickerId
            img.src = "https://stickershop.line-scdn.net/products/0/0/1/"+packageId+"/android/stickers/"+stickerId+".png"

            img.onclick = function() {
                share(null, packageId, img.id)
            };
            document.getElementById("stickers").appendChild(img)
        }
    })
    .catch((error) => {
        alert(error)
    });
}
