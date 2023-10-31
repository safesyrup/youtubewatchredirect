document.getElementById("submit").addEventListener('click', submit);
document.getElementById('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submit();
    }
});

initialize()

function setValue() {
    console.log("set value")
}

function gotValue(item) {
    document.getElementById("input").value = item.youtubeRedirectInstanceHostname
    console.log("got value")
}

function onError(error) {
    console.log(error)
}

function submit() {
    inputvalue = document.getElementById("input").value
    browser.storage.local.set({"youtubeRedirectInstanceHostname" : inputvalue}).then(setValue, onError);
    window.close()
}


function initialize() {
    redirecthostname = browser.storage.local.get("youtubeRedirectInstanceHostname").then(gotValue, onError);
}    