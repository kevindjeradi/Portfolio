// useVanta.js
import { useEffect, useState } from 'react';

function useVanta() {
    const [vantaEffect, setVantaEffect] = useState(0);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(window.VANTA.BIRDS({
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0xffffff,
                color1: 0x97B5C7,
                color2: 0x000000,
                birdSize: 1.30,
                backgroundAlpha: 0,
                separation: 100.00,
                quantity: 2.30
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        }
    }, [vantaEffect]);

    return vantaEffect;
}

export default useVanta;