import Background from "@/components/Background";

export default function Contact() {
    const contactLinks = [
        { name: "Email", icon: "far fa-envelope", href: "mailto:tegar.sosi@gmail.com" },
        { name: "LinkedIn", icon: "fab fa-linkedin", href: "https://linkedin.com/in/tegarsosieverest" },
        { name: "GitHub", icon: "fab fa-github", href: "https://github.com/tegarsosi" },
        { name: "Instagram", icon: "fab fa-instagram", href: "https://instagram.com/tegarsosi_" },
        { name: "Goodreads", icon: "fab fa-goodreads", href: "https://www.goodreads.com/user/show/52445477-tegar-everest" }
    ];

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center text-white p-8">
            <Background />

            {/* Content Container */}
            <div className="relative z-20 flex flex-col items-center text-center bg-gray-800/20 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
                <p className="text-gray-300 mb-6">Let&apos;s connect.</p>

                {/* Contact Icons */}
                <div className="flex gap-6">
                    {contactLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-3xl text-gray-400 hover:text-white transition"
                        >
                            <i className={link.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}