import React, { useState, useEffect } from 'react';
import { 
  Megaphone, 
  Search, 
  BarChart3, 
  Target, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Globe, 
  Download,
  Linkedin,
  ArrowRight,
  Quote,
  Check
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('fr');

  // Gestion du scroll pour la navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  const content = {
    fr: {
      nav: ['Accueil', 'Expertise', 'Parcours', 'Compétences', 'Contact'],
      hero: {
        label: 'Chargée d\'Études Marketing',
        title: 'Transformer la donnée en stratégie.',
        subtitle: 'J\'aide les entreprises à comprendre leur marché pour prendre des décisions éclairées. Analyse quantitative, insights consommateurs et stratégie de marque.',
        cta: 'Découvrir mon profil',
        contact: 'Me contacter'
      },
      about: {
        title: 'À Propos',
        desc: "Diplômée en Marketing Management, je combine une rigueur analytique avec une vision créative. Mon parcours m'a menée de la conception d'enquêtes terrain à la définition de stratégies digitales pour de grandes entreprises comme ATM Mobilis."
      },
      services: {
        title: 'Mon Expertise',
        list: [
          {
            title: 'Études de Marché',
            desc: 'Conception de méthodologies, pilotage d\'enquêtes terrain et analyse des besoins consommateurs.',
            icon: Search
          },
          {
            title: 'Analyse de Données',
            desc: 'Traitement statistique (SPSS), interprétation des KPIs et rédaction de recommandations stratégiques.',
            icon: BarChart3
          },
          {
            title: 'Stratégie de Marque',
            desc: 'Positionnement, analyse de l\'image de marque et stratégies de communication digitale.',
            icon: Megaphone
          }
        ]
      },
      experience: {
        title: 'Parcours Professionnel',
        items: [
          {
            role: 'Chargée d\'Étude Marketing',
            company: 'IRSM',
            period: '2023 - Présent',
            desc: 'Pilotage complet d\'études marketing : de la relation client à la présentation des résultats, en passant par la supervision des équipes d\'enquêteurs.'
          },
          {
            role: 'Stagiaire Communication Digitale',
            company: 'ATM Mobilis',
            period: 'Avr. 2021 - Juil. 2021',
            desc: 'Développement de la stratégie social media et réalisation d\'une étude d\'impact sur l\'image de marque.'
          }
        ]
      },
      education: {
        title: 'Formation',
        items: [
          {
             degree: 'Master en Marketing Management',
             school: 'École Nationale Supérieure de Management (Kolea)',
             year: '2019 - 2021'
          },
          {
             degree: 'Licence en Management',
             school: 'Université Mohammed Saddik Ben Yahia (Jijel)',
             year: '2015 - 2018'
          }
        ]
      },
      skills: {
        title: 'Compétences & Outils',
        tech: ['SPSS', 'Pack Office', 'Réseaux Sociaux', 'Reporting'],
        soft: ['Esprit d\'analyse', 'Communication', 'Gestion de projet', 'Adaptabilité']
      },
      contact: {
        title: 'Collaborons ensemble',
        text: 'À la recherche de nouvelles opportunités. N\'hésitez pas à me contacter pour échanger sur vos projets.',
        download: 'Télécharger mon CV'
      }
    },
    en: {
      nav: ['Home', 'Expertise', 'Journey', 'Skills', 'Contact'],
      hero: {
        label: 'Marketing Research Officer',
        title: 'Turning data into strategy.',
        subtitle: 'I help businesses understand their market to make informed decisions. Quantitative analysis, consumer insights, and brand strategy.',
        cta: 'Discover my profile',
        contact: 'Contact me'
      },
      about: {
        title: 'About Me',
        desc: "Graduated in Marketing Management, I combine analytical rigor with creative vision. My journey has taken me from designing field surveys to defining digital strategies for major companies like ATM Mobilis."
      },
      services: {
        title: 'My Expertise',
        list: [
          {
            title: 'Market Research',
            desc: 'Methodology design, field survey management, and consumer needs analysis.',
            icon: Search
          },
          {
            title: 'Data Analysis',
            desc: 'Statistical processing (SPSS), KPI interpretation, and drafting strategic recommendations.',
            icon: BarChart3
          },
          {
            title: 'Brand Strategy',
            desc: 'Positioning, brand image analysis, and digital communication strategies.',
            icon: Megaphone
          }
        ]
      },
      experience: {
        title: 'Professional Journey',
        items: [
          {
            role: 'Marketing Research Officer',
            company: 'IRSM',
            period: '2023 - Present',
            desc: 'Complete management of marketing studies: from client relations to result presentation, including surveyor team supervision.'
          },
          {
            role: 'Digital Communication Intern',
            company: 'ATM Mobilis',
            period: 'Apr 2021 - Jul 2021',
            desc: 'Development of social media strategy and execution of a brand image impact study.'
          }
        ]
      },
      education: {
        title: 'Education',
        items: [
          {
             degree: 'Master in Marketing Management',
             school: 'National Higher School of Management (Kolea)',
             year: '2019 - 2021'
          },
          {
             degree: 'Bachelor in Management',
             school: 'Mohammed Saddik Ben Yahia University (Jijel)',
             year: '2015 - 2018'
          }
        ]
      },
      skills: {
        title: 'Skills & Tools',
        tech: ['SPSS', 'Office Suite', 'Social Media', 'Reporting'],
        soft: ['Analytical Mindset', 'Communication', 'Project Management', 'Adaptability']
      },
      contact: {
        title: 'Let\'s collaborate',
        text: 'Looking for new opportunities. Feel free to contact me to discuss your projects.',
        download: 'Download my CV'
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      
      {/* Navbar Minimaliste */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-rose-900 tracking-tight">
            Yousra<span className="text-stone-400">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {t.nav.map((item, index) => (
              <a key={index} href={`#section-${index}`} className="text-sm font-medium text-stone-600 hover:text-rose-900 transition-colors uppercase tracking-wider">
                {item}
              </a>
            ))}
            <button onClick={toggleLanguage} className="flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 hover:border-rose-900 transition-colors text-xs font-bold uppercase">
              <Globe size={14} /> {language}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-stone-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col gap-4 md:hidden">
            {t.nav.map((item, index) => (
              <a key={index} href={`#section-${index}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-stone-800">
                {item}
              </a>
            ))}
            <button onClick={toggleLanguage} className="text-left font-bold text-rose-900 mt-4">
              Switch to {language === 'fr' ? 'English' : 'Français'}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section - Style Editorial */}
      <header id="section-0" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-rose-100/30 rounded-bl-[100px]"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-stone-100 text-rose-800 text-sm font-bold tracking-wide uppercase mb-4">
              {t.hero.label}
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-stone-900 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#section-1" className="px-8 py-4 bg-rose-900 text-white rounded-full font-medium hover:bg-rose-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-900/20">
                {t.hero.cta} <ArrowRight size={18} />
              </a>
              <a href="#section-4" className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-2">
                {t.hero.contact}
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
             {/* Decorative abstract elements instead of photo */}
             <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto transform rotate-3 border-t-4 border-rose-900">
               <Quote size={40} className="text-rose-200 mb-4" />
               <p className="text-lg font-serif italic text-stone-700 mb-6">
                 "L'objectif du marketing est de connaître et comprendre le client à tel point que le produit ou service lui convienne parfaitement et se vende de lui-même."
               </p>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-xs font-bold text-stone-500">PD</div>
                 <div>
                   <div className="text-sm font-bold text-stone-900">Peter Drucker</div>
                   <div className="text-xs text-stone-500">Inspiration</div>
                 </div>
               </div>
             </div>
             <div className="absolute top-10 right-10 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </header>

      {/* Expertise Section - Clean Cards */}
      <section id="section-1" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 mb-4">{t.services.title}</h2>
            <div className="w-24 h-1 bg-rose-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.list.map((service, idx) => (
              <div key={idx} className="p-8 bg-stone-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-stone-100 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-rose-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education - Asymmetric Layout */}
      <section id="section-2" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Experience Column */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
                <Target className="text-rose-900" /> {t.experience.title}
              </h2>
              <div className="space-y-12">
                {t.experience.items.map((job, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-rose-200">
                    <div className="absolute top-0 -left-[9px] w-4 h-4 bg-rose-900 rounded-full ring-4 ring-stone-100"></div>
                    <span className="text-sm font-bold text-rose-900 bg-rose-100 px-3 py-1 rounded-full mb-2 inline-block">
                      {job.period}
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 mt-2">{job.role}</h3>
                    <div className="text-stone-500 font-medium mb-3">{job.company}</div>
                    <p className="text-stone-600">
                      {job.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & About Column */}
            <div className="space-y-12">
               <div>
                  <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
                    <Check className="text-rose-900" /> {t.about.title}
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
                    <p className="text-stone-600 leading-relaxed text-lg">
                      {t.about.desc}
                    </p>
                  </div>
               </div>

               <div>
                  <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">{t.education.title}</h2>
                  <div className="space-y-6">
                    {t.education.items.map((edu, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex items-start gap-4">
                        <div className="p-3 bg-stone-100 rounded-lg text-stone-600">
                           <Globe size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900">{edu.degree}</h4>
                          <p className="text-stone-600 text-sm">{edu.school}</p>
                          <p className="text-rose-800 text-xs font-medium mt-1">{edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section - Minimalist Tags */}
      <section id="section-3" className="py-24 bg-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">{t.skills.title}</h2>
              <p className="text-rose-100 text-lg mb-8 max-w-md">
                Des outils techniques aux compétences interpersonnelles, voici mon arsenal pour mener à bien vos projets.
              </p>
              <div className="flex flex-wrap gap-3">
                 {t.skills.tech.map((skill, i) => (
                   <span key={i} className="px-5 py-2 bg-rose-800 rounded-full text-rose-100 border border-rose-700">
                     {skill}
                   </span>
                 ))}
              </div>
            </div>
            
            <div className="bg-rose-950/30 p-8 rounded-2xl backdrop-blur-sm border border-rose-800">
               <h3 className="text-xl font-bold mb-6 text-rose-100">Soft Skills</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {t.skills.soft.map((skill, i) => (
                   <div key={i} className="flex items-center gap-3 text-rose-50">
                     <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                     {skill}
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="section-4" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-6">{t.contact.title}</h2>
          <p className="text-xl text-stone-500 mb-12">
            {t.contact.text}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a href="mailto:yousraboubendir@gmail.com" className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
              <Mail size={20} /> yousraboubendir@gmail.com
            </a>
            <a href="/CV_BOUBENDIR_Yousra.pdf" className="px-8 py-4 bg-white text-stone-900 border border-stone-300 rounded-full font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-2">
              <Download size={20} /> {t.contact.download}
            </a>
          </div>

          <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-400 text-sm">
            <p>© {new Date().getFullYear()} Yousra Boubendir. Tous droits réservés.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
               <span className="flex items-center gap-2"><MapPin size={16}/> El Mouradiya, Alger</span>
               <span className="flex items-center gap-2">06 68 60 73 06</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;