const sticker_size = document.getElementById("sticker_size")
const sticker_backgroundColor = document.getElementById("sticker_backgroundColor")
const sticker_animated = document.getElementById("sticker_animated")

const text_size = document.getElementById("text_size")
const text_textColor = document.getElementById("text_textColor")
const text_backgroundColor = document.getElementById("text_backgroundColor")
const text_bold = document.getElementById("text_bold")
const text_italic = document.getElementById("text_italic")
const text_decoration = document.getElementById("text_decoration")
const text_align = document.getElementById("text_align")

const saveButton = document.getElementById("saveButton")
const resetButton = document.getElementById("resetButton")

function bool(data) {
    return String(data).toLowerCase() === "true";
}

var data;
data = localStorage.getItem("sticker_size")
sticker_size.options[(data == null ? 0 : parseInt(data))].selected = true;
data = localStorage.getItem("sticker_backgroundColor")
sticker_backgroundColor.value = (data == null ? "#FFFFFF" : data)
data = localStorage.getItem("sticker_animated")
sticker_animated.checked = (data == null ? false : bool(data))

data = localStorage.getItem("text_size")
text_size.options[(data == null ? 0 : parseInt(data))].selected = true;
data = localStorage.getItem("text_textColor")
text_textColor.value = (data == null ? "#000000" : data)
data = localStorage.getItem("text_backgroundColor")
text_backgroundColor.value = (data == null ? "#FFFFFF" : data)
data = localStorage.getItem("text_bold")
text_bold.checked = (data == null ? false : bool(data))
data = localStorage.getItem("text_italic")
text_italic.checked = (data == null ? false : bool(data))
data = localStorage.getItem("text_decoration")
text_decoration.options[(data == null ? 0 : parseInt(data))].selected = true;
data = localStorage.getItem("text_align")
text_align.options[(data == null ? 0 : parseInt(data))].selected = true;

saveButton.addEventListener("click", function(event){
    localStorage.setItem("sticker_size", sticker_size.selectedIndex)
    localStorage.setItem("sticker_backgroundColor", sticker_backgroundColor.value)
    localStorage.setItem("sticker_animated", sticker_animated.checked)

    localStorage.setItem("text_size", text_size.selectedIndex)
    localStorage.setItem("text_textColor", text_textColor.value)
    localStorage.setItem("text_backgroundColor", text_backgroundColor.value)
    localStorage.setItem("text_bold", text_bold.checked)
    localStorage.setItem("text_italic", text_italic.checked)
    localStorage.setItem("text_decoration", text_decoration.selectedIndex)
    localStorage.setItem("text_align", text_align.selectedIndex)
})

resetButton.addEventListener("click", function(event){
    localStorage.clear()
    location.reload()
})
