import Navigation from "./Navigation";
import Background from "./Background";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="relative">
            <div className="fixed inset-0 pointer-events-auto">
                <Background />
            </div>
            <Navigation />
            <div className="relative pointer-events-none">
                <div className="pointer-events-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}