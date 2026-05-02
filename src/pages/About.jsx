import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { RiEyeLine, RiArrowRightLine, RiMicroscopeLine, RiPlantLine } from 'react-icons/ri'
import { HiCheckCircle } from 'react-icons/hi'
import { FaUserMd } from 'react-icons/fa'
import './About.scss'

const doctors = [
  { name: 'Dr. Elena Cruz', role: 'Chief Optometrist', spec: 'Pediatric Eye Care & Low Vision', years: '12 years experience', image: '/images/about/doctor-elena-cruz.png' },
  { name: 'Dr. Marco Lim', role: 'Senior Optometrist', spec: 'Contact Lens & Refractive Surgery', years: '9 years experience', image: '/images/about/doctor-marco-lim.png' },
  { name: 'Dr. Sofia Reyes', role: 'Optometrist', spec: 'Dry Eye Disease & Ocular Nutrition', years: '6 years experience', image: '/images/about/doctor-sofia-reyes.png' },
  { name: 'Dr. Adrian Santos', role: 'Optometrist', spec: 'Glaucoma Management', years: '7 years experience', image: '/images/about/doctor-adrian-santos.png' },
]

const values = [
  { title: 'Patient-Centered', desc: 'Every decision we make puts your eye health and comfort first.', image: '/images/about/value-patient-centered.png' },
  { title: 'Clinical Excellence', desc: 'We use the latest diagnostic tools and evidence-based treatments.', image: '/images/about/value-clinical-excellence.png' },
  { title: 'Accessibility', desc: 'Quality eye care should be available and affordable to everyone.', image: '/images/about/value-accessibility.png' },
  { title: 'Integrity', desc: 'Honest recommendations — we only suggest what your eyes truly need.', image: '/images/about/value-integrity.png' },
]

export default function About() {
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
    <div className="about-page">
      {/* Page Header */}
      <div className="page-hero">
        <div className="container">
          <div className="section-badge"><RiEyeLine /> About Us</div>
          <h1 className="section-title">Our Story & <em className="highlight">Mission</em></h1>
          <p className="section-subtitle">Founded in 2013, LensLight Eye Care has been a trusted partner for families across Cebu — delivering clarity, comfort, and compassionate care.</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="about-story">
        <div className="container about-story__inner">
          <div className="about-story__visual fade-up" ref={addRef}>
            <div className="story-img-placeholder">
              <img src="/images/about/clinic-est2013.png" alt="LensLight Eye Care Est. 2013" />
            </div>
          </div>
          <div className="about-story__content fade-up" ref={addRef}>
            <div className="section-badge">Our Journey</div>
            <h2 className="section-title">Built on a Foundation of <em className="highlight">Trust</em></h2>
            <p>LensLight Eye Care was founded with a simple but powerful belief: that every person deserves access to high-quality, compassionate eye care. What began as a small clinic in Cordova, Cebu has grown into a fully equipped eye care center trusted by thousands of families.</p>
            <p>Over the years, we've invested in the latest diagnostic technology and assembled a team of passionate optometrists — all united by the goal of protecting and enhancing your vision.</p>
            <ul className="about-story__checks">
              {['DOH-Accredited Eye Care Facility', 'PhilHealth Accredited', 'Member of OPTAP Philippines', 'Certified by the Philippine Optometric Association'].map(c => (
                <li key={c}><HiCheckCircle /> {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mv-section">
        <div className="container mv-section__grid">

          <div className="mv-card fade-up" ref={addRef}>
            <div className="mv-card__icon"><RiMicroscopeLine /></div>
            <h3>Our Mission</h3>
            <p>To provide accessible, evidence-based eye care that empowers every patient to live life with clarity and confidence — using the most advanced technology and the most caring team in the region.</p>
          </div>

          <div className="mv-card fade-up" ref={addRef}>
            <div className="mv-card__icon"><RiPlantLine /></div>
            <h3>Our Vision</h3>
            <p>To be Cebu's most trusted eye care partner — a clinic where every patient feels seen, heard, and cared for. A place where cutting-edge medicine meets genuine human compassion.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header fade-up" ref={addRef}>
            <div className="section-badge">What We Stand For</div>
            <h2 className="section-title">Our Core <em className="highlight">Values</em></h2>
          </div>
          <div className="values-section__grid">
            {values.map((v, i) => (
              <div key={v.title} className="value-card fade-up" ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="value-card__img">
                  {v.image
                    ? <img src={v.image} alt={v.title} />
                    : <HiCheckCircle className="value-card__icon" />
                  }
                </div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="doctors-section">
        <div className="container">
          <div className="section-header fade-up" ref={addRef}>
            <div className="section-badge"><FaUserMd /> Our Team</div>
            <h2 className="section-title">Meet Our <em className="highlight">Doctors</em></h2>
            <p className="section-subtitle">Our team of board-certified optometrists brings expertise, warmth, and dedication to every appointment.</p>
          </div>
          <div className="doctors-section__grid">
            {doctors.map((d, i) => (
              <div key={d.name} className="doctor-card fade-up" ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="doctor-card__avatar">
                  {d.image
                    ? <img src={d.image} alt={d.name} />
                    : <FaUserMd />
                  }
                </div>
                <h3>{d.name}</h3>
                <span className="doctor-card__role">{d.role}</span>
                <p className="doctor-card__spec">{d.spec}</p>
                <span className="doctor-card__years">{d.years}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2>Ready to Meet Our Team?</h2>
          <p>Book your appointment and experience the LensLight difference firsthand.</p>
          <Link to="/appointment" className="btn-primary">Book Appointment <RiArrowRightLine /></Link>
        </div>
      </section>
    </div>
  )
}