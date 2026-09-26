import { useInView } from '../hooks/useInView';
import type { Experience } from '../types';

interface Props {
  experiences: Experience[];
}

function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <li className="relative pl-8 sm:pl-10 pb-12 last:pb-0">
      <span className="absolute left-0 top-0 bottom-0 w-px bg-cream-400 ml-[7px]" aria-hidden="true" />
      <span
        className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
          experience.current ? 'bg-caramel-500 border-caramel-500 ring-4 ring-caramel-100' : 'bg-cream-50 border-caramel-400'
        }`}
        aria-hidden="true"
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
        <h3 className="font-serif text-xl font-semibold">
          {experience.role} <span className="text-caramel-600">· {experience.company}</span>
        </h3>
        <p className="text-sm font-medium text-cocoa-500">{experience.period}</p>
      </div>
      <p className="text-xs uppercase tracking-wider font-semibold text-cocoa-400 mb-4">{experience.type}</p>

      <div className="card hover:shadow-none space-y-5">
        {experience.highlights.map((highlight, i) => (
          <div key={highlight.name ?? i}>
            {highlight.name && <h4 className="text-sm font-semibold text-cocoa-900 mb-2">{highlight.name}</h4>}
            <ul className="space-y-2">
              {highlight.points.map(point => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-cocoa-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-caramel-400 shrink-0" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <ul className="flex flex-wrap gap-1.5 pt-4 border-t border-cream-300">
          {experience.tech.map(tech => (
            <li key={tech} className="tag">{tech}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function ExperienceSection({ experiences }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>(0.05);

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="eyebrow text-center mb-3">Career</p>
        <h2 className="section-title text-center">Experience</h2>
        <p className="section-subtitle text-center">Where I've been building software</p>
        <ol>
          {experiences.map(experience => (
            <ExperienceItem key={`${experience.company}-${experience.period}`} experience={experience} />
          ))}
        </ol>
      </div>
    </section>
  );
}
