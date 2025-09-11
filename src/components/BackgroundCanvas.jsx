import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min";

export default function BackgroundCanvas() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");

      if (vantaEffect) {
        vantaEffect.setOptions({
          backgroundColor: isDark ? 0x000000 : 0xffffff, // black/white background
           // rings invert color
        });
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
  el: vantaRef.current,
  THREE,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundColor: 0x000000,
  backgroundAlpha: 1.0,
  color: 0x39ff14,   // neon green
  points: 20.0,
  maxDistance: 25.0,
  spacing: 15.0,
})
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      observer.disconnect();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10" />
  );
}