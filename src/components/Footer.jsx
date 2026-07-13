import { profile } from '../data/content.js';

const Footer = () => (
  <footer className="border-t border-white/5 py-8">
    <div className="section-shell flex flex-col items-center justify-between gap-3 text-xs text-zinc-600 sm:flex-row">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <p className="font-mono">Built with React, Vite &amp; Tailwind.</p>
    </div>
  </footer>
);

export default Footer;
