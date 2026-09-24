/* =====================================================================
 * 1) DEPARTMENTS  – subjects are fixed per department (hard-coded here).
 *    To add a department, copy the block below and change the key
 *    (the key is also printed as the "Course Name").
 * ===================================================================== */
export const DEPARTMENTS = {
  'ITI WELDER': {
    courseCode: 'MAEEO1',
    subjects: [
      { name: 'COMMUNICATIVE ENGLISH $ COMPUTER FUNDAMENTALS', max: 100, min: 40, code: 'MECH1' },
      { name: 'ENGINEERING DRAWING',                           max: 100, min: 40, code: 'MECH2' },
      { name: 'WORKSHOP CALCULATION $ SCIENCE',                max: 100, min: 40, code: 'MECH3' },
      { name: 'BASIC WELDER',                                  max: 100, min: 40, code: 'MECH4' },
      { name: 'PRACTICAL 1',                                   max: 100, min: 40, code: 'NURE05' },
      { name: 'PRACTICAL 11',                                  max: 100, min: 40, code: 'MECH6' },
      { name: 'PRACTICAL 111',                                 max: 100, min: 40, code: 'MECH7' },
      { name: 'PRACTICAL 1V',                                  max: 100, min: 40, code: 'MECH8' },
    ],
  },

  // 'ITI FITTER': {
  //   courseCode: 'XXXX',
  //   subjects: [
  //     { name: 'SUBJECT NAME', max: 100, min: 40, code: 'SUB1' },
  //   ],
  // },
}

/* =====================================================================
 * 2) STUDENTS – keys must be UPPERCASE register numbers.
 *
 *    department : must match a key in DEPARTMENTS above
 *    marks      : one mark per subject, in the same order as the subjects
 *    Empty fields stay blank on the pages.
 * ===================================================================== */
const blank = () => ({
  certNo: '',
  documentDate: '',
  name: '',
  dob: '',
  duration: '',
  examDate: '',
  institution: '',
  institutionDetail: '',
  certificateYears: '',
  placed: '',
  theory: '',
  practical: '',
  photo: '',        // empty = logo is used as a placeholder
  department: '',   // e.g. 'ITI WELDER'
  marks: [],        // e.g. [78, 85, 72, 90, 81, 76, 88, 84]
})

const STUDENTS = {
  // ---- SAMPLE STUDENT (fictional data – replace with the real details) ----
  AAA0098: {
    ...blank(),
    photo: '/students/AAA0098.jpg',
    certNo: 'TNNC20200098',
    documentDate: '30/05/2012',
    name: 'N. SENAPATHI MURALIKRISHNA',
    dob: '01-01-2000',
    duration: '2007 TO 2008',
    examDate: '09-06-2008',
    institution: 'Sri Maha Vishnu Institute',
    institutionDetail: 'TN / AAA152 RAMACHANDRA.S EDUCATIONAL INSTITUTE PERAMBALUR',
    certificateYears: '2007 TO 2008',
    placed: 'First',
    theory: 'First',
    practical: 'Distinction',
    department: 'ITI WELDER',
    marks: [78, 85, 72, 90, 81, 76, 88, 84],
  },

  AAA1904: { ...blank() },
}

/** Returns the full student record (subjects built from the department) or null. */
export function findStudent(input) {
  const regNo = String(input ?? '').trim().toUpperCase()
  const rec = STUDENTS[regNo]
  if (!rec) return null

  const dept = DEPARTMENTS[rec.department]
  const subjects = dept
    ? dept.subjects.map((sub, i) => ({ ...sub, marks: rec.marks?.[i] ?? '' }))
    : []

  return {
    regNo,
    ...rec,
    course: rec.department || '',
    courseCode: dept?.courseCode ?? '',
    subjects,
    hasMarks: (rec.marks ?? []).some((m) => m !== '' && m != null),
  }
}
