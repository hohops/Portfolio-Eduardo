import { motion, useReducedMotion } from "motion/react";

export default function Lane({ name, desc, tools, delay }) {
    const reduce = useReducedMotion();

    return (
        <motion.article
            className="lane"
            initial={reduce ? false : { opacity: 0, y: 26 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }}
            whileHover={reduce ? undefined : { y: -3 }}
        >
            <span className="lane__dot" aria-hidden="true"></span>
            <h3 className="lane__name">{name}</h3>
            <p className="lane__desc">{desc}</p>
            <ul className="lane__tools">
                {tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                ))}
            </ul>
        </motion.article>
    );
}
