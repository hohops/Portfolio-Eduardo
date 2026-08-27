import { motion, useReducedMotion } from "motion/react";
import Dither from "./Dither.jsx";

// TODO: replace the mailto address with your real email
export default function Contact() {
    const reduce = useReducedMotion();
    const revealProps = {
        initial: reduce ? false : { opacity: 0, y: 26 },
        whileInView: reduce ? undefined : { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15, margin: "0px 0px -8% 0px" },
    };

    return (
        <section className="section section--contact" id="contact">
            <div className="contact__bg" aria-hidden="true">
                <Dither
                    waveColor={[
                        0.9764705882352941, 0.45098039215686275,
                        0.08627450980392157,
                    ]}
                    disableAnimation={false}
                    enableMouseInteraction
                    mouseRadius={0.9}
                    colorNum={11}
                    pixelSize={4}
                    waveAmplitude={0.3}
                    waveFrequency={3}
                    waveSpeed={0.05}
                />
            </div>
            <motion.header
                className="section__head"
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                {...revealProps}
            >
                <p className="eyebrow eyebrow--dot">03 — Contact</p>
                <h2 className="section__title">
                    Let&apos;s build something that lasts.
                </h2>
                <p className="section__lede">
                    Open for freelance, collaboration, and full-time roles in
                    tech.
                </p>
            </motion.header>
            <motion.a
                className="cta"
                href="mailto:eduardocostadacruz11@gmail.com"
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                whileHover={
                    reduce
                        ? undefined
                        : {
                              y: -2,
                              filter: "brightness(1.06)",
                              transition: {
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 22,
                              },
                          }
                }
                whileTap={reduce ? undefined : { scale: 0.97 }}
                {...revealProps}
            >
                Say hello
            </motion.a>
        </section>
    );
}
