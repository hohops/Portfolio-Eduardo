document.addEventListener("DOMContentLoaded", () => {
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    requestAnimationFrame(() => document.body.classList.add("loaded"));

    // Scroll reveal
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in");
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    $$(".reveal").forEach((el) => io.observe(el));

    // Rail scroll-spy + subtle parallax
    const sections = $$("main section[id]");
    const dots = $$(".rail__dot");
    const watermark = $(".watermark");
    const photo = $(".hero__photo");

    let ticking = false;
    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            let current = 0;
            sections.forEach((s, i) => {
                if (s.getBoundingClientRect().top <= window.innerHeight * 0.4) current = i;
            });
            dots.forEach((dot, i) => dot.classList.toggle("is-active", i === current));

            if (!prefersReduced) {
                const y = window.scrollY;
                if (watermark) watermark.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
                if (photo) photo.style.transform = `translate3d(0, ${y * 0.05}px, 0)`;
            }
            ticking = false;
        });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
});