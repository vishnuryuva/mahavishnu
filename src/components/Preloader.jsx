export default function Preloader({ hidden }) {
  if (hidden) return null
  return (
    <div className="preloader">
      <div className="lds-ripple">
        <div className="lds-pos"></div>
        <div className="lds-pos"></div>
      </div>
    </div>
  )
}
