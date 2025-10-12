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

    const picCardImageSizeDisplay = document.getElementById("pic-card-sizer-display");
    

    
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
        // cardIMGStyle.style.objectFit = 'cover';

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
    const pictureContainer = document.getElementById("pictureContainer");
    pictureCardLayout.style.display = 'none';

    const kingHeartsUpload = document.getElementById('king-upload-hearts');
    const kingDiamondsUpload = document.getElementById('king-upload-diamonds');
    const kingClubsUpload = document.getElementById('king-upload-clubs');
    const kingSpadesUpload = document.getElementById('king-upload-spades');

    const queenDiamondsUpload = document.getElementById('queen-upload-diamonds');
    const queenHeartsUpload = document.getElementById('queen-upload-hearts');
    const queenClubsUpload = document.getElementById('queen-upload-clubs');
    const queenSpadesUpload = document.getElementById('queen-upload-spades');

    const jackDiamondsUpload = document.getElementById('jack-upload-diamonds');
    const jackHeartsUpload = document.getElementById('jack-upload-hearts');
    const jackClubsUpload = document.getElementById('jack-upload-clubs');
    const jackSpadesUpload = document.getElementById('jack-upload-spades');

    const jokerUpload = document.getElementById('joker-upload');

    const picCardImage = document.getElementById("pictureImage");
    const picCardImage2 = document.getElementById("pictureImage2");
    let kingImage = "images/CardPreset3.svg";
    let queenImage = "images/CardPreset3.svg";
    let jackImage = "images/CardPreset3.svg"; 
    let jokerImage = "images/CardPreset3.svg";

    let jackImageDiamond = "images/CardPreset3.svg";
    let queenImageDiamond = "images/CardPreset3.svg";
    let kingImageDiamond = "images/CardPreset3.svg";
    let jackImageHeart = "images/CardPreset3.svg"; 
    let queenImageHeart = "images/CardPreset3.svg";
    let kingImageHeart = "images/CardPreset3.svg";
    let jackImageClub = "images/CardPreset3.svg";
    let queenImageClub = "images/CardPreset3.svg";
    let kingImageClub = "images/CardPreset3.svg";
    let jackImageSpade = "images/CardPreset3.svg";
    let queenImageSpade = "images/CardPreset3.svg";
    let kingImageSpade = "images/CardPreset3.svg";
       
    
    let redSuitColor = "#BC2024";
    let blackSuitColor = "#000000";

    const cornerText = document.querySelectorAll("p.corner-class");
    const backContainer = document.getElementById("back-container");
    
    const mirrorPicCardBtn = document.getElementById('MirrorBtn');
        let isPicCardMirrored = true;
    
    const borderPicCardBtn = document.getElementById('BorderPicBtn');
    let isPicCardBordered = true;

    let mirrorState = 'block';
    
    const picImageContainer = document.querySelector('div#pictureImage1-container.pic-img-container');
    const picImageContainer2 = document.querySelector('div#pictureImage2-container.pic-img-container');
    const picCardImgStyles = document.querySelector('img.pic-img#pictureImage');
    const picCardImgStyles2 = document.querySelector('img.pic-img#pictureImage2');

    const picCardImgAdjuster = document.getElementById('picCardImgAdjuster');
    const AdjusterLabels = document.getElementById('adjusterLabels');
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
        backContainer.style.display = 'none';

        // cardImageFront.src = "images/CardFrontPlaceholder.svg";
        cardImageFront.style.zIndex = '101';
        cardImageFront.style.visibility = 'visible';
        cardImageBack.style.zIndex = '100';
        cardImageBack.style.visibility = 'hidden';

        cardIsOnBack = false;
       // AceIcon.style.top = iconSizeControl.value * -0.5 + 202 + 'px';
       tallyLayout.style.display = 'flex';
       applySuitColor();
    }
    // Flip card and switch button on click
    cardFrontBtn.addEventListener('click', function() {
        switchToFront();
    });

    flipperBtn.addEventListener('click', function() {
            if (cardIsOnBack) {
                switchToFront();
                applySuitColor();
            } else {
                switchToBack();
            }
    });

    
    function switchToBack() {
        cardSideBtn = cardFrontBtn;
        cardNotSide = cardBackBtn;

        // cardBackBtn.style.display = 'none';
        // cardFrontBtn.style.display = 'block';

        // cardBorderDiv.style.display = 'block';
        backContainer.style.display = 'flex';

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
        // document.querySelectorAll('.corner-class').forEach(el => {
        //         el.style.fontFamily = `"Flavors", sans-serif`;
        // });
        
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
        // cardImageBack.style.borderRadius = cardImageBorderRadius + 'px';
        cardBorderDiv.style.borderWidth = borderSliderValue + 'px';
        cardBorderDiv.style.borderRadius = cardImageBorderRadius + 'px';
        backContainer.style.borderWidth = borderSliderValue + 'px';
        backContainer.style.borderRadius = cardImageBorderRadius + 'px';

        copyCardBorderStyles();
        
        
        if (!cardIsOnBack) {
            switchToBack();
        }
        
    });
        cardImageBack.style.borderWidth = borderControl.value + 'px';
        cardBorderDiv.style.borderWidth = borderControl.value + 'px';
        cardBorderDiv.style.borderRadius = (borderControl.value*1) + 8 + 'px';
        backContainer.style.borderWidth = borderControl.value + 'px';
        backContainer.style.borderRadius = (borderControl.value*1) + 8 + 'px';
   
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
        backContainer.style.borderColor = borderColourValue;
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
        updateJokerDisplay();
        updatePicCardImage();
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
        updateJokerDisplay();
        updatePicCardImage();
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
        updateJokerDisplay();
        updatePicCardImage();
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
        updateJokerDisplay();
        updatePicCardImage();
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
    const cornerImage = document.querySelectorAll("#card img.corner-suit");

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

    let hoveredBtnIndex = null;

    classBtns.forEach((button, idx) => {
        button.addEventListener('mouseenter', function() {
            hoveredBtnIndex = idx;
            updateJokerDisplay();
        });
        button.addEventListener('mouseleave', function() {
            hoveredBtnIndex = null;
            updateJokerDisplay();
        });
        button.addEventListener('click', function() {
            classBtns.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            updateJokerDisplay();
        });
    });

    classBtns.forEach(button => {
        button.addEventListener('mouseenter', function() {
            switchToFront();
            applySuitColor();
            updateJokerDisplay();
        });
        button.addEventListener('mouseleave', function() {
            showSelectedIconLayout();
            applySuitColor();
            updateJokerDisplay();
            
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
        updateJokerDisplay();
        
    }
    

    tenButton.addEventListener('mouseenter', function() {
        IconLayout10();
        switchToFront();
        applySuitColor();
        updateJokerDisplay();
        
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
        updateJokerDisplay();
        
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
        updateJokerDisplay();
        
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
        updateJokerDisplay();
        
        
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
        updateJokerDisplay();
        
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
        updateJokerDisplay();
        
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
        updateJokerDisplay();
        
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
        updateJokerDisplay();
        
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
        updateJokerDisplay();
        
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
        updateJokerDisplay();
        
        
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
        updateJokerDisplay();
        selectedCardClass = 'J';
        cardIdentP.innerHTML = selectedCardClass;
        updatePicCardImage("J");
    });
    queenButton.addEventListener('mouseenter', function() {
        IconLayoutPicture("Q");
        switchToFront();  
        applySuitColor();  
        updateJokerDisplay();
        selectedCardClass = 'Q';
        cardIdentP.innerHTML = selectedCardClass;
        updatePicCardImage("Q");
    });
    kingButton.addEventListener('mouseenter', function() {
        IconLayoutPicture("K");
        switchToFront();    
        applySuitColor();
        updateJokerDisplay();
        selectedCardClass = 'K';
        cardIdentP.innerHTML = selectedCardClass;
        updatePicCardImage("K");
    });
    jokerButton.addEventListener('mouseenter', function() {
        
        IconLayoutPicture("?");
        switchToFront();    
        applySuitColor();
        updateJokerDisplay();
        cardImageFront.classList.add('joker-text');
        selectedCardClass = '?';
        cardIdentP.innerHTML = selectedCardClass;
        updatePicCardImage("?");
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

        
        
            if (pictureCardIdentity === "K") {
                pictureImage.classList.add('king');
            } else if (pictureCardIdentity === "?") {
                selectedCardClass = "?";
                cornerImage.style.display = "none";
                cardImageFront.classList.add('joker-text');
            }
            updateJokerDisplay();
            
        
        AceIcon.style.display = 'none';
        // AceIcon.style.top = iconSizeControl.value * -0.5 + 202 + 'px';
        pictureCardLayout.style.display = 'flex';
        if (pictureCardIdentity === "?") {
            pictureContainer.classList.add('borderless');
        } else {
            pictureContainer.classList.remove('borderless');
        }
       

        updatePicCardImage();
    }

    
    function updateJokerDisplay() {

        
    const cornerPs = document.querySelectorAll('.corner-class');
    const cornerIcons = document.querySelectorAll('.icon.corner-suit');
    const jokerBtnIndex = 13; // update if your joker button index is different

    // If a button is hovered, use its state; otherwise use selected
    let isJokerActive = false;
    let color = blackSuitColor; // default black

    if (hoveredBtnIndex !== null) {
        // If hovering Joker
        if (hoveredBtnIndex === jokerBtnIndex) {
            
            isJokerActive = true;
            color = blackSuitColor;
            pictureContainer.classList.add('borderless');
            selectedCardClass = '?';
            AceIcon.style.display = 'none';
            picCardImage2.style.display = 'none';
            picCardImage.style.display = 'block';
        } else {
            // Not Joker: set color based on hovered button's suit
            isJokerActive = false;
            picCardImage2.style.display = mirrorState;
            // Example: map hoveredBtnIndex to suit
            if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(hoveredBtnIndex)) {
                // Use your own mapping logic for suit
                color = (currentSuit === "diamond" || currentSuit === "heart") ? redSuitColor : blackSuitColor;
                
            }
            pictureContainer.classList.remove('borderless');
        }
    } else {
        // No hover: use selected
        if (classBtns[jokerBtnIndex].classList.contains('selected')) {
            isJokerActive = true;
            color = blackSuitColor;
            pictureContainer.classList.add('borderless');
        } else {
            pictureContainer.classList.remove('borderless');
            color = (currentSuit === "diamond" || currentSuit === "heart") ? redSuitColor : blackSuitColor;
        }
    }

    // Apply styles
    cornerPs.forEach(p => {
        p.style.color = color;
    });
    cornerIcons.forEach(icon => {
        icon.style.display = isJokerActive ? "none" : "";
    });
    updatePicCardImage(); // Update the picture card image based on the current state
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
        cardImageFront.classList.remove('red-suit-color');
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

    
    kingDiamondsUpload.addEventListener('change', function(event) {
    UPLOADKINGDIAMONDS();
    });
    kingHeartsUpload.addEventListener('change', function(event) {
        UPLOADKINGHEARTS();
    });
    kingClubsUpload.addEventListener('change', function(event) {
        UPLOADKINGCLUBS();
    });
    kingSpadesUpload.addEventListener('change', function(event) {
        UPLOADKINGSPADES();
    });
        

    function UPLOADKINGDIAMONDS() {
        
         if (kingDiamondsUpload.files && kingDiamondsUpload.files[0]) {
                const file = kingDiamondsUpload.files[0];
            
                // Check if it's an image file
                if (!file.type.startsWith("image/")) {
                    alert("Please upload a valid image file.");
                    return;
                }
                const reader = new FileReader(); // Create a new FileReader object
                // Function to run when the file is read
                reader.onload = function(e) {
                    // Set the card back image to the uploaded image
                    kingImageDiamond = e.target.result; // e.target.result contains the image data URL
                    console.log("Uploaded image set as King", e.target.result); // Debugging output
                    picCardImage.src = kingImage; // Update the picture card image
                    picCardImage2.src = kingImage; // Update the second picture card image
                    updatePicCardImage(); // Update the picture card image
                };

                // Read the uploaded image as a data URL
                reader.readAsDataURL(file);
            } else {
                console.error("No file was selected for upload."); // Debugging output
            }
    }
    function UPLOADKINGHEARTS() {
        
         if (kingHeartsUpload.files && kingHeartsUpload.files[0]) {
                const file = kingHeartsUpload.files[0];
            
                // Check if it's an image file
                if (!file.type.startsWith("image/")) {
                    alert("Please upload a valid image file.");
                    return;
                }
                const reader = new FileReader(); // Create a new FileReader object
                // Function to run when the file is read
                reader.onload = function(e) {
                    // Set the card back image to the uploaded image
                    kingImageHeart = e.target.result; // e.target.result contains the image data URL
                    console.log("Uploaded image set as King", e.target.result); // Debugging output
                    
                    updatePicCardImage(); // Update the picture card image
                };

                // Read the uploaded image as a data URL
                reader.readAsDataURL(file);
            } else {
                console.error("No file was selected for upload."); // Debugging output
            }
    }
    function UPLOADKINGCLUBS() {
    if (kingClubsUpload.files && kingClubsUpload.files[0]) {
        const file = kingClubsUpload.files[0];

        // Check if it's an image file
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }
        const reader = new FileReader(); // Create a new FileReader object
        // Function to run when the file is read
        reader.onload = function(e) {
            // Set the card back image to the uploaded image
            kingImageClub = e.target.result; // e.target.result contains the image data URL
            console.log("Uploaded image set as King", e.target.result); // Debugging output

            updatePicCardImage(); // Update the picture card image
        };

        // Read the uploaded image as a data URL
        reader.readAsDataURL(file);
    } else {
        console.error("No file was selected for upload."); // Debugging output
    }
}
    function UPLOADKINGSPADES() {
    if (kingSpadesUpload.files && kingSpadesUpload.files[0]) {
        const file = kingSpadesUpload.files[0];

        // Check if it's an image file
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }
        const reader = new FileReader(); // Create a new FileReader object
        // Function to run when the file is read
        reader.onload = function(e) {
            // Set the card back image to the uploaded image
            kingImageSpade = e.target.result; // e.target.result contains the image data URL
            console.log("Uploaded image set as King", e.target.result); // Debugging output

            updatePicCardImage(); // Update the picture card image
        };

        // Read the uploaded image as a data URL
        reader.readAsDataURL(file);
    } else {
        console.error("No file was selected for upload."); // Debugging output
    }
}


queenDiamondsUpload.addEventListener('change', function(event) {
    UPLOADQUEENDIAMONDS();
});
queenHeartsUpload.addEventListener('change', function(event) {
    UPLOADQUEENHEARTS();
});
queenClubsUpload.addEventListener('change', function(event) {
    UPLOADQUEENCLUBS();
});
queenSpadesUpload.addEventListener('change', function(event) {
    UPLOADQUEENSPADES();
});

function UPLOADQUEENDIAMONDS() {
    if (queenDiamondsUpload.files && queenDiamondsUpload.files[0]) {
        const file = queenDiamondsUpload.files[0];

        // Check if it's an image file
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }
        const reader = new FileReader(); // Create a new FileReader object
        // Function to run when the file is read
        reader.onload = function(e) {
            // Set the card back image to the uploaded image
            queenImageDiamond = e.target.result; // e.target.result contains the image data URL
            console.log("Uploaded image set as Queen", e.target.result); // Debugging output
            picCardImage.src = queenImage; // Update the picture card image
            picCardImage2.src = queenImage; // Update the second picture card image
            updatePicCardImage(); // Update the picture card image
        };

        // Read the uploaded image as a data URL
        reader.readAsDataURL(file);
    } else {
        console.error("No file was selected for upload."); // Debugging output
    }
}
function UPLOADQUEENHEARTS() {
    if (queenHeartsUpload.files && queenHeartsUpload.files[0]) {
        const file = queenHeartsUpload.files[0];

        // Check if it's an image file
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }
        const reader = new FileReader(); // Create a new FileReader object
        // Function to run when the file is read
        reader.onload = function(e) {
            // Set the card back image to the uploaded image
            queenImageHeart = e.target.result; // e.target.result contains the image data URL
            console.log("Uploaded image set as Queen", e.target.result); // Debugging output

            updatePicCardImage(); // Update the picture card image
        };

        // Read the uploaded image as a data URL
        reader.readAsDataURL(file);
    } else {
        console.error("No file was selected for upload."); // Debugging output
    }
}
function UPLOADQUEENCLUBS() {
    if (queenClubsUpload.files && queenClubsUpload.files[0]) {
        const file = queenClubsUpload.files[0];

        // Check if it's an image file
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }
        const reader = new FileReader(); // Create a new FileReader object
        // Function to run when the file is read
        reader.onload = function(e) {
            // Set the card back image to the uploaded image
            queenImageClub = e.target.result; // e.target.result contains the image data URL
            console.log("Uploaded image set as Queen", e.target.result); // Debugging output

            updatePicCardImage(); // Update the picture card image
        };

        // Read the uploaded image as a data URL
        reader.readAsDataURL(file);
    } else {
        console.error("No file was selected for upload."); // Debugging output
    }
}
function UPLOADQUEENSPADES() {
    if (queenSpadesUpload.files && queenSpadesUpload.files[0]) {
        const file = queenSpadesUpload.files[0];

        // Check if it's an image file
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }
        const reader = new FileReader(); // Create a new FileReader object
        // Function to run when the file is read
        reader.onload = function(e) {
            // Set the card back image to the uploaded image
            queenImageSpade = e.target.result; // e.target.result contains the image data URL
            console.log("Uploaded image set as Queen", e.target.result); // Debugging output

            updatePicCardImage(); // Update the picture card image
        };

        // Read the uploaded image as a data URL
        reader.readAsDataURL(file);
    } else {
        console.error("No file was selected for upload."); // Debugging output
    }
}

    

