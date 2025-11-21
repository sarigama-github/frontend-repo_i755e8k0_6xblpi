import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, Code2, GitBranch, Network } from "lucide-react";

const skills = [
  { icon: Code2, title: "Pemrograman", desc: "JavaScript, Python, C/C++ (Arduino)", color: "from-cyan-400 to-blue-400" },
  { icon: Terminal, title: "Linux", desc: "CLI, shell scripting, package management", color: "from-emerald-400 to-teal-400" },
  { icon: Shield, title: "Keamanan", desc: "Hardening, dasar-dasar ethical hacking", color: "from-fuchsia-400 to-pink-400" },
  { icon: Cpu, title: "Hardware", desc: "Arduino, sensor, aktuator, robotik", color: "from-orange-400 to-amber-400" },
  { icon: GitBranch, title: "Kolaborasi", desc: "Git, GitHub, open-source", color: "from-violet-400 to-indigo-400" },
  { icon: Network, title: "Jaringan", desc: "IP, subnet, perangkat jaringan dasar", color: "from-sky-400 to-cyan-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Keahlian</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur group overflow-hidden"
            >
              <div className={`absolute -top-16 -right-10 w-40 h-40 bg-gradient-to-br ${s.color} opacity-20 blur-2xl`}></div>
              <div className="relative flex items-center gap-3">
                <s.icon className="text-white/90" size={26} />
                <div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="text-slate-300/80 text-sm">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
