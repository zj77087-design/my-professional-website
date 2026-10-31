// =====================================
// ZJ DIGITAL STUDIO - MAIN JAVASCRIPT
// =====================================


// 1. AUTOMATIC FOOTER YEAR
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 2. MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
    if (!menuToggle || !navLinks) return;

    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
}

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });


    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });


    // Close menu when clicking outside
    document.addEventListener("click", event => {

        if (
            !menuToggle.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {
            closeMenu();
        }

    });


    // Close menu with Escape key
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

}


// 3. SCROLL REVEAL ANIMATIONS
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("show");
    });

}


// 4. WHATSAPP PROJECT INQUIRY FORM
const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", event => {

        event.preventDefault();

        if (!orderForm.reportValidity()) {
            return;
        }

        const clientName = document
            .getElementById("clientName").value.trim();

        const clientContact = document
            .getElementById("clientContact").value.trim();

        const projectType = document
            .getElementById("projectType").value;

        const projectBudget = document
            .getElementById("projectBudget").value;

        const projectDetails = document
            .getElementById("projectDetails").value.trim();


        // Portfolio WhatsApp number
        const whatsappNumber = "923055078997";


        // Prepare inquiry message
        const message = `
NEW PROJECT INQUIRY

Name: ${clientName}

Contact: ${clientContact}

Project Type: ${projectType}

Estimated Budget: ${projectBudget}

Project Details:
${projectDetails}

Sent through ZJ Digital Studio Portfolio.
        `.trim();


        // Encode message for WhatsApp
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        // Open WhatsApp
        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}


// 5. CLOSE MOBILE MENU WHEN WINDOW RESIZES
window.addEventListener("resize", () => {

    if (window.innerWidth > 850) {
        closeMenu();
    }

});


console.log("ZJ Digital Studio website loaded successfully.");