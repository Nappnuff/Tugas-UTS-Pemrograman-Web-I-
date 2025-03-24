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


// efek zoom gambar
function zoomUntilDisappear() {
    const scrollY = window.scrollY; 
    const img = document.querySelector('.zoom-image');
    const text = document.querySelector('.hidden-text');

    // Perbesar gambar secara bertahap
    const scaleValue = 1 + scrollY / 100; 
    const opacityValue = Math.max(0, 1 - scrollY / 400);

    img.style.transform = `scale(${scaleValue})`;
    img.style.opacity = opacityValue;

    // Tampilkan teks setelah gambar hilang
    text.style.opacity = opacityValue === 0 ? 1 : 0;
}

function revealContentOnScroll() {
    const sections = document.querySelectorAll('.content-section');
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            setTimeout(() => {
                section.classList.add('show');
            }, index * 250);
        }
    });
}

window.addEventListener('scroll', zoomUntilDisappear);
window.addEventListener('scroll', revealContentOnScroll);
// efek zoom gambar


// efek zoom text
let lastScrollTop = 0;
let elements = document.querySelectorAll(".fade-text");
let states = new Map();
let bottomMessages = document.querySelectorAll(".bottom-text");

elements.forEach(el => {
    states.set(el, { scaleValue: 1, opacityValue: 1 });
});

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    elements.forEach(el => {
        let container = el.closest(".fade-text-container");
        let bottomMessage = container.nextElementSibling?.querySelector(".bottom-text");
        let rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const centerThreshold = windowHeight * 0.6;
        let state = states.get(el);

        if (rect.top < centerThreshold && rect.bottom > centerThreshold / 2) {
            if (scrollTop > lastScrollTop && state.scaleValue < 4) {
                state.scaleValue += 0.05; 
                state.opacityValue -= 0.02;
            } else if (scrollTop < lastScrollTop && state.scaleValue > 1) {
                state.scaleValue -= 0.05;
                state.opacityValue += 0.02;
            }

            state.scaleValue = Math.max(1, Math.min(state.scaleValue, 4));
            state.opacityValue = Math.max(0.2, Math.min(state.opacityValue, 1));
            
            el.style.transform = `scale(${state.scaleValue})`;
            el.style.opacity = state.opacityValue;
        }

        // Jika teks terakhir dalam container ini hilang, tampilkan bottom-text dengan efek fade-in
        if (bottomMessage) {
            if (state.opacityValue <= 0.2) {
                bottomMessage.style.opacity = 1;
                bottomMessage.style.transition = "opacity 0.5s ease-in-out";
            } else {
                bottomMessage.style.opacity = 0;
            }
        }
    });
    
    lastScrollTop = scrollTop;
});
// efek zoom text


document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll(".hidden-keamanan");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show-keamanan");
                }, index * 300); // Efek muncul satu per satu
            }
        });
    }, { threshold: 0.3 });
    
    hiddenElements.forEach(el => observer.observe(el));
});