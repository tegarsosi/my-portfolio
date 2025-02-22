import Background from "@/components/Background";

export default function About() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-start text-white p-8 pt-[40vh]">
            <Background />
            <div className="relative z-20">
                <h1 className="text-4xl font-bold">About Me</h1>
                {/* Content will go here */}
            </div>
        </main>
    );
}
