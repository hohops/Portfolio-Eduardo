import { useEffect, useState } from "react";
import { animate, createTimeline } from "animejs";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "motion/react";
import DottedBackground from "./originkit/ui/dotmatrix.tsx";
import MeshText from "./originkit/ui/meshtexthover.tsx";
import useIsPhone from "../hooks/useIsPhone.js";

const titleFont = {
    fontFamily: "'Archivo Expanded Black'",
    variant: "Black",
};

// Track the h1's CSS scale (clamp(64px, 13vw, 190px)) so the canvas
// glyphs match the line box at every breakpoint.
function useTitleFontSize() {
    const calc = () =>
        Math.round(Math.min(Math.max(window.innerWidth * 0.13, 64), 170));
    const [size, setSize] = useState(calc);

    useEffect(() => {
        const onResize = () => setSize(calc());
        window.addEventListener("resize", onResize, { passive: true });
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return size;
}

export default function Hero() {
    const reduce = useReducedMotion();
    const titleSize = useTitleFontSize();
    const titleFontProps = { ...titleFont, fontSize: titleSize };
    const isPhone = useIsPhone();
    const { scrollY } = useScroll();
    // Parallax factors preserved from the original script (0.18 / 0.05)
    const watermarkY = useTransform(scrollY, (y) => y * 0.18);
    const photoY = useTransform(scrollY, (y) => y * 0.05);

    useEffect(() => {
        if (reduce) return;

        const photoTarget =
            window.matchMedia("(max-width: 640px)").matches ? 0.7 : 0.92;

        const tl = createTimeline({
            defaults: { ease: "outExpo" },
        });

        tl.add(".watermark", {
            opacity: [0, 1],
            duration: 1200,
            ease: "outQuad",
        })
            .add(".hero__photo", {
                opacity: [0, photoTarget],
                duration: 1200,
                ease: "outQuad",
            }, 0)
            .add(
                ".hero__line:nth-child(1) .hero__line-inner",
                { translateY: ["112%", "0%"], duration: 1100 },
                0
            )
            .add(
                ".hero__line:nth-child(2) .hero__line-inner",
                { translateY: ["112%", "0%"], duration: 1100 },
                100
            )
            .add(".hero__eyebrow", {
                opacity: [0, 1],
                translateY: [14, 0],
                duration: 700,
            }, 150)
            .add(".hero__role", {
                opacity: [0, 1],
                translateY: [14, 0],
                duration: 700,
            }, 300)
            .add(".hero__tag", {
                opacity: [0, 1],
                translateY: [14, 0],
                duration: 700,
            }, 400);

        return () => tl.pause();
    }, [reduce]);

    return (
        <section className="hero" id="top">
            {!isPhone && (
                <div className="hero__matrix" aria-hidden="true">
                    <DottedBackground
                        bgColor="#0A0A0C"
                        colors={["#F4F5F7", "#FF5A1F", "#0A0A0C"]}
                    />
                </div>
            )}

            <motion.span
                className="watermark"
                style={{ y: watermarkY }}
                aria-hidden="true"
            >
                Eduardo Cruz
            </motion.span>

            <motion.figure
                className="hero__photo"
                style={{ y: photoY }}
                aria-hidden="true"
            >
                <img src="/Grupo%202.png" alt="" />
            </motion.figure>

            <div className="hero__content">
                <p className="eyebrow hero__eyebrow">Portfolio — Lisbon, PT</p>
                <h1 className="hero__title" aria-label="Eduardo Cruz">
                    <span className="hero__line">
                        <span className="hero__line-inner hero__line-inner--mesh">
                            <MeshText
                                text="Eduardo"
                                color="#F4F5F7"
                                font={titleFontProps}
                                colorSplit={true}
                                customColors={["#FF5A1F", "#F4F5F7"]}
                            />
                        </span>
                    </span>
                    <span className="hero__line">
                        <span className="hero__line-inner hero__line-inner--mesh">
                            <MeshText
                                text="Cruz"
                                color="#F4F5F7"
                                font={titleFontProps}
                                colorSplit={true}
                                customColors={["#FF5A1F", "#F4F5F7"]}
                            />
                        </span>
                    </span>
                </h1>
                <p className="hero__role">SysAdmin · DevSecOps · DevOps</p>
                <p className="hero__tag">
                    Systems you can count on. Interfaces people remember.
                </p>
            </div>

            <div className="scroll-cue" aria-hidden="true">
                <span>Scroll</span>
                <span className="scroll-cue__track"></span>
            </div>
        </section>
    );
}
