import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col gap-4">
      <div className="py-8 px-4">
        <h1 className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 font-black text-3xl text-center to-cyan-300">
          About
        </h1>
        <p className="text-gray-300">
          <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
            Akita One Japan (AOJ)
          </span>{' '}
          berdiri secara resmi di kota Saitama, tepatnya di kota Kounosu pada
          tahun 2018. Dari awal mula kami sebagai agen perjalanan wisata telah
          berkembang menjadi penyedia solusi perjalanan korporat terpercaya di
          bawah merek Akita One Japan (AOJ). Ini merupakan hasil alami dari
          reputasi kami dalam hal kehandalan, jangkauan sumber daya kami, dan
          pemahaman mendalam kami terhadap pasar Indonesia dan seluruh dunia, di
          mana kami mengenal pelanggan kami dengan baik sehingga kami dapat
          menyarankan dan memberikan Tour Travel Solutions untuk kebutuhan
          mereka.
        </p>
      </div>
    </div>
  )
}
