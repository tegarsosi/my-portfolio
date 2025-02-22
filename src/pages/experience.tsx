import Background from "@/components/Background";

export default function Experience() {
    return (
        <main className="relative flex min-h-screen flex-col items-start justify-center text-white p-8 md:p-16">
            <Background />

            {/* Content Wrapper */}
            <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl w-full mx-auto">
                {/* Middle Section - Experience Content */}
                <div className="w-full max-w-3xl">
                    {/* Experience Section */}
                    <section>
                        <h2 className="text-2xl font-semibold">Experience</h2>
                        
                        {/* Current Role */}
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">AI Software Engineer, Paul&apos;s Job GmbH</h3>
                            <p className="text-gray-400">September 2023 - present, Berlin, Germany</p>
                            <p className="mt-2 text-gray-300">
                                Building AI-powered applications and scalable backend systems. Specializing in AI agents development
                                and implementing topic-modeling algorithms for chat analysis.
                            </p>
                            <div className="flex gap-3 mt-2">
                                <i className="devicon-python-plain text-xl grayscale hover:grayscale-0 transition" title="Python"/>
                                <i className="devicon-fastapi-plain text-xl grayscale hover:grayscale-0 transition" title="FastAPI"/>
                                <i className="devicon-postgresql-plain text-xl grayscale hover:grayscale-0 transition" title="PostgreSQL"/>
                            </div>
                        </div>

                        {/* Previous Role - Working Student */}
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold">Working Student, Paul&apos;s Job GmbH (hyrd GmbH)</h3>
                            <p className="text-gray-400">January 2023 - September 2023, Berlin, Germany</p>
                            <p className="mt-2 text-gray-300">
                                Conducted data analysis and developed machine learning models, focusing on transforming raw data 
                                into actionable business insights.
                            </p>
                            <div className="flex gap-3 mt-2">
                                <i className="devicon-python-plain text-xl grayscale hover:grayscale-0 transition" title="Python"/>
                                <i className="devicon-pandas-plain text-xl grayscale hover:grayscale-0 transition" title="Pandas"/>
                                <i className="devicon-tensorflow-original text-xl grayscale hover:grayscale-0 transition" title="TensorFlow"/>
                            </div>
                        </div>

                        {/* Internship */}
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold">Intern, Paul&apos;s Job GmbH (hyrd GmbH)</h3>
                            <p className="text-gray-400">September 2022 - December 2022, Berlin, Germany</p>
                            <p className="mt-2 text-gray-300">
                                Engineered interactive data visualization solutions and implemented automated data analysis pipelines
                                to improve processing efficiency.
                            </p>
                            <div className="flex gap-3 mt-2">
                                <i className="devicon-python-plain text-xl grayscale hover:grayscale-0 transition" title="Python"/>
                                <i className="devicon-javascript-plain text-xl grayscale hover:grayscale-0 transition" title="JavaScript"/>
                                <i className="devicon-postgresql-plain text-xl grayscale hover:grayscale-0 transition" title="PostgreSQL"/>
                            </div>
                        </div>
                    </section>

                    {/* Updated CV Button */}
                    <a 
                        href="/Tegar_CV.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 transition"
                    >
                        Click here to see the full resume
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                    </a>
                </div>
            </div>
        </main>
    );
}