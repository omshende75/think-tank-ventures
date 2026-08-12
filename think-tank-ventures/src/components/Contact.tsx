import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
        setStatus('idle');
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("A network error occurred. Please try again.");
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          {/* Left Column: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to transform your enterprise data?</h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Connect with our team of strategic analysts and engineering experts. We partner with forward-thinking organizations to architect scalable, intelligent solutions.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-lg text-slate-700 border border-slate-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600">contact@thinktankventures.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-lg text-slate-700 border border-slate-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600">+1 (800) 555-0199</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-lg text-slate-700 border border-slate-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Global Headquarters</h4>
                  <p className="text-slate-600">100 Innovation Drive, Suite 400<br/>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm relative"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10 border border-slate-200"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Received</h4>
                <p className="text-slate-600 mb-8">
                  Thank you for reaching out. One of our strategic consultants will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-slate-200 text-slate-800 font-medium rounded-lg hover:bg-slate-300 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-slate-700">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    required 
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" 
                    placeholder="John" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-slate-700">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName" 
                    required 
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" 
                  placeholder="john@company.com" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-bold text-slate-700">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" 
                  placeholder="Organization Name" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">How can we help?</label>
                <textarea 
                  id="message" 
                  name="message"
                  required 
                  rows={4} 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all resize-none" 
                  placeholder="Tell us about your data infrastructure needs..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors disabled:bg-slate-400"
              >
                {status === 'submitting' ? 'Sending...' : (
                  <>
                    Submit Inquiry
                    <Send size={18} />
                  </>
                )}
              </button>
              
              <p className="text-xs text-slate-500 text-center mt-4">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
