import { LineChart, Zap, Layers, Cpu, Shield, Globe, PenTool, Lightbulb } from 'lucide-react';
import PerformanceChart from './PerformanceChart';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: 'Advanced Analytics',
      description: 'Harness the power of machine learning and statistical modeling to uncover hidden patterns and predict future market trends.',
      icon: LineChart,
      color: 'bg-orange-50 text-orange-600 border-orange-100'
    },
    {
      title: 'Intelligent Automation',
      description: 'Streamline complex operations with enterprise-grade RPA and AI-driven workflows that reduce friction and manual overhead.',
      icon: Zap,
      color: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      title: 'Data Infrastructure',
      description: 'Architect scalable, robust data pipelines and lakes that ensure single-source-of-truth reliability across your organization.',
      icon: Layers,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100'
    },
    {
      title: 'AI Integration',
      description: 'Embed state-of-the-art Generative AI and natural language processing capabilities securely into your proprietary systems.',
      icon: Cpu,
      color: 'bg-slate-50 text-slate-700 border-slate-200'
    },
    {
      title: 'Cyber Resilience',
      description: 'Protect vital strategic assets with advanced threat detection, continuous monitoring, and proactive vulnerability assessments.',
      icon: Shield,
      color: 'bg-rose-50 text-rose-600 border-rose-100'
    },
    {
      title: 'Global Systems Sync',
      description: 'Unify disparate global ERPs, CRMs, and legacy mainframes into a cohesive, synchronized real-time operational dashboard.',
      icon: Globe,
      color: 'bg-teal-50 text-teal-600 border-teal-100'
    },
    {
      title: 'Data Annotation',
      description: 'High-quality, secure data labeling and annotation services to train, fine-tune, and validate your enterprise machine learning models.',
      icon: PenTool,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      title: 'Strategic Consulting',
      description: 'Expert advisory services to align your complex data initiatives with core business objectives and drive measurable ROI.',
      icon: Lightbulb,
      color: 'bg-amber-50 text-amber-600 border-amber-100'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Core Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Strategic Capabilities for the Modern Enterprise</h3>
          <p className="text-lg text-slate-600">
            We bridge the gap between raw data and actionable strategy, providing end-to-end digital solutions that drive efficiency and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl border mb-6 transition-transform group-hover:-translate-y-1 ${service.color}`}>
                <service.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 md:p-12 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/3">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Proven Performance Growth</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
                Our optimized data pipelines and advanced annotation methodologies consistently deliver exponential gains in processing volume while driving machine learning model accuracy to elite enterprise thresholds.
              </p>
              <div className="flex flex-col gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500 shadow-sm shadow-orange-500/50"></div>
                    <span className="text-sm font-bold text-slate-700">Model Accuracy</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">98%</span>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-sky-500 shadow-sm shadow-sky-500/50"></div>
                    <span className="text-sm font-bold text-slate-700">Data Volume (TB)</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">+191% YTD</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <PerformanceChart />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
