import { Link, createFileRoute } from '@tanstack/react-router'
import { Award, Briefcase, HeartPlus } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })
const benefit = [
  {
    icon: <Briefcase className="w-18 h-18 text-gray-200" />,
    title: 'what we do',
    content:
      'Agen Perjalanan Wisata telah berkembang menjadi penyedia solusi perjalanan.',
  },
  {
    icon: <Award className="w-18 h-18 text-gray-200" />,
    title: 'what we achieve',
    content:
      'Reputasi kami dalam hal kehandalan, jangkauan sumber daya kami, dan pemahaman mendalam kami terhadap pasar Indonesia dan Mancanegara',
  },
  {
    icon: <HeartPlus className="w-18 h-18 text-gray-200" />,
    title: 'health insurance',
    content:
      'Kerjasama kami dengan Cybergene health services, bisa menjamin kenyamanan pelanggan kami ketika traveling di Jepang',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img
              src="/logo-akitaone.png"
              alt="AkitaOne Japan Logo"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full"
            />
            <h1 className="text-3xl md:text-7xl font-black text-white -tracking-[0.08em]">
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AKITAONE
              </span>{' '}
              <span>Japan</span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-medium">
            Discover new experiences and travel ideas in Japan
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            We're close team creative & professionals who work together to
            provide Satisfaction and Memories of A Happy Journey.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
            >
              <span>Get in touch</span>
            </Link>
            <p className="text-gray-400 text-sm mt-2">
              Begin Exploring Japan by consulting with us
            </p>
          </div>
        </div>
      </section>

      {/* benefit section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefit.map((items, i) => (
            <div
              key={i}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="mb-3">{items.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">
                {items.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{items.content}</p>
            </div>
          ))}
        </div>
      </section>
      {/* work sample sections */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 items-center">
          <h1 className="text-xl font-bold bg-linear-to-r from-violet-400 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
            More than a visit
          </h1>
          <p className="text-gray-400">
            There are many reasons to choose us, and here are some of the most
            and popular recomendation from us
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 mt-6 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-3"></div>
            <h3 className="text-xl font-bold text-white mb-3 uppercase"></h3>
            <p className="text-gray-400 leading-relaxed"></p>
          </div>
          <div className="bg-slate-800/50 mt-6 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-3"></div>
            <h3 className="text-xl font-bold text-white mb-3 uppercase"></h3>
            <p className="text-gray-400 leading-relaxed"></p>
          </div>
          <div className="bg-slate-800/50 mt-6 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-3"></div>
            <h3 className="text-xl font-bold text-white mb-3 uppercase"></h3>
            <p className="text-gray-400 leading-relaxed"></p>
          </div>
        </div>
        <div className="mt-3 py-10 flex justify-between items-center">
          <p className="text-xs text-gray-400">
            Discover new experiences and travel ideas in Japan.
          </p>
          <Link
            to="/work"
            className="p-3 bg-linear-to-r from-cyan-400 to-cyan-600 text-gray-200 rounded-xl font-semibold"
          >
            Discover more...
          </Link>
        </div>
      </section>
      {/* sponsors */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="py-10">
          <h1 className="text-2xl font-bold bg-linear-to-r from-violet-400 via-cyan-400 text-center to-cyan-500 bg-clip-text text-transparent">
            Our Team
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-slate-800/50 mt-6 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-3">
              <img src="" alt="" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 uppercase"></h3>
            <p className="text-gray-400 leading-relaxed"></p>
          </div>
        </div>
      </section>
    </div>
  )
}
