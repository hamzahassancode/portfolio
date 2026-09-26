import { useInView } from '../hooks/useInView';
import type { Certification, Education } from '../types';
import { AwardIcon, GraduationIcon } from './Icons';

interface Props {
  education: Education;
  certifications: Certification[];
}

export default function EducationSection({ education, certifications }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="education" className="py-20 bg-cream-200/60 border-y border-cream-300">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="eyebrow text-center mb-3">Background</p>
        <h2 className="section-title text-center">Education & Certifications</h2>
        <p className="section-subtitle text-center">Where the foundations come from</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card hover:shadow-none">
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-full bg-caramel-100 text-caramel-700 flex items-center justify-center shrink-0">
                <GraduationIcon />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-1">{education.school}</h3>
                <p className="text-cocoa-700 font-medium">{education.degree}</p>
                <p className="text-sm text-cocoa-500 mt-2">
                  {education.location} · {education.period}
                </p>
              </div>
            </div>
          </div>

          <div className="card hover:shadow-none">
            <ul className="space-y-5">
              {certifications.map(cert => (
                <li key={cert.title} className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
                    <AwardIcon />
                  </span>
                  <div>
                    <p className="font-semibold text-cocoa-900 leading-snug">{cert.title}</p>
                    <p className="text-sm text-cocoa-500 mt-0.5">
                      {cert.issuer}
                      {cert.year && ` · ${cert.year}`}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
