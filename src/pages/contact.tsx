import Background from "@/components/Background";

export default function Contact() {
    const professionalLinks = [
        {
            name: "Email",
            icon: "far fa-envelope",
            value: "tegar.sosi@gmail.com",
            href: "mailto:tegar.sosi@gmail.com"
        },
        {
            name: "LinkedIn",
            icon: "devicon-linkedin-plain",
            value: "Tegar Sosi Everest",
            href: "https://linkedin.com/in/tegarsosieverest"
        },
        {
            name: "GitHub",
            icon: "devicon-github-original",
            value: "@tegarsosi",
            href: "https://github.com/tegarsosi"
        }        
    ];

    const personalLinks = [
        {
            name: "Instagram",
            icon: "fab fa-instagram",
            value: "@tegarsosi_",
            href: "https://instagram.com/tegarsosi_"
        },
        {
            name: "Facebook",
            icon: "fab fa-facebook",
            value: "Tegar Everest",
            href: "https://facebook.com/tegar.everest"
        },
        {
            name: "Goodreads",
            icon: "fab fa-goodreads",
            value: "Tegar Everest",
            href: "https://www.goodreads.com/user/show/52445477-tegar-everest"
        }
    ];

    const ContactSection = ({ title, links }: { title: string, links: typeof professionalLinks }) => (
        <div>
            <h2 className="text-2xl font-semibold mb-3">{title}</h2>
            <div className="space-y-2">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all group"
                    >
                        <i className={`${link.icon} text-2xl text-gray-400 group-hover:text-blue-400`} />
                        <div>
                            <h3 className="text-lg font-semibold">{link.name}</h3>
                            <p className="text-gray-400">{link.value}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <main className="relative flex min-h-screen flex-col items-start justify-center text-white p-8 md:p-16">
            <Background />
            <div className="relative z-20 flex flex-col items-center justify-center gap-10 max-w-4xl w-full mx-auto bg-slate-800/20 rounded-lg p-6">
                <div className="w-full max-w-3xl">
                    <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
                    
                    <p className="text-gray-300 mb-6">
                        Feel free to reach out to me through any of these platforms:
                    </p>

                    <div className="space-y-8">
                        <ContactSection title="Professional" links={professionalLinks} />
                        <ContactSection title="Personal" links={personalLinks} />
                    </div>

                    <p className="mt-6 text-gray-400 text-sm">
                        Response time: 1-2 days
                    </p>
                </div>
            </div>
        </main>
    );
} 