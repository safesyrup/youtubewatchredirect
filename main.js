window.browser = window.browser || window.chrome;

console.log("loaded main")

function gotValue(item) {
    console.log("got value:")
    return item.youtubeRedirectInstanceHostname
}

function onError(error) {
    console.log(error)
}

function setValue() {
    console.log("set value")
}

browser.webRequest.onBeforeRequest.addListener(
    async (details) => {
        console.log("browser sent request")
        const url = new URL(details.url);
        if (url.hostname.endsWith("youtube.com") && url.pathname.includes("/watch")) {
            console.log("request is watch vieo")
            replacehostname = await browser.storage.local.get("youtubeRedirectInstanceHostname").then(gotValue, onError);
            if (replacehostname == undefined) {
                replacehostname = "piped.video"
            }
            return { redirectUrl: "https://" + replacehostname + url.pathname + url.search + "" }
        }
    },
    {
        urls: ["<all_urls>"],
    },
    ["blocking"],
);