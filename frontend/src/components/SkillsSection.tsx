import { useInView } from '../hooks/useInView';
import type { SkillGroup } from '../types';

interface Props {
  groups: SkillGroup[];
}

export default function SkillsSection({ groups }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="skills" className="py-20 bg-cream-200/60 border-y border-cream-300">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="eyebrow text-center mb-3">What I work with</p>
        <h2 className="section-title text-center">Skills</h2>
        <p className="section-subtitle text-center">Technologies and domains I use to build reliable products</p>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {groups.map(group => (
            <div key={group.category} className="card break-inside-avoid">
              <h3 className="font-serif text-lg font-semibold mb-4">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <li
                    key={skill}
                    className="text-sm text-cocoa-900 bg-cream-100 border border-cream-300 px-3 py-1.5 rounded-full font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
