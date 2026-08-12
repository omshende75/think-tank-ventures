import { ArrowRight, Activity, Database, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Abstract Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[10%] w-[50%] h-[60%] rounded-full bg-sky-200/50 blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] -left-[10%] w-[40%] h-[50%] rounded-full bg-orange-200/40 blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-indigo-200/40 blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6 border border-orange-200">
              <span className="flex w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Pioneering Data-Driven Strategy
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-sky-500">Insights</span> into Enterprise Value.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Think Tank Ventures (TTV) delivers elite analytical solutions, advanced automation, and comprehensive data intelligence to drive high-stakes strategic decision making.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a href="#platform" className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5 duration-300">
                Explore Platform
                <ArrowRight size={18} />
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">500+</span>
                <span className="text-sm text-slate-500 font-medium">Enterprise Clients</span>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">12B+</span>
                <span className="text-sm text-slate-500 font-medium">Data Points Analyzed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Abstract Data Visualization Hero Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative rounded-2xl bg-white p-6 shadow-2xl border border-slate-100 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-sky-500 to-slate-900"></div>
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-500">Live Analytics</span>
                  <span className="text-2xl font-bold text-slate-900">System Intelligence</span>
                </div>
                <div className="p-2 bg-sky-50 rounded-lg">
                  <Activity className="text-sky-500" size={24} />
                </div>
              </div>

              <div className="space-y-6">
                {/* Mock Chart/Bar Graphic */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">Predictive Modeling</span>
                    <span className="font-bold text-slate-900">94%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '94%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-orange-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">Data Ingestion</span>
                    <span className="font-bold text-slate-900">88%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                      className="h-full bg-sky-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">Risk Mitigation</span>
                    <span className="font-bold text-slate-900">99%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '99%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                      className="h-full bg-slate-900 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100">
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                    <Database size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-medium">Data Lakes</span>
                    <span className="text-sm font-bold text-slate-900">Integrated</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-green-50 rounded-lg text-green-600">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-medium">Security</span>
                    <span className="text-sm font-bold text-slate-900">Validated</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
