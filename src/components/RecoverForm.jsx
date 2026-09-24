import { useState } from 'react'
import swal from 'sweetalert'
import { recoverPassword } from '../services/auth'

export default function RecoverForm({ onBack }) {
  const [email, setEmail] = useState('')

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const result = await recoverPassword({ email })
    if (result.notConfigured) {
      swal('Front-end only', 'Set VITE_API_URL in .env to connect your back-end.', 'info')
    } else if (result.ok) {
      swal('Check your inbox', 'Reset instructions have been sent.', 'success')
    } else {
      swal('Oops', 'Could not send reset instructions.', 'error')
    }
  }

  return (
    <div id="recoverform" style={{ display: 'block' }} className="fade-in">
      <div className="logo">
        <h3 className="font-weight-medium mb-3">Recover Password</h3>
        <span className="text-muted">
          Enter your Email and instructions will be sent to you!
        </span>
      </div>
      <div className="row mt-3 form-material">
        <form className="col-12" onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-12">
              <input
                className="form-control"
                type="email"
                required
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <button className="btn btn-block btn-lg btn-primary text-uppercase" type="submit">
                Reset
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <button type="button" className="text-muted link-button" onClick={onBack}>
                ← Back to Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
