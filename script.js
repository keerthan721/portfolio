function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
      // Theme Toggle Functionality
      const themeToggle = document.getElementById('themeToggle');
      const themeIcon = document.getElementById('themeIcon');
      const body = document.body;

      // Initialize theme
      let currentTheme = 'dark';

      function toggleTheme() {
        // Add rotation animation
        themeToggle.classList.add('rotating');
        
        // Remove animation after completion
        setTimeout(() => {
          themeToggle.classList.remove('rotating');
        }, 300);

        if (currentTheme === 'dark') {
          currentTheme = 'light';
          body.setAttribute('data-theme', 'light');
          // Sun icon for light mode
          themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="m12 1 0 2m0 18 0 2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12l2 0m18 0 2 0M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
        } else {
          currentTheme = 'dark';
          body.setAttribute('data-theme', 'dark');
          // Moon icon for dark mode
          themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
        }
      }

      // Add event listener to theme toggle
      themeToggle.addEventListener('click', toggleTheme);

      // Mobile menu toggle
      function toggleMenu() {
        const menuLinks = document.querySelector('.menu-links');
        menuLinks.classList.toggle('open');
      }

      function openVideoModal() {
        const modal = document.getElementById('videoModal');
        const video = document.getElementById('demoVideo');
        modal.style.display = 'flex';
        video.currentTime = 0;
        video.play();
      }

      function closeVideoModal() {
        const modal = document.getElementById('videoModal');
        const video = document.getElementById('demoVideo');
        modal.style.display = 'none';
        video.pause();
      }
      function openVideoModal2() {
  const modal = document.getElementById('videoModal2');
  const video = document.getElementById('demoVideo2');
  modal.style.display = 'flex';
  video.currentTime = 0;
  video.play();
}

function closeVideoModal2() {
  const modal = document.getElementById('videoModal2');
  const video = document.getElementById('demoVideo2');
  modal.style.display = 'none';
  video.pause();
}


      const images = [
        './assets/passcracker1.png',
        './assets/passcracker2.png',
        './assets/passcracker3.png',
        './assets/passcracker4.png',
        './assets/passcracker5.png',
      ];

      let currentIndex = 0;

      function openLightbox(index = 0) {
        currentIndex = index;
        document.getElementById('lightboxImage').src = images[currentIndex];
        document.getElementById('imageLightbox').style.display = 'flex';
      }

      function closeLightbox() {
        document.getElementById('imageLightbox').style.display = 'none';
      }

      function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById('lightboxImage').src = images[currentIndex];
      }

      function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        document.getElementById('lightboxImage').src = images[currentIndex];
      }

      function openCertificate(pdfPath) {
        window.open(pdfPath, '_blank');
      }

      // Add smooth scroll behavior
      document.querySelector('.enhanced-arrow').addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector('#certificates');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });

      // Add intersection observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      }, observerOptions);

      // Observe elements for animation
      document.querySelectorAll('.section__text__p1, .title, .about-details-container').forEach(el => {
        observer.observe(el);
      });
        // Form submission handling
        const form = document.querySelector('.contact-form');
        const submitBtn = document.getElementById('submit-btn');
        const formMessage = document.getElementById('form-message');

        function showMessage(message, type) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type} show`;
            formMessage.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.remove('show');
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 300);
            }, 5000);
        }

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.textContent = 'Sending...';
            
            // Get form data
            const formData = new FormData(form);
            
            try {
                // Submit to Netlify
                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                });

                if (response.ok) {
                    showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon! 🚀', 'success');
                    form.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error:', error);
                showMessage('Oops! Something went wrong. Please try again or contact me directly via email. 📧', 'error');
            } finally {
                // Reset button state
                submitBtn.classList.remove('loading');
                submitBtn.textContent = 'Send Message';
            }
        });

        // Enhanced form interactions
        const inputs = document.querySelectorAll('.form-input, .form-textarea');
        
        inputs.forEach(input => {
            // Add focus effects
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
            
            // Add typing effects
            input.addEventListener('input', function() {
                if (this.value.length > 0) {
                    this.style.borderColor = 'var(--text-accent)';
                } else {
                    this.style.borderColor = 'var(--border-color)';
                }
            });
        });

        // Add subtle parallax effect to background
        document.addEventListener('mousemove', function(e) {
            const contactContainer = document.querySelector('.contact-form-container');
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            contactContainer.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px)`;
        });

        // Intersection Observer for animations

