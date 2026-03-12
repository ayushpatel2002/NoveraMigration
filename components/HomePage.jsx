'use client';

import { useEffect, useRef } from 'react';

const services = [
  {
    title: 'Skilled Migration',
    text: 'End-to-end support for points-based and employer-sponsored pathways.',
  },
  {
    title: 'Student Visas',
    text: 'University admissions + visa support that aligns your study and PR goals.',
  },
  {
    title: 'Family & Partner Visas',
    text: 'Sensitive, accurate documentation support for smooth reunification.',
  },
  {
    title: 'Appeals & Complex Cases',
    text: 'Strategic handling of refusals and high-risk applications with precision.',
  },
];

const processSteps = [
  {
    title: 'Discovery Call',
    text: 'We assess your background and shortlist your best migration pathways.',
  },
  {
    title: 'Tailored Strategy',
    text: 'Get a personalized action plan with deadlines, documents, and options.',
  },
  {
    title: 'Application Delivery',
    text: 'We prepare, review, and submit your application with quality control.',
  },
  {
    title: 'Relocation Support',
    text: 'From pre-departure checklists to settlement guidance after approval.',
  },
];

const reviews = [
  {
    quote:
      '“Novera turned a complex process into a clear roadmap. We got our visa approved in one go.”',
    by: '— Arjun & Neha, Canada PR',
  },
  {
    quote:
      '“The team was proactive, fast, and incredibly detail-focused. Worth every dollar.”',
    by: '— Maria, UK Skilled Worker Visa',
  },
  {
    quote:
      '“I felt supported at every step — from university offer to student visa grant.”',
    by: '— Samuel, Australia Student Visa',
  },
];

export default function HomePage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const revealEls = pageRef.current?.querySelectorAll('.reveal') || [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = Number(entry.target.dataset.delay || 0);
          setTimeout(() => entry.target.classList.add('in'), delay);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    revealEls.forEach((el) => observer.observe(el));

    const counters = pageRef.current?.querySelectorAll('[data-count]') || [];
    const animateCounter = (el) => {
      const target = Number(el.dataset.count);
      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(target * eased);
        el.textContent = target > 999 ? value.toLocaleString() : String(value);
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const metricObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          metricObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach((counter) => metricObserver.observe(counter));

    const glowOne = pageRef.current?.querySelector('.bg-glow--one');
    const glowTwo = pageRef.current?.querySelector('.bg-glow--two');

    const handlePointerMove = (event) => {
      if (!glowOne || !glowTwo) return;
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      glowOne.style.transform = `translate(${x * 22}px, ${y * 18}px)`;
      glowTwo.style.transform = `translate(${x * -18}px, ${y * -24}px)`;
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      observer.disconnect();
      metricObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div ref={pageRef}>
      <div className="bg-glow bg-glow--one" />
      <div className="bg-glow bg-glow--two" />

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#" className="brand">
            Novera Migration
          </a>
          <nav>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact" className="btn btn--small">
              Book Consultation
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Trusted global migration partner</p>
              <h1>Your next country, career, and life — made simple.</h1>
              <p>
                We guide professionals, students, and families through visa strategy,
                paperwork, and relocation planning with a premium, stress-free experience.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn">
                  Get Started
                </a>
                <a href="#process" className="btn btn--ghost">
                  See How It Works
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <strong data-count="98">0</strong>
                  <span>Visa success rate</span>
                </div>
                <div>
                  <strong data-count="3200">0</strong>
                  <span>Clients supported</span>
                </div>
                <div>
                  <strong data-count="27">0</strong>
                  <span>Destination countries</span>
                </div>
              </div>
            </div>

            <div className="hero-card reveal" data-delay="200">
              <h3>Migration Roadmap</h3>
              <ul>
                <li>
                  <span>1</span>Profile assessment &amp; eligibility check
                </li>
                <li>
                  <span>2</span>Visa pathway strategy session
                </li>
                <li>
                  <span>3</span>Documentation and submission support
                </li>
                <li>
                  <span>4</span>Post-approval relocation planning
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">What we do</p>
              <h2>End-to-end migration services designed to reduce risk.</h2>
            </div>
            <div className="cards">
              {services.map((item, index) => (
                <article
                  key={item.title}
                  className="card reveal"
                  data-delay={Math.max(0, (index - 1) * 100)}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section section--alt">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Our process</p>
              <h2>Clear milestones. Full transparency. Zero guesswork.</h2>
            </div>
            <div className="timeline">
              {processSteps.map((item, index) => (
                <div key={item.title} className="timeline-item reveal" data-delay={index * 120}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Client stories</p>
              <h2>Real journeys, real approvals, real confidence.</h2>
            </div>
            <div className="reviews">
              {reviews.map((item, index) => (
                <blockquote key={item.by} className="review reveal" data-delay={index * 140}>
                  {item.quote}
                  <cite>{item.by}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section cta">
          <div className="container reveal">
            <h2>Ready to move with confidence?</h2>
            <p>Book a consultation and get a migration plan built around your goals.</p>
            <a className="btn" href="#">
              Book Your Consultation
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Novera Migration. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
