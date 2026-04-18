import React from 'react';
import { ArrowRight, Send, Linkedin } from 'lucide-react';

const PLACEHOLDER_IMG =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23eee" width="100" height="100"/%3E%3C/svg%3E';

type Tile = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  href: string;
  theme: 'light' | 'dark' | 'gradient-blue' | 'gradient-violet' | 'gradient-peach' | 'gradient-sky';
  image?: string;
  cta?: string;
};

const tiles: Tile[] = [
  {
    id: 'pmm',
    eyebrow: 'Community Sprint',
    title: 'AI-Native PMM',
    subtitle: 'Стань Product Marketing Manager нового поколения.',
    href: '#',
    theme: 'dark',
    cta: 'Узнать больше',
  },
  {
    id: 'marketer',
    eyebrow: 'Community Sprint',
    title: 'AI-Native маркетолог',
    subtitle: 'Осваивай инструменты, которые меняют правила маркетинга.',
    href: '#',
    theme: 'gradient-violet',
    cta: 'Узнать больше',
  },
  {
    id: 'team',
    eyebrow: 'Community Sprint',
    title: 'AI-Native team',
    subtitle: 'Превращай команду в AI-first организацию.',
    href: '#',
    theme: 'gradient-blue',
    cta: 'Узнать больше',
  },
  {
    id: 'linkedin',
    eyebrow: 'Community Sprint',
    title: 'LinkedIn Legend',
    subtitle: 'Построй личный бренд и расти аудиторию системно.',
    href: '#',
    theme: 'gradient-sky',
    cta: 'Узнать больше',
  },
];

const secondaryTiles: Tile[] = [
  {
    id: 'artifacts',
    eyebrow: 'Артефакты',
    title: 'Материалы с конференций',
    subtitle: 'Презентации, записи и инсайты от топовых спикеров.',
    href: '#artifacts',
    theme: 'light',
    image: '/conf_1.jpg',
    cta: 'Смотреть',
  },
  {
    id: 'automation',
    eyebrow: 'Для бизнеса',
    title: 'AI-автоматизация для компаний',
    subtitle: 'Внедряй AI с топ-экспертами рынка.',
    href: '#automation',
    theme: 'gradient-peach',
    cta: 'Оставить заявку',
  },
];

const themeClasses: Record<Tile['theme'], string> = {
  light: 'bg-[#f5f5f7] text-black',
  dark: 'bg-black text-white',
  'gradient-blue': 'text-white bg-gradient-to-br from-[#1d3557] via-[#2b6cb0] to-[#4299e1]',
  'gradient-violet': 'text-white bg-gradient-to-br from-[#2d1b4e] via-[#6b46c1] to-[#a78bfa]',
  'gradient-peach': 'text-black bg-gradient-to-br from-[#ffe7d1] via-[#ffd3b6] to-[#ff9a8b]',
  'gradient-sky': 'text-black bg-gradient-to-br from-[#e0f2fe] via-[#bae6fd] to-[#7dd3fc]',
};

function TileCard({ tile, large = false }: { tile: Tile; large?: boolean }) {
  const accent =
    tile.theme === 'dark' || tile.theme.startsWith('gradient-blue') || tile.theme.startsWith('gradient-violet')
      ? 'text-white'
      : 'text-black';
  const linkAccent =
    tile.theme === 'dark' || tile.theme.startsWith('gradient-blue') || tile.theme.startsWith('gradient-violet')
      ? 'text-[#7fb8ff] hover:text-[#a5ccff]'
      : 'text-[#0071e3] hover:text-[#0077ed]';

  return (
    <a
      href={tile.href}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] ${themeClasses[tile.theme]} ${large ? 'min-h-[580px] md:min-h-[640px]' : 'min-h-[480px] md:min-h-[520px]'} transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl`}
    >
      <div className="relative z-10 p-8 md:p-12">
        <p className={`text-xs md:text-sm font-medium uppercase tracking-[0.2em] opacity-70 ${accent}`}>
          {tile.eyebrow}
        </p>
        <h3
          className={`mt-3 font-semibold tracking-tight ${accent} ${large ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-3xl md:text-4xl lg:text-5xl'}`}
          style={{ letterSpacing: '-0.03em' }}
        >
          {tile.title}
        </h3>
        <p className={`mt-4 max-w-xl text-base md:text-lg opacity-80 ${accent}`}>{tile.subtitle}</p>
      </div>

      {tile.image && (
        <div className="relative mt-auto h-52 md:h-64 w-full overflow-hidden">
          <img
            src={tile.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = PLACEHOLDER_IMG;
            }}
          />
        </div>
      )}

      <div className="relative z-10 flex items-center gap-2 px-8 md:px-12 pb-8 md:pb-12">
        <span className={`inline-flex items-center gap-1.5 text-base md:text-lg font-medium ${linkAccent}`}>
          {tile.cta ?? 'Подробнее'}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}

function HomePage() {
  return (
    <div className="bg-[#fbfbfd] text-black" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm md:text-base font-medium text-[#6e6e73] uppercase tracking-[0.25em]">
            Community Sprints
          </p>
          <h1
            className="mt-6 text-5xl md:text-7xl lg:text-[96px] font-semibold text-black leading-[1.05]"
            style={{ letterSpacing: '-0.04em' }}
          >
            Здесь становятся
            <br />
            <span className="bg-gradient-to-r from-[#0071e3] via-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">
              AI-native профессионалом
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-[#6e6e73]">
            Спринты, артефакты и AI-автоматизация — всё, что нужно, чтобы работать как специалист нового времени.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#sprints"
              className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-7 py-3 text-base font-medium text-white transition-colors hover:bg-[#0077ed]"
            >
              Выбрать спринт
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#automation"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 text-base font-medium text-black transition-colors hover:bg-black/5"
            >
              Для компаний
            </a>
          </div>
        </div>
      </section>

      {/* Sprints grid */}
      <section id="sprints" className="pb-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 md:mb-12 flex items-end justify-between px-2">
            <h2
              className="text-3xl md:text-5xl font-semibold text-black"
              style={{ letterSpacing: '-0.03em' }}
            >
              Спринты
            </h2>
            <p className="hidden md:block max-w-sm text-right text-[#6e6e73]">
              Четыре программы. Один принцип — практика каждый день с AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {tiles.map((tile) => (
              <TileCard key={tile.id} tile={tile} />
            ))}
          </div>
        </div>
      </section>

      {/* Secondary grid */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {secondaryTiles.map((tile) => (
              <TileCard key={tile.id} tile={tile} />
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2
            className="text-4xl md:text-6xl font-semibold text-black"
            style={{ letterSpacing: '-0.03em' }}
          >
            Присоединяйся к комьюнити
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#6e6e73]">
            Новости, разборы и встречи — в Telegram-канале и LinkedIn-группе Community Sprints.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://t.me/communitysprints"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-base font-medium text-white transition-colors hover:bg-[#1d1d1f]"
            >
              <Send className="h-4 w-4" />
              Telegram-канал
            </a>
            <a
              href="https://www.linkedin.com/company/102645067"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 text-base font-medium text-black transition-colors hover:bg-black/5"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn-группа
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
