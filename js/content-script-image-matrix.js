window.addEventListener("load", main, false);
var imgNumList;
chrome.storage.sync.get(["keyImgNumList"], function (items) {
    imgNumList = items.keyImgNumList;
});

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 50);
    function jsLoaded() {
        if (document.getElementById("button0") != null) {
            clearInterval(jsInitCheckTimer);
            console.log(imgNumList);
            if (imgNumList === undefined) {
                return;
            }
            for (let i = 0; i < imgNumList.length; i++) {
                imgNum = imgNumList[i];
                buttonID = getButtonID(imgNum);
                document.getElementById(buttonID).click();
            }
            document.getElementById("btnLogin").click();
        };
    }
}

function getImgNumList() {
    var imgNumList;
    chrome.storage.sync.get(["keyImgNumList"], function (items) {
        imgNumList = items.keyImgNumList;
    });
    return imgNumList;
}

function getButtonID(ImageID) {
    var imageNameList = [""];
    buttonElements = document.getElementsByClassName("input_imgdiv_class")
    for (let i = 0; i < 25; i++) {
        ImageURL = buttonElements[i].style.backgroundImage
        if (ImageURL == `url(\"/idp/tenant/0/images/imatrix/e` + String(ImageID) + `.gif\")`) {
            return buttonElements[i].id
        }
    }
}