export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#020305] border-t border-gray-200 dark:border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="text-3xl font-bold font-outfit bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Xplore.
            </span>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Architecting next-generation solutions for modern enterprise. We blend finance with elite tech.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Digital Accounting</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Strategic Tax Planning</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Cybersecurity Assessment</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">AI & Machine Learning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-light">
              Subscribe to stay up to date with the latest financial and tech insights.
            </p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-l-lg px-4 py-2 w-full text-sm outline-none focus:border-blue-500 dark:text-white" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-slate-500 font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Xplore Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
