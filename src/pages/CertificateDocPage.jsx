import { Navigate, useParams } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { findStudent } from '../data/students'
import DocumentToolbar from '../components/DocumentToolbar'
import BannerImage from '../components/BannerImage'
import BannerFallback from '../components/BannerFallback'

const dash = (v) => (v ? v : '—')

export default function CertificateDocPage() {
  const { regNo } = useParams()
  const s = findStudent(regNo)
  if (!s) return <Navigate to="/mark" replace />

  return (
    <div className="doc-page">
      <div className="container">
        <DocumentToolbar />

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body printableArea">
              <div
                className="cert-frame"
                style={{ backgroundImage: 'url(/assets/images/background/weatherbg1.jpg)' }}
              >
                {/* Reg no / date */}
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '50%', textAlign: 'left' }}>
                        <span className="cert-blue" style={{ fontFamily: 'inherit' }}>
                          Reg. No. : {dash(s.certNo)}
                        </span>
                      </td>
                      <td style={{ width: '50%', textAlign: 'right' }}>
                        <span className="cert-blue" style={{ fontFamily: 'inherit' }}>
                          Date : {dash(s.documentDate)}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div style={{ textAlign: 'center' }}>
                  <BannerImage
                    src="/assets/images/certificate/header1.png"
                    fallback={<BannerFallback />}
                  />
                </div>

                {/* Student photo (logo placeholder until you set `photo`) */}
                <div style={{ textAlign: 'right' }}>
                  <img
                    src={s.photo || logo}
                    alt={s.name || 'Student'}
                    style={{ width: 200, border: '2px solid black', padding: 9 }}
                  />
                </div>

                <div style={{ height: 40 }} />

                <div className="cert-text">
                  <p>
                    <span className="cert-blue">This is to certify that</span>{' '}
                    <span className="cert-green">{dash(s.name)}</span>{' '}
                    <span className="cert-blue">has successfully completed the</span>
                  </p>
                  <p>
                    <span className="cert-green">{dash(s.course)} </span>
                    <span className="cert-blue">conducted in the year</span>{' '}
                    <span className="cert-green">{dash(s.certificateYears)} </span>
                    <span className="cert-blue">at</span>
                  </p>
                  <p>
                    <span className="cert-green">{dash(s.institutionDetail)} </span>
                    <span className="cert-blue">and</span>{' '}
                    <span className="cert-green">
                      has been Placed in {dash(s.placed)} Division with {dash(s.theory)}
                    </span>
                  </p>
                  <p>
                    <span className="cert-blue">Division in Theory and </span>
                    <span className="cert-green">{dash(s.practical)} </span>
                    <span className="cert-blue">division in practical</span>
                  </p>
                </div>

                <div style={{ height: 120 }} />
                <BannerImage src="/assets/images/certificate/footer1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
