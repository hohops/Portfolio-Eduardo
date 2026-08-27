import { motion, useReducedMotion } from "motion/react";

export default function Lane({ name, image, desc, delay }) {
    const reduce = useReducedMotion();

    return (
        <motion.article
            className="lane"
            initial={reduce ? false : { opacity: 0, y: 26 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }}
            whileHover={reduce ? undefined : { y: -6 }}
            whileFocus={reduce ? undefined : { y: -6 }}
            role="article"
            aria-labelledby={`lane-${name.toLowerCase()}`}
        >
            <div className="lane__media" aria-hidden="true">
                <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="lane__image"
                />
                <div className="lane__gradient" />
            </div>

            <div className="lane__content">
                <h3 id={`lane-${name.toLowerCase()}`} className="lane__name">
                    {name}
                </h3>
                <p className="lane__desc">{desc}</p>
            </div>
        </motion.article>
    );
}