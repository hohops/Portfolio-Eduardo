const links = [
    { href: "#about", label: "01 About" },
    { href: "#practice", label: "02 Practice" },
    { href: "#contact", label: "03 Contact" },
];

export default function Rail() {
    return (
        <nav className="rail" aria-label="Sections">
            {links.map(({ href, label }) => (
                <a className="rail__dot" href={href} key={href}>
                    <span className="rail__label">{label}</span>
                </a>
            ))}
        </nav>
    );
}
