import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Tentang Saya</h2>
            <p className="text-slate-200/90 leading-relaxed">
              Nama saya Wildan Abiarsa, tinggal di Cigombong Lido. Saya seorang siswa SMK Amaliah yang mendalami software engineering dan Linux. Saya tertarik pada dunia IT, khususnya keamanan sistem, dan hobi membuat projek hardware seperti robot menggunakan Arduino.
            </p>
            <p className="text-slate-200/90 leading-relaxed mt-3">
              Saya percaya belajar dengan praktik langsung. Saya membangun, menguji, membongkar, dan memperbaiki hingga mendapatkan hasil terbaik.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4"
          >
            {["Software Engineering", "Linux & Terminal", "Keamanan Sistem (Ethical)", "Arduino & Robotik", "Jaringan Dasar"].map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-slate-900/40 px-5 py-4 text-slate-200/90">
                • {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
