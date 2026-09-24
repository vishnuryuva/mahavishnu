import { useState } from 'react'

/** Full-width banner image. If the file is missing, renders `fallback` instead. */
export default function BannerImage({ src, alt = '', fallback = null }) {
  const [failed, setFailed] = useState(false)
  if (failed) return fallback
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: '100%' }}
      onError={() => setFailed(true)}
    />
  )
}
