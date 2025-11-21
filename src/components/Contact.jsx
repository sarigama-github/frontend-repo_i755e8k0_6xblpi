import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Kontak</h2>
          <p className="text-slate-300/85 mb-6">Ingin berkolaborasi atau berdiskusi? Silakan kirim pesan.</p>

          <form onSubmit={(e) => e.preventDefault()} className="grid md:grid-cols-3 gap-4">
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              placeholder="Nama"
              className="col-span-3 md:col-span-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
            />
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              placeholder="Email"
              className="col-span-3 md:col-span-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
            />
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              placeholder="Subjek"
              className="col-span-3 md:col-span-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
            />
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              placeholder="Pesan"
              rows={5}
              className="col-span-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
            />
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="col-span-3 md:col-span-1 md:col-start-3 justify-self-start md:justify-self-end px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors"
            >
              Kirim Pesan
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
