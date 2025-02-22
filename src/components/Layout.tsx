import { AnimatePresence } from 'framer-motion';
import Navigation from "./Navigation";
import Background from "./Background";
import PageTransition from "./PageTransition";
import { useRouter } from 'next/router';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const router = useRouter();
    
    return (
        <div className="relative">
            <div className="fixed inset-0 pointer-events-auto">
                <Background />
            </div>
            <Navigation />
            <div className="relative pointer-events-none">
                <AnimatePresence mode="wait">
                    <PageTransition key={router.pathname}>
                        <div className="pointer-events-auto">
                            {children}
                        </div>
                    </PageTransition>
                </AnimatePresence>
            </div>
        </div>
    );
} 