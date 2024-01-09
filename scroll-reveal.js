// Initialized the Scroll-Reveal component
ScrollReveal({
  distance: "40px",
  duration: 2000,
});

// Common configuration for Scroll Reveal rules
const commonConfig = {
  delay: 200,
};

// Customization of Scroll Reveal rules for different classes
ScrollReveal().reveal(
  ".main-nav, #sub-para, .primary-button, .features-heading-text",
  {
    ...commonConfig,
    origin: "top",
  }
);

ScrollReveal().reveal(".features-card, .popup-premium", {
  ...commonConfig,
  origin: "top",
});

ScrollReveal().reveal(".popup-basic, .popup-ultimate", {
  ...commonConfig,
  origin: "top",
});

ScrollReveal().reveal(".hero-image, .right, .feature-image-right", {
  ...commonConfig,
  origin: "right",
});

ScrollReveal().reveal(".feature-image-left, .left", {
  ...commonConfig,
  origin: "left",
});

ScrollReveal().reveal(".footer-content", {
  ...commonConfig,
  origin: "bottom",
});
