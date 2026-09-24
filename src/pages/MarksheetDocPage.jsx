import { Navigate, useParams } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { findStudent } from '../data/students'
import DocumentToolbar from '../components/DocumentToolbar'
import BannerImage from '../components/BannerImage'
import BannerFallback from '../components/BannerFallback'

const NBSP = '\u00A0' // keeps an empty cell the same height as a filled one
const BLANK_ROWS = 8  // number of empty subject rows when no marks are entered

function Field({ label, value, colSpan }) {
  return (
    <td colSpan={colSpan}>
      <span className="ms-label">{label}</span>
      <br />
      <span className="ms-value">{value || NBSP}</span>
    </td>
  )
}

export default function MarksheetDocPage() {
  const { regNo } = useParams()
  const s = findStudent(regNo)
  if (!s) return <Navigate to="/mark" replace />

  const hasSubjects = s.subjects.length > 0
  const rows = hasSubjects ? s.subjects : Array.from({ length: BLANK_ROWS }, () => ({}))
  const sum = (key) => {
    if (!hasSubjects) return ''
    if (key === 'marks' && !s.hasMarks) return ''
    return s.subjects.reduce((t, x) => t + (Number(x[key]) || 0), 0)
  }

  return (
    <div className="doc-page">
      <div className="container">
        <DocumentToolbar />

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body printableArea">
              <div className="ms-frame">
                {/* Reg no / date */}
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '50%', textAlign: 'left' }}>
                        <span className="ms-blue">Reg. No. : {s.certNo}</span>
                      </td>
                      <td style={{ width: '50%', textAlign: 'right' }}>
                        <span className="ms-blue" style={{ paddingRight: 71 }}>
                          Date : {s.documentDate}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Header banner */}
                <div style={{ textAlign: 'center', marginTop: 6, marginBottom: 16 }}>
                  <BannerImage
                    src="/assets/images/marksheet/header.png"
                    fallback={<BannerFallback />}
                  />
                </div>

                {/* Candidate details + photo */}
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td style={{ width: '80%' }}>
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <Field label="NAME OF CANDIDATE" value={s.name} />
                              <Field label="DATE OF BIRTH" value={s.dob} />
                              <Field label="DURATION" value={s.duration} />
                              <Field label="COURSE CODE" value={s.courseCode} />
                            </tr>
                            <tr>
                              <Field label="REGISTER NUMBER" value={s.regNo} />
                              <Field label="DATE" value={s.examDate} />
                              <td colSpan={2}>
                                <span className="ms-label">INSTITUTION NAME</span>
                                <br />
                                <span className="ms-value">{s.institution || NBSP}</span>
                                <br />
                                <span className="ms-value">{s.institutionDetail}</span>
                              </td>
                            </tr>
                            <tr>
                              <Field label="COURSE NAME" value={s.course} colSpan={4} />
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td>
                                <img src={s.photo || logo} alt={s.name || 'Student'} height="180" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Marks box (outer bordered cell holds the marks table + footer, like the original) */}
                <table className="table table-bordered ms-head">
                  <tbody>
                    <tr>
                      <td style={{ width: '100%' }}>
                        <table className="table table-bordered ms-head">
                          <thead>
                            <tr>
                              <th className="ms-head">SL.NO</th>
                              <th className="ms-head">SUBJECT</th>
                              <th className="ms-head">MAXMUM MARKS</th>
                              <th className="ms-head">MINIMUM MARKS</th>
                              <th className="ms-head">MARKS</th>
                              <th className="ms-head">SUB - CODE</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((x, i) => (
                              <tr key={x.code ?? i}>
                                <td>{i + 1}</td>
                                <td>{x.name || NBSP}</td>
                                <td>{x.max}</td>
                                <td>{x.min}</td>
                                <td>{x.marks}</td>
                                <td>{x.code}</td>
                              </tr>
                            ))}
                            <tr>
                              <td></td>
                              <td>GRAND TOTAL</td>
                              <td>{sum('max')}</td>
                              <td>{sum('min')}</td>
                              <td>{sum('marks')}</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>

                        <div style={{ height: 140 }} />
                        <BannerImage src="/assets/images/marksheet/footer.png" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
