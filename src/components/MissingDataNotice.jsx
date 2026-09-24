/** Shown when a student record has no details filled in yet. Hidden when printing. */
export default function MissingDataNotice({ student }) {
  if (student.name) return null
  return (
    <div className="alert alert-warning no-print" role="alert">
      No details have been added for <b>{student.regNo}</b> yet. Open{' '}
      <code>src/data/students.js</code> and fill in name, course, marks, etc.
    </div>
  )
}
