"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight, Mail, BarChart3, Layers, MonitorPlay, Cpu, Sparkles, Loader2 } from 'lucide-react';

// --- Gemini API Configuration ---
const apiKey = "AIzaSyBltatz_JeqfE0qrrGxMpWtvIbaapY2IXQ"; // 여기에 API 키를 넣으면 AI가 작동합니다

// --- 1. Content Data ---
const content = {
  ko: {
    nav: { about: '소개', services: '서비스', belief: '핵심가치', aiLab: 'AI 실험실', contact: '문의하기' },
    hero: {
      headline: 'Build the Direction.\nProve the Revenue.',
      subheadline: '불확실한 디지털 시장에서\n유행이 아닌 ‘수익이 나는 방향’을 설계합니다.',
      description: 'Northstar Digital Lab은 광고를 집행하지 않습니다.\n실험하고, 검증하고, 구조로 남깁니다.',
      cta: '프로젝트 문의하기',
    },
    about: {
      title: 'About Us',
      subtitle: 'Not Trends. Just Profitable Directions.',
      desc1: 'Northstar Digital Lab은 광고, 콘텐츠, 시스템을 통해\n수익으로 검증된 디지털 비즈니스의 방향을 설계하는 실험실입니다.',
      desc2: '단기 성과나 유행을 좇지 않고,\n실제 매출과 데이터로 증명되는 구조만을 만듭니다.',
      card1: { title: '검증 도구', desc: '광고는 단순 집행이 아닌 시장 검증의 수단입니다.' },
      card2: { title: '자산화', desc: '콘텐츠는 소모품이 아닌 수익 자산입니다.' },
      card3: { title: '확장 장치', desc: '시스템은 사람이 없어도 작동하는 구조입니다.' },
    },
    services: {
      title: 'What We Do',
      items: [
        { title: 'Market Validation', desc: '광고대행 기반 시장 검증', icon: 'BarChart3' },
        { title: 'Revenue Structure', desc: '콘텐츠·시스템을 통한 수익 구조 설계', icon: 'Layers' },
        { title: 'Digital Asset', desc: 'SNS 및 디지털 콘텐츠 기반 자산 축적', icon: 'MonitorPlay' },
        { title: 'Systemization', desc: '반복 가능하고 확장 가능한 비즈니스 구축', icon: 'Cpu' },
      ],
    },
    belief: {
      title: 'Our Belief',
      items: [
        { main: 'Direction over Trend', sub: '유행보다 방향' },
        { main: 'Proof over Promise', sub: '말보다 숫자' },
        { main: 'System over Talent', sub: '개인보다 구조' },
        { main: 'Leverage over Labor', sub: '더 일하지 않고 더 쌓는다' },
      ],
    },
    aiLab: {
      title: 'AI Revenue Hypothesis',
      subtitle: '비즈니스 고민을 입력하면, 수익화 실험 가설을 제안해드립니다.',
      placeholder: '예: 수제화 쇼핑몰을 운영 중인데 광고비 대비 매출이 너무 낮아요. 어떻게 구조를 바꿔야 할까요?',
      button: 'AI 실험 설계하기 ✨',
      resultTitle: 'Northstar AI Analysis',
      loading: '수익 구조를 분석하고 있습니다...',
      error: '분석 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    },
    footer: {
      contactTitle: 'Ready to build your direction?',
      contactDesc: '수익이 나는 방향을 증명하고 싶다면 문의해주세요.',
      email: 'northstardigitallab@gmail.com',
      copyright: '© 2026 Northstar Digital Lab. All rights reserved.',
    },
  },
  en: {
    nav: { about: 'About', services: 'Services', belief: 'Belief', aiLab: 'AI Lab', contact: 'Contact' },
    hero: {
      headline: 'Build the Direction.\nProve the Revenue.',
      subheadline: 'Designing profitable directions,\nnot following uncertain digital trends.',
      description: 'We don’t just run ads.\nWe experiment, validate, and build structures.',
      cta: 'Contact Us',
    },
    about: {
      title: 'About Us',
      subtitle: 'Not Trends. Just Profitable Directions.',
      desc1: 'Northstar Digital Lab engineers verified digital business directions through ads, content, and systems.',
      desc2: 'We chase neither short-term gains nor trends.\nWe build structures proven by revenue and data.',
      card1: { title: 'Validation Tool', desc: 'Ads are tools for market validation, not just spending.' },
      card2: { title: 'Asset Building', desc: 'Content is a revenue asset, not a consumable.' },
      card3: { title: 'Scalability', desc: 'Systems work even when people stop.' },
    },
    services: {
      title: 'What We Do',
      items: [
        { title: 'Market Validation', desc: 'Market verification based on ad performance', icon: 'BarChart3' },
        { title: 'Revenue Structure', desc: 'Designing profit structures via content & systems', icon: 'Layers' },
        { title: 'Digital Asset', desc: 'Asset accumulation based on digital content', icon: 'MonitorPlay' },
        { title: 'Systemization', desc: 'Building repeatable and scalable businesses', icon: 'Cpu' },
      ],
    },
    belief: {
      title: 'Our Belief',
      items: [
        { main: 'Direction over Trend', sub: '' },
        { main: 'Proof over Promise', sub: '' },
        { main: 'System over Talent', sub: '' },
        { main: 'Leverage over Labor', sub: '' },
      ],
    },
    aiLab: {
      title: 'AI Revenue Hypothesis',
      subtitle: 'Enter your business challenge, and we will suggest a revenue experiment hypothesis.',
      placeholder: 'E.g., I run a handmade shoe store, but ROAS is too low. How should I restructure?',
      button: 'Generate Hypothesis ✨',
      resultTitle: 'Northstar AI Analysis',
      loading: 'Analyzing revenue structure...',
      error: 'An error occurred during analysis. Please try again later.',
    },
    footer: {
      contactTitle: 'Ready to build your direction?',
      contactDesc: 'Contact us to prove your profitable direction.',
      email: 'contact@northstardigitallab.com',
      copyright: '© 2026 Northstar Digital Lab. All rights reserved.',
    },
  },
};

// --- 2. Components ---
const Icon = ({ name, className }: { name: string; className?: string }) => {
  const icons: any = { BarChart3, Layers, MonitorPlay, Cpu };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon className={className} /> : null;
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-20 md:py-32 px-6 md:px-12 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- 3. AI Feature ---
const AIRevenueGenerator = ({ t }: { t: any }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateHypothesis = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError('');
    setResult('');
    try {
      const systemPrompt = `Analyze the user's business problem and provide a brief experiment hypothesis (Diagnosis, Hypothesis, Experiment, Metric) in Korean.`;
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `User Query: ${input}` }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
          }),
        }
      );
      if (!response.ok) throw new Error('API call failed');
      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (generatedText) setResult(generatedText);
      else throw new Error('No content');
    } catch (err) {
      setError(t.aiLab.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 rounded-lg p-8 md:p-12 shadow-2xl border border-slate-700 max-w-4xl mx-auto mt-12">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="text-yellow-400" size={24} />
        <h3 className="text-2xl font-bold text-white">{t.aiLab.title}</h3>
      </div>
      <p className="text-slate-400 mb-8">{t.aiLab.subtitle}</p>
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.aiLab.placeholder}
          className="w-full bg-slate-800 border border-slate-600 rounded-md p-4 text-white placeholder-slate-500 focus:outline-none focus:border-white transition-colors h-32 resize-none"
        />
        <button
          onClick={generateHypothesis}
          disabled={loading || !input.trim()}
          className="w-full bg-white text-slate-900 font-bold py-4 rounded-md hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <><Loader2 className="animate-spin" size={20} />{t.aiLab.loading}</> : t.aiLab.button}
        </button>
      </div>
      {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
      {result && (
        <div className="mt-8 pt-8 border-t border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="prose prose-invert max-w-none text-slate-300">
             {result.split('\n').map((line, i) => (
               <p key={i} className="mb-2">{line.startsWith('**') ? <strong className="text-white block mt-4 mb-1 text-lg">{line.replace(/\*\*/g, '')}</strong> : line}</p>
             ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main Page Component ---
export default function NorthstarLab() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => (prev === 'ko' ? 'en' : 'ko'));
  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             
             {/* 🔹 로고 이미지 적용된 부분 🔹 */}
             <img 
               src="/northstardigitallab.png" 
               alt="Northstar Logo" 
               className="h-10 w-auto object-contain rounded-sm"
             />

            <span className="font-bold text-lg tracking-tight text-slate-900">Northstar Digital Lab</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('about')} className="text-sm font-medium hover:text-slate-600 transition-colors">{t.nav.about}</button>
            <button onClick={() => scrollTo('services')} className="text-sm font-medium hover:text-slate-600 transition-colors">{t.nav.services}</button>
            <button onClick={() => scrollTo('belief')} className="text-sm font-medium hover:text-slate-600 transition-colors">{t.nav.belief}</button>
            <button onClick={() => scrollTo('ai-lab')} className="text-sm font-medium hover:text-slate-600 transition-colors flex items-center gap-1 text-slate-900">
               <Sparkles size={14} className="text-slate-900" />
               {t.nav.aiLab}
             </button>
            <button onClick={toggleLang} className="flex items-center gap-1 text-xs font-bold border border-slate-200 px-3 py-1 rounded-full hover:bg-slate-100 transition-colors">
              <Globe size={14} /> {lang === 'ko' ? 'ENG' : 'KOR'}
            </button>
            <button onClick={() => window.location.href = `mailto:${t.footer.email}`} className="bg-slate-900 text-white px-5 py-2 rounded-sm text-sm font-medium hover:bg-slate-800 transition-colors">
              {t.nav.contact}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLang} className="text-sm font-bold">{lang === 'ko' ? 'EN' : 'KR'}</button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-6 md:hidden shadow-lg">
            <button onClick={() => scrollTo('about')} className="text-lg font-medium text-left">{t.nav.about}</button>
            <button onClick={() => scrollTo('services')} className="text-lg font-medium text-left">{t.nav.services}</button>
            <button onClick={() => scrollTo('belief')} className="text-lg font-medium text-left">{t.nav.belief}</button>
            <button onClick={() => scrollTo('ai-lab')} className="text-lg font-medium text-left flex items-center gap-2"><Sparkles size={16} /> {t.nav.aiLab}</button>
            <button onClick={() => window.location.href = `mailto:${t.footer.email}`} className="bg-slate-900 text-white px-5 py-3 rounded-sm text-center font-medium">{t.nav.contact}</button>
          </div>
        )}
      </nav>

      <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 px-6 flex flex-col items-center justify-center text-center bg-slate-50 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-slate-200 rounded-full blur-3xl opacity-20 -z-10 animate-pulse" />
        <FadeIn><h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight whitespace-pre-line">{t.hero.headline}</h1></FadeIn>
        <FadeIn delay={200}><p className="text-lg md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto whitespace-pre-line font-light">{t.hero.subheadline}</p></FadeIn>
        <FadeIn delay={400}>
            <p className="text-sm md:text-base text-slate-500 mb-10 whitespace-pre-line">{t.hero.description}</p>
            <button onClick={() => window.location.href = `mailto:${t.footer.email}`} className="group bg-slate-900 text-white px-8 py-4 rounded-sm text-lg font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 mx-auto">{t.hero.cta}<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></button>
        </FadeIn>
      </section>

      <Section id="about" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="border-l-4 border-slate-900 pl-6">
                <h2 className="text-slate-400 font-bold tracking-widest text-sm uppercase mb-2">{t.about.title}</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.about.subtitle}</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed whitespace-pre-line">{t.about.desc1}</p>
                <p className="text-lg text-slate-800 font-medium whitespace-pre-line">{t.about.desc2}</p>
            </div>
          </FadeIn>
          <div className="grid gap-6">
            {[t.about.card1, t.about.card2, t.about.card3].map((card, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-slate-50 p-6 rounded-sm hover:shadow-md transition-shadow border border-slate-100">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-slate-600">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section id="services" className="bg-slate-900 text-white">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2><div className="w-12 h-1 bg-white mx-auto opacity-50"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="bg-slate-800/50 p-8 rounded-sm h-full hover:bg-slate-800 transition-colors border border-slate-700">
                <div className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-sm mb-6 text-white"><Icon name={item.icon} /></div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="belief" className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.belief.title}</h2></div>
          <div className="grid gap-4">
            {t.belief.items.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="flex items-center justify-between bg-white p-6 md:p-8 rounded-sm shadow-sm border border-slate-100 group hover:border-slate-300 transition-colors">
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">{item.main}</h3>
                  {item.sub && <span className="text-sm md:text-base text-slate-500 font-medium">{item.sub}</span>}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
      
      <Section id="ai-lab" className="bg-white">
         <FadeIn><AIRevenueGenerator t={t} /></FadeIn>
      </Section>

      <footer className="bg-slate-950 text-slate-400 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.footer.contactTitle}</h2>
                <p className="text-lg mb-10">{t.footer.contactDesc}</p>
                <a href={`mailto:${t.footer.email}`} className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-sm text-lg font-bold hover:bg-slate-200 transition-colors"><Mail size={20} />{t.footer.email}</a>
                <div className="mt-20 pt-8 border-t border-slate-800 text-sm"><p>{t.footer.copyright}</p><p className="mt-2 text-xs text-slate-600">Built with Next.js & Tailwind CSS</p></div>
            </FadeIn>
        </div>
      </footer>
    </div>
  );
}
