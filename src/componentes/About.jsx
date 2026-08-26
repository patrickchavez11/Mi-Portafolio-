const icons = {
  idea: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 22h4M8.3 14.7A7 7 0 1 1 15.7 14.7c-.55.5-.7 1.16-.7 1.8H9c0-.64-.15-1.3-.7-1.8Z" /></svg>,
  cat: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 10.4 4 4.5l4.3 2.2A9 9 0 0 1 12 6c1.3 0 2.55.28 3.7.7L20 4.5l-1.2 5.9A7.4 7.4 0 0 1 19 12c0 4.42-3.13 8-7 8s-7-3.58-7-8c0-.55.07-1.08.2-1.6ZM9.3 13h.01M14.7 13h.01M10 16c1.15.75 2.85.75 4 0" /></svg>,
  sunset: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 19h18M5 15h14M7 11a5 5 0 0 1 10 0M12 2v3M4.9 5.1 7 7.2M19.1 5.1 17 7.2" /></svg>,
};

const interests = [
  { icon: icons.idea, title: "Ideas nuevas", text: "Me gusta experimentar y mejorar cada detalle." },
  { icon: icons.cat, title: "Animales", text: "Una fuente constante de curiosidad y cuidado." },
  { icon: icons.sunset, title: "Café + atardeceres", text: "Pausas que recargan mi creatividad." },
];

export default function About() { return <section id="sobre-mi" className="border-y border-white/10 bg-white/[.018] px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr]"><div><SectionLabel>Sobre mí</SectionLabel><h2 className="section-title mt-4">Diseño y desarrollo experiencias frontend.</h2><div className="about-signal mt-10 hidden lg:flex"><span className="accent-text">01</span><span>DESIGNER / DEVELOPER</span></div></div><div className="space-y-6 text-lg leading-8 text-zinc-400"><p>Soy frontend developer con mirada de diseñador: me interesa que cada interfaz no solo funcione, sino que sea clara, atractiva y fácil de usar.</p><p>Combino diseño, tecnología y funcionalidad para convertir ideas en productos digitales. Me motiva aprender, resolver problemas e innovar con soluciones que se sientan bien para las personas.</p><p className="about-signature border-l-2 border-[#2ff77a] pl-5 text-base leading-7 text-zinc-300">Fuera del código encuentro nuevas perspectivas: observar, crear y cuidar los detalles también forma parte de mi proceso.</p></div></div><div className="about-notes mt-14"><div className="about-notes-heading"><span className="accent-text">//</span> FUERA DEL CÓDIGO</div><div className="grid gap-2 md:grid-cols-3">{interests.map((interest, index) => <article className="about-interest" key={interest.title}><span className="interest-icon">{interest.icon}</span><div><span className="interest-number">0{index + 1}</span><h3>{interest.title}</h3><p>{interest.text}</p></div></article>)}</div></div></div></section>; }
import SectionLabel from "./SectionLabel";
