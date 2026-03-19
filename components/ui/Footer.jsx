export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Xplore.
          </span>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Next-Generation Solutions for Modern Business.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Twitter</a>
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">GitHub</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center md:text-left text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Xplore Inc. All rights reserved.
      </div>
    </footer>
  );
}
