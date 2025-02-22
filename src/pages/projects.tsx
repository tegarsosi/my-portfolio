import Background from "@/components/Background";

export default function Projects() {
    return (
        <main className="relative flex min-h-screen flex-col items-start justify-center text-white p-8 md:p-16">
            <Background />
            <div className="relative z-20 flex flex-col items-center justify-center gap-10 max-w-7xl w-full mx-auto text-center">
                <div className="w-full max-w-3xl">
                    <h1 className="text-4xl font-bold mb-4">Projects</h1>
                    <div className="flex flex-col items-center gap-4">
                        <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="text-xl text-gray-300">Page Under Construction</p>
                        <p className="text-gray-400">Coming soon with exciting projects!</p>
                    </div>
                </div>
            </div>
        </main>
    );
} 