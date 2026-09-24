import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import AuthLayout from '../components/AuthLayout'
import logo from '../assets/images/logo.png'
import { getMarkSheet } from '../services/marksheet'
import { findStudent } from '../data/students'

export default function RollNoPage() {
  const navigate = useNavigate()
  const [rollNo, setRollNo] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!rollNo.trim()) {
      setError('This field is required.')
      return
    }
    setError('')

    // Valid register number -> open the marks page
    const student = findStudent(rollNo)
    if (student) {
      navigate(`/marks/${student.regNo}`)
      return
    }

    // Otherwise: existing behaviour (API lookup)
    setLoading(true)
    setResult(null)
    try {
      const res = await getMarkSheet(rollNo.trim())
      if (res.notConfigured) {
        swal('Front-end only', 'Set VITE_API_URL in .env to connect your back-end.', 'info')
      } else if (res.ok && res.data) {
        setResult(res.data)
      } else {
        swal('Not found', 'No mark sheet found for this Roll No.', 'error')
      }
    } catch {
      swal('Network error', 'Could not reach the server.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <div className="fade-in">
        <p style={{ textAlign: 'center' }}>
          <img src={logo} alt="Maha Vishnu Council logo" style={{ width: 140 }} />
        </p>
        <h4 className="box-title mb-3" style={{ textAlign: 'center' }}>
          Mark Sheet Details
        </h4>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="user_id"
              name="user_id"
              placeholder="Roll No"
              autoFocus
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
            {error && <label className="invalid">{error}</label>}
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-info text-uppercase" type="submit" disabled={loading}>
              {loading ? 'Please wait…' : 'Submit'}
            </button>
            <Link to="/" className="btn btn-inverse waves-effect waves-light">
              Back
            </Link>
          </div>
        </form>

        {result && (
          <table className="table table-bordered mt-4">
            <tbody>
              {Object.entries(result).map(([key, value]) => (
                <tr key={key}>
                  <th style={{ textTransform: 'capitalize' }}>{key.replace(/_/g, ' ')}</th>
                  <td>{typeof value === 'object' ? JSON.stringify(value) : String(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AuthLayout>
  )
}
