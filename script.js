// =============================
// MOBILE MENU
// =============================

const menuBtn = document.getElementById("menu-btn");

const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click",()=>{

    mobileMenu.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll(".mobile-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

    });

});

// =============================
// WHY CHOOSE US ACCORDION
// =============================

const whyCards = document.querySelectorAll(".why-card");

whyCards.forEach(card => {

    card.querySelector(".why-header").addEventListener("click", () => {

        whyCards.forEach(other => {

            if(other !== card){
                other.classList.remove("active");
            }

        });

        card.classList.toggle("active");

    });

});

// =============================
// GALLERY
// =============================

const galleryImages = document.querySelectorAll(".gallery-slider img");

const galleryModal = document.querySelector(".gallery-modal");

const galleryPreview = document.getElementById("gallery-preview");

const closeGallery = document.querySelector(".close-gallery");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        galleryModal.classList.add("active");

        galleryPreview.src = img.src;

    });

});

closeGallery.addEventListener("click", () => {

    galleryModal.classList.remove("active");

});

galleryModal.addEventListener("click", (e) => {

    if(e.target === galleryModal){

        galleryModal.classList.remove("active");

    }

});

// =============================
// AUTO SCROLL REVIEWS
// =============================

const reviewsSlider = document.querySelector(".reviews-slider");

let reviewScroll = 0;

function autoReviewSlide(){

    if(!reviewsSlider) return;

    const card = reviewsSlider.querySelector(".review-card");
if (!card) return;

const cardWidth = card.offsetWidth + 25;

    reviewScroll += cardWidth;

    if(reviewScroll >= reviewsSlider.scrollWidth - reviewsSlider.clientWidth){

        reviewScroll = 0;

    }

    reviewsSlider.scrollTo({

        left:reviewScroll,

        behavior:"smooth"

    });

}

setInterval(autoReviewSlide,4000);

// =============================
// FAQ ACCORDION
// =============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.querySelector(".faq-question").addEventListener("click", () => {

        faqItems.forEach(other => {

            if(other !== item){
                other.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

// Back To Top

const topBtn=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Contact Form

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value || "Not provided";
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector("textarea").value;

        const whatsappMessage =
`Hello Truchoice Plumbing Services,

Name: ${name}
Email: ${email}
Phone: ${phone}

Plumbing Issue:
${message}`;

        const url = `https://wa.me/2348185557685?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, "_blank");

        this.reset();
    });
}

// =============================
// EMERGENCY BAR
// =============================

const emergencyBar = document.querySelector(".emergency-bar");

function showEmergencyBar() {
    emergencyBar.style.transition = "0.5s";
    emergencyBar.style.transform = "translateY(0)";
    emergencyBar.style.opacity = "1";

    setTimeout(() => {
        emergencyBar.style.transform = "translateY(-100%)";
        emergencyBar.style.opacity = "0";
    }, 5000);
}

// Show when page loads
window.addEventListener("load", () => {
    showEmergencyBar();
});

// Show again whenever the user scrolls back to the top
window.addEventListener("scroll", () => {
    if (window.scrollY < 50 && emergencyBar.style.opacity === "0") {
        showEmergencyBar();
    }
});
