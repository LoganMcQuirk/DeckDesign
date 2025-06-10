// Wait for DOM load
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
    const flipperBtn = document.getElementById("flipper");

    const previewTab = document.getElementById("preview-container");
    let cardSideBtn = cardFrontBtn;
    let cardNotSide = cardBackBtn;
    let cardIsOnBack = true;

    const card = document.getElementById("card");
    const cardHeight = card.offsetHeight / 2;

    const diamondUpload = document.getElementById("diamond-icon");
    const heartUpload = document.getElementById("heart-icon");
    const clubUpload = document.getElementById("club-icon");
    const spadeUpload = document.getElementById("spade-icon");
    const allIcons = document.querySelectorAll('.icon');


    const iconSizeControl = document.getElementById('SuitIconSizer');
    const iconSizerDisplay = document.getElementById('icon-sizer-display');
// SUIT CHANGING BUTTONS -----------------------------------------------------------------------v
    const diamondBtn = document.getElementById("diamondBtn");
    const heartBtn = document.getElementById("heartBtn");
    const clubBtn = document.getElementById("clubBtn");
    const spadeBtn = document.getElementById("spadeBtn");
    
    let currentSuit = "diamond";
    
    const borderColourer = document.getElementById("color-select");
    const transparencyBG = document.getElementById("transparency-bg");
    let borderColourValue = "white";

    const cardIdentP = document.getElementById("cardIdent");

    
    document.getElementById("diamondBtn").addEventListener('click', function() {
        changeSuitDiamonds();
        switchToFront();
       
    });
    document.getElementById("heartBtn").addEventListener('click', function() {
        changeSuitHearts();
        switchToFront();
    });
    document.getElementById("clubBtn").addEventListener('click', function() {
        changeSuitClubs(); 
        switchToFront();
    });
    document.getElementById("spadeBtn").addEventListener('click', function() {
        changeSuitSpades();
        switchToFront();
    }); 
    //-------------------------------------------------------------------------------------------^
    const cardImageBack = document.getElementById("card-image-back");
    const cardImageFront = document.getElementById("front-layout");
    cardImageFront.classList.add('red-suit-color');
    

    const cardIMGStyle = cardImageBack;
    function CoverModeON() {
        cardIMGStyle.style.objectFit = 'cover';
    }
    function CoverModeOFF() {
        cardIMGStyle.style.objectFit = 'fill';
    }

    let cardBackCurrentImage = "images/CardPresetOne.png";
    cardImageBack.src = cardBackCurrentImage;

    const presetButtons = document.querySelectorAll('.preset-option');

    const preset1Btn = presetButtons[0];
    const preset2Btn = presetButtons[1];
    const preset3Btn = presetButtons[2];

    const backsideUpload = document.getElementById("backside-upload");
    const applyBackImage = document.getElementById("apply-back-image");
    
    const borderControl = document.getElementById('border-control');
    const cardBorderDiv = document.getElementById("card-border");

    const tallyLayout = document.getElementById("tally-layout");
    const tallyImage = document.querySelector("#tally-layout img");
    const tallyImageStyle = tallyImage.style;
    const AceIcon = document.getElementById("center-icon");
    
    const pictureCardLayout = document.getElementById("pictureCardLayout");
    pictureCardLayout.style.display = 'none';

    
    

//Back designer TOGGLE VIEW
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

//Suit Designer -----------------------------------------------------------------------------------------------------------------------
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

// Card flipping and switching view functions -----------------------------------------------------------------------------------------   
   // NEED TO ADD ANIMATION TO FLIP FOR SATISFYING 3D EFFECT

function switchToFront() {
        cardSideBtn = cardBackBtn;
        cardNotSide = cardFrontBtn;

        // cardFrontBtn.style.display = 'none';
        // cardBackBtn.style.display = 'block';

        cardBorderDiv.style.display = 'none';

        // cardImageFront.src = "images/CardFrontPlaceholder.svg";
        cardImageFront.style.zIndex = '101';
        cardImageFront.style.visibility = 'visible';
        cardImageBack.style.zIndex = '100';
        cardImageBack.style.visibility = 'hidden';

        cardIsOnBack = false;
       // AceIcon.style.top = iconSizeControl.value * -0.5 + 202 + 'px';
       tallyLayout.style.display = 'flex';
    }
    // Flip card and switch button on click
    cardFrontBtn.addEventListener('click', function() {
        switchToFront();
    });

    flipperBtn.addEventListener('click', function() {
            if (cardIsOnBack) {
                switchToFront();
            } else {
                switchToBack();
            }
    });

    
    function switchToBack() {
        cardSideBtn = cardFrontBtn;
        cardNotSide = cardBackBtn;

        // cardBackBtn.style.display = 'none';
        // cardFrontBtn.style.display = 'block';

        cardBorderDiv.style.display = 'block';

        cardImageBack.src = cardBackCurrentImage;
        cardImageFront.style.zIndex = '100';
        cardImageFront.style.visibility = 'hidden';
        cardImageBack.style.zIndex = '101';
        cardImageBack.style.visibility = 'visible';

        cardIsOnBack = true;
    }
    cardFrontBtn.addEventListener('click', function() {
        switchToFront();
    });
    
    
    // Show or hide flip button
    previewTab.addEventListener('mouseover', function() { 
        // cardSideBtn.style.opacity = '1';
        // cardSideBtn.style.display = 'block';

    });
    function hideFlipBtn() {
        cardSideBtn.style.opacity = '0';
        cardSideBtn.style.display = 'none';
    }
    previewTab.addEventListener('mouseleave', function() { 
        hideFlipBtn();
    });

