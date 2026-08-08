// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ==========================================
// NAVBAR ON SCROLL
// ==========================================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(33, 21, 15, 0.92)";

    } else {

        navbar.style.background = "rgba(33, 21, 15, 0.45)";

    }

}); 

// ==========================================
// MENU FILTER
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");

const menuCards = document.querySelectorAll(".menu-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;


        // Active button

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        // Filter cards

        menuCards.forEach(card => {

            const category = card.dataset.category;


            if (filter === "all" || category === filter) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

}); 

// ==========================================
// ANIMATED STATISTICS
// ==========================================

const statNumbers = document.querySelectorAll(".stat-item strong");

const statsSection = document.querySelector(".cafe-stats");

let statsStarted = false;


function startCounters() {

    if (statsStarted) return;

    statsStarted = true;

    statNumbers.forEach(number => {

        const target = Number(number.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 80));

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                number.textContent = target;

                return;

            }

            number.textContent = current;

            requestAnimationFrame(updateCounter);

        };

        updateCounter();

    });

}


const statsObserver = new IntersectionObserver(

    entries => {

        if (entries[0].isIntersecting) {

            startCounters();

        }

    },

    {
        threshold: 0.3
    }

);


if (statsSection) {

    statsObserver.observe(statsSection);

} 

// ==========================================
// RESERVATION FORM
// ==========================================

const reservationForm =
    document.getElementById("reservationForm");

const reservationDate =
    document.getElementById("reservationDate");

const reservationSuccess =
    document.getElementById("reservationSuccess");


// Prevent selecting past dates

const today = new Date().toISOString().split("T")[0];

reservationDate.min = today;


reservationForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("guestName").value.trim();

    const date =
        reservationDate.value;

    const time =
        document.getElementById("reservationTime").value;

    const guests =
        document.getElementById("guests").value;


    if (!name || !date || !time || !guests) {

        reservationSuccess.textContent =
            "Please complete all required fields.";

        reservationSuccess.style.color = "#a33a2b";

        return;

    }


    reservationSuccess.textContent =
        `Thank you, ${name}! Your table request for ${guests} on ${date} at ${time} has been received.`;

    reservationSuccess.style.color = "#47703a";


    reservationForm.reset();

    reservationDate.min = today;

}); 

// ==========================================
// NEWSLETTER
// ==========================================

const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterMessage =
    document.getElementById("newsletterMessage");


newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email =
        document.getElementById("newsletterEmail").value.trim();

    if (!email) {

        newsletterMessage.textContent =
            "Please enter your email.";

        return;

    }

    newsletterMessage.textContent =
        "You're on the list! Welcome to Velvet Brew.";

    newsletterForm.reset();

}); 