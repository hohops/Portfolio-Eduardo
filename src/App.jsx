import { useEffect } from "react";
import Rail from "./components/Rail.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Features02 from "./components/originkit/features-02.tsx";
import Practice from "./components/Practice.jsx";
import Contact from "./components/Contact.jsx";
import Dock from "./components/Dock.jsx";
import useScrollSpy from "./hooks/useScrollSpy.js";

export default function App() {
    useEffect(() => {
        const raf = requestAnimationFrame(() =>
            document.body.classList.add("loaded")
        );
        return () => cancelAnimationFrame(raf);
    }, []);

    useScrollSpy();

    return (
        <>
            <Rail />
            <main>
                <Hero />
                <About />
                <Features02 />
                <Practice />
                <Contact />
            </main>
            <Dock />
        </>
    );
}
