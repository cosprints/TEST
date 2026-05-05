export type Sprint = {
  id: string;
  name: string;
  tagline: string;
  expert: string;
  expertRole: string;
  expertPhoto: string;
  weeks: string;
  meetings: string;
  practice: string;
  starts: string;
  price: string;
};

export const SPRINTS: Sprint[] = [
  {
    id: 'ai-builders',
    name: 'AI Builders',
    tagline: 'Соберите свой первый AI-продукт за 2 недели',
    expert: 'Дмитрий Зборовский',
    expertRole: 'Founder, Indie SaaS',
    expertPhoto: '/zborovsky.jpg',
    weeks: '2', meetings: '4', practice: '100',
    starts: '22 июля 2026', price: '75 000 ₽',
  },
  {
    id: 'ai-native',
    name: 'AI-native Marketing',
    tagline: 'Перестройте маркетинговую функцию вокруг ИИ',
    expert: 'Виктория Харламова',
    expertRole: 'Ex-Growth Product, Miro',
    expertPhoto: '/expert-victoria.jpeg',
    weeks: '2', meetings: '4', practice: '100',
    starts: '08 июля 2026', price: '70 000 ₽',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Growth',
    tagline: 'Запустите личный бренд и продажи через LinkedIn',
    expert: 'Дмитрий Ивановский',
    expertRole: 'Ex-директор по B2B-продажам, PandaDoc',
    expertPhoto: '/expert-dmitry-i.jpeg',
    weeks: '2', meetings: '4', practice: '100',
    starts: '10 июня 2026', price: '55 000 ₽',
  },
  {
    id: 'growth',
    name: 'Growth Marketing',
    tagline: 'Перезапустите маркетинг, чтобы снизить CAC и вырастить продажи',
    expert: 'Максим Епифанов',
    expertRole: 'VP Performance Marketing, TripleTen',
    expertPhoto: '/expert-maxim.jpeg',
    weeks: '2', meetings: '4', practice: '100',
    starts: '24 июня 2026', price: '65 000 ₽',
  },
];

export type IntroLine = { emoji: string; html: string };
export type BigTestimonial = {
  cg: string;
  tag: string;
  ac: string;
  ini: string;
  name: string;
  role: string;
  co: string;
  ps: string[];
};
export type ProgramStep = {
  n: string;
  title: string;
  time: string;
  bullets: string[];
  result: string;
  openByDefault?: boolean;
};
export type AudienceItem = {
  label: string;
  avatarColor: string;
  initials: string;
  name: string;
  role: string;
  company: string;
  quote: string;
};
export type OneOneLine = { emoji: string; text: string };
export type ScheduleRow = { date: string; statusKind: 'soldout' | 'wait' | 'open'; status: string };

export type SprintPageContent = {
  heroSub: string;
  companyName: string;
  rockNoun: string;
  studentsCount: number;
  programSub: string;
  otherSprints: { label: string }[];
  intro: IntroLine[];
  bigTestimonials: BigTestimonial[];
  program: ProgramStep[];
  audience: AudienceItem[];
  oneOne: OneOneLine[];
  schedule: ScheduleRow[];
};

const commonSchedule: ScheduleRow[] = [
  { date: "13 окт – 06 нояб'25", statusKind: 'soldout', status: 'SOLD OUT' },
  { date: "13 апр – 11 май'26",  statusKind: 'wait',    status: 'Вейтлист' },
];

const otherSprints = [
  { label: 'LinkedIn Growth' },
  { label: 'Marketing Growth' },
];

