const STICKERSHOP_ENDPOINT = "https://stickershop.line-scdn.net/products/0/0/1/"

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
    };

    jsonData["contents"]["hero"]["size"] = getSizeString(getLocalInt("sticker_size", 0));
    jsonData["contents"]["hero"]["backgroundColor"] = getLocalString("sticker_backgroundColor", "#FFFFFF");
    jsonData["contents"]["hero"]["animated"] = getLocalBool("sticker_animated", false);

    jsonData["contents"]["hero"]["url"] = STICKERSHOP_ENDPOINT+packageId+"/android/"+(jsonData["contents"]["hero"]["animated"] ? "animation" : "stickers")+"/"+stickerId+".png";
    if(jsonData["contents"]["hero"]["animated"] && is404(jsonData["contents"]["hero"]["url"])){
        jsonData["contents"]["hero"]["url"] = STICKERSHOP_ENDPOINT+packageId+"/android/stickers/"+stickerId+".png";
    }

    share(jsonData);
}

function addSticker(packageId, stickerId){
    const img = document.createElement("img");
    img.id = stickerId;
    img.src = STICKERSHOP_ENDPOINT+packageId+"/android/stickers/"+stickerId+".png";
    img.onclick = function(e) {
        sendSticker(packageId, e.target.id);
    }
    document.getElementById("stickers").appendChild(img);
}

function input_dialog(){
    const packageId = window.prompt("パッケージIDを入力してください。", "");
    if(packageId.length < 2){
        return;
    }
    fetch(STICKERSHOP_ENDPOINT+packageId+"/android/productInfo.meta").then((response) => {
        return response.json();
    })
    .then((result) => {
        for (let sticker in result["stickers"]){
                        
            const stickerId = result["stickers"][sticker]["id"];

            addSticker(packageId, stickerId);
        }
    })
    .catch((error) => {
        alert(error);
    });
}

window.onload = function (e) {
    liff.init({
        liffId: "1657284809-ew3YylaE"
    }).then(() => {
        if(!liff.isLoggedIn()){
            liff.login();
        }
    });
};
