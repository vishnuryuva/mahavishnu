const API_URL = import.meta.env.VITE_API_URL || ''

/**
 * Replace with your real back-end contract.
 * The original page posted a form (with a Laravel CSRF token) to /login.
 * A React SPA should talk to a JSON API (e.g. Laravel Sanctum / token auth).
 */
export async function login({ email, password, remember }) {
  if (!API_URL) {
    // No back-end configured yet: UI-only mode
    return { ok: false, notConfigured: true }
  }
  const res = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ email, password, remember }),
  })
  const data = await res.json().catch(() => ({}))
  return { ok: res.ok, data }
}

export async function recoverPassword({ email }) {
  if (!API_URL) return { ok: false, notConfigured: true }
  const res = await fetch(`${API_URL}/api/password/email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ email }),
  })
  return { ok: res.ok }
}
