import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { RiEyeLine, RiArrowRightLine } from 'react-icons/ri'
import { HiCheckCircle } from 'react-icons/hi'
import './Services.scss'

const services = [
  {
    img: '/images/home/hero-clinic.png',
    imgAlt: 'Comprehensive Eye Exam',
    imgPrompt: 'A professional optometrist performing a comprehensive eye examination on a patient using a modern slit-lamp biomicroscope in a clean, well-lit clinic. Soft teal and white tones, photorealistic, shallow depth of field, medical setting.',
    title: 'Comprehensive Eye Exam',
    desc: 'A thorough evaluation of your vision and overall eye health. We assess visual acuity, eye pressure, peripheral vision, and screen for common conditions such as myopia, hyperopia, and astigmatism.',
    includes: ['Visual acuity testing', 'Refraction assessment', 'Eye pressure check', 'Retinal evaluation', 'Color vision test'],
    duration: '45–60 minutes',
    price: 'Starting at ₱500',
  },
  {
    img: '/images/services/contact-lens-fitting.png',
    imgAlt: 'Contact Lens Fitting',
    imgPrompt: 'Close-up of a pair of clear contact lenses resting on a fingertip, with a blurred optometry clinic in the background. Natural lighting, teal accent tones, macro photography style, clean and clinical aesthetic.',
    title: 'Contact Lens Fitting',
    desc: 'Custom contact lens prescription and fitting tailored to your eyes. We evaluate the curvature, moisture, and health of your eyes to find the ideal lens for maximum comfort.',
    includes: ['Corneal topography', 'Trial lens fitting', 'Lens care counseling', 'Follow-up check', 'Brand recommendation'],
    duration: '30–45 minutes',
    price: 'Starting at ₱800',
  },
  {
    img: '/images/services/pediatric-eye-care.png',
    imgAlt: 'Pediatric Eye Care',
    imgPrompt: 'A friendly female optometrist with a warm smile conducting a vision test on a happy young child sitting in an exam chair, colorful eye chart visible in the background. Bright, welcoming clinic, soft natural light, warm tones.',
    title: 'Pediatric Eye Care',
    desc: 'Specialized eye care designed for children of all ages. Our child-friendly approach ensures accurate diagnosis while keeping young patients comfortable and engaged.',
    includes: ['Age-appropriate testing', 'Amblyopia screening', 'Vision therapy assessment', 'Myopia management', 'Parent consultation'],
    duration: '45–60 minutes',
    price: 'Starting at ₱600',
  },
  {
    img: '/images/services/laser-consultation.png',
    imgAlt: 'Laser Eye Consultation',
    imgPrompt: 'A state-of-the-art LASIK laser eye surgery machine in a modern operating room with blue laser light illuminating the equipment. Futuristic medical aesthetic, deep blue and white tones, photorealistic, no people.',
    title: 'Laser Consultation',
    desc: 'Expert assessment to determine your eligibility for laser vision correction procedures such as LASIK, PRK, or SMILE. We guide you through every step of the decision process.',
    includes: ['Corneal thickness measurement', 'Pupil dilation exam', 'Dry eye pre-screening', 'Candidacy report', 'Referral coordination'],
    duration: '60–90 minutes',
    price: 'Starting at ₱1,200',
  },
  {
    img: '/images/services/dry-eye-treatment.png',
    imgAlt: 'Dry Eye Treatment',
    imgPrompt: 'A soothing close-up of a human eye with a single glistening tear drop and visible moisture on the iris, surrounded by soft-focus abstract water ripple effects. Teal and aqua color palette, artistic macro photography, calm and clinical.',
    title: 'Dry Eye Treatment',
    desc: 'Comprehensive management of chronic dry eye disease, including meibomian gland evaluation, tear film analysis, and personalized treatment plans.',
    includes: ['Tear break-up time test', 'Meibography', 'Lid hygiene therapy', 'Prescription eye drops', 'Lifestyle counseling'],
    duration: '45–60 minutes',
    price: 'Starting at ₱900',
  },
  {
    img: '/images/services/glaucoma-screening.png',
    imgAlt: 'Glaucoma Screening',
    imgPrompt: 'An ophthalmologist reviewing a detailed OCT (optical coherence tomography) scan of an optic nerve on a large digital monitor in a dimly lit clinic. Medical data visualization aesthetic, teal and dark navy tones, photorealistic.',
    title: 'Glaucoma Screening',
    desc: 'Early detection and ongoing management of glaucoma through intraocular pressure testing, optic nerve imaging, and visual field assessments.',
    includes: ['IOP measurement', 'OCT optic nerve scan', 'Visual field test', 'Risk factor analysis', 'Management plan'],
    duration: '45–60 minutes',
    price: 'Starting at ₱1,000',
  },
]

export default function Services() {
  const fadeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    fadeRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el) }

  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-badge"><RiEyeLine /> Our Services</div>
          <h1 className="section-title">Complete Eye Care <em className="highlight">Services</em></h1>
          <p className="section-subtitle">From routine checkups to specialized treatments — we cover every aspect of your eye health with precision and care.</p>
        </div>
      </div>

      <section className="services-list">
        <div className="container">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-detail fade-up ${i % 2 !== 0 ? 'service-detail--reverse' : ''}`}
              ref={addRef}
            >
              <div className="service-detail__icon-wrap">
                <div className="service-detail__icon">
                  <img src={s.img} alt={s.imgAlt} />
                </div>
                <div className="service-detail__meta">
                  <span>⏱ {s.duration}</span>
                  <span>{s.price}</span>
                </div>
              </div>
              <div className="service-detail__content">
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <h4>What's Included:</h4>
                <ul>
                  {s.includes.map(item => (
                    <li key={item}><HiCheckCircle /> {item}</li>
                  ))}
                </ul>
                <Link to="/appointment" className="btn-primary">Book This Service <RiArrowRightLine /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="container services-cta__inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Our friendly staff will help you determine the right care plan during your first visit.</p>
          <div className="services-cta__actions">
            <Link to="/appointment" className="btn-white">Book a Consultation</Link>
            <Link to="/contact" className="btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}