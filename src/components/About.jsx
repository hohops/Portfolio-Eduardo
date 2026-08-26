import Reveal from "./Reveal.jsx";

const facts = [
    { term: "Location", detail: "Lisbon, PT" },
    { term: "Focus", detail: "Systems · Security · Automation" },
    { term: "Status", detail: "Open to collaborate" },
];

export default function About() {
    return (
        <section className="section" id="about">
            <Reveal as="header" className="section__head">
                <p className="eyebrow eyebrow--dot">01 — About</p>
                <h2 className="section__title">
                    Rooted in Lisbon.
                    <br />
                    Building for the web.
                </h2>
            </Reveal>
            <Reveal as="p" className="about__copy">
                Hi, I&apos;m Eduardo. I keep systems alive, ship interfaces people
                actually use, and automate everything in between — with a genuine{" "}
                <span className="hl">passion for IT</span>. Always down to connect
                and collaborate.
            </Reveal>
            <Reveal as="dl" className="facts">
                {facts.map(({ term, detail }) => (
                    <div className="fact" key={term}>
                        <dt>{term}</dt>
                        <dd>{detail}</dd>
                    </div>
                ))}
            </Reveal>
        </section>
    );
}