export const SPRINT_PAGE_CONTENT: Record<string, SprintPageContent> = {
  growth: {
    heroSub: 'Авторский спринт Максима Епифанова с Live-встречами и 1:1 консультациями, где Максим персонально учит прокачивать каналы привлечения и маркетинговую аналитику для снижения CAC и роста продаж',
    companyName: 'TripleTen',
    rockNoun: 'Marketing',
    studentsCount: 500,
    programSub: 'На всех встречах Максим Епифанов делится своим опытом или персонально решает ваши кейсы для роста ваших конверсий и результатов в маркетинге',
    otherSprints,
    intro: [
      { emoji: '👋', html: 'Меня зовут <strong>Максим Епифанов</strong>, занимаюсь привлечением в <strong>TripleTen</strong> и преподаю в ВШЭ, ИТМО и Школе менеджеров Яндекса. Ex-директор по привлечению в Яндекс Практикуме' },
      { emoji: '🚀', html: 'Я запустил свой авторский спринт про <strong>работу с метриками</strong> и данными для системного и управляемого роста в маркетинге' },
      { emoji: '📝', html: "Лучший преподаватель ВШЭ'23-24. Обучаю продактов и маркетологов в <strong>ИТМО, Школе менеджеров Яндекса и Сколково</strong>. За всё время обучил 3700+ студентов" },
      { emoji: '📝', html: 'Помог <strong>прокачать каналы привлечения и маркетинговую аналитику</strong> командам из Yandex, VK, SkyEng и более 100 других компаний' },
    ],
    bigTestimonials: [
      { cg: 'linear-gradient(135deg,#1f4ed8 0%,#0a1f6b 100%)', tag: 'VK Клипы', ac: '#ff8a5b', ini: 'АЛ',
        name: 'Александр Лучников', role: 'Лид по продвижению', co: 'VK Клипы',
        ps: [
          'На лекциях Максим показывает огромное количество примеров из своей работы и дает шаблоны, которые можно просто брать и внедрять у себя.',
          'Я не знаю другого такого материала на русском, где бы эта тема раскрывалась так подробно, системно и в одном месте.',
          'Кроме лекций на спринте еще есть личные консультации с Максимом, воркшопы с разбором кейсов и крутое комьюнити спецов из самых разных бизнесов.',
        ]},
      { cg: 'linear-gradient(135deg,#0ea5e9 0%,#1e40af 100%)', tag: 'Toloka.ai', ac: '#a78bfa', ini: 'ВГ',
        name: 'Владимир Громоздин', role: 'Growth Manager', co: 'Toloka.ai',
        ps: [
          'Спринт Максима оказался офигенно полезным, потому что в нём много практики и примеров. Я пришёл на спринт с целью упорядочить свои уже имеющиеся знания, а в результате узнал очень много нового.',
          'Особенно подкупает, что Максим и другие участники спринта (по желанию и в рамках NDA) показывают настоящие артефакты — сводные таблицы, внутреннюю документацию, примеры постановки задачи. В общем, это не просто теория (хотя и её достаточно), а реальный опыт в концентрированном формате.',
          'Спринт помог мне посмотреть на всю систему маркетинга в компании в целом и осознать, куда я хочу двигаться дальше. Результат не заставил себя ждать — я откликнулся на вакансию, которую опубликовали в сообществе спринта и теперь я Growth Manager в Toloka.ai',
          'Приходите на спринт к Максиму, если вам кажется, что вы уже всё знаете — это точно не так 🙂',
        ]},
      { cg: 'linear-gradient(135deg,#fde047 0%,#facc15 100%)', tag: 'Райффайзен Банк', ac: '#fcd34d', ini: 'ИЦ',
        name: 'Иван Цой', role: 'Head of Growth', co: 'Райффайзен Банк',
        ps: [
          'Макс сильно помог в систематизации подхода к формированию команды Digital Marketing, а также дал много персональных actionable советов по стратегии и дальнейшим шагам в контексте моей работы.',
          'Как результат, у меня есть понятные видение того, что можно и нужно делать дальше для развития',
        ]},
    ],
    program: [
      { n: '1', openByDefault: true, title: 'Live-лекция «Рост конверсий»', time: '2,5 часа',
        bullets: [
          'Разберем примеры успешных кейсов роста конверсий на стыке продаж, привлечения и роста',
          'Разберем фреймворк по росту конверсий посадочной страницы на примере процесса в TripleTen: A/B тесты и кейсы',
        ],
        result: 'подготовите беклог гипотез для роста конверсий на посадочной странице и настроите взаимодействие между командами сейлз, привлечения и продукта' },
      { n: '2', title: 'Live-лекция «Снижение CAC в каналах привлечения»', time: '2,5 часа',
        bullets: [
          'Кейсы и примеры для снижения CAC в <strong>Facebook Ads и других платформах</strong>',
          'Кейсы и примеры для снижения CAC <strong>в контекстной рекламе</strong>',
          'Кейсы и примеры для роста продаж <strong>в инфлюенс каналах</strong>',
        ],
        result: 'сразу после занятия появится десяток идей, как вырастить продажи и снизить CAC в существующих каналах траффика' },
      { n: '3', title: 'Практический воркшоп по решению маркетинговых кейсов студентов', time: '2 часа', bullets: [], result: 'решите ваши текущие маркетинговые челленджи с Максимом Епифановым' },
      { n: '4', title: 'Live-лекция «Маркетинговая отчетность»', time: '2,5 часа',
        bullets: [
          'Работаем с маркетинговой отчётностью на примере репортов в TripleTen',
          'Создаем C-level отчет для оценки трекшена бизнеса',
        ],
        result: 'подготовите маркетинговую отчетность в своём бизнесе и настроите системный мониторинг выполнения планов по каналам' },
      { n: '5', title: 'Live-лекция «Операционная и сквозная аналитика»', time: '2,5 часа',
        bullets: [
          'Работаем со сквозной аналитикой на примере отчетов в TripleTen: разбор метрик и решений',
          'Фиксируем обязательные метрики для сквозной аналитики',
        ],
        result: 'подготовите техническое задание на языке бизнеса для создания сквозной аналитики в вашей компании' },
      { n: '6', title: 'Live-лекция «Про управление командой привлечения»', time: '2,5 часа',
        bullets: ['Постановка целей для команды привлечения', 'Контроль и мониторинг сотрудников', 'Найм и система мотивации в компании'],
        result: 'сможете построить эффективную систему управления команды' },
      { n: '7', title: 'Какими AI-скиллами должен обладать маркетолог в 2026 году: инструменты и юзкейсы', time: '2 часа', bullets: [], result: '' },
      { n: 'бонус', title: 'Итоговый воркшоп', time: '2 часа', bullets: [], result: 'решите ваши другие задачи и челленджи по темам, которые наиболее актуальны для вас именно сейчас' },
    ],
    audience: [
      { label: 'Маркетологам и продактам', avatarColor: '#fda4af', initials: 'ЕП',
        name: 'Егор Пронин', role: 'Head of UA', company: 'Rask.ai',
        quote: 'Такого объема кристаллизированной информации для практики в обучении я не получал ни разу. Много 1-1, много обратной связи, подстройка под твои ниши и специфику' },
      { label: 'Руководителям по траффику', avatarColor: '#fcd34d', initials: 'ВЕ',
        name: 'Валентина Ефименко', role: 'Perfomance-лид', company: 'Skillbox',
        quote: 'Кажется, у меня итак много опыта, но после каждой лекции всё равно появляется список из 10+ задач для улучшений)) А 1:1 с Максимом — 🔥' },
      { label: 'Руководителям по маркетингу и диджитал директорам', avatarColor: '#a78bfa', initials: 'МТ',
        name: 'Мария Тепленко', role: 'CMO', company: 'Wannabe',
        quote: 'Благодаря спринту я смогла оптимизировать отчетность и наладить процесс тестирования гипотез в своей команде. Также я нашла вдохновляющее сообщество для нетворкинга, что дало мне четкое видение и желание активно действовать!' },
    ],
    oneOne: [
      { emoji: '👋', text: 'Разбор домашних заданий и обратная связь' },
      { emoji: '🚀', text: 'Индивидуальная консультация: 60 минут в zoom с советами и рекомендациями по маркетингу' },
      { emoji: '📝', text: 'Аудит: персональный разбор вашей отчетности по запросу' },
    ],
    schedule: commonSchedule,
  },

  linkedin: {
    heroSub: 'Авторский спринт Дмитрия Ивановского с Live-встречами и 1:1 консультациями, где Дмитрий персонально учит запускать LinkedIn-аутрич, контент и продуктовые гипотезы для B2B-продаж',
    companyName: 'PandaDoc (ex)',
    rockNoun: 'LinkedIn',
    studentsCount: 350,
    programSub: 'На всех встречах Дмитрий Ивановский делится своим опытом и помогает выстроить ваш личный канал продаж в LinkedIn',
    otherSprints,
    intro: [
      { emoji: '👋', html: 'Меня зовут <strong>Дмитрий Ивановский</strong>, ex-директор B2B-продаж в <strong>PandaDoc</strong>. Вырастил команду от $100k MRR до $85M ARR за 5 лет.' },
      { emoji: '🚀', html: 'Запустил авторский спринт про <strong>LinkedIn-аутрич, контент и B2B-продажи</strong> для фаундеров и продавцов.' },
      { emoji: '📝', html: 'Преподаю в <strong>Skolkovo Business School</strong> и веду закрытые мастермайнды для CRO.' },
      { emoji: '📝', html: 'Помог <strong>выстроить B2B-канал</strong> в десятках SaaS-компаний — от ранних стартапов до публичных компаний.' },
    ],
    bigTestimonials: [
      { cg: 'linear-gradient(135deg,#0a66c2 0%,#1e293b 100%)', tag: 'PandaDoc', ac: '#86efac', ini: 'АП',
        name: 'Артём Петров', role: 'Founder', co: 'B2B SaaS',
        ps: [
          'Дмитрий разложил весь LinkedIn-funnel на понятные шаги. До спринта я делал случайные посты и аутрич, после — собрал стабильную систему лидгена.',
          'Особенно ценю шаблоны сообщений и фреймворк выбора ICP — это сразу применимо.',
        ]},
      { cg: 'linear-gradient(135deg,#7c3aed 0%,#1e1b4b 100%)', tag: 'SaaS', ac: '#fcd34d', ini: 'МК',
        name: 'Мария Климова', role: 'Head of Sales', co: 'B2B SaaS',
        ps: [
          'Лучший спринт по LinkedIn для русскоговорящих. Не общие фразы, а конкретные A/B тесты сообщений и метрики.',
          'Получила 12 квалифицированных лидов за 3 недели после спринта.',
        ]},
    ],
    program: [
      { n: '1', openByDefault: true, title: 'Live-лекция «ICP и позиционирование в LinkedIn»', time: '2 часа',
        bullets: ['Как определить ICP и говорящий с ним профиль', 'Структура LinkedIn-профиля под продажу'],
        result: 'оформленный профиль и ICP-документ' },
      { n: '2', title: 'Live-лекция «Контент-стратегия для B2B»', time: '2 часа',
        bullets: ['Форматы постов, которые работают', 'Контент-план на месяц'],
        result: 'первые 8 постов написаны' },
      { n: '3', title: 'Воркшоп: разбор аутрич-сообщений', time: '2 часа', bullets: [], result: '4 рабочих варианта аутрич-сообщения' },
      { n: '4', title: 'Live-лекция «Sales Navigator и автоматизация»', time: '2 часа',
        bullets: ['Поиск и сегментация', 'Безопасные скорости и тулинг'],
        result: 'настроенный пайплайн lead → meeting' },
      { n: '5', title: 'Live-лекция «Метрики и итерации»', time: '2 часа',
        bullets: ['От охватов к meeting booked', 'Когортный отчёт'],
        result: 'дашборд для еженедельного ревью' },
      { n: 'бонус', title: 'Итоговый воркшоп', time: '2 часа', bullets: [], result: 'разбор индивидуальных кейсов' },
    ],
    audience: [
      { label: 'Фаундерам B2B-продуктов', avatarColor: '#86efac', initials: 'АП',
        name: 'Артём Петров', role: 'Founder', company: 'B2B SaaS',
        quote: 'После 2 недель LinkedIn-funnel приносит больше лидов, чем cold email-кампании за квартал.' },
      { label: 'Sales-командам и BDR', avatarColor: '#fcd34d', initials: 'МК',
        name: 'Мария Климова', role: 'Head of Sales', company: 'B2B SaaS',
        quote: 'Конкретные шаблоны и метрики — а не «делайте контент». Команда внедрила за неделю.' },
      { label: 'Продактам и маркетологам B2B', avatarColor: '#fda4af', initials: 'ИШ',
        name: 'Иван Шарапов', role: 'PMM', company: 'FinTech B2B',
        quote: 'LinkedIn — недооценённый канал. Дмитрий показал, как заходить мягко, не выгорая.' },
    ],
    oneOne: [
      { emoji: '👋', text: 'Разбор вашего LinkedIn-профиля и контент-плана' },
      { emoji: '🚀', text: 'Индивидуальная консультация: 60 минут в zoom' },
      { emoji: '📝', text: 'Аудит ваших аутрич-сообщений и шаблонов' },
    ],
    schedule: commonSchedule,
  },

  'ai-native': {
    heroSub: 'Авторский спринт Виктории Харламовой про то, как встроить ИИ в маркетинговую функцию: от брифа и креатива до аналитики и поддержки',
    companyName: 'Miro (ex)',
    rockNoun: 'AI Marketing',
    studentsCount: 280,
    programSub: 'Кейсы и шаблоны от Виктории и приглашённых экспертов из Miro, Yandex и SaaS-компаний Европы',
    otherSprints: [{ label: 'AI-native Marketing' }, { label: 'AI Builders' }],
    intro: [
      { emoji: '👋', html: '<strong>Виктория Харламова</strong>, ex-Growth Product в <strong>Miro</strong>. Сейчас консультирую SaaS-компании в Европе.' },
      { emoji: '🚀', html: 'Запустила спринт про <strong>встраивание LLM</strong> в реальную маркетинговую функцию.' },
      { emoji: '📝', html: 'Помогла <strong>20+ командам</strong> внедрить AI-воркфлоу — от контента до атрибуции.' },
      { emoji: '📝', html: 'Спикер на <strong>SaaStr и Product Marketing Summit</strong>.' },
    ],
    bigTestimonials: [
      { cg: 'linear-gradient(135deg,#7c3aed 0%,#1e1b4b 100%)', tag: 'SaaS', ac: '#a78bfa', ini: 'АН',
        name: 'Алина Нильссон', role: 'Marketing Lead', co: 'FinTech',
        ps: [
          'Виктория показала, что AI — не магия, а конкретный пайплайн с входами и метриками.',
          'После спринта команда сократила время на брифинг подрядчиков в 3 раза.',
        ]},
      { cg: 'linear-gradient(135deg,#3956FF 0%,#0f172a 100%)', tag: 'SaaS', ac: '#86efac', ini: 'СК',
        name: 'Сергей Куликов', role: 'VP Marketing', co: 'DevTools SaaS',
        ps: [
          'Лучший разбор того, как встроить LLM в реальные процессы. Я ушёл с конкретным планом на квартал.',
          'Особенно понравились кейсы безопасной работы с пользовательскими данными.',
        ]},
    ],
    program: [
      { n: '1', openByDefault: true, title: 'AI в брифе и контент-цикле', time: '2,5 часа',
        bullets: ['LLM-агенты в брифе', 'Pipeline review с человеком в цикле'],
        result: 'первая AI-вспомогательная роль в команде' },
      { n: '2', title: 'AI в креативной разработке', time: '2,5 часа',
        bullets: ['Image и video gen в реальной кампании', 'Безопасность и юр.риски'],
        result: 'шаблон AI-кампании от идеи до запуска' },
      { n: '3', title: 'AI в аналитике и атрибуции', time: '2,5 часа',
        bullets: ['Causal vs correlation в LLM', 'Шаблоны промптов для отчётов'],
        result: 'AI-помощник для еженедельного ревью' },
      { n: '4', title: 'AI в поддержке и удержании', time: '2 часа',
        bullets: ['RAG для саппорта', 'Эскалация в человека'],
        result: 'MVP AI-саппорта' },
      { n: '5', title: 'Воркшоп: проектирование AI-функции в вашей команде', time: '2 часа', bullets: [], result: 'роадмап на квартал' },
      { n: 'бонус', title: 'Итоговый воркшоп', time: '2 часа', bullets: [], result: 'разбор индивидуальных кейсов' },
    ],
    audience: [
      { label: 'Маркетологам, готовым внедрять AI', avatarColor: '#a78bfa', initials: 'АН',
        name: 'Алина Нильссон', role: 'Marketing Lead', company: 'FinTech',
        quote: 'AI перестал быть buzzword — стал частью моего еженедельного ритма.' },
      { label: 'Руководителям маркетинга', avatarColor: '#86efac', initials: 'СК',
        name: 'Сергей Куликов', role: 'VP Marketing', company: 'DevTools',
        quote: 'Системный взгляд на AI — без хайпа и волшебства.' },
      { label: 'Продактам и growth-лидам', avatarColor: '#fda4af', initials: 'ОБ',
        name: 'Ольга Белова', role: 'Growth PM', company: 'B2B SaaS',
        quote: 'Конкретные пайплайны, которые внедрила за месяц.' },
    ],
    oneOne: [
      { emoji: '👋', text: 'Разбор вашей AI-стратегии в маркетинге' },
      { emoji: '🚀', text: 'Индивидуальная консультация: 60 минут в zoom' },
      { emoji: '📝', text: 'Аудит ваших AI-пайплайнов и промптов' },
    ],
    schedule: commonSchedule,
  },

  'ai-builders': {
    heroSub: 'Авторский спринт Дмитрия Зборовского для тех, кто хочет собрать первый AI-продукт за 2 недели — от гипотезы до прод-MVP с LLM-ядром',
    companyName: 'Indie SaaS',
    rockNoun: 'AI Product',
    studentsCount: 200,
    programSub: 'Дмитрий делится опытом запуска AI-продуктов и проектирует с вами архитектуру вашего MVP',
    otherSprints: [{ label: 'AI-native Marketing' }, { label: 'AI Builders' }],
    intro: [
      { emoji: '👋', html: '<strong>Дмитрий Зборовский</strong>, фаундер Indie SaaS и автор спринта AI Builders.' },
      { emoji: '🚀', html: 'Запустил спринт <strong>AI Builders</strong> для продактов и инженеров, желающих собрать рабочий AI-MVP.' },
      { emoji: '📝', html: 'Сам прошёл путь от идеи до платящих клиентов — делится фреймворками и стеком.' },
      { emoji: '📝', html: 'Помог <strong>20+ командам</strong> довести AI-идею до первых платящих пользователей.' },
    ],
    bigTestimonials: [
      { cg: 'linear-gradient(135deg,#3956FF 0%,#0f172a 100%)', tag: 'AI Startup', ac: '#a78bfa', ini: 'АР',
        name: 'Андрей Ребров', role: 'Co-founder', co: 'AI SaaS',
        ps: [
          'Спринт помог понять, какие AI-фичи реально нужны пользователям, а какие — хайп.',
          'Запустили MVP за 3 недели после спринта. Уже есть платящие клиенты.',
        ]},
    ],
    program: [
      { n: '1', openByDefault: true, title: 'Гипотеза и discovery для AI-продукта', time: '2,5 часа',
        bullets: ['Где AI реально решает задачу', 'Чек-лист проверки гипотезы'],
        result: 'приоритизированный список AI-фич' },
      { n: '2', title: 'Архитектура LLM-ядра', time: '2,5 часа',
        bullets: ['RAG vs fine-tuning vs prompts', 'Стек: vector DB, model router, eval'],
        result: 'архитектурная схема MVP' },
      { n: '3', title: 'Eval и качество', time: '2 часа',
        bullets: ['Off-line vs on-line evals', 'Регрессии и golden set'],
        result: 'первый eval-набор для вашего продукта' },
      { n: '4', title: 'Прод-готовность и стоимость', time: '2,5 часа',
        bullets: ['Latency, cost и rate limits', 'Безопасность и PII'],
        result: 'бюджет инференса на 1k MAU' },
      { n: '5', title: 'Воркшоп: разбор архитектур студентов', time: '2 часа', bullets: [], result: 'финальная архитектура вашего MVP' },
      { n: 'бонус', title: 'Итоговый воркшоп', time: '2 часа', bullets: [], result: 'разбор индивидуальных кейсов' },
    ],
    audience: [
      { label: 'Фаундерам AI-стартапов', avatarColor: '#86efac', initials: 'ДЗ',
        name: 'Дмитрий Зборовский', role: 'Founder', company: 'Indie SaaS',
        quote: 'Получил план на 2 недели — и реализовал его. Так редко бывает с спринтами.' },
      { label: 'Продактам, готовящим AI-фичи', avatarColor: '#a78bfa', initials: 'АР',
        name: 'Андрей Ребров', role: 'Co-founder', company: 'AI SaaS',
        quote: 'Системный подход без хайпа. Eval-фреймворк особенно ценный.' },
      { label: 'Инженерам, делающим LLM-продукты', avatarColor: '#fda4af', initials: 'АП',
        name: 'Алёна Петрова', role: 'Tech Lead', company: 'AI Startup',
        quote: 'Конкретные инструменты и стек. Внедрила за неделю после спринта.' },
    ],
    oneOne: [
      { emoji: '👋', text: 'Разбор архитектуры вашего AI-MVP' },
      { emoji: '🚀', text: 'Индивидуальная консультация: 60 минут в zoom' },
      { emoji: '📝', text: 'Аудит eval-стека и промптов' },
    ],
    schedule: commonSchedule,
  },
};
