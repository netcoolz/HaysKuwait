import Image from "next/image";

const company = {
  name: "Hays Animal Feed Co.",
  phone: "+96560999252",
  phoneDisplay: "+965 6099 9252",
  secondPhone: "+96597615416",
  secondPhoneDisplay: "+965 9761 5416",
  email: "admin@hayskuwait.com",
  address: "P.O. Box 270, Surra 45703, Kuwait",
};

const whatsappUrl = `https://wa.me/${company.phone.replace("+", "")}?text=${encodeURIComponent(
  "Hello Hays Animal Feed Co., I would like to enquire about your hay products.",
)}`;

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8.5c.3-.5.6-.5.9-.5.2 0 .4 0 .5.4l.8 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.6 1 1.5 1.8 2.6 2.3.3.1.5.1.7-.1l.8-.9c.2-.2.4-.3.7-.1l1.6.8c.3.2.4.3.4.6 0 .4-.2 1-.7 1.4-.5.4-1.2.6-1.9.4-1.1-.2-2.5-.9-3.9-2.2-1.5-1.4-2.4-3.1-2.6-4.2-.1-.7.2-1.3.8-1.7Z" fill="currentColor" />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m8 3 3 4-2 2a15 15 0 0 0 6 6l2-2 4 3-1 4c-.2.7-.9 1.1-1.6 1C10 20 4 14 3 5.6 2.9 4.9 3.3 4.2 4 4l4-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const offerings = [
  { number: "01", title: "Premium Hay", text: "Carefully sourced hay selected to support the feeding needs of horses across different breeds and activities.", tag: "OUR PRODUCTS" },
  { number: "02", title: "Quality & Selection", text: "A considered approach to product selection, quality checks and dependable supply.", tag: "OUR STANDARDS" },
  { number: "03", title: "Equine Care", text: "Feeding solutions for Arabian horse breeders, competitive trainers and equestrian facilities.", tag: "OUR PURPOSE" },
];

