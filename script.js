// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

    const editBack = document.getElementById("editBack");
    editBack.style.display = "none";

    const editSuit = document.getElementById("editSuit");
    editSuit.style.display = "none";

    const editFont = document.getElementById("editFont");
    editFont.style.display = "none";

    const editPic = document.getElementById("editPic");
    editPic.style.display = "none";

    const toggleBackBtn = document.getElementById("editBackBtn");
    const toggleSuitBtn = document.getElementById("editSuitBtn");
    const toggleFontBtn = document.getElementById("editFontBtn");
    const togglePicBtn = document.getElementById("editPicBtn");

    const sectionBackside = document.getElementById("card-backside");

    const cardFrontBtn = document.getElementById("card-front");
    const cardBackBtn = document.getElementById("card-back");

    const previewTab = document.getElementById("preview");
    let cardSide = cardFrontBtn;
    let cardNotSide = cardBackBtn;

    const cardImage = document.getElementById("card-image");
    cardImage.src = "images/CardPreset1.2.svg";

    toggleBackBtn.addEventListener('click', function() {
        if (editBack.style.display === "none") {
            // close
            editBack.style.display = "block";
            toggleBackBtn.textContent = "Hide";
        } else {
            // open
            editBack.style.display = "none";
            toggleBackBtn.textContent = "Edit";
        }
    });

    toggleSuitBtn.addEventListener('click', function() {
        if (editSuit.style.display === "none") {
            // close
            editSuit.style.display = "block";
            toggleSuitBtn.textContent = "Hide";
        } else {
            // open
            editSuit.style.display = "none";
            toggleSuitBtn.textContent = "Edit";
        }
    });

    toggleFontBtn.addEventListener('click', function() {
        if (editFont.style.display === "none") {
            // close
            editFont.style.display = "block";
            toggleFontBtn.textContent = "Hide";
        } else {
            // open
            editFont.style.display = "none";
            toggleFontBtn.textContent = "Edit";
        }
    });

    togglePicBtn.addEventListener('click', function() {
        if (editPic.style.display === "none") {
            // close
            editPic.style.display = "block";
            togglePicBtn.textContent = "Hide";
        } else {
            // open
            editPic.style.display = "none";
            togglePicBtn.textContent = "Edit";
        }
    });

    sectionBackside.addEventListener('mouseover', function() { 

            



    });

    cardFrontBtn.addEventListener('click', function() {
        cardFrontBtn.style.display = 'none';
        cardBackBtn.style.display = 'block';

        cardSide = cardBackBtn;
        cardNotSide = cardFrontBtn;

        cardImage.src = "images/CardFrontPlaceholder.svg";

    });
    cardBackBtn.addEventListener('click', function() {
        cardBackBtn.style.display = 'none';
        cardFrontBtn.style.display = 'block';

        cardSide = cardFrontBtn;
        cardNotSide = cardBackBtn;

        cardImage.src = "images/CardPreset1.2.svg";

    });

    previewTab.addEventListener('mouseover', function() { 
        cardSide.style.opacity = '1';
        cardSide.style.display = 'block';
        


    });
    previewTab.addEventListener('mouseleave', function() { 
        cardSide.style.opacity = '0';
        cardSide.style.display = 'none';
        

    });
});
