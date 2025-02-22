import Background from "@/components/Background";
import Image from "next/image";

export default function About() {
    const techStack = [
        { name: "Python", icon: "devicon-python-plain" },
        { name: "FastAPI", icon: "devicon-fastapi-plain" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "Pandas", icon: "devicon-pandas-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
    ];

    return (
        <main className="relative flex min-h-screen flex-col items-start justify-center text-white p-8 md:p-16">
            <Background />

            {/* Content Wrapper */}
            <div className="relative z-20 flex flex-col md:flex-row items-start gap-10 max-w-5xl w-full">
                
                {/* Left Section - Profile Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gray-700">
                    <Image 
                        src="/profile.jpg" 
                        alt="Tegar&apos;s Profile" 
                        width={192} 
                        height={192} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Section - About Content */}
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold">Hey, I&apos;m Tegar</h1>
                    <p className="mt-3 text-lg text-gray-300 leading-relaxed max-w-2xl">
                        Let&apos;s be honest, I&apos;m not sure what to write here. I&apos;m not a tech enthusiast, I&apos;m not a computer geek. People tend to exaggerate their passion for tech nowadays, but I like to keep it real. I wouldn&apos;t call myself passionate about tech, since passion is a bit overrated these days, but I do enjoy coding. It&apos;s one of those things I can do for hours without feeling drained.
                    </p>
                    <p className="mt-3 text-lg text-gray-300 leading-relaxed max-w-2xl">
                        Feel free to look around my website, or whatever.
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
                            Badminton - Table Tennis - Reading - Piano - Anime/Manga - Non-fiction - Kpop
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}