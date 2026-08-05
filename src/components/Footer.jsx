const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-dark relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-2xl font-bold font-mono flex items-center gap-2">
          <span className="text-primary">&lt;</span>
          <span className="text-slate-900 dark:text-white">Hithesh K</span>
          <span className="text-secondary"> /&gt;</span>
        </div>

        <p className="text-slate-500 dark:text-white/40 text-sm font-mono">
          &copy; {currentYear} Hithesh K. All systems nominal.
        </p>

        <div className="flex gap-6 text-sm font-mono text-slate-600 dark:text-white/50">
          <a href="#" className="hover:text-primary transition-colors">INIT</a>
          <a href="#projects" className="hover:text-secondary transition-colors">MODULES</a>
          <a href="#contact" className="hover:text-accent transition-colors">COMMS</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
