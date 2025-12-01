// (function () {
//     // This entire script is wrapped in an immediately-invoked function expression (IIFE).
//     // It's a way to encapsulate the code and prevent variables from polluting the global scope.
//
//     // Select all elements with the class "control" and convert the NodeList to an array using the spread operator.
//     [...document.querySelectorAll(".control")].forEach(button => {
//       // For each button, add a click event listener.
//       button.addEventListener("click", function() {
//         // Remove the "active-btn" class from the element with the class "active-btn".
//         document.querySelector(".active-btn").classList.remove("active-btn");
//
//         // Add the "active-btn" class to the clicked button.
//         this.classList.add("active-btn");
//
//         // Remove the "active" class from the element with the class "active".
//         document.querySelector(".active").classList.remove("active");
//
//         // Add the "active" class to the element with the ID specified in the clicked button's data-id attribute.
//         document.getElementById(button.dataset.id).classList.add("active");
//       });
//     });
//
//     // Add a click event listener to the element with the class "theme-btn".
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//       // Toggle the "light-mode" class on the body element.
//       document.body.classList.toggle("light-mode");
//     });
//   })();
(function () {
    // This entire script is wrapped in an immediately-invoked function expression (IIFE).
    // It's a way to encapsulate the code and prevent variables from polluting the global scope.

    // Select all elements with the class "control" and convert the NodeList to an array using the spread operator.
    [...document.querySelectorAll(".control")].forEach(button => {
      // For each button, add a click event listener.
      button.addEventListener("click", function() {
        // Remove the "active-btn" class from the element with the class "active-btn".
        document.querySelector(".active-btn").classList.remove("active-btn");

        // Add the "active-btn" class to the clicked button.
        this.classList.add("active-btn");

        // Remove the "active" class from the element with the class "active".
        document.querySelector(".active").classList.remove("active");

        // Add the "active" class to the element with the ID specified in the clicked button's data-id attribute.
        document.getElementById(button.dataset.id).classList.add("active");
      });
    });

    // Add a click event listener to the element with the class "theme-btn".
    document.querySelector(".theme-btn").addEventListener("click", () => {
      // Toggle the "light-mode" class on the body element.
      document.body.classList.toggle("light-mode");
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Simple validation
            if(!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Here you would normally send the data to a server
            // For now, just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links (if you add any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only handle hash links that aren't for section navigation
            if(this.classList.contains('control') || this.parentElement.classList.contains('control')) {
                return;
            }

            e.preventDefault();

            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Download CV button functionality
    const downloadBtns = document.querySelectorAll('.main-btn[download]');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if(!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('CV download will be available soon! Please ensure your CV file is named LOUIS_BONHEUR_ABIZEYE_CV.pdf and placed in the root folder.');
            }
        });
    });

    // Portfolio item hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add loading animation for progress bars
    window.addEventListener('load', function() {
        // Animate progress bars
        const progressBars = document.querySelectorAll('.progress span');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
                bar.style.transition = 'width 1.5s ease-in-out';
            }, 500);
        });

        // Add loaded class to body for potential CSS transitions
        document.body.classList.add('loaded');
    });

    // Research card hover effects
    const researchCards = document.querySelectorAll('.research-card');
    researchCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });

    // Publication item hover effects
    const pubItems = document.querySelectorAll('.pub-item');
    pubItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Image preloading for better performance
    function preloadImages() {
        const images = [
            'img/bobo.jpg',
            'img/mobilenet-project.jpg',
            'img/github-mining.jpg',
            'img/teaching-platform.jpg',
            'img/iot-system.jpg',
            'img/causal-analysis.jpg',
            'img/research-tools.jpg'
        ];

        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    // Start preloading images when DOM is ready
    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', preloadImages);
    } else {
        preloadImages();
    }

    // Update current year in footer (if you add one later)
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Only handle if not in an input field
        if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        const activeBtn = document.querySelector('.control.active-btn');
        const controls = [...document.querySelectorAll('.control')];
        const currentIndex = controls.indexOf(activeBtn);

        // Left arrow or up arrow - previous section
        if((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && currentIndex > 0) {
            e.preventDefault();
            controls[currentIndex - 1].click();
        }
        // Right arrow or down arrow - next section
        else if((e.key === 'ArrowRight' || e.key === 'ArrowDown') && currentIndex < controls.length - 1) {
            e.preventDefault();
            controls[currentIndex + 1].click();
        }
        // Home key - first section
        else if(e.key === 'Home') {
            e.preventDefault();
            controls[0].click();
        }
        // End key - last section
        else if(e.key === 'End') {
            e.preventDefault();
            controls[controls.length - 1].click();
        }
    });

    // Add touch/swipe support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if(Math.abs(diff) > swipeThreshold) {
            const activeBtn = document.querySelector('.control.active-btn');
            const controls = [...document.querySelectorAll('.control')];
            const currentIndex = controls.indexOf(activeBtn);

            // Swipe left - next section
            if(diff > 0 && currentIndex < controls.length - 1) {
                controls[currentIndex + 1].click();
            }
            // Swipe right - previous section
            else if(diff < 0 && currentIndex > 0) {
                controls[currentIndex - 1].click();
            }
        }
    }

    // Add a simple scroll-to-top button (optional)
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--color-secondary);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if(window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Add CSS for scroll button to work with theme
    const style = document.createElement('style');
    style.textContent = `
        .scroll-top-btn:hover {
            background-color: var(--color-primary);
            transform: translateY(-3px);
            transition: all 0.3s ease;
        }
        
        body.light-mode .scroll-top-btn {
            background-color: var(--color-secondary);
            color: var(--color-white);
        }
    `;
    document.head.appendChild(style);
  })();