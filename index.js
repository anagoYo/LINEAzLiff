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
            type: 'text',
            text: 'Hello, World!',
        },
    ])
}