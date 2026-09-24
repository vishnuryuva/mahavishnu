import { Link, Navigate, useParams } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { findStudent } from '../data/students'
import MissingDataNotice from '../components/MissingDataNotice'

const th = { backgroundColor: 'black', color: '#fff' }

export default function StudentMarksPage() {
  const { regNo } = useParams()
  const student = findStudent(regNo)

  // Direct visit with an unknown reg no -> back to the search page
  if (!student) return <Navigate to="/mark" replace />

  const { subjects } = student
  const totalMax = subjects.reduce((sum, s) => sum + (Number(s.max) || 0), 0)
  const totalMin = subjects.reduce((sum, s) => sum + (Number(s.min) || 0), 0)
  const totalMarks = subjects.reduce((sum, s) => sum + (Number(s.marks) || 0), 0)

  return (
    <div style={{ background: '#eef5f9', minHeight: '100vh', padding: '20px' }}>
      <div className="container-fluid fade-in">
        <div className="row">
          <div className="col-md-12">
            <p style={{ textAlign: 'center' }}>
              <img src={logo} alt="Maha Vishnu Council logo" style={{ width: 120 }} />
            </p>

            <div className="card card-body printableArea">
              <h3><b>Student Marks View</b></h3>
              <hr />
              <MissingDataNotice student={student} />

              <div className="d-flex flex-wrap justify-content-end mb-3" style={{ gap: 8 }}>
                <Link to={`/marksheet/${student.regNo}`} target="_blank" rel="noreferrer" title="Mark Sheet Download">
                  <button className="btn btn-success waves-effect waves-light" type="button">
                    Mark Sheet Download
                  </button>
                </Link>
                <Link to={`/certificate/${student.regNo}`} target="_blank" rel="noreferrer" title="Certificate Download">
                  <button className="btn btn-inverse waves-effect waves-light" type="button">
                    Certificate Download
                  </button>
                </Link>
                <Link to="/mark">
                  <button
                    type="button"
                    className="btn btn-inverse waves-effect waves-light"
                    style={{ backgroundColor: 'red', border: 'red' }}
                  >
                    Back
                  </button>
                </Link>
              </div>

              <div className="row">
                <div className="col-md-12">
                  {[
                    ['reg', 'Reg No*', student.regNo],
                    ['name', 'Name*', student.name],
                    ['course', 'Course Name*', student.course],
                  ].map(([id, label, value]) => (
                    <div className="form-group row col-md-6" key={id}>
                      <label htmlFor={id} className="col-sm-3 text-right control-label col-form-label">
                        {label}
                      </label>
                      <div className="col-sm-9">
                        <input type="text" id={id} className="form-control" value={value} readOnly />
                      </div>
                    </div>
                  ))}

                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr className="tablecss">
                          <th style={th}>#</th>
                          <th style={th}>Subject</th>
                          <th style={th}>Max Marks</th>
                          <th style={th}>Min Marks</th>
                          <th style={th}>Marks</th>
                          <th style={th}>Sub Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subjects.length === 0 && (
                          <tr>
                            <td colSpan={6} className="text-center text-muted">
                              Marks not available yet.
                            </td>
                          </tr>
                        )}
                        {subjects.map((s, i) => (
                          <tr key={s.code ?? i}>
                            <td>{i + 1}</td>
                            <td>{s.name}</td>
                            <td>{s.max}</td>
                            <td>{s.min}</td>
                            <td>{s.marks}</td>
                            <td>{s.code}</td>
                          </tr>
                        ))}
                        <tr className="tablecss">
                          <td colSpan={2} style={th}>Grand Total</td>
                          <td style={th}>{subjects.length ? totalMax : ''}</td>
                          <td style={th}>{subjects.length ? totalMin : ''}</td>
                          <td style={th}>{student.hasMarks ? totalMarks : ''}</td>
                          <td style={th}></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
