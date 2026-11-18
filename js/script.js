function upDate(previewPic) {
    console.log("upDate triggered");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    const box = document.querySelector("#image");
    box.textContent = previewPic.alt;
    box.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("unDo triggered");
    const box = document.querySelector("#image");
    box.style.backgroundImage = "url('')";
    box.textContent = "Hover over or focus on an image below to display here.";
}

function addTabFocus() {
    console.log("addTabFocus triggered (onload works)");   // step 9a

    const images = document.querySelectorAll(".preview");  // 9b
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");            // 9c
    }
}