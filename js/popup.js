chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => {
    const url = tabs[0].url // ←これ
    // alert(url)
    console.log(url)
})
document.getElementById("btn").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: onRun,
    });
});

function onRun() {
    document.body.style.backgroundColor = "#fcc";
    document.getElementById("button0").click();
}