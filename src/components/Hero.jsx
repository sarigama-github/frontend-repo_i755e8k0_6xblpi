import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[40%] bg-[conic-gradient(from_180deg_at_50%_50%,#60a5fa_0%,#a78bfa_30%,#22d3ee_60%,#60a5fa_100%)] opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_70%_20%,rgba(59,130,246,0.25),transparent),radial-gradient(25%_25%_at_20%_80%,rgba(14,165,233,0.25),transparent)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
        >
          Wildan Abiarsa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto"
        >
          Siswa SMK Amaliah • Software Engineer • Pengguna Linux • Pecinta dunia IT
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#projects" className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors">
            Lihat Projek
          </a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">
            Hubungi Saya
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="mt-14 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur"
        >
          <p className="text-slate-200/90 leading-relaxed">
            Saya tertarik dengan dunia keamanan sistem, membangun robot berbasis Arduino, dan selalu mengeksplor teknologi terbaru. Di usia 15 tahun, saya fokus mengasah logika, membangun projek nyata, dan berkontribusi pada komunitas open-source.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
