import Head from "next/head";
import Background from "@/components/Background";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tegar&apos;s Portfolio</title>
        <meta name="description" content="Tegar | Python Developer & AI Engineer" />
      </Head>
      <main className="relative flex min-h-screen flex-col items-center justify-start text-white p-8 pt-[40vh]">
        <Background />
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Tegar Everest</h1>

          {/* Animated Role Text */}
          <div className="mt-4">
            <TypeAnimation
              sequence={[
                'Python Developer',
                2000,
                'AI Software Engineer',
                2000,
                'Backend Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-lg"
              repeat={Infinity}
            />
          </div>
          
          {/* Quote Section */}
          <blockquote className="mt-6 mb-6 italic text-gray-300">
            "Engineering AI-driven solutions with clean, maintainable systems."
          </blockquote>
          
          <Link 
            href="/projects" 
            className="inline-block mt-4 px-6 py-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 transition"
          >
            View My Projects
          </Link>
        </div>
      </main>
    </>
  );
}