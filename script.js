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


});
