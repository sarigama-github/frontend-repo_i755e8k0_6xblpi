import { motion } from "framer-motion";
import { Cpu, Bot, ShieldCheck, Wrench } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Robot Line Follower",
    desc: "Robot berbasis Arduino yang mengikuti garis menggunakan sensor IR.",
    tags: ["Arduino", "C++", "Hardware"],
  },
  {
    icon: Cpu,
    title: "Monitoring Suhu Ruangan",
    desc: "Sistem IoT sederhana dengan sensor DHT11 dan tampilan serial.",
    tags: ["Arduino", "Sensor", "Serial"],
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Jaringan Dasar",
    desc: "Eksperimen firewall rules dan hardening layanan di Linux.",
    tags: ["Linux", "Security", "Networking"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Projek</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur hover:bg-slate-900/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <p.icon className="text-white" size={26} />
                <h3 className="text-white font-semibold">{p.title}</h3>
              </div>
              <p className="text-slate-300/85 mt-2 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/90">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
