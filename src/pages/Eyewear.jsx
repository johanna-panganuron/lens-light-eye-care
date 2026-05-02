import { useState, useEffect } from 'react'
import { RiEyeLine } from 'react-icons/ri'
import { HiFilter } from 'react-icons/hi'
import './Eyewear.scss'

const eyewear = [
  { id: 1, name: 'EcoFrame Oval', brand: 'GreenVision', type: 'frames', price: '₱2,800', style: 'Oval', material: 'Eco-acetate', colors: ['Sage', 'Tortoise', 'Black'], image: '/images/eyewear/ecoframe-oval.png' },
  { id: 2, name: 'ClipLight Aviator', brand: 'LensLight', type: 'frames', price: '₱3,200', style: 'Aviator', material: 'Titanium', colors: ['Silver', 'Gold', 'Gunmetal'], image: '/images/eyewear/cliplight-aviator.png' },
  { id: 3, name: 'NatureRim Square', brand: 'BioLens', type: 'frames', price: '₱2,400', style: 'Square', material: 'Wood-resin', colors: ['Walnut', 'Maple', 'Ebony'], image: '/images/eyewear/naturerim-square.png' },
  { id: 4, name: 'SunShield Wrap', brand: 'SolarEdge', type: 'sunglasses', price: '₱3,600', style: 'Wrap', material: 'Nylon', colors: ['Matte Black', 'Forest Green'], image: '/images/eyewear/sunshield-wrap.png' },
  { id: 5, name: 'MintShade Round', brand: 'GreenVision', type: 'sunglasses', price: '₱2,900', style: 'Round', material: 'Bio-plastic', colors: ['Mint', 'Clear', 'Lavender'], image: '/images/eyewear/mintshade-round.png' },
  { id: 6, name: 'DayDrift Cat-Eye', brand: 'LensLight', type: 'sunglasses', price: '₱3,400', style: 'Cat-Eye', material: 'Cellulose acetate', colors: ['Tortoise', 'Cream', 'Black'], image: '/images/eyewear/daydrift-cateye.png' },
  { id: 7, name: 'AquaSoft Daily', brand: 'HydraLens', type: 'contacts', price: '₱1,200/box', style: 'Daily', material: 'Silicone hydrogel', colors: ['Clear'], image: '/images/eyewear/aquasoft-daily.png' },
  { id: 8, name: 'VividColor Monthly', brand: 'ChromaLens', type: 'contacts', price: '₱980/pair', style: 'Monthly', material: 'Hydrogel', colors: ['Hazel', 'Gray', 'Green', 'Brown'], image: '/images/eyewear/vividcolor-monthly.png' },
  { id: 9, name: 'BlueBlock Screen', brand: 'TechShield', type: 'frames', price: '₱3,100', style: 'Rectangle', material: 'TR-90', colors: ['Matte Black', 'Clear Blue', 'Gray'], image: '/images/eyewear/blueblock-screen.png' },
]

const filters = [
  { key: 'all', label: 'All Products' },
  { key: 'frames', label: 'Eyeglasses' },
  { key: 'sunglasses', label: 'Sunglasses' },
  { key: 'contacts', label: 'Contact Lenses' },
]

export default function Eyewear() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? eyewear : eyewear.filter(e => e.type === active)

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: 0.05 }
      )
      document.querySelectorAll('.eyewear-card').forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 50)
    return () => clearTimeout(timer)
  }, [active])

  return (
    <div className="eyewear-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-badge"><RiEyeLine /> Eyewear Collection</div>
          <h1 className="section-title">Premium Frames & <em className="highlight">Lenses</em></h1>
          <p className="section-subtitle">Curated eyewear from trusted brands — combining style, comfort, and optical precision.</p>
        </div>
      </div>

      <section className="eyewear-catalog">
        <div className="container">
          <div className="eyewear-catalog__filters">
            <HiFilter className="filter-icon" />
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn ${active === f.key ? 'active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label} ({f.key === 'all' ? eyewear.length : eyewear.filter(e => e.type === f.key).length})
              </button>
            ))}
          </div>

          <div className="eyewear-catalog__grid">
            {filtered.map((item, i) => (
              <div
                key={`${active}-${item.id}`}
                className="eyewear-card fade-up"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="eyewear-card__img">
                  {item.image
                    ? <img src={item.image} alt={item.name} />
                    : <div className="eyewear-card__img-fallback"><RiEyeLine /></div>
                  }
                  <span className="eyewear-card__type">{item.type}</span>
                </div>
                <div className="eyewear-card__body">
                  <div className="eyewear-card__brand">{item.brand}</div>
                  <h3>{item.name}</h3>
                  <div className="eyewear-card__meta">
                    <span>Style: {item.style}</span>
                    <span>Material: {item.material}</span>
                  </div>
                  <div className="eyewear-card__colors">
                    <span className="eyewear-card__colors-label">Colors:</span>
                    {item.colors.map(c => (
                      <span key={c} className="eyewear-card__color-chip">{c}</span>
                    ))}
                  </div>
                  <div className="eyewear-card__footer">
                    <span className="eyewear-card__price">{item.price}</span>
                    <button className="eyewear-card__btn">Inquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}