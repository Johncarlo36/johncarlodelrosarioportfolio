import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/src/vanta.fog";

export const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,       // ✅ Enables mouse movement
          mouseEase: true,           // ✅ Smooth movement
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x9f7aea,
          midtoneColor: 0x4fd1c5,
          lowlightColor: 0x2a4365,
          baseColor: 0x1a202c,
          blurFactor: 0.8,
          speed: 2.0,
          zoom: 1.2,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};