jackDiamondsUpload.addEventListener('change', function(event) {
    UPLOADJACKDIAMONDS();
});
jackHeartsUpload.addEventListener('change', function(event) {
    UPLOADJACKHEARTS();
});
jackClubsUpload.addEventListener('change', function(event) {
    UPLOADJACKCLUBS();
});
jackSpadesUpload.addEventListener('change', function(event) {
    UPLOADJACKSPADES();
});

function UPLOADJACKDIAMONDS() {
    if (jackDiamondsUpload.files && jackDiamondsUpload.files[0]) {
        const file = jackDiamondsUpload.files[0];

        // Check if it's an image file
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }
        const reader = new FileReader(); // Create a new FileReader object
        // Function to run when the file is read
        reader.onload = function(e) {
            // Set the card back image to the uploaded image
            jackImageDiamond = e.target.result; // e.target.result contains the image data URL
            console.log("Uploaded image set as Jack", e.target.result); // Debugging output
            picCardImage.src = jackImage; // Update the picture card image
            picCardImage2.src = jackImage; // Update the second picture card image
            updatePicCardImage(); // Update the picture card image
        };

        // Read the uploaded image as a data URL
        reader.readAsDataURL(file);
    } else {
        console.error("No file was selected for upload."); // Debugging output
    }
}
function UPLOADJACKHEARTS() {
    if (jackHeartsUpload.files && jackHeartsUpload.files[0]) {
        const file = jackHeartsUpload.files[0];

        // Check if it's an image file
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }
        const reader = new FileReader(); // Create a new FileReader object
        // Function to run when the file is read
        reader.onload = function(e) {
            // Set the card back image to the uploaded image
            jackImageHeart = e.target.result; // e.target.result contains the image data URL
            console.log("Uploaded image set as Jack", e.target.result); // Debugging output

            updatePicCardImage(); // Update the picture card image
        };

        // Read the uploaded image as a data URL
        reader.readAsDataURL(file);
    } else {
        console.error("No file was selected for upload."); // Debugging output
    }
}
function UPLOADJACKCLUBS() {
    if (jackClubsUpload.files && jackClubsUpload.files[0]) {
        const file = jackClubsUpload.files[0];

        // Check if it's an image file
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }
        const reader = new FileReader(); // Create a new FileReader object
        // Function to run when the file is read
        reader.onload = function(e) {
            // Set the card back image to the uploaded image
            jackImageClub = e.target.result; // e.target.result contains the image data URL
            console.log("Uploaded image set as Jack", e.target.result); // Debugging output

            updatePicCardImage(); // Update the picture card image
        };

        // Read the uploaded image as a data URL
        reader.readAsDataURL(file);
    } else {
        console.error("No file was selected for upload."); // Debugging output
    }
}
function UPLOADJACKSPADES() {
    if (jackSpadesUpload.files && jackSpadesUpload.files[0]) {
        const file = jackSpadesUpload.files[0];

        // Check if it's an image file
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }
        const reader = new FileReader(); // Create a new FileReader object
        // Function to run when the file is read
        reader.onload = function(e) {
            // Set the card back image to the uploaded image
            jackImageSpade = e.target.result; // e.target.result contains the image data URL
            console.log("Uploaded image set as Jack", e.target.result); // Debugging output

            updatePicCardImage(); // Update the picture card image
        };

        // Read the uploaded image as a data URL
        reader.readAsDataURL(file);
    } else {
        console.error("No file was selected for upload."); // Debugging output
    }
}

