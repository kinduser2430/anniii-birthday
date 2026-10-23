const letterButton = document.getElementById("letterButton");
const loveLetter = document.getElementById("loveLetter");

const candleButton = document.getElementById("candleButton");
const cake = document.getElementById("cake");
const cakeMessage = document.getElementById("cakeMessage");

const heartButton = document.getElementById("heartButton");
const heartMessage = document.getElementById("heartMessage");
const heartContainer = document.getElementById("heartContainer");

// Surprise 1: Open and close the love letter
letterButton.addEventListener("click", function () {
    loveLetter.classList.toggle("hidden");

    const isHidden = loveLetter.classList.contains("hidden");

    letterButton.textContent = isHidden
        ? "Open your love letter 💗"
        : "Close your love letter 💌";
});

// Surprise 2: Blow out the birthday candles
let candlesBlownOut = false;

candleButton.addEventListener("click", function () {
    candlesBlownOut = !candlesBlownOut;

    if (candlesBlownOut) {
        cake.textContent = "🍰";
        cakeMessage.textContent = "Wish made! May all your dreams come true. ✨";
        candleButton.textContent = "Light the candles again 🕯️";
    } else {
        cake.textContent = "🎂";
        cakeMessage.textContent = "Make a wish, birthday girl! ✨";
        candleButton.textContent = "Blow the candles 🕯️";
    }
});

// Surprise 3: Release floating hearts
heartButton.addEventListener("click", function () {
    heartMessage.classList.remove("hidden");

    const hearts = ["💗", "💕", "💖", "💘", "❤️"];

    for (let i = 0; i < 24; i++) {
        const heart = document.createElement("span");

        heart.className = "floating-heart";
        heart.textContent = hearts[i % hearts.length];

        heart.style.left = Math.random() * 95 + "vw";
        heart.style.fontSize = 18 + Math.random() * 22 + "px";
        heart.style.animationDelay = Math.random() * 0.8 + "s";

        heartContainer.appendChild(heart);

        heart.addEventListener("animationend", function () {
            heart.remove();
        });
    }

    heartButton.textContent = "More love for Anniii 💖";
});
const welcomeScreen = document.getElementById("welcomeScreen");
const openButton = document.getElementById("openSurpriseButton");
const birthdaySong = document.getElementById("birthdaySong");

openButton.addEventListener("click", function () {
  welcomeScreen.classList.add("hide");

  birthdaySong.volume = 0.7;

  birthdaySong.play().catch(function () {
    alert("Tap the music play button to start your song 💗");
  });
});
// PAGE 3: MEMORIES VIDEO
const memoriesButton = document.getElementById("openMemoriesPage");
const page3 = document.getElementById("page3");
const backButton = document.getElementById("backToPage2");
const memoriesVideo = document.querySelector("#page3 video");

if (memoriesButton && page3 && backButton) {

  memoriesButton.addEventListener("click", function () {
    // Stop background music when Page 3 opens
birthdaySong.pause();
birthdaySong.currentTime = 0;
    // Hide Page 2 and show Page 3
    document.querySelector(".birthday-card").hidden = true;
    page3.hidden = false;

    // Try to play the video
    if (memoriesVideo) {
      memoriesVideo.play().catch(function () {
        console.log("Tap play to watch the memories video.");
      });
    }
  });

  backButton.addEventListener("click", function () {
    // Hide Page 3 and return to Page 2
    page3.hidden = true;
    document.querySelector(".birthday-card").hidden = false;

    if (memoriesVideo) {
      memoriesVideo.pause();
      memoriesVideo.currentTime = 0;
    }
  });

}