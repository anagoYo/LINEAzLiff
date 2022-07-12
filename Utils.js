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
    let xhr;
    try{
        xhr = new XMLHttpRequest();
        xhr.open("HEAD", _url, false);
        xhr.send(null);
    } catch (error) {
        return true;
    }
    if(xhr == null){
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