//Back of card customisation controls -------------------------------------------------------------------------------------------------

    preset1Btn.addEventListener('click', function() {
        cardBackCurrentImage = "images/CardPresetOne.png";
        borderColourValue = "rgb(255, 255, 255)";
        RecolourBorder();
        CoverModeOFF();
        switchToBack();
        hideFlipBtn();
        cardSideBtn.style.opacity = '0';
        cardSideBtn.style.display = 'none';
    });
    preset2Btn.addEventListener('click', function() {
        cardBackCurrentImage = "images/CardPreset2.png";
        borderColourValue =  "rgb(30, 12, 76)";
        RecolourBorder();
        CoverModeOFF();
        switchToBack();
        hideFlipBtn();
    });
    preset3Btn.addEventListener('click', function() {
        cardBackCurrentImage = "images/CardPreset3.png";
        borderColourValue = "rgb(8, 6, 5)";
        RecolourBorder();
        CoverModeOFF();
        switchToBack();
        hideFlipBtn();
        console.log(uploadedBackImage);
    });
    function CUSTOMIMAGE() {
        
        if (backsideUpload.files && backsideUpload.files[0]) {
            const file = backsideUpload.files[0];
            

            // Check if it's an image file
            if (!file.type.startsWith("image/")) {
                alert("Please upload a valid image file.");
                return;
            }

            const reader = new FileReader(); // Create a new FileReader object

            // Function to run when the file is read
            reader.onload = function(e) {
                // Set the card back image to the uploaded image
                cardBackCurrentImage = e.target.result; // e.target.result contains the image data URL
                console.log("Uploaded image set as card back", e.target.result); // Debugging output
                CoverModeON();
                switchToBack(); // Optionally, switch the preview to show the back side
                
            };

            // Read the uploaded image as a data URL
            reader.readAsDataURL(file);

        } else {
            console.error("No file was selected for upload."); // Debugging output
        }

    }
    backsideUpload.addEventListener('change', function(event) {
        // Check if a file has been uploaded
        CUSTOMIMAGE();
        CoverModeON();
        hideFlipBtn();

    });
    
    applyBackImage.addEventListener('click', function() {
        CUSTOMIMAGE();
        CoverModeON();
        hideFlipBtn();
        switchToBack();
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

// Control border thickness slider ----------------------------------------------------------------------------------------------------
    borderControl.addEventListener('input', function() { 
        let borderSliderValue = borderControl.value;
        let cardImageBorderRadius = borderSliderValue;
        if (borderSliderValue > 0) {
            cardImageBorderRadius = (borderSliderValue*1) + 8;
        }
        cardImageBack.style.borderWidth = borderSliderValue + 'px';
        cardImageBack.style.borderRadius = cardImageBorderRadius + 'px';
        cardBorderDiv.style.borderWidth = borderSliderValue + 'px';
        cardBorderDiv.style.borderRadius = cardImageBorderRadius + 'px';
         if (!cardIsOnBack) {
            switchToBack();
        }
    });
// Control border colour select ----------------------------------------------------------------------------------------------------
    
    borderColourer.addEventListener('input', function() { 
       
        borderColourValue = borderColourer.value;
        RecolourBorder();
        if (!cardIsOnBack) {
            switchToBack();
        }
    });
    function RecolourBorder() {
        cardImageBack.style.borderColor = borderColourValue;
        transparencyBG.style.backgroundColor = borderColourValue;
    }

// Control displayed suit class --------------------------------------------------------------------------------------------------------
    let iconNormalHeight = "64px";

    let diamondIcon = "images/DiamondIcon-1.png";
    let heartIcon = "images/HeartIcon-1.png";
    let clubIcon = "images/clubIcon-1.png";
    let spadeIcon = "images/spadeIcon-1.png";
    let currentIcon = diamondIcon;
    allIcons.src = currentIcon;

    let changeSuitUnconditally = false;

    diamondUpload.addEventListener('change', function(event) {
        // Check if a file has been uploaded
        UPLOADICONDIAMOND();
    });
    function UPLOADICONDIAMOND() {
        if (diamondUpload.files && diamondUpload.files[0]) {
            const file = diamondUpload.files[0];
        
            // Check if it's an image file
            if (!file.type.startsWith("image/")) {
                alert("Please upload a valid image file.");
                return;
            }
            const reader = new FileReader(); // Create a new FileReader object
            // Function to run when the file is read
            reader.onload = function(e) {
                // Set the card back image to the uploaded image
                diamondIcon = e.target.result; // e.target.result contains the image data URL
                console.log("Uploaded image set as Diamond", e.target.result); // Debugging output
                currentIcon = diamondIcon;
                
                changeSuitUnconditally = true;
                changeSuitDiamonds();
            
            };

            // Read the uploaded image as a data URL
            reader.readAsDataURL(file);
        } else {
            console.error("No file was selected for upload."); // Debugging output
        }
    }

    
    heartUpload.addEventListener('change', function(event) {
        // Check if a file has been uploaded
        UPLOADICONHEART();
    });
    function UPLOADICONHEART() {
        if (heartUpload.files && heartUpload.files[0]) {
            const file = heartUpload.files[0];
        
            // Check if it's an image file
            if (!file.type.startsWith("image/")) {
                alert("Please upload a valid image file.");
                return;
            }
            const reader = new FileReader(); // Create a new FileReader object
            // Function to run when the file is read
            reader.onload = function(e) {
                // Set the card back image to the uploaded image
                heartIcon = e.target.result; // e.target.result contains the image data URL
                console.log("Uploaded image set as Heart", e.target.result); // Debugging output
                currentIcon = heartIcon;
                
                changeSuitUnconditally = true;
                changeSuitHearts();
            
            };

            // Read the uploaded image as a data URL
            reader.readAsDataURL(file);
        } else {
            console.error("No file was selected for upload."); // Debugging output
        }
    }

    // CLUB UPLOAD
    clubUpload.addEventListener('change', function(event) {
        // Trigger the club upload handler
        UPLOADICONCLUB();
    });
    function UPLOADICONCLUB() {
        if (clubUpload.files && clubUpload.files[0]) {
            const file = clubUpload.files[0];
        
            
            if (!file.type.startsWith("image/")) {
                alert("Please upload a valid image file.");
                return;
            }
            const reader = new FileReader(); 
            
            
            reader.onload = function(e) {
                
                clubIcon = e.target.result; 
                console.log("Uploaded image set as Club", e.target.result); // Debugging output
                currentIcon = clubIcon;
                
                changeSuitUnconditally = true;
                changeSuitClubs();
            };
    
            
            reader.readAsDataURL(file);
        } else {
            console.error("No file was selected for upload."); 
        }
    }

    spadeUpload.addEventListener('change', function(event) {
        // Trigger the spade upload handler
        UPLOADICONSPADE();
    });
    
    // Spade upload handler
    function UPLOADICONSPADE() {
        if (spadeUpload.files && spadeUpload.files[0]) {
            const file = spadeUpload.files[0];
        
           
            if (!file.type.startsWith("image/")) {
                alert("Please upload a valid image file.");
                return;
            }
            const reader = new FileReader(); 
            
            
            reader.onload = function(e) {
                
                spadeIcon = e.target.result; 
                console.log("Uploaded image set as Spade", e.target.result); // Debugging output
                currentIcon = spadeIcon;
                
                changeSuitUnconditally = true;
                changeSuitSpades();
            };
    
            
            reader.readAsDataURL(file);
        } else {
            console.error("No file was selected for upload."); // Debugging output
        }
    }

// Change Suit conditional Functions --------------------------------------------------------------------------------------------------

    function changeSuitDiamonds() {
        resetSuitSelection();
        
        currentIcon = diamondIcon;
        if (currentSuit !== "diamond") {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = iconNormalHeight;
            currentSuit = "diamond";
            //cardImageFront.style.color = '#BC2024';
            applySuitColor();
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = iconNormalHeight;
            currentSuit = "diamond";
            //cardImageFront.style.color = '#BC2024';

            changeSuitUnconditally = false;
        }
        
        if (diamondBtn) diamondBtn.classList.add('selected');
        switchToFront();
    }
    
    function changeSuitHearts() {
        resetSuitSelection();
        currentIcon = heartIcon;
        if (currentSuit !== "heart") {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = iconNormalHeight;
            currentSuit = "heart";
            //cardImageFront.style.color = '#BC2024';
            applySuitColor();
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = iconNormalHeight;
            currentSuit = "heart";
            //cardImageFront.style.color = '#BC2024';
            
            changeSuitUnconditally = false;
        }
        
        if (heartBtn) heartBtn.classList.add('selected');
        switchToFront();
    }
 
    function changeSuitClubs() {
        resetSuitSelection();
        currentIcon = clubIcon;
        if (currentSuit !== "Club") {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = iconNormalHeight;
            currentSuit = "club";
            //cardImageFront.style.color = '#000';
            applySuitColor();
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = iconNormalHeight;
            currentSuit = "club";
            //cardImageFront.style.color = '#000';

            changeSuitUnconditally = false;
        }
        tallyImageStyle.maxHeight = iconNormalHeight;
        if (clubBtn) clubBtn.classList.add('selected');
        switchToFront();
    }
    
    function changeSuitSpades() {
        resetSuitSelection();
        currentIcon = spadeIcon;
        if (currentSuit !== "spade") {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = iconNormalHeight;
            //cardImageFront.style.color = '#000';
            applySuitColor();
            
            currentSuit = "spade";
            
            
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = '9em';
            //cardImageFront.style.color = '#000';
            currentSuit = "spade";

            changeSuitUnconditally = false;
        }
        
        if (spadeBtn) spadeBtn.classList.add('selected');
        switchToFront();
    }
    
    function resetSuitSelection() {
        // Remove 'selected' class from all suit buttons
        const suitButtons = document.querySelectorAll('.change-suit');
        suitButtons.forEach(button => {
            button.classList.remove('selected');
        });
    }

    const cornerClass = document.querySelectorAll("p.corner-class");

    
    
// Choose Card Identity AKA card number/letter ------------------------------------------------------------------------------------
    const cornerImage = document.querySelectorAll("img.corner-suit");

    const iconMiddleColumn = document.querySelector("#tally-layout div#iconColumnMiddle");
    const iconLeftColumn = document.querySelector("#tally-layout div#iconColumnLeft");   
    const iconRightColumn = document.querySelector("#tally-layout div#iconColumnRight");
    
    const tallyIcon1 = document.querySelector("#Icon-1.icon.tally-icon.icon-number");
    const tallyIconStyle1 = tallyIcon1.style;

    const tallyIcon2 = document.querySelector("#Icon-2.icon.tally-icon.icon-number");
    const tallyIconStyle2 = tallyIcon2.style;

    const tallyIcon3 = document.querySelector("#Icon-3.icon.tally-icon.icon-number");
    const tallyIconStyle3 = tallyIcon3.style;

    const tallyIcon4 = document.querySelector("#Icon-4.icon.tally-icon.icon-number");
    const tallyIconStyle4 = tallyIcon4.style;

    const tallyIcon5 = document.querySelector("#Icon-5.icon.tally-icon.icon-number");
    const tallyIconStyle5 = tallyIcon5.style;
    const tallyIcon5b = document.querySelector("#Icon-5b.icon.tally-icon.icon-number");
    const tallyIconStyle5b = tallyIcon5b.style;
    const tallyIcon6 = document.querySelector("#Icon-6.icon.tally-icon.icon-number");
    const tallyIconStyle6 = tallyIcon6.style;

    const tallyIcon7 = document.querySelector("#Icon-7.icon.tally-icon.icon-number");
    const tallyIconStyle7 = tallyIcon7.style;

    const tallyIcon8 = document.querySelector("#Icon-8.icon.tally-icon.icon-number");
    const tallyIconStyle8 = tallyIcon8.style;

    const tallyIcon9 = document.querySelector("#Icon-9.icon.tally-icon.icon-number");
    const tallyIconStyle9 = tallyIcon9.style;

    const tallyIcon10 = document.querySelector("#Icon-10.icon.tally-icon.icon-number");
    const tallyIconStyle10 = tallyIcon10.style;

    let selectedCardClass = 1;

    const classBtns = document.querySelectorAll("#number-selection button");
    const aceButton = classBtns[0];
    const twoButton = classBtns[1];
    const threeButton = classBtns[2];
    const fourButton = classBtns[3];
    const fiveButton = classBtns[4];
    const sixButton = classBtns[5];
    const sevenButton = classBtns[6];
    const eightButton = classBtns[7];
    const nineButton = classBtns[8];
    const tenButton = classBtns[9];
    const jackButton = classBtns[10];
    const queenButton = classBtns[11];
    const kingButton = classBtns[12];
    const jokerButton = classBtns[13];
    

    classBtns.forEach(button => {
        button.addEventListener('click', function() {
            // Reset all buttons to default state
            classBtns.forEach(btn => btn.classList.remove('selected'));
            // Add 'selected' class to the clicked button
            button.classList.add('selected');
        });
    });

    classBtns.forEach(button => {
        button.addEventListener('mouseenter', function() {
            switchToFront();
            checkForJoker();
            
        });
        button.addEventListener('mouseleave', function() {
            showSelectedIconLayout();
            checkForJoker();
            
        });
    });

    function showSelectedIconLayout() {
        if (classBtns[0].classList.contains('selected')) {
            IconLayout1();
        } else if (classBtns[1].classList.contains('selected')) {
            IconLayout2();
        } else if (classBtns[2].classList.contains('selected')) {
            IconLayout3();
        } else if (classBtns[3].classList.contains('selected')) {
            IconLayout4();
        } else if (classBtns[4].classList.contains('selected')) {
            IconLayout5();
        } else if (classBtns[5].classList.contains('selected')) {
            IconLayout6();
        } else if (classBtns[6].classList.contains('selected')) {
            IconLayout7();
        } else if (classBtns[7].classList.contains('selected')) {
            IconLayout8();
        } else if (classBtns[8].classList.contains('selected')) {
            IconLayout9();
        } else if (classBtns[9].classList.contains('selected')) {
            IconLayout10();
        } else if (classBtns[10].classList.contains('selected')) {
            IconLayoutPicture("J");
        } else if (classBtns[11].classList.contains('selected')) {
            IconLayoutPicture("Q");
        } else if (classBtns[12].classList.contains('selected')) {
            IconLayoutPicture("K");
        } else if (classBtns[13].classList.contains('selected')) {
            IconLayoutPicture("?");
        }
        
    }
    function checkForJoker() {
        if (selectedCardClass === "?") {
            applySuitColor();
            cornerImage.style.display = "none";
        } else {
            applySuitColor();
            cornerImage.style.display = "flex";
        }
    }

    tenButton.addEventListener('mouseenter', function() {
        IconLayout10();
        switchToFront();
        applySuitColor();
        
    });
    function IconLayout10() { 
        selectedCardClass = 10;
        cardIdentP.innerHTML = selectedCardClass;
        ApplyCenterHeightValue();

        for (let i = 1; i <= 10; i++) { //Set icon display style
        const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
        tallyIcon.style.display = "block";
        }
        tallyIconStyle5b.display = "none"; 

        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "visible";
            } 

        iconMiddleColumn.style.justifyContent = "space-around"; // Align icons correclty
        iconLeftColumn.style.justifyContent = "space-around";
        iconRightColumn.style.justifyContent = "space-around";

        cornerClass.forEach(p => { // Set the innerHTML to 10
            p.innerHTML = "10";  
        });
        AceIcon.style.display = 'none';
        pictureCardLayout.style.display = 'none';

    }
    
    nineButton.addEventListener('mouseenter', function() {
        IconLayout9();
        switchToFront();
        applySuitColor();
        
    });
    function IconLayout9() { 
        selectedCardClass = 9;
        cardIdentP.innerHTML = selectedCardClass;
        ApplyCenterHeightValue();

        for (let i = 1; i <= 10; i++) { //Set icon display style
        const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
        tallyIcon.style.display = "block";
        }
        tallyIconStyle5b.display = "block"; 

        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "visible";
            } 
        tallyIconStyle5.visibility = "hidden";
        tallyIconStyle5b.visibility = "visible";
        tallyIconStyle6.visibility = "hidden";

        iconMiddleColumn.style.justifyContent = "space-around"; // Align icons correclty
        iconLeftColumn.style.justifyContent = "space-around";
        iconRightColumn.style.justifyContent = "space-around";

        cornerClass.forEach(p => { // Set the innerHTML to 10
            p.innerHTML = "9";  
        });
        AceIcon.style.display = 'none';
        pictureCardLayout.style.display = 'none';
        
    }

    eightButton.addEventListener('mouseenter', function() {
        IconLayout8();
        switchToFront();
        applySuitColor();
        
    });
    function IconLayout8() { 
        selectedCardClass = 8;
        cardIdentP.innerHTML = selectedCardClass;
        ApplyCenterHeightValue();
        for (let i = 1; i <= 10; i++) { //Set icon display style
        const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
        tallyIcon.style.display = "block";
        }
        tallyIconStyle3.display = "none";
        tallyIconStyle9.display = "none";
        tallyIconStyle5b.display = "block";
        
        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "visible";
            } 
        tallyIconStyle5b.visibility = "hidden"; 
        
        iconMiddleColumn.style.justifyContent = "center"; // Align icons correclty
        iconLeftColumn.style.justifyContent = "space-around";
        iconRightColumn.style.justifyContent = "space-around";

        cornerClass.forEach(p => { // Set the innerHTML to 10
            p.innerHTML = "8";  
        });
        AceIcon.style.display = 'none';
        pictureCardLayout.style.display = 'none';
    }

    sevenButton.addEventListener('mouseenter', function() {
        IconLayout7();
        switchToFront();
        applySuitColor();
        
        
    });
    function IconLayout7() { 
        selectedCardClass = 7;
        cardIdentP.innerHTML = selectedCardClass;
        ApplyCenterHeightValue();

        for (let i = 1; i <= 10; i++) { //Set icon display style
        const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
        tallyIcon.style.display = "block";
        }
        tallyIconStyle3.display = "none";
        tallyIconStyle9.display = "none";
        tallyIconStyle5b.display = "block";
        

        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "visible";
            } 
        tallyIconStyle5b.visibility = "hidden";
        tallyIconStyle6.visibility = "hidden"; 
        

        iconMiddleColumn.style.justifyContent = "center"; // Align icons correclty
        iconLeftColumn.style.justifyContent = "space-around";
        iconRightColumn.style.justifyContent = "space-around";

        cornerClass.forEach(p => { // Set the innerHTML to 10
            p.innerHTML = "7";  
        });
        AceIcon.style.display = 'none';
        pictureCardLayout.style.display = 'none';
    }

    sixButton.addEventListener('mouseenter', function() {
        IconLayout6();
        switchToFront();
        applySuitColor();
        
    });
    function IconLayout6() { 
        selectedCardClass = 6;
        cardIdentP.innerHTML = selectedCardClass;
        ApplyCenterHeightValue();

        for (let i = 1; i <= 10; i++) { //Set icon display style
        const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
        tallyIcon.style.display = "block";
        }
        tallyIconStyle3.display = "none";
        tallyIconStyle9.display = "none";
        tallyIconStyle5b.display = "block";
        

        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "visible";
            }
        tallyIconStyle5.visibility = "hidden"; 
        tallyIconStyle5b.visibility = "hidden";
        tallyIconStyle6.visibility = "hidden"; 
        

        iconMiddleColumn.style.justifyContent = "center"; // Align icons correclty
        iconLeftColumn.style.justifyContent = "space-around";
        iconRightColumn.style.justifyContent = "space-around";

        cornerClass.forEach(p => { // Set the innerHTML to 10
            p.innerHTML = "6";  
        });
        AceIcon.style.display = 'none';
        pictureCardLayout.style.display = 'none';
    }

    fiveButton.addEventListener('mouseenter', function() {
        IconLayout5();
        switchToFront();
        applySuitColor();
        
    });
    function IconLayout5() { 
        selectedCardClass = 5;
        cardIdentP.innerHTML = selectedCardClass;
        ApplyCenterHeightValue();

        for (let i = 1; i <= 10; i++) { //Set icon display style
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.display = "block";
        }
        tallyIconStyle3.display = "none";
        tallyIconStyle5.display = "none";
        tallyIconStyle6.display = "none";
        tallyIconStyle9.display = "none";
        tallyIconStyle5b.display = "block";
    
        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "visible";
            }
        tallyIconStyle2.visibility = "hidden"; 
        tallyIconStyle8.visibility = "hidden"; 
        tallyIconStyle5b.visibility = "visible";
        
        iconMiddleColumn.style.justifyContent = "center"; // Align icons correclty
        iconLeftColumn.style.justifyContent = "space-around";
        iconRightColumn.style.justifyContent = "space-around";

        cornerClass.forEach(p => { // Set the innerHTML to 10
            p.innerHTML = "5";  
        });

        AceIcon.style.display = 'none';
        pictureCardLayout.style.display = 'none';
    }

    fourButton.addEventListener('mouseenter', function() {
        IconLayout4();
        switchToFront();
        applySuitColor();
        
    });
    function IconLayout4() { 
        selectedCardClass = 4;
        cardIdentP.innerHTML = selectedCardClass;
        ApplyCenterHeightValue();

        for (let i = 1; i <= 10; i++) { //Set icon display style
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.display = "block";
        }
        tallyIconStyle3.display = "none";
        tallyIconStyle5.display = "none";
        tallyIconStyle6.display = "none";
        tallyIconStyle9.display = "none";
        tallyIconStyle5b.display = "block";
    

        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "visible";
            }
        tallyIconStyle2.visibility = "hidden"; 
        tallyIconStyle8.visibility = "hidden"; 
        tallyIconStyle5b.visibility = "hidden";

        iconMiddleColumn.style.justifyContent = "center"; // Align icons correclty
        iconLeftColumn.style.justifyContent = "space-around";
        iconRightColumn.style.justifyContent = "space-around";

        cornerClass.forEach(p => { // Set the innerHTML to 10
            p.innerHTML = "4";  
        });
        AceIcon.style.display = 'none';
        pictureCardLayout.style.display = 'none';
    }
    threeButton.addEventListener('mouseenter', function() {
        IconLayout3();
        switchToFront();
        applySuitColor();
        
    });
    function IconLayout3() { 
        selectedCardClass = 3;
        cardIdentP.innerHTML = selectedCardClass;
        ApplyCenterHeightValue();

        for (let i = 1; i <= 10; i++) { //Set icon display style
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.display = "none";
        }
        tallyIconStyle1.display = "block";
        tallyIconStyle7.display = "block";
        tallyIconStyle5.display = "block";
        tallyIconStyle5b.display = "block";
        tallyIconStyle6.display = "block";
    

        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "hidden";
            }

        tallyIcon5.style.visibility = "visible";
        tallyIcon5b.style.visibility = "visible";
        tallyIcon6.style.visibility = "visible";
        
        iconMiddleColumn.style.justifyContent = "space-around"; // Align icons correclty
        iconLeftColumn.style.justifyContent = "space-around";
        iconRightColumn.style.justifyContent = "space-around";

        cornerClass.forEach(p => { // Set the innerHTML to 10
            p.innerHTML = "3";  
        });
        AceIcon.style.display = 'none';
        pictureCardLayout.style.display = 'none';

    }
    twoButton.addEventListener('mouseenter', function() {
        IconLayout2();
        switchToFront();
        applySuitColor();
        
    });

    function IconLayout2() { 
        selectedCardClass = 2;
        cardIdentP.innerHTML = selectedCardClass;
        ApplyCenterHeightValue();

        for (let i = 1; i <= 10; i++) { //Set icon display style
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.display = "none";
        }
        tallyIconStyle1.display = "block";
        tallyIconStyle7.display = "block";
        tallyIconStyle5.display = "block";
        tallyIconStyle5b.display = "block";
        tallyIconStyle6.display = "block";
    

        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "hidden";
            }

        tallyIcon5.style.visibility = "visible";
        tallyIcon5b.style.visibility = "hidden";
        tallyIcon6.style.visibility = "visible";
    
        iconMiddleColumn.style.justifyContent = "space-around"; // Align icons correclty
        iconLeftColumn.style.justifyContent = "space-around";
        iconRightColumn.style.justifyContent = "space-around";

        cornerClass.forEach(p => { // Set the innerHTML to 10
            p.innerHTML = "2";  
        });
        
        AceIcon.style.display = 'none';
        pictureCardLayout.style.display = 'none';
    }

    aceButton.addEventListener('mouseenter', function() {
        IconLayout1();
        switchToFront();
        applySuitColor();
        
    });
    function IconLayout1() { 
        selectedCardClass = 1;
        cardIdentP.innerHTML = selectedCardClass;
        ApplyCenterHeightValue();

        for (let i = 1; i <= 10; i++) { //Set icon display style
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.display = "none";
        }
        
        tallyIconStyle5b.display = "none";
        
        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "hidden";
            }
            
            tallyIcon5b.style.visibility = "hidden";
            
        
        

        iconMiddleColumn.style.justifyContent = "space-around"; // Align icons correclty
        iconLeftColumn.style.justifyContent = "space-around";
        iconRightColumn.style.justifyContent = "space-around";

        cornerClass.forEach(p => { // Set the innerHTML to 10
            p.innerHTML = "A";  
        });
        AceIcon.style.display = 'block';
        AceIcon.style.top = '0px';
       // AceIcon.style.top = iconSizeControl.value * -0.5 + 202 + 'px';
        tallyLayout.style.display = 'flex';
        pictureCardLayout.style.display = 'none';
        
    }

    
    jackButton.addEventListener('mouseenter', function() {
        IconLayoutPicture("J");
        switchToFront();    
        applySuitColor();
    });
    queenButton.addEventListener('mouseenter', function() {
        IconLayoutPicture("Q");
        switchToFront();  
        applySuitColor();  
    });
    kingButton.addEventListener('mouseenter', function() {
        IconLayoutPicture("K");
        switchToFront();    
        applySuitColor();
    });
    jokerButton.addEventListener('mouseenter', function() {
        IconLayoutPicture("?");
        switchToFront();    
        applySuitColor();
        cardImageFront.classList.add('joker-text');
    });
    jokerButton.addEventListener('mouseleave', function() {
        applySuitColor();
    });

    function IconLayoutPicture(pictureCardIdentity) { 

        cardIdentP.innerHTML = selectedCardClass;
        ApplyCenterHeightValue();

        for (let i = 1; i <= 10; i++) { //Set icon display style
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.display = "none";
        }
        
        tallyIconStyle5b.display = "none";
        
        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "hidden";
            }
            
            tallyIcon5b.style.visibility = "hidden";

         if (pictureCardIdentity === "?") {
                selectedCardClass = "?";

            }
            
        cornerClass.forEach(p => {
            
         if (pictureCardIdentity === "J") {
                selectedCardClass = "J";
                p.innerHTML = "J";   
                }
         else if (pictureCardIdentity === "Q") {
                selectedCardClass = "Q";
                p.innerHTML = "Q"; 
                }
         else if (pictureCardIdentity === "K") {
                selectedCardClass = "K";
                p.innerHTML = "K";
                }
         else if (pictureCardIdentity === "?") {
                selectedCardClass = "?";
                p.innerHTML = "J<br>O<br>K<br>E<br>R";
                }

          
        });

        cornerImage.forEach(image => {
            if (["J", "Q", "K"].includes(pictureCardIdentity)) {
                image.style.display = "flex";
            } else if (pictureCardIdentity === "?") {
                image.style.display = "none";
            }
        });
        AceIcon.style.display = 'none';
        // AceIcon.style.top = iconSizeControl.value * -0.5 + 202 + 'px';
        pictureCardLayout.style.display = 'flex';
       
    }


