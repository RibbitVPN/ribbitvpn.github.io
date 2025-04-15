let adnum = Math.random() * 3

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  window.location.href = "mobile.html";
}

function changead(num) {
  document.getElementById('advertisment').src='assets/ads/ad' + num + '.png';
  console.log("changed ad to " + num);
  switch (num) {
    case 1:
      document.getElementById('advertisment').href='https://minecraft-server-list.com/server/511352/vote/';
    case 2:
      document.getElementById('advertisment').href='https://discord.gg/5Q7xCZGF6z';
    case 3:
      document.getElementById('advertisment').href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      break;
  }
}

const sounds = {
  ribbit: new Audio("assets/ribbit.mp3"),
  linux: new Audio("assets/linux.mp3"),
  bimbows: new Audio("assets/windows.mp3"),
  macos: new Audio("assets/macos.mp3"),
};

function SendDetails() {
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

function OS(number) {
  switch (number) {
    case 1:
      sounds.linux.play();
    case 2:
      sounds.bimbows.play();
    case 3:
      sounds.macos.play();
  }
  alert("Downloading");
  location.replace("timeout.html");
}

setInterval(() => {
  sounds.ribbit.play();
}, 30000);

function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.style.display =
    chatWindow.style.display === "block" ? "none" : "block";
  document.getElementById("ribbit").play();
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();

  if (message) {
    addMessage(message, "user");

    setTimeout(() => {
      const responses = [
        "Interesting question! We'll ignore that.",
        "Our team of experts is on this.",
        "Have you tried turning it off and on again?",
        "That sounds like a you problem.",
        "We value your feedback.",
        "This is definitely not a scam. Trust us.",
        "Our records show you owe us $500,000. Please pay immediately.",
        "All our representatives are currently avoiding customers.",
        "Buy some Ribbit Coin!",
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      addMessage(randomResponse, "bot");
    }, 500 + Math.random() * 1500);

    input.value = "";
  }
}

function addMessage(text, sender) {
  const chatBody = document.getElementById("chatBody");
  const message = document.createElement("div");
  message.className = `chat-message ${sender}`;
  message.textContent = text;
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}

document.getElementById("chatInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendChatMessage();
  }
});

function SendDetails() {
  const email = document.getElementById("email").value;
  setTimeout(() => {
    alert(
      `Thanks ${
        email || "valued customer"
      }!\nYour data has been securely sold to our partners.`
    );
    document.getElementById("ribbit").play();
  }, 800);
}

function Download() {
  setTimeout(() => {
    let result = window.prompt(
      "Error: Your device has been flagged by the CIA.\nPlease enter credit card details to continue.",
      "Ribbit"
    );
    if (result === "Ribbit") {
      alert("RIBBIT");
    } else {
      alert("Invalid input. Please try again.");
    }
  }, 500);
}

changead(Math.floor(adnum) + 1);