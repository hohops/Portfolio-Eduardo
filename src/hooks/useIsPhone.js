import { useEffect, useState } from "react";

// True on phones/portrait tablets — used to drop GPU-heavy WebGL backgrounds
// (hero dot matrix, about globe) that lag on mobile GPUs.
export default function useIsPhone() {
    const query = "(max-width: 768px)";
    const [isPhone, setIsPhone] = useState(() =>
        typeof window !== "undefined"
            ? window.matchMedia(query).matches
            : false
    );

    useEffect(() => {
        const mql = window.matchMedia(query);
        const onChange = () => setIsPhone(mql.matches);
        onChange();
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, []);

    return isPhone;
}
