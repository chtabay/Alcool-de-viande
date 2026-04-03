(() => {
  'use strict';

  // ============================================
  // i18n
  // ============================================

  const en = {
    'nav.process': 'The Process',
    'nav.matter': 'The Matter',
    'nav.product': 'The Product',
    'nav.register': 'Register',

    'hero.over': 'Experimental spirit · Ultra-limited production',
    'hero.t1': 'Meat',
    'hero.t2': 'Alcohol',
    'hero.sub': 'The first spirit distilled from duck foie gras hepatic glycogen.<br>We don\'t yet know if it\'s drinkable.<br>That\'s precisely what makes it fascinating.',
    'hero.cta': 'Register your interest',

    'statement.quote': '"We\'ve been fermenting grapes for ten thousand years. No one ever thought to ferment foie gras. The question isn\'t <em>why</em>, but <em>why not</em>."',

    'proc.title': 'The Process',
    'proc.p1': 'The liver of a gavage-fed duck contains a significant reserve of glycogen — a glucose polymer stored in hepatic cells. It is this energy reserve, typically ignored by gastronomy, that constitutes our raw material.',
    'proc.p2': 'The process relies on a three-stage enzymatic cascade: degradation of glycogen into glucose by endogenous hepatic amylases, alcoholic fermentation of the resulting glucose must, then slow distillation in a copper pot still.',
    'proc.s1.t': 'Enzymatic hydrolysis',
    'proc.s1.d': 'Raw foie gras livers are ground and incubated at 37°C with their own glycolytic enzymes (glycogen phosphorylase, hepatic amylase). Glycogen is progressively converted to free glucose. Typical yield: 8 to 12 g of glucose per liver.',
    'proc.s2.t': 'Fermentation',
    'proc.s2.d': 'The hepatic must is inoculated with a <em>Saccharomyces cerevisiae</em> strain selected for its fatty acid tolerance. Slow fermentation at 18°C for 14 days. The result is a "liver wine" at approximately 4 to 5% ABV.',
    'proc.s3.t': 'Distillation',
    'proc.s3.d': 'Double distillation in a 50-litre Charentais copper pot still. Severe cut: only the heart is retained. This yields a clear distillate at 62–68% ABV, with an aromatic profile that remains largely unexplored.',
    'proc.note': '<strong>Transparency note:</strong> This process is experimental. No formal organoleptic study has yet been conducted. Aromatic descriptors mentioned on this site are from internal micro-tastings, not certified panels. We will publish full analytical results once Lot 001 is stabilised.',
    'proc.note.strong': 'Transparency note:',

    'mat.title': 'The Matter',
    'mat.lead': 'It takes between 30 and 40 whole duck foie gras to produce a single 50 cl bottle.',
    'mat.p1': 'Our livers are sourced exclusively from producers in the Gers and Périgord regions, selected for the quality of their traditional whole-grain corn gavage. A liver richer in glycogen yields more glucose — and therefore a more generous distillate.',
    'mat.p2': 'Each liver is individually characterised for glycogen content before batch integration. Livers with a level below 6% are rejected and redirected to conventional gastronomic channels.',
    'mat.stat1': 'foie gras per bottle',
    'mat.stat2': 'glucose per liver',
    'mat.stat3': 'per production lot',

    'prod.title': 'The Product',
    'prod.name': 'Alcool de Viande — Foie gras eau-de-vie',
    'prod.spec1.l': 'Category',
    'prod.spec1.v': 'Experimental eau-de-vie of hepatic origin',
    'prod.spec2.l': 'Raw material',
    'prod.spec2.v': 'Raw duck foie gras, Gers & Périgord (PGI)',
    'prod.spec3.l': 'Target ABV',
    'prod.spec4.l': 'Volume',
    'prod.spec5.l': 'Production',
    'prod.spec5.v': '12 bottles (Lot 001)',
    'prod.spec6.l': 'Status',
    'prod.spec6.v': 'Undergoing stabilisation',

    'prod.tasting.title': 'Preliminary tasting notes',
    'prod.tasting.disc': '(Internal micro-tasting, uncertified — to be confirmed)',
    'prod.tasting.nose': 'Nose',
    'prod.tasting.nose.d': 'Fatty, buttery attack, evolving into toasted hazelnut and blond caramel nuances. Lightly animal base note, fine leather.',
    'prod.tasting.palate': 'Palate',
    'prod.tasting.palate.d': 'Unusually oily texture for a spirit. Gentle, almost milky attack. Complex mid-palate at the frontier of salt and sweet. Long finish, pronounced umami.',
    'prod.tasting.finish': 'Finish',
    'prod.tasting.finish.d': 'Remarkable aromatic persistence (>40 seconds). Lingering beurre noisette and concentrated broth. Measured alcoholic warmth.',

    'prod.price': 'Price on request',
    'prod.price.note': 'Register allocation only',

    'cost.title': 'Why this price',
    'cost.l1': 'Raw material (≈35 PGI foie gras)',
    'cost.l2': 'Individual glycogen analysis per liver',
    'cost.l3': 'Enzymatic hydrolysis & fermentation (14 days)',
    'cost.l4': 'Double distillation in copper pot still',
    'cost.l5': 'Stabilisation, analysis & packaging',
    'cost.total': 'Estimated cost per bottle',
    'cost.note': 'These figures exclude R&D, labour time and final packaging. They reflect only the material and process cost of a 50 cl bottle at the experimental stage.',

    'reg.title': 'Register of interest',
    'reg.desc': 'Lot 001 is currently undergoing stabilisation. Production is limited to 12 bottles. Registration does not constitute a purchase commitment — it positions you to be contacted first should the product be deemed fit for tasting.',
    'reg.name': 'Name',
    'reg.btn': 'Register your interest',
    'reg.legal': 'No payment required. Your data is used solely to contact you regarding Lot 001. Unsubscribe at any time.',

    'footer.tagline': 'First spirit of hepatic origin',
    'footer.l1': 'The Process',
    'footer.l2': 'The Matter',
    'footer.l3': 'The Product',
    'footer.l4': 'Register',
    'footer.legal': 'Alcohol abuse is dangerous for your health. Drink responsibly. Experimental product — not currently commercialised.'
  };

  const fr = {};
  let currentLang = 'fr';

  function captureOriginal() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      fr[el.dataset.i18n] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      fr[el.dataset.i18nPh] = el.placeholder;
    });
  }

  function applyLang(lang) {
    const dict = lang === 'en' ? en : fr;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });
    document.documentElement.lang = lang;
    currentLang = lang;
    document.querySelectorAll('.lang-toggle__opt').forEach(o => {
      o.classList.toggle('lang-toggle__opt--active', o.dataset.lang === lang);
    });
  }

  // ============================================
  // Nav
  // ============================================

  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }, { passive: true });

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav__links');

  navToggle?.addEventListener('click', () => navLinks.classList.toggle('active'));
  navLinks?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('active'))
  );

  // ============================================
  // Lang toggle
  // ============================================

  captureOriginal();

  document.getElementById('langToggle')?.addEventListener('click', () => {
    applyLang(currentLang === 'fr' ? 'en' : 'fr');
  });

  // ============================================
  // Reveal
  // ============================================

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ============================================
  // Smooth scroll
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 16,
        behavior: 'smooth'
      });
    });
  });

  // ============================================
  // Hero parallax
  // ============================================

  const heroBg = document.querySelector('.hero__bg');
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      heroBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    }
  }, { passive: true });

  // ============================================
  // Register form
  // ============================================

  document.querySelector('.register__form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn');
    const label = btn.textContent;
    btn.textContent = currentLang === 'en' ? '✓ Registered' : '✓ Inscrit';
    btn.style.borderColor = 'var(--c-gold)';
    btn.style.color = 'var(--c-gold)';
    setTimeout(() => { btn.textContent = label; btn.style.borderColor = ''; btn.style.color = ''; }, 3000);
  });
})();
