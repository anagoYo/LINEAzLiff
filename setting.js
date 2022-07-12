const sticker_size = document.getElementById("sticker_size");
const sticker_backgroundColor = document.getElementById("sticker_backgroundColor");
const sticker_animated = document.getElementById("sticker_animated");

const saveButton = document.getElementById("saveButton");
const resetButton = document.getElementById("resetButton");

function bool(data) {
    return String(data).toLowerCase() === "true";
}

let data;
data = localStorage.getItem("sticker_size");
sticker_size.options[(data == null ? 0 : parseInt(data))].selected = true;
data = localStorage.getItem("sticker_backgroundColor");
sticker_backgroundColor.value = (data == null ? "#FFFFFF" : data);
data = localStorage.getItem("sticker_animated");
sticker_animated.checked = (data == null ? false : bool(data));

saveButton.addEventListener("click", function(event){
    localStorage.setItem("sticker_size", sticker_size.selectedIndex)
    localStorage.setItem("sticker_backgroundColor", sticker_backgroundColor.value)
    localStorage.setItem("sticker_animated", sticker_animated.checked)
});

resetButton.addEventListener("click", function(event){
    localStorage.clear()
    location.reload()
});
