import React from 'react';
import { Send, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#f5f5f7] py-12 text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-black">Community Sprints</p>
              <p className="mt-1 text-sm text-[#6e6e73]">Здесь становятся AI-native профессионалом.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://t.me/communitysprints"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-black/5"
              >
                <Send className="h-4 w-4" />
                Telegram
              </a>
              <a
                href="https://www.linkedin.com/company/102645067"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-black/5"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-black/10 pt-6">
            <div className="flex gap-6">
              <a href="/terms-of-use" className="text-sm text-[#6e6e73] hover:text-black transition-colors">
                Terms of Use
              </a>
              <a href="/privacy-policy" className="text-sm text-[#6e6e73] hover:text-black transition-colors">
                Privacy Policy
              </a>
            </div>
            <div className="text-sm text-[#6e6e73]">
              © Community Sprints, 2026, Volee Technologies OU, Tallinn
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
