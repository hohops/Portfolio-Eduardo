import { useEffect } from "react";

export default function useScrollSpy() {
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("main section[id]"));
        const dots = Array.from(document.querySelectorAll(".rail__dot"));

        // Pair each dot with the section it links to (the hero has no dot, so
        // nothing is highlighted while you're on it)
        const sectionDot = new Map();
        dots.forEach((dot, i) =>
            sectionDot.set(document.querySelector(dot.getAttribute("href")), i)
        );

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
                    // A section takes over once its top reaches its resting
                    // position; the last section switches over earlier since
                    // it can't always scroll that far before the page ends.
                    const reach =
                        s === last
                            ? vh * 0.4
                            : parseFloat(getComputedStyle(s).scrollMarginTop) || 0;
                    if (Math.round(s.getBoundingClientRect().top) <= reach)
                        current = dotIndex;
                });
                dots.forEach((dot, i) =>
                    dot.classList.toggle("is-active", i === current)
                );
                ticking = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
}
