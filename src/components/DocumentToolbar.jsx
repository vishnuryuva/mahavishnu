import { Link } from 'react-router-dom'

/** Print + Back buttons (hidden when printing). */
export default function DocumentToolbar() {
  return (
    <div className="card card-body col-md-12 no-print">
      <div className="text-right">
        <button
          className="btn btn-info btn-rounded mr-2"
          type="button"
          onClick={() => window.print()}
        >
          <span><i className="fa fa-print"></i> Print</span>
        </button>
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
    </div>
  )
}
