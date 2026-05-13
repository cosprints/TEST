import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Users, BookOpen, Target, Zap, Brain, Camera, Mic, Video, Bot, Sparkles, CheckCircle, User, MapPin, Calendar, Gift, GraduationCap, Network, ChevronDown, Award, Linkedin } from 'lucide-react';
import { PartnerPopup } from '../components/PartnerPopup';
import { CountdownBanner } from '../components/CountdownBanner';
import { MobileRegisterButton } from '../components/MobileRegisterButton';
import { AISkillsCarousel } from '../components/AISkillsCarousel';
import { HeroSpeakersCarousel } from '../components/HeroSpeakersCarousel';

// Placeholder image for missing assets
const PLACEHOLDER_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3C/svg%3E';

function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [partner, setPartner] = useState<string | null>(null);
  const [showPartnerPopup, setShowPartnerPopup] = useState(false);
  const [conferenceSlide, setConferenceSlide] = useState(0);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = PLACEHOLDER_IMG;
  };
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

    if (partnerParam) {
      setPartner(partnerParam);
      setShowPartnerPopup(true);
    }

    const updateCalendlyUrl = () => {
      const baseUrl = window.innerWidth > 650
        ? 'https://calendly.com/maxpog/ai/2026-01-22T16:00:00+00:00?month=2026-01&date=2026-01-22'
        : 'https://calendly.com/maxpog/ai/';

      const urlWithUtm = partnerParam ? `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}utm_source=${partnerParam}` : baseUrl;
      setCalendlyUrl(urlWithUtm);
    };

    updateCalendlyUrl();
    window.addEventListener('resize', updateCalendlyUrl);

    return () => window.removeEventListener('resize', updateCalendlyUrl);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setConferenceSlide((prev) => (prev + 1) % 3);
    }, 6000);

    return () => clearInterval(interval);
  }, []);


  const companyLogos = [
    { src: '/microsoft-logo.png', alt: 'Microsoft' },
    { src: '/deliveroo.png', alt: 'Deliveroo' },
    { src: '/google-ai-logo.png', alt: 'Google AI' },
    { src: '/miro-logo.png', alt: 'Miro' },
    { src: '/zencoder_2.png', alt: 'Zencoder' },
    { src: '/techstars2.png', alt: 'Techstars' },
    { src: '/fluently_.png', alt: 'Fluently' },
    { src: '/hustle-fund-logo.png', alt: 'Hustle Fund' },
    { src: '/descript-logo.png', alt: 'Descript' },
    { src: '/idc-ventures.png', alt: 'IDC Ventures' },
  ];

  const speakers: {
    photo: string;
    name: string;
    role: string;
    company: { logo: string; name: string };
    bio: string;
  }[] = [
    { photo: '/martijn_lancee.jpg', name: 'Martijn Lancee', role: 'GTM AI', company: { logo: '/microsoft-logo.png', name: 'Microsoft' }, bio: 'Senior leader at Microsoft driving adoption and growth of AI and cloud solutions, with a focus on business development, strategic AI partnerships, and go-to-market programs.' },
    { photo: '/satyajeet-salgar.jpg', name: 'Satyajeet Salgar', role: 'Director of Product', company: { logo: '/google-ai-logo.png', name: 'Google AI' }, bio: "Leads product and UX teams for Google's Applied AI research, focusing on human interaction and scaling products to 1B+ daily active users." },
    { photo: '/zborovskiy.jpg', name: 'Dima Zborovskiy', role: 'AI Director', company: { logo: '/deliveroo.png', name: 'Deliveroo' }, bio: 'Integrated AI agents into real workflows, achieving a 3× ROI boost.' },
    { photo: '/tomas-dostal-freire.jpg', name: 'Tomás Dostal Freire', role: 'CIO', company: { logo: '/miro-logo.png', name: 'Miro' }, bio: 'CIO & Head of Business Transformation. Defining AI-first operating models for hypergrowth scale. Ex-Netflix, Google, Booking.com.' },
    { photo: '/filev.jpg', name: 'Andrew Filev', role: 'Founder & CEO', company: { logo: '/zencoder-logo.png', name: 'Zencoder' }, bio: 'Founded Zencoder AI coding assistant and Wrike, sold to Citrix for ~$2.25B. Featured in Forbes, Entrepreneur, Inc., and The New York Times.' },
    { photo: '/gupta.jpg', name: 'Pallavi Gupta', role: 'Product Manager', company: { logo: '/microsoft-logo.png', name: 'Microsoft' }, bio: 'Leads AI and analytics product strategy at Microsoft, driving innovation across Bing Search and AI capabilities.' },
    { photo: '/misti-cain_.jpg', name: 'Misti Cain', role: 'Managing Director', company: { logo: '/techstars-logo-vector.png', name: 'Techstars' }, bio: 'Has helped portfolio startups raise over $30 million and achieve two successful exits. Recipient of the #GiveFirst Award (2022) and All-Star Mentor (2019).' },
    { photo: '/joseph.jpg', name: 'Raphael Joseph', role: 'Co-Founder', company: { logo: '/raphael_joseph_company_logo.png', name: 'We Are Agentic' }, bio: 'Co-founded an AI training and consulting firm that helps enterprises implement agentic workflows across the UK, Europe, GCC, and the USA.' },
    { photo: '/veremeyenko.jpg', name: 'Alex Veremeyenko', role: 'Founder', company: { logo: '/veremeyenko_company_logo.png', name: 'God of Prompt' }, bio: 'Built a leading AI prompting platform serving 17,000+ customers, 70,000+ newsletter subscribers, and a library of 30,000+ prompts.' },
    { photo: '/carraro.jpg', name: 'Fabrício Carraro', role: 'AI Developer Advocate', company: { logo: '/fabricio_carraroco_company.png', name: 'Barcelona Supercomputing Center' }, bio: 'Advancing AI development and innovation.' },
    { photo: '/nick_golos.jpg', name: 'Nick Golos', role: 'Growth manager', company: { logo: '/fluently_.png', name: 'Fluently' }, bio: 'Uses AI to create viral Linkedin content with over 1M impressions per post.' },
    { photo: '/haley-bryant.jpg', name: 'Haley Bryant', role: 'Partner', company: { logo: '/hustle-fund-logo.png', name: 'Hustle Fund' }, bio: 'Invests in pre-seed AI/ML, fintech, and digital health startups at Hustle Fund. Has made 50+ angel investments, promoted to Partner in December 2025.' },
    { photo: '/huryn copy.jpg', name: 'Pawel Huryn', role: 'CEO', company: { logo: '/product-compass.png', name: 'The Product Compass' }, bio: 'Runs the #1 AI & PM newsletter, plus courses and step-by-step playbooks for AI PMs — trusted by 127K+ and growing.' },
    { photo: '/laura-burkhauser.jpg', name: 'Laura Burkhauser', role: 'CEO', company: { logo: '/descript-logo.png', name: 'Descript' }, bio: 'Previously Director of Product Management at Twitter, with product roles at Rent the Runway, Le Tote, and Amazon.' },
    { photo: '/max-reiff.jpg', name: 'Max Reiff', role: 'Partner', company: { logo: '/idc-ventures.png', name: 'IDC Ventures' }, bio: 'Leads investments in fintech and marketplace startups at a global VC platform managing $850M in assets across the US, Latin America, and Europe.' },
    { photo: '/liam_dubson.jpg', name: 'Liam Dubson', role: 'Founder & CEO', company: { logo: '/encountr.png', name: 'Encountr' }, bio: 'Leader of Spark Founders, empowering entrepreneurs to connect with co-founders and resources. Creator of the Relationship Intelligence Operating System.' },
    { photo: '/jay_singh.jpg', name: 'Jay Singh', role: 'CEO', company: { logo: '/logo-casper-studios.png', name: 'Casper Studios' }, bio: 'Worked with dozens of brands and founders, overseeing 100+ creative projects spanning video, digital media, and brand storytelling.' },
    { photo: '/hamel_husain.jpg', name: 'Hamel Husain', role: 'ML Engineer', company: { logo: '/logo-parlance-labs.png', name: 'Parlance Labs' }, bio: 'Independent AI Consultant & ML Engineer with 20+ years of experience building and scaling applied AI, ML, and data science systems.' },
    { photo: '/matthias_walter.jpg', name: 'Matthias Walter', role: 'Co-Founder', company: { logo: '/fastbreak_one_logo.jpeg', name: 'Fastbreak.one' }, bio: 'Building innovative AI solutions at Fastbreak.one.' },
    { photo: '/rohun-shroff.jpg', name: 'Rohun Shroff', role: 'CEO', company: { logo: '/ai_pulse_logo.png', name: 'The AI Pulse' }, bio: 'Leading innovation in AI and technology at The AI Pulse.' },
  ];

  type ScheduleSpeaker =
    | { photo: string; name: string; role?: string; companyLogo?: string; companyName?: string }
    | { secret: true; name?: string };

  type ScheduleSession = {
    time: string;
    type: 'Main Stage' | 'Panel' | 'Presentation';
    title: string;
    speakers: ScheduleSpeaker[];
    moderator?: string;
  };

  const schedule: ScheduleSession[] = [
    {
      time: '11:00',
      type: 'Main Stage',
      title: 'Co-hosts introduction',
      speakers: [
        { photo: '/co-hosts_max_pog.jpg', name: 'Max Pog', role: 'Co-Host', companyLogo: '/csprints_inverted copy.png', companyName: 'Community Sprints' },
        { photo: '/co-hosts_veremeyenko.jpg', name: 'Alex Veremeyenko', role: 'Founder', companyLogo: '/veremeyenko_company_logo.png', companyName: 'God of Prompt' },
        { photo: '/huryn copy.jpg', name: 'Pawel Huryn', role: 'CEO', companyLogo: '/product-compass.png', companyName: 'The Product Compass' },
      ],
    },
    {
      time: '11:05',
      type: 'Panel',
      title: 'How to Cut Through AI Tool Noise. What are the Must-Have AI Skills for 2026?',
      speakers: [
        { photo: '/zborovskiy.jpg', name: 'Dima Zborovskiy', role: 'AI Director', companyLogo: '/deliveroo.png', companyName: 'Deliveroo' },
        { photo: '/martijn_lancee.jpg', name: 'Martijn Lancee', role: 'GTM AI', companyLogo: '/microsoft-logo.png', companyName: 'Microsoft' },
        { secret: true, name: 'Secret speaker' },
      ],
      moderator: 'Liam Dubson @ encountr',
    },
    {
      time: '11:35',
      type: 'Presentation',
      title: 'How to use AI agents for metrics and personal growth? AI use cases from Deliveroo',
      speakers: [
        { photo: '/zborovskiy.jpg', name: 'Dima Zborovskiy', role: 'AI Director', companyLogo: '/deliveroo.png', companyName: 'Deliveroo' },
      ],
    },
    {
      time: '12:25',
      type: 'Panel',
      title: 'How we use AI for growth & marketing',
      speakers: [
        { photo: '/laura-burkhauser.jpg', name: 'Laura Burkhauser', role: 'CEO', companyLogo: '/descript-logo.png', companyName: 'Descript' },
        { photo: '/nick_golos.jpg', name: 'Nick Golos', role: 'Growth manager', companyLogo: '/fluently_.png', companyName: 'Fluently' },
        { photo: '/jay_singh.jpg', name: 'Jay Singh', role: 'CEO', companyLogo: '/logo-casper-studios.png', companyName: 'Casper Studios' },
      ],
      moderator: 'Secret moderator',
    },
    {
      time: '12:50',
      type: 'Presentation',
      title: 'How to make 16M views on Linkedin in 3 months with AI',
      speakers: [
        { photo: '/nick_golos.jpg', name: 'Nick Golos', role: 'Growth manager', companyLogo: '/fluently_.png', companyName: 'Fluently' },
      ],
    },
    {
      time: '13:05',
      type: 'Panel',
      title: "What VCs think: Is AI a Bubble? And Which AI Startups They'll Actually Fund in 2026",
      speakers: [
        { photo: '/misti-cain_.jpg', name: 'Misti Cain', role: 'Managing Director', companyLogo: '/techstars-logo-vector.png', companyName: 'Techstars' },
        { photo: '/max-reiff.jpg', name: 'Max Reiff', role: 'Partner', companyLogo: '/idc-ventures.png', companyName: 'IDC Ventures' },
        { photo: '/haley-bryant.jpg', name: 'Haley Bryant', role: 'Partner', companyLogo: '/hustle-fund-logo.png', companyName: 'Hustle Fund' },
      ],
      moderator: 'Nathan Beckord @ Foundersuite',
    },
    {
      time: '13:30',
      type: 'Presentation',
      title: 'The 5 most popular financial agentic AI workflows relevant to all industries',
      speakers: [
        { photo: '/joseph.jpg', name: 'Raphael Joseph', role: 'Co-Founder', companyLogo: '/raphael_joseph_company_logo.png', companyName: 'We Are Agentic' },
      ],
    },
    {
      time: '13:45',
      type: 'Panel',
      title: "MCP, AI Agents, AI Skills, Automations & Prompting: What's Dead and What's Next in 2026",
      speakers: [
        { photo: '/veremeyenko.jpg', name: 'Alex Veremeyenko', role: 'Founder', companyLogo: '/veremeyenko_company_logo.png', companyName: 'God Of Prompt' },
        { photo: '/carraro.jpg', name: 'Fabrício Carraro', role: 'AI Developer Advocate', companyLogo: '/fabricio_carraroco_company.png', companyName: 'Barcelona Supercomputing Center' },
        { photo: '/gupta.jpg', name: 'Pallavi Gupta', role: 'Product Manager', companyLogo: '/microsoft-logo.png', companyName: 'Microsoft AI' },
        { photo: '/hamel_husain.jpg', name: 'Hamel Husain', role: 'ML Engineer', companyLogo: '/logo-parlance-labs.png', companyName: 'Parlance Labs' },
      ],
      moderator: 'Robert Youssef @ God Of Prompt',
    },
    {
      time: '14:10',
      type: 'Presentation',
      title: 'AI Superpowers: Can one person build a unicorn?',
      speakers: [
        { photo: '/satyajeet-salgar.jpg', name: 'Satyajeet Salgar', role: 'Director of Product', companyLogo: '/google-ai-logo.png', companyName: 'Google AI' },
      ],
    },
    {
      time: '14:25',
      type: 'Presentation',
      title: 'Scaling AI engineering to production repositories',
      speakers: [
        { photo: '/filev.jpg', name: 'Andrew Filev', role: 'Founder & CEO' },
      ],
    },
    {
      time: '14:40',
      type: 'Presentation',
      title: 'Secret topic',
      speakers: [{ secret: true, name: 'Secret Speaker' }],
    },
    {
      time: '14:55',
      type: 'Presentation',
      title: 'How to build a ready SaaS without coding?',
      speakers: [
        { photo: '/huryn copy.jpg', name: 'Pawel Huryn', role: 'CEO', companyLogo: '/product-compass.png', companyName: 'The Product Compass' },
      ],
    },
    {
      time: '15:25',
      type: 'Presentation',
      title: 'Emotional and relationship intelligence in the era of AI',
      speakers: [
        { photo: '/liam_dubson.jpg', name: 'Liam Dubson', role: 'Founder & CEO', companyLogo: '/encountr.png', companyName: 'Encountr' },
      ],
    },
    {
      time: '15:30',
      type: 'Presentation',
      title: 'Agentic Innovation: 10× Output. Same Budget.',
      speakers: [
        { photo: '/matthias_walter.jpg', name: 'Matthias Walter', role: 'Co-Founder', companyLogo: '/fastbreak_one_logo.jpeg', companyName: 'Fastbreak.one' },
      ],
    },
    {
      time: '15:45',
      type: 'Presentation',
      title: 'Should I use AI to automate this?',
      speakers: [
        { photo: '/rohun-shroff.jpg', name: 'Rohun Shroff', role: 'CEO', companyLogo: '/ai_pulse_logo.png', companyName: 'The AI Pulse' },
      ],
    },
  ];


  const conferences = [
    {
      id: 1,
      title: 'AI Showcase Virtual Conf',
      image: '/conf_1.jpg',
      stats: [
        { label: 'Registrations', value: '3,100+' },
        { label: 'Business owners / CEOs / Directors', value: '1,095' },
        { label: 'AI Investors', value: '264' },
        { label: 'AI Startups', value: '264' },
        { label: 'AI freelancers / agencies', value: '194' },
        { label: 'General Attendees', value: '730' },
        { label: 'Unique visitors', value: '1,433' },
        { label: 'Zoom peak attendance', value: '734' },
      ],
    },
    {
      id: 2,
      title: 'Capital Networking Virtual Conf',
      image: '/conf_2.jpg',
      stats: [
        { label: 'Participants', value: '4,500+' },
        { label: 'VC Funds', value: '839' },
        { label: 'Angels', value: '630' },
        { label: 'Venture Studios', value: '515' },
        { label: 'Single Family offices', value: '383' },
        { label: 'Accelerators', value: '374' },
        { label: 'PE Funds', value: '315' },
        { label: 'RE Funds', value: '234' },
        { label: 'Corporations / CVCs', value: '208' },
        { label: 'LPs', value: '295' },
        { label: 'HNWIs ($1M+)', value: '262' },
        { label: 'Funds of Funds', value: '164' },
        { label: 'Crypto Funds', value: '138' },
        { label: 'Private Credit Funds', value: '133' },
        { label: 'Unique visitors', value: '2,703' },
        { label: 'Zoom peak attendance', value: '1,111' },
      ],
    },
    {
      id: 3,
      title: 'Early-Stage Virtual Conf',
      image: '/conf_3.jpg',
      stats: [
        { label: 'Participants', value: '2,921' },
        { label: 'Startups', value: '2,259' },
        { label: 'VC Funds', value: '544' },
        { label: 'Angels', value: '359' },
        { label: 'Startup advisors & others', value: '863' },
        { label: 'Fundraising agents', value: '372' },
        { label: 'Accelerators', value: '138' },
        { label: 'Venture Studios', value: '167' },
        { label: 'Family Offices', value: '147' },
        { label: 'Angel Syndicate Leads', value: '152' },
        { label: 'Private Equity Funds', value: '65' },
        { label: 'CVCs', value: '52' },
        { label: 'Limited Partners', value: '88' },
        { label: 'Fund of Funds', value: '42' },
        { label: 'Unique visitors', value: '3,576' },
        { label: 'Zoom peak attendance', value: '2,000+' },
      ],
    },
  ];

  const faqs = [
    {
      question: "What is AI Skills '26?",
      answer: "AI Skills '26 is a free virtual conference designed to help professionals gain practical AI skills. The event brings together 20+ top AI experts, 1,000+ attendees, and over 4 hours of hands-on learning, use-case breakdowns, and workflow implementation tips."
    },
    {
      question: "When and where does the conference take place?",
      answer: "The event is fully online and will be held on 22 January 2026 at 8 AM SF | 11 AM NYC | 4 PM GMT. You can join from anywhere in the world."
    },
    {
      question: "Who is this conference for?",
      answer: "AI Skills '26 is ideal for: Business owners, operations managers, project & product managers, sales and marketing professionals, customer support managers, developers, investors, creators, consultants, and educators. If you want to apply AI to real workflows, this event is for you."
    },
    {
      question: "Is the event really free?",
      answer: "Yes! Registration is completely free. Your ticket includes access to all talks, workshops, partner perks, and bonus materials."
    },
    {
      question: "What will I learn?",
      answer: "You will learn how to: Identify high-ROI AI use cases, implement AI in existing workflows without disruption, build real no-code AI agents, leverage AI for content, automation, analytics, and more. Gain practical skills directly applicable to your daily tasks."
    },
    {
      question: "Who are the speakers?",
      answer: "Our speakers include leading AI experts such as AI Directors, Product Managers, and tech innovators who have implemented AI systems with measurable business impact—like cutting costs 2×, increasing ROI 3×, and creating viral AI-powered content."
    },
    {
      question: "Will I get access to the schedule?",
      answer: "Yes. The full agenda is available on the event page, and includes talks and workshops across startup, corporate, and VC tracks. Additional sessions will be revealed closer to the event."
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Absolutely. You'll join a community of 1,000+ attendees, including leaders, founders, AI practitioners, investors, and creators. You can expand your professional network, make new connections, and collaborate on real AI projects."
    },
    {
      question: "How do I join as a media partner?",
      answer: "If you have 1K+, 10K+ or 100K+ email subscribers, let us know at maxpog@inniches.com, and we'll share our benefits for media partners."
    },
    {
      question: "Who organizes AI Skills '26?",
      answer: "The conference is powered by Community Sprints, a global learning community with 10,000+ learners. We've launched 50+ educational programs, delivered hands-on AI workshops, and hosted multiple successful conferences worldwide."
    }
  ];


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.classList.contains('ai-pro-highlight')) {
            entry.target.classList.add('animate-highlight');
          }
        });
      },
      { threshold: 0.5 }
    );

    const highlightElement = document.querySelector('.ai-pro-highlight');
    if (highlightElement) {
      observer.observe(highlightElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {showPartnerPopup && partner && (
        <PartnerPopup
          partner={partner}
          onClose={() => setShowPartnerPopup(false)}
        />
      )}

      <div className="pb-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

        .hero-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .levitate-button {
          animation: levitate 3s ease-in-out infinite;
        }

        @keyframes levitate {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .ai-pro-highlight {
          position: relative;
          color: white !important;
          background: linear-gradient(135deg, #8bd2a0, #00a88b);
          border-radius: 12px;
          padding: 8px 16px;
          display: inline-block;
        }

        .ai-pro-highlight::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(139, 210, 160, 0.3), rgba(0, 168, 139, 0.3));
          border-radius: 12px;
          z-index: 1;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1.2s ease-out;
          pointer-events: none;
        }

        .ai-pro-highlight.animate-highlight::after {
          transform: scaleX(1);
        }
      `}</style>

      {/* Hero Section — CS gradient wash */}
      <section className="cs-hero-bg relative overflow-hidden py-12 lg:py-24">
        {/* Decorative scribble — top-right */}
        <img
          src="/assets/cs/scribble-sparkles-blue.png"
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute top-16 right-8 w-24 opacity-80 -rotate-6 pointer-events-none"
        />
        <div className="cs-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div className="space-y-8">
              <h1 className="cs-display-l text-cs-black">
                Join our virtual conf — build real AI skills
              </h1>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-cs-gray-700">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-cs-gray-500" />
                  <span className="font-medium">Online via Zoom</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-cs-gray-500" />
                  <span className="font-medium">
                    <span className="text-cs-ink">22 January 2026, </span>
                    <span className="text-cs-gray-500">8 AM SF · 11 AM NYC · 4 PM GMT</span>
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="font-display font-black text-cs-blue text-3xl lg:text-4xl tracking-cs-display tabular-nums">
                    5,000+
                  </span>
                  <span className="text-cs-gray-700">attendees as your network</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-display font-black text-cs-blue text-3xl lg:text-4xl tracking-cs-display tabular-nums">
                    20+
                  </span>
                  <span className="text-cs-gray-700">speakers — top AI experts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-display font-black text-cs-blue text-3xl lg:text-4xl tracking-cs-display tabular-nums">
                    4+
                  </span>
                  <span className="text-cs-gray-700">hours of hands-on practice and insights</span>
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-btn-primary text-base px-7 py-3.5"
                >
                  Secure your spot
                  <ChevronRight className="h-5 w-5" />
                </a>
                <span className="inline-flex items-center px-4 py-2 rounded-cs-pill bg-cs-black text-white text-sm font-semibold">
                  For free
                </span>
              </div>
            </div>

            {/* Right — visual */}
            <div className="relative w-full">
              <HeroSpeakersCarousel />
            </div>
          </div>

          {/* Company logos carousel */}
          <div className="mt-20">
            <p className="text-center text-xs uppercase tracking-wider text-cs-gray-500 mb-6">
              Speakers from teams at
            </p>
            <style>{`
              @keyframes scroll-logos {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .logo-carousel {
                animation: scroll-logos 30s linear infinite 3s;
              }
            `}</style>
            <div className="overflow-hidden">
              <div className="logo-carousel flex items-center gap-12 py-4">
                {[...companyLogos, ...companyLogos].map((logo, index) => (
                  <img
                    key={`${logo.src}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
                    onError={handleImageError}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Challenges Section */}
      <section className="py-16 lg:py-24 bg-cs-gray-50">
        <div className="cs-container">
          <div className="text-center mb-16">
            <h2 className="cs-display-m text-cs-black mb-8">
              This event is for
            </h2>

            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {[
                'Business Owners',
                'Project & Product Managers',
                'Operations Managers',
                'Sales & Marketing Executives',
                'Customer Support Managers',
                'Developers',
                'Investors & VCs',
                'Consultants & Advisors',
                'Creators',
                'Educators & Trainers',
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-5 py-2.5 rounded-cs-pill bg-white border border-cs-gray-200 text-cs-ink font-body font-medium text-sm shadow-cs-xs"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="cs-display-m text-cs-black">
              What you'll walk away with
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '/tools.png',
                alt: 'Actionable AI Workflows',
                title: 'Actionable AI workflows & use cases',
                body: 'Real workflows from practitioners who use AI daily at companies like DoorDash and Techstars — not theory',
              },
              {
                icon: '/hands.png',
                alt: 'Ready-to-Use Prompts',
                title: 'Ready-to-use prompts & templates',
                body: 'Copy-paste prompts and frameworks you can implement in your work the same day',
              },
              {
                icon: '/goal.png',
                alt: '2026 AI Trends',
                title: '2026 AI trends & predictions',
                body: "Understand what's coming so you can prepare your career and your team",
              },
              {
                icon: '/community.png',
                alt: 'Access to AI Community',
                title: 'Access to AI community',
                body: 'Connect with 5,000+ professionals learning AI together',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-7 rounded-cs-lg border border-cs-gray-200 shadow-cs-xs hover:shadow-cs-md transition-shadow"
              >
                <img src={item.icon} alt={item.alt} className="h-16 w-16 mb-5" />
                <h3 className="font-display font-bold text-cs-black text-lg tracking-cs-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-cs-gray-700 leading-relaxed text-sm">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why AI Skills Matter In 2026 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="cs-container">
          <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            <h2 className="cs-display-m text-cs-black mb-3">
              Check out 1,000+ cases of job losses due to AI
            </h2>
            <p className="text-lg text-cs-gray-500">According to a recent Reddit thread</p>
          </div>

          <div className="mb-12 lg:mb-16 bg-white rounded-cs-lg border border-cs-gray-200 overflow-hidden shadow-cs-sm">
            <AISkillsCarousel />
          </div>

          <div className="max-w-3xl mx-auto bg-cs-blue-50 rounded-cs-lg p-8 lg:p-12">
            <div className="space-y-5">
              <p className="text-lg text-cs-ink leading-relaxed">
                <span className="font-semibold text-cs-black">The skills needed in 2026 are completely different from a year ago.</span> Just knowing how to use GPT doesn't impress people anymore.
              </p>

              <p className="text-lg text-cs-ink leading-relaxed">
                <span className="font-semibold text-cs-black">Now other things matter:</span> building quick prototypes, managing AI agents, understanding where AI can help and where it can't.
              </p>

              <p className="text-lg text-cs-ink leading-relaxed">
                We'll talk about this at our Virtual AI Conf about AI skills!
              </p>
            </div>

            <div className="mt-8">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Speakers — CS community grid */}
      <section id="experts" className="py-16 lg:py-24 bg-white">
        <div className="cs-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="cs-display-m text-cs-black mb-3">Speakers</h2>
            <p className="text-lg text-cs-gray-700">
              Learn from top industry leaders and innovators shaping the future of AI
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {speakers.map((s) => (
              <article
                key={s.name}
                className="group flex flex-col bg-white rounded-cs-lg border border-cs-gray-200 overflow-hidden shadow-cs-xs hover:shadow-cs-md transition-shadow"
              >
                {/* Photo with name overlay + company badge */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-cs-gray-100">
                  <img
                    src={s.photo}
                    alt={s.name}
                    loading="lazy"
                    onError={handleImageError}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  {/* Bottom gradient for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

                  {/* Company badge (top-right) */}
                  <div className="absolute top-3 right-3 inline-flex items-center bg-white rounded-cs-pill px-3 py-1.5 shadow-cs-xs">
                    <img
                      src={s.company.logo}
                      alt={s.company.name}
                      className="h-4 object-contain"
                      onError={handleImageError}
                    />
                  </div>

                  {/* Name overlay (bottom-left) */}
                  <h3 className="absolute left-4 right-4 bottom-3 font-display font-bold text-white text-xl tracking-cs-display leading-tight">
                    {s.name}
                  </h3>
                </div>

                {/* Meta + bio */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center font-body font-medium text-xs text-cs-ink bg-cs-gray-100 px-3 py-1 rounded-cs-pill">
                      {s.role}
                    </span>
                    <Linkedin className="h-4 w-4 text-cs-blue" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-cs-gray-700 leading-relaxed">{s.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Schedule Section */}
      {/* Conference Schedule — data-driven, CS look */}
      <section id="schedule" className="py-16 lg:py-24 bg-cs-gray-50">
        <div className="cs-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="cs-display-m text-cs-black mb-3">Conference schedule</h2>
            <p className="text-lg text-cs-gray-700">Full agenda of talks and workshops</p>
          </div>

          <div className="space-y-3">
            {schedule.map((session, idx) => {
              const typeStyle =
                session.type === 'Main Stage'
                  ? 'bg-cs-black text-white'
                  : session.type === 'Panel'
                    ? 'bg-cs-blue-50 text-cs-blue'
                    : 'bg-cs-gray-100 text-cs-ink';
              return (
                <div
                  key={idx}
                  className="bg-white border border-cs-gray-200 rounded-cs-lg shadow-cs-xs hover:shadow-cs-md transition-shadow"
                >
                  <div className="flex flex-col md:grid md:grid-cols-[110px_150px_1fr_1.1fr] gap-4 md:gap-6 p-5 md:p-6 md:items-start">
                    {/* Mobile: time + type inline */}
                    <div className="md:hidden flex items-center gap-3">
                      <div className="font-mono font-semibold text-cs-blue text-lg tabular-nums">
                        {session.time}
                        <span className="text-cs-gray-400 text-sm ml-1">(NYC)</span>
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-cs-pill text-xs font-semibold ${typeStyle}`}>
                        {session.type}
                      </span>
                    </div>

                    {/* Desktop: time */}
                    <div className="hidden md:block font-mono font-semibold text-cs-blue text-lg tabular-nums">
                      {session.time}
                      <div className="text-cs-gray-400 text-xs font-body font-medium mt-0.5">NYC</div>
                    </div>

                    {/* Desktop: type chip */}
                    <div className="hidden md:flex md:items-start">
                      <span className={`inline-flex items-center px-3 py-1 rounded-cs-pill text-xs font-semibold ${typeStyle}`}>
                        {session.type}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-display font-bold text-cs-black text-lg leading-snug tracking-cs-tight">
                        {session.title}
                      </h3>
                    </div>

                    {/* Speakers */}
                    <div className="flex flex-col gap-2 text-sm">
                      {session.speakers.map((sp, sidx) => (
                        <div key={sidx} className="flex items-center gap-2 flex-wrap">
                          {'secret' in sp ? (
                            <>
                              <div className="w-8 h-8 rounded-full bg-cs-gray-200 flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 text-cs-gray-500" />
                              </div>
                              <span className="text-cs-ink">{sp.name ?? 'Secret speaker'}</span>
                            </>
                          ) : (
                            <>
                              <img
                                src={sp.photo}
                                alt={sp.name}
                                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                                onError={handleImageError}
                              />
                              <span className="text-cs-ink">
                                {sp.name}
                                {sp.role ? <span className="text-cs-gray-500">, {sp.role}</span> : null}
                              </span>
                              {sp.companyLogo ? (
                                <img
                                  src={sp.companyLogo}
                                  alt={sp.companyName ?? ''}
                                  className="h-4 object-contain"
                                  onError={handleImageError}
                                />
                              ) : null}
                            </>
                          )}
                        </div>
                      ))}
                      {session.moderator ? (
                        <span className="text-cs-gray-500 italic text-xs ml-10">
                          Moderator: {session.moderator}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-btn-primary text-base px-7 py-3.5"
            >
              Register now — free
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Us — CS style */}
      <section id="community" className="py-16 lg:py-24 bg-white">
        <div className="cs-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="cs-display-m text-cs-black mb-3">About us</h2>
            <p className="text-lg text-cs-gray-700">A network of AI practitioners building events for practitioners.</p>
          </div>

          {/* Co-Hosted by Leading AI Communities */}
          <div className="mb-20">
            <h3 className="font-display font-bold text-cs-black text-2xl lg:text-3xl tracking-cs-display text-center mb-10">Co-hosted by leading AI communities</h3>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Community Sprints */}
              <div className="flex flex-col items-center text-center p-6 rounded-cs-lg bg-white border border-cs-gray-200 shadow-cs-xs hover:shadow-cs-md transition-shadow">
                <div className="w-20 h-20 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/co-hosts-company_logo_community_sprints.jpeg"
                    alt="Community Sprints"
                    className="w-full h-full object-contain rounded-lg" onError={handleImageError} />
                </div>
                <h4 className="font-display font-bold text-cs-black text-lg tracking-cs-tight mb-2">
                  Community Sprints
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  A network of passionate AI enthusiasts
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex flex-col items-center">
                    <img
                      src="/co-hosts_belyaev.jpg"
                      alt="Alex Belyaev"
                      className="w-12 h-12 rounded-full object-cover mb-1" onError={handleImageError} />
                    <span className="text-xs text-gray-700 font-medium">Alex Belyaev</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/co-hosts_max_pog.jpg"
                      alt="Max Pog"
                      className="w-12 h-12 rounded-full object-cover mb-1" onError={handleImageError} />
                    <span className="text-xs text-gray-700 font-medium">Max Pog</span>
                  </div>
                </div>
              </div>

              {/* The Product Compass */}
              <div className="flex flex-col items-center text-center p-6 rounded-cs-lg bg-white border border-cs-gray-200 shadow-cs-xs hover:shadow-cs-md transition-shadow">
                <div className="w-20 h-20 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/co-hosts-company_logo_compass.jpeg"
                    alt="The Product Compass"
                    className="w-full h-full object-cover rounded-lg" onError={handleImageError} />
                </div>
                <h4 className="font-display font-bold text-cs-black text-lg tracking-cs-tight mb-2">
                  The Product Compass
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  The #1 AI & PM Newsletter
                </p>
                <div className="flex flex-col items-center mt-2">
                  <img
                    src="/huryn_copy.jpg"
                    alt="Pawel Huryn"
                    className="w-12 h-12 rounded-full object-cover mb-1" onError={handleImageError} />
                  <span className="text-xs text-gray-700 font-medium">Pawel Huryn</span>
                </div>
              </div>

              {/* God of Prompt */}
              <div className="flex flex-col items-center text-center p-6 rounded-cs-lg bg-white border border-cs-gray-200 shadow-cs-xs hover:shadow-cs-md transition-shadow">
                <div className="w-20 h-20 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/co-hosts-company_logo_god-of-prompt.jpeg"
                    alt="God of Prompt"
                    className="w-full h-full object-cover rounded-lg" onError={handleImageError} />
                </div>
                <h4 className="font-display font-bold text-cs-black text-lg tracking-cs-tight mb-2">
                  God of Prompt
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  AI prompts & guides for all businesses
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex flex-col items-center">
                    <img
                      src="/co-hosts_veremeyenko.jpg"
                      alt="Alex Veremeyenko"
                      className="w-12 h-12 rounded-full object-cover mb-1" onError={handleImageError} />
                    <span className="text-xs text-gray-700 font-medium">Alex Veremeyenko</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/co-hosts_robert-youssef.jpg"
                      alt="Robert Youssef"
                      className="w-12 h-12 rounded-full object-cover mb-1" onError={handleImageError} />
                    <span className="text-xs text-gray-700 font-medium">Robert Youssef</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Previous 100% Virtual Conferences Carousel */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-cs-black text-2xl lg:text-3xl tracking-cs-display text-center mb-10">
              Our previous 100% virtual conferences
            </h3>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left - Image */}
              <div className="flex justify-center order-1 lg:order-2 px-4 sm:px-6 lg:px-8">
                <div className="w-full h-96 rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={conferences[conferenceSlide].image}
                    alt={conferences[conferenceSlide].title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-2 lg:order-1 px-4 sm:px-6 lg:px-8">
                <h4 className="font-display font-bold text-cs-black text-xl lg:text-2xl tracking-cs-tight mb-6">
                  {conferences[conferenceSlide].title}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {conferences[conferenceSlide].stats.map((stat, idx) => {
                    const isHighlighted = stat.label.includes('Unique visitors') || stat.label.includes('Zoom peak');
                    const needsBreak = stat.label.includes('Unique visitors');
                    return (
                      <>
                        {needsBreak && <div key={`break-${idx}`} className="sm:col-span-3" />}
                        <div key={idx} className={isHighlighted ? 'py-2 px-3 bg-cs-blue-50 rounded-cs-md' : ''}>
                          <span className={`font-display font-bold tracking-cs-tight ${isHighlighted ? 'text-cs-blue' : 'text-cs-black'}`}>
                            {stat.value}
                          </span>
                          <span className={`ml-2 text-sm ${isHighlighted ? 'text-cs-blue' : 'text-cs-gray-500'}`}>
                            {stat.label}
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Carousel Controls - Below the block */}
            <div className="flex items-center justify-center gap-6 py-8 lg:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
              <button
                onClick={() => setConferenceSlide((prev) => (prev - 1 + conferences.length) % conferences.length)}
                className="p-3 rounded-cs-pill bg-white border border-cs-gray-200 hover:border-cs-black transition-colors"
                aria-label="Previous conference"
              >
                <ChevronLeft className="h-5 w-5 text-cs-ink" />
              </button>

              <div className="flex gap-3">
                {conferences.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setConferenceSlide(idx)}
                    className={`h-3 rounded-full transition-all ${
                      idx === conferenceSlide ? 'bg-cs-blue w-8' : 'bg-cs-gray-300 w-3'
                    }`}
                    aria-label={`Go to conference ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setConferenceSlide((prev) => (prev + 1) % conferences.length)}
                className="p-3 rounded-cs-pill bg-white border border-cs-gray-200 hover:border-cs-black transition-colors"
                aria-label="Next conference"
              >
                <ChevronRight className="h-5 w-5 text-cs-ink" />
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-cs-blue-50 rounded-cs-xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="/co-hosts_max_pog.jpg"
                    alt="Max Pog"
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-cs-pill object-cover object-left border-4 border-white shadow-cs-md"
                    onError={handleImageError}
                  />
                </div>

                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display font-bold text-cs-black text-2xl lg:text-3xl tracking-cs-display">Max Pog</h3>
                    <img src="/csprints_inverted.png" alt="Community Sprints" className="h-8 lg:h-10" onError={handleImageError} />
                  </div>

                  <div className="relative bg-white rounded-cs-lg p-6 lg:p-8 shadow-cs-xs">
                    <img
                      src="/assets/cs/quote-marks.svg"
                      alt=""
                      aria-hidden="true"
                      className="absolute -top-3 left-6 h-7 w-auto"
                    />
                    <p className="text-base lg:text-lg text-cs-ink leading-relaxed">
                      We're glad to invite you to our online conference, <b>AI Skills '26</b> — a place where inspiring people meet practical AI experience. This event is powered by <b>Community Sprints</b>, a company focused on building a network of passionate people committed to growth and continuous learning. We've launched more than 50 events, delivered hands-on AI workshops, and successfully hosted two conferences — with even more ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          </div>

        </div>
      </section>

      {/* Trusted By Section — CS */}
      <section className="py-20 bg-cs-gray-50">
        <div className="cs-container">
          <h2 className="cs-display-m text-cs-black text-center mb-12">
            Trusted by 10,000+ learners worldwide
          </h2>

          {/* Community Members Images */}
          <div className="flex flex-col items-center gap-4">
            {/* First Row - 5 pictures */}
            <div className="flex justify-center items-center -space-x-4">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            {/* Second Row - 4 pictures */}
            <div className="flex justify-center items-center -space-x-4">
              <img
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            {/* Third Row - 3 pictures */}
            <div className="flex justify-center items-center -space-x-4">
              <img
                src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Skills Matter — CS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="cs-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="cs-display-m text-cs-black mb-3">
                  Why AI skills matter in 2026
                </h2>
                <p className="text-lg text-cs-gray-500">
                  Insights from research by the World Economic Forum
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { stat: '77%', text: 'of businesses plan to reskill and upskill their workforce to work alongside AI' },
                  { stat: '69%', text: 'of businesses will hire new people with skills to design AI tools' },
                  { stat: '39%', text: 'of current skills will be disrupted by 2030' },
                ].map((row) => (
                  <div key={row.stat} className="flex items-baseline gap-5">
                    <span className="font-display font-black text-cs-blue text-4xl lg:text-5xl tracking-cs-display tabular-nums shrink-0">
                      {row.stat}
                    </span>
                    <p className="text-base lg:text-lg text-cs-ink leading-relaxed">
                      {row.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/image_(45).png"
                alt="World Economic Forum"
                className="w-full max-w-64 h-auto object-contain"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — CS dark band */}
      <section className="py-20 lg:py-28 bg-cs-black text-white relative overflow-hidden">
        <img
          src="/assets/cs/scribble-hearts-blue.png"
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute top-12 right-12 w-20 opacity-90 rotate-6 pointer-events-none"
        />
        <div className="cs-container relative z-10">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="cs-display-l text-white mb-4">Secure your spot now</h2>
                <p className="text-lg text-cs-gray-300">
                  Join 5,000+ professionals for 5 hours of actionable AI frameworks from 30+ industry practitioners.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  { icon: Gift, text: 'Enjoy exclusive benefits from our partners' },
                  { icon: GraduationCap, text: 'Gain AI skills directly relevant to your daily tasks' },
                  { icon: Network, text: 'Expand your professional network significantly' },
                  { icon: Award, text: 'Get a certificate to add on Linkedin' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-cs-blue-200 mt-1 flex-shrink-0" />
                    <span className="text-base lg:text-lg text-white/90">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-btn-primary text-base px-7 py-3.5"
                >
                  Register now
                  <ChevronRight className="h-5 w-5" />
                </a>
                <span className="inline-flex items-center px-4 py-2 rounded-cs-pill bg-white/10 text-white text-sm font-semibold">
                  Free
                </span>
              </div>
            </div>

            {/* Stub card */}
            <div className="bg-white/5 border border-white/10 rounded-cs-lg p-8 space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-medium text-cs-gray-400 uppercase tracking-wider">Event</div>
                <div className="font-display font-bold text-white text-xl tracking-cs-tight">AI Skills '26</div>
                <div className="text-cs-gray-300 text-sm">Virtual Conf</div>
              </div>
              <div className="h-px bg-white/10" />
              <div className="space-y-1">
                <div className="text-xs font-medium text-cs-gray-400 uppercase tracking-wider">Date</div>
                <div className="font-display font-bold text-white text-lg tracking-cs-tight">22 January 2026</div>
                <div className="text-cs-gray-300 text-sm">8 AM SF · 11 AM NYC · 4 PM GMT</div>
              </div>
              <div className="h-px bg-white/10" />
              <div className="space-y-1">
                <div className="text-xs font-medium text-cs-gray-400 uppercase tracking-wider">Price</div>
                <div className="font-display font-black text-cs-blue-200 text-3xl tracking-cs-display">FREE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section — CS */}
      <section id="faq" className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="cs-display-m text-cs-black mb-12 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-cs-gray-200 rounded-cs-lg overflow-hidden shadow-cs-xs hover:shadow-cs-sm transition-shadow"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cs-gray-50 transition-colors"
                >
                  <span className="font-display font-bold text-lg text-cs-black pr-4 tracking-cs-tight">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cs-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-cs-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      <CountdownBanner calendlyUrl={calendlyUrl} />
      <MobileRegisterButton calendlyUrl={calendlyUrl} />
    </>
  );
}

export default HomePage;