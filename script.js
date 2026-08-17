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
    // Pair each dot with the section it links to (the hero has no dot, so
    // nothing is highlighted while you're on it)
    const sectionDot = new Map();
    dots.forEach((dot, i) => sectionDot.set(document.querySelector(dot.getAttribute("href")), i));
    const watermark = $(".watermark");
    const photo = $(".hero__photo");

    let ticking = false;
    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const vh = window.innerHeight;
            const last = sections[sections.length - 1];
            let current = -1;
            sections.forEach((s) => {
                const dotIndex = sectionDot.get(s);
                if (dotIndex === undefined) return;
                // A section takes over once you've scrolled into it — its top
                // reaches its resting position (respects the scroll-margin used
                // when clicking a rail dot). The last section can't always get
                // that far before the page ends, so switch to it once it fills
                // the upper part of the screen instead.
                const reach = s === last
                    ? vh * 0.4
                    : parseFloat(getComputedStyle(s).scrollMarginTop) || 0;
                if (Math.round(s.getBoundingClientRect().top) <= reach) current = dotIndex;
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