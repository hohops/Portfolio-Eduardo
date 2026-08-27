import Globe from "./originkit/ui/globe";
import useIsPhone from "../hooks/useIsPhone.js";

const FACTS = [
    { value: "Lisbon, PT", label: "Based in Portugal, working everywhere" },
    {
        value: "3 Lanes",
        label: "Systems · Security · Automation",
    },
    { value: "Open", label: "Available to collaborate" },
];

export default function About() {
    const isPhone = useIsPhone();
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="relative overflow-hidden scroll-mt-12 px-4 py-10 text-white md:min-h-[62rem] sm:px-6 sm:py-0"
        >
            {/* Globe field — same treatment as Originkit features-02 */}
            <div
                aria-hidden="true"
                className="relative h-106 w-full shrink-0 overflow-hidden md:absolute md:inset-x-0 md:top-0 md:h-[60rem]"
            >
                <div className="absolute inset-0">
                    <div className="pointer-events-none absolute left-1/2 top-67 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),transparent_70%)] sm:top-92.375 sm:h-82.75 sm:w-82.75" />

                    {!isPhone && (
                        <div className="pointer-events-auto absolute right-2 top-0 size-[40rem] cursor-grab touch-none active:cursor-grabbing opacity-60 sm:right-8 sm:top-0 sm:size-[60rem]">
                            <div className="relative size-full">
                                <Globe
                                    direction="right"
                                    dots={{
                                        color: "#FF5A1F",
                                        size: 10,
                                        density: 4,
                                        allDots: false,
                                    }}
                                    speed={1}
                                    smoothing={0}
                                    stopOnHover={false}
                                    showOutline={false}
                                    showGrid={false}
                                    oceanColor="#0A0A0C"
                                    scale={9}
                                    initialLatitude={38.7223}
                                    initialLongitude={-9.1393}
                                    markerConfig={{
                                        markers: [
                                            { lat: 38.7223, lng: -9.1393 },
                                        ],
                                        color: "#0A84FF",
                                        size: 45,
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>

            </div>

            <div className="pointer-events-none relative z-10 flex w-full flex-1 flex-col items-center pt-4 sm:min-h-197.5 sm:pt-104">
                <header className="flex w-full max-w-220.5 flex-col items-center gap-4 px-2 text-center -mt-36 sm:mt-0 md:-mt-2">
                    <div className="flex flex-col items-center gap-4 sm:gap-5">
                        <h2
                            id="about-heading"
                            className="font-tight text-[clamp(2.125rem,8vw,2.75rem)] font-bold leading-[1.2] tracking-[-0.01em] text-balance text-white [text-shadow:0_8px_30px_rgba(255,255,255,0.25),0_4px_8px_rgba(255,255,255,0.05)] ipad-landscape:text-[44px] desktop-sm:text-[clamp(2.125rem,8vw,3.625rem)]"
                        >
                            Rooted in Lisbon.
                            <br />
                            Building for the web.
                        </h2>

                        <p className="max-w-2xl font-medium leading-normal text-balance text-[#9297a0] text-[18px]">
                            Hi, I&apos;m Eduardo. I keep systems alive, ship
                            interfaces people actually use, and automate
                            everything in between, with a genuine{" "}
                            <span className="text-[#FF5A1F]">
                                passion for IT
                            </span>
                            . Always down to connect and collaborate.
                        </p>
                    </div>
                </header>

                <div
                    aria-hidden="true"
                    className="hidden min-h-10 flex-1 ipad-landscape:block"
                />

                <ul className="pointer-events-auto mt-8 mb-16 grid w-full max-w-140 shrink-0 sm:mt-10 sm:mb-16 desktop-sm:mt-0 ipad-landscape:max-w-none ipad-landscape:grid-cols-3 ipad-landscape:my-16">
                    {FACTS.map((fact, index) => (
                        <li
                            key={fact.value}
                            className="relative flex w-full max-w-81.75 mx-auto flex-col self-center items-center gap-6 py-8 text-center ipad-landscape:max-w-none ipad-landscape:self-auto ipad-landscape:gap-6 ipad-landscape:px-6 ipad-landscape:py-0"
                        >
                            <span className="bg-linear-to-br from-white to-white/50 bg-clip-text font-tight text-[34px] font-semibold tabular-nums leading-[1.2] tracking-[-0.04em] text-transparent [text-shadow:0_8px_30px_rgba(255,255,255,0.25),0_4px_8px_rgba(255,255,255,0.05)] ipad-landscape:text-[44px] desktop-sm:text-[58px]">
                                {fact.value}
                            </span>

                            <span className="text-[18px] font-medium leading-normal text-[#6b707a] ipad-landscape:max-w-[200px] desktop-sm:max-w-none">
                                {fact.label}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
