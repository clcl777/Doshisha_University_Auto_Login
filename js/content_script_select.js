window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 50);
    const buttonClassName = "form-element form-button";
    function jsLoaded() {
        if (document.getElementsByClassName(buttonClassName).length == 3) {
            clearInterval(jsInitCheckTimer);
            document.getElementsByClassName(buttonClassName)[0].click();
            // console.log("Hello, world!")
        };
    }
}