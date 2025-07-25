import { useEffect, useState } from "react";

function getDeviceType() {
  const ua = navigator.userAgent;
  const width = window.innerWidth;

  if (/tablet|ipad|playbook|silk|(android(?!.*mobi))/i.test(ua) || (width >= 700 && width <= 1200)) {
    return "tablet";
  }
  if (
    /Mobile|iPhone|Android|BlackBerry|IEMobile|Silk|Opera Mini/i.test(ua) ||
    width < 700
  ) {
    return "mobile";
  }
  return "desktop";
}

export default function useDeviceType() {
  const [device, setDevice] = useState(getDeviceType());

  useEffect(() => {
    const handleResize = () => setDevice(getDeviceType());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device; // "mobile", "tablet" veya "desktop"
} 