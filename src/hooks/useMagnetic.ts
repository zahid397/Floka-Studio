import { useRef, useEffect, useState } from "react";

export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const threshold = 120;

      if (dist < threshold) {
        setTransform({ x: dx * strength, y: dy * strength });
      } else {
        setTransform({ x: 0, y: 0 });
      }
    };

    const onLeave = () => setTransform({ x: 0, y: 0 });

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return { ref, style: { transform: `translate(${transform.x}px, ${transform.y}px)`, transition: "transform 0.3s ease-out" } };
}
