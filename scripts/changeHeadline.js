function changeHeadline (index) {

    const headlines = document.getElementsByClassName("header-headline");

    for (var i = 0; i < headlines.length; i++) {
        headlines[i].style.transform = "translateY(-" + index * 100 + "%)";
    }

}

async function alwaysChangeHeadline () {

    const headlines = document.getElementsByClassName("header-headline");
    const length = headlines.length;

    var index = 0;

    while (true) {
        changeHeadline(index);
        index = (index + 1) % length;
        await new Promise(r => setTimeout(r, 2500));
    }

}

alwaysChangeHeadline();