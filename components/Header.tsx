import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const PLACEHOLDER_IMG =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23eee" width="100" height="100"/%3E%3C/svg%3E';

const navItems = [
  { id: 'sprints', label: 'Спринты' },
  { id: 'artifacts', label: 'Артефакты' },
  { id: 'automation', label: 'Для компаний' },
];

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = location.pathname === '/' || location.pathname === '';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = PLACEHOLDER_IMG;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/logo_main.svg"
              alt="Community Sprints"
              className="h-7 md:h-8 w-auto"
              onError={handleImageError}
            />
          </Link>

          {isHome && (
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-black/80 transition-colors hover:text-black"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-2">
            <a
              href="https://t.me/communitysprints"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center rounded-full bg-[#0071e3] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#0077ed]"
            >
              Присоединиться
            </a>
            {isHome && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {isHome && isMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left rounded-lg px-2 py-2 text-base font-medium text-black/80 transition-colors hover:bg-black/5 hover:text-black"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://t.me/communitysprints"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-[#0071e3] px-4 py-2 text-center text-sm font-medium text-white"
            >
              Присоединиться
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
