import type { Profile } from '../types';

interface Props {
  profile: Profile;
}

export default function Hero({ profile }: Props) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {profile.avatarUrl && (
          <img
            src={profile.avatarUrl}
            alt={profile.fullName}
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary-500"
          />
        )}
        {!profile.avatarUrl && (
          <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-primary-600 flex items-center justify-center text-4xl font-bold text-white">
            {profile.fullName.charAt(0)}
          </div>
        )}

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-primary-500">{profile.fullName}</span>
        </h1>
        <p className="text-xl text-primary-400 mb-6 font-medium">{profile.title}</p>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">{profile.bio}</p>

        <div className="flex flex-wrap justify-center gap-4">
          {profile.githubUrl && (
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="btn-outline">
              GitHub
            </a>
          )}
          {profile.linkedinUrl && (
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="btn-primary">
              LinkedIn
            </a>
          )}
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline">
              Resume
            </a>
          )}
        </div>

        {profile.location && (
          <p className="text-gray-500 mt-6 text-sm">📍 {profile.location}</p>
        )}
      </div>
    </section>
  );
}
