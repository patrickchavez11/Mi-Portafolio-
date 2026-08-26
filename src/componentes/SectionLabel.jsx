import { useEffect, useRef, useState } from "react";

export default function SectionLabel({ children }) {
  const labelRef = useRef(null);
  const text = String(children).toUpperCase();
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState(false);
  const [output, setOutput] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) setTyped(true);
    }, { threshold: 0.45 });

    const element = labelRef.current;
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!typed || output.length === text.length) return undefined;
    const timer = setTimeout(() => setOutput(text.slice(0, output.length + 1)), 55);
    return () => clearTimeout(timer);
  }, [typed, output, text]);

  return <p ref={labelRef} className={`eyebrow section-label ${visible ? "section-label-active" : ""}`}><span className="section-label-dot" aria-hidden="true" />{output}</p>;
}
