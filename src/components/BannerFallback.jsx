import logo from '../assets/images/logo.png'

/** Shown when header banner image is not present yet. */
export default function BannerFallback() {
  return (
    <div style={{ textAlign: 'center', margin: '10px 0 20px' }}>
      <img src={logo} alt="" style={{ width: 90 }} />
      <h3 style={{ marginTop: 8, fontWeight: 800, letterSpacing: 1 }}>
        MAHA VISHNU COUNCIL OF VOCATIONAL EDUCATIONAL TRAINING
      </h3>
    </div>
  )
}
