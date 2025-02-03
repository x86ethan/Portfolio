function changeHeadline (index) {

    const headlines = document.getElementsByClassName("header-headline");

    for (var i = 0; i < headlines.length; i++) {
        headlines[i].style.transform = "translateY(-" + index * 100 + "%)";
    }

    headlines[index].classList.toggle("header-headline-active");
    if (index == 0) {
        headlines[headlines.length - 1].classList.toggle("header-headline-active");
    } else {
        headlines[index - 1].classList.toggle("header-headline-active");
    }

}

function calculateLength(headlines) {
    return headlines.length;
}

async function alwaysChangeHeadline () {

    const headlines = document.getElementsByClassName("header-headline");
    var length = calculateLength(headlines);    

    var index = 0;

    while (true) {

        changeHeadline(index);
        length = calculateLength(headlines);
        index = (index + 1) % length;
        await new Promise(r => setTimeout(r, 2500));
    }

}

alwaysChangeHeadline();