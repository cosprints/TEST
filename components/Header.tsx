import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'community-sprints', label: 'Комьюнити спринты' },
  { id: 'ai-cases', label: 'Гайды' },
  { id: 'community', label: 'Сообщество' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.08] bg-white/85 backdrop-blur-[14px] backdrop-saturate-[160%]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex h-14 items-center justify-between gap-4">
          <Link to="/" className="flex items-center" aria-label="Community Sprints">
            <img src="/logo_main.svg" alt="Community Sprints" className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[14px] font-medium tracking-[-0.01em] text-[#0A0A0A] transition-colors hover:text-[#6B6B6B]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-[#0A0A0A] text-white"
            aria-label="Меню"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-black/[.08] bg-white">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left rounded-lg px-2 py-3 text-base font-medium text-[#0A0A0A] transition-colors hover:bg-black/5"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
