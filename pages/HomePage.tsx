import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { SPRINTS, type Sprint } from '../data/sprintData';

const PARTNERS = [
  { name: 'Plata', src: '/partner-plata.png', tall: false },
  { name: 'Ozon', src: '/partner-ozon.png', tall: false },
  { name: 'Avito', src: '/partner-avito.svg', tall: false },
  { name: 'Yandex', src: '/partner-yandex.svg', tall: false },
  { name: 'Raiffeisen', src: '/partner-raiffeisen.svg', tall: false },
  { name: 'Т Банк', src: '/partner-tbank.svg', tall: false },
  { name: 'Умскул', src: '/partner-umskul.svg', tall: false },
  { name: 'ВКонтакте', src: '/partner-vk.svg', tall: false },
];

type Level = {
  n: string;
  prefix: string;
  title: string;
  sub: string;
};

const LEVELS: Level[] = [
  {
    n: '01',
    prefix: 'Базовый',
    title: 'Чат',
    sub: 'Взаимодействие только в диалоговом окне ChatGPT или аналогов.',
  },
  {
    n: '02',
    prefix: 'Продвинутый',
    title: 'AI-агенты',
    sub: 'AI выполняет задачи в твоей инфраструктуре: читает почту, ходит в API, создаёт задачи. Ты ставишь цель и контролируешь результат.',
  },
  {
    n: '03',
    prefix: 'AI-native',
    title: 'Команды AI-агентов',
    sub: 'Несколько агентов с ролями координируются и владеют процессом целиком. Ты задаёшь рамку и принимаешь финальный результат.',
  },
];

type Guide = {
  id: number;
  title: string;
  time: string;
  cover: string;
  coverLabel: string;
  author: string;
  authorPhoto: string;
};

const GUIDES: Guide[] = [
  {
    id: 1,
    title: 'Как нанять первого growth-маркетолога без переплаты',
    time: '10 мин чтения',
    cover: 'linear-gradient(135deg,#ffd66e 0%,#ff7a5c 100%)',
    coverLabel: '+1',
    author: 'Виктория Харламова',
    authorPhoto: '/expert-victoria.jpeg',
  },
  {
    id: 2,
    title: 'Карьерные треки маркетинговой команды',
    time: '15 мин чтения',
    cover: 'linear-gradient(135deg,#9b87f5 0%,#5e60ce 100%)',
    coverLabel: 'Q1',
    author: 'Дмитрий Ивановский',
    authorPhoto: '/expert-dmitry-i.jpeg',
  },
  {
    id: 3,
    title: 'Квартальные карьерные разговоры, после которых люди растут',
    time: '12 мин чтения',
    cover: 'linear-gradient(135deg,#ffe28a 0%,#ffaf7b 100%)',
    coverLabel: 'ABC',
    author: 'Максим Епифанов',
    authorPhoto: '/expert-maxim.jpeg',
  },
];

