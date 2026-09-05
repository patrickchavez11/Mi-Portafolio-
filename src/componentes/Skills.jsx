import skillGroups from "../data/skills";
import SectionLabel from "./SectionLabel";

const icons = {
  frontend: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h10v8H4zM16 11h4v8h-8v-2M8 17h3M6 21h7" /></svg>,
  development: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5 4 12l4 7M16 5l4 7-4 7M13.5 3l-3 18" /></svg>,
  data: <svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v7c0 1.66 3.13 3 7 3s7-1.34 7-3V5M5 12v7c0 1.66 3.13 3 7 3s7-1.34 7-3v-7" /></svg>,
  workflow: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5zM8 9h3M8 13h8M8 17h5" /></svg>,
};

export default function Skills() {
  return <section id="skills" className="px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><SectionLabel>Tecnologías</SectionLabel><div className="skills-intro"><div><h2 className="section-title mt-4">El stack detrás<br />del producto.</h2><p>Mi enfoque está en frontend, combinando desarrollo, diseño de interfaces y tecnologías que permiten construir experiencias web completas.</p></div><div className="skills-intro-note"><span className="accent-text">//</span><span>MY TOOLKIT</span></div></div><div className="skill-cards mt-14">{skillGroups.map((group) => <article key={group.id} className={`skill-card skill-card-${group.id}`}><header><span className="skill-card-icon">{icons[group.id]}</span><span className="skill-count">{String(group.skills.length).padStart(2, "0")} SKILLS</span></header><h3>{group.title}</h3><p>{group.description}</p><div className="skill-chip-list">{group.skills.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}</div></article>)}</div></div></section>;
}
