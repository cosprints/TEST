import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Send } from 'lucide-react';
import { SPRINTS, SPRINT_PAGE_CONTENT, type ProgramStep, type BigTestimonial, type AudienceItem } from '../data/sprintData';

function LinkedInBadge({ size = 14 }: { size?: number }) {
  return <img src="/linkedin-icon.svg" alt="" style={{ width: size, height: size }} className="inline-block align-[-2px]" />;
}

function StatusPill({ kind, label }: { kind: 'soldout' | 'wait' | 'open'; label: string }) {
  const cls =
    kind === 'soldout' ? 'bg-[#fee2e2] text-[#b91c1c]' :
    kind === 'wait' ? 'bg-[#fef3c7] text-[#92400e]' :
    'bg-[#dcfce7] text-[#14532d]';
  return (
    <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] ${cls}`}>
      {label}
    </span>
  );
}

function ProgramAccordion({ step }: { step: ProgramStep }) {
  const [open, setOpen] = useState(!!step.openByDefault);
  return (
    <div className={`overflow-hidden rounded-[18px] border border-black/[.08] bg-white transition-shadow ${open ? 'shadow-[0_4px_16px_rgba(0,0,0,.04)]' : ''}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="grid w-full grid-cols-[64px_1fr_auto_auto] gap-4 sm:grid-cols-[110px_1fr_auto_auto] sm:gap-[18px] items-center px-5 sm:px-6 py-5 text-left"
      >
        <span className="font-display font-bold text-[24px] sm:text-[32px] tracking-[-0.02em] leading-none text-[#0A0A0A] whitespace-nowrap">{step.n}</span>
        <span className="font-display font-semibold text-[18px] sm:text-[22px] tracking-[-0.015em] leading-[1.15] text-[#0A0A0A]">{step.title}</span>
        <span className="hidden sm:inline text-[13px] text-[#9C9C9C] whitespace-nowrap">{step.time}</span>
        <span className={`text-[18px] text-[#9C9C9C] transition-transform ${open ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {open && (
        <div className="flex flex-col gap-2.5 px-5 pb-6 pl-5 sm:pl-32 sm:px-6">
          {step.bullets.map((b, i) => (
            <div key={i} className="text-[15px] leading-[1.55] text-[#3A3A3A]">
              ✦ <span dangerouslySetInnerHTML={{ __html: b }} />
            </div>
          ))}
          {step.result && (
            <div className="mt-3 rounded-xl bg-[#F5F5F5] px-4 py-3.5 text-[14px] leading-[1.5] text-[#0A0A0A]">
              🔥 <strong>Результат для вас:</strong> {step.result}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function BigTestimonial({ t }: { t: BigTestimonial }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-8 rounded-[28px] border border-black/[.08] bg-white p-6 md:p-7 items-start">
      <div className="relative">
        <div className="aspect-square rounded-[18px] p-4 flex items-end text-white" style={{ background: t.cg }}>
          <div className="font-bold text-[18px] tracking-[-0.01em]">{t.tag}</div>
        </div>
        <div
          className="absolute left-4 -bottom-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white text-[#1f2937] font-bold"
          style={{ background: t.ac }}
        >
          {t.ini}
        </div>
      </div>
      <div className="relative">
        <img src="/quote-mark.svg" alt="" className="mb-3 w-9 opacity-35" />
        <div className="border-b border-black/[.08] pb-4 mb-4">
          <div className="font-bold text-[18px] text-[#0A0A0A]">{t.name}</div>
          <div className="text-[14px] text-[#6B6B6B] mt-0.5">
            {t.role} <strong>@</strong> <span className="text-[#0A0A0A] underline underline-offset-[3px]">{t.co}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {t.ps.map((p, i) => (
            <p key={i} className="m-0 text-[15px] leading-[1.55] text-[#3A3A3A]">{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

function AudienceRow({ a, reverse }: { a: AudienceItem; reverse: boolean }) {
  return (
    <div className={`grid items-start gap-9 border-b border-black/[.08] py-8 last:border-b-0 grid-cols-1 ${reverse ? 'md:grid-cols-[1.4fr_1fr]' : 'md:grid-cols-[1fr_1.4fr]'}`}>
      <div className={`font-display font-bold leading-[1.15] tracking-[-0.02em] text-[clamp(22px,2.6vw,36px)] text-[#0A0A0A] ${reverse ? 'md:order-2' : ''}`}>
        {a.label}
      </div>
      <div className="grid grid-cols-[96px_1fr] items-start gap-[18px] rounded-[22px] border border-black/[.08] bg-white p-5">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full text-[30px] font-bold text-[#1f2937]"
          style={{ background: a.avatarColor }}
        >
          {a.initials}
        </div>
        <div>
          <div className="font-bold text-[16px] text-[#0A0A0A]">{a.name}</div>
          <div className="text-[13px] text-[#6B6B6B] mb-2">{a.role} @ <span className="text-[#0A0A0A] underline underline-offset-[3px]">{a.company}</span></div>
          <p className="m-0 text-[14px] leading-[1.55] text-[#3A3A3A]">{a.quote}</p>
        </div>
      </div>
    </div>
  );
}

const SKETCH = {
  flag: '/sketch-hill.svg',
  tools: '/sketch-tools.svg',
  hand: '/sketch-hand.svg',
  handshake: '/sketch-handshake.svg',
  atom: '/sketch-atom.svg',
} as const;

function Sketch({ icon, text, layout, large }: { icon: keyof typeof SKETCH; text: string; layout: 'icon-top' | 'text-top'; large?: boolean }) {
  return (
    <div className={`flex flex-col justify-between gap-3 rounded-[28px] border-2 border-[#0A0A0A] bg-white p-6 min-h-[200px] ${large ? 'items-center text-center' : ''}`}>
      {layout === 'text-top' && (
        <div className="font-display font-bold text-[18px] leading-[1.25] tracking-[-0.01em] text-[#0A0A0A]">{text}</div>
      )}
      <img
        src={SKETCH[icon]}
        alt=""
        className={`object-contain ${large ? 'h-[130px] w-[130px] self-center' : 'h-[88px] w-[88px] self-start'}`}
      />
      {layout === 'icon-top' && (
        <div className={`font-display font-bold leading-[1.25] tracking-[-0.01em] text-[#0A0A0A] ${large ? 'text-[17px]' : 'text-[18px]'}`}>{text}</div>
      )}
    </div>
  );
}

function SprintPage() {
  const { id } = useParams<{ id: string }>();
  const sprint = SPRINTS.find((s) => s.id === id);
  const content = id ? SPRINT_PAGE_CONTENT[id] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!sprint || !content) {
    return (
      <main className="bg-white">
        <div className="mx-auto max-w-[800px] px-5 py-32 text-center">
          <h1 className="font-display font-bold text-[48px] tracking-[-0.03em] text-[#0A0A0A]">Спринт не найден</h1>
          <Link to="/" className="mt-8 inline-block text-[16px] text-[#396AFC] underline">← к спринтам</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white text-[#0A0A0A]">
      {/* Quicklinks bar */}
      <div className="bg-white border-b border-black/[.08] py-3.5">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="text-[14px] font-medium text-[#3A3A3A] hover:text-[#0A0A0A]">← к спринтам</Link>
          <div className="flex flex-wrap gap-5 sm:gap-6">
            {SPRINTS.filter((s) => s.id !== sprint.id).slice(0, 3).map((s) => (
              <Link key={s.id} to={`/sprints/${s.id}`} className="text-[14px] font-semibold text-[#0A0A0A] hover:text-[#396AFC]">
                {s.name} →
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-white border-b border-black/[.08] py-14 md:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-start gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="mb-5 inline-block rounded-full border border-black/[.16] bg-white px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.04em] text-[#0A0A0A]">
                Комьюнити Спринт
              </div>
              <h1 className="font-display font-bold m-0 mb-6 leading-none tracking-[-0.03em] text-[clamp(40px,6vw,88px)]">
                {sprint.name}
              </h1>
              <p className="m-0 mb-8 max-w-[620px] text-[18px] leading-[1.55] text-[#6B6B6B]">{content.heroSub}</p>
              <div className="flex max-w-[460px] items-center gap-3.5 rounded-[18px] border border-black/[.08] bg-[#F5F5F5] px-4 py-3.5">
                <img src={sprint.expertPhoto} alt={sprint.expert} className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-1.5 text-[16px] font-bold text-[#0A0A0A]">{sprint.expert} <LinkedInBadge size={14} /></div>
                  <div className="text-[13px] text-[#6B6B6B]">{sprint.expertRole}</div>
                  <div className="mt-0.5 text-[12px] text-[#9C9C9C]">{content.companyName}</div>
                </div>
              </div>
            </div>

            <aside className="rounded-[24px] border border-black/[.08] bg-white p-7 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              <div className="mb-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-[#0A0A0A]">{sprint.name}</div>
              <div className="font-display font-bold text-[46px] leading-none tracking-[-0.025em]">{sprint.price}</div>
              <div className="mb-5 mt-1 text-[12px] uppercase tracking-[0.04em] text-[#9C9C9C]">Early birds</div>
              <div className="mb-5">
                <div className="mb-3 text-[14px] font-bold text-[#0A0A0A]">Расписание потоков</div>
                {content.schedule.map((row, i) => (
                  <div key={i} className="flex items-center justify-between border-t border-black/[.08] py-2.5 text-[14px]">
                    <span>{row.date}</span>
                    <StatusPill kind={row.statusKind} label={row.status} />
                  </div>
                ))}
              </div>
              <button className="w-full rounded-full border border-[#0A0A0A] bg-[#0A0A0A] px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#1f1f1f]">
                Забронировать место
              </button>
            </aside>
          </div>
        </div>
      </section>

      {/* COVER */}
      <section className="bg-white py-6">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div
            className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-[#0A0A0A] flex items-end p-10 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            style={{
              backgroundImage: `url(${sprint.expertPhoto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black/55" />
            <div className="relative z-10 font-display font-bold text-white leading-none tracking-[-0.03em] text-[clamp(40px,6vw,84px)] [text-shadow:0_2px_24px_rgba(0,0,0,.4)]">
              {sprint.name}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-7">
            {content.intro.map((line, i) => (
              <div key={i} className="flex items-start gap-[18px]">
                <div className="text-[32px] leading-none w-11 shrink-0">{line.emoji}</div>
                <div
                  className="text-[17px] leading-[1.55] text-[#3A3A3A]"
                  dangerouslySetInnerHTML={{ __html: line.html }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <h2 className="font-display font-bold m-0 mb-7 leading-[1.05] tracking-[-0.025em] text-[clamp(36px,4.6vw,64px)]">
            Результаты участия в спринте
          </h2>
          <div className="flex flex-col gap-9">
            {content.bigTestimonials.map((t, i) => <BigTestimonial key={i} t={t} />)}
          </div>
        </div>
      </section>

      {/* COMMUNITY MAP */}
      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <h3 className="font-display font-bold m-0 mb-7 leading-[1.1] tracking-[-0.025em] text-[clamp(28px,3.4vw,44px)]">
            Мы собрали <span className="text-[#396AFC] underline underline-offset-[3px]">топовое комьюнити</span> маркетологов и продактов из участников
          </h3>
          <div className="overflow-hidden rounded-[28px] border border-black/[.08] bg-white p-6">
            <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#9C9C9C]">
              Community Map · {content.studentsCount}+ участников
            </div>
            <img src="/community-map.jpg" alt="Участники комьюнити" className="block w-full rounded-2xl" />
          </div>
          <div className="mt-5 text-[16px] text-[#3A3A3A]">
            <strong className="text-[#0A0A0A]">Посмотреть всех участников комьюнити</strong>{' '}
            <span className="text-[#396AFC] underline underline-offset-[3px]">тут</span>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="bg-white border-t border-black/[.08] py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <h2 className="font-display font-bold m-0 mb-6 leading-[1.05] tracking-[-0.025em] text-[clamp(36px,4.6vw,64px)]">
            Программа спринта
          </h2>
          <p className="m-0 mb-9 max-w-[720px] text-[17px] leading-[1.55] text-[#6B6B6B]">{content.programSub}</p>
          <div className="flex flex-col gap-3">
            {content.program.map((step, i) => <ProgramAccordion key={i} step={step} />)}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          {content.audience.map((a, i) => <AudienceRow key={i} a={a} reverse={i % 2 === 1} />)}
        </div>
      </section>

      {/* COMMUNITY BENEFIT */}
      <section className="bg-white border-t border-black/[.08] py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <h2 className="font-display font-bold m-0 mb-7 leading-[1.05] tracking-[-0.025em] text-[clamp(36px,4.6vw,64px)]">
            Сильное комьюнити
          </h2>
          <p className="m-0 mb-8 max-w-[760px] text-[17px] leading-[1.55] text-[#3A3A3A]">
            Ты станешь частью <strong>сообщества</strong> самых сильных маркетологов и фаундеров и получишь доступ к{' '}
            <strong>закрытым Live-встречам после окончания спринта</strong>
          </p>
          <div className="overflow-hidden rounded-[28px] border border-black/[.08] bg-white">
            <img src="/community-zoom.png" alt="Закрытая Live-встреча комьюнити" className="block w-full" />
          </div>
        </div>
      </section>

      {/* PACE / SKETCH */}
      <section className="bg-white border-t border-black/[.08] py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <h2 className="font-display font-bold m-0 mb-9 leading-[1.05] tracking-[-0.025em] text-[clamp(36px,4.6vw,64px)]">
            Обучение в комфортном темпе
          </h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr] md:grid-rows-2">
            <div className="md:col-start-1 md:row-start-1">
              <Sketch icon="flag" text="Воркшопы, где решаем ваши кейсы вместе" layout="icon-top" />
            </div>
            <div className="md:col-start-2 md:row-start-1">
              <Sketch icon="tools" text={'0 теории.\n100% практики'} layout="text-top" />
            </div>
            <div className="md:col-start-3 md:row-span-2 col-span-2 md:col-span-1">
              <Sketch icon="atom" text="Сильное коммьюнити" layout="icon-top" large />
            </div>
            <div className="md:col-start-1 md:row-start-2">
              <Sketch icon="hand" text="Live-встречи и задания" layout="text-top" />
            </div>
            <div className="md:col-start-2 md:row-start-2">
              <Sketch icon="handshake" text="Персональные 1:1 консультации" layout="icon-top" />
            </div>
          </div>
        </div>
      </section>

      {/* 1:1 with expert */}
      <section className="py-14">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="rounded-[28px] border border-black/[.08] bg-white p-9 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
            <div className="mb-6 flex items-center gap-[18px]">
              <img src={sprint.expertPhoto} alt={sprint.expert} className="h-[72px] w-[72px] rounded-full object-cover" />
              <h3 className="font-display font-bold m-0 leading-[1.2] tracking-[-0.02em] text-[clamp(22px,2.6vw,32px)]">
                Участники получают возможность персональных 1:1 встреч с {sprint.expert} 🔥
              </h3>
            </div>
            <div className="mb-7 flex flex-col gap-[18px]">
              {content.oneOne.map((line, i) => (
                <div key={i} className="flex items-start gap-[18px]">
                  <div className="text-[32px] leading-none w-11 shrink-0">{line.emoji}</div>
                  <div className="text-[17px] leading-[1.55] text-[#3A3A3A]">{line.text}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-5 border-t border-black/[.08] pt-6">
              <div className="font-display font-bold text-[32px] tracking-[-0.02em]">{sprint.price}</div>
              <button className="rounded-full border border-[#0A0A0A] bg-[#0A0A0A] px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#1f1f1f]">
                Забронировать место
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAREWELL */}
      <section className="bg-white border-t border-black/[.08] py-24">
        <div className="mx-auto max-w-[560px] px-5 text-center">
          <img src={sprint.expertPhoto} alt={sprint.expert} className="mx-auto mb-5 h-[120px] w-[120px] rounded-full object-cover" />
          <div className="inline-flex items-center gap-2 text-[20px] font-bold">{sprint.expert} <LinkedInBadge size={16} /></div>
          <div className="mb-5 text-[14px] text-[#6B6B6B]">{sprint.expertRole}</div>
          <div className="my-6 font-display font-bold leading-[1.1] tracking-[-0.025em] text-[clamp(28px,3.6vw,44px)]">
            Let's rock your {content.rockNoun}!
          </div>
          <a
            href="https://t.me/communitysprints"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#0A0A0A] bg-[#0A0A0A] px-7 py-4 text-[16px] font-medium text-white transition-all hover:bg-[#1f1f1f] hover:-translate-y-0.5"
          >
            <Send className="h-5 w-5" />
            Подключайся к Telegram-каналу
          </a>
        </div>
      </section>
    </main>
  );
}

export default SprintPage;
