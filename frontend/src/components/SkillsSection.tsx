import { useInView } from '../hooks/useInView';
import type { Skill, SkillGroup } from '../types';

interface Props {
  groups: SkillGroup[];
}

const LEVEL_LABELS = ['', 'Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Expert'];
const MAX_LEVEL = 5;

function SkillRow({ skill, visible }: { skill: Skill; visible: boolean }) {
  return (
    <li>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-sm font-semibold text-cocoa-900">{skill.name}</span>
        <span className="text-xs text-cocoa-500">{LEVEL_LABELS[skill.level]}</span>
      </div>
      <div className="h-1.5 rounded-full bg-cream-300 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-caramel-400 to-caramel-600 transition-[width] duration-1000 ease-out"
          style={{ width: visible ? `${(skill.level / MAX_LEVEL) * 100}%` : '0%' }}
        />
      </div>
    </li>
  );
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
        <p className="section-subtitle text-center">Technologies I use to build reliable products</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map(group => (
            <div key={group.category} className="card">
              <h3 className="font-serif text-lg font-semibold mb-5 flex items-baseline justify-between">
                {group.category}
                <span className="text-xs font-sans font-normal text-cocoa-400">
                  {group.skills.length} {group.skills.length === 1 ? 'skill' : 'skills'}
                </span>
              </h3>
              <ul className="flex flex-col gap-4">
                {group.skills.map(skill => (
                  <SkillRow key={skill.name} skill={skill} visible={inView} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
