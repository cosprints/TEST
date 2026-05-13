import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const PLACEHOLDER_IMG =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3C/svg%3E';

function Header() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = PLACEHOLDER_IMG;
  };

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState('https://calendly.com/maxpog/ai/');

  useEffect(() => {
    const getPartnerParam = () => {
      const params = new URLSearchParams(window.location.search);
      let partnerParam = params.get('partner');

      if (!partnerParam) {
        const searchStr = window.location.search.slice(1);
        const match = searchStr.match(/^\d+/);
        if (match) {
          partnerParam = match[0];
        }
      }

      return partnerParam;
    };

    const partnerParam = getPartnerParam();

    const updateCalendlyUrl = () => {
      const baseUrl =
        window.innerWidth > 650
          ? 'https://calendly.com/maxpog/ai/2026-01-22T16:00:00+00:00?month=2026-01&date=2026-01-22'
          : 'https://calendly.com/maxpog/ai/';

      const urlWithUtm = partnerParam
        ? `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}utm_source=${partnerParam}`
        : baseUrl;
      setCalendlyUrl(urlWithUtm);
    };

    updateCalendlyUrl();
    window.addEventListener('resize', updateCalendlyUrl);

    return () => window.removeEventListener('resize', updateCalendlyUrl);
  }, []);

  // Lock body scroll while full-screen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems =
    location.pathname === '/'
      ? [
          { label: 'Speakers', section: 'experts' },
          { label: 'Schedule', section: 'schedule' },
          { label: 'About us', section: 'community' },
          { label: 'FAQ', section: 'faq' },
        ]
      : [];

  return (
    <>
      <header className="w-full bg-white/95 backdrop-blur border-b border-cs-gray-200 sticky top-[36px] z-50">
        <div className="cs-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/ai-skills-26-logo.png"
                  alt="AI Skills 26"
                  className="h-8 md:h-10 w-auto"
                  onError={handleImageError}
                />
                <div className="flex items-center gap-1">
                  <span className="text-cs-gray-500 text-[9px] md:text-[10px] font-medium tracking-wide uppercase">
                    by
                  </span>
                  <img
                    src="/csprints.png"
                    alt="Community Sprints"
                    className="h-4 md:h-5 w-auto"
                    onError={handleImageError}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            {navItems.length > 0 ? (
              <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => scrollToSection(item.section)}
                    className="text-cs-ink hover:text-cs-blue font-body font-medium text-[15px] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            ) : (
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  to="/"
                  className="text-cs-ink hover:text-cs-blue font-body font-medium text-[15px] transition-colors"
                >
                  Home
                </Link>
              </nav>
            )}

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex cs-btn-primary text-sm py-2.5"
              >
                Register for free
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Mobile menu button — black pill */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 bg-cs-black text-white rounded-cs-pill hover:bg-cs-ink transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu — opaque black per CS guidelines */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[70] bg-cs-black text-white flex flex-col">
          <div className="cs-container flex items-center justify-between h-16 pt-[36px]">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <img
                src="/ai-skills-26-logo.png"
                alt="AI Skills 26"
                className="h-8 w-auto invert brightness-0"
                onError={handleImageError}
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center h-10 w-10 bg-white text-cs-black rounded-cs-pill"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="cs-container flex-1 flex flex-col justify-center gap-6">
            {(navItems.length > 0
              ? navItems
              : ([{ label: 'Home', section: '' }] as const)
            ).map((item) =>
              navItems.length > 0 ? (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="text-left font-display font-bold text-4xl tracking-cs-display hover:text-cs-blue-200 transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key="home"
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left font-display font-bold text-4xl tracking-cs-display hover:text-cs-blue-200 transition-colors"
                >
                  Home
                </Link>
              ),
            )}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="cs-btn-primary mt-6 self-start text-base"
            >
              Register for free
              <ArrowRight className="h-5 w-5" />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
