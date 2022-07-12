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

function bool(data) {
    return String(data).toLowerCase() === "true";
}

function getLocalInt(_key, _default){
    const item = localStorage.getItem(_key);
    if(item){
        return parseInt(item);
    }
    return parseInt(_default)
}

function getLocalBool(_key, _default){
    const item = localStorage.getItem(_key);
    if(item){
        return bool(item);
    }
    return bool(_default)
}

function getLocalString(_key, _default){
    const item = localStorage.getItem(_key);
    if(item){
        return item;
    }
    return _default
}

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function is404(_url){
    try{
        let xhr;
        xhr = new XMLHttpRequest();
        xhr.open("HEAD", _url, false);
        xhr.send(null);
    } catch (error) {
        return true;
    }
    return xhr.status == 404;
}

function getSizeString(sizeNum){
    if(String(sizeNum) == "0"){
        return "xxs"
    }
    if(String(sizeNum) == "1"){
        return "xs"
    }
    if(String(sizeNum) == "2"){
        return "sm"
    }
    if(String(sizeNum) == "3"){
        return "md"
    }
    if(String(sizeNum) == "4"){
        return "lg"
    }
    if(String(sizeNum) == "5"){
        return "xl"
    }
    if(String(sizeNum) == "6"){
        return "xxl"
    }
    if(String(sizeNum) == "7"){
        return "3xl"
    }
    if(String(sizeNum) == "8"){
        return "4xl"
    }
    if(String(sizeNum) == "9"){
        return "5xl"
    }
    if(String(sizeNum) == "10"){
        return "full"
    }
}

function share(json){
    liff.shareTargetPicker([
        json
    ]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        alert("Failed to launch ShareTargetPicker:"+ error.message)
    });
}

function sendSticker(packageId, stickerId){
    let jsonData = {
        "type": "flex",
        "altText": "Azarasi Big Sticker",
        "contents": {
          "type": "bubble",
          "hero": {
                "type": "image",
                "action": {
                    "type": "uri",
                    "uri": "https://line.me/R/shop/sticker/detail/"+packageId,
                    "label": "shop"
                }
            }
        }
    }

    jsonData["contents"]["hero"]["size"] = getSizeString(getLocalInt("sticker_size", 0));
    jsonData["contents"]["hero"]["backgroundColor"] = getLocalString("sticker_backgroundColor", "#FFFFFF");
    jsonData["contents"]["hero"]["animated"] = getLocalBool("sticker_animated", false);

    jsonData["contents"]["hero"]["url"] = "https://stickershop.line-scdn.net/products/0/0/1/"+packageId+"/android/"+(jsonData["contents"]["hero"]["animated"] ? "animation" : "stickers")+"/"+stickerId+".png";
    if(jsonData["contents"]["hero"]["animated"] && is404(jsonData["contents"]["hero"]["url"])){
        jsonData["contents"]["hero"]["url"] = "https://stickershop.line-scdn.net/products/0/0/1/"+packageId+"/android/stickers/"+stickerId+".png";
    }

    share(jsonData);
}

function select(){
    let packageId = window.prompt("パッケージIDを入力してください。", "");
    if(packageId.length < 2){
        return;
    }
    fetch("https://stickershop.line-scdn.net/products/0/0/1/"+packageId+"/android/productInfo.meta").then((response) => {
        return response.json()
    })
    .then((result) => {
        for (let sticker in result["stickers"]){
                        
            let stickerId = result["stickers"][sticker]["id"];
            const img = document.createElement("img");
            img.id = stickerId;
            img.src = "https://stickershop.line-scdn.net/products/0/0/1/"+packageId+"/android/stickers/"+stickerId+".png";

            document.getElementById("stickers").appendChild(img);

            img.onclick = function() {
                sendSticker(packageId, img.id);
            }
        }
    })
    .catch((error) => {
        alert(error);
    });
}
