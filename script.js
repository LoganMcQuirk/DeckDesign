// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

    const editBack = document.getElementById("editBack");
    editBack.style.display = "block";

    const editSuit = document.getElementById("editSuit");
    editSuit.style.display = "block";

    const toggleBackBtn = document.getElementById("editBackBtn");
    const toggleSuitBtn = document.getElementById("editSuitBtn");

    toggleBackBtn.addEventListener('click', function() {
        if (editBack.style.display === "block") {
            // close
            editBack.style.display = "none";
            toggleBackBtn.textContent = "Edit";
        } else {
            // open
            editBack.style.display = "block";
            toggleBackBtn.textContent = "Hide";
        }
    });

    toggleSuitBtn.addEventListener('click', function() {
        if (editSuit.style.display === "block") {
            // close
            editSuit.style.display = "none";
            toggleSuitBtn.textContent = "Edit";
        } else {
            // open
            editSuit.style.display = "block";
            toggleSuitBtn.textContent = "Hide";
        }
    });


});
