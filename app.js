gsap.registerPlugin(ScrollTrigger);

// 1. Progress bar animation
gsap.to("#progress-bar", {
    width: "100%",
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    }
});

// 2. Intro animation with text reveal
const introTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true
    }
});
introTl.from("#intro h2", { opacity: 0, scale: 0.5, duration: 1 })
       .to(".intro-bg", { scale: 1.2, opacity: 0.5, duration: 2 }, 0);

// 3. Staggered section fade-in
gsap.utils.toArray('.scroll-section').forEach((section, i) => {
    const text = section.querySelector('.text-content');
    const image = section.querySelector('.image-content');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    tl.from(text, { opacity: 0, x: i % 2 === 0 ? -100 : 100, duration: 1 })
      .from(image, { opacity: 0, scale: 0.8, duration: 1 }, "-=0.5");
});

// 4. Zagreb Cathedral: Parallax and text background reveal
gsap.to("#cathedral .image-content img", {
    y: -150,
    scrollTrigger: {
        trigger: "#cathedral",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});
gsap.fromTo("#cathedral .text-content", { background: "rgba(255,255,255,0)" }, {
    background: "rgba(255,255,255,0.8)",
    scrollTrigger: {
        trigger: "#cathedral",
        start: "top 40%",
        end: "center center",
        scrub: true
    }
});

// 5. St. Mark's Church: Advanced roof tile colorization
gsap.to("#st-marks-church .image-content img", {
    filter: "grayscale(0%)",
    duration: 1,
    scrollTrigger: {
        trigger: "#st-marks-church",
        start: "top center",
        end: "center center",
        scrub: true
    }
});

// 6. Lotrščak Tower: Dramatic cannon blast effect
const cannonTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#lotrscak-tower",
        start: "top center",
        toggleActions: "play none none reverse"
    }
});
cannonTl.from("#lotrscak-tower .text-content h2", { scale: 3, opacity: 0, duration: 0.5, ease: "power2.out" })
        .from("#lotrscak-tower .text-content p", { opacity: 0, y: 20, duration: 0.5 }, "-=0.2");

// 7. Croatian National Theatre: Advanced curtain reveal
gsap.from("#croatian-national-theatre .image-content", {
    clipPath: "inset(0 50% 0 50%)",
    duration: 1.5,
    ease: "power3.inOut",
    scrollTrigger: {
        trigger: "#croatian-national-theatre",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

// 8. Museum of Broken Relationships: Shattering glass effect
const museumTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#museum-of-broken-relationships",
        start: "top center",
        end: "bottom top",
        scrub: true
    }
});
museumTl.to("#museum-of-broken-relationships .image-content img", {
    filter: "blur(5px)",
    scale: 0.9,
    opacity: 0.5,
    rotation: -5
});

// 9. Dolac Market: Vibrant color splash and item animation
const dolacTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#dolac-market",
        start: "top center",
        end: "center center",
        scrub: true
    }
});
dolacTl.fromTo("#dolac-market .image-content img", { filter: "saturate(0)", scale: 0.8 }, { filter: "saturate(1)", scale: 1 });

// 10. Tesla Museum: Interactive electric charge effect
const teslaSection = document.querySelector("#tesla-museum");
teslaSection.addEventListener("mousemove", e => {
    const { clientX, clientY } = e;
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = teslaSection;
    const x = (clientX - offsetLeft) / offsetWidth - 0.5;
    const y = (clientY - offsetTop) / offsetHeight - 0.5;

    gsap.to("#tesla-museum .text-content", {
        duration: 0.5,
        textShadow: `${x * 20}px ${y * 20}px 10px rgba(0, 230, 230, 0.5)`
    });
});

// 11. Maksimir Park: Horizontal parallax scroll
gsap.to("#maksimir-park .image-content img", {
    x: -200,
    scrollTrigger: {
        trigger: "#maksimir-park",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// 12. Outro: Final message animation
const outroTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#outro",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});
outroTl.from("#outro h2", { opacity: 0, y: 50, duration: 1 })
       .from("#outro p", { opacity: 0, y: 50, duration: 1 }, "-=0.5");