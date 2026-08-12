import { Server, DatabaseZap, Lock, Network } from 'lucide-react';
import { motion } from 'motion/react';

export default function Platform() {
  const features = [
    { icon: DatabaseZap, title: 'High-Velocity Ingestion', desc: 'Process petabytes of unstructured data with sub-millisecond latency for real-time analytics.' },
    { icon: Server, title: 'Scalable Infrastructure', desc: 'Cloud-native, serverless architecture designed for infinite horizontal scaling and 99.999% uptime.' },
    { icon: Network, title: 'Neural Interconnect', desc: 'Proprietary graph databases for complex relational entity mapping and predictive pathing.' },
    { icon: Lock, title: 'Zero-Trust Security', desc: 'Military-grade encryption with continuous automated auditing and strict role-based access.' }
  ];

  return (
    <section id="platform" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase mb-3">TTV Core Platform</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">The Engine Behind Strategic Intelligence</h3>
          <p className="text-lg text-slate-400">
            A unified, full-stack environment where data ingestion, secure storage, and advanced ML models converge to power real-time enterprise decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/20"
            >
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-sky-400 mb-6">
                <feat.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">{feat.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
