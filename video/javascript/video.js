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