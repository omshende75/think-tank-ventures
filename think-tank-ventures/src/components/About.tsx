import { Award, Users, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">About TTV</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Empowering enterprises with unmatched data clarity.</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Think Tank Ventures was founded on a singular premise: raw data is a liability until it is transformed into actionable strategy. We are an elite collective of data scientists, security architects, and strategic consultants dedicated to solving the most complex operational challenges.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              With over a decade of experience across global markets, we bridge the gap between theoretical AI capabilities and practical, ROI-driven enterprise integration.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="border-l-2 border-slate-200 pl-4">
                <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
                <div className="text-sm font-medium text-slate-500">Years Experience</div>
              </div>
              <div className="border-l-2 border-slate-200 pl-4">
                <div className="text-4xl font-bold text-slate-900 mb-2">400</div>
                <div className="text-sm font-medium text-slate-500">Global Experts</div>
              </div>
              <div className="border-l-2 border-slate-200 pl-4">
                <div className="text-4xl font-bold text-slate-900 mb-2">99%</div>
                <div className="text-sm font-medium text-slate-500">Client Retention</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
             <div className="aspect-square rounded-2xl bg-slate-100 overflow-hidden relative shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                 alt="Team collaborating on data strategy" 
                 className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
             </div>
             
             {/* Floating Badge 1 */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.8, duration: 0.5 }}
               className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px] animate-[bounce_8s_infinite]"
             >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 bg-orange-100 text-orange-600 rounded-lg">
                    <Award size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 leading-tight">Industry<br/>Leaders</h4>
                </div>
                <p className="text-xs text-slate-500 font-medium">Recognized globally for excellence in predictive analytics.</p>
             </motion.div>
             
             {/* Floating Badge 2 */}
             <motion.div 
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 1, duration: 0.5 }}
               className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-[bounce_9s_infinite_reverse]"
             >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 bg-sky-100 text-sky-600 rounded-lg">
                    <Globe2 size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 leading-tight">Global<br/>Presence</h4>
                </div>
                <p className="text-xs text-slate-500 font-medium">Offices spanning 12 strategic international locations.</p>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