jokerUpload.addEventListener('change', function(event) {
    UPLOADJOKER();
});
function UPLOADJOKER() {
    if (jokerUpload.files && jokerUpload.files[0]) {
        const file = jokerUpload.files[0];
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }
        const reader = new FileReader();
        reader.onload = function(e) {
            jokerImage = e.target.result;
            console.log("Uploaded image set as Joker", e.target.result);
            updatePicCardImage(); // Update the picture card image
        };
        reader.readAsDataURL(file);
    } else {
        console.error("No file was selected for upload.");
    }
}

    function updatePicCardImage() {
        
    // Update the picture card image based on the selected suit
    if (currentSuit === "diamond") {
            kingImage = kingImageDiamond;
            queenImage = queenImageDiamond;
            jackImage = jackImageDiamond;
        } else if (currentSuit === "heart") {
            kingImage = kingImageHeart;
            jackImage = jackImageHeart;
            queenImage = queenImageHeart;
        } else if (currentSuit === "club") {
            kingImage = kingImageClub;
            jackImage = jackImageClub;
            queenImage = queenImageClub;
        } else if (currentSuit === "spade") {
            kingImage = kingImageSpade;
            jackImage = jackImageSpade;
            queenImage = queenImageSpade;
        } 
    // Set the image source based on the selected card class

    if (selectedCardClass === "J") {      

        picCardImage.src = jackImage;
        picCardImage2.src = jackImage;
        picCardImage2.style.display = mirrorState;
    } else if (selectedCardClass === "Q") {     
        
        picCardImage.src = queenImage;
        picCardImage2.src = queenImage;
        picCardImage2.style.display = mirrorState;
    } else if (selectedCardClass === "K") {     
        
        picCardImage.src = kingImage;
        picCardImage2.src = kingImage;
        picCardImage2.style.display = mirrorState;
    } else if (selectedCardClass === "?") {     
        picCardImage.src = jokerImage;
        picCardImage2.src = jokerImage;
        picCardImage2.style.display = 'none';
    } else {
        picCardImage.src = "images/CardPreset3.svg";
    }
}

    
const fontSelect = document.getElementById('font-select');
// const fontPreview = document.getElementById('font-preview');


