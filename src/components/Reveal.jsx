import { motion, useReducedMotion } from "motion/react";

export default function Reveal({ as = "div", delay = 0, className = "", children }) {
    const reduce = useReducedMotion();
    const Comp = motion[as];

    return (
        <Comp
            className={className}
            initial={reduce ? false : { opacity: 0, y: 26 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }}
        >
            {children}
        </Comp>
    );
}
