var imgNumList;
var imgOrder = 0;

chrome.storage.sync.get(["keyImgNumList"], function (items) {
    imgNumList = items.keyImgNumList;
    if (imgNumList === undefined) {
        imgNumList = [];
    } else {
        initialImageSet();
    }
});

function initialImageSet() {
    for (let i = 0; i < imgNumList.length; i++) {
        imgOrder = i + 1;
        const imgUrl = 'url(image/e' + imgNumList[i] + '.gif)';
        const imgId = '#selected-img' + imgOrder;
        $(imgId).css('background-image', imgUrl);
    }
}

function imageButtonClick(imgNum) {
    imgNumList.push(imgNum);
    imgOrder += 1;
    $(function () {
        const imgUrl = 'url(image/e' + imgNum + '.gif)';
        const imgId = '#selected-img' + imgOrder;
        $(imgId).css('background-image', imgUrl);
    });
}

function buttonClear() {
    imgNumList.pop();
    if (imgOrder < 1) {
        return;
    }
    imgOrder -= 1;
    $(function () {
        const imgId = '#selected-img' + (imgOrder + 1);
        $(imgId).css('background-image', 'none');
    });
}
function buttonDecide() {
    chrome.storage.sync.set(
        {
            "keyImgNumList": imgNumList,
        }
    );
    console.log(imgNumList);
    alert('保存が完了しました。');
}

function clickHandlerSelectImage(e) {
    imageButtonClick(this.imgNum);
}
function clickHandlerClear(e) {
    buttonClear();
}
function clickHandlerDecide(e) {
    buttonDecide();
}

document.addEventListener('DOMContentLoaded', function () {
    const target = document.getElementsByClassName('input_imgdiv_class');
    for (let i = 0; i < 25; i++) {
        const targetId = target[i].id;
        const imgNum_ = targetId.slice(6);
        document.getElementById(targetId).addEventListener('click', { imgNum: imgNum_, handleEvent: clickHandlerSelectImage });
    }
    document.getElementById('btnClear').addEventListener('click', clickHandlerClear);
    document.getElementById('btnDecide').addEventListener('click', clickHandlerDecide);
});