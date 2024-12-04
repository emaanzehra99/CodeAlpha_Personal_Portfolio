function myMenuFunction() {
    var MenuBtn = document.getElementById("myNavMenu");

    if (MenuBtn.className === "nav-menu") {
        MenuBtn.className += " responsive";
    } else {
        MenuBtn.className = "nav-menu";
    }

}

// Enabling Dark Mode

const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// Enabling Typing Effect

var typingEffect = new Typed(".typedText", {
    strings: ["A Designer", "A Content Creator", "A Blogger" ,"A Developer", "A Coder"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

// Enabling Scroll Animation 

const scr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

scr.reveal(".featured-name", { delay: 100 });
scr.reveal(".text-info", { delay: 200 });
scr.reveal(".text-btn", { delay: 200 });
scr.reveal(".social-icons", { delay: 200 });
scr.reveal(".featured-img", { delay: 320 });

scr.reveal(".project-bx", { interval: 200 });
scr.reveal(".top-header", {});

const scrLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

scrLeft.reveal(".about-info", { delay: 100 });
scrLeft.reveal(".contact-info", { delay: 100 });

const scrRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

scrRight.reveal(".skills", { delay: 100 });
scrRight.reveal(".skill-bx", { delay: 100 });

// Enabling Active Link

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    })
}

window.addEventListener("scroll", scrollActive);
