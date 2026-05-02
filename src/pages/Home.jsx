import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { RiShieldCheckLine, RiArrowRightLine, RiEyeLine } from 'react-icons/ri'
import { FaStar } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'
import { MdOutlineVisibility, MdOutlineChildCare, MdOutlineFlashOn, MdOutlineWaterDrop } from 'react-icons/md'
import { TbEyeglass2 } from 'react-icons/tb'
import './Home.scss'

const stats = [
  { number: '12+', label: 'Years Experience' },
  { number: '8K+', label: 'Patients Served' },
  { number: '6', label: 'Expert Doctors' },
  { number: '98%', label: 'Satisfaction Rate' },
]

const services = [
  { icon: <MdOutlineVisibility />, title: 'Comprehensive Eye Exam', desc: 'Full diagnostic evaluation of your vision and eye health using the latest technology.' },
  { icon: <TbEyeglass2 />, title: 'Contact Lens Fitting', desc: 'Custom contact lens prescriptions and fittings for comfort and clarity.' },
  { icon: <MdOutlineChildCare />, title: 'Pediatric Eye Care', desc: 'Gentle and thorough eye care for children of all ages.' },
  { icon: <MdOutlineFlashOn />, title: 'Laser Consultation', desc: 'Expert guidance on laser vision correction options like LASIK.' },
  { icon: <MdOutlineWaterDrop />, title: 'Dry Eye Treatment', desc: 'Targeted relief for chronic dry eyes with proven treatment plans.' },
  { icon: <RiShieldCheckLine />, title: 'Glaucoma Screening', desc: 'Early detection and monitoring of glaucoma to protect your vision.' },
]

const testimonials = [
  { name: 'Catherine J. Inoc', role: 'Patient since 2022', text: 'LensLight completely changed my life. My prescription is perfect and the team is incredibly caring.', rating: 5 },
  { name: 'Frietz P. Menguito', role: 'Patient since 2023', text: 'Best eye clinic in Cebu! The doctors are thorough and the eyewear collection is amazing.', rating: 5 },
  { name: 'Juwana P. Baguio', role: 'Patient since 2021', text: 'My whole family comes here. The pediatric eye care for my kids has been exceptional, very caring and professional.', rating: 5 },
]

export default function Home() {
  const fadeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    fadeRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el) }

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg-circles">
          <div className="circle circle--1" />
          <div className="circle circle--2" />
          <div className="circle circle--3" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="section-badge">
              <RiEyeLine /> Trusted Eye Care Clinic
            </div>
            <h1 className="hero__title">
              See the World <br />
              <em className="highlight">Clearly & Brightly</em>
            </h1>
            <p className="hero__desc">
              LensLight Eye Care provides comprehensive eye exams, premium eyewear, and personalized treatment — all in a warm, modern clinic designed around your vision.
            </p>

            {/* Image moved here — only visible on mobile */}
            <div className="hero__visual-mobile">
              <div className="hero__card hero__card--main">
                <img src="/images/home/hero-clinic.png" alt="Your Vision, Our Priority" />
              </div>
              <div className="hero__card hero__card--stat">
                <span className="stat-num">98%</span>
                <span className="stat-label">Patient Satisfaction</span>
              </div>
              <div className="hero__card hero__card--badge">
                <HiCheckCircle />
                <span>Certified Clinic</span>
              </div>
            </div>

            <div className="hero__checks">
              {['Board-certified optometrists', 'State-of-the-art equipment', 'Family-friendly environment'].map(c => (
                <span key={c}><HiCheckCircle /> {c}</span>
              ))}
            </div>
            <div className="hero__actions">
              <Link to="/appointment" className="btn-primary">Book Appointment</Link>
              <Link to="/services" className="btn-outline">Our Services</Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__card hero__card--main">
              <img src="/images/home/hero-clinic.png" alt="Your Vision, Our Priority" />
            </div>
            <div className="hero__card hero__card--stat">
              <span className="stat-num">98%</span>
              <span className="stat-label">Patient Satisfaction</span>
            </div>
            <div className="hero__card hero__card--badge">
              <HiCheckCircle />
              <span>Certified Clinic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-bar__grid">
          {stats.map(s => (
            <div key={s.label} className="stats-bar__item">
              <span className="stats-bar__num">{s.number}</span>
              <span className="stats-bar__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section" ref={addRef}>
        <div className="container">
          <div className="section-header fade-up" ref={addRef}>
            <div className="section-badge"><TbEyeglass2 /> What We Offer</div>
            <h2 className="section-title">Expert Eye Care <em className="highlight">Services</em></h2>
            <p className="section-subtitle">From routine exams to specialized treatments, we cover every aspect of your eye health with precision and care.</p>
          </div>
          <div className="services-section__grid">
            {services.map((s, i) => (
              <div key={s.title} className="service-card fade-up" ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="service-card__link">Learn more <RiArrowRightLine /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container why-section__inner">
          <div className="why-section__visual fade-up" ref={addRef}>
            <div className="why-section__img-wrap">
              <div className="why-section__img-placeholder">
                <img src="/images/home/doctors-team.png" alt="LensLight Doctors Team" />
              </div>
              <div className="why-section__float-card">
                <HiCheckCircle />
                <div>
                  <strong>DOH Accredited</strong>
                  <span>Licensed & Certified</span>
                </div>
              </div>
            </div>
          </div>
          <div className="why-section__content fade-up" ref={addRef}>
            <div className="section-badge"><RiShieldCheckLine /> Why Choose Us</div>
            <h2 className="section-title">More Than Just <em className="highlight">Eye Care</em></h2>
            <p className="section-subtitle">We combine clinical excellence with a patient-first approach — because your eyes deserve the very best.</p>
            <ul className="why-section__list">
              {[
                ['Advanced Technology', 'Digital retinal imaging, OCT scans, and modern refraction systems.'],
                ['Experienced Team', '6 board-certified optometrists with decades of combined experience.'],
                ['Affordable Packages', 'Flexible payment plans and PhilHealth-accredited services.'],
                ['Quick Turnaround', 'Same-day prescription glasses available for select frames.'],
              ].map(([title, desc]) => (
                <li key={title}>
                  <HiCheckCircle className="check-icon" />
                  <div>
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary">Meet Our Team</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header fade-up" ref={addRef}>
            <div className="section-badge"><FaStar /> Patient Reviews</div>
            <h2 className="section-title">What Our Patients <em className="highlight">Say</em></h2>
          </div>
          <div className="testimonials-section__grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className="testimonial-card fade-up" ref={addRef} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="testimonial-card__stars">
                  {Array(t.rating).fill(0).map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready to See Clearly?</h2>
            <p>Schedule your comprehensive eye exam today. Walk-ins welcome!</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/appointment" className="btn-primary">Book Appointment</Link>
            <Link to="/contact" className="btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
