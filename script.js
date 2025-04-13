const sounds = {
  click: document.getElementById("clickSound"),
  ribbit: new Audio("assets/ribbit.mp3"),
};

function SendDetails() {
  sounds.click.play();
  const email = document.getElementById("email").value;
  setTimeout(() => {
    alert(
      `Thanks ${
        email || "valued customer"
      }!\nYour data has been securely sold to our partners.`
    );
    sounds.ribbit.play();

    document.querySelectorAll("button").forEach((btn) => {
      btn.style.background = "linear-gradient(to bottom, #ff0000, #cc0000)";
      btn.textContent = "CLICK AGAIN FOR MORE SECURITY";
    });
  }, 800);
}

function Download() {
  sounds.click.play();
  setTimeout(() => {
    alert(
      "Error: Your device has been flagged by the CIA.\nPlease enter credit card details to continue."
    );
    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
  }, 500);
}

setInterval(() => {
  sounds.ribbit.play();
}, 30000);
