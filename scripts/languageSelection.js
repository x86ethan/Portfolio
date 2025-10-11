function showSelectionBox() {

    
    const selectionBox = document.getElementsByClassName("language-choices")[0];
    
    console.log(selectionBox.style.display);

    if (selectionBox.style.display != "flex") {
        selectionBox.style.display = "flex";
    } else {
        selectionBox.style.display = "none";
    }


}