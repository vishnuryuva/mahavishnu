import { useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import logo from '../assets/images/logo.png'
import { login } from '../services/auth'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function LoginForm({ onForgot }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const e = {}
    if (!email.trim()) e.email = 'This field is required.'
    else if (!EMAIL_RE.test(email.trim())) e.email = 'Please enter a valid email address.'
    if (!password) e.password = 'This field is required.'
    return e
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return

    setSubmitting(true)
    try {
      const result = await login({ email: email.trim(), password, remember })
      if (result.notConfigured) {
        swal('Front-end only', 'Set VITE_API_URL in .env to connect your back-end.', 'info')
      } else if (result.ok) {
        swal('Welcome!', 'Login successful.', 'success')
        // TODO: store token / navigate to dashboard
      } else {
        swal('Login failed', 'Invalid email or password.', 'error')
      }
    } catch {
      swal('Network error', 'Could not reach the server.', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div id="loginform" className="fade-in">
      <div className="logo">
        <p style={{ textAlign: 'center' }}>
          <img src={logo} alt="Maha Vishnu Council logo" style={{ width: 140 }} />
        </p>
        <h3 className="box-title mb-3" style={{ textAlign: 'center' }}>Sign In</h3>
      </div>

      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit} aria-label="Login" noValidate>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                autoFocus
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="Emailerr">
                {errors.email && <label className="invalid">{errors.email}</label>}
              </div>
            </div>

            <div className="form-group mb-4">
              <input
                className="form-control"
                type="password"
                name="password"
                id="inputPassword"
                placeholder="Password"
                maxLength={30}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="Passerr">
                {errors.password && <label className="invalid">{errors.password}</label>}
              </div>
            </div>

            <div className="form-group">
              <div className="d-flex">
                <div className="checkbox checkbox-info pt-0">
                  <input
                    id="checkbox-signup"
                    type="checkbox"
                    className="material-inputs chk-col-indigo"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <label htmlFor="checkbox-signup"> Remember me </label>
                </div>
                <div className="ml-auto">
                  <button
                    type="button"
                    id="to-recover"
                    className="text-muted float-right link-button"
                    onClick={onForgot}
                  >
                    <i className="fa fa-lock mr-1"></i> Forgot pwd?
                  </button>
                </div>
              </div>
            </div>

            <div className="form-group text-center mt-4">
              <div className="col-xs-12">
                <button
                  className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                  type="submit"
                  name="submit"
                  disabled={submitting}
                >
                  {submitting ? 'Please wait…' : 'Log In'}
                </button>
              </div>
            </div>
          </form>

          <div className="form-group text-center mt-4">
            <div className="col-xs-12">
              <Link to="/mark">
                <button
                  className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                  type="button"
                >
                  MarkSheet Download
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
