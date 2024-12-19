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

    const diamondBtn = document.getElementById("diamondBtn");
    const heartBtn = document.getElementById("heartBtn");
    const clubBtn = document.getElementById("clubBtn");
    const spadeBtn = document.getElementById("spadeBtn");
    
    let currentSuit = "diamond";
    
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
    const cardImageBack = document.getElementById("card-image-back");
    const cardImageFront = document.getElementById("front-layout");

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

    const tallyImage = document.querySelector("#tally-layout img");
    const tallyImageStyle = tallyImage.style;
    const AceIcon = document.getElementById("center-icon");

    

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



    preset1Btn.addEventListener('click', function() {
        cardBackCurrentImage = "images/CardPresetOne.png";
        CoverModeOFF();
        switchToBack();
        hideFlipBtn();
        cardSideBtn.style.opacity = '0';
        cardSideBtn.style.display = 'none';
    });
    preset2Btn.addEventListener('click', function() {
        cardBackCurrentImage = "images/CardPreset2.png";
        CoverModeOFF();
        switchToBack();
        hideFlipBtn();
    });
    preset3Btn.addEventListener('click', function() {
        cardBackCurrentImage = "images/CardPreset3.png";
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

    });
    
    // let borderSliderValue = borderControl.value;
    // let cardImageBorderRadius = borderControl.value * 1.2;
    // cardImageBack.style.borderWidth = borderControl.value + 'px';
    // cardImageBack.style.borderRadius = cardImageBorderRadius + 'px';

    // const cardImageWidth = parseFloat(window.getComputedStyle(cardImageBack).width);

    const iconNormalHeight = "6em";

    let diamondIcon = "images/DiamondIcon-1.png";
    let heartIcon = "images/HeartIcon-1.png";
    let clubIcon = "images/clubIcon-1.png";
    let spadeIcon = "images/spadeIcon-1.png";
    let currentIcon = diamondIcon;
    allIcons.src = currentIcon;

    let changeSuitUnconditally = false;
    // THIS FUNCIION IS NOT FULLY WORKING, NEEDS TO AUTO SWITCH TO DIAMOND CARD AND!!!&&& SHOW UPLOADED ICON
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

// Change Suit conditional Functions

    function changeSuitDiamonds() {
        resetSuitSelection();
        
        currentIcon = diamondIcon;
        if (currentSuit !== "diamond") {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = iconNormalHeight;
            currentSuit = "diamond";
            cardImageFront.style.color = '#BC2024';
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = iconNormalHeight;
            currentSuit = "diamond";
            cardImageFront.style.color = '#BC2024';

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
            cardImageFront.style.color = '#BC2024';
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = iconNormalHeight;
            currentSuit = "heart";
            cardImageFront.style.color = '#BC2024';
            
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
            cardImageFront.style.color = '#000';
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = iconNormalHeight;
            currentSuit = "club";
            cardImageFront.style.color = '#000';

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
            AceIcon.style.maxHeight = '9em';
            cardImageFront.style.color = '#000';
            currentSuit = "spade";
            
            
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            AceIcon.style.maxHeight = '9em';
            cardImageFront.style.color = '#000';
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

    tenButton.addEventListener('click', function() {
        IconLayout10();
    });
    function IconLayout10() { 

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

    }
    nineButton.addEventListener('click', function() {
        IconLayout9();
    });
    function IconLayout9() { 

        for (let i = 1; i <= 10; i++) { //Set icon display style
        const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
        tallyIcon.style.display = "block";
        }
        tallyIconStyle5b.display = "none"; 

        for (let i = 1; i <= 10; i++) { // Set icon visibility
            const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
            tallyIcon.style.visibility = "visible";
            } 
        tallyIconStyle6.visibility = "hidden";

        iconMiddleColumn.style.justifyContent = "space-around"; // Align icons correclty
        iconLeftColumn.style.justifyContent = "space-around";
        iconRightColumn.style.justifyContent = "space-around";

        cornerClass.forEach(p => { // Set the innerHTML to 10
            p.innerHTML = "9";  
        });
        AceIcon.style.display = 'none';

    }
    eightButton.addEventListener('click', function() {
        IconLayout8();
    });
    function IconLayout8() { 

        for (let i = 1; i <= 10; i++) { //Set icon display style
        const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
        tallyIcon.style.display = "block";
        }
        tallyIconStyle3.display = "none";
        tallyIconStyle8.display = "none";
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

    }
    sevenButton.addEventListener('click', function() {
        IconLayout7();
    });
    function IconLayout7() { 

        for (let i = 1; i <= 10; i++) { //Set icon display style
        const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
        tallyIcon.style.display = "block";
        }
        tallyIconStyle3.display = "none";
        tallyIconStyle8.display = "none";
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

    }
    sixButton.addEventListener('click', function() {
        IconLayout6();
    });
    function IconLayout6() { 

        for (let i = 1; i <= 10; i++) { //Set icon display style
        const tallyIcon = document.querySelector(`#Icon-${i}.icon.tally-icon.icon-number`);
        tallyIcon.style.display = "block";
        }
        tallyIconStyle3.display = "none";
        tallyIconStyle8.display = "none";
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

    }



    // document.addEventListener('click', function() {

    // });      

    // function ShowAce() {
        
    // }  

    // The 10button needs to select the styles of all icon-number images-5b and turn them to block. 
    // also access id <p> element and change innerHTML to 10
    
    // The 9 button needs to select all icon images-5b-6
    
    // 8 button select icon images -3-9 turn to block,  image 5b become block and visibility: hidden
    // iconMiddleColumn must become justify content center

    // 7 button same as 8 but set image 6 to visibility hidden

    // 6 is same a 7 with allcenter icons set to display none

    // 5 is 1,4,7,10 and 5b icons with 2 and 8 set to hidden turn all others to none

    // 4 is 5 but all center icons set to none

    // 3 has middle column 5,5b,6 images set to visible and block all others set to hidden and none, middle column set to space-around jc

    // 2 is same as 3 but 5b set to hidden visibilty

    // Ace is set to center-icon visible block and all other images set to displau none
    // also set bool for isAceDisplayed to change spade icon size



});


