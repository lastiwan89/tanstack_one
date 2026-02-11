import { Link } from '@tanstack/react-router'

export default function HeroSection() {
  return (
    <div>
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-6 mb-6">
          <img
            src="/tanstack-circle-logo.png"
            alt="TanStack Logo"
            className="w-24 h-24 md:w-32 md:h-32"
          />
          <h1 className="text-6xl md:text-7xl font-black text-white -tracking-[0.08em]">
            <span className="text-gray-300">JAGO JALAN</span>{' '}
            <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              NUSANTARA
            </span>
          </h1>
        </div>
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          The travel agent that build trust for travelers
        </p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          We're travel agents that make traveler use our agents to explore
          Lombok Island, and also convenient for travelers to reach us.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
          >
            Get in touch
          </Link>
          <p className="text-gray-400 text-xs mt-2">
            Begin your Happy Travel Journey by{' '}
            <code className="px-2 py-0.5 bg-slate-700 rounded text-cyan-400">
              consulting with us
            </code>
          </p>
        </div>
      </div>
    </div>
  )
}
