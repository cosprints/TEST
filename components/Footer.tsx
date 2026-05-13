import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-cs-black text-white">
      <div className="cs-container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Display nav links */}
          <nav className="md:col-span-7 flex flex-col gap-3 md:gap-4">
            <a
              href="#experts"
              className="group inline-flex items-center gap-3 font-display font-bold text-3xl lg:text-5xl tracking-cs-display hover:text-cs-blue-200 transition-colors"
            >
              Speakers
              <ArrowRight className="h-7 w-7 lg:h-9 lg:w-9 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#schedule"
              className="group inline-flex items-center gap-3 font-display font-bold text-3xl lg:text-5xl tracking-cs-display hover:text-cs-blue-200 transition-colors"
            >
              Schedule
              <ArrowRight className="h-7 w-7 lg:h-9 lg:w-9 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#community"
              className="group inline-flex items-center gap-3 font-display font-bold text-3xl lg:text-5xl tracking-cs-display hover:text-cs-blue-200 transition-colors"
            >
              About us
              <ArrowRight className="h-7 w-7 lg:h-9 lg:w-9 transition-transform group-hover:translate-x-1" />
            </a>
          </nav>

          {/* Right column — contact + tagline */}
          <div className="md:col-span-5 flex flex-col gap-6 md:items-end md:text-right">
            <div>
              <p className="text-cs-gray-400 text-sm uppercase tracking-wider mb-2">
                For questions
              </p>
              <a
                href="mailto:ab@communitysprints.io"
                className="font-display font-bold text-xl lg:text-2xl hover:text-cs-blue-200 transition-colors"
              >
                ab@communitysprints.io
              </a>
            </div>

            <div className="flex md:justify-end gap-3 flex-wrap">
              <a
                href="https://communitysprints.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-cs-pill border border-white/20 text-cs-orange hover:bg-white/5 transition-colors text-sm font-medium"
              >
                Substack
              </a>
              <a
                href="https://www.linkedin.com/company/communitysprints"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-cs-pill border border-white/20 hover:bg-white/5 transition-colors text-sm font-medium"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row — tagline + legal + wordmark */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-2">
            <p className="text-cs-gray-400 text-sm max-w-md">
              E-learning platform to grow professional and business skills.
            </p>
            <div className="flex gap-6 text-sm text-cs-gray-400">
              <Link to="/terms-of-use" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-cs-gray-500 text-xs pt-2">
              © Community Sprints, 2026, Volee Technologies OU, Tallinn
            </p>
          </div>

          <div className="font-display font-black text-3xl lg:text-5xl tracking-cs-display select-none">
            community sprints
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