fontSelect.addEventListener('change', function() {
    const font = this.value;
    
    // Load the font from Google Fonts
    const linkId = 'dynamic-google-font';
    let link = document.getElementById(linkId);
    if (!link) {
        link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
    link.href = `https://fonts.googleapis.com/css?family=${font.replace(/ /g, '+')}:400,700&display=swap`;

    // Apply the font to .corner-class
    document.querySelectorAll('.corner-class').forEach(el => {
        el.style.fontFamily = `'${font}', sans-serif`;
    });
    applyDefaultFont(); // Reset to default font if necessary
    
});

    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDGsX2AD7Z88SlXm8dyP7y1bq3njxUMjvs')
        .then(response => response.json())
        .then(data => {
            
            data.items.forEach(font => {
            const option = document.createElement('option');
            option.value = font.family;
            option.textContent = font.family;
            fontSelect.appendChild(option);
            
        });

    });

    function applyDefaultFont() {
        if (fontSelect.value === "default") {
            document.querySelectorAll('.corner-class').forEach(el => {
                el.style.fontFamily = `"Solway", sans-serif`;
            });
        }
    }

    const uploadTabBtns = document.querySelectorAll("button.upload-tab-btn");
const picCardUploads = [
    document.getElementById("king-pic-card-upload"),
    document.getElementById("queen-pic-card-upload"),
    document.getElementById("jack-pic-card-upload"),
    document.getElementById("joker-pic-card-upload")
];

uploadTabBtns.forEach((button, idx) => {
    button.addEventListener("click", function() {
        uploadTabBtns.forEach(btn => btn.classList.remove('selectedTab'));
        this.classList.add('selectedTab');
        // Hide all upload sections
        picCardUploads.forEach(div => div.style.display = "none");
        // Show the selected section
        picCardUploads[idx].style.display = "flex";
    });
});


picCardImgSizer.addEventListener('input', function() {
    picImageContainer.style.maxHeight = picCardImgSizer.value + '%';
    picImageContainer2.style.maxHeight = picCardImgSizer.value + '%';
     
    if (isPicCardMirrored) {
        picImageContainer.style.minHeight = picCardImgSizer.value + '%';
        picImageContainer2.style.minHeight = picCardImgSizer.value + '%';
    } else if (!isPicCardMirrored) {
        picImageContainer.style.minHeight = picCardImgSizer.value + '%';
        picImageContainer2.style.minHeight = '0%';
    }
    picCardImageSizeDisplay.innerHTML = picCardImgSizer.value -23;
    switchToFront();
    
    
});

    const imageSquashBtn = document.getElementById('image-squash-btn');
    let isImageSquashed = true;

    imageSquashBtn.addEventListener('click', function() {
        if (isImageSquashed) {
            cardImageBack.style.width = 'fit-content';
            imageSquashBtn.innerText = 'Fit Image';
            isImageSquashed = false;
        } else if (!isImageSquashed) {
            cardImageBack.style.width = '100%';
            imageSquashBtn.innerText = 'Fill Image';
            isImageSquashed = true;
        }
        switchToBack();
    });

    
    

    mirrorPicCardBtn.addEventListener('click', function() { 
        MirrorPicCardToggle();
    });
    function MirrorPicCardToggle() {
        if (isPicCardMirrored) {
            picCardImage2.style.display = 'none';
            isPicCardMirrored = false;
            mirrorState = 'none';
            picImageContainer.style.justifyContent = 'center';
            picImageContainer2.style.minHeight = '0%';
            picCardImgAdjuster.style.display = 'none';
            AdjusterLabels.style.display = 'none';
            picCardImgStyles.style.top = '0';
            picCardImgAdjuster.value = 0;
            

        } else if (!isPicCardMirrored) {
            picCardImage2.style.display = 'block';
            isPicCardMirrored = true;
            mirrorState = 'block';
            picImageContainer.style.justifyContent = 'flex-end';
            picImageContainer2.style.minHeight = picCardImgSizer.value + '%';
            picCardImgAdjuster.style.display = 'block';
            AdjusterLabels.style.display = 'block';
            
            
        }
    }


    // const picContainer = document.getElementById("picture-container");

    borderPicCardBtn.addEventListener('click', function() { 
        BorderPicCardToggle();
    });
    function BorderPicCardToggle() {
        if (isPicCardBordered) {
            pictureContainer.classList.add('borderless');
            isPicCardBordered = false;
        } else if (!isPicCardBordered) {
            pictureContainer.classList.remove('borderless');
            isPicCardBordered = true;
        }
    }

    const picCardImgAdjusterDisplay = document.getElementById('pic-card-adjuster-display');

    picCardImgAdjuster.addEventListener('input', function() {
        picCardImgStyles.style.top = picCardImgAdjuster.value + 'px';
        picCardImgStyles2.style.bottom = picCardImgAdjuster.value + 'px';
        picCardImgAdjusterDisplay.innerHTML = picCardImgAdjuster.value;
        switchToFront();
    });
 
    const zip = new JSZip();
    const deckFolder = zip.folder('deck-images');

    function addCardToZip(canvas, fileName) {
        const imageData = canvas.toDataURL('image/png');
        deckFolder.file(fileName, imageData.split(',')[1], {base64: true});
    }

    document.getElementById('downloadAllBtn').addEventListener('click', () => {
        
        
        // Use html2canvas to capture the body as an image
        cycleDiamonds();
        cycleHearts();
        cycleClubs();
        cycleSpades();
        
        async function cycleDiamonds() { 
            changeSuitDiamonds();
            for (let i = 0; i < classBtns.length; i++) {
                classBtns[i].click();
                await html2canvas(card).then((canvas) => {
                    const fileName = `card_${currentSuit}_${selectedCardClass}.png`;
                    addCardToZip(canvas, fileName);
                });
            }
        } 
        async function cycleHearts() { 
            changeSuitHearts();
            for (let i = 0; i < classBtns.length; i++) {
                classBtns[i].click();
                await html2canvas(card).then((canvas) => {
                    const fileName = `card_${currentSuit}_${selectedCardClass}.png`;
                    addCardToZip(canvas, fileName);
                });
            }
        } 
        
        async function cycleClubs() { 
            changeSuitClubs();
            for (let i = 0; i < classBtns.length; i++) {
                classBtns[i].click();
                await html2canvas(card).then((canvas) => {
                    const fileName = `card_${currentSuit}_${selectedCardClass}.png`;
                    addCardToZip(canvas, fileName);
                });
            }
        } 
        async function cycleSpades() { 
            changeSuitSpades();
            for (let i = 0; i < classBtns.length; i++) {   
                classBtns[i].click();
                await html2canvas(card).then((canvas) => {
                    const fileName = `card_${currentSuit}_${selectedCardClass}.png`;
                    addCardToZip(canvas, fileName);
                });
            }
        }
        
        




    });

    // function checkPicCardSuit() {
    //     // Check the current suit and update the card image accordingly
    //     if (currentSuit === "diamond") {
            
    //     } else if (currentSuit === "heart") {
            
    //     } else if (currentSuit === "club") {
            
    //     } else if (currentSuit === "spade") {
            
    //     }
    // }
    // Features to add next:
    // Saving card images as files
    // Host on Netlify?
    // SQL save local changes to server
    // fix Joker sizing and mirror flex issues
    // add picimage height position control

    // TO DO = = = = = = = = = = = = = = = = = = = v v v
    
    // font selection and size control
    // pic card image suit corner option
    // css mediaqueries for mobile
//
//
//    // Add "Flavors" ' chewy also font family to a preset for fonts
    //"New Rocker" font preset?
    //"sue ellen francisco" font preset, cute feminine style
    // "Agu display" funky style

});
