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

  'ITI MASON AND BRICKLAYER': {
    courseCode: 'MACV01',
    subjects: [
      { name: 'COMMUNICATIVE ENGLISH & COMPUTER FUNDAMENTALS', max: 100, min: 40, code: 'MAB1' },
      { name: 'ENGINEERING DRAWING',                           max: 100, min: 40, code: 'MAB2' },
      { name: 'WORKSHOP CALCULATION & SCIENCE',                max: 100, min: 40, code: 'MAB3' },
      { name: 'MASONRY & BUILDING CONSTRUCTION',               max: 100, min: 40, code: 'MAB4' },
      { name: 'PRACTICAL 1',                                   max: 100, min: 40, code: 'MAB5' },
      { name: 'PRACTICAL II',                                  max: 100, min: 40, code: 'MAB6' },
      { name: 'PRACTICAL III',                                 max: 100, min: 40, code: 'MAB7' },
      { name: 'PRACTICAL IV',                                  max: 100, min: 40, code: 'MAB8' },
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

  AAA1098: {
  ...blank(),
  photo: '/students/AAA1098.jpg',
  certNo: 'TNNC20201098',
  documentDate: '30/05/2015',
  name: 'Y. SAHAYA SATHISH KUMAR',
  dob: '06-06-1983',
  duration: '2010 TO 2011',
  examDate: '09-06-2011',
  institution: 'Sri Maha Vishnu Institute',
  institutionDetail: 'TN / AAA152 RAMACHANDRA.S EDUCATIONAL INSTITUTE PERAMBALUR',
  certificateYears: '2010 TO 2011',
  placed: 'Distinction',
  theory: 'Distinction',
  practical: 'Distinction',
  department: 'ITI WELDER',
  marks: [82, 88, 79, 92, 85, 80, 90, 87],
},

  AAA2008: {
    ...blank(),
    photo: '/students/AAA2008.jpg',
    certNo: 'TNNC20202008',
    documentDate: '30/05/2005',
    name: 'MURUGAN PANDI',
    duration: '2004 TO 2005',
    examDate: '09-06-2005',
    institution: 'Sri Maha Vishnu Institute',
    institutionDetail: 'TN / AAA152 RAMACHANDRA.S EDUCATIONAL INSTITUTE PERAMBALUR',
    certificateYears: '2004 TO 2005',
    placed: 'First',
    theory: 'First',
    practical: 'First',
    department: 'ITI MASON AND BRICKLAYER',
    marks: [68, 72, 65, 70, 64, 74, 62, 68],
  },

  AAA2042: {
    ...blank(),
    photo: '/students/AAA2042.jpg',
    certNo: 'TNNC20202042',
    documentDate: '15/06/2010',
    name: 'VENGATESH',
    duration: '2009 TO 2010',
    examDate: '09-06-2010',
    institution: 'Sri Maha Vishnu Institute',
    institutionDetail: 'TN/2020478/ BHARANI COMMUNITY COLLEGE VADALUR',
    certificateYears: '2009 TO 2010',
    placed: 'Distinction',
    theory: 'Distinction',
    practical: 'Distinction',
    department: 'ITI MASON AND BRICKLAYER',
    marks: [82, 88, 79, 92, 85, 80, 90, 87],
  },

  AAA2027: {
    ...blank(),
    photo: '/students/AAA2027.jpg',
    certNo: 'TNNC20202027',
    documentDate: '15/06/2007',
    name: 'SRIKANTH THIRUMANI',
    duration: '2006 TO 2007',
    examDate: '09-06-2007',
    institution: 'Sri Maha Vishnu Institute',
    institutionDetail: 'REG/ NUM/TN/227077 SRI MADHURA EDUCATIONAL INSTITUTION PERAMBALUR',
    certificateYears: '2006 TO 2007',
    placed: 'Distinction',
    theory: 'Distinction',
    practical: 'Distinction',
    department: 'ITI MASON AND BRICKLAYER',
    marks: [84, 89, 78, 93, 86, 82, 91, 88],
  },

  AAA1994: {
    ...blank(),
    certNo: 'TNNC20201994',
    documentDate: '15/06/2004',
    name: 'SEKAR KARUPPAIAH',
    duration: '2003 TO 2004',
    examDate: '09-06-2004',
    institution: 'Sri Maha Vishnu Institute',
    institutionDetail: 'REG/AAA098 SR EDUCATIONAL INSTITUTIONS KARAIKUDI',
    certificateYears: '2003 TO 2004',
    placed: 'Distinction',
    theory: 'Distinction',
    practical: 'Distinction',
    department: 'ITI MASON AND BRICKLAYER',
    marks: [84, 89, 78, 93, 86, 82, 91, 88],
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
