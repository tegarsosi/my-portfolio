import Background from "@/components/Background";
import Image from "next/image";

export default function About() {
    const techStack = [
        { name: "Python", icon: "devicon-python-plain" },
        { name: "FastAPI", icon: "devicon-fastapi-plain" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Docker", icon: "devicon-docker-plain" },
    ];

    return (
        <main className="relative flex min-h-screen flex-col items-start justify-center text-white p-8 md:p-16">
            <Background />

            {/* Content Wrapper */}
            <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl w-full mx-auto bg-slate-800/20 rounded-lg p-6">
                <div className="w-full max-w-3xl">
                    <div className="flex flex-col md:flex-row items-start gap-10">
                        {/* Left Section - Profile Image */}
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
                            <Image 
                                src="/profile.jpg" 
                                alt="Tegar's Profile" 
                                width={192} 
                                height={192} 
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        {/* Right Section - About Content */}
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold">Hey, I&apos;m Tegar Everest🏔️</h1>
                            <p className="mt-3 text-lg text-gray-300 leading-relaxed max-w-2xl">
                                I&apos;m a Python Developer & AI Software Engineer who builds AI-powered applications and scalable backend systems. I specialize in FastAPI, Tortoise ORM, LangChain, and fine-tuning small language models.
                            </p>
                            <p className="mt-3 text-lg text-gray-300 leading-relaxed max-w-2xl">
                                I enjoy solving complex problems, optimizing workflows, and making things work efficiently. Whether it&apos;s backend development, AI model integration, or system architecture, I focus on writing clean, maintainable, and high-performance code.
                            </p>

                            {/* Tech Stack */}
                            <section className="mt-6">
                                <h2 className="text-2xl font-semibold">Tech Stack</h2>
                                <div className="flex flex-wrap gap-6 mt-3">
                                    {techStack.map((tech) => (
                                        <i 
                                            key={tech.name}
                                            className={`${tech.icon} text-2xl grayscale hover:grayscale-0 transition`}
                                            title={tech.name}
                                        />
                                    ))}
                                </div>
                            </section>

                            {/* Hobbies & Interests */}
                            <section className="mt-6">
                                <h2 className="text-2xl font-semibold">Hobbies & Interests</h2>
                                <p className="mt-3 text-gray-300">
                                    Badminton - Table Tennis - Reading (Non-fiction, Psychology, Self-help) - Piano - Photography - Anime/Manga - Kpop
                                </p>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}