function LinkedInBadge({ size = 14 }: { size?: number }) {
  return <img src="/linkedin-icon.svg" alt="" style={{ width: size, height: size }} className="inline-block align-[-2px]" />;
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Hero() {
  return (
    <section className="bg-white pt-20 pb-20 md:pt-24 md:pb-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 text-center">
        <button
          onClick={() => scrollTo('community-sprints')}
          className="text-[20px] sm:text-[24px] md:text-[32px] font-medium tracking-[0.01em] text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
        >
          ✦ Комьюнити профессионалов и предпринимателей ✦
        </button>

        <h1 className="font-display font-bold text-[#0A0A0A] mt-6 mb-7 leading-[0.98] tracking-[-0.035em] text-[clamp(40px,7vw,104px)] [text-wrap:balance]">
          Здесь становятся
          <br />
          <span className="text-[#396AFC]">AI-native</span>
        </h1>

        <button
          onClick={() => scrollTo('community-sprints')}
          className="inline-block max-w-[780px] rounded-full border-2 border-[#0A0A0A] bg-transparent px-8 py-4 text-[16px] sm:text-[18px] font-medium leading-[1.35] text-[#0A0A0A] transition-colors hover:border-[#396AFC] hover:text-[#396AFC]"
        >
          3-недельные спринты с Live-встречами для прокачки AI-скиллов в маркетинге, продукте, контенте и продажах
        </button>

        <div className="mt-16">
          <div className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#9C9C9C]">
            В нашем комьюнити сотрудники топ-компаний
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-9 gap-y-5">
            {PARTNERS.map((p) => (
              <img
                key={p.name}
                src={p.src}
                alt={p.name}
                title={p.name}
                className={`${p.name === 'Plata' ? 'h-[18px]' : 'h-[26px]'} w-auto opacity-80 [filter:grayscale(1)_brightness(.4)]`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MaturityLadder() {
  const cardBg: Record<number, string> = {
    1: 'bg-white border-black/[.08] text-[#0A0A0A]',
    2: 'bg-[#FAFAFA] border-black/[.08] text-[#0A0A0A]',
    3: 'bg-[#0A0A0A] border-[#0A0A0A] text-white',
  };
  return (
    <section className="bg-white border-t border-black/[.08] py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display font-bold text-[#0A0A0A] m-0 leading-[1.02] tracking-[-0.03em] [text-wrap:balance] text-[clamp(28px,4.4vw,64px)]">
            3 уровня использования <span className="text-[#396AFC]">AI</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[18px] sm:text-[20px] text-[#6B6B6B] tracking-[-0.005em]">
            Вы на каком уровне использования AI?
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            {LEVELS.map((l, i) => {
              const idx = i + 1 as 1 | 2 | 3;
              const isDark = idx === 3;
              return (
                <article
                  key={l.n}
                  className={`flex flex-col gap-3.5 rounded-[24px] border px-6 pt-7 pb-7 transition-all duration-200 hover:-translate-y-0.5 ${cardBg[idx]} ${isDark ? 'hover:shadow-2xl' : 'hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:border-black/[.16]'}`}
                >
                  <div className={`font-display font-bold text-[40px] leading-none tracking-[-0.04em] ${isDark ? 'text-white' : 'text-[#0A0A0A]'}`}>
                    {l.n}
                  </div>
                  <div className={`text-[12px] font-medium uppercase tracking-[0.12em] ${isDark ? 'text-white/55' : 'text-[#9C9C9C]'}`}>
                    {l.prefix}
                  </div>
                  <h3 className={`font-display font-semibold m-0 text-[26px] leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-white' : 'text-[#0A0A0A]'}`}>
                    {l.title}
                  </h3>
                  <p className={`m-0 flex-1 text-[15px] leading-[1.5] tracking-[-0.005em] ${isDark ? 'text-white/70' : 'text-[#6B6B6B]'}`}>
                    {l.sub}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SprintRow({ s }: { s: Sprint }) {
  return (
    <Link
      to={`/sprints/${s.id}`}
      className="grid grid-cols-1 lg:grid-cols-[360px_1fr] overflow-hidden rounded-[28px] border border-black/[.08] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-black/[.16] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
      <div className="relative min-h-[240px] lg:min-h-[320px] bg-[#F5F5F5]">
        <img src={s.expertPhoto} alt={s.expert} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="flex flex-col justify-center gap-4 px-6 py-7 sm:px-10 sm:py-9">
        <div className="flex flex-wrap items-center gap-2 text-[14px] tracking-[-0.005em] text-[#6B6B6B]">
          <span className="font-semibold text-[#0A0A0A]">{s.expert}</span>
          <LinkedInBadge size={16} />
          <span>— {s.expertRole}</span>
        </div>
        <h3 className="font-display font-bold m-0 leading-none tracking-[-0.03em] text-[clamp(28px,4vw,56px)]">
          {s.name}
        </h3>
        <p className="m-0 max-w-[540px] text-[16px] sm:text-[18px] leading-[1.45] tracking-[-0.005em] text-[#6B6B6B]">
          {s.tagline}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-[18px] gap-y-2.5">
          <span className="rounded-full border border-black/[.08] bg-[#F5F5F5] px-3.5 py-1.5 text-[13px] font-medium text-[#0A0A0A]">
            Старт · {s.starts}
          </span>
          <span className="rounded-full border border-[#0A0A0A] bg-[#0A0A0A] px-3.5 py-1.5 text-[13px] font-medium text-white">
            {s.price}
          </span>
          <span className="text-[14px] tracking-[-0.005em] text-[#6B6B6B]">
            <b className="mr-1 font-display font-bold text-[18px] tracking-[-0.02em] text-[#0A0A0A]">{s.practice}%</b>
            практики
          </span>
          <span className="text-[14px] tracking-[-0.005em] text-[#6B6B6B]">
            <b className="mr-1 font-display font-bold text-[18px] tracking-[-0.02em] text-[#0A0A0A]">{s.weeks}</b>
            недели
          </span>
          <span className="text-[14px] tracking-[-0.005em] text-[#6B6B6B]">
            <b className="mr-1 font-display font-bold text-[18px] tracking-[-0.02em] text-[#0A0A0A]">{s.meetings}</b>
            live-встречи
          </span>
        </div>
        <div className="mt-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0A0A0A] bg-[#0A0A0A] px-7 py-3.5 text-[15px] font-medium tracking-[-0.005em] text-white transition-colors group-hover:bg-[#1f1f1f]">
            Подробнее →
          </span>
        </div>
      </div>
    </Link>
  );
}

function CommunitySprints() {
  return (
    <section id="community-sprints" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <h2 className="font-display font-bold m-0 mb-12 leading-[0.96] tracking-[-0.035em] text-[#0A0A0A] text-[clamp(48px,8.4vw,124px)]">
          Комьюнити спринты
        </h2>
        <div className="flex flex-col gap-6">
          {SPRINTS.map((s) => <SprintRow key={s.id} s={s} />)}
        </div>
      </div>
    </section>
  );
}

function GuideTile({ g }: { g: Guide }) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-black/[.08] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-black/[.16] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
      <div
        className="aspect-[5/3] flex items-center justify-center font-display font-extrabold text-[44px] tracking-[-0.02em] text-[#0A0A0A] [filter:grayscale(1)_brightness(.9)] border-b border-black/[.08]"
        style={{ background: g.cover }}
      >
        {g.coverLabel}
      </div>
      <div className="px-6 pt-5 pb-6">
        <h4 className="font-display font-semibold m-0 mb-1.5 text-[20px] leading-[1.2] tracking-[-0.02em] text-[#0A0A0A]">
          {g.title}
        </h4>
        <div className="mb-3 text-[12px] uppercase tracking-[0.06em] text-[#9C9C9C]">{g.time}</div>
        <div className="flex items-center gap-2 text-[13px] text-[#6B6B6B]">
          <img src={g.authorPhoto} alt="" className="h-7 w-7 rounded-full object-cover" />
          <div>
            <strong className="font-semibold text-[#0A0A0A]">{g.author}</strong> <LinkedInBadge size={12} />
          </div>
        </div>
      </div>
    </article>
  );
}

function AiCases() {
  return (
    <section id="ai-cases" className="bg-white py-20 md:py-28 border-t border-black/[.08]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <h2 className="font-display font-bold m-0 mb-12 leading-[0.96] tracking-[-0.035em] text-[#0A0A0A] text-[clamp(48px,8.4vw,124px)]">
          AI-кейсы комьюнити
        </h2>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
          {GUIDES.map((g) => <GuideTile key={g.id} g={g} />)}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="community" className="bg-white border-t border-black/[.08] py-24 text-center">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <h3 className="font-display font-bold m-0 mb-3 leading-[0.98] tracking-[-0.035em] text-[#0A0A0A] text-[clamp(40px,5.6vw,80px)]">
          Подпишись на Telegram-канал
        </h3>
        <p className="mt-3 mb-7 text-[18px] text-[#6B6B6B] tracking-[-0.005em]">
          Чтобы первыми узнавать о новых спринтах, эфирах и материалах
        </p>
        <a
          href="https://t.me/communitysprints"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full border border-[#0A0A0A] bg-[#0A0A0A] px-8 py-4 text-[16px] font-medium tracking-[-0.005em] text-white transition-all hover:bg-[#1f1f1f] hover:-translate-y-0.5"
        >
          <Send className="h-5 w-5" />
          Подписаться на канал
        </a>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main className="bg-white text-[#0A0A0A]">
      <Hero />
      <MaturityLadder />
      <CommunitySprints />
      <AiCases />
      <Newsletter />
    </main>
  );
}

export default HomePage;
