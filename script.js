/* ==================================================
                    MOBILE MENU
================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close mobile menu */

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });



/* ==================================================
                    DARK MODE
================================================== */

const themeBtn =
    document.getElementById("themeBtn");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.textContent = "☀️";

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    const isDark =
        document.body.classList.contains("dark-mode");


    if (isDark) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    }

    else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});



/* ==================================================
                    COUNTER ANIMATION
================================================== */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver((entries) => {


        entries.forEach(entry => {


            if (!entry.isIntersecting) {

                return;

            }


            const counter =
                entry.target;


            const target =
                Number(counter.dataset.target);


            let current = 0;


            const increment =
                Math.max(
                    1,
                    Math.ceil(target / 50)
                );


            const updateCounter = () => {


                current += increment;


                if (current >= target) {

                    counter.textContent =
                        target;

                }

                else {

                    counter.textContent =
                        current;

                    requestAnimationFrame(
                        updateCounter
                    );

                }

            };


            updateCounter();


            counterObserver.unobserve(counter);

        });

    });


counters.forEach(counter => {

    counterObserver.observe(counter);

});



/* ==================================================
                    PROJECT FILTER
================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");


const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {


    button.addEventListener("click", () => {


        /* Active button */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        /* Selected category */

        const filter =
            button.dataset.filter;


        /* Filter projects */

        projectCards.forEach(card => {


            const categories =
                card.dataset.category;


            if (
                filter === "all" ||
                categories.includes(filter)
            ) {

                card.style.display =
                    "block";

            }

            else {

                card.style.display =
                    "none";

            }

        });

    });

});



/* ==================================================
                    CURRENT YEAR
================================================== */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();