// Change Color of text                      -----------------------------------------------------------------------------------

function applySuitColor() { 
    if (currentSuit === "diamond" || currentSuit === "heart") {
        cardImageFront.classList.add('red-suit-color');
        cardImageFront.classList.remove('black-suit-color');
        
    } else if (currentSuit === "club" || currentSuit === "spade") {
        cardImageFront.classList.add('black-suit-color');
        cardImageFront.classList.remove('red-suit-color');
    } 
    if (selectedCardClass === "?") {
        cardImageFront.classList.add('joker-text');
    } else {
        cardImageFront.classList.remove('joker-text');
    }
}

// Control size of card front icons for suits and card identity -----------------------------------------------------------------------
    
    

    

    let adjustCenterHeightValue = (iconSizeControl.value - 64)*-2;
    function ApplyCenterHeightValue() {
        if (selectedCardClass === 7 || selectedCardClass === 8) {
            tallyIconStyle5b.marginTop = adjustCenterHeightValue + "px";
        } else {
            tallyIconStyle5b.marginTop = 0;
        }
    }

    

    iconSizeControl.addEventListener('input', function() { 
        
        let iconSliderValue = iconSizeControl.value;

        adjustCenterHeightValue = (iconSliderValue - 64)*-2;
        
        
        iconNormalHeight = iconSliderValue + 'px';
        
       const iconColumnImages = document.querySelectorAll("#tally-layout img.icon-number");

       iconColumnImages.forEach(function(image) {
      
            image.style.height = iconNormalHeight;
            image.style.maxHeight = iconNormalHeight;
            image.style.width = "auto";

            // Need to Make the image height of the 5b icon element invert the slider value ONLY when 7 or 8 card is selected to
            // make layout in cenetr correct - moving on to more important features

        
        });
            // Dynamically adjust column positions based on icon size
        const iconColumnLeft = document.getElementById("iconColumnLeft");
        const iconColumnMiddle = document.getElementById("iconColumnMiddle");
        const iconColumnRight = document.getElementById("iconColumnRight");

        const overlapOffset = parseInt(iconNormalHeight) / 2; // Adjust overlap based on icon size
        iconColumnLeft.style.left = `${32 - overlapOffset}px`;
        iconColumnRight.style.right = `${32 - overlapOffset}px`;

        AceIcon.style.height = iconNormalHeight;
        AceIcon.style.maxHeight = iconNormalHeight;
       // AceIcon.style.top = `${202 - overlapOffset}px`;

        if (selectedCardClass === 7 || selectedCardClass === 8) {
            tallyIconStyle5b.marginTop = adjustCenterHeightValue + "px";
        } else {
            tallyIconStyle5b.marginTop = 0;
        }
        
       iconSizerDisplay.innerHTML = iconSliderValue - 34;
       switchToFront();
    });

    

    
    let suitNormalHeight = 40;

    const suitClassSizeControl = document.getElementById('SuitClassSizer');
    const suitSizerDisplay = document.getElementById('suit-sizer-display');

    suitClassSizeControl.addEventListener('input', function() { 
        
        
        suitNormalHeight = suitClassSizeControl.value;

        const suitClassImages = document.querySelectorAll("#card img.corner-suit");
        
        suitClassImages.forEach(function(image) {
            image.style.height = suitNormalHeight + "px";
        });
        suitSizerDisplay.innerHTML = suitClassSizeControl.value - 20;
        switchToFront();
    });


    // Features to add next:
    // Saving card images as files
    // Host on Netlify?
    // SQL save local changes to server
    // 

    

});


