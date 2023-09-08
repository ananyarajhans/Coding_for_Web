document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("#s5 > button");
    const boxDiv = document.querySelector("#box");

    button.addEventListener("click", function () {
        if (boxDiv.style.visibility === "hidden" || boxDiv.style.visibility === "") {
            boxDiv.style.visibility = "visible";
        } else {
            boxDiv.style.visibility = "hidden";
        }
    });

    function handleViewportChanges() {
        if (window.innerWidth <= 600) {
            document.querySelector("#s5 > div").style.display = "none";
            button.style.display = "block";
        } else {
            document.querySelector("#s5 > div").style.display = "flex";
            button.style.display = "none";
        }
    }

    // Initial handling of viewport width
    handleViewportChanges();

    // Listen for window resize events
    window.addEventListener("resize", handleViewportChanges);
});