import type { Skill } from '../types';

interface Props {
  groupedSkills: Record<string, Skill[]>;
}

function SkillBar({ skill }: { skill: Skill }) {
  const percent = (skill.level / 5) * 100;
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-200">{skill.name}</span>
        <span className="text-gray-500">{skill.level}/5</span>
      </div>
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-500 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection({ groupedSkills }: Props) {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="section-title text-center">Skills</h2>
      <p className="section-subtitle text-center">Technologies I work with</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="card">
            <h3 className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">{category}</h3>
            {skills.map(skill => (
              <SkillBar key={skill.id} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
