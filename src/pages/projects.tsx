import Background from "@/components/Background";

export default function Projects() {
    return (
        <main className="relative flex min-h-screen flex-col items-start justify-center text-white p-8 md:p-16">
            <Background />
            <div className="relative z-20 flex flex-col items-center justify-center gap-10 max-w-7xl w-full mx-auto">
                <div className="w-full max-w-3xl">
                    <h1 className="text-4xl font-bold">My Projects</h1>
                    {/* Content will go here */}
                </div>
            </div>
        </main>
    );
} 