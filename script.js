
document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

document.getElementById('hamburger-btn').addEventListener('click', function () {
    let menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');

    // Jika menu terlihat, pastikan tetap bisa diklik
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('absolute', 'top-full', 'left-0', 'w-full');
    } else {
        menu.classList.remove('absolute', 'top-full', 'left-0', 'w-full');
    }
});
// mobile navbar

// caroussel
document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi Slider
    const slider = document.getElementById("slider");
    const images = slider.children.length;
    let index = 0;

    document.getElementById("next").addEventListener("click", () => {
        index = (index + 1) % images;
        updateSlider();
    });

    document.getElementById("prev").addEventListener("click", () => {
        index = (index - 1 + images) % images;
        updateSlider();
    });

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function autoPlay() {
        index = (index + 1) % images;
        updateSlider();
    }

    setInterval(autoPlay, 7000); // Auto slide setiap 7 detik
// end carouel
    // Menjalankan notifikasi saat halaman pertama kali dimuat
    showNotification();
});

// Notif
document.addEventListener("visibilitychange", function () {
    if (!document.hidden) {
        showNotification();
    }
});

// Fungsi untuk menampilkan notifikasi
function showNotification() {
    let notification = document.getElementById("notification");
    notification.classList.remove("hidden");
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 3000);
}

// end notif

// jam
function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    flipDigit(document.getElementById("hours"), hours);
    flipDigit(document.getElementById("minutes"), minutes);
    flipDigit(document.getElementById("seconds"), seconds);
}

function flipDigit(flipCard, newValue) {
    let topHalf = flipCard.querySelector(".top");
    let bottomHalf = flipCard.querySelector(".bottom");
    let flipTop = flipCard.querySelector(".flip-top");
    let flipBottom = flipCard.querySelector(".flip-bottom");

    let currentValue = topHalf.textContent;
    if (currentValue === newValue) return;

    flipTop.textContent = currentValue;
    flipBottom.textContent = newValue;

    flipTop.style.animation = "flip 0.6s ease-in-out";
    flipBottom.style.animation = "flip 0.6s ease-in-out reverse";

    setTimeout(() => {
        topHalf.textContent = newValue;
        bottomHalf.textContent = newValue;
        flipTop.style.animation = "";
        flipBottom.style.animation = "";
    }, 600);
}

setInterval(updateClock, 1000);
updateClock();
// end jam


function showContent(id) {
    document.querySelectorAll('.content').forEach(el => el.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }



  const btn = document.querySelector(".btn");
  const park_sec = document.querySelectorAll(".park_sec");
  
  var sendFlag = 0;
  
  btn.addEventListener("click",function(){
      this.classList.toggle("active");
  
      if(sendFlag === 0){
          sendFlag = 1;
          this.textContent = "Hide";
          park_sec.forEach(function(item){
              item.classList.add("active");
          });
      }
      else{
          sendFlag = 0;
          this.textContent = "Show All";
          park_sec.forEach(function(item){
              item.classList.remove("active");
          });
      }
     
  });