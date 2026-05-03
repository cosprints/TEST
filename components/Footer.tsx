import React from 'react';

function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-black/[.08] pt-20 pb-10 text-[#0A0A0A]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-9 md:grid-cols-[1fr_auto] md:items-start">
          <nav className="flex flex-col gap-5">
            <button
              onClick={() => scrollToSection('community-sprints')}
              className="font-display font-bold text-left tracking-[-0.03em] leading-none text-[#0A0A0A] hover:text-[#6B6B6B] transition-colors text-[36px] sm:text-[48px] lg:text-[72px]"
            >
              Комьюнити спринты →
            </button>
            <button
              onClick={() => scrollToSection('ai-cases')}
              className="font-display font-bold text-left tracking-[-0.03em] leading-none text-[#0A0A0A] hover:text-[#6B6B6B] transition-colors text-[36px] sm:text-[48px] lg:text-[72px]"
            >
              Гайды →
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="font-display font-bold text-left tracking-[-0.03em] leading-none text-[#0A0A0A] hover:text-[#6B6B6B] transition-colors text-[36px] sm:text-[48px] lg:text-[72px]"
            >
              Сообщество →
            </button>
          </nav>

          <div className="flex flex-col gap-5 md:items-end">
            <div className="md:text-right">
              <div className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#9C9C9C]">По вопросам</div>
              <a
                href="mailto:info@cosprints.ai"
                className="mt-1 inline-block text-[16px] font-semibold text-[#0A0A0A] underline underline-offset-4"
              >
                info@cosprints.ai
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href="https://t.me/communitysprints"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[.08] bg-[#F5F5F5] text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 4.5L2.5 11.5l5 2 2.5 7 3-4 5 4 3-16zm-3 2L9 14l-1 4-1-4 11.5-7.5z" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/102645067"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[.08] bg-[#F5F5F5] text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.5 18H6V10h2.5v8zM7.25 8.75A1.25 1.25 0 117.25 6.25 1.25 1.25 0 017.25 8.75zM18 18h-2.5v-4c0-1-.5-1.75-1.5-1.75S12.5 13 12.5 14v4H10V10h2.5v1c.5-.75 1.5-1.25 2.5-1.25 2 0 3 1.5 3 3.25V18z" /></svg>
              </a>
            </div>

            <img src="/logo_main.svg" alt="Community Sprints" className="h-12 w-auto" />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-black/[.08] pt-7 text-[13px] text-[#9C9C9C] md:flex-row md:justify-between">
          <div>Community Sprints © 2026</div>
          <div>Образовательная платформа для роста профессиональных и бизнес-навыков.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
