// useVantaFog.js
import { useEffect, useState } from 'react';

function useVantaFog() {
    const [vantaEffect, setVantaEffect] = useState(0);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(window.VANTA.FOG({
                el: "#vanta-bg-fog",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0xebf1ff,
                midtoneColor: 0xcacaca,
                lowlightColor: 0xf7f7f7,
                baseColor: 0xffffff,
                blurFactor: 0.36,
                speed: 2.00,
                zoom: 2.50
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        }
    }, [vantaEffect]);

    return vantaEffect;
}

export default useVantaFog;
