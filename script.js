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

    const tallyIcon = document.querySelector("#tally-layout img");
    const tallyIconStyle = tallyIcon.style;

    

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

        cardFrontBtn.style.display = 'none';
        cardBackBtn.style.display = 'block';

        cardBorderDiv.style.display = 'none';

        // cardImageFront.src = "images/CardFrontPlaceholder.svg";
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
        cardSideBtn = cardFrontBtn;
        cardNotSide = cardBackBtn;

        cardBackBtn.style.display = 'none';
        cardFrontBtn.style.display = 'block';

        cardBorderDiv.style.display = 'block';

        cardImageBack.src = cardBackCurrentImage;
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
                changeSuitSpades() 
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
            tallyIconStyle.maxHeight = iconNormalHeight;
            currentSuit = "diamond";
            cardImageFront.style.color = '#BC2024';
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            tallyIconStyle.maxHeight = iconNormalHeight;
            currentSuit = "diamond";
            cardImageFront.style.color = '#BC2024';

            changeSuitUnconditally = false;
        }

        if (diamondBtn) diamondBtn.classList.add('selected');
    }
    
        
        
     
    
    function changeSuitHearts() {
        resetSuitSelection();
        currentIcon = heartIcon;
        if (currentSuit !== "heart") {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            tallyIconStyle.maxHeight = iconNormalHeight;
            currentSuit = "heart";
            cardImageFront.style.color = '#BC2024';
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            tallyIconStyle.maxHeight = iconNormalHeight;
            currentSuit = "heart";
            cardImageFront.style.color = '#BC2024';
            
            changeSuitUnconditally = false;
        }
        if (heartBtn) heartBtn.classList.add('selected');
    }

    
    function changeSuitClubs() {
        resetSuitSelection();
        currentIcon = clubIcon;
        if (currentSuit !== "Club") {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            tallyIconStyle.maxHeight = iconNormalHeight;
            currentSuit = "club";
            cardImageFront.style.color = '#000';
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            tallyIconStyle.maxHeight = iconNormalHeight;
            currentSuit = "club";
            cardImageFront.style.color = '#000';

            changeSuitUnconditally = false;
        }
        if (clubBtn) clubBtn.classList.add('selected');
    }
    
    function changeSuitSpades() {
        resetSuitSelection();
        currentIcon = spadeIcon;
        if (currentSuit !== "spade") {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            tallyIconStyle.maxHeight = '9em';
            cardImageFront.style.color = '#000';
            currentSuit = "spade";
            
            
        } else if (changeSuitUnconditally == true) {
            allIcons.forEach(icon => {
                icon.src = currentIcon;
            });
            tallyIconStyle.maxHeight = '9em';
            cardImageFront.style.color = '#000';
            currentSuit = "spade";

            changeSuitUnconditally = false;
        }
        if (spadeBtn) spadeBtn.classList.add('selected');
    }
    
    function resetSuitSelection() {
        // Remove 'selected' class from all suit buttons
        const suitButtons = document.querySelectorAll('.change-suit');
        suitButtons.forEach(button => {
            button.classList.remove('selected');
        });
    }
        
            
          

    
    

});

