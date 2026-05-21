import { useInView } from '../hooks/useInView';
import type { Skill } from '../types';

interface Props {
  groupedSkills: Record<string, Skill[]>;
}

const LEVEL_COLORS = [
  '',
  'bg-gray-700 text-gray-300',
  'bg-blue-900/50 text-blue-300 border-blue-700/50',
  'bg-primary-900/50 text-primary-300 border-primary-700/50',
  'bg-accent-600/20 text-accent-300 border-accent-600/40',
  'bg-gradient-to-r from-primary-600/30 to-accent-600/30 text-white border-primary-500/40',
];
const LEVEL_LABELS = ['', 'Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Expert'];

const CATEGORY_ICONS: Record<string, string> = {
  'Frontend': '🖥️',
  'Backend': '⚙️',
  'Database': '🗄️',
  'DevOps': '🚀',
  'Mobile': '📱',
  'Tools': '🔧',
  'Languages': '💻',
  'Cloud': '☁️',
  'Testing': '🧪',
  'Design': '🎨',
};

function SkillChip({ skill, visible }: { skill: Skill; visible: boolean }) {
  return (
    <div
      className={`
        flex items-center gap-2 px-3 py-2 rounded-xl border
        transition-all duration-500 cursor-default
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        ${LEVEL_COLORS[skill.level] ?? LEVEL_COLORS[3]}
        hover:scale-105
      `}
    >
      {skill.iconUrl ? (
        <img src={skill.iconUrl} alt={skill.name} className="w-4 h-4 object-contain" />
      ) : (
        <span className="w-4 h-4 rounded-full bg-current opacity-20 shrink-0" />
      )}
      <span className="text-sm font-medium leading-none">{skill.name}</span>
      <span className="text-[10px] opacity-60 font-medium shrink-0">{LEVEL_LABELS[skill.level]}</span>
    </div>
  );
}

export default function SkillsSection({ groupedSkills }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <h2 className="section-title text-center">Skills</h2>
        <p className="section-subtitle text-center">Technologies I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category} className="card">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-lg">{CATEGORY_ICONS[category] ?? '🔹'}</span>
                {category}
                <span className="ml-auto text-xs text-gray-600 font-normal">{skills.length} skills</span>
              </h3>
              <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                  <SkillChip
                    key={skill.id}
                    skill={skill}
                    visible={inView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
