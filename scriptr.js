/* =====================================================
   CLOSE MOBILE NAVBAR AFTER CLICKING A NAV LINK
===================================================== */
document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        const navbarContent =
            document.getElementById("navbarContent");

        const collapse =
            bootstrap.Collapse.getInstance(navbarContent);

        if (collapse) {
            collapse.hide();
        }
    });
});

/* =====================================================
   CLOSE MOBILE NAVBAR AFTER CLICKING DOWNLOAD RESUME
===================================================== */
const downloadButton =
    document.querySelector(".download-resume");

if (downloadButton) {
    downloadButton.addEventListener("click", function () {
        const navbarContent =
            document.getElementById("navbarContent");

        const collapse =
            bootstrap.Collapse.getInstance(navbarContent);

        if (collapse) {
            collapse.hide();
        }
    });
}

/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */
window.addEventListener("scroll", function () {
    const navbar =
        document.querySelector(".portfolio-navbar");

    if (window.scrollY > 30) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

/* =====================================================
   TYPING ROLE ANIMATION
===================================================== */
const typingText = document.getElementById("typing-text");

if (typingText) {
    const roles = [
        "UI Designer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeRole() {
        const currentRole = roles[roleIndex];

        if (!isDeleting) {
            charIndex++;
            typingText.textContent = currentRole.slice(0, charIndex);

            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeRole, 1000);
                return;
            }
        } else {
            charIndex--;
            typingText.textContent = currentRole.slice(0, charIndex);

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        const speed = isDeleting ? 70 : 120;
        setTimeout(typeRole, speed);
    }

    typeRole();
}