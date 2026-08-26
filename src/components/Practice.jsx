import Reveal from "./Reveal.jsx";
import Lane from "./Lane.jsx";

const lanes = [
    {
        name: "SysAdmin",
        desc: "Uptime is a feature. I run, monitor, and harden the infrastructure behind the work.",
        tools: ["Linux", "Windows Server", "Networking", "Monitoring"],
    },
    {
        name: "DevSecOps",
        desc: "Security baked into the pipeline — secure builds, hardening, and audits from day one.",
        tools: ["Security Scanning", "SAST", "IAM", "Hardening"],
    },
    {
        name: "DevOps",
        desc: "The glue that ties it together. Pipelines, automation, and environments that behave.",
        tools: ["Docker", "CI/CD", "Cloud", "IaC"],
    },
];

export default function Practice() {
    return (
        <section className="section" id="practice">
            <Reveal as="header" className="section__head">
                <p className="eyebrow eyebrow--dot">02 — Practice</p>
                <h2 className="section__title">Three lanes, one focus.</h2>
                <p className="section__lede">
                    The infrastructure behind the work, the security within it,
                    and the pipeline in between.
                </p>
            </Reveal>
            <div className="lanes">
                {lanes.map((lane, i) => (
                    <Lane key={lane.name} {...lane} delay={i * 0.08} />
                ))}
            </div>
        </section>
    );
}
