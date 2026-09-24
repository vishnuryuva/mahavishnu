const API_URL = import.meta.env.VITE_API_URL || ''

/**
 * The original page POSTed { user_id } (the roll number) to /markview and the
 * server returned an HTML page. A React app needs JSON instead, so adjust the
 * URL and response shape to match your back-end.
 */
export async function getMarkSheet(rollNo) {
  if (!API_URL) return { ok: false, notConfigured: true }
  const res = await fetch(`${API_URL}/api/markview`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ user_id: rollNo }),
  })
  const data = await res.json().catch(() => null)
  return { ok: res.ok, data }
}
