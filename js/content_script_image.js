window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 50);
    function jsLoaded() {
        if (document.getElementById("button0") != null) {
            clearInterval(jsInitCheckTimer);
            // document.getElementById("button0").click();
            // console.log(getButtonID(17));
            // 同志社マーク三つ
            ID1 = getButtonID(17)
            document.getElementById(ID1).click();
            ID2 = getButtonID(17)
            document.getElementById(ID2).click();
            ID3 = getButtonID(17)
            document.getElementById(ID3).click();
            document.getElementById("btnLogin").click();
        };
    }
}

function getButtonID(ImageID) {
    // 引数ImageID
    // e17が同志社マーク
    var imageNameList = [""];
    buttonElements = document.getElementsByClassName("input_imgdiv_class")
    for (let i = 0; i < 25; i++) {
        // console.log(buttonElements[i].style.backgroundImage)
        ImageURL = buttonElements[i].style.backgroundImage
        if (ImageURL == `url(\"/idp/tenant/0/images/imatrix/e` + String(ImageID) + `.gif\")`) {
            return buttonElements[i].id
        }
        // console.log(typeof buttonElements[i].style.backgroundImage)

    }
}