import Link from "next/link";
import {useRouter} from "next/router";

export default function Navigation() {
    const router = useRouter();

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
                    
                    <div className="flex gap-8">
                        <Link 
                            href="/"
                            className={`nav-link ${isActive('/')}`}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/experience"
                            className={`nav-link ${isActive('/experience')}`}
                        >
                            Experience
                        </Link>
                        <Link 
                            href="/projects"
                            className={`nav-link ${isActive('/projects')}`}
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/about"
                            className={`nav-link ${isActive('/about')}`}
                        >
                            About
                        </Link>
                        <Link 
                            href="/contact"
                            className={`nav-link ${isActive('/contact')}`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
