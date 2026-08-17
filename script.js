const progress = document.getElementById("progress");
const percentage = document.getElementById("percentage");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    let value = 0;

    const interval = setInterval(function () {

        value++;

        // Show percentage
        percentage.textContent = value + "%";

        // Convert percentage into degrees
        const degree = value * 3.6;

        // Update progress circle
        progress.style.background = `
            conic-gradient(
                #00e5ff ${degree}deg,
                #333 ${degree}deg
            )
        `;

        // Stop at 100%
        if (value >= 100) {
            clearInterval(interval);
        }

    }, 30);

});