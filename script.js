console.log("SUS");
const boom = document.getElementById('clickSound');

function SendDetails() {
    boom.currentTime = 0;
    boom.play();
    alert("Details Sent");
}