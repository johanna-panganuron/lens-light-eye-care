import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <img src="/logo-only.png" alt="LensLight Eye Care Logo" />
              </div>
              <div>
                <span className="footer__logo-name">LensLight</span>
                <span className="footer__logo-sub">Eye Care</span>
              </div>
            </Link>
            <p className="footer__desc">
              Bringing clarity to your world with compassionate, expert eye care. Your vision is our mission.
            </p>
            <div className="footer__socials">
              <button className="footer__social"><FaFacebookF /></button>
              <button className="footer__social"><FaInstagram /></button>
              <button className="footer__social"><FaTwitter /></button>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/eyewear', 'Eyewear'], ['/appointment', 'Book Appointment']].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              {['Eye Examination', 'Contact Lens Fitting', 'Pediatric Eye Care', 'Laser Consultation', 'Prescription Eyewear', 'Dry Eye Treatment'].map(s => (
                <li key={s}><span>{s}</span></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact Info</h4>
            <ul className="footer__contact">
              <li><HiLocationMarker /><span>Day-As, Cordova, Cebu</span></li>
              <li><HiPhone /><span>+63 949 128 0100</span></li>
              <li><HiMail /><span>hello@lenslighteye.com</span></li>
              <li><HiClock /><span>Mon–Sat: 8AM – 6PM</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 LensLight Eye Care. All rights reserved.</p>
          <p>Developed by <a href="https://johannapanganuron.vercel.app" target="_blank" rel="noreferrer">Johanna B. Panganuron</a></p>
        </div>
      </div>
    </footer>
  )
}
