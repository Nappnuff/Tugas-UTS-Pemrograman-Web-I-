document.getElementsByTagName("h1")[0].style.fontSize = "3vw";

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

// jumbotron
const details = [
    {
        name: "Reza Ridwan",
        nim: "2305176056",
        quote: "Belajar adalah perjalanan tanpa akhir.",
        src: "image/reza.png"
    },
    {
        name: "Nafian Sulton Aulia",
        nim: "2305176061",
        quote: "Teknologi adalah seni dalam bentuk lain.",
        src: "image/napian.png"
    },
    {
        name: "Kartika Hayuningrum",
        nim: "2305176045",
        quote: "Jaringan adalah tulang punggung dunia digital.",
        src: "image/kartika.png"
    },
    {
        name: "Nur Isra Muchlis",
        nim: "2305176066",
        quote: "Koding adalah cara berpikir, bukan sekadar menulis kode.",
        src: "image/isra.png"
    }
];

function showDetails(index) {
    document.getElementById("detail-name").textContent = details[index].name;
    document.getElementById("detail-nim").textContent = details[index].nim;
    document.getElementById("detail-quote").textContent = `\"${details[index].quote}\"`;
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("detail-image").src = details[index].src;
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}