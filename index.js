window.onload = function (e) {
    liff.init({
        liffId: '1657284809-ew3YylaE'
    }).then(() => {
        if(liff.isLoggedIn()){
            liff.getProfile()
        }else{
            liff.login()
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
    var size = getParam("size")
    if(size == null){
        size = "full"
    }
    if(size == "1"){
        size = "xl"
    }
    if(size == "2"){
        size = "xxl"
    }
    if(size == "3"){
        size = "3xl"
    }
    if(size == "4"){
        size = "4xl"
    }
    if(size == "5"){
        size = "5xl"
    }
    if(size == "6"){
        size = "full"
    }
    var backgroundColor = getParam("backgroundColor")
    if (backgroundColor == null){
        backgroundColor = "FFFFFFFF"
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
              "hero": {
                    "type": "image",
                    "url": url,
                    "size": size,
                    "animated": animated,
                    "backgroundColor": "#"+backgroundColor,
                    "action": {
                        "type": "uri",
                        "uri": "https://line.me/R/shop/sticker/detail/"+packageId,
                        "label": "shop"
                    }
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
    var packageId = window.prompt("パッケージIDを入力してください。", "");
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

function sendMessage(){
    var message = getParam("message")
    if(message == null){
        message = window.prompt("メッセージを入力してください。", "");
        if(message == null){
            return;
        }
    }
    var size = getParam("size")
    if(size == null){
        size = "xl"
    }
    if(size == "1"){
        size = "xl"
    }
    if(size == "2"){
        size = "xxl"
    }
    if(size == "3"){
        size = "3xl"
    }
    if(size == "4"){
        size = "4xl"
    }
    if(size == "5"){
        size = "5xl"
    }
    var textColor = getParam("textColor")
    if(textColor == null){
        textColor = "000000FF"
    }
    var backgroundColor = getParam("backgroundColor")
    if(backgroundColor == null){
        backgroundColor = "C3F69D"
    }
    liff.shareTargetPicker([
        {
            "type": "flex",
            "altText": "Azarasi Custom Message",
            "contents": {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "baseline",
                    "backgroundColor": "#"+backgroundColor,
                    "contents": [
                        {
                            "type": "text",
                            "text": message,
                            "size": size,
                            "color": "#"+textColor,
                            "margin": "xxl",
                            "weight": "bold",    
                            "wrap": true
                        }
                    ],
                    "paddingAll": "xxl"
                }
            }
        },
    ]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        alert("Failed to launch ShareTargetPicker : "+ error.message)
    });
}