export default function Home() {
  return (
    <main className="hays-site" id="home">
      <div className="announcement">
        <span className="announcement-dot" />
        <span>QUALITY HAY <b>·</b> THOUGHTFULLY SOURCED <b>·</b> KUWAIT</span>
        <span className="announcement-right">EQUINE NUTRITION &amp; CARE</span>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Hays Animal Feed Co. home">
            <Image src="/images/logo.png" alt="" width={190} height={100} priority className="brand-logo" />
            <span className="brand-wordmark">
              <strong>HAYS</strong>
              <span>ANIMAL FEED CO.</span>
              <i>KUWAIT</i>
            </span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">Our Story</a><a href="#products">Products</a><a href="#commitment">Our Standards</a><a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="#contact">Let&apos;s Talk <ArrowIcon className="icon-small" /></a>
        </div>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />A MORE CONSIDERED APPROACH TO HAY</div>
          <h1 className="hero-title">Rooted in<br />nature.<br /><em>Raised with care.</em></h1>
          <p className="hero-description">Quality hay for horses that deserve the best. Thoughtfully sourced to support horse health, everyday care and performance — from Arabian breeding farms to equestrian communities.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#products">Discover Our Products <ArrowIcon className="icon-small" /></a>
            <a className="text-link" href="#about">Get to know Hays <span className="text-link-line" /></a>
          </div>
          <div className="hero-footnote"><span className="footnote-mark">H.</span><span><strong>Quality. Care. Trust.</strong><small>Our promise in every bale.</small></span></div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame-outer">
            <div className="hero-image-frame">
              <Image src="/images/hay.jpg" alt="Hay bales carefully selected for horse feeding" fill priority sizes="(max-width: 800px) 100vw, 50vw" className="hero-image" />
              <div className="hero-image-shade" />
              <div className="image-top-label"><span className="image-label-dot" />SELECTED WITH CARE</div>
              <div className="image-bottom-content"><span className="image-bottom-kicker">NATURE&apos;S ESSENTIAL</span><p>Goodness in<br />every bale.</p></div>
              <span className="image-index">01 / HAYS</span>
            </div>
          </div>
          <div className="hero-stamp"><span className="stamp-ring">QUALITY · CARE · TRUST ·</span><span className="stamp-center">H</span></div>
          <div className="visual-caption"><span>01 — A NATURAL FOUNDATION</span><span>KUWAIT · HAYS ANIMAL FEED</span></div>
        </div>
      </section>

      <div className="brand-strip"><div className="brand-strip-inner"><span>Carefully Sourced</span><i>✳</i><span>Quality Focused</span><i>✳</i><span>Equine Inspired</span><i>✳</i><span>Customer First</span></div></div>

      <section className="about-section section-shell" id="about">
        <div className="about-aside"><div className="section-number"><span>01</span><span className="section-number-line" />OUR STORY</div><div className="about-aside-note"><span>✳</span><p>A natural choice<br />for equine care.</p></div></div>
        <div className="about-content"><p className="eyebrow">HAYS ANIMAL FEED CO.</p><h2 className="section-heading">Better feeding<br /><em>starts with better choices.</em></h2><p className="about-lead">We believe that the health and performance of horses begin with the quality of their feed.</p><p className="body-copy">At Hays Animal Feed Co., our carefully sourced hays are selected to meet the diverse needs of different equine breeds and activities. From Arabian horse breeders and competitive racers to leisure riders, we understand that every horse matters.</p><p className="body-copy">We continue to build relationships with international farms and suppliers who share our commitment to quality and responsible sourcing, while developing our offerings to meet the evolving needs of horse owners and trainers.</p><a className="text-link" href="#commitment">What we stand for <ArrowIcon className="icon-small" /></a></div>
      </section>

      <section className="products-section" id="products"><div className="section-shell products-inner">
        <div className="products-heading-row"><div><div className="section-number"><span>02</span><span className="section-number-line" />WHAT WE DO</div><h2 className="section-heading">Quality in every<br /><em>part of the journey.</em></h2></div><p className="products-intro">From careful sourcing to customer support, our focus remains on the details that matter to horses and the people who care for them.</p></div>
        <div className="product-grid">{offerings.map((item) => <article className="product-card" key={item.number}><div className="product-card-top"><span className="product-number">{item.number}</span><ArrowIcon className="product-arrow" /></div><div className="product-card-rule" /><p className="product-tag">{item.tag}</p><h3>{item.title}</h3><p className="product-description">{item.text}</p><a className="product-link" href="#contact">Make an enquiry <span>↗</span></a></article>)}</div>
        <p className="product-disclaimer">Product availability and specifications are subject to confirmation. Contact our team for current offerings.</p>
      </div></section>

      <section className="commitment-section" id="commitment"><div className="section-shell commitment-inner">
        <div className="commitment-heading"><div className="section-number section-number-light"><span>03</span><span className="section-number-line" />OUR COMMITMENT</div><h2 className="section-heading">A standard of care<br /><em>worth standing by.</em></h2><p className="commitment-intro">We aim to raise the standard of animal care through thoughtful sourcing, dependable service and a long-term view of quality.</p></div>
        <div className="commitment-list"><article className="commitment-item"><span className="commitment-index">01</span><div><h3>Quality at the Core</h3><p>Attention to product selection and quality control throughout our sourcing process.</p></div><span className="commitment-symbol">↗</span></article><article className="commitment-item"><span className="commitment-index">02</span><div><h3>Responsible Sourcing</h3><p>Building relationships with suppliers who share our interest in responsible agricultural practices.</p></div><span className="commitment-symbol">↗</span></article><article className="commitment-item"><span className="commitment-index">03</span><div><h3>Service with Purpose</h3><p>Helping customers find feeding solutions suited to their horses and individual requirements.</p></div><span className="commitment-symbol">↗</span></article></div>
      </div></section>

      <section className="contact-section section-shell" id="contact"><div className="contact-heading"><div className="section-number"><span>04</span><span className="section-number-line" />GET IN TOUCH</div><h2 className="section-heading">Let&apos;s build<br /><em>something good.</em></h2><p className="body-copy">Whether you are a breeder, trainer, horse owner or potential business partner, our team welcomes your enquiry.</p><a className="button-primary contact-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="button-icon" />Chat with us on WhatsApp <ArrowIcon className="icon-small" /></a></div>
        <div className="contact-details"><div className="contact-detail"><span className="contact-detail-label">PHONE &amp; WHATSAPP</span><a className="contact-detail-value" href={`tel:${company.phone}`}>{company.phoneDisplay}</a><a className="contact-detail-value" href={`tel:${company.secondPhone}`}>{company.secondPhoneDisplay}</a></div><div className="contact-detail"><span className="contact-detail-label">EMAIL</span><a className="contact-detail-value" href={`mailto:${company.email}`}>{company.email}<ArrowIcon className="icon-small" /></a></div><div className="contact-detail"><span className="contact-detail-label">POSTAL ADDRESS</span><p className="contact-detail-value">{company.address}</p></div><div className="contact-detail contact-group"><span className="contact-detail-label">A PART OF</span><a className="group-link" href="https://www.aicholdingkuwait.com" target="_blank" rel="noopener noreferrer">AIC Holding <ArrowIcon className="icon-small" /></a></div></div>
      </section>

      <footer className="site-footer"><div className="footer-main section-shell"><a href="#home" className="footer-brand" aria-label="Hays home"><Image src="/images/logo.png" alt="Hays Animal Feed Co." width={160} height={80} className="footer-logo" /></a><p className="footer-statement">Quality hay.<br /><em>Thoughtfully sourced.</em></p><div className="footer-links"><span className="footer-label">OUR NETWORK</span><a href="https://www.aicholdingkuwait.com" target="_blank" rel="noopener noreferrer">AIC Holding <ArrowIcon className="icon-tiny" /></a><a href="https://www.tradexkw.com" target="_blank" rel="noopener noreferrer">Tradex Co. <ArrowIcon className="icon-tiny" /></a></div><a href={`mailto:${company.email}`} className="footer-email">Get in touch <ArrowIcon className="icon-small" /></a></div><div className="footer-bottom section-shell"><p>© 2026 Hays Animal Feed Co. All rights reserved.</p><p>Designed &amp; Developed by <a href="https://www.tradexkw.com" target="_blank" rel="noopener noreferrer">Tradex Co.</a></p><a href="#home" className="back-to-top">BACK TO TOP ↑</a></div></footer>

      <aside className="floating-contact" aria-label="Quick contact"><a className="floating-button floating-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contact Hays on WhatsApp" title="WhatsApp"><WhatsAppIcon className="floating-icon" /></a><a className="floating-button" href={`mailto:${company.email}`} aria-label="Email Hays" title="Email"><MailIcon className="floating-icon" /></a><a className="floating-button" href={`tel:${company.phone}`} aria-label="Call Hays" title="Call"><PhoneIcon className="floating-icon" /></a></aside>
    </main>
  );
}
