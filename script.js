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

    const previewTab = document.getElementById("preview-container");
    let cardSideBtn = cardFrontBtn;
    let cardNotSide = cardBackBtn;

    const card = document.getElementById("card");
    const cardHeight = card.offsetHeight / 2;

    const cardImageBack = document.getElementById("card-image-back");
    const cardImageFront = document.getElementById("card-image");

    let cardBackPreset = "images/CardPreset1.2.svg";
    cardImageBack.src = cardBackPreset;

    const presetButtons = document.querySelectorAll('.preset-option');

    const preset1Btn = presetButtons[0];
    const preset2Btn = presetButtons[1];
    const preset3Btn = presetButtons[2];

    //Back designer
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

    

    //Suit Designer
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

    function switchToFront() {
        cardFrontBtn.style.display = 'none';
        cardBackBtn.style.display = 'block';

        cardSideBtn = cardBackBtn;
        cardNotSide = cardFrontBtn;


        cardImageFront.src = "images/CardFrontPlaceholder.svg";
        cardImageFront.style.zIndex = '101';
        cardImageFront.style.visibility = 'visible';
        cardImageBack.style.zIndex = '100';
        cardImageBack.style.visibility = 'hidden';
    }
    // Flip card and switch button on click
    cardFrontBtn.addEventListener('click', function() {
        switchToFront();
    });

    
    function switchToBack() {
        cardBackBtn.style.display = 'none';
        cardFrontBtn.style.display = 'block';

        cardSideBtn = cardFrontBtn;
        cardNotSide = cardBackBtn;

        cardImageBack.src = cardBackPreset;
        cardImageFront.style.zIndex = '100';
        cardImageFront.style.visibility = 'hidden';
        cardImageBack.style.zIndex = '101';
        cardImageBack.style.visibility = 'visible';
    }
    cardBackBtn.addEventListener('click', function() {
        switchToBack();
    });
    
    // Show or hide flip button
    previewTab.addEventListener('mouseover', function() { 
        cardSideBtn.style.opacity = '1';
        cardSideBtn.style.display = 'block';

    });
    function hideFlipBtn() {
        cardSideBtn.style.opacity = '0';
        cardSideBtn.style.display = 'none';
    }
    previewTab.addEventListener('mouseleave', function() { 
        hideFlipBtn();
    });



    preset1Btn.addEventListener('click', function() {
        cardBackPreset = "images/CardPreset1.2.svg";
        switchToBack();
        hideFlipBtn();
    });
    preset2Btn.addEventListener('click', function() {
        cardBackPreset = "images/CardPreset2.svg";
        switchToBack();
        hideFlipBtn();
    });
    preset3Btn.addEventListener('click', function() {
        cardBackPreset = "images/CardPreset3.svg";
        switchToBack();
        hideFlipBtn();
    });
    

    // cardSide button to follow mouse
    card.addEventListener("mouseenter", function() {
        card.addEventListener("mousemove", moveCardSideBtn);
    });
    
    card.addEventListener("mouseleave", function() {
        card.removeEventListener("mousemove", moveCardSideBtn);
        cardSideBtn.style.top = '160px'; // Reset on exit
        
    });
    
    function moveCardSideBtn(event) {
        // Get the mouse's Y position relative to the card
        const cardRect = card.getBoundingClientRect();
        const mouseY = event.clientY - cardRect.top; // Y relative to the card
        const cardSideHeight = cardSideBtn.offsetHeight / 2; // Half height of cardSide
        // Update the cardSide element's Y position
        cardSideBtn.style.top = `${mouseY - cardSideHeight}px`;
    }
});
