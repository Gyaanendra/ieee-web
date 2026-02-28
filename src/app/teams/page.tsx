'use client';

const teams = [
  { 
    title: 'Core Team', 
    desc: 'The driving force behind Triverse 3.0. Our core team coordinates all aspects of the event.',
    placeholder: 'Core Team group photo'
  },
  { 
    title: 'Technical Team', 
    desc: 'The minds behind the technology. From website to apps, they make it all work.',
    placeholder: 'Technical Team group photo'
  },
  { 
    title: 'Design & Media', 
    desc: 'The creative minds who bring visual excellence to every aspect of Triverse.',
    placeholder: 'Design & Media team photo'
  },
];

export default function Teams() {
  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-ieee-blue animate-slide-in">
          Teams
        </h1>
        <p className="opacity-80 max-w-2xl text-ieee-blue animate-slide-in delay-100">
          Meet the people who bring Triverse 3.0 to life.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {teams.map((team, index) => (
          <article
            key={team.title}
            className={`card bg-white/80 shadow-lg animate-slide-in delay-${(index + 1) * 100}`}
          >
            <div className="card-body space-y-3">
              <div className="w-full h-28 rounded-xl bg-ieee-cyan/10 border-2 border-dashed border-ieee-cyan/40 flex items-center justify-center">
                <span className="text-xs text-ieee-blue/70">{team.placeholder}</span>
              </div>
              <h2 className="card-title text-ieee-blue">{team.title}</h2>
              <p className="text-ieee-blue/80">{team.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="prose max-w-none text-ieee-blue animate-slide-in delay-400">
        <h2>Volunteer Network</h2>
        <p>
          Our volunteer network is the backbone of Triverse. Students from across Bennett University come together to make this event a success.
        </p>
        <p>
          If you're interested in volunteering, reach out to us!
        </p>
      </div>
    </section>
  );
}
