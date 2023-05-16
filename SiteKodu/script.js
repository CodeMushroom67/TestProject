window.addEventListener("scroll", (event) => {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 250) {
        document.getElementById("mask1").style.left = "-190px";

    } else {
        document.getElementById("mask1").style.left = "-590px";
    }
    if (document.body.scrollTop > 250) {
        document.getElementById("mask2").style.right = "-99.9vw";

    } else {
        document.getElementById("mask2").style.right = "-170vw";
    }
    if (document.body.scrollTop > 250) {
        document.getElementById("mask3").style.left = "-190px";

    } else {
        document.getElementById("mask3").style.left = "-590px";
    }
    if (document.body.scrollTop > 250) {
        document.getElementById("TheTitle").style.opacity = 1;

    } else {
        document.getElementById("TheTitle").style.opacity = 0;
    }
})