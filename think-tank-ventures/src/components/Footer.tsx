import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo isDark={true} />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Pioneering Data-Driven Strategy and Advanced Analytics for the Modern Enterprise.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Advanced Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Intelligent Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About TTV</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Portal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Research Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Client Login</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Think Tank Ventures. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
