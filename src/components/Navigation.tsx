import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";

export default function Navigation() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => {
        return router.pathname === path ? "border-blue-500" : "border-transparent";
    };
    
    return (
        <nav className="fixed top-0 z-50 w-full bg-[#050505]/80 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between text-gray-200">
                    <Link 
                        href="/"
                        className="text-xl font-bold hover:text-blue-400 transition"
                    >
                        My Portfolio
                    </Link>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        <Link href="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                        <Link href="/experience" className={`nav-link ${isActive('/experience')}`}>Experience</Link>
                        <Link href="/projects" className={`nav-link ${isActive('/projects')}`}>Projects</Link>
                        <Link href="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                        <Link href="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col gap-4 mt-4`}>
                    <Link href="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                    <Link href="/experience" className={`nav-link ${isActive('/experience')}`}>Experience</Link>
                    <Link href="/projects" className={`nav-link ${isActive('/projects')}`}>Projects</Link>
                    <Link href="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                    <Link href="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}
