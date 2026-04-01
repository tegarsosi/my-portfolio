import Background from "@/components/Background";

const projects = [
    {
      title: "Weather API Proxy",
      desc: "FastAPI + Redis. Features cache-aside pattern and 1-hour TTL.",
      link: "https://github.com/tegarsosi/weather-api",
      tags: ["FastAPI", "Redis", "Python"]
    },
    {
        title: "Personal Blog",
        desc: "A minimalist personal blog engine built with FastAPI and structured JSON file-system storage.",
        link: "https://github.com/tegarsosi/personal-blog",
        tags: ["FastAPI", "CRUD", "Python", "Basic HTTP Auth"]
    },
    {
      title: "CLI Expense Tracker",
      desc: "A simple CLI project for financial management and transaction tracking.",
      link: "https://github.com/tegarsosi/expense-tracker",
      tags: ["CLI", "Python"]
    },
    {
      title: "GitHub Activity CLI",
      desc: "CLI tool for real-time monitoring of user repository activity.",
      link: "https://github.com/tegarsosi/github-user-activity",
      tags: ["CLI", "Python"]
    }
  ];

export default function Projects() {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-start text-white p-8 pt-32">
        {/* Background component stays here */}
        <Background />
        
        <div className="relative z-20 w-full max-w-6xl">
          <h1 className="text-2xl font-semibold text-center">
            Projects
          </h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <a 
                key={i} 
                href={p.link} 
                target="_blank" 
                className="block group relative p-1 rounded-xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* This is the card body */}
                <div className="h-full p-6 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md group-hover:border-blue-500/50 transition-colors">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {p.desc}
                  </p>
                  <div className="flex gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    );
  } 